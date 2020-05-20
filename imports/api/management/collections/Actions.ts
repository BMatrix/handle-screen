import { Mongo } from 'meteor/mongo';
import { Collections } from './Collections';
import { json } from './PlaceholderResponse';
import { GooglePlaceSearch, Query } from '../../google/Methods';
import { PlacesNearbyResponse, Place } from '@googlemaps/google-maps-services-js';
import { ICollection } from './ICollections';

let daysBeforeUpdate = 7;

async function updateCollection(collection: Mongo.Collection<unknown>, query: Query) {
  let data = await GooglePlaceSearch(query);
  if (data != null) {
    let response: PlacesNearbyResponse = data;
    let collectionData: ICollection = {
      collection: collection.rawCollection().namespace,
      next_page_token: response.data.next_page_token,
      last_updated: new Date()
    }
    Collections.upsert({ collection: collection.rawCollection().namespace }, { $set: collectionData });
    response.data.results.forEach((item: Place) => { collection.upsert({ id: item.place_id }, item) })
  }
}

export function startup(collection: Mongo.Collection<unknown>, query: Query) {
  if (collection.find().count() == 0) {
    updateCollection(collection, query);
  }
}

export async function update(collection: Mongo.Collection<unknown>, query: Query) {
  let data: any = Collections.findOne({ collection: collection.rawCollection().namespace });
  if (data != undefined) {
    let x: ICollection = data;
    let date1: Date = new Date(x.last_updated);
    let date2: Date = new Date();
    let diff: number = date2.valueOf() - date1.valueOf();
    if (diff / 1000 / 60 / 60 / 24 >= daysBeforeUpdate) {
      updateCollection(collection, query);
    }
  }
}

export async function placeholder(collection: Mongo.Collection<unknown>) {
  collection.remove({});
  let data: any = json;
  data.results.forEach((item: any) => { collection.insert(item) })
}

export function clear(collection: Mongo.Collection<unknown>) {
  collection.remove({});
}