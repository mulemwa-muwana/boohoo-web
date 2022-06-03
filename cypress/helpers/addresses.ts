import { AddressData } from '../support/types';

class addresses {
    
  AddressLineUK: AddressData = {
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
  };

  AddressLineUK1: AddressData = {
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
  };

  AddressLineUK2: AddressData = {
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
  };

  AddressLineUS: AddressData = {
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
  };

  AddressLineDE: AddressData = {
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
}

export default new addresses();