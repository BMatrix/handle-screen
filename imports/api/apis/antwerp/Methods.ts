import { request, setDefaultRequestOptions } from '@esri/arcgis-rest-request';

import 'isomorphic-form-data';
const fetch = require('node-fetch');

export enum AntwerpInterfaces {
    PublicSportsTerrain,
    RunningTrack,
    SwimmingPool
}

export interface AntwerpQuery {
    link: string,
    interface: AntwerpInterfaces
}


export async function AntwerpGetData(query: AntwerpQuery) {
    setDefaultRequestOptions({ fetch })

    try {
        let response: any = await request(query.link);
        return response;
    }
    catch (e) {
        console.log(e.message);
        return null
    }


}