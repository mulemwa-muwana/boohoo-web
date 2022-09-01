import BillingPage from '../../pom/billing.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import shippingPage from '../../pom/shipping.page';
import cards from '../../helpers/cards';
import orderConfirmationPage from '../../pom/orderConfirmation.page';
import Addresses from '../../helpers/addresses';
import shippingMethods from '../../helpers/shippingMethods';
import { getCardProviderByBrand } from '../../helpers/common';

describe('Order confirmation page for guest user', function () {
  beforeEach (()=>{
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    PdpPage.actions.selectSize(1);
    cy.wait(2000);
    PdpPage.click.addToCart();
    cy.wait(7000);
    HomePage.click.cartIcon();  
    PdpPage.click.miniCartViewCartBtn();
    CartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
      CheckoutPage.click.continueAsGuestBtn();
    }); 
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityFiled(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.click.proceedToBilling();
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.month, cards.visa.year, cards.visa.code);
    orderConfirmationPage.click.closePopUp();
  });

  it('Verify that email is visible for guest user', async function () {
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
          url: variables.url
        };

        cy.createArtefact(testArtefactObject, 'worldpay', 'orderCreation'); // Names should be hard coded I think...
        
      });
  });

});