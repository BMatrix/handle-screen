import { Meteor } from 'meteor/meteor';
import { Restaurants } from './Restaurants';
import { Collections } from '../../management/collections/Collections';
import { PlaceSearch, Location, PlaceParameters, PlaceParametersRanking } from '../../google/GooglePlaceRequests';
import { Language, Type } from '../../google/GooglePlaceParameters';
import { Convert, IGooglePlaceResponse } from '../../google/IGooglePlaceResponse';
import { json } from './PlaceholderResponse';

let latitude: number = 51.219106;
let longitude: number = 4.401615;

let query: PlaceParameters = {
  location: new Location(latitude, longitude).toString(),
  radius: 100,
  type: Type.restaurant,
}

Meteor.methods({
  'fooddrinks.restaurants.startup'() {
    this.unblock();
    if (Restaurants.find().count() == 0) {
      let data: any = PlaceSearch(query);
      if (data != false) {
        let response: IGooglePlaceResponse = Convert.toIGooglePlaceResponse(data);
        let collectionData = {
          collection: 'fooddrinks.restaurant',
          next_page_token: response.next_page_token,
          last_updated: new Date().toUTCString()
        }
        Collections.insert(collectionData)
        response.results.forEach((item: any) => { Restaurants.insert(item) })
      }
    }
  },

  'fooddrinks.restaurants.placeholder'() {
    Restaurants.remove({});
    let data: any = json;
    data.results.forEach((item: any) => { Restaurants.insert(item) })
  },
});