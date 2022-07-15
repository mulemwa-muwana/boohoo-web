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
        shippingMethodName: 'USA Standard Shipping'
      },
      shippingMethod2: {
        shippingMethodName: 'USA Express Shipping'
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
    AU: {
      shippingMethod1: {
        shippingMethodName: 'Australia Standard Shipping'
      },
      shippingMethod2: {
        shippingMethodName: 'Australia Express Shipping'
      },
      shippingMethod3: {
        shippingMethodName: 'Australia Saver Shipping'
      },
    },
    NZ: {
      shippingMethod1: {
        shippingMethodName: 'New Zealand Standard Shipping'
      },
      shippingMethod2: {
        shippingMethodName: 'New Zealand Express Shipping'
      },
      shippingMethod3: {
        shippingMethodName: ''
      }
    },
    CA: {
      shippingMethod1: {
        shippingMethodName: 'Canada Express Shipping'
      },
      shippingMethod2: {
        shippingMethodName: 'Canada Standard Shipping'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
    },
    NL: {
      shippingMethod1: {
        shippingMethodName: 'Netherlands Standard Delivery'
      },
      shippingMethod2: {
        shippingMethodName: 'Netherlands Express'
      },
      shippingMethod3: {
        shippingMethodName: ''
      }
    },
    DE: {
      shippingMethod1: {
        shippingMethodName: 'Deutschland Standardlieferung'
      },
      shippingMethod2: {
        shippingMethodName: 'Deutschland Expresslieferung'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
    },
    FR: {
      shippingMethod1: {
        shippingMethodName: 'Livraison express France'
      },
      shippingMethod2: {
        shippingMethodName: 'Livraison standard France'
      },
      shippingMethod3: {
        shippingMethodName: ''
      }
    },
    IE: {
      shippingMethod1: {
        shippingMethodName: 'Republic of Ireland Standard Delivery'
      },
      shippingMethod2: {
        shippingMethodName: 'Republic of Ireland Next Day Delivery joanna test'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
    },
    DK: {
      shippingMethod1: {
        shippingMethodName: 'Danish Standard Delivery'
      },
      shippingMethod2: {
        shippingMethodName: 'Denmark Express'
      },
      shippingMethod3: {
        shippingMethodName: ''
      }
    },
    FI: {
      shippingMethod1: {
        shippingMethodName: 'Europe and International Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      }
    },
    NO: {
      shippingMethod1: {
        shippingMethodName: 'Norwegian Standard Delivery'
      },
      shippingMethod2: {
        shippingMethodName: 'NO Super Saver Delivery'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
    },
    SE: {
      shippingMethod1: {
        shippingMethodName: 'Standardleverans Sverige'
      },
      shippingMethod2: {
        shippingMethodName: 'Expressleverans Sverige'
      },
      shippingMethod3: {
        shippingMethodName: 'Super Saver Delivery Storbritannien'
      }
    },
    IT: {
      shippingMethod1: {
        shippingMethodName: 'Italia Standard'
      },
      shippingMethod2: {
        shippingMethodName: 'Italia Express'
      },
      shippingMethod3: {
        shippingMethodName: ''
      }
    },
    ES: {
      shippingMethod1: {
        shippingMethodName: 'Estándar a España'
      },
      shippingMethod2: {
        shippingMethodName: 'Express a España'
      },
      shippingMethod3: {
        shippingMethodName: ''
      }
    },
    IL: {
      shippingMethod1: {
        shippingMethodName: 'משלוח באירופה ומשלוח בין-לאומי'
      },
      shippingMethod2: {
        shippingMethodName: 'משלוח רגיל לישראל'
      },
      shippingMethod3: {
        shippingMethodName: 'משלוח אקספרס לישראל'
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