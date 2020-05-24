import { Meteor } from 'meteor/meteor';
import { Collections as fooddrinksCollections } from '../../api/fooddrinks/Methods';
import { Collections as healthcareCollections } from '../../api/healthcare/Methods';
import { Collections as museumsCollections } from '../../api/museums/Methods';
import '../../api/management/collections/Methods';

Meteor.call('fooddrinks.startup', fooddrinksCollections.Bakeries);
Meteor.call('fooddrinks.startup', fooddrinksCollections.Bars);
Meteor.call('fooddrinks.startup', fooddrinksCollections.Coffeeshops);
Meteor.call('fooddrinks.startup', fooddrinksCollections.Restaurants);
Meteor.call('fooddrinks.startup', fooddrinksCollections.Supermarkets);

Meteor.call('healthcare.startup', healthcareCollections.Doctors);
Meteor.call('healthcare.startup', healthcareCollections.Hospitals);
Meteor.call('healthcare.startup', healthcareCollections.Pharmacies);
Meteor.call('healthcare.startup', healthcareCollections.Psychologists);

Meteor.call('museums.startup', museumsCollections.Arts);
Meteor.call('museums.startup', museumsCollections.CityTours);
Meteor.call('museums.startup', museumsCollections.History);
Meteor.call('museums.startup', museumsCollections.Science);

//Meteor.call('fooddrinks.clear', fooddrinksCollections.Bakeries);
//Meteor.call('management.collections.clear');

//         milli  min  hour day
let time = 1000 * 60 * 60 * 24;
Meteor.setInterval(updateUpdate, time)
function updateUpdate() {
    Meteor.call('fooddrinks.update', fooddrinksCollections.Bakeries);
    Meteor.call('fooddrinks.update', fooddrinksCollections.Bars);
    Meteor.call('fooddrinks.update', fooddrinksCollections.Coffeeshops);
    Meteor.call('fooddrinks.update', fooddrinksCollections.Restaurants);
    Meteor.call('fooddrinks.update', fooddrinksCollections.Supermarkets);

    Meteor.call('healthcare.update', healthcareCollections.Doctors);
    Meteor.call('healthcare.update', healthcareCollections.Hospitals);
    Meteor.call('healthcare.update', healthcareCollections.Pharmacies);
    Meteor.call('healthcare.update', healthcareCollections.Psychologists);

    Meteor.call('museums.update', museumsCollections.Arts);
    Meteor.call('museums.update', museumsCollections.CityTours);
    Meteor.call('museums.update', museumsCollections.History);
    Meteor.call('museums.update', museumsCollections.Science);
}