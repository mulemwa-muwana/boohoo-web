import { getCardProviderByBrand, isBrandSupportingPaymentMethod } from 'cypress/helpers/common';
import Addresses from 'cypress/helpers/addresses';
import BillingPage from 'cypress/pom/billing.page';
import LoginPage from 'cypress/pom/login.page';
import OrderConfirmationPage from 'cypress/pom/orderConfirmation.page';
import Cards from '../../helpers/cards';
import ShippingPage from 'cypress/pom/shipping.page';
import CartPage from 'cypress/pom/cart.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Boohoo order placement', () => {

  beforeEach(() => {
    cy.createUser(variables.brand).then((credentials: NewCustomerCredentials) => {
      cy.log(credentials.email, credentials.password);

      cy.prepareUser(credentials, variables.brand, variables.fullSKU);
      LoginPage.goto({ applyCookies: true });
      LoginPage.actions.loginViaPage(credentials.email, credentials.password);
      cy.wait(2000);
      CartPage.goto();
      CartPage.click.proceedToCheckout();
    });

    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    ShippingPage.actions.firstNameField(localeAddress.firstName);
    ShippingPage.actions.lastNameField(localeAddress.lastName);
    ShippingPage.actions.selectCountry(localeAddress.country);
    ShippingPage.actions.phoneNumberField(localeAddress.phone);
    
    ShippingPage.click.addAddressManually();
    cy.wait(2000);

    ShippingPage.actions.adressLine1(localeAddress.addrline1);
    ShippingPage.actions.cityField(localeAddress.city);
    ShippingPage.actions.postcodeField(localeAddress.postcode);
    ShippingPage.click.proceedToBilling();
    if (['oasis-stores.com', 'coastfashion.com', 'warehousefashion.com', 'misspap.com', 'karenmillen.com'].includes(variables.brand)) {
      ShippingPage.click.proceedToBillingVerificationAndWaitBillingPageToLoad();
    } else {
      BillingPage.assertions.assertBillingPageIsLoaded();
    }
  });

  it('can select Credit Card as payment method and generate an artefact', function () {
    const paymentMethod: PaymentMethod = getCardProviderByBrand(variables.brand, variables.locale);
    if (!isBrandSupportingPaymentMethod(variables.brand, paymentMethod)) {
      this.skip();
    }

    const visa = Cards.visa;
    BillingPage.actions.selectCreditCard(visa.cardNo, visa.owner, visa.date, visa.code);
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, paymentMethod);
  });

  it('can select Klarna as payment method and generate an artefact', function () {
    const paymentMethod: PaymentMethod = 'Klarna';
    if (!isBrandSupportingPaymentMethod(variables.brand, paymentMethod)) {
      this.skip();
    }

    BillingPage.actions.selectKlarna();
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, paymentMethod);
  });

  it('can select PayPal as payment method and generate an artefact', function () {
    const paymentMethod: PaymentMethod = 'PayPal';
    if (!isBrandSupportingPaymentMethod(variables.brand, paymentMethod)) {
      this.skip();
    }

    BillingPage.actions.selectPayPal();
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, paymentMethod);
  });

  it.skip('can select Laybuy as payment method and generate an artefact', function () {
    const paymentMethod: PaymentMethod = 'LayBuy';
    if (!isBrandSupportingPaymentMethod(variables.brand, paymentMethod)) {
      this.skip();
    }

    BillingPage.actions.selectLaybuy();
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, paymentMethod);
  });

  it.skip('can select Clearpay as payment method and generate an artefact', function () {
    const paymentMethod: PaymentMethod = 'Clearpay';
    if (!isBrandSupportingPaymentMethod(variables.brand, paymentMethod)) {
      this.skip();
    }

    BillingPage.actions.selectClearpay();
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, paymentMethod);
  });

  // Method for generating artefact on OrderConfirmation page for back end tests.
  function generateArtefact (brand: GroupBrands, paymentMethod: PaymentMethod) {
    const variables = Cypress.env() as EnvironmentVariables;
    
    if (['oasis-stores.com', 'coastfashion.com', 'warehousefashion.com', 'misspap.com', 'karenmillen.com'].includes(variables.brand)) {
      cy.get('#main > div > div.order-confirmation-details > div > div.orderdetails-wrapper > div.orderdetails-column.order-information > div.orderdetails-content > div.orderdetails-header-number > span.value').invoke('text').then(text => text.trim()).as('orderNumber');
      cy.get('#main > div > div.order-confirmation-details > div > div.orderdetails-wrapper > div.orderdetails-column.order-payment-summary > div.orderdetails-content > div > div > table > tbody > tr.order-total > td.order-value').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
      cy.get('.sku > span:nth-child(2)').invoke('text').then(text => text.trim()).as('fullSku');
    } else {
      cy.get('[data-tau="order_number"], .orderdetails-header-number .value').invoke('text').then(text => text.trim()).as('orderNumber');
      cy.get('.m-total, .order-value').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
      cy.get('.b-minicart_product-inner').invoke('attr', 'data-tau-product-id').as('fullSku');
    }
    cy.get('.b-confirmation_header-email, div.confirmation-message > div > div.confirmation-message-info > span').invoke('text').then(text => text.trim()).as('orderEmail')
      .then(function () {

        const testArtefactObject: TestArtefact = {
          orderNumber: this.orderNumber,
          orderTotal: this.orderValue,
          orderEmail: this.orderEmail,
          paymentMethod: paymentMethod,
          groupBrand: variables.brand,
          deliveryMethod: 'UKSuperSaver', // This is a code in the backend, not found on the front end, the test should target this delivery method code.
          items: [{
            sku: this.fullSku,
            quantity: 1
          }],
          testScenario: 'CompleteOrder',
          locale: variables.locale,
          url: variables.url,
          timestamp: Date.now()
        };

        const brandName = brand.split('.')[0]; // Get first part of a brand: boohoo.com => boohoo
        cy.createArtefact(testArtefactObject, brandName, paymentMethod.toLowerCase());
      });
  }

});