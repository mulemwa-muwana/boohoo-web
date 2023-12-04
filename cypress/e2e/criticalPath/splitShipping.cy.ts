import Navigate from 'cypress/helpers/navigate';
import { brand, locale } from 'cypress/support/e2e';

const includedSplitShippingBrandsAndLocales: boolean = (brand == 'boohoo.com' && locale == 'CA') || (brand == 'boohooman.com' && locale == 'US');

describe('My account area for registered user', function () {
  it('CYP-830 Verify that for US locale, the list of countries on My Account area is restricted to specific countries and the list of US states is correct', function () {
    
    // USA, Canada, American Samoa, Guam, Norther Mariana Isalnds, Puerto Rico and US Virgin Islands
       
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }    
    Navigate.toMyAccountPageUsingSession();
        
    // To be completed by Burak

  });
});

describe('Shipping Page', function () {
  it('CYP-834 If you add UK item and US item in cart, on checkout, shipping methods shall be represented as 2 blocks', function () {
        
    // The 2 blocks relate to each dispatch with related details UK and US

    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    Navigate.toShippingPageWithSplitShippingSku();
        
    // To be completed by Burak

  });
    
  it('CYP-835 In Address Finder - Country field: List of US states is correct', function () {
        
    // USA, Canada, American Samoa, Guam, Northern Mariana Islands, Puerto Rico and the US Virgin Islands

    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    Navigate.toShippingPageWithSplitShippingSku();
        
    // Rest to be done by Burak
  });

  it('CYP-836 PUDO should not be available if there is UK item and US item in cart', function () {
        
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    Navigate.toShippingPageWithSplitShippingSku();
        
    // To be completed by Burak

  });
});

describe('Order Confirmation Page - Shipping Section', function () {
  it('CYP-837 If only US items are ordered, US shipping method shuld be displayed with correct price (static)', function () {
        
    // Above ordered items message: ''Shipping from the US - <estimated delivery>' is displayed
        
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    Navigate.toOrderConfirmationPageWithSplitShippingSku();
        
    // To be completed by Tejaswi...

  });

  it('CYP-838 If only UK items are ordered, UK shipping method shuld be displayed with correct price (static)', function () {
        
    // Above ordered items message: ''Shipping from the UK- <estimated delivery>' is displayed

    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    Navigate.toOrderConfirmationPageWithSplitShippingSku();
        
    // To be completed by Muli

  });

  it('CYP-839 If UK and US items are ordered, US and then UK shipping method should be displayed with correct price (static)', function () {
        
    /* Above ordered items message:
        ''Shipping from the US- <estimated delivery>' is displayed, below ''Shipping from the UK- <estimated delivery>' message.
        */
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    Navigate.toOrderConfirmationPageWithSplitShippingSku();
        
    // To be completed by anyone
  });

});