export type GotoOptions = {
    applyCookies: boolean;
}

type AustralasiaCountryCode = 'AU' | 'NZ';
type NorthAmericaCountryCode = 'US' | 'CA';
type EuropeCountryCode = 'GB' | 'FR' | 'IE' | 'EUR' | 'NL' | 'DE' | 'ES' | 'SK' | 'IT' | 'DK' | 'FI' | 'NO' | 'RU' | 'IL';
type MiddleEastCountryCode = 'AE' | 'BH' | 'JO' | 'KW' | 'OM' | 'QA' | 'SA';
type FarEastCountryCode = 'HK' | 'TW' | 'JP' | 'SG' | 'KR';

export enum GroupBrands {
    Boohoo = 'boohoo.com',
    BoohooMAN = 'boohooman.com',
    NastyGal = 'nastygal.com',
    KarenMillen = 'karenmillen.com',
    Coast = 'coastfashion.com',
    Warehouse = 'warehousefashion.com',
    Oasis = 'oasis-stores.com',
    DorothyPerkins = 'dorothyperkins.com',
    Burton = 'burton.co.uk',
    Wallis = 'wallis.co.uk',
    MissPap = 'misspap.com'
}

export type TCustomerJSONResponse = {
    email: string;
    customer_id: string;
    customer_no: string;
}

/** Type for mapping brands to a string. */
export type BrandMap = { [key in GroupBrands]: string };

/** Lowercase locale of the country you want, used in the API managers. */
export type TLocale = 'uk' | 'us';

/** Types for the API manager to limit input types, can be expandeed with | */
export type APIKeyType = 'Customer';

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
