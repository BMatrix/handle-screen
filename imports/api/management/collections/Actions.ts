import { Mongo } from 'meteor/mongo';
import { Collections } from './Collections';
import { json } from './PlaceholderResponse';

import { GooglePlaceSearch, PlacesQuery } from '../../apis/google/Methods';
import { PlacesNearbyResponse, Place } from '@googlemaps/google-maps-services-js';

import { AntwerpQuery, AntwerpGetData, AntwerpInterfaces } from '../../apis/antwerp/Methods';
import { IAntwerpPublicSportsTerrain, Feature as a } from '../../apis/antwerp/IAntwerpPublicSportsTerrain';
import { IAntwerpRunningTrack, Feature as b } from '../../apis/antwerp/IAntwerpRunningTrack';
import { IAntwerpSwimmingPool, Feature as c } from '../../apis/antwerp/IAntwerpSwimmingPool';

let daysBeforeUpdate = 0;

interface IManagementCollectionDetails {
  collection: string,
  next_page_token?: string,
  last_updated: Date
}

export interface ICollectionMethodDetails {
  name: number,
  collection: Mongo.Collection<unknown>,
  placesQuery?: PlacesQuery,
  antwerpQuery?: AntwerpQuery,
}

function actualManagementCollection(collection: Mongo.Collection<unknown>, next_page_token?: string) {
  let shortCollectionNamespace: string = getShortCollectionNamespace(collection);
  let collectionData: IManagementCollectionDetails = {
    collection: getShortCollectionNamespace(collection),
    next_page_token: next_page_token,
    last_updated: new Date()
  }
  Collections.upsert({ collection: shortCollectionNamespace }, { $set: collectionData });
}

async function updateCollection(collection: Mongo.Collection<unknown>, placesQuery?: PlacesQuery, antwerpQuery?: AntwerpQuery) {
  if (placesQuery != undefined) {
    let response = await GooglePlaceSearch(placesQuery);

    if (response != null) {
      let data: PlacesNearbyResponse = response;
      actualManagementCollection(collection, data.data.next_page_token);

      data.data.results.forEach((item: Place) => { collection.upsert({ place_id: item.place_id }, { $set: item }) });
    }
  }
  else if (antwerpQuery != undefined) {
    let response = await AntwerpGetData(antwerpQuery);

    if (response != null) {
      actualManagementCollection(collection)
      switch (antwerpQuery.interface) {
        case AntwerpInterfaces.PublicSportsTerrain:
          let publicSportsTerrain: IAntwerpPublicSportsTerrain = response;
          publicSportsTerrain.features.forEach((item: a) => { collection.upsert({ attributes: { GISID: item.attributes.GISID } }, { $set: item }) });
          break;
        case AntwerpInterfaces.RunningTrack:
          let runningTrack: IAntwerpRunningTrack = response;
          runningTrack.features.forEach((item: b) => { collection.upsert({ attributes: { GISID: item.attributes.GISID } }, { $set: item }) });
          break;
        case AntwerpInterfaces.SwimmingPool:
          let swimmingPool: IAntwerpSwimmingPool = response;
          swimmingPool.features.forEach((item: c) => { collection.upsert({ attributes: { GISID: item.attributes.id } }, { $set: item }) });
          break;
        default:
          return null;
          break;
      }
    }
  }
}


export function startup(collectionMethodDetails: ICollectionMethodDetails[], collection: number) {
  for (let i = 0; i < collectionMethodDetails.length; i++) {
    let collectionMethodDetail = collectionMethodDetails[i];
    if (collectionMethodDetail.name == collection) {
      if (collectionMethodDetail.collection.find().count() == 0) {
        updateCollection(collectionMethodDetail.collection, collectionMethodDetail.placesQuery, collectionMethodDetail.antwerpQuery);
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
          updateCollection(collectionMethodDetail.collection, collectionMethodDetail.placesQuery, collectionMethodDetail.antwerpQuery);
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