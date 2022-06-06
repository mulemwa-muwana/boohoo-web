
import BillingPage from '../../pom/billing.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import shippingPage from '../../pom/shipping.page';
import addresses from '../../helpers/addresses';
import { SKU, LoginCredentials } from '../../support/types';
import cards from '../../helpers/cards';
import orderConfirmationPage from '../../pom/orderConfirmation.page';

describe('Order confirmation page for guest user', function (){
  beforeEach (()=>{
    HomePage.goto();
    cy.fixture('momJeansSku').then((itemSKU: SKU)=>{
      HomePage.actions.findItemUsingSKU(itemSKU.sku);
    });
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
    shippingPage.actions.firstNameField(addresses.AddressLineUK.firstName);
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.actions.selectCountry(addresses.AddressLineUK.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(addresses.AddressLineUK.addrline1);
    shippingPage.actions.cityFiled(addresses.AddressLineUK.city);
    shippingPage.actions.postcodeField(addresses.AddressLineUK.postcode);
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK.phone);
    shippingPage.click.proceedToBilling();
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.month, cards.visa.year, cards.visa.code);

    // BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
    // OrderConfirmationPage.click.continueBtn();
  });

  it('Verify that email is visible for guest user', function (){
    orderConfirmationPage.assertions.assertEmailIsDispplayed('euboohoo+guest@gmail.com'); 
  });

  it('Verify that order number is visible with adequate prefix', function (){
  }); 
  it('Verify that total amount paid is visible', function (){
  });
  it('Verify that shipping address is present with valid data', function (){
  });
  it('Verify that shipping method is present', function (){
  });
  it('Verify that billing address is present with valid data', function (){
  });
  it('Verify that payment method is present', function (){
  });
  it('Verify that ordered items are visible', function (){
  });
  it('Verify that for guest users password fields are present on order confirmation page', function (){
  });
  it('Verify that guest users can create account on order confiramtion page', function (){
  });
});
describe('Order confirmation page for registered user', function (){
  beforeEach (()=>{
    HomePage.goto();
    cy.fixture('momJeansSku').then((itemSKU: SKU)=>{
      HomePage.actions.findItemUsingSKU(itemSKU.sku);
    });
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
    shippingPage.click.proceedToBilling(); 
    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.month, cards.visa.year, cards.visa.code);
    BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
  });
  it('Verify that email is visible', function (){
  });
  it('Verify that order number is visible with adequate prefix', function (){
  }); 
  it('Verify that total amount paid is visible', function (){
  });
  it('Verify that shipping address is present with valid data', function (){
  });
  it('Verify that shipping method is present', function (){
  });
  it('Verify that billing address is present with valid data', function (){
  });
  it('Verify that payment method is present', function (){
  });
  it('Verify that ordered items are visible', function (){
  });
});