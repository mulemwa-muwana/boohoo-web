type AddressMap = Record<string, Record<'primaryAddress' | 'secondaryAddress', AddressData>>

class Addresses {
  
  public addressMap: AddressMap = {
    UK: {
      primaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '08082580300',
        addrline1: '100 Browning St',
        addrline2: '',
        postcode: 'AB116PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'GB',
        county: 'Aberdeenshire',
        confirmEmail: ''
      },
      secondaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '020 7590 6960',
        addrline1: '259 Oxford St',
        addrline2: '',
        postcode: 'AB11 6PH',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Aberdeen',
        countryCode: 'GB',
        county: 'Aberdeenshire',
        confirmEmail: ''
      }
    },

    // United States addresses.
    US: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '19176409576',
        addrline1: '1665 St Marks Ave',
        addrline2: '',
        postcode: '11233',
        addressName: 'SecondAddress',
        country: 'United States',
        city: 'New York',
        countryCode: 'NY',
        county: '',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '12122733267',
        addrline1: '110 W 42nd St',
        addrline2: '',
        postcode: '10036',
        addressName: 'SecondAddress',
        country: 'United States',
        city: 'New York',
        countryCode: 'NY',
        county: '',
        confirmEmail: ''
      }
    },

    IE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '35314850900',
        addrline1: 'Smithfield Market 7',
        addrline2: '',
        postcode: 'D07 RF2Y',
        addressName: 'SecondAddress',
        country: 'Ireland',
        city: 'Smithfield',
        countryCode: '',
        county: 'Dublin',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '35316615133',
        addrline1: 'Merrion Square W',
        addrline2: '',
        postcode: 'D02 K303',
        addressName: 'SecondAddress',
        country: 'Ireland',
        city: 'Dublin',
        countryCode: '',
        county: 'Dublin',
        confirmEmail: ''
      }
    },

    DE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '306948868',
        addrline1: 'Potsdamer Str. 50',
        addrline2: '',
        postcode: '10785',
        addressName: 'SecondAddress',
        country: 'Deutschland',
        city: 'Berlin',
        countryCode: '',
        county: '',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '1631161055',
        addrline1: 'Schleiermacherstraße 18',
        addrline2: '',
        postcode: '10961',
        addressName: 'SecondAddress',
        country: 'Deutschland',
        city: ' Berlin',
        countryCode: '',
        county: '',
        confirmEmail: ''
      }
    },

    FR: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '142223144',
        addrline1: '132 Rue de Rennes',
        addrline2: '',
        postcode: '75006',
        addressName: 'SecondAddress',
        country: 'France',
        city: 'Paris',
        countryCode: '',
        county: '',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '140750875',
        addrline1: '75 Av. des Champs-Élysées, 8e Arrondissement',
        addrline2: '',
        postcode: '75008',
        addressName: 'SecondAddress',
        country: 'France',
        city: ' Paris',
        countryCode: '',
        county: '',
        confirmEmail: ''
      }
    },

    IT: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '0642440415',
        addrline1: 'Via del Corso, 98 ',
        addrline2: '',
        postcode: '00187',
        addressName: 'SecondAddress',
        country: 'Italy',
        city: 'Roma',
        countryCode: 'RM',
        county: '',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '0648124524',
        addrline1: 'Viale delle Provincie, 31-33 ',
        addrline2: '',
        postcode: '00162',
        addressName: 'SecondAddress',
        country: 'Italy',
        city: 'Roma',
        countryCode: 'RM',
        county: '',
        confirmEmail: ''
      }
    },

    ES: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '34932160306',
        addrline1: 'Passeig de Gràcia, 43',
        addrline2: '',
        postcode: '08007',
        addressName: 'SecondAddress',
        country: 'Spain',
        city: 'Barcelona',
        countryCode: '',
        county: '',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '34935537801',
        addrline1: 'Avinguda Diagonal, 208',
        addrline2: '',
        postcode: '08018',
        addressName: 'SecondAddress',
        country: 'Spain',
        city: 'Barcelona',
        countryCode: '',
        county: '',
        confirmEmail: ''
      }
    },

    CA: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '19053547887',
        addrline1: '6361 Fallsview Blvd, Niagara Falls',
        addrline2: '',
        postcode: 'ON L2G 3V9',
        addressName: 'SecondAddress',
        country: 'Canada',
        city: '',
        countryCode: '',
        county: '',
        confirmEmail: ''
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
        confirmEmail: ''
      }
    },

    IL: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4792540835',
        addrline1: 'HaMaccabi 2',
        addrline2: '',
        postcode: '6329302',
        addressName: 'SecondAddress',
        country: 'United Kingdom',
        city: 'Tel Aviv',
        countryCode: '',
        county: 'Israel',
        confirmEmail: ''
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
        confirmEmail: ''
      }
    },

    FI: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '358294500501',
        addrline1: 'Mannerheiminaukio 2',
        addrline2: '',
        postcode: '00100',
        addressName: 'SecondAddress',
        country: 'Finland',
        city: 'Helsinki',
        countryCode: '',
        county: '',
        confirmEmail: ''
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
        confirmEmail: ''
      }
    },

    SE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '850532370',
        addrline1: 'Torsgatan 10',
        addrline2: '',
        postcode: '111 23',
        addressName: 'SecondAddress',
        country: 'Sweden',
        city: 'Stockholm',
        countryCode: '',
        county: '',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '850900500',
        addrline1: 'Stadsgårdshamnen 22',
        addrline2: '',
        postcode: '116 45',
        addressName: 'SecondAddress',
        country: 'Sweden',
        city: 'Stockholm',
        countryCode: '',
        county: '',
        confirmEmail: ''
      }
    },

    NO: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4721982000',
        addrline1: 'Universitetsgata 13,  ',
        addrline2: '',
        postcode: '0164',
        addressName: 'SecondAddress',
        country: 'Norway',
        city: 'Oslo',
        countryCode: '',
        county: '',
        confirmEmail: ''
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
        confirmEmail: ''
      }
    },
    
    DK: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4538163816',
        addrline1: 'Nordre Fasanvej 57',
        addrline2: '',
        postcode: '2000',
        addressName: 'SecondAddress',
        country: 'Denmark',
        city: 'Frederiksberg',
        countryCode: '',
        county: '',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4570232110',
        addrline1: 'Vandkunsten 5',
        addrline2: '',
        postcode: '1467',
        addressName: 'SecondAddress',
        country: 'Denmark',
        city: 'København',
        countryCode: '',
        county: '',
        confirmEmail: ''
      }
    },

    AU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '292475630',
        addrline1: '50 Clunies Ross St, Australian Capital Territory',
        addrline2: '',
        postcode: '2600',
        addressName: 'SecondAddress',
        country: 'Australia',
        city: '',
        countryCode: '',
        county: '',
        confirmEmail: ''
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '297998488',
        addrline1: '82 Ebden St, Ainslie ACT',
        addrline2: '',
        postcode: '2602',
        addressName: 'SecondAddress',
        country: 'Аustralia',
        city: '',
        countryCode: '',
        county: '',
        confirmEmail: ''
      }
    },

    NZ: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '6433456789 ',
        addrline1: '123 Pinehaven Road',
        addrline2: '',
        postcode: '5019',
        addressName: 'SecondAddress',
        country: '',
        city: 'Pinehaven',
        countryCode: '',
        county: 'Upper Hutt',
        confirmEmail: ''
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
        confirmEmail: ''
      }
    },

    EU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '306948868',
        addrline1: 'Gneisenaustraße 93',
        addrline2: '',
        postcode: '10961',
        addressName: 'SecondAddress',
        country: '',
        city: 'Berlin',
        countryCode: '',
        county: 'Germany',
        confirmEmail: ''
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
        confirmEmail: ''
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