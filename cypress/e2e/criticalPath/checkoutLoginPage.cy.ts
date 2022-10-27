import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import { isVariableStatement } from 'typescript';
import assertionText from 'cypress/helpers/assertionText';

const variables = Cypress.env() as EnvironmentVariables;

describe('Home Page', function () {
  
  beforeEach(() => {
    const variables = Cypress.env() as EnvironmentVariables;
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    cy.wait(3000);
    pdpPage.actions.selectSize();
    cy.wait(3000);
    pdpPage.click.addToCart();
    HomePage.click.cartIcon();
    cartPage.click.proceedToCheckout();
  });

  it('Verify is checkout login / guest displayed', () => {
    CheckoutPage.assertions.assertGuestCheckoutEmail();
    CheckoutPage.assertions.assertUserEmailField();
    CheckoutPage.assertions.assertPasswordFieldForRegisteredUserIsVisible();
  });

  it('Verify Premier is displayed and can be added to the cart', () => {
    if (variables.brand == 'boohoo.com') {
      CheckoutPage.assertions.assertPremierTitleIsDisplayed(assertionText.Premier[variables.language]);
      CheckoutPage.assertions.assertPremierSubtitleIsDisplayed(assertionText.PremierText[variables.language]);
    } else if (variables.brand == 'nastygal.com') {
      CheckoutPage.assertions.assertPremierTitleIsDisplayed(assertionText.Premier[variables.language]);
    }
  });

  it('Verify that registered user is able to login', () => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.userEmailField(credentials.username);
      CheckoutPage.actions.passwordField(credentials.password);
      CheckoutPage.click.continueAsRegisteredUser();
    });
  });

  it.only('Verify that user is able to proceed as guest', () => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
      CheckoutPage.click.continueAsGuestBtn();
    });
  });

});

