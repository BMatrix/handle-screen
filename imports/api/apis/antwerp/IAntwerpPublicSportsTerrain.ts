export interface IAntwerpPublicSportsTerrain {
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
    OBJECTID:        number;
    GISID:           string;
    NAAM:            string;
    CATEGORIE:       null | string;
    STRAAT:          null | string;
    HUISNR:          null | string;
    POSTCODE:        string;
    DISTRICT:        District | null;
    BEGINDATUM:      number | null;
    TOESTELLEN:      number | null;
    FINANCIERING:    Financiering | null;
    OPMERKING:       Opmerking | null;
    FOTO1:           null;
    NAAM_FOTO1:      null;
    FENIKS_ID:       null | string;
    COSMO_ID:        null | string;
    FENIKS_ID_GETAL: number | null;
    X_COORD:         number | null;
    Y_COORD:         number | null;
    SHAPE_Length:    number;
    SHAPE_Area:      number;
}

export enum District {
    Antwerpen = "Antwerpen",
    BeZaLi = "BeZaLi",
    Berchem = "Berchem",
    Borgerhout = "Borgerhout",
    Deurne = "Deurne",
    Ekeren = "Ekeren",
    Hoboken = "Hoboken",
    Merksem = "Merksem",
    Wilrijk = "Wilrijk",
}

export enum Financiering {
    Bovenlokaal = "Bovenlokaal",
    Lokaal = "Lokaal",
}

export enum Opmerking {
    Behouden = "BEHOUDEN",
    BuitenAntwerpen = "buiten Antwerpen",
    OnderhoudDienstencentrum = "onderhoud dienstencentrum",
}

export interface Geometry {
    rings: Array<Array<number[]>>;
}

export interface FieldAliases {
    OBJECTID:        string;
    GISID:           string;
    NAAM:            string;
    CATEGORIE:       string;
    STRAAT:          string;
    HUISNR:          string;
    POSTCODE:        string;
    DISTRICT:        string;
    BEGINDATUM:      string;
    TOESTELLEN:      string;
    FINANCIERING:    string;
    OPMERKING:       string;
    FOTO1:           string;
    NAAM_FOTO1:      string;
    FENIKS_ID:       string;
    COSMO_ID:        string;
    FENIKS_ID_GETAL: string;
    X_COORD:         string;
    Y_COORD:         string;
    SHAPE_Length:    string;
    SHAPE_Area:      string;
}

export interface Field {
    name:    string;
    type:    string;
    alias:   string;
    length?: number;
}

export interface SpatialReference {
    wkid:       number;
    latestWkid: number;
}