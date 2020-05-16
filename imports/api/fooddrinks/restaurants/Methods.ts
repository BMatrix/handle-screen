import { Meteor } from 'meteor/meteor';
import { Restaurants } from './Restaurants';
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
      collection: 'fooddrinks.restaurants',
      next_page_token: response.data.next_page_token,
      last_updated: new Date()
    }
    Collections.upsert({ collection: 'fooddrinks.restaurants' }, { $set: collectionData });
    response.data.results.forEach((item: Place) => { Restaurants.upsert({ id: item.place_id }, item) })
  }
}

Meteor.methods({
  'fooddrinks.restaurants.startup'() {
    this.unblock();
    if (Restaurants.find().count() == 0) {
      update();
    }
  },

  async 'fooddrinks.restaurants.update'() {
    this.unblock();
    let data: any = Collections.findOne({ collection: 'fooddrinks.restaurants' });
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

  'fooddrinks.restaurants.placeholder'() {
    Restaurants.remove({});
    let data: any = json;
    data.results.forEach((item: any) => { Restaurants.insert(item) })
  },

  'fooddrinks.restaurants.clear'() {
    Restaurants.remove({});
  },
});