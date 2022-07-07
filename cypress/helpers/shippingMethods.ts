import { Locale, ShippingMethods } from '../support/types';

const shippingMethod: Record<string, ShippingMethods> = {
  UK: {
    
  },
};

class ShippingMethods {
  
  getShippingMethodByLocale (locale: string): ShippingMethods {
    if (typeof shippingMethod[locale] === 'undefined') throw new Error('Shipping method cannot be found with locale ' + locale);
    return shippingMethod[locale];
  }
  
}

export default new ShippingMethods();
