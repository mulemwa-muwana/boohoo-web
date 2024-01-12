import AbstractPage from './abstract/abstract.page';
import { isSiteGenesisBrand, isMobileDeviceUsed } from '../helpers/common';
import { brand, locale } from 'cypress/support/e2e';

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
    resetPasswordEmailField: '[name="dwfrm_profile_resetPassword_email"]',
    resetPasswordBtn: '.b-dialog-footer > .b-button',
    loginForm: '.b-login_form',
    errorLoginMessage: '.b-message-copy',
    resetPasswordEmailFieldMobile: '#dwfrm_registration_resetPassword_email',
    popUpSign: '.b-dialog-header >button',
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
    loginIconNl: '.user-links',
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
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email',
    headerUserInfo: '.header-customer-info'
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
    mobileHamburgIcon: '.js-menu-toggle',
    MobileLoginLink :'.user-link-item[title^="Log"]:eq(1)',
    loginEmail: '[id^=dwfrm_login_username]',
    loginPassword: '[id^=dwfrm_login_password]',
    loginButton:'#dwfrm_login .login-page-button',
    forgotPassword: '.password-reset',
    forgotPasswordMessage: '#ShowResetPasswordDialog',
    resetPasswordEmailField: '#dwfrm_requestpassword_email',
    resetPasswordBtn: '.reset-password-btn',
    loginForm: '#dwfrm_login',
    wishlistLoginTitle: '.icon-wishlist',
    errorLoginMessage: '.error-form',
    resetPasswordEmailFieldMobile: '#dwfrm_requestpassword_email',
    headerUserInfo: '.header-customer-info'
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
      const loginIconNl = selectors[variables.brand].loginIconNl;
      const mobileHamburgIcon = selectors[variables.brand].mobileHamburgIcon;
      const headerUserInfo = selectors[brand].headerUserInfo;

      if (isMobileDeviceUsed) {
        cy.get(mobileHamburgIcon).click();
      } else {
        if (isSiteGenesisBrand && brand != 'misspap.com' && brand != 'boohooman.com') {
          cy.get(headerUserInfo).invoke('show');
        } else if (brand =='boohooman.com'&& locale == 'NL') {
          cy.get(loginIconNl).click({force:true});
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
    },
    backBrowserButton () {
      cy.go('back');
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
        cy.get(forgotPasswordMessage, {timeout: 2000}).should('be.visible');
      } else {
        cy.get(forgotPasswordMessage, {timeout: 2000}).should('be.visible').and('contain', email);
      }
    },
  };

  actions = {
    login (user: string, pass: string) {
      const loginIcon = selectors[variables.brand].loginIcon;
      const loginLink = selectors[variables.brand].loginLink;
      const mobileHamburgIcon = selectors[variables.brand].mobileHamburgIcon;
      const MobileLoginLink = selectors[variables.brand].MobileLoginLink;

      if (isMobileDeviceUsed) {
        cy.get(mobileHamburgIcon).click({force:true})
          .get(MobileLoginLink).click({force:true});
      } else { // Web Device logic start from this else statement
        if (isSiteGenesisBrand && variables.brand != 'misspap.com') {
          cy.get(loginIcon).invoke('show')
            .get(loginLink).click({force:true});
        } else {
          cy.get(loginIcon).click({force:true});
        }
      }

      const loginEmail = selectors[variables.brand].loginEmail;
      cy.get(loginEmail).type(user, {force: true});
      const loginPassword = selectors[variables.brand].loginPassword;
      cy.get(loginPassword).type(pass, {force: true});
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

      if (isMobileDeviceUsed) {
        cy.get(resetPasswordEmailFieldMobile).type(email,{timeout:2000});
      } else {
        cy.get(resetPasswordEmailField).type(email,{timeout:2000});
      }
    },
    loginPopUpMessage () {
      const popUpSign = selectors[variables.brand].popUpSign;
      cy.get('body').then($body=>{
        if ($body.find(popUpSign).length>0) {
          cy.get(popUpSign).click({ force: true });
        }
      });

    },
  };
}

export default new LoginPage();