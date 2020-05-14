import { Client, Status, PlacesNearbyResponse, Place, Language } from "@googlemaps/google-maps-services-js";
import { key } from './GooglePlacesApiKey';
import { PlacesNearbyRanking } from '@googlemaps/google-maps-services-js/dist/places/placesnearby';
import { Type } from "./GooglePlaceParameters";

const client = new Client({});
let latitude: number = 51.219106;
let longitude: number = 4.401615;

export async function GooglePlaceSearch(): Promise<PlacesNearbyResponse|null> {
    let response: PlacesNearbyResponse = await client.placesNearby({
        params: {
            key: key,
            radius: 100,
            rankby: PlacesNearbyRanking.prominence,
            location: {
                lat: latitude,
                lng: longitude,
            },
            type: Type.restaurant,
        }
    });

    if(response.status.toString()[0] != '2'){
        console.log(response.status);
        console.log(response.data);
        
        return null;
    }
    return response;
}