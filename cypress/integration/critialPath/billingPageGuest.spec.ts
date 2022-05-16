import assertionText from '../../helpers/assertionText';
import BillingPage from '../../pom/billingGuest.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import { SKU, LoginCredentials, CardDetails, PaymentMethodSelector } from '../../support/types';

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
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_firstName').type('Test');
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_lastName').type('test');
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_phone').type('02071542345');
      cy.get('[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button').click();
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address1').type('Oxford Street 12');
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_city').type('London');
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_postalCode').type('B16 8EH');
      cy.get('button[data-tau="proceed_to_payment"]').click();

    }); 
  });

  it('Verify that shipping address block is filled with data', function (){
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function (){
    BillingPage.assertions.assertShippingMethodPresent('\n                            UK Standard Delivery\n                        ');
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
    BillingPage.assertions.assertDateIsSelected('23', '4', '2001');

  });
  it('Verify that guest user cannot place order if email field is empty', function (){
    BillingPage.actions.emptyEmailField();
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.assertions.assertDateIsSelected('23', '4', '2001');
    cy.fixture('visa').then((card: CardDetails) => {
      BillingPage.actions.selectCreditCard(card.cardNo, card.owner, card.month, card.year, card.code);
    });
    BillingPage.assertions.assertEmptyEmailFieldError(assertionText.ShippingMandatoryFieldsFnameLnamePostcode['EN']);
  });
  it('Verify that guest user cannot place order if date of birth is not selected', function (){
    cy.fixture('visa').then((card: CardDetails) => {
      BillingPage.actions.selectCreditCard(card.cardNo, card.owner, card.month, card.year, card.code);
    });
    BillingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldsFnameLnamePostcode['EN']);
  });
  it('Verify that billing address can be same as shipping address', function (){
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('Verify that guest user can submit new billing address', function (){
    BillingPage.click.shippingCheckbox();
    BillingPage.assertions.assertBillingAddressFormIsPresent();
    BillingPage.actions.addBillingAddress('@1 Web');
    BillingPage.assertions.assertNewBillingAddress('1 Grange Close');
  });
  it('Verify that guest user can enter promo code and that is applied to order summary', function (){
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.actions.addPromoCode('EXTRA');
    BillingPage.assertions.assertPromoCodeIsApplied('EXTRA 5% OFF EVERYTHING');
  });
  it('Verify that guest user can enter gift card and that is applied to order summary', function (){
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.actions.addGiftCard('CALRYTIZDOROMYOW');
    BillingPage.assertions.assertGiftCardIsApplied('-£10.00');
  });
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
  describe('Verify that guest user can place orders with available payment methods', function (){
    it('Verify that guest user can place order using Credit Card - Visa)', function (){
      BillingPage.actions.selectDate('23', 'May', '2001');
      cy.fixture('visa').then((card: CardDetails) => {
        BillingPage.actions.selectCreditCard(card.cardNo, card.owner, card.month, card.year, card.code);
      });
    });
    it('Verify that guest user can place order using Credit Card - Master)', function (){
      BillingPage.actions.selectDate('23', 'May', '2001');
      cy.fixture('master').then((card: CardDetails) => {
        BillingPage.actions.selectCreditCard(card.cardNo, card.owner, card.month, card.year, card.code);
      });
    });
    it('Verify that guest user can place order using Credit Card - Amex)', function (){
      BillingPage.actions.selectDate('23', 'May', '2001');
      cy.fixture('amex').then((card: CardDetails) => {
        BillingPage.actions.selectCreditCard(card.cardNo, card.owner, card.month, card.year, card.code);
      });
    });
    it('Verify that guest user can place order using PayPal', function (){
      BillingPage.actions.selectDate('23', 'May', '2001');
    });
    it('Verify that guest user can place order using Klarna', function (){
   
    });
    it('Verify that guest user can place order using ClearPay', function (){
   
    });
  });
});
