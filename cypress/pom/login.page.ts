import AbstractPage from './abstract/abstract.page';
import * as CommonActions from '../helpers/common';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    passwordReset: '#password-reset',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner > .b-form_box'
  },
  'nastygal.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    passwordReset: '#password-reset',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: '.b-login_form'
  },
  'dorothyperkins.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    passwordReset: '#password-reset',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner'
  },
  'burton.co.uk': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    passwordReset: '#password-reset',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner'
  },
  'wallis.co.uk': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    passwordReset: '#password-reset',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner'
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > [title="Log In"]',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    passwordReset: '.password-reset',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner > .b-form_box',
    wishlistLoginTitle: '.login-title'
  },
  'warehousefashion.com': undefined,
  'oasis-stores.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '[id*="login_username"]',
    loginPassword: '[id*="login_password"]',
    loginButton:'[name*="dwfrm_login_login"]',
    passwordReset: '#password-reset',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner'
  },
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class LoginPage implements AbstractPage {

  goto (options: GotoOptions = null): void {
    const url = variables.url + '/login';
    cy.visit(url);
    if (options?.applyCookies) {
      CommonActions.applyMarketingCookies();
      cy.visit(url);
    }
  }

  click = {
    loginIcon () {
      const loginIcon = selectors[variables.brand].loginIcon;
      cy.get(loginIcon).click({ force: true });
    },
    passwordResetLink (opts = { force: true }) {
      const passwordReset = selectors[variables.brand].passwordReset;
      cy.get(passwordReset).click({ force: opts.force });
    },
    resetPasswordButon () {
      const resetPasswordBtn = selectors[variables.brand].resetPasswordBtn;
      cy.get(resetPasswordBtn).click();
    }
  };

  assertions = {
    assertLoginFormIsPresent () {
      const loginForm = selectors[variables.brand].loginForm;
      cy.get(loginForm).should('be.visible');
    },
    assertWishlistLoginTitleIsPresent (title: string) {
      const wishlistLoginTitle = selectors[variables.brand].wishlistLoginTitle;
      cy.get(wishlistLoginTitle).should('contain.text', title);
    }
  };

  actions = {
    login (user: string, pass: string) {
      const loginIcon = selectors[variables.brand].loginIcon;
      const loginLink = selectors[variables.brand].loginLink;
      if(variables.brand == 'coastfashion.com') {
        cy.get(loginIcon).invoke('show');
        cy.get(loginLink).click({force:true});
      } else {
        cy.get(loginIcon).click({force:true});
      }
      cy.wait(3000);
      const loginEmail = selectors[variables.brand].loginEmail;
      cy.get(loginEmail).type(user); 
      cy.wait(3000);
      const loginPassword = selectors[variables.brand].loginPassword;
      cy.get(loginPassword).type(pass);
      cy.wait(3000);
      const loginButton = selectors[variables.brand].loginButton;
      cy.get(loginButton).click();
    },
    loginViaPage (user: string, pass: string) {
      const loginEmail = selectors[variables.brand].loginEmail;
      cy.get(loginEmail).type(user); 
      const loginPassword = selectors[variables.brand].loginPassword;
      cy.get(loginPassword).type(pass);
      const loginButton = selectors[variables.brand].loginButton;
      cy.get(loginButton).click();
    },
    resetPasswordEmail (email: string) {
      const resetPasswordEmailField = selectors[variables.brand].resetPasswordEmailField;
      cy.get(resetPasswordEmailField).type(email);
    }
  };
}

export default new LoginPage();