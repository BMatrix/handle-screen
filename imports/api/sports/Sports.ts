import { Mongo } from 'meteor/mongo';

export const BasketballCourts = new Mongo.Collection('sports.basketballcourts');
export const FootballCourts = new Mongo.Collection('sports.footballcourts');
export const Gyms = new Mongo.Collection('sports.gyms');
export const SwimmingPools = new Mongo.Collection('sports.swimmingpools');
export const RunningTracks = new Mongo.Collection('sports.runningtracks');
export const YogaStudios = new Mongo.Collection('sports.yogastudios');