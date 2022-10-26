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

const variables = Cypress.env() as EnvironmentVariables;

describe('Billing page functionality for guest user', function () {

  before(() => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wrap(credentials.guest).as('guestEmail');
    });
  });
  
  beforeEach (function () {
  
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    PdpPage.actions.selectSize();
    cy.wait(2000);
    PdpPage.click.addToCart();
    cy.wait(7000);
    HomePage.click.cartIcon();
    if (variables.brand != 'coastfashion.com') {
      PdpPage.click.miniCartViewCartBtn();
    }
    CartPage.click.proceedToCheckout();

    CheckoutPage.actions.guestCheckoutEmail(this.guestEmail);
    CheckoutPage.click.continueAsGuestBtn();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    cy.wait(5000);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    if (variables.brand == 'coastfashion.com') {
      shippingPage.actions.selectDate('23', 'May', '2001');
      shippingPage.actions.confirmEmail(this.guestEmail);
      shippingPage.click.proceedToBilling();
      shippingPage.click.proceedToBillingAddressVerification();
    } if (variables.locale == 'US') {
      shippingPage.actions.selectState(localeAddress.county);
      shippingPage.click.proceedToBilling();
      cy.wait(3000);
      shippingPage.actions.selectDate('23', 'May', '2001');
    } else {
      shippingPage.click.proceedToBilling();
    }
    BillingPage.assertions.assertBillingPageIsLoaded();
  });

  it('Verify that shipping address block is filled with data', function () {
    BillingPage.assertions.assertShippingAddressPresent();
  });
  it('Verify that shipping method is displayed', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    if (variables.locale != 'EU') {    
      BillingPage.assertions.assertShippingMethodPresent(localeShippingMethod.shippingMethodName); // EU has only Europe and International Delivery
    }
  });
  it('Verify that guest user can change shipping address', function () {
    BillingPage.click.changeShippingAddress();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  it('Verify that guest user can change shipping method', function () {
    BillingPage.click.changeShippingMethod();
    BillingPage.assertions.assertShippingPageIsOpened();
  });
  
  it('Verify that email field is filled with correct email address', function () {
    if (variables.brand != 'coastfashion.com') {
    BillingPage.assertions.assertEmailIsCorrect(this.guestEmail);
    }
  });

  /* It('Verify that subscription block is displayed', function () {
    BillingPage.assertions.assertSubscriptionBlockPresent();
  });*/

  it('Verify that date of birth form is present and that guest user can select date of birth', function () {
    if (variables.brand == 'coastfashion.com') {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.assertions.assertDateFormIsPresent();
    BillingPage.actions.selectDate('23', 'May', '2001');
    if (variables.brand == 'coastfashion.com') {
      BillingPage.assertions.assertDateIsSelected('23', '05', '2001');
    } else {
      BillingPage.assertions.assertDateIsSelected('23', '4', '2001');
    }
  });
  it('Verify that guest user cannot place order if email field is empty', function () {
    if (variables.brand == 'coastfashion.com') {
      BillingPage.click.changeShippingAddress();
      BillingPage.actions.emptyEmailField();
      shippingPage.click.proceedToBilling();
    } else {
      BillingPage.actions.emptyEmailField();
      BillingPage.actions.selectDate('23', 'May', '2001');
      BillingPage.click.chooseCC();
    }
    if (variables.brand == 'boohoo.com') {
      BillingPage.assertions.assertEmptyEmailFieldError(assertionText.emptyEmailFieldErrorBillingPage[variables.language]);
    } else {
      BillingPage.assertions.assertEmptyEmailFieldError(assertionText.emptyEmailFieldErrorBillingPage[variables.language]);
    }
  });
  it('Verify that guest user cannot place order if date of birth is not selected', function () {
    if (variables.brand == 'coastfashion.com') {
      BillingPage.click.changeShippingAddress();
      BillingPage.actions.selectDate('Day', 'Month', 'Year');
    } else {
      BillingPage.click.chooseCC();
    }
    if (variables.brand == 'boohoo.com') {
      BillingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
    } else {
      BillingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldsFnameLnamePostcodeArcadia[variables.language]);
    }
  });
  it('Verify that billing address can be same as shipping address', function () {
    if (variables.brand == 'coastfashion.com') {
      BillingPage.click.changeShippingAddress();
    }
    BillingPage.assertions.assertSameAsShippingIsChecked();
  });
  it('Verify that guest user can submit new billing address', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    if (variables.brand == 'coastfashion.com') {
      BillingPage.click.changeShippingAddress();
      BillingPage.click.uncheckShippingCheckbox();
      shippingPage.click.proceedToBilling();
      BillingPage.click.addNewBilingAddress();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressGuestUser(localeAddress.addrline1, localeAddress.city, localeAddress.county, localeAddress.postcode);
    } else {
      BillingPage.click.uncheckShippingCheckbox();
      BillingPage.assertions.assertBillingAddressFormIsPresent();
      BillingPage.actions.addBillingAddressGuestUser(localeAddress.addrline1, localeAddress.city, localeAddress.county, localeAddress.postcode);
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
    BillingPage.assertions.assertPaymentMethodKlarnaIsDisplayed();
    BillingPage.assertions.assertPaymentMethodClearPayIsDisplayed();
    if (variables.brand == 'boohoo.com' && variables.locale == 'UK') {
      BillingPage.assertions.assertPaymentMethodGooglePayIsDisplayed();
      BillingPage.assertions.assertPaymentMethodAmazonPayIsDisplayed();
      BillingPage.assertions.assertPaymentMethodLayBuyIsDisplayed();
    } else if ((variables.brand == 'nastygal.com' || variables.brand == 'coastfashion.com') && variables.locale == 'UK') {
      BillingPage.assertions.assertPaymentMethodLayBuyIsDisplayed();
    }
    
    // BillingPage.assertions.assertPaymentMethodIsDisplayed(method.zipPay); -Not available anymore
  });

  describe('Verify that guest user can place orders with available payment methods', function () {

    beforeEach (function () {
      if (variables.brand != 'coastfashion.com') {
        BillingPage.actions.selectDate('23', 'May', '2001');
      }
    });

    it('Verify that guest user can place order using Credit Card - Visa)', function () {
      BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    });
    it('Verify that guest user can place order using Credit Card - Master)', function () {
      BillingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.date, cards.master.code);
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    });
    it('Verify that guest user can place order using Credit Card - Amex)', function () {
      BillingPage.actions.selectCreditCard(cards.amex.cardNo, cards.amex.owner, cards.amex.date, cards.amex.code);
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    });
    it('Verify that guest user can place order using PayPal', function () {
      BillingPage.actions.selectPayPal();
      BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    });
    if (variables.locale == 'UK' || variables.locale == 'IE') {
      it('Verify that guest user can place order using Klarna', function () {
        BillingPage.actions.selectKlarna();
        BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
      });
    }
    if (variables.locale == 'UK' && variables.brand != 'burton.co.uk') {
      it('Verify that guest user can place order using Laybuy', function () {
        BillingPage.actions.selectLaybuy();
        BillingPage.assertions.assertOrderConfirmationPageIsDisplayed();
      });
    }
  });
});
