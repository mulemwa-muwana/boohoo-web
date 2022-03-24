export type GotoOptions = {
    applyCookies: boolean;
}

type AustralasiaCountryCode = 'AUD' | 'NZD';
type NorthAmericaCountryCode = 'USA' | 'CAD';
type EuropeCountryCode = 'GBP' | 'FRA' | 'IE' | 'EUR' | 'NL' | 'DE' | 'ES' | 'SEK' | 'IT' | 'DKK' | 'FI' | 'NOK' | 'RU' | 'IL';
type MiddleEastCountryCode = 'AE' | 'BH' | 'JO' | 'KW' | 'OM' | 'QA' | 'SA';
type FarEastCountryCode = 'HK' | 'TW' | 'JP' | 'SG' | 'KR';

export type CountryCode = AustralasiaCountryCode | NorthAmericaCountryCode | EuropeCountryCode | MiddleEastCountryCode | FarEastCountryCode;

export type LoginCredentials = {
    username: string;
    password: string;
    name: string;
}

export type AddressData = {
    firstName: string;
    lastName: string;
    phone: string;
    line1: string;
    addressName: string;
}

export type CardDetails = {
    cardNo: string;
    end: string;
    owner: string;
    date: string;
}

export type SKU = {
    SKU: string;
}
