import { Meteor } from 'meteor/meteor';
import '../../api/fooddrinks/restaurants/Methods';

Meteor.call('fooddrinks.restaurants.startup');