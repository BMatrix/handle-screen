import { Meteor } from 'meteor/meteor';
import { Arts, CityTours, History, Science } from './Museums';

Meteor.publish('museums.arts.all', function () {
  return Arts.find();
});

Meteor.publish('museums.citytours.all', function () {
  return CityTours.find();
});

Meteor.publish('museums.history.all', function () {
  return History.find();
});

Meteor.publish('museums.science.all', function () {
  return Science.find();
});