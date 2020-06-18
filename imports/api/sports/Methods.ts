import { Meteor } from 'meteor/meteor';
import { BasketballCourts, FootballCourts, Gyms, RunningTracks, SwimmingPools, YogaStudios } from './Sports';
import { PlacesQuery } from '../apis/google/Methods';
import { Type } from '../apis/google/GooglePlaceParameters';
import { startup, update, clear, placeholder, ICollectionMethodDetails } from '../management/collections/Actions';

import { AntwerpQuery, AntwerpInterfaces } from '../apis/antwerp/Methods';

export enum Collections {
  BasketballCourts,
  FootballCourts,
  Gyms,
  RunningTracks,
  SwimmingPools,
  YogaStudios
}

let basketballCourtsQuery: AntwerpQuery = {
  link: "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/629/query?where=CATEGORIE%3D'Basketbalveld'OR%20CATEGORIE%3D'Basket/%20trapveld'&outFields=*&outSR=4326&f=json",
  interface: AntwerpInterfaces.PublicSportsTerrain
}
let footballCourtsQuery: AntwerpQuery = {
  link: "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/629/query?where=CATEGORIE%3D'Trapveld'OR%20CATEGORIE%3D'Basket/%20trapveld'&outFields=*&outSR=4326&f=json",
  interface: AntwerpInterfaces.PublicSportsTerrain
}
let gymsQuery: PlacesQuery = {
  type: Type.gym
}
let runningTrackslQuery: AntwerpQuery = {
  link: 'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek5/MapServer/374/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  interface: AntwerpInterfaces.RunningTrack
}
let swimmingPoolsQuery: AntwerpQuery = {
  link: 'https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek6/MapServer/644/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  interface: AntwerpInterfaces.SwimmingPool
}
let yogaStudiosQuery: PlacesQuery = {
  keyword: "yoga studios"
}

let collectionMethodDetails: ICollectionMethodDetails[] = [
  {
    name: Collections.BasketballCourts,
    collection: BasketballCourts,
    antwerpQuery: basketballCourtsQuery
  },
  {
    name: Collections.FootballCourts,
    collection: FootballCourts,
    antwerpQuery: footballCourtsQuery
  },
  {
    name: Collections.Gyms,
    collection: Gyms,
    placesQuery: gymsQuery
  },
  {
    name: Collections.RunningTracks,
    collection: RunningTracks,
    antwerpQuery: runningTrackslQuery
  },
  {
    name: Collections.SwimmingPools,
    collection: SwimmingPools,
    antwerpQuery: swimmingPoolsQuery
  },
  {
    name: Collections.YogaStudios,
    collection: YogaStudios,
    placesQuery: yogaStudiosQuery
  },
]


Meteor.methods({
  'sports.startup'(collection: Collections) {
    this.unblock();
    startup(collectionMethodDetails, collection)
  },

  'sports.update'(collection: Collections) {
    this.unblock();
    update(collectionMethodDetails, collection)
  },

  'sports.clear'(collection: Collections) {
    clear(collectionMethodDetails, collection)
  },

  'sports.placeholder'(collection: Collections) {
    placeholder(collectionMethodDetails, collection)
  }
});
