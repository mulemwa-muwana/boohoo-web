import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import assertionText from 'cypress/helpers/assertionText';

const variables = Cypress.env() as EnvironmentVariables;

describe('Checkout Page', function () {

  beforeEach(() => {
    const variables = Cypress.env() as EnvironmentVariables;
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    cy.wait(3000);
    pdpPage.actions.selectSize();
    cy.wait(3000);
    pdpPage.click.addToCart();
    cy.wait(3000);
    HomePage.click.cartIcon();
    if (variables.brand != 'coastfashion.com' && variables.brand != 'oasis-stores.com') {
      pdpPage.click.miniCartViewCartBtn();
    }
    cartPage.click.proceedToCheckout();
  });

  it('Verify is checkout login / guest displayed', () => {
    if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
      CheckoutPage.assertions.assertUserEmailField();
    } else {
      CheckoutPage.assertions.assertGuestCheckoutEmail();
      CheckoutPage.assertions.assertUserEmailField();
      CheckoutPage.assertions.assertPasswordFieldForRegisteredUserIsVisible();
    }
  });

  if (variables.brand != 'coastfashion.com') {
    it('Verify Premier is displayed and can be added to the cart', () => {
      const includedLocals: Array<Locale> = ['UK', 'FR', 'IE'];
      const includededBrands: Array<GroupBrands> = ['boohoo.com', 'dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];
      if (includededBrands.includes(variables.brand) && includedLocals.includes(variables.locale)) {
        CheckoutPage.assertions.assertPremierTitleIsDisplayed(assertionText.Premier[variables.language]);
        CheckoutPage.assertions.assertPremierSubtitleIsDisplayed(assertionText.PremierText[variables.language]);

      } else if (variables.brand == 'nastygal.com' && includedLocals.includes(variables.locale)) {
        CheckoutPage.assertions.assertPremierTitleIsDisplayed(assertionText.PremierNG[variables.language]);
        CheckoutPage.assertions.assertPremierSubtitleIsDisplayed(assertionText.PremierText[variables.language]);
      }
    });
  }

  it('Verify that registered user is able to login', () => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.userEmailField(credentials.username);
      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
        CheckoutPage.click.continueAsRegisteredUser();
      }
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

