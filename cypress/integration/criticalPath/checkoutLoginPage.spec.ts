import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import { LoginCredentials } from '../../support/types';
import CheckoutPage from '../../pom/checkoutLogin.page';

describe('Home Page', function () {
  
  beforeEach(() => {
    HomePage.goto();
    HomePage.click.searchField();
    HomePage.actions.findItemUsingSKU('aDZZ65279{enter}');
    pdpPage.click.addToCart();
    HomePage.click.cartIcon();
    cartPage.click.proceedToCheckout();
  });

  it('Verify is checkout login / guest displayed', () => {
    CheckoutPage.assertions.assertEmailnFieldForGuestUserIsVisible();
    CheckoutPage.assertions.assertLoginFieldForRegisteredUserIsVisible();
    CheckoutPage.assertions.assertPasswordFieldForRegisteredUserIsVisible();
  });

  it('Verify Premier is displayed and can be added to the cart', () => {
    CheckoutPage.assertions.assertPremierIsDisplayed();
  });

  it('Verify that registered user is able to login', () => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.userEmailField(credentials.username);
      CheckoutPage.actions.passwordField(credentials.password);
      CheckoutPage.click.continueAsRegisteredUser();
    });
  });

  it('Verify that user is able to proceed as guest', () => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
      CheckoutPage.click.continueAsGuestBtn();
    });
  });

});

