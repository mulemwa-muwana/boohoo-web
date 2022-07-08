import { AddressData } from '../support/types';

type AddressMap = Record<string, Record<'primaryAddress' | 'secondaryAddress', AddressData>>

class Addresses {
  
  public addressMap: AddressMap = {
    UK: {
      primaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    // United States addresses.
    US: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    IE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    DE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    FR: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    IT: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    ES: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    CA: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    IL: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    FI: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    SE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    NO: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },
    
    DK: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },
    EU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    AU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    },

    NZ: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+44 843 837 0041',
        addrline1: '1 Imperial House, 12-14 Exchange Street',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'UK',
        county: 'Aberdeenshire',
      }
    }

  };

  /**
   * Returns an address for a locale, given it's the primary test address or secondary test address.
   * @param locale The locale given from the environment variables
   * @param type either primaryAddress or secondaryAddress 
   * @returns AddressData type with all the details for an address.
   */
  getAddressByLocale (locale: string, type: 'primaryAddress' | 'secondaryAddress'): AddressData {
    if (typeof this.addressMap[locale] === 'undefined') throw new Error('Address could not be found with locale ' + locale);
    return this.addressMap[locale][type] as AddressData;
  }

}

export default new Addresses();