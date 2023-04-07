import { isSiteGenesisBrand } from 'cypress/helpers/common';
import assertionText from '../../helpers/assertionText';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';
import MyAccountPage from '../../pom/myaccount.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Login Functionality tests', function () {

  beforeEach(() => {
    HomePage.goto();
  });
    
  it('Verify that user can login with valid credentials and log out', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      LoginPage.actions.login(credentials.username, credentials.password);
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.name);

      cy.wait(3000);

      MyAccountPage.click.logOutLink();
      LoginPage.assertions.assertLoginFormIsPresent();  
    });
  });
  
  it('Verify that user can not login with invalid credentials', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      LoginPage.actions.login(credentials.username, 'invalid12345');
      if (variables.brand == 'misspap.com') {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginAttempts[variables.language]);
      } else if (isSiteGenesisBrand) {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginErrorSiteGenesisEmailOrPassword[variables.language]);
      } else {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginAttempts[variables.language]);
      }
    });
  });

  it('Verify that user can not login with non-registered mail address and that user can start process of reseting password using the "Forgot your password?" link', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login('invalid_email@gmail.com', credentials.password);
      if (variables.brand == 'coastfashion.com' || variables.brand == 'karenmillen.com' || variables.brand == 'boohooman.com' || variables.brand == 'boohoomena.com') {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginErrorSiteGenesisEmailOrPassword[variables.language]);
      } else if (variables.brand == 'oasis-stores.com' || variables.brand == 'warehousefashion.com' || variables.brand == 'misspap.com') {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginErrorSiteGenesisCustomer[variables.language]);
      } else {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.unknownEmail[variables.language]);
      }
    });
    LoginPage.click.forgotPasswordLink();
    cy.wait(2000);
    LoginPage.actions.resetPasswordEmail('jelenaboohoo@gmail.com');
    LoginPage.click.resetPasswordButon();
    LoginPage.assertions.assertForgotPasswordMessageisDisplayed('jelenaboohoo@gmail.com');
  });

});