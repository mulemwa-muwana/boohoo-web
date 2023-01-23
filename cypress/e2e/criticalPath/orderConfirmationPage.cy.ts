import orderConfirmationPage from '../../pom/orderConfirmation.page';
import assertionText from '../../helpers/assertionText';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';

const variables = Cypress.env() as EnvironmentVariables;

describe('Order confirmation page for guest user', function () {
  beforeEach (function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
    }
    
    Navigate.toOrderConfirmationPage('GuestUser');
  });

  it('Verify that email address, order number, value and payment method are visible for guest user', function () { //changed payment method to PayPal
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.guest);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderValueIsDisplayed();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[variables.language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[variables.language]);
      }
    });
  });

  it('Verify that shipping and billing addresses and shipping method are present with valid data for guest user', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
    orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
    orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
  });

  it('Verify that for guest users password fields are present on order confirmation page', function () {
    orderConfirmationPage.assertions.assertThatPasswordFieldForGuestUserIsDisplayed();
    orderConfirmationPage.assertions.assertThatConfirmPasswordFieldForGuestUserIsDisplayed();
  });
});

describe('Order confirmation page for registered user', function () {
  
  beforeEach (()=>{
    Navigate.toOrderConfirmationPage('RegisteredUser');
  });

  it('Verify that email, order number, value and order total are visible for registred users', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.username);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderTotalIsVisible();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[variables.language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[variables.language]);
      }
    });
  });

  it('Verify that shipping, billing addresses and shipping method are present with valid data for registered user', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
    orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
    orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
  });
});