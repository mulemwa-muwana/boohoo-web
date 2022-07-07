import { AddressData } from '../support/types';

const addresses: Record<string, AddressData> = {
  UK: {
    firstName: 'Test',
    lastName: 'Test',
    phone: '+44 843 837 0041',
    addrline1: '49-51 Dale St',
    addrline2: '',
    postcode: 'M1 2HG',
    addressName: 'Boohoo',
    country: 'United Kingdom',
    city: 'Manchester',
    countryCode: 'UK',
    county: 'London',
  },
  UK1: {
    firstName: 'Test',
    lastName: 'Test',
    phone: '+44 843 837 0041',
    addrline1: 'Unit 1162',
    addrline2: 'Westfield Shopping Centre, White City',
    postcode: 'W12 7GD',
    addressName: 'London Addr',
    country: 'United Kingdom',
    city: 'London',
    countryCode: 'UK',
    county: 'London',
  },
  UK2: {
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

  US: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: 'United States',
    countryCode: 'US'
  },

  DE: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  CA: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  IE: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  NO: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  SE: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  EU: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  NL: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  FI: {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  AddressLineES: AddressData = {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  };

  AddressLineIT: AddressData = {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  AddressLineFRA: AddressData = {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  },

  AddressLineNZ: AddressData = {
    firstName: 'Test',
    lastName: 'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
    country: '',
    countryCode: ''
  }
};

class Addresses {
  
  getAddressByLocale (locale: string): AddressData {
    if (typeof addresses[locale] === 'undefined') throw new Error('Address could not be found with locale ' + locale);
    return addresses[locale];
  }
}

export default new Addresses();