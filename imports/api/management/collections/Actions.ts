import { Mongo } from 'meteor/mongo';
import { Collections } from './Collections';
import { json } from './PlaceholderResponse';
import { GooglePlaceSearch, Query } from '../../google/Methods';
import { PlacesNearbyResponse, Place } from '@googlemaps/google-maps-services-js';
import { ICollection } from './ICollections';

let daysBeforeUpdate = 0;

async function updateCollection(collection: Mongo.Collection<unknown>, query: Query) {
  let data = await GooglePlaceSearch(query);

  if (data != null) {
    let response: PlacesNearbyResponse = data;
    response.data.results.forEach((item: Place) => { collection.upsert({ place_id: item.place_id }, { $set: item }) })

    let shortCollectionNamespace: string = getShortCollectionNamespace(collection);
    let collectionData: ICollection = {
      collection: getShortCollectionNamespace(collection),
      next_page_token: response.data.next_page_token,
      last_updated: new Date()
    }
    Collections.upsert({ collection: shortCollectionNamespace }, { $set: collectionData });
  }
}


export function startup(collection: Mongo.Collection<unknown>, query: Query) {
  if (collection.find().count() == 0) {
    updateCollection(collection, query);
  }
}

export async function update(collection: Mongo.Collection<unknown>, query: Query) {
  let data: any = Collections.findOne({ collection: getShortCollectionNamespace(collection) });
  if (data != undefined) {
    let temp: ICollection = data;
    let date1: Date = new Date(temp.last_updated);
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


function getShortCollectionNamespace(collection: Mongo.Collection<unknown>) {
  let collectionNamespace: string = collection.rawCollection().namespace;
  let splitCollectionNamespace: string[] = collectionNamespace.split(".");
  let shortCollectionNamespace: string = `${splitCollectionNamespace[1]}.${splitCollectionNamespace[2]}`;
  return shortCollectionNamespace;
}