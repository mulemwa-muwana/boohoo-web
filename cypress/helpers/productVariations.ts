import { SizesMap, TranslationMap } from '../support/types';
import priceVariations from './priceVariations';

class productVariations {

  Size: SizesMap = {
    UK: '12',
    US: 'M'
  };

  ColorBlack: TranslationMap = {
    EN: 'Black',
    NL: '',
    DE: '',
    FR: '',
    DK: '',
    FI: '',
    NO: '',
    SE: '',
    IL: '',
    IT: '',
    ES: '',
  };

  productDenim: TranslationMap = {
    EN: 'Denim',
    NL: '',
    DE: '',
    FR: '',
    DK: '',
    FI: '',
    NO: '',
    SE: '',
    IL: '',
    IT: '',
    ES: '',
  };

  productTops: TranslationMap = {
    EN: 'Tops',
    NL: '',
    DE: '',
    FR: '',
    DK: '',
    FI: '',
    NO: '',
    SE: '',
    IL: '',
    IT: '',
    ES: '',
  };

  productShopByFitRefinementTall: TranslationMap = {
    EN: 'Tall',
    NL: '',
    DE: '',
    FR: '',
    DK: '',
    FI: '',
    NO: '',
    SE: '',
    IL: '',
    IT: '',
    ES: '',
  };

  productShopByOccassionRefinementCasual: TranslationMap = {
    EN: 'Casual',
    NL: '',
    DE: '',
    FR: '',
    DK: '',
    FI: '',
    NO: '',
    SE: '',
    IL: '',
    IT: '',
    ES: '',
  };

  productShopByStyle: TranslationMap = {
    EN: 'Blouses',
    NL: '',
    DE: '',
    FR: '',
    DK: '',
    FI: '',
    NO: '',
    SE: '',
    IL: '',
    IT: '',
    ES: '',
  };

  priceRangePLPrefinements = {
    'range0to5':  priceVariations.plpPriceRange.GBP +'0 - '+ priceVariations.plpPriceRange.GBP +'5',
    'range5to10': priceVariations.plpPriceRange.GBP +'5 - '+ priceVariations.plpPriceRange.GBP +'10',
    'range10to20': priceVariations.plpPriceRange.GBP +'10 - '+ priceVariations.plpPriceRange.GBP +'20',
    'range20to30': priceVariations.plpPriceRange.GBP +'20 - '+ priceVariations.plpPriceRange.GBP +'30',
    'range30to50': priceVariations.plpPriceRange.GBP +'30 - '+ priceVariations.plpPriceRange.GBP +'50',
    'range50to250': priceVariations.plpPriceRange.GBP +'50 - '+ priceVariations.plpPriceRange.GBP +'250',
  };
}

export default new productVariations();