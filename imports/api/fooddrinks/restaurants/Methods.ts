import { Meteor } from 'meteor/meteor';
import { Restaurants } from './Restaurants';
import { Collections } from '../../management/collections/Collections';
import { json } from './PlaceholderResponse';
import { GooglePlaceSearch } from '../../google/Methods';
import { PlacesNearbyResponse } from '@googlemaps/google-maps-services-js';

Meteor.methods({
  async 'fooddrinks.restaurants.startup'() {
    this.unblock();
    if (Restaurants.find().count() == 0) {
      let data = await GooglePlaceSearch();
      if (data != null) {
        let response: PlacesNearbyResponse = data;
        let collectionData: object = {
          collection: 'fooddrinks.restaurants',
          next_page_token: response.data.next_page_token,
          last_updated: new Date().toUTCString()
        }
        Collections.insert(collectionData)
        response.data.results.forEach((item: any) => { Restaurants.insert(item) })
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