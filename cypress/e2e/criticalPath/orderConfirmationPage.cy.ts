
import BillingPage from '../../pom/billing.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import shippingPage from '../../pom/shipping.page';
import { EnvironmentVariables, LoginCredentials } from '../../support/types';
import cards from '../../helpers/cards';
import orderConfirmationPage from '../../pom/orderConfirmation.page';
import assertionText from '../../helpers/assertionText';
import Addresses from '../../helpers/addresses';

describe('Order confirmation page for guest user', function (){
  beforeEach (()=>{
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    PdpPage.actions.selectSize(0);
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

  it('Verify that email is visible for guest user', function (){
    orderConfirmationPage.assertions.assertEmailIsDispplayed('euboohoo+guest@gmail.com');    
  });

  it('Verify that order number', function (){
    orderConfirmationPage.assertions.assertOrderNumberIsDispayed();
  }); 
  it('Verify that total amount paid is visible', function (){
    orderConfirmationPage.assertions.assertOrderValueIsDispayed();
  });
  it('Verify that shipping address is present with valid data', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1, localeAddress.phone);
  });
  it('Verify that shipping method is present', function (){
    orderConfirmationPage.assertions.assertShippingMethodIsDispayed();
  });
  it('Verify that billing address is present with valid data', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1, localeAddress.phone);
  });
  it('Verify that payment method is present', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[variables.language]);
  });
  it('Verify that for guest users password fields are present on order confirmation page', function (){
    orderConfirmationPage.assertions.assertThatPasswordFieldForGuestUserIsDispayed();
    orderConfirmationPage.assertions.assertThatConfirmPasswordFieldForGuestUserIsDispayed();
  });
});
describe('Order confirmation page for registered user', function (){
  beforeEach (()=>{
    const variables = Cypress.env() as EnvironmentVariables;
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
      CheckoutPage.actions.userEmailField(credentials.username);
      CheckoutPage.actions.passwordField(credentials.password);
      CheckoutPage.click.continueAsRegisteredUser();
    });
    shippingPage.actions.clickPreferedShippingMethod(variables);
    shippingPage.click.proceedToBilling(); 
    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.month, cards.visa.year, cards.visa.code);
    BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
  });
  it('Verify that email is visible', function (){
    orderConfirmationPage.assertions.assertEmailIsDispplayed('euboohoo+cypress789@gmail.com');  
  });
  it('Verify that order number is visible', function (){
    orderConfirmationPage.assertions.assertOrderNumberIsDispayed();
  }); 
  it('Verify that total amount paid is visible', function (){
    orderConfirmationPage.assertions.assertOrderTotalIsVisible();
  });
  it('Verify that shipping address is present with valid data', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1, localeAddress.phone);
  });
  it('Verify that shipping method is present', function (){
    orderConfirmationPage.assertions.assertShippingMethodIsDispayed();
  });
  it('Verify that billing address is present with valid data', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1, localeAddress.phone);
  });
  it('Verify that payment method is present', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[variables.language]);
  });
});