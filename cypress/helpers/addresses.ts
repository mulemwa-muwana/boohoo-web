type AddressMap = Record<string, Record<'primaryAddress' | 'secondaryAddress', AddressData>>

class Addresses {
  
  public addressMap: AddressMap = {
    UK: {
      primaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '08082580300',
        addrline1: '100 Browning St, Birmingham B16 8EH',
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
        phone: '+020 7590 6960',
        addrline1: '259 Oxford St, London W1C 2DD',
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
        phone: '+1 917 640 9576',
        addrline1: '1665 St Marks Ave, Brooklyn',
        addrline2: '',
        postcode: '11233',
        addressName: 'SecondAddress',
        country: 'United States',
        city: 'New York',
        countryCode: 'NY',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+1 212 273 3267',
        addrline1: '110 W 42nd St, New York',
        addrline2: '',
        postcode: '10036',
        addressName: 'SecondAddress',
        country: 'United States',
        city: 'New York',
        countryCode: 'NY',
        county: '',
      }
    },

    IE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+35314850900',
        addrline1: 'Smithfield Market, Smithfield, Dublin 7',
        addrline2: '',
        postcode: 'D07 RF2Y',
        addressName: 'SecondAddress',
        country: 'Ireland',
        city: 'Smithfield',
        countryCode: '',
        county: 'Dublin',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+35316615133',
        addrline1: 'Merrion Square W, Dublin 2',
        addrline2: '',
        postcode: 'D02 K303',
        addressName: 'SecondAddress',
        country: 'Ireland',
        city: 'Dublin',
        countryCode: '',
        county: 'Dublin',
      }
    },

    DE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+30 6948868',
        addrline1: 'Gneisenaustraße 93 ',
        addrline2: '',
        postcode: '10961',
        addressName: 'SecondAddress',
        country: 'Germany',
        city: 'Berlin',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+163 1161055',
        addrline1: 'Schleiermacherstraße 18',
        addrline2: '',
        postcode: '10961',
        addressName: 'SecondAddress',
        country: 'Germany',
        city: ' Berlin',
        countryCode: '',
        county: '',
      }
    },

    FR: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+142223144',
        addrline1: '132 Rue de Rennes',
        addrline2: '',
        postcode: '75006',
        addressName: 'SecondAddress',
        country: 'France',
        city: 'Paris',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+140750875',
        addrline1: '75 Av. des Champs-Élysées, 8e Arrondissement',
        addrline2: '',
        postcode: '75008',
        addressName: 'SecondAddress',
        country: 'France',
        city: ' Paris',
        countryCode: '',
        county: '',
      }
    },

    IT: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+06 4244 0415',
        addrline1: 'Via del Corso, 98 ',
        addrline2: '',
        postcode: '00187',
        addressName: 'SecondAddress',
        country: 'Italy',
        city: 'Roma',
        countryCode: 'RM',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+06 4812 4524',
        addrline1: 'Viale delle Provincie, 31-33 ',
        addrline2: '',
        postcode: '00162',
        addressName: 'SecondAddress',
        country: 'Italy',
        city: 'Roma',
        countryCode: 'RM',
        county: '',
      }
    },

    ES: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+34932160306',
        addrline1: 'Passeig de Gràcia, 43',
        addrline2: '',
        postcode: '08007',
        addressName: 'SecondAddress',
        country: 'Spain',
        city: 'Barcelona',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+34935537801',
        addrline1: 'Avinguda Diagonal, 208',
        addrline2: '',
        postcode: '08018',
        addressName: 'SecondAddress',
        country: 'Spain',
        city: 'Barcelona',
        countryCode: '',
        county: '',
      }
    },

    CA: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+19053547887',
        addrline1: '6361 Fallsview Blvd, Niagara Falls',
        addrline2: '',
        postcode: 'ON L2G 3V9',
        addressName: 'SecondAddress',
        country: 'Canada',
        city: '',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '',
        addrline1: '',
        addrline2: '',
        postcode: '',
        addressName: '',
        country: 'Canada',
        city: '',
        countryCode: '',
        county: '',
      }
    },

    IL: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '++47 925 40 835',
        addrline1: 'HaMaccabi 2',
        addrline2: '',
        postcode: '6329302',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Tel Aviv',
        countryCode: '',
        county: 'Israel',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '',
        addrline1: '',
        addrline2: '',
        postcode: '',
        addressName: '',
        country: '',
        city: '',
        countryCode: '',
        county: '',
      }
    },

    FI: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+358294500501',
        addrline1: 'Mannerheiminaukio 2',
        addrline2: '',
        postcode: '00100',
        addressName: 'SecondAddress',
        country: 'Finland',
        city: 'Helsinki',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '',
        addrline1: '',
        addrline2: '',
        postcode: '',
        addressName: '',
        country: '',
        city: '',
        countryCode: '',
        county: '',
      }
    },

    SE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+850532370',
        addrline1: 'Torsgatan 10',
        addrline2: '',
        postcode: '111 23',
        addressName: 'SecondAddress',
        country: 'Sweden',
        city: 'Stockholm',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+850900500',
        addrline1: 'Stadsgårdshamnen 22',
        addrline2: '',
        postcode: '116 45',
        addressName: 'SecondAddress',
        country: 'Sweden',
        city: 'Stockholm',
        countryCode: '',
        county: '',
      }
    },

    NO: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '++47 21 98 20 00',
        addrline1: 'Universitetsgata 13,  ',
        addrline2: '',
        postcode: '0164',
        addressName: 'SecondAddress',
        country: 'Norway',
        city: 'Oslo',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '',
        addrline1: '',
        addrline2: '',
        postcode: '',
        addressName: '',
        country: '',
        city: '',
        countryCode: '',
        county: '',
      }
    },
    
    DK: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+4538163816',
        addrline1: 'Nordre Fasanvej 57',
        addrline2: '',
        postcode: '2000',
        addressName: 'SecondAddress',
        country: 'Denmark',
        city: 'Frederiksberg',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+4570232110',
        addrline1: 'Vandkunsten 5',
        addrline2: '',
        postcode: '1467',
        addressName: 'SecondAddress',
        country: 'Denmark',
        city: 'København',
        countryCode: '',
        county: '',
      }
    },

    AU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+2 9247 5630',
        addrline1: '50 Clunies Ross St, Australian Capital Territory',
        addrline2: '',
        postcode: '2600',
        addressName: 'SecondAddress',
        country: 'Australia',
        city: '',
        countryCode: '',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '+2 9799 8488',
        addrline1: '82 Ebden St, Ainslie ACT',
        addrline2: '',
        postcode: '2602',
        addressName: 'SecondAddress',
        country: 'Аustralia',
        city: '',
        countryCode: '',
        county: '',
      }
    },

    NZ: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '++64 3 345 6789 ',
        addrline1: '123 Pinehaven Road',
        addrline2: '',
        postcode: '5019',
        addressName: 'SecondAddress',
        country: '',
        city: 'Pinehaven',
        countryCode: '',
        county: 'Upper Hutt',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '',
        addrline1: '',
        addrline2: '',
        postcode: '',
        addressName: '',
        country: '',
        city: '',
        countryCode: '',
        county: '',
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