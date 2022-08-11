import assertionText from '../../helpers/assertionText';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';
import MyAccountPage from '../../pom/myaccount.page';

describe('Login Functionality tests', function () {

  beforeEach(() => {

    HomePage.goto();  
  });
    
  it('Verify that user can login with valid credentials', function () {

    cy.fixture('users').then((credentials: LoginCredentials) => {    
      LoginPage.actions.login(credentials.username, credentials.password);
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.name);
    });

    // Just a comment added 
  });

  it('Verify that user can not login with invalid credentials', function () {  
    const variables = Cypress.env() as EnvironmentVariables;
    LoginPage.actions.login('euboohoo@gmail.com', 'boohoo12345');    
    HomePage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginAttempts[variables.language]);

  });
    
  it('Verify that user can not login with non-registered mail address', function () {   
    const variables = Cypress.env() as EnvironmentVariables;
    LoginPage.actions.login('unknown@mail.com', 'boohoo123');
    HomePage.assertions.assertErrorLoginMessageIsPresent(assertionText.unknownEmail[variables.language]);
 
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
    HomePage.click.logInIcon(); 
    HomePage.actions.forgotPassword('jelenaboohoo@gmail.com');
    HomePage.assertions.assertForgotPasswordMessageisDisplayed('jelenaboohoo@gmail.com');

  });

});