import { getCardProviderByBrand } from 'cypress/helpers/common';
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
    ShippingPage.click.addAddressManually();
    ShippingPage.actions.adressLine1(localeAddress.addrline1);
    ShippingPage.actions.cityFiled(localeAddress.city);
    ShippingPage.actions.postcodeField(localeAddress.postcode);
    ShippingPage.actions.phoneNumberField(localeAddress.phone);
    ShippingPage.click.proceedToBilling();
    cy.wait(8000);
  });

  it('can select Credit Card as payment method and generate an artefact', function () {
    const visa = Cards.visa;
    BillingPage.actions.selectCreditCard(visa.cardNo, visa.owner, visa.date, visa.code);
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, getCardProviderByBrand(variables.brand, variables.locale));
  });

  it('can select Klarna as payment method and generate an artefact', function () {
    BillingPage.actions.selectKlarna();
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, 'Klarna');
  });

  it('can select Laybuy as payment method and generate an artefact', function () {
    BillingPage.actions.selectLaybuy();
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, 'LayBuy');
  });

  it('can select Clearpay as payment method and generate an artefact', function () {
    BillingPage.actions.selectClearpay();
    OrderConfirmationPage.click.closePopUp();

    generateArtefact(variables.brand, 'Clearpay');
  });

  // Method for generating artefact on OrderConfirmation page for back end tests.
  function generateArtefact (brand: GroupBrands, paymentMethod: PaymentMethod) {
    const variables = Cypress.env() as EnvironmentVariables;
    cy.get('[data-tau="order_number"], .orderdetails-header-number .value').invoke('text').then(text => text.trim()).as('orderNumber');
    cy.get('.m-total, .order-value').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
    cy.get('.b-confirmation_header-email, div.confirmation-message > div > div.confirmation-message-info > span').invoke('text').then(text => text.trim()).as('orderEmail');
    if (variables.brand == 'oasis-stores.com') {
      cy.get('.sku > span:nth-child(2)').invoke('text').then(text => text.trim()).as('fullSku');
    } else {
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