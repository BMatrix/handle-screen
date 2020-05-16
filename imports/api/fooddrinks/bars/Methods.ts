import { Meteor } from 'meteor/meteor';
import { Bars } from './Bars';
import { Collections } from '../../management/collections/Collections';
import { json } from './PlaceholderResponse';
import { GooglePlaceSearch } from '../../google/Methods';
import { PlacesNearbyResponse, Place } from '@googlemaps/google-maps-services-js';
import { ICollection } from '../../management/collections/ICollections';

let daysBeforeUpdate = 15;

async function update() {
  let data = await GooglePlaceSearch();
  if (data != null) {
    let response: PlacesNearbyResponse = data;
    let collectionData: ICollection = {
      collection: 'fooddrinks.bars',
      next_page_token: response.data.next_page_token,
      last_updated: new Date()
    }
    Collections.upsert({ collection: 'fooddrinks.bars' }, { $set: collectionData });
    response.data.results.forEach((item: Place) => { Bars.upsert({ id: item.place_id }, item) })
  }
}

Meteor.methods({
  'fooddrinks.bars.startup'() {
    this.unblock();
    if (Bars.find().count() == 0) {
      update();
    }
  },

  async 'fooddrinks.bars.update'() {
    this.unblock();
    let data: any = Collections.findOne({ collection: 'fooddrinks.bars' });
    if (data != undefined) {
      let x: ICollection = data;
      let date1: Date = new Date(x.last_updated);
      let date2: Date = new Date();
      let diff: number = date2.valueOf() - date1.valueOf();
      if (diff / 1000 / 60 / 60 / 24 >= daysBeforeUpdate) {
        update();
      }
    }
  },

  'fooddrinks.bars.placeholder'() {
    Bars.remove({});
    let data: any = json;
    data.results.forEach((item: any) => { Bars.insert(item) })
  },

  'fooddrinks.bars.clear'() {
    Bars.remove({});
  },
});