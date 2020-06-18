import { Meteor } from 'meteor/meteor';
import { Bakeries, Bars, Coffeeshops, Restaurants, Supermarkets } from './FoodDrinks';
import { PlacesQuery } from '../apis/google/Methods';
import { Type } from '../apis/google/GooglePlaceParameters';
import { startup, update, clear, placeholder, ICollectionMethodDetails } from '../management/collections/Actions';

export enum Collections {
  Bakeries,
  Bars,
  Coffeeshops,
  Restaurants,
  Supermarkets
}

let bakeriesQuery: PlacesQuery = {
  type: Type.bakery
}
let barsQuery: PlacesQuery = {
  type: Type.bar
}
let coffeeshopsQuery: PlacesQuery = {
  keyword: "coffeeshop"
}
let restaurantsQuery: PlacesQuery = {
  type: Type.restaurant
}
let supermarketsQuery: PlacesQuery = {
  type: Type.grocery_or_supermarket
}

let collectionMethodDetails: ICollectionMethodDetails[] = [
  {
    name: Collections.Bakeries,
    collection: Bakeries,
    placesQuery: bakeriesQuery
  },
  {
    name: Collections.Bars,
    collection: Bars,
    placesQuery: barsQuery
  },
  {
    name: Collections.Coffeeshops,
    collection: Coffeeshops,
    placesQuery: coffeeshopsQuery
  },
  {
    name: Collections.Restaurants,
    collection: Restaurants,
    placesQuery: restaurantsQuery
  },
  {
    name: Collections.Supermarkets,
    collection: Supermarkets,
    placesQuery: supermarketsQuery
  }
]

Meteor.methods({
  'fooddrinks.startup'(collection: Collections) {
    this.unblock();
    startup(collectionMethodDetails, collection);
  },

  'fooddrinks.update'(collection: Collections) {
    this.unblock();
    update(collectionMethodDetails, collection);
  },

  'fooddrinks.clear'(collection: Collections) {
    clear(collectionMethodDetails, collection);
  },

  'fooddrinks.placeholder'(collection: Collections) {
    placeholder(collectionMethodDetails, collection);
  },
});