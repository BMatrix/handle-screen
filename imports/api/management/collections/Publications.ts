import { Meteor } from 'meteor/meteor';
import { Collections } from './Collections';

Meteor.publish('management.collections.all', function () {
  return Collections.find();
});
