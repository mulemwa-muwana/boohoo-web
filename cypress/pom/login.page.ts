
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
  },
  'nastygal.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
  },
  'dorothyperkins.com': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
  },
  'burton.co.uk': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
  },
  'wallis.co.uk': {
    loginIcon: '.b-header_login-icon > .i-icon',
    loginEmail: '#dwfrm_login_email',
    loginPassword: '#dwfrm_login_password',
    loginButton:'button[data-tau="login_submit"]',
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

  click = {};
  assertions = {
    assertLoginFormIsPresent () {
      cy.get(':nth-child(1) > .l-service-section_inner > .b-form_box').should('be.visible');
    }
  };

  actions = {
    login (user: string, pass: string, opts = { force: false }) {
      const loginIcon = selectors[variables.brand].loginIcon;
      cy.get(loginIcon).click({ force: opts.force });
      const loginEmail = selectors[variables.brand].loginEmail;
      cy.get(loginEmail).type(user); 
      const loginPassword = selectors[variables.brand].loginPassword;
      cy.get(loginPassword).type(pass);
      const loginButton = selectors[variables.brand].loginButton;
      cy.get(loginButton).click();
    }
  };
}

export default new LoginPage();