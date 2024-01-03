import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import BillingPage from '../../pom/billing.page';
import shippingPage from '../../pom/shipping.page';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import cards from 'cypress/helpers/cards';
import { brand, locale, language } from 'cypress/support/e2e';

const guestDayOfBirth = '23';
const guestMonthOfBirth = '4';
const guestYearOfBirth = '2001';

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

  it('CYP-16 Verify that shipping address block is filled with data', function () {
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('CYP-17 Verify that shipping method is displayed', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(locale, 'shippingMethod1');
    BillingPage.assertions.assertShippingMethodPresent(localeShippingMethod.shippingMethodName);
  });

  it('CYP-18 Verify that guest user can change shipping address', function () {
    BillingPage.click.changeShippingAddress();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('CYP-19 Verify that guest user can change shipping method', function () {
    BillingPage.click.changeShippingMethod();
    BillingPage.assertions.assertShippingPageIsOpened();
  });

  it('CYP-20 Verify that email field is filled with correct email address', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Email field for Site Genesis brands is on Shipping page.
    }
    BillingPage.assertions.assertEmailIsCorrect(this.guestEmail);
  });
  it('CYP-21 Verify that date of birth form is present and that guest user can select date of birth', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Date of birth form for Site Genesis brands is on Shipping page.
    }
    BillingPage.assertions.assertDateFormIsPresent();
    BillingPage.actions.selectDate(guestDayOfBirth, guestMonthOfBirth, guestYearOfBirth);
    BillingPage.assertions.assertDateIsSelected(guestDayOfBirth, guestMonthOfBirth, guestYearOfBirth);
  });
  it('CYP-22 Verify that guest user cannot place order if email field is empty', function () {
    if (isSiteGenesisBrand || brand != 'boohoo.com') {
      this.skip(); // Email field for Site Genesis brands is on Shipping page and logic for other brands to be included later
    }
    BillingPage.actions.emptyEmailField();
    BillingPage.actions.selectDate(guestDayOfBirth, guestMonthOfBirth, guestYearOfBirth);
    BillingPage.click.chooseCC();

    BillingPage.assertions.assertEmptyEmailFieldError(assertionText.emptyEmailFieldErrorBillingPage[language]);
  });
  it('CYP-23 Verify that guest user cannot place order if date of birth is not selected', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Date of birth form for Site Genesis brands is on Shipping page.
    }
    if ((brand=='boohoo.com' || brand=='nastygal.com') && (locale=='US' || locale=='CA')) {
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
  it('CYP-24 Verify that billing address can be same as shipping address', function () {
    if (isSiteGenesisBrand) {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('CYP-25 Verify that guest user can submit new billing address', function () {
    if (brand == 'boohooman.com') { // For boohooman there is no adding new billing address, all fields are open for edit
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(locale, 'newAddedPrimaryAddress');
    if (isSiteGenesisBrand) {
      BillingPage.click.changeShippingAddress();
      BillingPage.click.uncheckShippingCheckbox();
      shippingPage.click.proceedToBilling();
      shippingPage.click.proceedToBillingVerification();
      cy.wait(2000);
      BillingPage.click.addNewBilingAddress();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressGuestUser(localeAddress.addressLine, localeAddress.city, localeAddress.country,localeAddress.county, localeAddress.postcode);
    } else {
      BillingPage.click.uncheckShippingCheckbox();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressGuestUser(localeAddress.addressLine, localeAddress.city, localeAddress.country, localeAddress.county,localeAddress.postcode);
    }
  });
  it('CYP-26 Verify that corect payment methods are displayed (Credit card, paypal, klarna, amazon pay, clearpay, laybuy, zip)', function () {
    BillingPage.assertions.assertPaymentMethodCreditCardIsDisplayed();
    BillingPage.assertions.assertPaymentMethodPayPalIsDisplayed();
    if (locale == 'UK' || locale == 'IE') {
      BillingPage.assertions.assertPaymentMethodKlarnaIsDisplayed();
      BillingPage.assertions.assertPaymentMethodClearPayIsDisplayed();
    }
    if (locale == 'AU' || locale == 'US') {
      BillingPage.assertions.assertPaymentMethodKlarnaIsDisplayed();
      BillingPage.assertions.assertPaymentMethodAfterPayIsDisplayed ();
    }

  });

  it('CYP-27 Verify that user see error when try to add invalid giftCard', function () {
    if (brand == 'boohoo.com') {
      BillingPage.actions.addGiftCard('WRONGGIFTCARDERR');
      BillingPage.assertions.assertGiftCardError();
    } else {
      this.skip();
    }

  });
  it('CYP-28 Verify is correct validation added if code is empty for registered user', function () {
    if (brand == 'boohoo.com') {
      BillingPage.actions.addGiftCard(' ');
      BillingPage.assertions.assertGiftCardEmptyError();
    } else {
      this.skip();
    }

  });

  it('CYP-29 Verify is correct validation added if code is invalid for guest user', function () {
    if (brand == 'boohoo.com') {
      BillingPage.actions.addPromoCode('InvalidPromoCode');
      BillingPage.assertions.assertInvalidPromoError();
    } else {
      this.skip();
    }

  });

  it('CYP-30 Verify is correct validation added if code is empty for guest user', function () {
    if (brand == 'boohoo.com') {
      BillingPage.actions.addNoPromoCode();
      BillingPage.assertions.assertEmptyPromoError();
    } else {
      this.skip();
    }

  });
});
