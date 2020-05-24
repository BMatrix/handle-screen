import { Mongo } from 'meteor/mongo';

export const Pharmacies = new Mongo.Collection('healthcare.pharmacies');
export const Doctors = new Mongo.Collection('healthcare.doctors');
export const Hospitals = new Mongo.Collection('healthcare.hospitals');
export const Psychologists = new Mongo.Collection('healthcare.psychologists');
