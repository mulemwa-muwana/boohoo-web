import shippingMethods from '../../helpers/shippingMethods';
import BillingPage from '../../pom/billing.page';
import shippingPage from '../../pom/shipping.page';
import cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';

const variables = Cypress.env() as EnvironmentVariables;

describe('Billing page functionality for registered user', function () {

  beforeEach (() => {
    Navigate.toBillingPageWithSession('RegisteredUser');
  });

  it('Verify that shipping address block is filled with data', function () {
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    BillingPage.assertions.assertShippingMethodPresent('\n                            ' + localeShippingMethod.shippingMethodName + '\n                  ');
  });
  it('Verify that register user can change shipping address', function () {
    BillingPage.click.changeShippingAddress();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that register user can change shipping method', function () {
    BillingPage.click.changeShippingMethod();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that email address is displayed and it cannot be changed', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Email is not displayed on Billing page for Site Genesis brands
    }
    cy.fixture('users').then((credentials: LoginCredentials) => {
      BillingPage.assertions.assertEmailIsCorrect(credentials.username);
      BillingPage.assertions.assertEmailFieldCantBeChanged();
    });
  });
  it('Verify that billing address can be same as shipping address', function () {
    if (isSiteGenesisBrand) {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('Verify that registered user can submit new billing address from address book', function () {
    if (!isSiteGenesisBrand) {
      BillingPage.click.uncheckShippingCheckbox();
    }
    BillingPage.actions.selectAddressFromBook();
  });
  it('Verify that registered user can add  new billing address', function () {
    if (variables.brand == 'boohooman.com') {
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    if (isSiteGenesisBrand && variables.brand != 'boohoomena.com') {
      BillingPage.click.changeShippingAddress();
      BillingPage.click.uncheckShippingCheckbox();
      shippingPage.click.proceedToBilling();
      BillingPage.click.addNewBilingAddress();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressRegisteredUser(localeAddress);
    } else {
      BillingPage.click.addNewBilingAddress();
      BillingPage.actions.addBillingAddressRegisteredUser(localeAddress);
    }
  });
  it('Verify that corect payment methods are displayed (Credit card, paypal, klarna, amazon pay, clearpay, laybuy, zip)', function () {
    if (variables.brand == 'boohoomena.com') {
      BillingPage.assertions.assertPaymentMethodCreditCardIsDisplayed();
      return; // Only credit card as payment option for this brand
    }
    BillingPage.assertions.assertPaymentMethodCreditCardIsDisplayed();
    BillingPage.assertions.assertPaymentMethodPayPalIsDisplayed();
    if (variables.locale === 'UK' || variables.locale === 'IE' || variables.locale === 'AU') {
      BillingPage.assertions.assertPaymentMethodKlarnaIsDisplayed();
      BillingPage.assertions.assertPaymentMethodClearPayIsDisplayed();
    }
      
    if (variables.brand === 'boohoo.com' && variables.locale === 'UK') {
      BillingPage.assertions.assertPaymentMethodGooglePayIsDisplayed();
      BillingPage.assertions.assertPaymentMethodAmazonPayIsDisplayed();
    }
  });
  it('Verify that promo code field is displayed', function () {
    if (isSiteGenesisBrand) {
      BillingPage.assertions.assertPromoCodeFieldIsDisplayed();
    } else {
      this.skip(); // Promo code field only for Site Genesis brands is displayed on Billing Page.
    }
  });
});

describe('Verify that registered user can place orders with available payment methods', function () {

  beforeEach (function () {
    Navigate.toBillingPage('RegisteredUser');
  });

  it('Verify that registered user can place order using Credit Card - Visa)', function () {
    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
  });
  it('Verify that registered user can place order using Credit Card - Master)', function () {
    BillingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.date, cards.master.code);
    BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
  });
  it('Verify that registered user can place order using Credit Card - Amex)', function () {
    BillingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
  });
  it('Verify that registered user can place order using PayPal', function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // Only credit card as payment option for this brand
    }
    BillingPage.actions.selectPayPal();
    BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
  });
  it('Verify that guest user can place order using Klarna', function () {
    if (variables.locale === 'UK' || variables.locale === 'IE' || variables.locale === 'AU') {
      BillingPage.actions.selectKlarna();
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    } else {
      this.skip();
    }
  });
});
