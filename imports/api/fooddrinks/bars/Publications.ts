import { Meteor } from 'meteor/meteor';
import { Bars } from './Bars';

Meteor.publish('fooddrinks.bars.all', function () {
  return Bars.find();
});
