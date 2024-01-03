type ShippingMap = Record<string, Record<'shippingMethod1', ShippingData>>

class ShippingMethod {
  
  public shippingMap: ShippingMap = {
    UK: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      }
    },
    US: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      }
    },
    EU: {
      shippingMethod1: {
        shippingMethodName: 'Europe and International Delivery'
      }
    },
    AU: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      }
    },
    NZ: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      }
    },
    CA: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      }
    },
    NL: {
      shippingMethod1: {
        shippingMethodName: 'Standaardlevering Nederland'
      }
    },
    DE: {
      shippingMethod1: {
        shippingMethodName: 'Standardlieferung'
      }
    },
    FR: {
      shippingMethod1: {
        shippingMethodName: 'Livraison standard France'
      }
    },
    IE: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      }
    },
    DK: {
      shippingMethod1: {
        shippingMethodName: 'Danish Standard Delivery'
      }
    },
    FI: {
      shippingMethod1: {
        shippingMethodName: 'Europe and International Delivery'
      }
    },
    NO: {
      shippingMethod1: {
        shippingMethodName: 'Norwegian Standard Delivery'
      }
    },
    SE: {
      shippingMethod1: {
        shippingMethodName: 'Standardleverans Sverige'
      }
    },
    IT: {
      shippingMethod1: {
        shippingMethodName: 'Italia Standard'
      }
    },
    ES: {
      shippingMethod1: {
        shippingMethodName: 'Estándar a España'
      }
    },
    IL: {
      shippingMethod1: {
        shippingMethodName: 'משלוח באירופה ומשלוח בין-לאומי'
      }
    },
    SA: {
      shippingMethod1: {
        shippingMethodName: 'Saudi Arabia Express Delivery'
      }
    },
    AE: {
      shippingMethod1: {
        shippingMethodName: 'UAE Express Delivery'
      }
    },
    BH: {
      shippingMethod1: {
        shippingMethodName: 'Bahrain Express Delivery'
      }
    },
    JO: {
      shippingMethod1: {
        shippingMethodName: 'Jordan Express Delivery'
      }
    },
    KW: {
      shippingMethod1: {
        shippingMethodName: 'Kuwait Express Delivery'
      }
    },
    OM: {
      shippingMethod1: {
        shippingMethodName: 'Oman Express Delivery'
      }
    },
    QA: {
      shippingMethod1: {
        shippingMethodName: 'Qatar Express Delivery'
      }
    },
  };

  /**
   * Returns an address for a locale, given it's the primary test address or secondary test address.
   * @param locale The locale given from the environment variables
   * @param type either primaryAddress or secondaryAddress 
   * @returns AddressData type with all the details for an address.
   */

  getShippingMethodByLocale (locale: string, type: 'shippingMethod1'): ShippingData {
    if (typeof this.shippingMap[locale] === 'undefined') throw new Error('Shipping method could not be found with locale ' + locale);
    return this.shippingMap[locale][type] as ShippingData;
  }
}

export default new ShippingMethod();