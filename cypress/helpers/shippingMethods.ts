type ShippingMap = Record<string, Record<'shippingMethod1' | 'shippingMethod2' | 'shippingMethod3' | 'shippingMethod4', ShippingData>>

class ShippingMethod {
  
  public shippingMap: ShippingMap = {
    UK: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: 'Express'
      },
      shippingMethod3: {
        shippingMethodName: 'UkDPD'
      },
      shippingMethod4: {
        shippingMethodName: 'Next Day'
      }
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
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    EU: {
      shippingMethod1: {
        shippingMethodName: 'Europe and International Delivery'
      },
      shippingMethod2: {
        shippingMethodName: 'Europe and International Delivery'
      },
      shippingMethod3: {
        shippingMethodName: 'Europe and International Delivery'
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    AU: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: 'Express'
      },
      shippingMethod3: {
        shippingMethodName: 'Australia Saver Shipping'
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    NZ: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: 'Express'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    CA: {
      shippingMethod1: {
        shippingMethodName: 'Express'
      },
      shippingMethod2: {
        shippingMethodName: 'Standard'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    NL: {
      shippingMethod1: {
        shippingMethodName: 'Standaardlevering Nederland'
      },
      shippingMethod2: {
        shippingMethodName: 'Netherlands Express'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    DE: {
      shippingMethod1: {
        shippingMethodName: 'Standardlieferung'
      },
      shippingMethod2: {
        shippingMethodName: 'Expresslieferung'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    FR: {
      shippingMethod1: {
        shippingMethodName: '\n Livraison standard France\n                        '
      },
      shippingMethod2: {
        shippingMethodName: 'Livraison standard France'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    IE: {
      shippingMethod1: {
        shippingMethodName: 'Standard'
      },
      shippingMethod2: {
        shippingMethodName: 'Express'
      },
      shippingMethod3: {
        shippingMethodName: 'Republic of Ireland Next Day Delivery joanna test'
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
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
      },
      shippingMethod4: {
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
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    NO: {
      shippingMethod1: {
        shippingMethodName: 'Norwegian Standard Delivery'
      },
      shippingMethod2: {
        shippingMethodName: 'Norwegian Express Delivery'
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
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
      },
      shippingMethod4: {
        shippingMethodName: ''
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
      },
      shippingMethod4: {
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
      },
      shippingMethod4: {
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
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
    SA: {
      shippingMethod1: {
        shippingMethodName: 'Saudi Arabia Express Delivery'
      },
      shippingMethod2: {
        shippingMethodName: ''
      },
      shippingMethod3: {
        shippingMethodName: ''
      },
      shippingMethod4: {
        shippingMethodName: ''
      }
    },
  };

  /**
   * Returns an address for a locale, given it's the primary test address or secondary test address.
   * @param locale The locale given from the environment variables
   * @param type either primaryAddress or secondaryAddress 
   * @returns AddressData type with all the details for an address.
   */

  getShippingMethodByLocale (locale: string, type: 'shippingMethod1' | 'shippingMethod2' | 'shippingMethod4'): ShippingData {
    if (typeof this.shippingMap[locale] === 'undefined') throw new Error('Shipping method could not be found with locale ' + locale);
    return this.shippingMap[locale][type] as ShippingData;
  }
}

export default new ShippingMethod();