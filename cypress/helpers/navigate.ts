import BillingPage from '../pom/billing.page';
import CartPage from '../pom/cart.page';
import CheckoutPage from '../pom/checkoutLogin.page';
import HomePage from '../pom/home.page';
import LoginPage from '../pom/login.page';
import PdpPage from '../pom/pdp.page';
import shippingPage from '../pom/shipping.page';
import assertionText from './assertionText';
import Addresses from './addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';

const variables = Cypress.env() as EnvironmentVariables;

class Navigate {
  
  toHomePage () {
    HomePage.goto();
  }

  toProductDetailsPage () {
    this.toHomePage();
    HomePage.actions.findItemUsingSKU(variables.sku);
  }

  toCartPage () {
    this.toProductDetailsPage();
    PdpPage.actions.selectSize();
    cy.wait(2000);
    PdpPage.click.addToCart();
    cy.wait(7000);
    HomePage.click.cartIcon();
    if (!isSiteGenesisBrand) {
      PdpPage.click.miniCartViewCartBtn();
    }
  }

  toCheckoutLoginPage () {
    this.toCartPage();
    CartPage.click.proceedToCheckout();
  }

  toShippingPage (userType: UserType) {
    this.toCheckoutLoginPage();

    // GUEST USER //
    if (userType === 'GuestUser') {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        if (variables.brand != 'warehousefashion.com' && variables.locale == 'IE' || variables.locale == 'EU') {
          CheckoutPage.click.continueAsGuestBtn();
        } else {
          CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
          CheckoutPage.click.continueAsGuestBtn();
        }
      });
    
    // REGISTERED USER //
    } else {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        cy.wait(2000);
        CheckoutPage.actions.userEmailField(credentials.username);
        if (isSiteGenesisBrand && variables.brand != 'boohooman.com' && variables.brand != 'boohoomena.com') {
          CheckoutPage.click.continueAsRegisteredUser();
        }
        cy.wait(1000);
        CheckoutPage.actions.passwordField(credentials.password);
        CheckoutPage.click.continueAsRegisteredUser();
      });
    }
    cy.wait(2000);
  }

  toBillingPage (userType: UserType) {
    this.toShippingPage(userType);

    // GUEST USER //
    if (userType === 'GuestUser') {
      const primaryAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
      cy.fixture('users').then((credentials: LoginCredentials) => {
        shippingPage.actions.firstNameField(primaryAddress.firstName);
        shippingPage.actions.lastNameField(primaryAddress.lastName);
        shippingPage.actions.selectCountry(primaryAddress.country);
        shippingPage.click.addAddressManually();
        shippingPage.actions.adressLine1(primaryAddress.addrline1);
        shippingPage.actions.cityField(primaryAddress.city);
        if (variables.locale == 'US' || variables.locale == 'AU') {
          shippingPage.actions.selectState(primaryAddress.county);
        }
        shippingPage.actions.postcodeField(primaryAddress.postcode);
        shippingPage.actions.phoneNumberField(primaryAddress.phone);

        if (isSiteGenesisBrand) {
          shippingPage.actions.selectDate('23', assertionText.DOBmonth[variables.language], '2001');
          if (variables.brand != 'boohooman.com') {
            shippingPage.actions.confirmEmailField(credentials.guest);
          } 
          shippingPage.click.proceedToBilling();
        } else {
          shippingPage.click.proceedToBilling();
          BillingPage.actions.selectDate('23', assertionText.DOBmonth[variables.language], '2001');
        }
        if (variables.brand == 'boohooman.com') {
          BillingPage.actions.billingEmailField(credentials.guest);
          BillingPage.actions.billingConfirmEmailField(credentials.guest);
        }
        BillingPage.actions.waitPageToLoad();
      });

    // REGISTERED USER //
    } else {
      const primaryAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
      if (variables.brand != 'boohooman.com') {
        shippingPage.click.addNewAddressButton();
      }
      shippingPage.actions.firstNameField(primaryAddress.firstName);
      shippingPage.actions.lastNameField(primaryAddress.lastName);
      shippingPage.actions.selectCountry(primaryAddress.country);
      shippingPage.actions.clearPhoneNumberFieldAndAddNewOne(primaryAddress.phone);
      cy.wait(5000);
      shippingPage.click.addAddressManually();  
      shippingPage.actions.clearAdressLine1AndAddNewOne(primaryAddress.addrline1);
      shippingPage.actions.clearCityFieldAndAddNewOne(primaryAddress.city);
      if (variables.locale == 'US') {
        shippingPage.actions.selectState(primaryAddress.county);
      } else if (variables.locale == 'AU') {
        shippingPage.actions.stateField(primaryAddress.county);
      }
      if (variables.brand == 'boohoomena.com') {
        shippingPage.actions.countyField(primaryAddress.county);
      }
      shippingPage.actions.clearPostcodeFieldAndAddNewOne(primaryAddress.postcode);
      shippingPage.click.proceedToBilling();
      BillingPage.actions.waitPageToLoad();
    }
  }

  toMyAccountPage () {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login(credentials.username, credentials.password);
    });
  }

  // NAVIGATE TO PAGES USING SESSIONS
  toCartPageUsingSession () {
    cy.session('cart-page-session', () => {
      this.toCartPage();
    });

    cy.visit(variables.url + '/cart');
  }

  toCheckoutLoginPageUsingSession () {
    cy.session('checkout-login-page-session', () => {
      this.toCheckoutLoginPage();
    });

    cy.visit(variables.url + '/checkout-login');
  }

  toShippingPageUsingSession (userType: UserType) {
    cy.session('shipping-page-session', () => {
      this.toShippingPage(userType);
    });

    if (isSiteGenesisBrand) {
      cy.visit(variables.url + '/shipping');
    } else {
      cy.visit(variables.url + '/checkout?step=shipping');
    }
  }

  toBillingPageUsingSession (userType: UserType) {
    cy.session('billing-page-session', () => {
      this.toBillingPage(userType);
    });

    if (isSiteGenesisBrand) {
      cy.visit(variables.url + '/billing-continue');
    } else {
      cy.visit(variables.url + '/checkout?step=billing');
    }
  }

  toMyAccountPageUsingSession () {
    cy.session('myaccount-page-session', () => {
      this.toMyAccountPage();
      cy.wait(7000);
    });
    cy.visit(variables.url + '/myaccount');
  }

  clearSessionCookies () {
    cy.clearCookies();
  }

}

export default new Navigate();