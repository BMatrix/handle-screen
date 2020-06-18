export interface IAntwerpRunningTrack {
    displayFieldName: string;
    fieldAliases:     FieldAliases;
    geometryType:     string;
    spatialReference: SpatialReference;
    fields:           Field[];
    features:         Feature[];
}

export interface Feature {
    attributes: Attributes;
    geometry:   Geometry;
}

export interface Attributes {
    OBJECTID:               number;
    tident:                 Tident;
    description:            null | string;
    GISID:                  number;
    Naam:                   string;
    LocatieID:              number;
    Label:                  string;
    Lus:                    null | string;
    Startpunt:              null | string;
    Lengte:                 number | null;
    Bewegwijzering:         null | string;
    Extra:                  null | string;
    Toegang:                null | string;
    Drinkfonteintjes:       null | string;
    Lockers:                null | string;
    Openbare_toiletten:     null | string;
    Kleedkamers_en_Douches: null | string;
    Verbindingsroute1:      null | string;
    Verbindingsroute2:      null | string;
    Verbindingsroute3:      null | string;
    Ondergrond:             null | string;
    Prijs:                  Prijs | null;
    SHAPE_Length:           number;
}

export enum Prijs {
    Gratis = "gratis",
}

export enum Tident {
    Loopparcours = "Loopparcours",
    Loopverbindingsroute = "Loopverbindingsroute",
    TidentLoopverbindingsroute = "Loopverbindingsroute\u000d\n",
}

export interface Geometry {
    paths: Array<Array<number[]>>;
}

export interface FieldAliases {
    OBJECTID:               string;
    tident:                 string;
    description:            string;
    GISID:                  string;
    Naam:                   string;
    LocatieID:              string;
    Label:                  string;
    Lus:                    string;
    Startpunt:              string;
    Lengte:                 string;
    Bewegwijzering:         string;
    Extra:                  string;
    Toegang:                string;
    Drinkfonteintjes:       string;
    Lockers:                string;
    Openbare_toiletten:     string;
    Kleedkamers_en_Douches: string;
    Verbindingsroute1:      string;
    Verbindingsroute2:      string;
    Verbindingsroute3:      string;
    Ondergrond:             string;
    Prijs:                  string;
    SHAPE_Length:           string;
}

export interface Field {
    name:    string;
    type:    Type;
    alias:   string;
    length?: number;
}

export enum Type {
    EsriFieldTypeDouble = "esriFieldTypeDouble",
    EsriFieldTypeInteger = "esriFieldTypeInteger",
    EsriFieldTypeOid = "esriFieldTypeOID",
    EsriFieldTypeString = "esriFieldTypeString",
}

export interface SpatialReference {
    wkid:       number;
    latestWkid: number;
}
