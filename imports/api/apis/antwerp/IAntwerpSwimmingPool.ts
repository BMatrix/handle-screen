export interface IAntwerpSwimmingPool {
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
    id:          string;
    thema:       Thema;
    type:        Type;
    subtype:     Subtype;
    naam:        string;
    straat:      string;
    huisnummer:  string;
    postcode:    string;
    district:    string;
    lgst_niv:    GstNiv;
    hgst_niv:    GstNiv;
    grondopp:    number;
    gebo:        string;
    pero:        Pero;
    begindatum:  number;
    publiek:     Publiek;
    capa_zit:    number;
    capa_staan:  number;
    gemeten_opp: number;
    eigenaar:    Eigenaar;
    beheerder:   Beheerder;
    sporthoogte: null;
    id_old:      string;
    OBJECTID:    number;
}

export enum Beheerder {
    DienstSportEnRecreatie = "dienst sport en recreatie",
    ZieEigenaar = "zie eigenaar",
}

export enum Eigenaar {
    StadAntwerpen = "Stad Antwerpen",
}

export enum GstNiv {
    Stedelijk = "stedelijk",
    Wijk = "wijk",
}

export enum Pero {
    Zwembad = "ZWEMBAD",
}

export enum Publiek {
    NietOpenbaar = "niet openbaar",
}

export enum Subtype {
    Zwembad = "zwembad",
}

export enum Thema {
    Sport = "sport",
}

export enum Type {
    Binnensport = "binnensport",
    Openluchtsport = "openluchtsport",
}

export interface Geometry {
    x: number;
    y: number;
}

export interface FieldAliases {
    id:          string;
    thema:       string;
    type:        string;
    subtype:     string;
    naam:        string;
    straat:      string;
    huisnummer:  string;
    postcode:    string;
    district:    string;
    lgst_niv:    string;
    hgst_niv:    string;
    grondopp:    string;
    gebo:        string;
    pero:        string;
    begindatum:  string;
    publiek:     string;
    capa_zit:    string;
    capa_staan:  string;
    gemeten_opp: string;
    eigenaar:    string;
    beheerder:   string;
    sporthoogte: string;
    id_old:      string;
    OBJECTID:    string;
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
