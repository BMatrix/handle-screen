import { Meteor } from 'meteor/meteor';
import { Restaurants } from './Restaurants';
import { Query } from '../../google/Methods';
import { Type } from '../../google/GooglePlaceParameters';
import { startup, update, clear, placeholder } from '../../management/collections/Actions';

let query: Query = {
  type: Type.restaurant
}

Meteor.methods({
  'fooddrinks.restaurants.startup'() {
    this.unblock();
    startup(Restaurants, query);
  },

  async 'fooddrinks.restaurants.update'() {
    this.unblock();
    update(Restaurants, query);
  },

  'fooddrinks.restaurants.clear'() {
    clear(Restaurants);
  },

  'fooddrinks.restaurants.placeholder'() {
    placeholder(Restaurants);
  },
});