export type GotoOptions = {
    applyCookies: boolean;
}

type AustralasiaCountryCode = 'AUD' | 'NZD';
type NorthAmericaCountryCode =  'USA' | 'CAD';
type EuropeCountryCode = 'GBP' | 'FRA' | 'IE' | 'EUR' | 'NL' | 'DE' | 'ES' | 'SEK' | 'IT' | 'DKK' | 'FI' | 'NOK' | 'RU' | 'IL';
type MiddleEastCountryCode = 'AE' | 'BH' | 'JO' | 'KW' | 'OM' | 'QA' | 'SA';
type FarEastCountryCode = 'HK' | 'TW' | 'JP' | 'SG' | 'KR';

export type CountryCode = AustralasiaCountryCode | NorthAmericaCountryCode | EuropeCountryCode | MiddleEastCountryCode | FarEastCountryCode;

export type LoginCredentials = {
    username: string;
    password: string;
    name: string;
}