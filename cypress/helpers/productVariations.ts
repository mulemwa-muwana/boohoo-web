import priceVariations from './priceVariations';

class productVariations {

  Size: SizesMap = {
    UK: '12',
    US: 'M'
  };

  ColorBlack: TranslationMap = {
    EN: 'Black',
    NL: 'Zwart',
    DE: 'Schwarz',
    FR: 'Noir',
    DK: 'Sort',
    FI: 'Musta',
    NO: 'Svart',
    SE: 'Svart',
    IL: 'שָׁחוֹר',
    IT: 'Nero',
    ES: 'Negro',
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
    NL: 'Topjes',
    DE: 'Oberteile',
    FR: 'Hauts',
    DK: 'Toppe',
    FI: 'Topit',
    NO: 'Topper',
    SE: 'Blast',
    IL: 'חולצות',
    IT: 'Cime',
    ES: 'Tops',
  };
  
  productAccessories: TranslationMap = {
    EN: 'Accessories',
    NL: '',
    DE: 'Oberteile',
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
    NL: 'Hoog',
    DE: 'Groß',
    FR: 'Haut',
    DK: 'Høj',
    FI: 'Pitkä',
    NO: 'Høy',
    SE: 'Lång',
    IL: 'גובה',
    IT: 'Alto',
    ES: 'Alto',
  };

  productShopByOccassionRefinementCasual: TranslationMap = {
    EN: 'Casual',
    NL: 'Gewoontjes',
    DE: 'Zwanglos',
    FR: 'Décontracté',
    DK: 'Afslappet',
    FI: 'Rento',
    NO: 'Uformelt',
    SE: 'Tillfällig',
    IL: 'אַגָבִי',
    IT: 'Casuale',
    ES: 'Casual',
  };

  productShopByStyle: TranslationMap = {
    EN: 'Blouses',
    NL: 'Blouses',
    DE: 'Blusen',
    FR: 'Chemisiers',
    DK: 'Bluser',
    FI: 'Puserot',
    NO: 'Bluser',
    SE: 'Blusar',
    IL: 'חולצות',
    IT: 'Camicette',
    ES: 'Blusas',
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