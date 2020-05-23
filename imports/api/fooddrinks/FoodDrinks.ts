import { Mongo } from 'meteor/mongo';

export const Bakeries = new Mongo.Collection('fooddrinks.bakeries');
export const Bars = new Mongo.Collection('fooddrinks.bars');
export const Coffeeshops = new Mongo.Collection('fooddrinks.coffeeshops');
export const Restaurants = new Mongo.Collection('fooddrinks.restaurants');
export const Supermarkets = new Mongo.Collection('fooddrinks.supermarkets');