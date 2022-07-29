declare namespace Cypress {
        interface Chainable<Subject> {
            goOffline(): Chainable<null>;
            createUser(brand: GroupBrands): Chainable<Subject>;
            createArtefact: (testArtefact: TestArtefact, filename: string) => void;
        }
}

declare type GotoOptions = {
    applyCookies: boolean;
}

// These are for selecting on the website, if you want to use back end locale codes then please use the type "Locale"
type AustralasiaCountryCode = 'AU' | 'NZ';
type NorthAmericaCountryCode = 'US' | 'CA';
type EuropeCountryCode = 'GB' | 'FR' | 'IE' | 'EUR' | 'NL' | 'DE' | 'ES' | 'SK' | 'IT' | 'DK' | 'FI' | 'NO' | 'RU' | 'IL';
type MiddleEastCountryCode = 'AE' | 'BH' | 'JO' | 'KW' | 'OM' | 'QA' | 'SA';
type FarEastCountryCode = 'HK' | 'TW' | 'JP' | 'SG' | 'KR';
declare type CountryCode = AustralasiaCountryCode | NorthAmericaCountryCode | EuropeCountryCode | MiddleEastCountryCode | FarEastCountryCode;

type GroupBrands =
    | 'boohoo.com'
    | 'boohooman.com'
    | 'nastygal.com'
    | 'karenmillen.com'
    | 'coastfashion.com'
    | 'warehousefashion.com'
    | 'oasis-stores.com'
    | 'dorothyperkins.com'
    | 'burton.co.uk'
    | 'wallis.co.uk'
    | 'misspap.com';

declare type TestScenario =
    | 'CompleteOrder'
    | 'FullRefund'
    | 'PartialRefund'
    | 'Cancellation'
    | 'PartialCancellation'
    | 'FullGCRefund'
    | 'GCRefund'
    | 'GCPartialRefund';

declare type PaymentMethod =
	| 'Adyen'
    | 'PayPal'
    | 'Clearpay'
    | 'LayBuy'
    | 'Paypal'
    | 'WorldPay'
    | 'Klarna'
    | 'AfterPay'
    | 'ZipPay';

declare type EnvironmentVariables = {
        url: string;
        sku: string;
        brand: GroupBrands;
        locale: Locale;
        language: 'EN' | 'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES';
        shippingMethod: string;
    }
    
declare type TestArtefact = {
        orderNumber: string;
        orderTotal: string;
        orderEmail: string;
        deliveryMethod: string;
        paymentMethod: PaymentMethod;
        items: Array<{
            sku: string;
            quantity: number;
        }>;
        groupBrand: GroupBrands;
        testScenario: TestScenario;
        locale: Locale | CountryCode;
    };
    
declare type TCustomerJSONResponse = {
        email: string;
        customer_id: string;
        customer_no: string;
    }
    
declare type NewCustomerCredentials = {
        email: string;
        password: string;
    };
    
declare type SelectorBrandMap = { [key in GroupBrands]: Record<string, string> };
    
/** Type for mapping brands to a string. */
declare type BrandMap = { [key in GroupBrands]: string };
    
/** Lowercase locale of the country you want, used in the API managers. */
declare type TLocale = 'uk' | 'us';
    
/** Types for the API manager to limit input types, can be expandeed with | */
declare type APIKeyType = 'Customer';
    
declare type LoginCredentials = {
        username: string;
        password: string;
        name: string;
        guest: string;
    }
    
declare type AddressData = {
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
    
declare type ShippingMethods = {
        shippingMethodName: string;
    }
    
declare type CardDetails = {
        cardNo: string;
        end: string;
        owner: string;
        date: string;
        month: string;
        year: string;
        code: string;
    }
    
declare type SKU = {
        sku: string;
    }
    
declare type Language = 'EN' | 'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES';
declare type Locale = 'UK' | 'US' |'CA' |'EU' |'AU' |'NZ' |'NL' | 'DE' | 'FR' | 'DK' | 'FI' | 'NO' | 'SE' | 'IL'| 'IT' | 'ES' | 'IE';
    
declare type TranslationMap = { [key in Language]: string };
    
declare type PaymentMethodSelector = {
        card: string;
        payPal: string;
        klarna: string;
        clearPay: string;
        amazonPay: string;
        layBuy: string;
        zipPay: string;
    }
    
declare type Sizes = 'UK' | 'US';
    
declare type SizesMap = { [key in Sizes]: string };
    
declare type Currencies = 'GBP' | 'EUR' | 'USD' ;
    
declare type PriceMap = { [key in Currencies]: string };
    
declare type AddressMapAddressLine1 = {[key in Locale]: string}
declare type AddressMapAddressLine2 = {[key in Locale]: string}
declare type AddressMapPostcode = {[key in Locale]: string}
declare type AddressMapPhoneNumber = {[key in Locale]: string}
    