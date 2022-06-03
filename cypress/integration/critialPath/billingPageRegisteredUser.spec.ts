import shippingMethods from '../../helpers/shippingMethods';
import BillingPage from '../../pom/billing.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import addresses from '../../helpers/addresses';
import shippingPage from '../../pom/shipping.page';
import { SKU, LoginCredentials, PaymentMethodSelector } from '../../support/types';
import cards from '../../helpers/cards';

describe('Billing page functionality for registered user', function (){
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
  });

  it('Verify that shipping address block is filled with data', function (){
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function (){
    BillingPage.assertions.assertShippingMethodPresent(shippingMethods.Standard.EN);
  });
  it('Verify that guest user can change shipping address', function (){
    BillingPage.click.changeShippingAddress();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that guest user can change shipping method', function (){
    BillingPage.click.changeShippingMethod();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that email address is displayed and it cannot be changed', function (){
    cy.fixture('users').then((credentials: LoginCredentials) => {
      BillingPage.assertions.assertEmailIsCorrect(credentials.username);
    });
    BillingPage.assertions.assertEmailFieldCantBeChanged();
  });
  it('Verify that billing address can be same as shipping address', function (){
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('Verify that registered user can submit new billing address from address book', function (){
    BillingPage.click.shippingCheckbox();
    BillingPage.actions.selectAddressFromBook();
  });
  it('Verify that registered user can submit new billing address', function (){
    BillingPage.click.shippingCheckbox();
    BillingPage.assertions.assertBillingAddressFormIsPresent();
    BillingPage.actions.addBillingAddress(addresses.AddressLineUK2.addrline1, addresses.AddressLineUK2.city, addresses.AddressLineUK2.county, addresses.AddressLineUK2.postcode);
  });

  /* This can be tested only if Promo code is available and Gift card 
  
   it('Verify that guest user can enter promo code and that is applied to order summary', function (){
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.actions.addPromoCode('EXTRA');
    BillingPage.assertions.assertPromoCodeIsApplied('EXTRA 5% OFF EVERYTHING');
  });
  it('Verify that guest user can enter gift card and that is applied to order summary', function (){
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.actions.addGiftCard('CALRYTIZDOROMYOW');
    BillingPage.assertions.assertGiftCardIsApplied('-£10.00');
  }); */

  it('Verify that corect payment methods are displayed (Credit card, paypal, klarna, amazon pay, clearpay, laybuy, zip)', function (){
    cy.fixture('paymentMethods').then((method: PaymentMethodSelector)=>{
      BillingPage.assertions.assertPaymentMethodIsDisplayed(method.card);
      BillingPage.assertions.assertPaymentMethodIsDisplayed(method.payPal);
      BillingPage.assertions.assertPaymentMethodIsDisplayed(method.klarna);
      BillingPage.assertions.assertPaymentMethodIsDisplayed(method.clearPay);
      BillingPage.assertions.assertPaymentMethodIsDisplayed(method.amazonPay);
      BillingPage.assertions.assertPaymentMethodIsDisplayed(method.layBuy);
      BillingPage.assertions.assertPaymentMethodIsDisplayed(method.zipPay);
    });
  });
  describe('Verify that registered user can place orders with available payment methods', function (){
    it('Verify that registered user can place order using Credit Card - Visa)', function (){
      BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.month, cards.visa.year, cards.visa.code);
      BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
    });
    it('Verify that registered user can place order using Credit Card - Master)', function (){
      BillingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.month, cards.master.year, cards.master.code);
      BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
    });
    it('Verify that registered user can place order using Credit Card - Amex)', function (){
      BillingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.month, cards.amex.year, cards.amex.code);
      BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
    });
    it('Verify that registered user can place order using PayPal', function (){

      // Need to try with origin
    });
  });
});
