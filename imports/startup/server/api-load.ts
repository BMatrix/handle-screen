import { Meteor } from 'meteor/meteor';
import '../../api/fooddrinks/restaurants/Methods';
import '../../api/management/collections/Methods';

Meteor.call('fooddrinks.restaurants.startup');
//Meteor.call('fooddrinks.restaurants.update');

//Meteor.call('fooddrinks.restaurants.clear');
//Meteor.call('management.collections.clear');

//         milli  min  hour day
let time = 1000 * 60 * 60 * 24;
Meteor.setInterval(updateUpdate, time)
function updateUpdate() {
    Meteor.call('fooddrinks.restaurants.update');
}