type AddressMap = Record<string, Record<'primaryAddress' | 'secondaryAddress' | 'newAddedPrimaryAddress', AddressData>>

class Addresses {
  
  public addressMap: AddressMap = {
    UK: {
      primaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
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
        addressLine: '259 Oxford Street',
        postcode: 'S6 3FD',
        addressName: 'SecondaryAddress',
        country: 'United Kingdom',
        city: 'Sheffield',
        countryCode: 'GB',
        county: 'South Yorkshire',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // United States addresses.
    US: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '19176409576',
        addressLine: '1665 St Marks Ave',
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
        addressLine: '110 W 15th St',
        postcode: '10011-6724',
        addressName: 'SecondaryAddress',
        country: 'United States',
        city: 'New York',
        countryCode: 'US',
        county: 'New York',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Ireland addresses.
    IE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '35314850900',
        addressLine: 'Smithfield Market 7',
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
        addressLine: '10 Blackhall Green',
        postcode: 'D07 EK13',
        addressName: 'SecondaryAddress',
        country: 'Ireland',
        city: 'Dublin 7',
        countryCode: 'IE',
        county: 'Dublin',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Germany addresses.
    DE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '306948868',
        addressLine: 'Potsdamer Str. 50',
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
        addressLine: 'Schleiermacherstr. 18',
        postcode: '10961',
        addressName: 'SecondaryAddress',
        country: 'Deutschland',
        city: 'Berlin',
        countryCode: 'DE',
        county: 'Berlin',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // France addresses.
    FR: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '142223144',
        addressLine: '132 Rue de Rennes',
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
        addressLine: '75Bis Avenue Marceau',
        postcode: '75116',
        addressName: 'SecondaryAddress',
        country: 'France',
        city: ' Paris',
        countryCode: 'FR',
        county: 'Paris',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Italy addresses.
    IT: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '0642440415',
        addressLine: 'Via del Corso, 98 ',
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
        addressLine: 'Viale delle Provincie 31',
        postcode: '00162',
        addressName: 'SecondaryAddress',
        country: 'Italia',
        city: 'Roma',
        countryCode: 'IT',
        county: 'RM',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Spain addresses.
    ES: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '34932160306',
        addressLine: 'Passeig de Gràcia, 43',
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
        addressLine: 'Avinguda Diagonal, 208',
        postcode: '08018',
        addressName: 'SecondaryAddress',
        country: 'España',
        city: 'Barcelona',
        countryCode: 'ES',
        county: 'Barcelona',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Canada addresses.
    CA: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '19053547887',
        addressLine: '6361 Fallsview Blvd, Niagara Falls',
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
        addressLine: '75 Rue Ontario E',
        postcode: 'H2X 1G9',
        addressName: 'SecondaryAddress',
        country: 'Canada',
        city: 'Montréal',
        countryCode: 'CA',
        county: 'Quebec',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Israel addresses.
    IL: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4792540835',
        addressLine: 'HaMaccabi 2',
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
        addressLine: 'Ramban St 30',
        postcode: '	9270007',
        addressName: 'SecondaryAddress',
        country: 'Israel',
        city: 'Jerusalem',
        countryCode: 'IL',
        county: 'Jerusalem',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Finland addresses.
    FI: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '358294500501',
        addressLine: 'Mannerheiminaukio 2',
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
        addressLine: 'Rauhankatu 29',
        postcode: '20100',
        addressName: 'SecondaryAddress',
        country: 'Finland',
        city: 'Turku',
        countryCode: 'FI',
        county: '',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Netherlands addresses.
    NL: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '358294500501',
        addressLine: 'Museumstraat 1',
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
        addressLine: 'Jaffadwarsstraat 20A',
        postcode: '3061 JS',
        addressName: 'SecondaryAddress',
        country: 'Nederland',
        city: 'Rotterdam',
        countryCode: 'NL',
        county: '',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Sweden addresses.
    SE: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '850532370',
        addressLine: 'Torsgatan 10',
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
        addressLine: 'Stadsgårdshamnen 22',
        postcode: '116 45',
        addressName: 'SecondaryAddress',
        country: 'Sverige',
        city: 'Stockholm',
        countryCode: 'SE',
        county: '',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Norway addresses.
    NO: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4721982000',
        addressLine: 'Universitetsgata 13,  ',
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
        addressLine: 'Akersbakken 39',
        postcode: '0172',
        addressName: 'SecondaryAddress',
        country: 'Norway',
        city: 'Oslo',
        countryCode: 'NO',
        county: '',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },
    
    // Denmark addresses.
    DK: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '4538163816',
        addressLine: 'Nordre Fasanvej 57',
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
        addressLine: 'Vandkunsten 5',
        postcode: '1467',
        addressName: 'SecondaryAddress',
        country: 'Denmark',
        city: 'København K',
        countryCode: 'DK',
        county: '',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Australia addresses.
    AU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '292475630',
        addressLine: '50 Clunies Ross St, Australian Capital Territory',
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
        addressLine: '10 Legon Rd',
        postcode: '3167',
        addressName: 'SecondaryAddress',
        country: 'Australia',
        city: 'Melbourne',
        countryCode: 'AU',
        county: 'Oakleigh South',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // New Zealand addresses.
    NZ: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '6433456789 ',
        addressLine: '123 Pinehaven Road',
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
        addressLine: '12 Central Road',
        postcode: '1021',
        addressName: 'SecondaryAddress',
        country: 'New Zealand',
        city: 'Auckland',
        countryCode: 'NZ',
        county: 'Kingsland',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // European Union addresses.
    EU: {
      primaryAddress:  {
        firstName: 'New',
        lastName: 'Test',
        phone: '306948868',
        addressLine: 'Burgring 7',
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
        addressLine: 'Rue Africaine',
        postcode: '1050',
        addressName: 'SecondaryAddress',
        country: 'Belgium',
        city: 'Ixelles',
        countryCode: 'BE',
        county: '',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    },

    // Saudi Arabia addresses.
    SA: {
      primaryAddress: {
        firstName: 'New',
        lastName: 'Test',
        phone: '5014245353',
        addressLine: 'Unit: A2, King Abdul Aziz Rd',
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
        addressLine: '2873 Al Khudair',
        postcode: '6259',
        addressName: 'SecondaryAddress',
        country: 'Saudi Arabia',
        city: 'Riyadh',
        countryCode: 'SA',
        county: 'Riyadh Province',
      },
      newAddedPrimaryAddress:{
        firstName: 'Boohoo',
        lastName: 'Test',
        phone: '08082580300',
        addressLine: '85 Piccadilly',
        postcode: 'W1J 7NB',
        addressName: 'PrimaryAddress',
        country: 'United Kingdom',
        city: 'London',
        countryCode: 'GB',
        county: 'London',
      }
    }
  };

  /**
   * Returns an address for a locale, given it's the primary test address or secondary test address.
   * @param locale The locale given from the environment variables
   * @param type either primaryAddress or secondaryAddress 
   * @returns AddressData type with all the details for an address.
   */
  getAddressByLocale (locale: string, type: 'primaryAddress' | 'secondaryAddress' | 'newAddedPrimaryAddress'): AddressData {
    if (typeof this.addressMap[locale] === 'undefined') throw new Error('Address could not be found with locale ' + locale);
    return this.addressMap[locale][type] as AddressData;
  }

}

export default new Addresses();