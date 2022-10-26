// Common actions.

export function randomEmail (): string {
  const randomEmail = 'euboohoo+<RANDOM>@gmail.com'.replace('<RANDOM>', String(Date.now()));
  return randomEmail;
}

export function applyMarketingCookies (): void {
  cy.setCookie('dw_cookies_accepted', 'A');
  cy.setCookie('dw_is_new_consent', 'true');
}

type BrandLocaleMap = Record < GroupBrands, Partial< Record < Locale, PaymentMethod > > >;

export function getCardProviderByBrand (brand: GroupBrands, locale: Locale): PaymentMethod {
  const paymentLookupTable: BrandLocaleMap = {
    'boohoo.com': {
      AU: 'WorldPay', // Australia
      CA: 'WorldPay', // Canada
      DE: 'Adyen', // Germany
      DK: 'Adyen', // Denmark
      ES: 'Adyen', // Spain
      EU: 'Adyen', // Europe
      FI: 'Adyen', // Finland
      FR: 'Adyen', // France
      IT: 'Adyen', // Italy
      NL: 'Adyen', // Netherlands
      NO: 'Adyen', // Norward
      IL: 'Adyen', // Israel
      NZ: 'WorldPay', // New Zealand
      SE: 'Adyen', // Sweden
      UK: 'Adyen', // United Kingdom
      IE: 'WorldPay', // Ireland
      US: 'WorldPay' // United States
    },
    'boohooman.com': {
      AU: 'WorldPay',
      CA: 'WorldPay',
      DE: 'Adyen',
      DK: 'Adyen',
      ES: 'Adyen',
      EU: 'Adyen',
      FI: 'Adyen',
      FR: 'Adyen',
      IT: 'Adyen',
      NL: 'Adyen',
      NO: 'Adyen',
      NZ: 'WorldPay',
      SE: 'Adyen',
      UK: 'WorldPay',
      IE: 'WorldPay', 
      US: 'WorldPay'
    },
    'nastygal.com': {
      AU: 'WorldPay',
      CA: 'WorldPay',
      DE: 'Adyen',
      DK: 'Adyen',
      ES: 'Adyen',
      EU: 'Adyen',
      FI: 'Adyen',
      FR: 'Adyen',
      IT: 'Adyen',
      NL: 'Adyen',
      NO: 'Adyen',
      NZ: 'WorldPay',
      SE: 'Adyen',
      UK: 'WorldPay',
      IE: 'WorldPay',
      US: 'WorldPay'
    },
    'karenmillen.com': {
      AU: 'WorldPay',
      CA: 'WorldPay',
      NZ: 'WorldPay',
      UK: 'WorldPay',
      US: 'WorldPay'
    },
    'coastfashion.com': {
      UK: 'WorldPay',
      IE: 'WorldPay'
    },
    'warehousefashion.com': {
      UK: 'Adyen',
      IE: 'Adyen'
    },
    'oasis-stores.com': {
      UK: 'Adyen',
      IE: 'Adyen'
    },
    'dorothyperkins.com': {
      DE: 'WorldPay',
      DK: 'WorldPay',
      ES: 'WorldPay',
      EU: 'WorldPay',
      FI: 'WorldPay',
      FR: 'WorldPay',
      IT: 'WorldPay',
      NL: 'WorldPay',
      NO: 'WorldPay',
      SE: 'WorldPay',
      UK: 'Adyen',
      IE: 'WorldPay',
    },
    'burton.co.uk': {
      DE: 'WorldPay',
      DK: 'WorldPay',
      ES: 'WorldPay',
      EU: 'WorldPay',
      FI: 'WorldPay',
      FR: 'WorldPay',
      IT: 'WorldPay',
      NL: 'WorldPay',
      NO: 'WorldPay',
      SE: 'WorldPay',
      UK: 'Adyen',
      IE: 'WorldPay',
    },
    'wallis.co.uk': {
      DE: 'WorldPay',
      DK: 'WorldPay',
      ES: 'WorldPay',
      EU: 'WorldPay',
      FI: 'WorldPay',
      FR: 'WorldPay',
      IT: 'WorldPay',
      NL: 'WorldPay',
      NO: 'WorldPay',
      SE: 'WorldPay',
      UK: 'WorldPay',
      IE: 'WorldPay',
    },
    'misspap.com': {
      AU: 'WorldPay',
      NZ: 'WorldPay',
      CA: 'WorldPay',
      UK: 'Adyen',
      IE: 'WorldPay',
      US: 'Adyen'
    }
  };

  const localeTable = paymentLookupTable[brand] ?? {};
  const paymentType = localeTable[locale] ?? 'Could not find payment type' as PaymentMethod; 
  return paymentType;
}

type BrandPaymentMap = Record < GroupBrands, Array<PaymentMethod> >;

export function isBrandSupportingPaymentMethod (brand: GroupBrands, paymentMethod: PaymentMethod): boolean {
  const paymentLookupTable: BrandPaymentMap = {
    'boohoo.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'LayBuy',
      'Klarna'
    ],
    'boohooman.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ],
    'nastygal.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ],
    'karenmillen.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ],
    'coastfashion.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ],
    'warehousefashion.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ],
    'oasis-stores.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ],
    'dorothyperkins.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
    ],
    'burton.co.uk': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
    ],
    'wallis.co.uk': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
    ],
    'misspap.com': [
      'Adyen',
      'PayPal',
      'Clearpay',
      'Klarna',
      'LayBuy',
    ]
  };

  return paymentLookupTable[brand].includes(paymentMethod) as boolean;
}