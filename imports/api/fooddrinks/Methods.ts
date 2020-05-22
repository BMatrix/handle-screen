import { Meteor } from 'meteor/meteor';
import { Bars, Restaurants } from './FoodDrinks';
import { Query } from '../google/Methods';
import { Type } from '../google/GooglePlaceParameters';
import { startup, update, clear, placeholder } from '../management/collections/Actions';

export enum Collections {
  Bars,
  Restaurants
}

let barQuery: Query = {
  type: Type.bar
}
let restaurantsQuery: Query = {
  type: Type.restaurant
}

let collectionDetails = [
  {
    name: Collections.Bars,
    collection: Bars,
    query: barQuery
  },
  {
    name: Collections.Restaurants,
    collection: Restaurants,
    query: restaurantsQuery
  }
]

Meteor.methods({
  'fooddrinks.startup'(collection: Collections) {
    this.unblock();
    for (let i = 0; i < collectionDetails.length; i++) {
      let collectionDetail = collectionDetails[i];
      if (collectionDetail.name == collection) {
        startup(collectionDetail.collection, collectionDetail.query)
      }
    }
  },

  async 'fooddrinks.update'(collection: Collections) {
    this.unblock();
    for (let i = 0; i < collectionDetails.length; i++) {
      let collectionDetail = collectionDetails[i];
      if (collectionDetail.name == collection) {
        update(collectionDetail.collection, collectionDetail.query)
      }
    }
  },

  'fooddrinks.clear'(collection: Collections) {
    for (let i = 0; i < collectionDetails.length; i++) {
      let collectionDetail = collectionDetails[i];
      if (collectionDetail.name == collection) {
        clear(collectionDetail.collection)
      }
    }
  },

  'fooddrinks.placeholder'(collection: Collections) {
    for (let i = 0; i < collectionDetails.length; i++) {
      let collectionDetail = collectionDetails[i];
      if (collectionDetail.name == collection) {
        placeholder(collectionDetail.collection)
      }
    }
  },
});