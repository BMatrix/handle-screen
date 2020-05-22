import { Meteor } from 'meteor/meteor';
import { Bars, Restaurants } from './FoodDrinks';

Meteor.publish('fooddrinks.bars.all', function () {
  return Bars.find();
});

Meteor.publish('fooddrinks.restaurants.all', function () {
  return Restaurants.find();
});
