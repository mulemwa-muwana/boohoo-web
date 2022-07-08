import { ShippingMethods } from '../support/types';

type shippingMap = Record<string, Record<'shippingMethod1' | 'shippingMethod2' | 'shippingMethod3', ShippingMethods>>

class shippingMethod {
  
  public shippingMap: shippingMap = {
    UK: {
      shippingMethod1: {
        shippingMethodName: 'UKstandardShippingMehod'
      },
      shippingMethod2: {
        shippingMethodName: 'nexUKNextDaytday'
      },
      shippingMethod3: {
        shippingMethodName: 'UkDPD'
      },
    },
    US: {
      shippingMethod1: {
        shippingMethodName: ''
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
    },
    EU: {
      shippingMethod1: {
        shippingMethodName: 'UKstandardShippingMehod'
      },
      shippingMethod2: {
        shippingMethodName: 'nexUKNextDaytday'
      },
      shippingMethod3: {
        shippingMethodName: 'UkDPD'
      },
    },
  };

  /**
   * Returns an address for a locale, given it's the primary test address or secondary test address.
   * @param locale The locale given from the environment variables
   * @param type either primaryAddress or secondaryAddress 
   * @returns AddressData type with all the details for an address.
   */

  getShippingMethodByLocale (locale: string, type: 'shippingMethod1' | 'shippingMethod2'): ShippingMethods {
    if (typeof this.shippingMap[locale] === 'undefined') throw new Error('Shipping method could not be found with locale ' + locale);
    return this.shippingMap[locale][type] as ShippingMethods;
  }
}

export default new shippingMethod();