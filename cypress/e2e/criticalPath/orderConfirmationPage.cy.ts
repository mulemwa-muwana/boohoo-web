import BillingPage from '../../pom/billing.page';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import PdpPage from '../../pom/pdp.page';
import shippingPage from '../../pom/shipping.page';
import cards from '../../helpers/cards';
import orderConfirmationPage from '../../pom/orderConfirmation.page';
import assertionText from '../../helpers/assertionText';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import billingPage from '../../pom/billing.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Order confirmation page for guest user', function () {
  beforeEach (function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
    }
    
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    PdpPage.actions.selectSize();
    cy.wait(2000);
    PdpPage.click.addToCart();
    cy.wait(7000);
    HomePage.click.cartIcon();
    if (!isSiteGenesisBrand) {
      PdpPage.click.miniCartViewCartBtn();
    }
    CartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
      CheckoutPage.click.continueAsGuestBtn();

      shippingPage.actions.firstNameField(localeAddress.firstName);
      shippingPage.actions.lastNameField(localeAddress.lastName);
      shippingPage.actions.selectCountry(localeAddress.country);
      shippingPage.click.addAddressManually();
      shippingPage.actions.adressLine1(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      if (variables.locale == 'US' || variables.locale == 'AU') {
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);

      if (isSiteGenesisBrand) {
        shippingPage.actions.selectDate('23', 'May', '2001');
        if (variables.brand == 'boohooman.com') {
          shippingPage.click.proceedToBilling();
          billingPage.actions.billingEmailField(credentials.guest);
          billingPage.actions.billingConfirmEmailField(credentials.guest);
        } else {
          shippingPage.actions.confirmEmail(credentials.guest);
          shippingPage.click.proceedToBilling();
        }

      } else {
        shippingPage.click.proceedToBilling();
        BillingPage.actions.selectDate('23', assertionText.DOBmonth[variables.language], '2001');
        BillingPage.actions.waitPageToLoad();
      }
    });

    BillingPage.actions.selectCreditCard(cards.master.cardNo, cards.master.owner, cards.master.date, cards.master.code);
    if (variables.brand == 'boohoo.com' && (variables.language == 'DE' || variables.language == 'SE')) {
      orderConfirmationPage.click.closeCancellationPopup();
    }
  });

  it('Verify that email address, order number, value and payment method are visible for guest user', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.guest);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderValueIsDisplayed();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[variables.language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[variables.language]);
      }
    });
  });

  it('Verify that shipping and billing addresses and shipping method are present with valid data for guest user', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
    orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
    orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
  });

  it('Verify that for guest users password fields are present on order confirmation page', function () {
    orderConfirmationPage.assertions.assertThatPasswordFieldForGuestUserIsDisplayed();
    orderConfirmationPage.assertions.assertThatConfirmPasswordFieldForGuestUserIsDisplayed();
  });
});

describe('Order confirmation page for registered user', function () {
  beforeEach (()=>{
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    PdpPage.actions.selectSize();
    cy.wait(2000);
    cy.scrollTo('top');
    PdpPage.click.addToCart();
    cy.wait(7000);
    HomePage.click.cartIcon();  
    if (!isSiteGenesisBrand) {
      PdpPage.click.miniCartViewCartBtn();
    }
    CartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.userEmailField(credentials.username);
      if (isSiteGenesisBrand && variables.brand != 'boohooman.com' && variables.brand != 'boohoomena.com') {
        CheckoutPage.click.continueAsRegisteredUser();
      }
      CheckoutPage.actions.passwordField(credentials.password);
      CheckoutPage.click.continueAsRegisteredUser();
    });
    if (variables.brand != 'boohooman.com') {
      shippingPage.click.addNewAddressButton();
    }
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.actions.clearPhoneNumberFieldAndAddNewOne(localeAddress.phone);
    cy.wait(5000);
    shippingPage.click.addAddressManually();  
    shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
    shippingPage.actions.clearCityFieldAndAddNewOne(localeAddress.city);
    if (variables.locale == 'US') {
      shippingPage.actions.selectState(localeAddress.county);
    } else if (variables.locale == 'AU') {
      shippingPage.actions.stateField(localeAddress.county);
    }
    if (variables.brand == 'boohoomena.com') {
      shippingPage.actions.countyField(localeAddress.county);
    }
    shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode);
    shippingPage.click.proceedToBilling();
    BillingPage.actions.waitPageToLoad();
    BillingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);

    /* If (variables.brand == 'boohoo.com') {
      orderConfirmationPage.click.closePopUp1(assertionText.closePopUp[variables.language]);
    }*/
    if (variables.brand == 'boohoo.com' && (variables.language == 'DE' || variables.language == 'SE')) {
      orderConfirmationPage.click.closeCancellationPopup();
    }
  });
  it('Verify that email, order number, value and order total are visible for registred users', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.username);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderTotalIsVisible();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[variables.language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[variables.language]);
      }
    });
  });

  it('Verify that shipping, billing addresses and shipping method are present with valid data for registered user', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
    orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
    orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addrline1);
  });
});