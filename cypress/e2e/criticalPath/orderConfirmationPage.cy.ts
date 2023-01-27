import orderConfirmationPage from '../../pom/orderConfirmation.page';
import billingPage from 'cypress/pom/billing.page';
import assertionText from '../../helpers/assertionText';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import cards from '../../helpers/cards';

const variables = Cypress.env() as EnvironmentVariables;

describe('Order confirmation page for guest user', function () {

  beforeEach (function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
    }
  });

  it('Verify that guest user can place order with Visa card and that order confirmation page is displayed correctly', function () {
    Navigate.toBillingPage('GuestUser');
    billingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.guest);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderValueIsDisplayed();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[variables.language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[variables.language]);
      }

      const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();

      orderConfirmationPage.assertions.assertThatPasswordFieldForGuestUserIsDisplayed();
      orderConfirmationPage.assertions.assertThatConfirmPasswordFieldForGuestUserIsDisplayed();
    });
  });

  it('Verify that guest user can place order using Credit Card - Amex)', function () {
    Navigate.toBillingPage('GuestUser');
    billingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
  });

});

describe('Order confirmation page for registered user', function () {
  
  it('Verify that registerd user can place order with Master card and that order confirmation page is displayed correctly', function () {
    Navigate.toBillingPage('RegisteredUser');
    billingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.date, cards.master.code);
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.username);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderTotalIsVisible();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[variables.language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[variables.language]);
      }

      const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
    });
  });

  it('Verify that registered user can place order using PayPal', function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // Only credit card as payment option for this brand
    }
    Navigate.toBillingPage('RegisteredUser');
    billingPage.actions.selectPayPal();
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed(); // Not working on Site Genesis
  });

  it('Verify that guest user can place order using Klarna', function () {
    if (variables.locale === 'UK' || variables.locale === 'IE' || variables.locale === 'AU') {
      Navigate.toBillingPage('RegisteredUser');
      billingPage.actions.selectKlarna();
      billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    } else {
      this.skip();
    }
  });

});
