import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import BillingPage from '../../pom/billing.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import shippingPage from '../../pom/shipping.page';
import cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';

describe('Billing page functionality for guest user', function (){
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
    });
    CheckoutPage.click.continueAsGuestBtn();

    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityFiled(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.click.proceedToBilling();
  });

  it('Verify that shipping address block is filled with data', function (){
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    BillingPage.assertions.assertShippingMethodPresent(localeShippingMethod.shippingMethodName);
  });
  it('Verify that guest user can change shipping address', function (){
    BillingPage.click.changeShippingAddress();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that guest user can change shipping method', function (){
    BillingPage.click.changeShippingMethod();
    BillingPage.assertions.assertShippingPageIsOpened();
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
    const variables = Cypress.env() as EnvironmentVariables;
    BillingPage.actions.emptyEmailField();
    BillingPage.actions.selectDate('23', 'May', '2001');
    BillingPage.assertions.assertDateIsSelected('23', '4', '2001');
    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.month, cards.visa.year, cards.visa.code);
    BillingPage.assertions.assertEmptyEmailFieldError(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
  });
  it('Verify that guest user cannot place order if date of birth is not selected', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.month, cards.visa.year, cards.visa.code);
    BillingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
  });
  it('Verify that billing address can be same as shipping address', function (){
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('Verify that guest user can submit new billing address', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    BillingPage.click.shippingCheckbox();
    BillingPage.assertions.assertBillingAddressFormIsPresent();
    BillingPage.actions.addBillingAddress(localeAddress.addrline1, localeAddress.city, localeAddress.county, localeAddress.postcode);
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
  describe('Verify that guest user can place orders with available payment methods', function (){
    it('Verify that guest user can place order using Credit Card - Visa)', function (){
      BillingPage.actions.selectDate('23', 'May', '2001');
      BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.month, cards.visa.year, cards.visa.code);
      BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
    });
    it('Verify that guest user can place order using Credit Card - Master)', function (){
      BillingPage.actions.selectDate('23', 'May', '2001');
      BillingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.month, cards.master.year, cards.master.code);
      BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
    });
    it('Verify that guest user can place order using Credit Card - Amex)', function (){
      BillingPage.actions.selectDate('23', 'May', '2001');
      BillingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.month, cards.amex.year, cards.amex.code);
      BillingPage.assertions.assertOrderConfirmationPAgeIsDisplayed();
    });
    it('Verify that guest user can place order using Klarna', function (){
      BillingPage.actions.selectDate('23', 'May', '2001');
      BillingPage.actions.selectKlarna();
    });
  });
});
