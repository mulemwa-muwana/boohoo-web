import shippingMethods from '../../helpers/shippingMethods';
import BillingPage from '../../pom/billing.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import shippingPage from '../../pom/shipping.page';
import cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';

const variables = Cypress.env() as EnvironmentVariables;
const siteGenesisBrands: Array<GroupBrands> = ['coastfashion.com', 'oasis-stores.com', 'warehousefashion.com'];

describe('Billing page functionality for registered user', function () {
  beforeEach (()=>{
    HomePage.goto();
    const itemSKU = variables.sku;
    HomePage.actions.findItemUsingSKU(itemSKU);
    PdpPage.actions.selectSize();
    cy.wait(2000);
    PdpPage.click.addToCart();
    cy.wait(7000);
    HomePage.click.cartIcon();  
    if (!siteGenesisBrands.includes(variables.brand)) {
      PdpPage.click.miniCartViewCartBtn();
    }
    if (variables.brand === 'dorothyperkins.com' || variables.brand === 'wallis.co.uk') {
      PdpPage.click.viewCart; 
    }
    CartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wait(2000);
      CheckoutPage.actions.userEmailField(credentials.username);
      if (siteGenesisBrands.includes(variables.brand)) {
        CheckoutPage.click.continueAsRegisteredUser();
      }
      CheckoutPage.actions.passwordField(credentials.password);
      CheckoutPage.click.continueAsRegisteredUser();
    });
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.actions.clearPhoneNumberFieldAndAddNewOne(localeAddress.phone);
    cy.wait(5000);
    shippingPage.click.addAddressManually();  
    shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
    shippingPage.actions.clearCityFieldAndAddNewOne(localeAddress.city);
    shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode); 
    if (variables.locale === 'AU') {
      shippingPage.actions.stateField(localeAddress.county);
    }
    if (variables.locale === 'US') {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode);
    
    // If (variables.locale == 'IE') {
    //   ShippingPage.actions.countyField(localeAddress.county);
    shippingPage.click.proceedToBilling();
    if (siteGenesisBrands.includes(variables.brand)) {
      shippingPage.click.proceedToBillingVerification();
    }
    BillingPage.actions.waitPageToLoad();
  });

  it('Verify that shipping address block is filled with data', function () {
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    BillingPage.assertions.assertShippingMethodPresent('\n                            ' + localeShippingMethod.shippingMethodName + '\n                  ');
  });
  it('Verify that register user can change shipping address', function () {
    BillingPage.click.changeShippingAddress();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that register user can change shipping method', function () {
    BillingPage.click.changeShippingMethod();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that email address is displayed and it cannot be changed', function () {
    if (!siteGenesisBrands.includes(variables.brand)) {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        BillingPage.assertions.assertEmailIsCorrect(credentials.username);
      });
      BillingPage.assertions.assertEmailFieldCantBeChanged();
    }
  });
  it('Verify that billing address can be same as shipping address', function () {
    if (siteGenesisBrands.includes(variables.brand)) {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('Verify that registered user can submit new billing address from address book', function () {
    if (siteGenesisBrands.includes(variables.brand)) {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.click.uncheckShippingCheckbox();
    BillingPage.actions.selectAddressFromBook();
  });
  it('Verify that registered user can add  new billing address', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    if (siteGenesisBrands.includes(variables.brand)) {
      BillingPage.click.changeShippingAddress();
      BillingPage.click.uncheckShippingCheckbox();
      shippingPage.click.proceedToBilling();
      BillingPage.click.addNewBilingAddress();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressRegisteredUser(localeAddress.addrline1, localeAddress.city, localeAddress.postcode);
    } else {
      BillingPage.click.addNewBilingAddress();
      BillingPage.actions.addBillingAddressRegisteredUser(localeAddress.addrline1, localeAddress.city, localeAddress.postcode);
    }
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

  it('Verify that corect payment methods are displayed (Credit card, paypal, klarna, amazon pay, clearpay, laybuy, zip)', function () {
    BillingPage.assertions.assertPaymentMethodCreditCardIsDisplayed();
    BillingPage.assertions.assertPaymentMethodPayPalIsDisplayed();
    if (variables.locale === 'UK' || variables.locale === 'IE' || variables.locale === 'AU') {
      BillingPage.assertions.assertPaymentMethodKlarnaIsDisplayed();
    }

    if (variables.locale === 'UK' || variables.locale === 'IE' || variables.locale === 'AU') {
      BillingPage.assertions.assertPaymentMethodClearPayIsDisplayed();
    } 
      
    if (variables.brand === 'boohoo.com' && variables.locale === 'UK') {
      BillingPage.assertions.assertPaymentMethodGooglePayIsDisplayed();
      BillingPage.assertions.assertPaymentMethodAmazonPayIsDisplayed();
      BillingPage.assertions.assertPaymentMethodLayBuyIsDisplayed();
    } else if ((variables.brand == 'nastygal.com') && variables.locale == 'UK' || variables.locale == 'AU') {
      BillingPage.assertions.assertPaymentMethodLayBuyIsDisplayed();
    }

    // BillingPage.assertions.assertPaymentMethodIsDisplayed(method.zipPay); -Not available anymore
  });
  describe('Verify that registered user can place orders with available payment methods', function () {
    it('Verify that registered user can place order using Credit Card - Visa)', function () {
      BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    });
    it('Verify that registered user can place order using Credit Card - Master)', function () {
      BillingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.date, cards.master.code);
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    });
    it('Verify that registered user can place order using Credit Card - Amex)', function () {
      BillingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    });
    it('Verify that registered user can place order using PayPal', function () {
      BillingPage.actions.selectPayPal();
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    });
    if (variables.locale === 'UK' || variables.locale === 'IE' || variables.locale === 'AU') {
      it('Verify that guest user can place order using Klarna', function () {
        BillingPage.actions.selectKlarna();
        BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
      });
    }
    if (variables.brand !== 'burton.co.uk' && (variables.locale === 'UK' || variables.locale === 'AU')) {
      it('Verify that guest user can place order using Laybuy', function () {
        BillingPage.actions.selectLaybuy();
        BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
      });
    }
  });
});
