export interface IResponse {
    html_attributions: any[];
    next_page_token:   string;
    results:           IResult[];
    status:            string;
}

export interface IResult {
    geometry:           IGeometry;
    icon:               string;
    id:                 string;
    name:               string;
    opening_hours:      IOpeningHours;
    photos:             IPhoto[];
    place_id:           string;
    plus_code:          IPlusCode;
    rating:             number;
    reference:          string;
    scope:              Scope;
    types:              Type[];
    user_ratings_total: number;
    vicinity:           string;
    price_level?:       number;
}

export interface IGeometry {
    location: ILocation;
    viewport: IViewport;
}

export interface ILocation {
    lat: number;
    lng: number;
}

export interface IViewport {
    northeast: ILocation;
    southwest: ILocation;
}

export interface IOpeningHours {
    open_now: boolean;
}

export interface IPhoto {
    height:            number;
    html_attributions: string[];
    photo_reference:   string;
    width:             number;
}

export interface IPlusCode {
    compound_code: string;
    global_code:   string;
}

export enum Scope {
    Google = "GOOGLE",
}

export enum Type {
    Bar = "bar",
    Establishment = "establishment",
    Food = "food",
    Lodging = "lodging",
    Museum = "museum",
    PointOfInterest = "point_of_interest",
    Restaurant = "restaurant",
    TravelAgency = "travel_agency",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toIResponse(json: string): IResponse {
        return cast(JSON.parse(json), r("IResponse"));
    }

    public static iResponseToJson(value: IResponse): string {
        return JSON.stringify(uncast(value, r("IResponse")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "IResponse": o([
        { json: "html_attributions", js: "html_attributions", typ: a("any") },
        { json: "next_page_token", js: "next_page_token", typ: "" },
        { json: "results", js: "results", typ: a(r("IResult")) },
        { json: "status", js: "status", typ: "" },
    ], false),
    "IResult": o([
        { json: "geometry", js: "geometry", typ: r("IGeometry") },
        { json: "icon", js: "icon", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "opening_hours", js: "opening_hours", typ: r("IOpeningHours") },
        { json: "photos", js: "photos", typ: a(r("IPhoto")) },
        { json: "place_id", js: "place_id", typ: "" },
        { json: "plus_code", js: "plus_code", typ: r("IPlusCode") },
        { json: "rating", js: "rating", typ: 3.14 },
        { json: "reference", js: "reference", typ: "" },
        { json: "scope", js: "scope", typ: r("Scope") },
        { json: "types", js: "types", typ: a(r("Type")) },
        { json: "user_ratings_total", js: "user_ratings_total", typ: 0 },
        { json: "vicinity", js: "vicinity", typ: "" },
        { json: "price_level", js: "price_level", typ: u(undefined, 0) },
    ], false),
    "IGeometry": o([
        { json: "location", js: "location", typ: r("ILocation") },
        { json: "viewport", js: "viewport", typ: r("IViewport") },
    ], false),
    "ILocation": o([
        { json: "lat", js: "lat", typ: 3.14 },
        { json: "lng", js: "lng", typ: 3.14 },
    ], false),
    "IViewport": o([
        { json: "northeast", js: "northeast", typ: r("ILocation") },
        { json: "southwest", js: "southwest", typ: r("ILocation") },
    ], false),
    "IOpeningHours": o([
        { json: "open_now", js: "open_now", typ: true },
    ], false),
    "IPhoto": o([
        { json: "height", js: "height", typ: 0 },
        { json: "html_attributions", js: "html_attributions", typ: a("") },
        { json: "photo_reference", js: "photo_reference", typ: "" },
        { json: "width", js: "width", typ: 0 },
    ], false),
    "IPlusCode": o([
        { json: "compound_code", js: "compound_code", typ: "" },
        { json: "global_code", js: "global_code", typ: "" },
    ], false),
    "Scope": [
        "GOOGLE",
    ],
    "Type": [
        "bar",
        "establishment",
        "food",
        "lodging",
        "museum",
        "point_of_interest",
        "restaurant",
        "travel_agency",
    ],
};
