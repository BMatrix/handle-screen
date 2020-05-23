import { Meteor } from 'meteor/meteor';
import { Bakeries, Bars, Coffeeshops, Restaurants, Supermarkets } from './FoodDrinks';
import { Query } from '../google/Methods';
import { Type } from '../google/GooglePlaceParameters';
import { startup, update, clear, placeholder } from '../management/collections/Actions';

export enum Collections {
  Bakeries,
  Bars,
  Coffeeshops,
  Restaurants,
  Supermarkets
}

let bakeriesQuery: Query = {
  type: Type.bakery
}
let barsQuery: Query = {
  type: Type.bar
}
let coffeeshopsQuery: Query = {
  keyword: "coffeeshop"
}
let restaurantsQuery: Query = {
  type: Type.restaurant
}
let supermarketsQuery: Query = {
  type: Type.grocery_or_supermarket
}

let collectionDetails = [
  {
    name: Collections.Bakeries,
    collection: Bakeries,
    query: bakeriesQuery
  },
  {
    name: Collections.Bars,
    collection: Bars,
    query: barsQuery
  },
  {
    name: Collections.Coffeeshops,
    collection: Coffeeshops,
    query: coffeeshopsQuery
  },
  {
    name: Collections.Restaurants,
    collection: Restaurants,
    query: restaurantsQuery
  },
  {
    name: Collections.Supermarkets,
    collection: Supermarkets,
    query: supermarketsQuery
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