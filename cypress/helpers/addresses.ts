import { AddressData, TranslationMap } from '../support/types';

class addresses {
    
  AddressLineUK: AddressData = {
    firstName: 'Test',
    lastName:  'Test',
    phone: '+44 843 837 0041',
    addrline1: '49-51 Dale St',
    addrline2: '',
    city: 'London',
    postcode: 'M1 2HG',
    addressName: 'Boohoo',
    county: 'London',
  };

  AddressLineUS: AddressData = {
    firstName: 'Test',
    lastName:  'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
  };

  AddressLineDE: AddressData = {
    firstName: 'Test',
    lastName:  'Test',
    phone: 'Test',
    addrline1: 'Test',
    addrline2: 'Test',
    city: 'Test',
    postcode: 'Test',
    addressName: 'Test',
    county: 'Test',
  };
}

export default new addresses();