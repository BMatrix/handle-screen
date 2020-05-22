import { Mongo } from 'meteor/mongo';

export const Bars = new Mongo.Collection('fooddrinks.bars');
export const Restaurants = new Mongo.Collection('fooddrinks.restaurants');