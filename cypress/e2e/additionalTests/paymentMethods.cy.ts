import { brand, language, locale } from 'cypress/support/e2e';
import Navigate from 'cypress/helpers/navigate';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import billingPage from 'cypress/pom/billing.page';
import assertionText from 'cypress/helpers/assertionText';
import cards from 'cypress/helpers/cards';
import { generateFrontendArtefact } from '../criticalPath/orderConfirmationPage.cy';
import orderConfirmationPage from 'cypress/pom/orderConfirmation.page';
import Addresses from 'cypress/helpers/addresses';

describe('Additional payment methods for guest user', function () {
  beforeEach(function () {
    if (brand == 'boohoomena.com')
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
  });

  it('Verify that guest user can place order with Master card', function () {
    Navigate.toBillingPage('GuestUser');
    if (!isSiteGenesisBrand) {
      billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
    }
    if ((brand == 'boohoo.com' || brand == 'karenmillen.com') && (locale == 'US' || locale == 'CA')) {
      billingPage.actions.selectCreditCardUS(cards.master.cardNo, cards.master.owner, cards.master.date, cards.master.code);
    } else {
      billingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.date, cards.master.code);
    }
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
  
    const paymentMethod: PaymentMethod = 'CreditCard_MasterCard';
    generateFrontendArtefact(brand, paymentMethod);

  });

  it('Verify that guest user can place order with Klarna', function () {
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    if (brand == 'boohooman.com' && (locale == 'AU'||locale == 'US')) {
      this.skip();
    }
    if (locale == 'UK' || locale == 'IE' || locale == 'AU'|| locale == 'NL' || locale == 'US') {
      Navigate.toBillingPage('GuestUser');
      if (!isSiteGenesisBrand) {
        billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
      }
      if ((brand == 'boohoo.com' || brand == 'boohooman.com') && locale =='NL') {
        billingPage.actions.selectKlarnaBoohooNl();
      } else {
        billingPage.actions.selectKlarna(localeAddress.phone);
      }

      billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    } else {
      this.skip();
    }
    const paymentMethod: PaymentMethod = 'Klarna';
    generateFrontendArtefact(brand, paymentMethod);
  });
});

describe('Additional payment methods for registered user', function () {
  it('Verify that registered user can place order with Visa card', function () {
    Navigate.toBillingPage('RegisteredUser');
    if (( brand == 'boohoo.com' || brand == 'karenmillen.com') && locale =='US') {
      billingPage.actions.selectCreditCardUS(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    } else {
      billingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    }
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.username);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderTotalIsVisible();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[language]);
      }

      const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
    });
    const paymentMethod: PaymentMethod = 'CreditCard_Visa';
    generateFrontendArtefact(brand, paymentMethod);
  });

  it('Verify that registered user can place order with Amex card', function () {
    Navigate.toBillingPage('RegisteredUser');
    if (( brand == 'boohoo.com' || brand == 'karenmillen.com') && locale =='US') {
      billingPage.actions.selectCreditCardUS(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    } else {
      billingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    }
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.username);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderTotalIsVisible();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[language]);
      }

      const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
    });
    const paymentMethod: PaymentMethod = 'CreditCard_Amex';
    generateFrontendArtefact(brand, paymentMethod);

  });
});

