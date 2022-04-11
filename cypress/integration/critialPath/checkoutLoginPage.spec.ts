import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import { LoginCredentials } from '../../support/types';
import checkoutLoginPage from '../../pom/checkoutLogin.page';

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

  });

  it('Verify Premier is displayed and can be added to the cart', () => {

  });

  it('Verify that registered user is able to login', () => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      checkoutLoginPage.actions.userEmailField(credentials.username);
      checkoutLoginPage.actions.passwordField(credentials.password);
      checkoutLoginPage.click.continueAsRegisteredUser();
    });
  });

  it('Verify that user is able to proceed as guest', () => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      checkoutLoginPage.actions.guestCheckoutEmail(credentials.guest);
      checkoutLoginPage.click.continueAsGuestBtn();
      checkoutLoginPage.click.continueAsRegisteredUser();
    });
  });

});

