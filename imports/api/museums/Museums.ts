import { Mongo } from 'meteor/mongo';

export const Arts = new Mongo.Collection('museums.arts');
export const CityTours = new Mongo.Collection('museums.citytours');
export const History = new Mongo.Collection('museums.history');
export const Science = new Mongo.Collection('museums.science');