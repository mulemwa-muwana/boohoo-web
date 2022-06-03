import { Locale, ShippingMethodsUK, TranslationMap } from '../support/types';

class ShippingMethods {
  Standard: TranslationMap = {
    EN: '\n                            UK Standard Delivery\n                        ',
    FR: '',
    NL: '',
    DE: '',
    DK: '',
    FI: '',
    NO: '',
    SE: '',
    IL: '',
    IT: '',
    ES: ''
  };

  UKshippingMethods: ShippingMethodsUK = {
    Standard: 'Standard',
    NextDay: 'Next',
    DPD: 'DPD',
  };
 
}

export default new ShippingMethods();