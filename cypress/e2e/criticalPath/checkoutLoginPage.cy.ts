import CheckoutPage from '../../pom/checkoutLogin.page';
import assertionText from 'cypress/helpers/assertionText';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import { brand, locale, language } from 'cypress/support/e2e';

describe('Checkout Page', function () {

  beforeEach(() => {
    Navigate.toCheckoutLoginPageUsingSession();
  });

  it('Verify is checkout login / guest displayed', () => {
    if (isSiteGenesisBrand || brand == 'boohoo.com') {
      CheckoutPage.assertions.assertUserEmailField();
    } else {
      CheckoutPage.assertions.assertGuestCheckoutEmail();
      CheckoutPage.assertions.assertUserEmailField();
      CheckoutPage.assertions.assertPasswordFieldForRegisteredUserIsVisible();
    }
  });

  it('Verify Premier is displayed and can be added to the cart', function () {
    const arcadiaBrands: Array<GroupBrands> = ['dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];
    if (isSiteGenesisBrand || arcadiaBrands.includes(brand)) {
      this.skip();
    }
    const includedLocals: Array<Locale> = ['UK', 'EU', 'IE', 'FR'];

    if (brand == 'boohoo.com' && includedLocals.includes(locale)) {
      CheckoutPage.assertions.assertPremierTitleIsDisplayed(assertionText.Premier[language]);
      CheckoutPage.assertions.assertPremierSubtitleIsDisplayed(assertionText.PremierText[language]);

    } else if (brand == 'nastygal.com' && includedLocals.includes(locale)) {
      CheckoutPage.assertions.assertPremierTitleIsDisplayed(assertionText.PremierNG[language]);
      CheckoutPage.assertions.assertPremierSubtitleIsDisplayed(assertionText.PremierText[language]);
    }
  });

  it('Verify that user is able to proceed as guest', function () {
    if (brand == 'boohoomena.com') {
      this.skip(); // No guest users are allowed for this brand, only registered ones
    }
    cy.fixture('users').then((credentials: LoginCredentials) => {
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
      if (isSiteGenesisBrand && brand != 'boohooman.com' && brand != 'boohoomena.com') {
        CheckoutPage.click.continueAsRegisteredUser();
      }
      CheckoutPage.actions.passwordField(credentials.password);
      CheckoutPage.click.continueAsRegisteredUser();
      CheckoutPage.assertions.assertUserProceededToShippingPage();
    });
  });

});

