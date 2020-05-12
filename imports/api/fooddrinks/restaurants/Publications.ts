import { Meteor } from 'meteor/meteor';
import { Restaurants } from './Restaurants';

Meteor.publish('fooddrinks.restaurants.all', function () {
  return Restaurants.find();
});
