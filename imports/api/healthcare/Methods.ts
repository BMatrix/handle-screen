import { Meteor } from 'meteor/meteor';
import { Doctors, Hospitals, Pharmacies, Psychologists } from './Healthcare';
import { PlacesQuery } from '../apis/google/Methods';
import { Type } from '../apis/google/GooglePlaceParameters';
import { startup, update, clear, placeholder, ICollectionMethodDetails } from '../management/collections/Actions';

export enum Collections {
  Doctors,
  Hospitals,
  Pharmacies,
  Psychologists
}

let doctorsQuery: PlacesQuery = {
  type: Type.doctor
}
let hospitalsQuery: PlacesQuery = {
  type: Type.hospital
}
let pharmaciesQuery: PlacesQuery = {
  type: Type.pharmacy
}
let psychologistsQuery: PlacesQuery = {
  keyword: "psychologist"
}

let collectionMethodDetails: ICollectionMethodDetails[] = [
  {
    name: Collections.Doctors,
    collection: Doctors,
    placesQuery: doctorsQuery
  },
  {
    name: Collections.Hospitals,
    collection: Hospitals,
    placesQuery: hospitalsQuery
  },
  {
    name: Collections.Pharmacies,
    collection: Pharmacies,
    placesQuery: pharmaciesQuery
  },
  {
    name: Collections.Psychologists,
    collection: Psychologists,
    placesQuery: psychologistsQuery
  }
]

Meteor.methods({
  'healthcare.startup'(collection: Collections) {
    this.unblock();
    startup(collectionMethodDetails, collection);
  },

  'healthcare.update'(collection: Collections) {
    this.unblock();
    update(collectionMethodDetails, collection);
  },

  'healthcare.clear'(collection: Collections) {
    clear(collectionMethodDetails, collection);
  },

  'healthcare.placeholder'(collection: Collections) {
    placeholder(collectionMethodDetails, collection);
  },
});