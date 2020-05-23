import { Meteor } from 'meteor/meteor';
import { Bakeries, Bars, Coffeeshops, Restaurants, Supermarkets } from './FoodDrinks';

Meteor.publish('fooddrinks.bakeries.all', function () {
  return Bakeries.find();
});

Meteor.publish('fooddrinks.bars.all', function () {
  return Bars.find();
});

Meteor.publish('fooddrinks.coffeeshops.all', function () {
  return Coffeeshops.find();
});

Meteor.publish('fooddrinks.restaurants.all', function () {
  return Restaurants.find();
});

Meteor.publish('fooddrinks.supermarkets.all', function () {
  return Supermarkets.find();
});
