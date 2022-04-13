export type GotoOptions = {
    applyCookies: boolean;
}

type AustralasiaCountryCode = 'AU' | 'NZ';
type NorthAmericaCountryCode = 'US' | 'CA';
type EuropeCountryCode = 'GB' | 'FR' | 'IE' | 'EUR' | 'NL' | 'DE' | 'ES' | 'SK' | 'IT' | 'DK' | 'FI' | 'NO' | 'RU' | 'IL';
type MiddleEastCountryCode = 'AE' | 'BH' | 'JO' | 'KW' | 'OM' | 'QA' | 'SA';
type FarEastCountryCode = 'HK' | 'TW' | 'JP' | 'SG' | 'KR';

export type CountryCode = AustralasiaCountryCode | NorthAmericaCountryCode | EuropeCountryCode | MiddleEastCountryCode | FarEastCountryCode;

export type LoginCredentials = {
    username: string;
    password: string;
    name: string;
    guest: string;
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
    sku: string;
}

export type Locale = 'EN' | 'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES';

export type TranslationMap = { [key in Locale]: string };

