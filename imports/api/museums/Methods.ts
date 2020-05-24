import { Meteor } from 'meteor/meteor';
import { Arts, CityTours, History, Science } from './Museums';
import { Query } from '../google/Methods';
import { Type } from '../google/GooglePlaceParameters';
import { startup, update, clear, placeholder, ICollectionMethodDetails } from '../management/collections/Actions';

export enum Collections {
  Arts,
  CityTours,
  History,
  Science
}

let artsQuery: Query = {
  type: Type.museum,
  keyword: "art"
}
let cityToursQuery: Query = {
  keyword: "city tour"
}
let historyQuery: Query = {
  type: Type.museum,
  keyword: "history"
}
let scienceQuery: Query = {
  type: Type.museum,
  keyword: "science"
}

let collectionMethodDetails: ICollectionMethodDetails[] = [
  {
    name: Collections.Arts,
    collection: Arts,
    query: artsQuery
  },
  {
    name: Collections.CityTours,
    collection: CityTours,
    query: cityToursQuery
  },
  {
    name: Collections.History,
    collection: History,
    query: historyQuery
  },
  {
    name: Collections.Science,
    collection: Science,
    query: scienceQuery
  },
]

Meteor.methods({
  'museums.startup'(collection: Collections) {
    this.unblock();
    startup(collectionMethodDetails, collection)
  },

  'museums.update'(collection: Collections) {
    this.unblock();
    update(collectionMethodDetails, collection)
  },

  'museums.clear'(collection: Collections) {
    clear(collectionMethodDetails, collection)
  },

  'museums.placeholder'(collection: Collections) {
    placeholder(collectionMethodDetails, collection)
  },
});