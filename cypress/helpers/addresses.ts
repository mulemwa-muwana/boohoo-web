type AddressMap = Record<string, Record<'primaryAddress' | 'secondaryAddress', AddressData>>

class Addresses {
  
  public addressMap: AddressMap = {
    UK: {
      primaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '08082580300',
        addrline1: '85 Piccadilly',
        addrline2: '',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      },
      secondaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '02075906960',
        addrline1: '259 Oxford Street',
        addrline2: '',
        postcode: 'S6 3FD',
        addressName: 'SecondaryAddress',
        country: 'United Kingdom',
        city: 'Sheffield',
        countryCode: 'GB',
        county: 'South Yorkshire',
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
        addressName: 'PrimaryAddress',
        country: 'United States',
        city: 'New York',
        countryCode: 'US',
        county: 'Alabama',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '12122733267',
        addrline1: '110 W 15th St',
        addrline2: '',
        postcode: '10011-6724',
        addressName: 'SecondaryAddress',
        country: 'United States',
        city: 'New York',
        countryCode: 'US',
        county: 'New York',
      }
    },

    // Ireland addresses.
    IE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '35314850900',
        addrline1: 'Smithfield Market 7',
        addrline2: '',
        postcode: 'D07 RF2Y',
        addressName: 'PrimaryAddress',
        country: 'Ireland',
        city: 'Smithfield',
        countryCode: 'IE',
        county: 'Dublin',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '35316615133',
        addrline1: '10 Blackhall Green',
        addrline2: '',
        postcode: 'D07 EK13',
        addressName: 'SecondaryAddress',
        country: 'Ireland',
        city: 'Dublin 7',
        countryCode: 'IE',
        county: 'Dublin',
      }
    },

    // Germany addresses.
    DE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '306948868',
        addrline1: 'Potsdamer Str. 50',
        addrline2: '',
        postcode: '10785 Berlin',
        addressName: 'PrimaryAddress',
        country: 'Deutschland',
        city: 'Berlin',
        countryCode: 'DE',
        county: 'Berlin',
        
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '1631161055',
        addrline1: 'Schleiermacherstr. 18',
        addrline2: '',
        postcode: '10961',
        addressName: 'SecondaryAddress',
        country: 'Deutschland',
        city: 'Berlin',
        countryCode: 'DE',
        county: 'Berlin',
      }
    },

    // France addresses.
    FR: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '142223144',
        addrline1: '132 Rue de Rennes',
        addrline2: '',
        postcode: '75006',
        addressName: 'PrimaryAddress',
        country: 'France',
        city: 'Paris',
        countryCode: 'FR',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '140750875',
        addrline1: '75Bis Avenue Marceau',
        addrline2: '',
        postcode: '75116',
        addressName: 'SecondaryAddress',
        country: 'France',
        city: ' Paris',
        countryCode: 'FR',
        county: 'Paris',
      }
    },

    // Italy addresses.
    IT: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '0642440415',
        addrline1: 'Via del Corso, 98 ',
        addrline2: '',
        postcode: '00187',
        addressName: 'PrimaryAddress',
        country: 'Italy',
        city: 'Roma',
        countryCode: 'IT',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '0648124524',
        addrline1: 'Viale delle Provincie 31',
        addrline2: '',
        postcode: '00162',
        addressName: 'SecondaryAddress',
        country: 'Italia',
        city: 'Roma',
        countryCode: 'IT',
        county: 'RM',
      }
    },

    // Spain addresses.
    ES: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '34932160306',
        addrline1: 'Passeig de Gràcia, 43',
        addrline2: '',
        postcode: '08007',
        addressName: 'PrimaryAddress',
        country: 'Spain',
        city: 'Barcelona',
        countryCode: 'ES',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '34935537801',
        addrline1: 'Avinguda Diagonal, 208',
        addrline2: '',
        postcode: '08018',
        addressName: 'SecondaryAddress',
        country: 'España',
        city: 'Barcelona',
        countryCode: 'ES',
        county: 'Barcelona',
      }
    },

    // Canada addresses.
    CA: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '19053547887',
        addrline1: '6361 Fallsview Blvd, Niagara Falls',
        addrline2: '',
        postcode: 'ON L2G 3V9',
        addressName: 'PrimaryAddress',
        country: 'Canada',
        city: '',
        countryCode: 'CA',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '6135550114',
        addrline1: '75 Rue Ontario E',
        addrline2: '',
        postcode: 'H2X 1G9',
        addressName: 'SecondaryAddress',
        country: 'Canada',
        city: 'Montréal',
        countryCode: 'CA',
        county: 'Quebec',
      }
    },

    // Israel addresses.
    IL: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4792540835',
        addrline1: 'HaMaccabi 2',
        addrline2: '',
        postcode: '6329302',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'Tel Aviv',
        countryCode: 'IL',
        county: 'Israel',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '972558829936',
        addrline1: 'Ramban St 30',
        addrline2: '',
        postcode: '	9270007',
        addressName: 'SecondaryAddress',
        country: 'Israel',
        city: 'Jerusalem',
        countryCode: 'IL',
        county: 'Jerusalem',
      }
    },

    // Finland addresses.
    FI: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '358294500501',
        addrline1: 'Mannerheiminaukio 2',
        addrline2: '',
        postcode: '00100',
        addressName: 'PrimaryAddress',
        country: 'Finland',
        city: 'Helsinki',
        countryCode: 'FI',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '358409109222',
        addrline1: 'Rauhankatu 29',
        addrline2: '',
        postcode: '20100',
        addressName: 'SecondaryAddress',
        country: 'Finland',
        city: 'Turku',
        countryCode: 'FI',
        county: '',
      }
    },

    // Netherlands addresses.
    NL: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '358294500501',
        addrline1: 'Museumstraat 1',
        addrline2: '',
        postcode: '1071 XX',
        addressName: 'PrimaryAddress',
        country: 'Nederland',
        city: 'Amsterdam',
        countryCode: 'NL',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '358294500501',
        addrline1: 'Jaffadwarsstraat 20A',
        addrline2: '',
        postcode: '3061 JS',
        addressName: 'SecondaryAddress',
        country: 'Nederland',
        city: 'Rotterdam',
        countryCode: 'NL',
        county: '',
      }
    },

    // Sweden addresses.
    SE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '850532370',
        addrline1: 'Torsgatan 10',
        addrline2: '',
        postcode: '111 23',
        addressName: 'PrimaryAddress',
        country: 'Sverige',
        city: 'Stockholm',
        countryCode: 'SE',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '483563451',
        addrline1: 'Stadsgårdshamnen 22',
        addrline2: '',
        postcode: '116 45',
        addressName: 'SecondaryAddress',
        country: 'Sverige',
        city: 'Stockholm',
        countryCode: 'SE',
        county: '',
      }
    },

    // Norway addresses.
    NO: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4721982000',
        addrline1: 'Universitetsgata 13,  ',
        addrline2: '',
        postcode: '0164',
        addressName: 'PrimaryAddress',
        country: 'Norway',
        city: 'Oslo',
        countryCode: 'NO',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '80027476',
        addrline1: 'Akersbakken 39',
        addrline2: '',
        postcode: '0172',
        addressName: 'SecondaryAddress',
        country: 'Norway',
        city: 'Oslo',
        countryCode: 'NO',
        county: '',
      }
    },
    
    // Denmark addresses.
    DK: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4538163816',
        addrline1: 'Nordre Fasanvej 57',
        addrline2: '',
        postcode: '2000',
        addressName: 'PrimaryAddress',
        country: 'Denmark',
        city: 'Frederiksberg',
        countryCode: 'DK',
        county: '',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4570232110',
        addrline1: 'Vandkunsten 5',
        addrline2: '',
        postcode: '1467',
        addressName: 'SecondaryAddress',
        country: 'Denmark',
        city: 'København K',
        countryCode: 'DK',
        county: '',
      }
    },

    // Australia addresses.
    AU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '292475630',
        addrline1: '50 Clunies Ross St, Australian Capital Territory',
        addrline2: '',
        postcode: '2600',
        addressName: 'PrimaryAddress',
        country: 'Australia',
        city: 'Sydney',
        countryCode: 'AU',
        county: 'ACT',
        
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '0491570156',
        addrline1: '10 Legon Rd',
        addrline2: '',
        postcode: '3167',
        addressName: 'SecondaryAddress',
        country: 'Australia',
        city: 'Melbourne',
        countryCode: 'AU',
        county: 'Oakleigh South',
      }
    },

    // New Zealand addresses.
    NZ: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '6433456789 ',
        addrline1: '123 Pinehaven Road',
        addrline2: '',
        postcode: '5019',
        addressName: 'PrimaryAddress',
        country: '',
        city: 'Pinehaven',
        countryCode: 'NZ',
        county: 'Upper Hutt',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '34351201',
        addrline1: '12 Central Road',
        addrline2: '',
        postcode: '1021',
        addressName: 'SecondaryAddress',
        country: 'New Zealand',
        city: 'Auckland',
        countryCode: 'NZ',
        county: 'Kingsland',
      }
    },

    // European Union addresses.
    EU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '306948868',
        addrline1: 'Burgring 7',
        addrline2: '',
        postcode: '1010',
        addressName: 'PrimaryAddress',
        country: 'Austria',
        city: 'Wien',
        countryCode: 'AT',
        county: 'Austria',
      },
      secondaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4568759267 ',
        addrline1: 'Rue Africaine',
        addrline2: '',
        postcode: '1050',
        addressName: 'SecondaryAddress',
        country: 'Belgium',
        city: 'Ixelles',
        countryCode: 'BE',
        county: '',
      }
    },

    // Saudi Arabia addresses.
    SA: {
      primaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '5014245353',
        addrline1: 'Unit: A2, King Abdul Aziz Rd',
        addrline2: '',
        postcode: '12467',
        addressName: 'PrimaryAddress',
        country: 'Saudi Arabia',
        city: 'Jeddah',
        countryCode: 'SA',
        county: 'Eastern Province',
      },
      secondaryAddress: {
        firstName: 'Test',
        lastName: 'Test',
        phone: '567960904',
        addrline1: '2873 Al Khudair',
        addrline2: '',
        postcode: '6259',
        addressName: 'SecondaryAddress',
        country: 'Saudi Arabia',
        city: 'Riyadh',
        countryCode: 'SA',
        county: 'Riyadh Province',
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