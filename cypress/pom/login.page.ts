import AbstractPage from './abstract/abstract.page';
import { isSiteGenesisBrand } from '../helpers/common';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    mobileHamburgIcon: "[class='i-icon i-icon-hamburger']",
    MobileLoginLink:'[class="b-hamburger_account-action_link m-login"]',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: ':nth-child(1) > .l-service-section_inner > .b-form_box',
    errorLoginMessage: '.b-message-copy',
    resetPasswordEmailFieldMobile: '#dwfrm_registration_resetPassword_email',
  },
  'nastygal.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    mobileHamburgIcon: "[class='i-icon i-icon-hamburger']",
    MobileLoginLink: '.m-login',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: '.b-login_form',
    errorLoginMessage: '.b-message-copy',
    resetPasswordEmailFieldMobile: '#dwfrm_registration_resetPassword_email'
  },
  'dorothyperkins.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    mobileHamburgIcon: "[class='i-icon i-icon-hamburger']",
    MobileLoginLink: '[class="b-menu_panel-guest_action m-login"]',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword: '#password-reset',
    forgotPasswordMessage: '.b-dialog-window',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: '.l-service-section_inner>.b-login_form',
    errorLoginMessage: '.b-message-inner>.b-message-copy',
    resetPasswordEmailFieldMobile: '#dwfrm_registration_resetPassword_email'
  },
  'burton.co.uk': {
    loginIcon: 'a.b-header_login-icon', 
    mobileHamburgIcon: "[class='i-icon i-icon-hamburger']",
    MobileLoginLink: '[class="b-menu_panel-guest_action m-login"]',
    loginEmail: 'input#dwfrm_login_email', 
    loginPassword: '#dwfrm_login_password[type=password]',
    loginButton:'button[data-tau="login_submit"]',
    forgotPassword:'button#password-reset', 
    forgotPasswordMessage: '.b-dialog-window.m-active.m-top_dialog',
    resetPasswordEmailField: '#dwfrm_profile_resetPassword_email', 
    resetPasswordBtn: '.b-dialog-footer.m-actions > .b-button[type="submit"]',
    loginForm: ':nth-child(1) > .l-service-section_inner',
    errorLoginMessage: '.b-message-inner>.b-message-copy',
    resetPasswordEmailFieldMobile: '#dwfrm_registration_resetPassword_email'
  },
  'wallis.co.uk': {
    loginIcon: 'svg[class="i-icon i-icon-user"]',
    mobileHamburgIcon: "[class='i-icon i-icon-hamburger']",
    MobileLoginLink: '[class="b-menu_panel-guest_action m-login"]',
    loginEmail: '#dwfrm_login_email[type="email"]',
    loginPassword: '#dwfrm_login_password[type="password"]',
    loginButton: '.b-login_form-group_cta>button[data-tau="login_submit"]',
    forgotPassword: '#password-reset[type="button"]',
    forgotPasswordMessage: '[class*="b-dialog-window"]',
    resetPasswordEmailField: 'input#dwfrm_profile_resetPassword_email',
    resetPasswordBtn: '[class*="b-dialog-footer"]>.b-button.m-width_full',
    loginForm: ':nth-child(1) > .l-service-section_inner', 
    errorLoginMessage: '.b-message-inner .b-message-copy',
    resetPasswordEmailFieldMobile: '#dwfrm_registration_resetPassword_email'
  },
  'boohooman.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > a:nth-child(1)',
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink :'.user-link-item[title^="Log"]:eq(1)',
    loginEmail: 'input[id^=dwfrm_login_username][type="email"]',
    loginPassword: 'input[id^=dwfrm_login_password][type="password"]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: 'a.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '[class*="field-wrapper"]>#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: 'form#dwfrm_login[class="login-page-form"]',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email'
  },
  'karenmillen.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > [title="Log In"]',
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink :'.user-link-item[title^="Log"]:eq(1)',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email'
  },
  'coastfashion.com': {
    loginIcon: 'span.user-account', 
    loginLink: '.user-links > [title="Log In"]', 
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink :'.user-link-item[title^="Log"]:eq(1)',
    loginEmail: '.field-wrapper.js-field-wrapper>[id^=dwfrm_login_username][type=email]', 
    loginPassword: 'input[id^=dwfrm_login_password][type="password"]', 
    loginButton:'.login-page-button.js-login-page-button[type="submit"]',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login.login-page-form',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email'
  },
  'warehousefashion.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > [title="Log In"]',
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink :'.user-link-item[title^="Log"]:eq(1)',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email'
  },
  'oasis-stores.com': {
    loginIcon: '.user-account',
    loginLink: '.user-links > [title="Log In"]',
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink :'.user-link-item[title^="Log"]:eq(1)',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email'
  },
  'misspap.com': {
    loginIcon: '.link-item-login',
    loginLink: '.user-links > [title="Log In"]',
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink:'.user-links [title="My Account"]:eq(1)',
    loginEmail: '[id^="dwfrm_login_username"]',
    loginPassword: '[id^="dwfrm_login_password"]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email'
  },
  'boohoomena.com': {
    loginIcon: 'span.user-account',
    loginLink: '.user-links > [title="Log In"]',
    mobileHamburgIcon: "[class='menu-toggle js-menu-toggle']",
    MobileLoginLink :'.user-link-item[title^="Log"]:eq(1)',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.login-title',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class LoginPage implements AbstractPage {

  goto (): void {
    cy.visit(variables.url + '/login');
  }

  click = {
    loginIcon () {
      const loginIcon = selectors[variables.brand].loginIcon;
      const mobileHamburgIcon = selectors[variables.brand].mobileHamburgIcon;
      const viewportWidth = Cypress.config('viewportWidth');
      
      if (viewportWidth < 1100) {
        cy.get(mobileHamburgIcon).click();
      } else {
        if (isSiteGenesisBrand && variables.brand != 'misspap.com' && variables.brand != 'boohooman.com') {
          cy.get('.header-customer-info').invoke('show');
        } else {
          cy.get(loginIcon).click({ force: true });
        }
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
      cy.get(errorLoginMessage).should('be.visible').and('contain.text', text);
    },
 
    assertForgotPasswordMessageisDisplayed (email: string) {
      const forgotPasswordMessage = selectors[variables.brand].forgotPasswordMessage;
      if (isSiteGenesisBrand) {
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
      const mobileHamburgIcon = selectors[variables.brand].mobileHamburgIcon;
      const MobileLoginLink = selectors[variables.brand].MobileLoginLink;
      const viewportWidth = Cypress.config('viewportWidth');

      if (viewportWidth < 1100) {
        cy.get(mobileHamburgIcon).click({force:true});
        cy.wait(2000);
        cy.get(MobileLoginLink).click();
      } else { // Web Device logic start from this else statement
        if (isSiteGenesisBrand && variables.brand != 'misspap.com') {
          cy.get(loginIcon).invoke('show');
          cy.get(loginLink).click({force:true});
        } else {
          cy.get(loginIcon).click({force:true});
        }
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
      const resetPasswordEmailFieldMobile = selectors[variables.brand].resetPasswordEmailFieldMobile;
      const viewportWidth = Cypress.config('viewportWidth');
      if (viewportWidth < 1100) {
        cy.get(resetPasswordEmailFieldMobile).type(email);
      } else {
        cy.get(resetPasswordEmailField).type(email);
      }
    }
  };
}

export default new LoginPage();