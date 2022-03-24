import CartPage from '../../pom/cart.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';

describe('Cart basic functionality', function (){
  beforeEach (()=>{
    HomePage.goto();
    HomePage.actions.findItemUsingSKU('aDZZ02796-256-56');
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

    // Fill in later
  });
  it('Verify that Product Color is visible', function (){
 
    // Fill in later
  });
  it('Verify that Product Quantity is visible', function (){

    // Fill in later
  });
  it('Verify that Price (plus total) is visible', function (){
    
    // Fill in later
  });
  it('Verify that user can update quantity of products', function (){

    // Fill in later
  });
  it('Verify that user can remove product from cart', function (){
 
    // Fill in later
  });
  it('Verify that Content slot with delivery information (if configured) is displayed', function (){

    // Fill in later
  });
  it('Verify that Content slot with delivery information (if configured) is displayed', function (){

    // Fill in later
  });
  it('Verify that Get Premier slots are visible if Premier is not in the bag', function (){

    // Fill in later
  });
  it('Verify that guest users are redirected to login page after clicking Checkout CTA', function (){

    // Fill in later
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