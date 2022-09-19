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
      cy.log(credentials.email, credentials.password),
      cy.prepareUser(credentials, variables.brand, variables.fullSKU);
      LoginPage.goto({ applyCookies: true });
      LoginPage.actions.loginViaPage(credentials.email, credentials.password);
      cy.wait(2000);
      CartPage.goto();
      CartPage.click.cartPageCheckoutButton();
    });
  });

  it('can be paid by credit/debit card', () => {

    // Test data.
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    const visa = Cards.visa;

    // Test steps.
    ShippingPage.actions.firstNameField(localeAddress.firstName);
    ShippingPage.actions.lastNameField(localeAddress.lastName);
    ShippingPage.actions.selectCountry(localeAddress.country);
    ShippingPage.click.addAddressManually();
    ShippingPage.actions.adressLine1(localeAddress.addrline1);
    ShippingPage.actions.cityFiled(localeAddress.city);
    ShippingPage.actions.postcodeField(localeAddress.postcode);
    ShippingPage.actions.phoneNumberField(localeAddress.phone);
    ShippingPage.click.proceedToBilling();
    BillingPage.actions.selectCreditCard(visa.cardNo, visa.owner, visa.month, visa.year, visa.code);
    OrderConfirmationPage.click.closePopUp();

    // Generate artefact for back end tests.
    it('can generate an artefact', () => {
      
      const variables = Cypress.env() as EnvironmentVariables;
      cy.get(':nth-child(1) > .b-summary_group-details').invoke('text').then(text => text.trim()).as('orderNumber');
      cy.get(':nth-child(2) > .b-summary_group-details').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
      cy.get('.b-confirmation_header-email').invoke('text').then(text => text.trim()).as('orderEmail');
      cy.get('.b-minicart_product-inner').invoke('attr', 'data-tau-product-id').as('fullSku')
        .then(function () {
          
          const testArtefactObject: TestArtefact = {
            orderNumber: this.orderNumber,
            orderTotal: this.orderValue,
            orderEmail: this.orderEmail,
            paymentMethod: getCardProviderByBrand(variables.brand, variables.locale),
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
  
          cy.createArtefact(testArtefactObject, 'worldpay', 'orderCreation'); // Names should be hard coded I think...
          
        });
    });

  });

});