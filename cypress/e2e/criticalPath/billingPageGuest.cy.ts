import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import BillingPage from '../../pom/billing.page';
import shippingPage from '../../pom/shipping.page';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import cards from 'cypress/helpers/cards';

const variables = Cypress.env() as EnvironmentVariables; 

describe('Billing page functionality for guest user', function () {

  before(() => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wrap(credentials.guest).as('guestEmail');
    });
  });
  
  beforeEach (function () { 
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
    }

    Navigate.toBillingPageUsingSession('GuestUser');
  });

  it('Verify that shipping address block is filled with data', function () {
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    if (variables.locale != 'EU') {    
      BillingPage.assertions.assertShippingMethodPresent(localeShippingMethod.shippingMethodName); // EU has only Europe and International Delivery
    }

  });
  it('Verify that guest user can change shipping address', function () {
    BillingPage.click.changeShippingAddress();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that guest user can change shipping method', function () {
    BillingPage.click.changeShippingMethod();
    BillingPage.assertions.assertShippingPageIsOpened();
  });

  it('Verify that email field is filled with correct email address', function () {   
    if (isSiteGenesisBrand) { 
      this.skip(); // Email field for Site Genesis brands is on Shipping page.
    }
    BillingPage.assertions.assertEmailIsCorrect(this.guestEmail);
  });
  it('Verify that date of birth form is present and that guest user can select date of birth', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Date of birth form for Site Genesis brands is on Shipping page.
    }
    BillingPage.assertions.assertDateFormIsPresent();
    BillingPage.actions.selectDate('23', '4', '2001');
    BillingPage.assertions.assertDateIsSelected('23', '4', '2001');
  });
  it('Verify that guest user cannot place order if email field is empty', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Email field for Site Genesis brands is on Shipping page.
    }
    BillingPage.actions.emptyEmailField();
    BillingPage.actions.selectDate('23', '4', '2001');
    BillingPage.click.chooseCC();
    
    if (variables.brand == 'boohoo.com') {
      BillingPage.assertions.assertEmptyEmailFieldError(assertionText.emptyEmailFieldErrorBillingPage[variables.language]);
    } else {
      BillingPage.assertions.assertEmptyEmailFieldError(assertionText.emptyEmailFieldErrorBillingPage[variables.language]);
    }
  });
  it('Verify that guest user cannot place order if date of birth is not selected', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Date of birth form for Site Genesis brands is on Shipping page.
    }
    BillingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    if (variables.brand == 'boohoo.com') {
      BillingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldErrorBoohoo[variables.language]);
    } else {
      BillingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldError[variables.language]);
    }
  });
  it('Verify that billing address can be same as shipping address', function () {
    if (isSiteGenesisBrand) {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('Verify that guest user can submit new billing address', function () {
    if (variables.brand == 'boohooman.com') { // For boohooman there is no adding new billing address, all fields are open for edit
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    if (isSiteGenesisBrand) {
      BillingPage.click.changeShippingAddress();
      BillingPage.click.uncheckShippingCheckbox();
      shippingPage.click.proceedToBilling();
      cy.wait(2000);
      BillingPage.click.addNewBilingAddress();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressGuestUser(localeAddress.addressLine, localeAddress.city, localeAddress.country, localeAddress.postcode);
    } else {
      BillingPage.click.uncheckShippingCheckbox();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressGuestUser(localeAddress.addressLine, localeAddress.city, localeAddress.country, localeAddress.postcode);
      if (variables.locale == 'US' || variables.locale == 'AU') {
        shippingPage.actions.selectState(localeAddress.county);
      }
    }
  });
  it('Verify that corect payment methods are displayed (Credit card, paypal, klarna, amazon pay, clearpay, laybuy, zip)', function () {
    if (variables.brand == 'misspap.com') {
      cy.clearCookies();
      Navigate.toBillingPage('GuestUser');
    }
    BillingPage.assertions.assertPaymentMethodCreditCardIsDisplayed();
    BillingPage.assertions.assertPaymentMethodPayPalIsDisplayed();

    if (variables.locale == 'UK' || variables.locale == 'IE' || variables.locale == 'AU') {
      BillingPage.assertions.assertPaymentMethodKlarnaIsDisplayed();
      BillingPage.assertions.assertPaymentMethodClearPayIsDisplayed();
    }
  
  });

});
