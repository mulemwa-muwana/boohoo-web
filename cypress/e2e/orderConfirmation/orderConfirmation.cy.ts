import BillingPage from '../../pom/billing.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import shippingPage from '../../pom/shipping.page';
import cards from '../../helpers/cards';
import orderConfirmationPage from '../../pom/orderConfirmation.page';
import Addresses from '../../helpers/addresses';
import { getCardProviderByBrand } from '../../helpers/common';

describe('Order confirmation page for guest user', function () {
  beforeEach(() => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    PdpPage.actions.selectSize();
    cy.wait(2000);
    PdpPage.click.addToCart();
    cy.wait(7000);
    HomePage.click.cartIcon();
    CartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
      CheckoutPage.click.continueAsGuestBtn();
    });
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.addAddressManually();
    shippingPage.click.confirmEmail();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityFiled(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);

    // There's a date of birth field on Oasis's checkout, we need to fill this out as well.
    if (variables.brand == 'oasis-stores.com') {
      BillingPage.actions.selectDate('23', 'May', '2001');
    } else {
      BillingPage.actions.selectDate('23', 'May', '2001');
    }
    shippingPage.click.proceedToBilling();

    // If the validate address button shows, click it away.
    if (variables.brand == 'oasis-stores.com') {
      cy.get('.verification-address-button').click({ force: true });
    }

    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    orderConfirmationPage.click.closePopUp();
  });

  it('Get order details from order confirmation page and create test artefact', async function () {
    const variables = Cypress.env() as EnvironmentVariables;
    cy.get('#main > div.confirmation.create-account.confirmation-fb-enabled > div.order-confirmation-details > div.orderdetails > div.orderdetails-wrapper > div.orderdetails-column.order-information > div.orderdetails-content > div.orderdetails-header-number > span.value').invoke('text').then(text => text.trim()).as('orderNumber');
    cy.get('#main > div.confirmation.create-account.confirmation-fb-enabled > div.order-confirmation-details > div.orderdetails > div.orderdetails-wrapper > div.orderdetails-column.order-payment-summary > div.orderdetails-content > div > div > table > tbody > tr.order-total > td.order-value').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
    cy.get('#main > div.confirmation.create-account.confirmation-fb-enabled > div.confirmation-message > div.confirmation-message-inner > div.confirmation-message-info > span').invoke('text').then(text => text.trim()).as('orderEmail');
    if (variables.brand == 'oasis-stores.com') {
      cy.get('.sku > span:nth-child(2)').invoke('text').then(text => text.trim()).as('fullSku');
    } else {
      cy.get('.b-minicart_product-inner').invoke('attr', 'data-tau-product-id').as('fullSku');
    }
    cy.get('#main > div.confirmation.create-account.confirmation-fb-enabled > div.confirmation-message > div.confirmation-message-inner > div.confirmation-message-info > span').invoke('text').then(text => text.trim()).as('orderEmail')
      .then(function () {

        const paymentMethodForBrand = getCardProviderByBrand(variables.brand, variables.locale);
        const testArtefactObject: TestArtefact = {
          orderNumber: this.orderNumber,
          orderTotal: this.orderValue,
          orderEmail: this.orderEmail,
          paymentMethod: paymentMethodForBrand,
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

        cy.createArtefact(testArtefactObject, paymentMethodForBrand.toLowerCase(), 'orderCreation'); // Names should be hard coded I think...

      });
  });

});