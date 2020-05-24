import { Meteor } from 'meteor/meteor';
import { Doctors, Hospitals, Pharmacies, Psychologists } from './Healthcare';

Meteor.publish('healthcare.doctors.all', function () {
  return Doctors.find();
});

Meteor.publish('healthcare.hospitals.all', function () {
  return Hospitals.find();
});

Meteor.publish('healthcare.pharmacies.all', function () {
  return Pharmacies.find();
});

Meteor.publish('healthcare.psychologists.all', function () {
  return Psychologists.find();
});