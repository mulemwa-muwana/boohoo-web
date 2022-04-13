import BillingPage from '../../pom/billingGuest.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import { SKU, LoginCredentials } from '../../support/types';

describe('Billing page functionality for guest user', function (){
  beforeEach (()=>{
    HomePage.goto();
    cy.fixture('momJeansSku').then((itemSKU: SKU)=>{
      HomePage.actions.findItemUsingSKU(itemSKU.sku);
    });
    PdpPage.actions.selectSize(1);
    PdpPage.actions.addToCart();
    HomePage.click.cartIcon();
    CartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
      CheckoutPage.click.continueAsGuestBtn();

      //  Shipping steps to be added
    }); 
  });

  it('Verify that shipping address block is filled with data', function (){
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function (){
    BillingPage.assertions.assertShippingMethodPresent('standard');
  });
  it('Verify that guest user can change shipping address', function (){
    BillingPage.click.changeShippingAddress();
  });
  it('Verify that guest user can change shipping method', function (){
    BillingPage.click.changeShippingMethod();
  });
  it('Verify that email field is filled with correct email address', function (){
    cy.fixture('users').then((credentials: LoginCredentials) => {
      BillingPage.assertions.assertEmailIsCorrect(credentials.guest);
    });
  });
  it('Verify that subscription block is displayed', function (){
    BillingPage.assertions.assertSubscriptionBlockPresent();
  });
  it('Verify that date of birth form is present', function (){
    BillingPage.assertions.assertDateFormIsPresent();
  });
  it('Verify that guest user can select date of birth', function (){
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.assertions.assertDateIsSelected('23', 'May', '2001');

  });
  it('Verify that guest user cannot place order if email field is empty', function (){
   
  });
  it('Verify that guest user cannot place order if date of birth is not selected', function (){
   
  });
  it('Verify that billing address can be same as shipping address', function (){
   
  });
  it('Verify that guest user can submit new billing address', function (){
   
  });
  it('Verify that guest user can enter promo code and that is applied to order summary', function (){
   
  });
  it('Verify that guest user can enter gift card and that is applied to order summary', function (){
   
  });
  it('Verify that corect payment methods are displayed (Credit card, paypal, klarna, amazon pay, clearpay, laybuy, zip)', function (){
   
  });
  describe('Verify that guest user can place orders with available payment methods', function (){
    it('Verify that guest user can place order using Credit Card - Visa)', function (){
   
    });
    it('Verify that guest user can place order using Credit Card - Master)', function (){
   
    });
    it('Verify that guest user can place order using Credit Card - Amex)', function (){
   
    });
    it('Verify that guest user can place order using PayPal', function (){
   
    });
    it('Verify that guest user can place order using Klarna', function (){
   
    });
    it('Verify that guest user can place order using ClearPay', function (){
   
    });
  });
  
});