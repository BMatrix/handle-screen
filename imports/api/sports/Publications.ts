import { Meteor } from 'meteor/meteor';
import { BasketballCourts, FootballCourts, Gyms, RunningTracks, SwimmingPools, YogaStudios } from './Sports';

Meteor.publish('sports.basketballcourts.all', function () {
  return BasketballCourts.find();
});

Meteor.publish('sports.footballcourts.all', function () {
  return FootballCourts.find();
});

Meteor.publish('sports.gyms.all', function () {
  return Gyms.find();
});

Meteor.publish('sports.swimmingpools.all', function () {
  return RunningTracks.find();
});

Meteor.publish('sports.runningtracks.all', function () {
  return SwimmingPools.find();
});

Meteor.publish('sports.yogastudios.all', function () {
  return YogaStudios.find();
});