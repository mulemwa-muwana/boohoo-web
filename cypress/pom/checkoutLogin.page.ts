
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import assertionText from '../helpers/assertionText';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    guestCheckoutEmail: '#dwfrm_login_guestEmail',
    userEmailField: '#dwfrm_login_email',
    passwordField:'#dwfrm_login_password',
    continueAsGuestBt:'.b-form > .b-button',
    continueAsRegisteredUser: ':nth-child(8) > .b-login_form-group_cta > .b-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle'
  },
  'nastygal.com': {
    guestCheckoutEmail: '#dwfrm_login_guestEmail',
    userEmailField: 'input[id="dwfrm_login_email"]',
    passwordField:'#dwfrm_login_password',
    continueAsGuestBt:'.b-form > .b-button',
    continueAsRegisteredUser: '.b-login_form-group_cta > .b-button'
  },
  'dorothyperkins.com': {
    guestCheckoutEmail: '#dwfrm_login_guestEmail',
    userEmailField: '#dwfrm_login_email',
    passwordField:'#dwfrm_login_password',
    continueAsGuestBt:'.b-form > .b-button',
    continueAsRegisteredUser: '.b-login_form-group_cta > .b-button'
  },
  'burton.co.uk': {
    guestCheckoutEmail: '#dwfrm_login_guestEmail',
    userEmailField: '#dwfrm_login_email',
    passwordField:'#dwfrm_login_password]',
    continueAsGuestBt:'.b-form > .b-button',
    continueAsRegisteredUser: '.b-login_form-group_cta > .b-button'
  },
  'wallis.co.uk': {
    guestCheckoutEmail: '#dwfrm_login_guestEmail',
    userEmailField: '#dwfrm_login_email',
    passwordField:'#dwfrm_login_password',
    continueAsGuestBt:'.b-form > .b-button',
    continueAsRegisteredUser: '.b-login_form-group_cta > .b-button'
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class CheckoutPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    continueAsGuestBtn () {  
      const continueAsGuestBt = selectors[variables.brand].continueAsGuestBt; 
      cy.get(continueAsGuestBt).then(element => {
        cy.wrap(element).click();
      });    
    },
    continueAsRegisteredUser () {  
      const continueAsRegisteredUser = selectors[variables.brand].continueAsRegisteredUser; 
      cy.get(continueAsRegisteredUser).then(element => {
        cy.wrap(element).click();
      });
    },
    premierAddToCart () { 
      const premierAddToCart = selectors[variables.brand].premierAddToCart;
      cy.get(premierAddToCart).click();
    }
  };

  actions = {
    guestCheckoutEmail (guestEmail: string) {
      const guestCheckoutEmail = selectors[variables.brand].guestCheckoutEmail; 
      cy.get(guestCheckoutEmail).type(guestEmail);
    },
    userEmailField (username: string) {  
      const userEmailField = selectors[variables.brand].userEmailField;
      cy.get(userEmailField).type(username);
    },
    passwordField (password: string) {  
      const passwordField = selectors[variables.brand].passwordField;
      cy.get(passwordField).type(password);
    }
  };

  assertions = {
    assertUserProceededToShippingPage () {
      cy.url().should('include', 'shipping');
    },
    assertUserEmailField () {
      const userEmailField = selectors[variables.brand].userEmailField;
      cy.get(userEmailField).should('be.visible');
    },
    assertPasswordFieldForRegisteredUserIsVisible () {
      const passwordField = selectors[variables.brand].passwordField;
      cy.get(passwordField).should('be.visible');
    },
    assertGuestCheckoutEmai () {
      const guestCheckoutEmai = selectors[variables.brand].guestCheckoutEmai;
      cy.get(guestCheckoutEmai).should('be.visible');
    },
    assertPremierIsDisplayed () {
      const premierIsDisplayed = selectors[variables.brand].premierIsDisplayed;
      cy.get(premierIsDisplayed).should('have.text', assertionText.Premier[variables.language]);
      const premierSubtitle=selectors[variables.brand].premierSubtitle;
      cy.get(premierSubtitle).should('have.text', assertionText.PremierText[variables.language]);
    }
  };
}

export default new CheckoutPage();