
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

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
    resetPasswordBtn: '.b-dialog-footer > .b-button'
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
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class LoginPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    loginIcon (opts = { force: true }) {
      const loginIcon = selectors[variables.brand].loginIcon;
      cy.get(loginIcon).click({ force: opts.force });
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
      if (variables.brand == 'wallis.co.uk' || variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com' ) {
        cy.get(loginForm).should('be.visible');
      } else {
        cy.get(loginForm).should('be.visible');
      }
      
    }
  };

  actions = {
    login (user: string, pass: string, opts = { force: false }) {
      const loginIcon = selectors[variables.brand].loginIcon;
      cy.get(loginIcon).click({ force: opts.force });
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
    resetPasswordEmail (email: string) {
      const resetPasswordEmailField = selectors[variables.brand].resetPasswordEmailField;
      cy.get(resetPasswordEmailField).type(email);
    }
  };
}

export default new LoginPage();