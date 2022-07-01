import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';
import PdpPage from '../../pom/pdp.page';
import { EnvironmentVariables, LoginCredentials } from '../../support/types';

describe('Cart basic functionality for guest user', function (){
  beforeEach (() =>{
    const variables = Cypress.env() as EnvironmentVariables;

    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    PdpPage.actions.selectSize(1);
    PdpPage.actions.addToCart();
    HomePage.click.cartIcon();
  }); 
  it('Verify the presence of table with all products added to cart', function (){   
    CartPage.assertions.assertTableWithProductIsVisible();
  });
  it('Verify that Product Image is visible', function (){
    CartPage.assertions.assertProductImageIsDisplayed('.l-cart_product-image');
  });
  it('Verify that Product name is visible', function (){
    CartPage.assertions.assertProductTitleIsVisible();
  });
  it('Verify that Product Color, size and quantity are visible', function (){
    CartPage.assertions.assertProductDetailsAreVisible();
  });
  it('Verify that Price (plus total) is visible', function (){
    CartPage.assertions.assertPriceAndSubtotalAreVisible();
  });
  it('Verify that user can update quantity of products', function (){
    CartPage.actions.editCartQuantity('3');
    CartPage.assertions.assertQuantityIsDisplayed('3');

  });
  it('Verify that user can remove product from cart', function (){
    CartPage.actions.removeFromCart(0);
    CartPage.assertions.assertCartIsEmpty();
  });
  it('Verify that Get Premier slots are visible if Premier is not in the bag', function (){
    CartPage.assertions.assertPremierSlotsAreVisible();
  });
  it('Verify that guest users are redirected to login page after clicking Checkout CTA', function (){
    cy.wait(5000);
    CartPage.click.proceedToCheckout();
    CheckoutPage.assertions.assertEmailnFieldForGuestUserIsVisible();
  });
  it('Verify that PayPal CTA is displayed and functional', function (){
    CartPage.assertions.assertPayPalCTAisVisible();
    CartPage.actions.openPayPalSandbox(); 

    //  Nothing happens?
  });
  it('Verify that Klarna CTA is displayed and functional', function (){
    CartPage.assertions.assertKlarnaCTAisVisible();
    CartPage.actions.openKlarnaSandbox();
  });
  it('Verify that AmazonPay CTA is displayed and functional', function (){
    CartPage.assertions.assertAmazonPazCTAisVisible();
    CartPage.actions.openAmazonSandbox();
  });

});

describe('Cart page for Registered user', function (){
  beforeEach (()=>{
    const variables = Cypress.env() as EnvironmentVariables;

    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login(credentials.username, credentials.password); 
      cy.wait(5000);

      // HomePage.click.cartIcon();  
      // CartPage.click.clearCart();
    });
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    PdpPage.actions.selectSize(1);
    PdpPage.actions.addToCart();
    HomePage.click.cartIcon();
  }); 
  it('Verify that registered users are redirected to shipping page after clicking Checkout CTA', function (){
    CartPage.click.proceedToCheckout();
    CheckoutPage.assertions.assertUserProceededToShippingPage();
  });
});