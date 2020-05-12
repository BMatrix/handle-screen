import { HttpRequest, Request } from '../HttpRequest';
import { key } from './GooglePlacesApiKey';
import { Language, Type } from './GooglePlaceParameters';

let baseUrl: string = 'https://maps.googleapis.com/maps/api/place';

export enum PlaceParametersRanking {
    prominence = "prominence",
    distance = "distance"
}

export class Location {
    latitude: number;
    longitude: number;
    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
    toString() {
        return `${this.latitude.toFixed(7)},${this.longitude.toFixed(7)}`;
    }
}

export interface PlaceParameters {
    location: string,
    radius: number,
    keyword?: string,
    language?: Language,
    minprice?: number,
    maxprice?: number,
    name?: string,
    opennow?: null,
    rankby?: PlaceParametersRanking,
    type?: Type,
    pagetoken?: string,
}

export function PlaceSearch(parameters: PlaceParameters): any {
    let temp: any = parameters;
    temp.key = key;
    
    return HttpRequest(
        Request.GET,
        baseUrl + '/nearbysearch/json',
        parameters
    );
}