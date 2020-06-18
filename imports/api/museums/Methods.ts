import { Meteor } from 'meteor/meteor';
import { Arts, CityTours, History, Science } from './Museums';
import { PlacesQuery } from '../apis/google/Methods';
import { Type } from '../apis/google/GooglePlaceParameters';
import { startup, update, clear, placeholder, ICollectionMethodDetails } from '../management/collections/Actions';

export enum Collections {
  Arts,
  CityTours,
  History,
  Science
}

let artsQuery: PlacesQuery = {
  type: Type.museum,
  keyword: "art"
}
let cityToursQuery: PlacesQuery = {
  keyword: "city tour"
}
let historyQuery: PlacesQuery = {
  type: Type.museum,
  keyword: "history"
}
let scienceQuery: PlacesQuery = {
  type: Type.museum,
  keyword: "science"
}

let collectionMethodDetails: ICollectionMethodDetails[] = [
  {
    name: Collections.Arts,
    collection: Arts,
    placesQuery: artsQuery
  },
  {
    name: Collections.CityTours,
    collection: CityTours,
    placesQuery: cityToursQuery
  },
  {
    name: Collections.History,
    collection: History,
    placesQuery: historyQuery
  },
  {
    name: Collections.Science,
    collection: Science,
    placesQuery: scienceQuery
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