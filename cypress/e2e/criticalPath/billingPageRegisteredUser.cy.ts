import shippingMethods from '../../helpers/shippingMethods';
import BillingPage from '../../pom/billing.page';
import shippingPage from '../../pom/shipping.page';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import { locale, brand, giftCertificate } from 'cypress/support/e2e';
import billingPage from '../../pom/billing.page';

describe('Billing page functionality for registered user', function () {

  beforeEach(() => {
    Navigate.toBillingPageUsingSession('RegisteredUser');
  });

  it('CYP-31 Verify that shipping address block is filled with data', function () {
    BillingPage.assertions.assertShippingAddressPresent();
  });

  it('CYP-32 Verify that shipping method is displayed', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(locale, 'shippingMethod1');
    if (locale == 'EU') {
      this.skip(); // EU has only Europe and International Delivery
    }
    BillingPage.assertions.assertShippingMethodPresent(localeShippingMethod.shippingMethodName);
  });
  it('CYP-33 Verify that register user can change shipping address', function () {
    BillingPage.click.changeShippingAddress();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('CYP-34 Verify that register user can change shipping method', function () {
    BillingPage.click.changeShippingMethod();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('CYP-35 Verify that email address is displayed and it cannot be changed', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Email is not displayed on Billing page for Site Genesis brands
    }
    cy.fixture('users').then((credentials: LoginCredentials) => {
      BillingPage.assertions.assertEmailIsCorrect(credentials.username);
      BillingPage.assertions.assertEmailFieldCantBeChanged();
    });
  });
  it('CYP-36 Verify that billing address can be same as shipping address', function () {
    if (isSiteGenesisBrand) {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('CYP-37 Verify that registered user can submit new billing address from address book', function () {
    if (!isSiteGenesisBrand) {
      BillingPage.click.uncheckShippingCheckbox();
    }
    BillingPage.actions.selectAddressFromBook();
  });
  it('CYP-38 Verify that registered user can add  new billing address', function () {
    if (brand == 'boohooman.com') {
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    if (isSiteGenesisBrand && brand != 'boohoomena.com') {
      BillingPage.click.changeShippingAddress();
      BillingPage.click.uncheckShippingCheckbox();
      shippingPage.click.proceedToBilling();
      shippingPage.click.proceedToBillingVerification();
      BillingPage.click.addNewBilingAddress();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressRegisteredUser(localeAddress);
    } else {
      BillingPage.click.addNewBilingAddress();
      BillingPage.actions.addBillingAddressRegisteredUser(localeAddress);
    }
  });
  it('CYP-39 Verify that corect payment methods are displayed (Credit card, paypal, klarna, amazon pay, clearpay, laybuy, zip)', function () {
    if (brand == 'boohoomena.com') {
      BillingPage.assertions.assertPaymentMethodCreditCardIsDisplayed();
      return; // Only credit card as payment option for this brand
    }
    if (brand == 'misspap.com' && locale == 'UK') {
      cy.clearCookies();
      Navigate.toBillingPage('RegisteredUser');
    }
    BillingPage.assertions.assertPaymentMethodCreditCardIsDisplayed();
    BillingPage.assertions.assertPaymentMethodPayPalIsDisplayed();
    if (locale === 'UK' || locale === 'IE' || locale === 'AU' || locale === 'US') {
      BillingPage.assertions.assertPaymentMethodKlarnaIsDisplayed();
      if (brand == 'karenmillen.com' && locale == 'US') {
        BillingPage.assertions.assertPaymentMethodAfterPayIsDisplayed();
      } else {
        BillingPage.assertions.assertPaymentMethodClearPayIsDisplayed();
      }
    }
  });

  //  TESTS FOR SITE GENESIS BRANDS:  //
  it('CYP-40 Verify that promo code field is displayed', function () {
    if (isSiteGenesisBrand) {
      BillingPage.assertions.assertPromoCodeFieldIsDisplayed();
    } else {
      this.skip(); // Promo code field only for Site Genesis brands is displayed on Billing Page.
    }
  });

  it('CYP-41 Verify that user is able to Add, Remove gift certificate at Billing Page', function () {
    billingPage.actions.addGiftCard(giftCertificate);
    billingPage.assertions.assertGiftCardAdded();
    cy.wait(1000);
    billingPage.assertions.assertGiftCardinOrderSummary();
    cy.wait(1000);
    billingPage.actions.removeGiftCertificate();
    cy.wait(1000);
    billingPage.assertions.assertGiftCardRemoved();

  });

  it('CYP-42 Verify that user see error when try to add invalid giftCard', function () {
    billingPage.actions.addGiftCard('WRONGGIFTCARDERR');
    billingPage.assertions.assertGiftCardError();
  });
  it('CYP-43 Verify is correct validation added if code is empty for registered user', function () {
    billingPage.actions.addGiftCard('{backspace}');
    billingPage.assertions.assertGiftCardEmptyError();
  });

  it('CYP-44 Verify is correct validation added if code is invalid for registered user', function () {
    if (brand == 'boohoo.com') {
      billingPage.actions.addPromoCode('InvalidPromoCode');
      billingPage.assertions.assertInvalidPromoError();
    } else {
      this.skip();
    }

  });

  it('CYP-45 Verify is correct validation added if code is empty for registered user', function () {
    if (brand == 'boohoo.com') {
      billingPage.actions.addNoPromoCode();
      billingPage.assertions.assertEmptyPromoError();
    } else {
      this.skip();
    }

  });
});
