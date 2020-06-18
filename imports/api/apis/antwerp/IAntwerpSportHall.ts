export interface IAntwerpSportHall {
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
    subtype:     string;
    naam:        string;
    straat:      string;
    huisnummer:  string;
    postcode:    string;
    district:    string;
    lgst_niv:    GstNiv | null;
    hgst_niv:    GstNiv | null;
    grondopp:    number | null;
    gebo:        null | string;
    pero:        Pero;
    begindatum:  number;
    publiek:     Publiek | null;
    capa_zit:    number | null;
    capa_staan:  number | null;
    gemeten_opp: number | null;
    eigenaar:    Eigenaar | null;
    beheerder:   Beheerder | null;
    sporthoogte: null;
    id_old:      null | string;
    OBJECTID:    number;
}

export enum Beheerder {
    Concessie = "concessie",
    DienstSportEnRecreatie = "dienst sport en recreatie",
    LerendeStad = "Lerende Stad",
    ZieEigenaar = "zie eigenaar",
}

export enum Eigenaar {
    Privé = "Privé",
    StadAntwerpen = "Stad Antwerpen",
    VlaamseGemeenschap = "Vlaamse Gemeenschap",
    VrijOnderwijs = "Vrij Onderwijs",
}

export enum GstNiv {
    Stadsdeel = "stadsdeel",
    Stedelijk = "stedelijk",
    Wijk = "wijk",
}

export enum Pero {
    Sporthal = "SPORTHAL",
}

export enum Publiek {
    Concessie = "concessie",
    NietOpenbaar = "niet openbaar",
    Openbaar = "openbaar",
    School = "school",
}

export enum Thema {
    Sport = "sport",
}

export enum Type {
    Binnensport = "binnensport",
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
