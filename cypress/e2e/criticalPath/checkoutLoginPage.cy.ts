import CheckoutPage from '../../pom/checkoutLogin.page';
import assertionText from 'cypress/helpers/assertionText';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';

const variables = Cypress.env() as EnvironmentVariables;

describe('Checkout Page', function () {

  beforeEach(() => {
    Navigate.toCheckoutLoginPageUsingSession();
  });

  it('Verify is checkout login / guest displayed', () => {
    if (isSiteGenesisBrand || variables.brand == 'boohoo.com') {
      CheckoutPage.assertions.assertUserEmailField();
    } else {
      CheckoutPage.assertions.assertGuestCheckoutEmail();
      CheckoutPage.assertions.assertUserEmailField();
      CheckoutPage.assertions.assertPasswordFieldForRegisteredUserIsVisible();
    }
  });

  it('Verify Premier is displayed and can be added to the cart', function () {
    const arcadiaBrands: Array<GroupBrands> = ['dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];
    if (isSiteGenesisBrand || arcadiaBrands.includes(variables.brand)) {
      this.skip();
    }
    const includedLocals: Array<Locale> = ['UK', 'EU', 'IE', 'FR'];

    if (variables.brand == 'boohoo.com' && includedLocals.includes(variables.locale)) {
      CheckoutPage.assertions.assertPremierTitleIsDisplayed(assertionText.Premier[variables.language]);
      CheckoutPage.assertions.assertPremierSubtitleIsDisplayed(assertionText.PremierText[variables.language]);

    } else if (variables.brand == 'nastygal.com' && includedLocals.includes(variables.locale)) {
      CheckoutPage.assertions.assertPremierTitleIsDisplayed(assertionText.PremierNG[variables.language]);
      CheckoutPage.assertions.assertPremierSubtitleIsDisplayed(assertionText.PremierText[variables.language]);
    }
  });

  it('Verify that user is able to proceed as guest', function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // No guest users are allowed for this brand, only registered ones
    }
    cy.fixture('users').then((credentials: LoginCredentials) => {
      const viewportWidth = Cypress.config('viewportWidth');

      CheckoutPage.actions.guestCheckoutEmail(credentials.guest);
      CheckoutPage.click.continueAsGuestBtn();
      CheckoutPage.assertions.assertUserProceededToShippingPage();      
    });
  });

  it('Verify that registered user is able to login', () => {
    Navigate.clearSessionCookies();
    Navigate.toCheckoutLoginPage();

    cy.fixture('users').then((credentials: LoginCredentials) => {
      CheckoutPage.actions.userEmailField(credentials.username);
      if (isSiteGenesisBrand && variables.brand != 'boohooman.com' && variables.brand != 'boohoomena.com') {
        CheckoutPage.click.continueAsRegisteredUser();
      }
      CheckoutPage.actions.passwordField(credentials.password);
      CheckoutPage.click.continueAsRegisteredUser();
      CheckoutPage.assertions.assertUserProceededToShippingPage();
    });
  });

});

