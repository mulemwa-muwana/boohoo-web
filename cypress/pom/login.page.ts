import AbstractPage from './abstract/abstract.page';
import * as CommonActions from '../helpers/common';
import { isSiteGenesisBrand } from '../helpers/common';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner > .b-form_box',
    errorLoginMessage: '.b-message-copy'
  },
  'nastygal.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: '.b-login_form',
    errorLoginMessage: '.b-message-copy'
  },
  'dorothyperkins.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner',
    errorLoginMessage: '.b-message-copy'
  },
  'burton.co.uk': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner',
    errorLoginMessage: '.b-message-copy'
  },
  'wallis.co.uk': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner',
    errorLoginMessage: '.b-message-copy'
  },
  'boohooman.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '[id^="dwfrm_login_username"]',
    loginPassword: '[id^="dwfrm_login_password"]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner > .b-form_box',
    errorLoginMessage: '.b-message-copy'
  },
  'karenmillen.com': {
    loginIcon: '#wrapper > div.sticky-spacer.js-sticky-spacer > div > div.sticky-spacer.js-sticky-spacer > div > div > div > div.js-header-right-box.header-right-box > div.header-customerinfo.hidden-on-mobile.js-appshell-uncached-headercustomerinfo-container > div > div > div > div > a:nth-child(1)',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset', 
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: '#dwfrm_login',
    errorLoginMessage: '.error-form'
  },
  'coastfashion.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > [title="Log In"]',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form'
  },
  'warehousefashion.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > [title="Log In"]',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form'
  },
  'oasis-stores.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > [title="Log In"]',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form'
  },
  'misspap.com': {
    loginIcon: '.link-item-login',
    loginLink: '.user-links > [title="Log In"]',
    loginEmail: '[id^="dwfrm_login_username"]',
    loginPassword: '[id^="dwfrm_login_password"]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form'
  }
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
      if (isSiteGenesisBrand()) {
        cy.get(loginIcon).invoke('show');
      } else {
        cy.get(loginIcon).click({ force: true });
      }
    },
    forgotPasswordLink (opts = { force: true }) {
      const forgotPassword = selectors[variables.brand].forgotPassword;
      cy.get(forgotPassword).click({ force: opts.force });
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
    },

    //  Login Attempts
    assertErrorLoginMessageIsPresent (text: string) {
      const errorLoginMessage = selectors[variables.brand].errorLoginMessage;
      cy.get(errorLoginMessage).should('be.visible').and('include.text', text);
    },
 
    assertForgotPasswordMessageisDisplayed (email: string) {
      const forgotPasswordMessage = selectors[variables.brand].forgotPasswordMessage;
      if (isSiteGenesisBrand()) {
        cy.get(forgotPasswordMessage).should('be.visible');
      } else {
        cy.get(forgotPasswordMessage).should('be.visible').and('contain', email);
      }
    },
  };

  actions = {
    login (user: string, pass: string) {
      const loginIcon = selectors[variables.brand].loginIcon;
      const loginLink = selectors[variables.brand].loginLink;
      if (isSiteGenesisBrand()) {
        cy.get(loginIcon).invoke('show');
        cy.get(loginLink).click({force:true});
      } else {
        cy.get(loginIcon).click({force:true});
      }
      cy.wait(3000);
      const loginEmail = selectors[variables.brand].loginEmail;
      cy.get(loginEmail).type(user, {force: true}); 
      cy.wait(3000);
      const loginPassword = selectors[variables.brand].loginPassword;
      cy.get(loginPassword).type(pass, {force: true});
      cy.wait(3000);
      const loginButton = selectors[variables.brand].loginButton;
      cy.get(loginButton).click({force: true});
    },
    loginViaPage (user: string, pass: string) {
      const loginEmail = selectors[variables.brand].loginEmail;
      cy.get(loginEmail).type(user, {force: true}); 
      const loginPassword = selectors[variables.brand].loginPassword;
      cy.get(loginPassword).type(pass, {force: true});
      const loginButton = selectors[variables.brand].loginButton;
      cy.get(loginButton).click({force: true});
    },
    resetPasswordEmail (email: string) {
      const resetPasswordEmailField = selectors[variables.brand].resetPasswordEmailField;
      cy.get(resetPasswordEmailField).type(email);
    }
  };
}

export default new LoginPage();