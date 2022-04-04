import CartPage from '../../pom/cart.page';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';
import PdpPage from '../../pom/pdp.page';
import { SKU } from '../../support/types';

describe('Cart basic functionality', function (){
  beforeEach (()=>{
    HomePage.goto();
    cy.fixture('momJeansSku').then((itemSKU: SKU)=>{
      HomePage.actions.findItemUsingSKU(itemSKU.sku);
    });
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

    // Fill in later
  });
  it('Verify that user can remove product from cart', function (){
    CartPage.actions.removeFromCart(0);
    CartPage.assertions.assertCartIsEmpty();
  });
  it('Verify that Get Premier slots are visible if Premier is not in the bag', function (){
    CartPage.assertions.assertPremierSlotsAreVisible();
  });
  it.only('Verify that guest users are redirected to login page after clicking Checkout CTA', function (){
    CartPage.click.proceedToCheckout();
    LoginPage.assertions.assertLoginFormIsPresent();
  });
  it('Verify that registered users are redirected to shipping page after clicking Checkout CTA', function (){

    // Fill in later
  });
  it('Verify that PayPal CTA is displayed and functional', function (){

    // Fill in later
  });
  it('Verify that Klarna CTA is displayed and functional', function (){

    // Fill in later
  });
  it('Verify that AmazonPay CTA is displayed and functional', function (){

    // Fill in later
  });

});