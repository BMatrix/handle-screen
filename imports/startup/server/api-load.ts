import { Meteor } from 'meteor/meteor';
import '../../api/fooddrinks/restaurants/Methods';
import '../../api/management/collections/Methods';

Meteor.call('fooddrinks.restaurants.startup');
//Meteor.call('fooddrinks.restaurants.clear');
//Meteor.call('management.collections.clear');
