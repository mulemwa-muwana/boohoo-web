import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    guestCheckoutEmail: '#dwfrm_login_guestEmail',
    userEmailField: '#dwfrm_login_email',
    passwordField:'#dwfrm_login_password',
    continueAsGuestBt:'.b-form > .b-button',
    continueAsRegisteredUser: 'button[data-tau="login_submit"]',
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
    passwordField:'#dwfrm_login_password',
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
  'boohooman.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: '[id^="dwfrm_login_username"]',
    passwordField:'[id^="dwfrm_login_password"]',
    continueAsGuestBt:'.login-box-create-account .login-page-button',
    continueAsRegisteredUser: '.login-page-form .login-page-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle'
  },
  'karenmillen.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: '[id^="dwfrm_login_username"]',
    passwordField:'[id^="dwfrm_login_password"]',
    continueAsGuestBt:'.login-page-guest-button',
    continueAsRegisteredUser: '.login-page-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle'
  },
  'coastfashion.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: '[id^="dwfrm_login_username"]',
    passwordField:'[id^="dwfrm_login_password"]',
    continueAsGuestBt:'#dwfrm_login .login-page-button',
    continueAsRegisteredUser: '#dwfrm_login .login-page-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle'
  },
  'warehousefashion.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: '[id^="dwfrm_login_username"]',
    passwordField:'[id^="dwfrm_login_password"]',
    continueAsGuestBt:'#dwfrm_login .login-page-button',
    continueAsRegisteredUser: '#dwfrm_login .login-page-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle'
  },
  'oasis-stores.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: '[id^="dwfrm_login_username"]',
    passwordField:'[id^="dwfrm_login_password"]',
    continueAsGuestBt:'#dwfrm_login .login-page-button',
    continueAsRegisteredUser: '#dwfrm_login .login-page-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle'
  },
  'misspap.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: '[id^="dwfrm_login_username"]',
    passwordField:'[id^="dwfrm_login_password"]',
    continueAsGuestBt:'.login-page-button',
    continueAsRegisteredUser: '.login-page-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle'
  }, 
  'boohoomena.com': {
    guestCheckoutEmail: '[id^="dwfrm_login_username"]',
    userEmailField: 'input[id^="dwfrm_login_username"]',
    passwordField:'input[id^="dwfrm_login_password"]',
    continueAsGuestBt:'#dwfrm_login > fieldset > .form-row-button > .login-page-button',
    continueAsRegisteredUser: '#dwfrm_login .login-page-button',
    premierAddToCart:'button[class="b-ngvip-button b-button"]',
    premierIsDisplayed:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title',
    premierSubtitle:'.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class CheckoutPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    continueAsGuestBtn () {  
      const continueAsGuestBt = selectors[variables.brand].continueAsGuestBt; 
      cy.get(continueAsGuestBt).click({force:true});
    },
    continueAsRegisteredUser () {  
      const continueAsRegisteredUser = selectors[variables.brand].continueAsRegisteredUser; 
      cy.get(continueAsRegisteredUser).click({force:true});
    },
    premierAddToCart () { 
      const premierAddToCart = selectors[variables.brand].premierAddToCart;
      cy.get(premierAddToCart).click();
    }
  };

  actions = {
    guestCheckoutEmail (guestEmail: string) {
      const guestCheckoutEmail = selectors[variables.brand].guestCheckoutEmail; 
      cy.get(guestCheckoutEmail).clear({force:true}).type(guestEmail, {force:true});
    },
    userEmailField (username: string) {  
      const userEmailField = selectors[variables.brand].userEmailField;
      cy.get(userEmailField).click({force:true}).type(username, {force:true});
    },
    passwordField (password: string) {  
      const passwordField = selectors[variables.brand].passwordField;
      cy.get(passwordField).type(password, {force:true});
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
    assertGuestCheckoutEmail () {
      const guestCheckoutEmail = selectors[variables.brand].guestCheckoutEmail;
      cy.get(guestCheckoutEmail).should('be.visible');
    },
    assertPremierTitleIsDisplayed (premierTitleText: string) {
      const premierIsDisplayed = selectors[variables.brand].premierIsDisplayed;
      cy.get(premierIsDisplayed).should('have.text', premierTitleText);
    },
    assertPremierSubtitleIsDisplayed (premierSubtitleText: string) {
      const premierSubtitle = selectors[variables.brand].premierSubtitle;
      cy.get(premierSubtitle).should('have.text', premierSubtitleText);
    }
  };
}

export default new CheckoutPage();