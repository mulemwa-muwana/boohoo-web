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