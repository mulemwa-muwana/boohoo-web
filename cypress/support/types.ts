import { StringLiteralLike } from 'typescript';

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
    addrline1: string;
    addrline2: string;
    postcode: string;
    addressName: string;
    city: string;
    county: string;
    country: string;
    countryCode: string;
}

export type ShippingMethods = 'Standard' | 'NextDay' | 'DPD' ;

export type CardDetails = {
    cardNo: string;
    end: string;
    owner: string;
    date: string;
    month: string;
    year: string;
    code: string;
}

export type SKU = {
    sku: string;
}

export type Language = 'EN' | 'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES';
export type Locale = 'UK' | 'US' |'CA' |'EU' |'AU' |'NZ' |'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES';

export type TranslationMap = { [key in Language]: string };

export type PaymentMethodSelector = {
    card: string;
    payPal: string;
    klarna: string;
    clearPay: string;
    amazonPay: string;
    layBuy: string;
    zipPay: string;
}

export type Sizes = 'UK' | 'US';

export type SizesMap = { [key in Sizes]: string };

export type Currencies = 'GBP' | 'EUR' | 'USD' ;

export type PriceMap = { [key in Currencies]: string };

export type AddressMapAddressLine1 = {[key in Locale]: string}
export type AddressMapAddressLine2 = {[key in Locale]: string}
export type AddressMapPostcode = {[key in Locale]: string}
export type AddressMapPhoneNumber = {[key in Locale]: string}

export type ShippingMethodsUK = {[key in ShippingMethods]: string}
