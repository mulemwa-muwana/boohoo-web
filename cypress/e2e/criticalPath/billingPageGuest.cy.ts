import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import BillingPage from '../../pom/billing.page';
import shippingPage from '../../pom/shipping.page';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import cards from 'cypress/helpers/cards';
import { brand, locale, language } from 'cypress/support/e2e';

describe('Billing page functionality for guest user', function () {

  before(() => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wrap(credentials.guest).as('guestEmail');
    });
  });

  beforeEach(function () {
    if (brand == 'boohoomena.com') {
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
    }

    Navigate.toBillingPageUsingSession('GuestUser');
  });

  it('Verify that shipping address block is filled with data', function () {
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(locale, 'shippingMethod1');
    if (locale == 'EU') {
      this.skip(); // EU has only Europe and International Delivery
    }
    BillingPage.assertions.assertShippingMethodPresent(localeShippingMethod.shippingMethodName);
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

    if (brand == 'boohoo.com') {
      BillingPage.assertions.assertEmptyEmailFieldError(assertionText.emptyEmailFieldErrorBillingPage[language]);
    } else {
      BillingPage.assertions.assertEmptyEmailFieldError(assertionText.emptyEmailFieldErrorBillingPage[language]);
    }
  });
  it('Verify that guest user cannot place order if date of birth is not selected', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Date of birth form for Site Genesis brands is on Shipping page.
    }
    if (brand=='boohoo.com'&& locale=='US') {
      BillingPage.actions.selectCreditCardUS(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    } else {
      BillingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    }
    if (brand == 'boohoo.com') {
      BillingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldErrorBoohoo[language]);
    } else {
      BillingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldError[language]);
    }
  });
  it('Verify that billing address can be same as shipping address', function () {
    if (isSiteGenesisBrand) {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('Verify that guest user can submit new billing address', function () {
    if (brand == 'boohooman.com') { // For boohooman there is no adding new billing address, all fields are open for edit
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
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
      if (locale == 'US' || locale == 'AU') {
        shippingPage.actions.selectState(localeAddress.county);
      }
    }
  });
  it('Verify that corect payment methods are displayed (Credit card, paypal, klarna, amazon pay, clearpay, laybuy, zip)', function () {
    BillingPage.assertions.assertPaymentMethodCreditCardIsDisplayed();
    BillingPage.assertions.assertPaymentMethodPayPalIsDisplayed();

    if (locale == 'UK' || locale == 'IE' || locale == 'AU') {
      BillingPage.assertions.assertPaymentMethodKlarnaIsDisplayed();
      BillingPage.assertions.assertPaymentMethodClearPayIsDisplayed();
    }

  });

  it('Verify that user see error when try to add invalid giftCard', function () {
    BillingPage.actions.addGiftCard('WRONGGIFTCARDERR');
    BillingPage.assertions.assertGiftCardError();
  });

  it('Verify is correct validation added if code is empty for registered user', function () {
    BillingPage.actions.addGiftCard(' ');
    BillingPage.assertions.assertGiftCardEmptyError();
  });

});
