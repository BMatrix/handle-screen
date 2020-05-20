import { Client, PlacesNearbyResponse, Language } from "@googlemaps/google-maps-services-js";
import { key } from './GooglePlacesApiKey';
import { PlacesNearbyRanking } from '@googlemaps/google-maps-services-js/dist/places/placesnearby';
import { Type } from "./GooglePlaceParameters";

const client = new Client({});
let latitude: number = 51.219106;
let longitude: number = 4.401615;
let radius: number = 100;

interface LooseObject {
    [key: string]: any
}

export interface Query {
    keyword?: string,
    type?: Type,
    pagetoken?: string
}

export async function GooglePlaceSearch(query: Query): Promise<PlacesNearbyResponse | null> {
    let parameters: LooseObject = {
        key: key,
        radius: radius,
        rankby: PlacesNearbyRanking.prominence,
        location: {
            lat: latitude,
            lng: longitude,
        },
        language: Language.en
    }
        
    if (query.keyword != undefined) {
        parameters["keyword"] = query.keyword;
    }
    if (query.type != undefined) {
        parameters["type"] = query.type;
    }
    if (query.pagetoken != undefined) {
        parameters["pagetoken"] = query.pagetoken;
    }
    let temp: any = parameters;
    
    let response: PlacesNearbyResponse = await client.placesNearby({
        params: temp
    });

    if (response.status.toString()[0] != '2') {
        console.log(response.status);
        console.log(response.data);

        return null;
    }
    return response;
}