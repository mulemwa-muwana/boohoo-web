import orderConfirmationPage from '../../pom/orderConfirmation.page';
import billingPage from 'cypress/pom/billing.page';
import assertionText from '../../helpers/assertionText';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand, siteGenesisBrands } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import cards from '../../helpers/cards';
import { brand, language, locale, url } from 'cypress/support/e2e';

describe('Order confirmation page for guest user', function () {
  beforeEach(function () {
    if (brand == 'boohoomena.com') {
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
    }
  });

  it('CYP-142 Verify that guest user can place order with Visa card and that order confirmation page is displayed correctly', function () {
    Navigate.toBillingPage('GuestUser');
    if (!isSiteGenesisBrand) {
      billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
    }
    if ((brand == 'boohoo.com' || brand == 'karenmillen.com' || brand == 'misspap.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA')) {
      billingPage.actions.selectCreditCardUS(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    } else {
      billingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    }

    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.guest);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderValueIsDisplayed();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[language]);
      }

      const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
      orderConfirmationPage.assertions.assertThatPasswordFieldForGuestUserIsDisplayed();
      orderConfirmationPage.assertions.assertThatConfirmPasswordFieldForGuestUserIsDisplayed();
    });

    const paymentMethod: PaymentMethod = 'CreditCard_Visa';
    generateFrontendArtefact(brand, paymentMethod);
  });

  it('CYP-143 Verify that guest user can place order using Credit Card - Amex)', function () {
    Navigate.toBillingPage('GuestUser');
    if (!isSiteGenesisBrand) {
      billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
    }
    if ((brand == 'boohoo.com' || brand == 'karenmillen.com' || brand == 'misspap.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA')) {
      billingPage.actions.selectCreditCardUS(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    } else {
      billingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
    }
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();

    const paymentMethod: PaymentMethod = 'CreditCard_Amex';
    generateFrontendArtefact(brand, paymentMethod);
  });
  
  it('CYP-244 Verify that guest user can place order using iDEAL - BHO NL', function () {
    if (brand == 'boohoo.com' && locale == 'NL') {
      Navigate.toBillingPage('GuestUser');
      billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
      billingPage.actions.selectiDEALBoohooNL();
      
      billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    } else {
      this.skip();
    }
  });
  
  it('CYP-245 Verify that guest user can place order using Sofort - BHO De', function () {
    if (brand == 'boohoo.com' && locale == 'DE') { 
      Navigate.toBillingPage('GuestUser');
      billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');

      billingPage.actions.selectSofortBoohooDe();
      billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    } else {
      this.skip();
    }
  });
});

describe('Order confirmation page for registered user', function () {
  
  it('CYP-144 Verify that registerd user can place order with Master card and that order confirmation page is displayed correctly', function () {
    Navigate.toBillingPage('RegisteredUser');
    const isUScreditcardBrandAndLocale: boolean = (brand == 'boohoo.com' || brand == 'karenmillen.com' || brand == 'misspap.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'CA');
    if (isUScreditcardBrandAndLocale) {
      billingPage.actions.selectCreditCardUS(cards.masterUS.cardNo, cards.masterUS.owner, cards.masterUS.date, cards.masterUS.code);
    } else {
      billingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.date, cards.master.code);
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

    const paymentMethod: PaymentMethod = 'CreditCard_MasterCard';
    generateFrontendArtefact(brand, paymentMethod);
  });

  it('CYP-145 Verify that registered user can place order using PayPal', function () {
    if (!isSiteGenesisBrand) {
      Navigate.toBillingPage('RegisteredUser');
      billingPage.actions.selectPayPal();
      billingPage.assertions.assertOrderConfirmationPageIsDisplayed(); // Not working on Site Genesis
      const paymentMethod: PaymentMethod = 'PayPal';
      generateFrontendArtefact(brand, paymentMethod);
    } else {
      this.skip();
    }
  });

  it('CYP-146 Verify that registered user can place order using Klarna', function () {
    const noKlarnaBrandAndLocale: boolean = (brand == 'boohooman.com' || brand == 'nastygal.com') && (locale == 'AU' || locale == 'US' || locale == 'CA');
    const isKlarnaLocale: boolean = locale == 'UK' || locale == 'IE' || locale == 'AU' || locale == 'NL' || locale == 'US' || locale == 'CA';
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    if (noKlarnaBrandAndLocale) {
      this.skip();
    }
    if (isKlarnaLocale) {
      Navigate.toBillingPage('RegisteredUser');
      if ((brand == 'boohoo.com' || brand == 'boohooman.com') && locale == 'NL') {
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

// Method for generating .json artefact on Order Confirmation page for testing Business Manager.
function generateFrontendArtefact (brand: GroupBrands, paymentMethod: PaymentMethod) {

  cy.url({ timeout: 60000 }).should('match', /confirm/i);

  if (isSiteGenesisBrand) {
    cy.get('#main > div > div.order-confirmation-details > div > div.orderdetails-wrapper > div.orderdetails-column.order-information > div.orderdetails-content > div.orderdetails-header-number > span.value').invoke('text').then(text => text.trim()).as('orderNumber');
    cy.get('#main > div > div.order-confirmation-details > div > div.orderdetails-wrapper > div.orderdetails-column.order-payment-summary > div.orderdetails-content > div > div > table > tbody > tr.order-total > td.order-value').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
    cy.get('div.orderdetails-column.order-shipping-method.two-up > .orderdetails-content .value').invoke('text').then(text => text.trim()).as('deliveryMethod');
    cy.get('.sku > span:nth-child(2)').invoke('text').then(text => text.trim()).as('fullSku');
  } else {
    cy.get('[data-tau="order_number"], .orderdetails-header-number .value').invoke('text').then(text => text.trim()).as('orderNumber');
    cy.get('.m-total, .order-value').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
    cy.get('.b-summary_shipping-name').invoke('text').then(text => text.trim()).as('deliveryMethod');
    cy.get('.b-minicart_product-inner').invoke('attr', 'data-tau-product-id').as('fullSku');
  }
  cy.get('.b-confirmation_header-email, div.confirmation-message > div > div.confirmation-message-info > span').invoke('text').then(text => text.trim().split('\n')[0]).as('orderEmail')
    .then(function () {

      const testArtefactObject: TestArtefact = {
        orderNumber: this.orderNumber,
        orderTotal: this.orderValue,
        orderEmail: this.orderEmail,
        paymentMethod: paymentMethod,
        groupBrand: brand,
        deliveryMethod: this.deliveryMethod,
        items: [{
          sku: this.fullSku,
          quantity: 1
        }],
        testScenario: 'CompleteOrder',
        locale: locale,
        url: url,
        timestamp: Date.now()
      };

      const folder = 'cypress/artefacts_frontend/orderCreation/';
      const brandName = brand.split('.')[0]; // Get first part of a brand: boohoo.com => boohoo
      cy.createArtefact(testArtefactObject, folder, brandName, paymentMethod.toLowerCase());
    });
}

export { generateFrontendArtefact };
