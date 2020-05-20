import { Meteor } from 'meteor/meteor';
import { Bars } from './Bars';
import { Query } from '../../google/Methods';
import { Type } from '../../google/GooglePlaceParameters';
import { startup, update, clear, placeholder } from '../../management/collections/Actions';

let query: Query = {
  type: Type.bar
}

Meteor.methods({
  'fooddrinks.bars.startup'() {
    this.unblock();
    startup(Bars, query);
  },

  async 'fooddrinks.bars.update'() {
    this.unblock();
    update(Bars, query);
  },

  'fooddrinks.bars.clear'() {
    clear(Bars);
  },

  'fooddrinks.bars.placeholder'() {
    placeholder(Bars);
  },
});