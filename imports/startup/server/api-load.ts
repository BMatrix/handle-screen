import { Meteor } from 'meteor/meteor';
import { Collections } from '../../api/fooddrinks/Methods';
import '../../api/management/collections/Methods';

Meteor.call('fooddrinks.startup', Collections.Bars);
Meteor.call('fooddrinks.startup', Collections.Restaurants);

//Meteor.call('fooddrinks.update', Collections.Bars);
//Meteor.call('fooddrinks.update', Collections.Restaurants);

//Meteor.call('fooddrinks.clear', Collections.Bars);
//Meteor.call('fooddrinks.clear', Collections.Restaurants);
//Meteor.call('management.collections.clear');

//         milli  min  hour day
let time = 1000 * 60 * 60 * 24;
Meteor.setInterval(updateUpdate, time)
function updateUpdate() {
    Meteor.call('fooddrinks.update', Collections.Bars);
    Meteor.call('fooddrinks.update', Collections.Restaurants);
}