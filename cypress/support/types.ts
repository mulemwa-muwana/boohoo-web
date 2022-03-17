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
    username: 'euboohoo@gmail.com';
    password: 'boohoo123';
    name: 'BOOHOO';
}

export type AddressData = {
    firstName: 'Test';
    lastName: 'Test';
    phone: '02071548965';
    line1: 'oxford';
    addressName: 'Po Box 11041';
}

export type CardDetailsVisa = {
    cardNo: '4111111111111111';
    end: '1111';
    owner: 'Test';
    date: '3/2030' ;
}

<<<<<<< HEAD
export type SKU = {
    SKU: 'DZZ02796-265-56';
=======
export type CardDetailsMaster = {
    cardNo: '5454545454545454';
    end: '5454';
    owner: 'Test';
    date: '3/2030' ;
}

export type CardDetailsAmex = {
    cardNo: '370000000000002';
    end: '0002';
    owner: 'Test';
    date: '3/2030' ;
}

export type SKU = {
    SKU: 'AZZ06403-105-35';
>>>>>>> master
}
