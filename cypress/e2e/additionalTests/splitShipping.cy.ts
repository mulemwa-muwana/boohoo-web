import assertionText from 'cypress/helpers/assertionText';
import Navigate from 'cypress/helpers/navigate';
import cartPage from 'cypress/pom/cart.page';
import checkoutLoginPage from 'cypress/pom/checkoutLogin.page';
import homePage from 'cypress/pom/home.page';
import myaccountPage from 'cypress/pom/myaccount.page';
import pdpPage from 'cypress/pom/pdp.page';
import shippingPage from 'cypress/pom/shipping.page';
import { brand, locale, language } from 'cypress/support/e2e';
import orderConfirmationPage from 'cypress/pom/orderConfirmation.page';

const includedSplitShippingBrandsAndLocales: boolean = brand == 'boohooman.com' && locale == 'US';
const UKSKU = 'BMM01020-100-35';
const USSKU = 'BMM01040-100-35';

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

  });
  beforeEach(() => {

    homePage.goto();
    homePage.actions.findItemUsingSKU(UKSKU);
    cy.wait(2000);
    pdpPage.click.addToCart();
    cy.wait(2000);
    homePage.actions.findItemUsingSKU(USSKU);
    cy.wait(2000);
    pdpPage.click.addToCart();
    cy.wait(2000);
    cartPage.goto();
    cartPage.click.proceedToCheckoutminiCart();
    cy.wait(2000);
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wrap(credentials.guest).as('guestEmail');
      checkoutLoginPage.click.continueAsGuestBtn();
    });
    cy.wait(3000);
  });

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
    shippingPage.assertions.assertBmanInPostNotAvailable(assertionText.assertBmanInPostNotAvailable[language]);
    shippingPage.assertions.assertBmanAsdaPudoNotAvailable(assertionText.assertBmanAsdaPudoNotAvailable[language]);
  });
});

describe('Order Confirmation Page - Shipping Section', function () {
  beforeEach(function () {
    if (!includedSplitShippingBrandsAndLocales) {
      this.skip();
    }
    homePage.goto();
  });

  it('If only US items are ordered, US shipping method shuld be displayed with correct price (static)', function () {
    Navigate.toOrderConfirmationPageWithSplitShippingSku(USSKU);
    orderConfirmationPage.assertions.assertUSOnlyShippingMethod(assertionText.assertUSOnlySplitShippingMethod[language]);
    orderConfirmationPage.assertions.assertUSOnlyShippingFrom(assertionText.assertUSOnlyShippingFrom[language]);
    orderConfirmationPage.assertions.assertBusinessDay();
  });

  it('If only UK items are ordered, UK shipping method shuld be displayed with correct price (static)', function () {
    Navigate.toOrderConfirmationPageWithSplitShippingSku(UKSKU);
    orderConfirmationPage.assertions.assertUkOnlyShippingMethod(assertionText.assertUkOnlySplitShippingMethod[language]);
    orderConfirmationPage.assertions.assertUkOnlyShippingFrom();
  });

  it('If UK and US items are ordered, US and then UK shipping method should be displayed with correct price (static)', function () {
    Navigate.toOrderConfirmationPageWithSplitShippingSku(UKSKU, USSKU);
    orderConfirmationPage.assertions.assertUSAndUkShippingMethod();
    orderConfirmationPage.assertions.assertUSAndUkShippingFrom();
  });

});