import assertionText from '../../helpers/assertionText';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';
import MyAccountPage from '../../pom/myaccount.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Login Functionality tests', function () {

  beforeEach(() => {
    HomePage.goto();
  });
    
  it('Verify that user can login with valid credentials', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      LoginPage.actions.login(credentials.username, credentials.password);
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.name);
    });
  });
  
  it('Verify that user can not login with invalid credentials', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      LoginPage.actions.login(credentials.username, 'invalid12345');
      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'karenmillen.com') {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginErrorSiteGenesis[variables.language]);
      } else {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginAttempts[variables.language]);
      }
    });
  });
  
  it('Verify that user can not login with non-registered mail address', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login('invalid_email@gmail.com', credentials.password);
      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'karenmillen.com') {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginErrorSiteGenesis[variables.language]);
      } else {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.unknownEmail[variables.language]);
      }
    });
  });
    
  it('Verify that user can log out', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {   
      LoginPage.actions.login(credentials.username, credentials.password);
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.name);
    });
    MyAccountPage.click.logOutLink();
    LoginPage.assertions.assertLoginFormIsPresent();  
  });

  it('Verify that user can start process of reseting password using the "Forgot your password?" link', function () {
    LoginPage.goto();
    LoginPage.click.forgotPasswordLink();
    cy.wait(2000);
    LoginPage.actions.resetPasswordEmail('jelenaboohoo@gmail.com');
    LoginPage.click.resetPasswordButon();
    LoginPage.assertions.assertForgotPasswordMessageisDisplayed('jelenaboohoo@gmail.com');
  });

});