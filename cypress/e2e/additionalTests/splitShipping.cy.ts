import Navigate from 'cypress/helpers/navigate';
import shippingMethods from 'cypress/helpers/shippingMethods';
import cartPage from 'cypress/pom/cart.page';
import checkoutLoginPage from 'cypress/pom/checkoutLogin.page';
import homePage from 'cypress/pom/home.page';
import loginPage from 'cypress/pom/login.page';
import myaccountPage from 'cypress/pom/myaccount.page';
import pdpPage from 'cypress/pom/pdp.page';
import shippingPage from 'cypress/pom/shipping.page';
import { brand, locale } from 'cypress/support/e2e';

const includedSplitShippingBrandsAndLocales: boolean = (brand == 'boohoo.com' && locale == 'CA') || (brand == 'boohooman.com' && locale == 'US');

describe('My account area for registered user', function () {
  it('Verify that for US locale, the list of countries on My Account area is restricted to specific countries and the list of US states is correct', function () {
    
    const countries = ['United States','Canada','American Samoa','Guam','Northern Mariana Islands','Puerto Rico','Virgin Islands (U.S.)'];
       
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }    
    Navigate.toMyAccountPageUsingSession();
    myaccountPage.click.addressesLink();
    myaccountPage.click.addNewAddress();
    myaccountPage.assertions.assertBMANUsLocaleIncludeListOfCountries(countries);

  });
});

describe('Shipping Page', function () {
  before(() => {
    cy.getAllCookies();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wrap(credentials.guest).as('guestEmail');
    });
  })
  beforeEach(() => {
    homePage.goto();
    homePage.actions.findItemUsingSKU('BMM01020-100-35');
    cy.wait(2000);
    pdpPage.click.addToCart();
    cy.wait(2000);
    homePage.actions.findItemUsingSKU('BMM01040-100-35');
    cy.wait(2000);
    pdpPage.click.addToCart();
    cy.wait(2000);
    cartPage.goto();
    cartPage.click.proceedToCheckoutminiCart();
    cy.wait(2000);
    cy.fixture('users').then((credentials: LoginCredentials) => {
        cy.wait(2000);
        checkoutLoginPage.click.continueAsGuestBtn();
    });
    cy.wait(3000);
  });
  afterEach(() => {

  })

  it('If you add UK item and US item in cart, on checkout, shipping methods shall be represented as 2 blocks', function () {
        
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }

    shippingPage.assertions.assertShippingMethodIsSelected('UK Split');
    shippingPage.assertions.assertShippingMethodIsSelected('US Split');


  });
    
  it('In Address Finder - Country field: List of US states is correct', function () {
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    const countries = ['United States','Canada','American Samoa','Guam','Northern Mariana Islands','Puerto Rico','Virgin Islands (U.S.)'];
 
    shippingPage.assertions.assertBMANUsLocaleIncludeListOfCountries(countries);

  });

  it('PUDO should not be available if there is UK item and US item in cart', function () {
        
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
        
    // To be completed by Burak

  });
});

describe('Order Confirmation Page - Shipping Section', function () {
  it('If only US items are ordered, US shipping method shuld be displayed with correct price (static)', function () {
        
    // Above ordered items message: ''Shipping from the US - <estimated delivery>' is displayed
        
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    Navigate.toOrderConfirmationPageWithSplitShippingSku();
        
    // To be completed by Tejaswi...

  });

  it('If only UK items are ordered, UK shipping method shuld be displayed with correct price (static)', function () {
        
    // Above ordered items message: ''Shipping from the UK- <estimated delivery>' is displayed

    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    Navigate.toOrderConfirmationPageWithSplitShippingSku();
        
    // To be completed by Muli

  });

  it('If UK and US items are ordered, US and then UK shipping method should be displayed with correct price (static)', function () {
        
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