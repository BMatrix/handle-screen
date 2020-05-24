import { Mongo } from 'meteor/mongo';
import { Collections } from './Collections';
import { json } from './PlaceholderResponse';
import { GooglePlaceSearch, Query } from '../../google/Methods';
import { PlacesNearbyResponse, Place } from '@googlemaps/google-maps-services-js';

let daysBeforeUpdate = 0;

interface IManagementCollectionDetails {
  collection: string,
  next_page_token?: string,
  last_updated: Date
}

export interface ICollectionMethodDetails {
  name: number,
  collection: Mongo.Collection<unknown>,
  query: Query
}

async function updateCollection(collection: Mongo.Collection<unknown>, query: Query) {
  let data = await GooglePlaceSearch(query);

  if (data != null) {
    let response: PlacesNearbyResponse = data;
    response.data.results.forEach((item: Place) => { collection.upsert({ place_id: item.place_id }, { $set: item }) })

    let shortCollectionNamespace: string = getShortCollectionNamespace(collection);
    let collectionData: IManagementCollectionDetails = {
      collection: getShortCollectionNamespace(collection),
      next_page_token: response.data.next_page_token,
      last_updated: new Date()
    }
    Collections.upsert({ collection: shortCollectionNamespace }, { $set: collectionData });
  }
}


export function startup(collectionMethodDetails: ICollectionMethodDetails[], collection: number) {
  for (let i = 0; i < collectionMethodDetails.length; i++) {
    let collectionMethodDetail = collectionMethodDetails[i];
    if (collectionMethodDetail.name == collection) {
      if (collectionMethodDetail.collection.find().count() == 0) {
        updateCollection(collectionMethodDetail.collection, collectionMethodDetail.query);
      }
    }
  }
}

export async function update(collectionMethodDetails: ICollectionMethodDetails[], collection: number) {
  for (let i = 0; i < collectionMethodDetails.length; i++) {
    let collectionMethodDetail = collectionMethodDetails[i];
    if (collectionMethodDetail.name == collection) {
      let data: any = Collections.findOne({ collection: getShortCollectionNamespace(collectionMethodDetail.collection) });
      if (data != undefined) {
        let temp: IManagementCollectionDetails = data;
        let date1: Date = new Date(temp.last_updated);
        let date2: Date = new Date();
        let diff: number = date2.valueOf() - date1.valueOf();
        if (diff / 1000 / 60 / 60 / 24 >= daysBeforeUpdate) {
          updateCollection(collectionMethodDetail.collection, collectionMethodDetail.query);
        }
      }
    }
  }
}

export function clear(collectionMethodDetails: ICollectionMethodDetails[], collection: number) {
  for (let i = 0; i < collectionMethodDetails.length; i++) {
    let collectionMethodDetail = collectionMethodDetails[i];
    if (collectionMethodDetail.name == collection) {
      collectionMethodDetail.collection.remove({});
    }
  }
}

export async function placeholder(collectionMethodDetails: ICollectionMethodDetails[], collection: number) {
  for (let i = 0; i < collectionMethodDetails.length; i++) {
    let collectionMethodDetail = collectionMethodDetails[i];
    if (collectionMethodDetail.name == collection) {
      collectionMethodDetail.collection.remove({});
      let data: any = json;
      data.results.forEach((item: any) => { collectionMethodDetail.collection.insert(item) })
    }
  }
}


function getShortCollectionNamespace(collection: Mongo.Collection<unknown>) {
  let collectionNamespace: string = collection.rawCollection().namespace;
  let splitCollectionNamespace: string[] = collectionNamespace.split(".");
  let shortCollectionNamespace: string = `${splitCollectionNamespace[1]}.${splitCollectionNamespace[2]}`;
  return shortCollectionNamespace;
}