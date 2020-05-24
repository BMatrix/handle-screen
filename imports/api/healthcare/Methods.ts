import { Meteor } from 'meteor/meteor';
import { Doctors, Hospitals, Pharmacies, Psychologists } from './Healthcare';
import { Query } from '../google/Methods';
import { Type } from '../google/GooglePlaceParameters';
import { startup, update, clear, placeholder, ICollectionMethodDetails } from '../management/collections/Actions';

export enum Collections {
  Doctors,
  Hospitals,
  Pharmacies,
  Psychologists
}

let doctorsQuery: Query = {
  type: Type.doctor
}
let hospitalsQuery: Query = {
  type: Type.hospital
}
let pharmaciesQuery: Query = {
  type: Type.pharmacy
}
let psychologistsQuery: Query = {
  keyword: "psychologist"
}

let collectionMethodDetails: ICollectionMethodDetails[] = [
  {
    name: Collections.Doctors,
    collection: Doctors,
    query: doctorsQuery
  },
  {
    name: Collections.Hospitals,
    collection: Hospitals,
    query: hospitalsQuery
  },
  {
    name: Collections.Pharmacies,
    collection: Pharmacies,
    query: pharmaciesQuery
  },
  {
    name: Collections.Psychologists,
    collection: Psychologists,
    query: psychologistsQuery
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