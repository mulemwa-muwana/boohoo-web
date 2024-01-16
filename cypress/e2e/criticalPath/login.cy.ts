import { isSiteGenesisBrand } from 'cypress/helpers/common';
import assertionText from '../../helpers/assertionText';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';
import MyAccountPage from '../../pom/myaccount.page';
import { brand, language, locale } from 'cypress/support/e2e';

describe('Login Functionality tests', function () {

  beforeEach(() => {
    HomePage.goto();
  });
    
  it('CYP-131 Verify that user can login with valid credentials and log out', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      LoginPage.actions.login(credentials.username, credentials.password);
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.name);
      MyAccountPage.click.logOutLink();
      LoginPage.assertions.assertLoginFormIsPresent();
    });
  });

  it('Verify that when the user logs out, they cannot log back in by pressing the back button of the browser', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login(credentials.username, credentials.password);
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.name);
      MyAccountPage.click.logOutLink();
      LoginPage.assertions.assertLoginFormIsPresent();
      LoginPage.click.backBrowserButton();
      LoginPage.assertions.assertLoginFormIsPresent();
    });
  });
  
  it('CYP-132 Verify that user can not login with invalid credentials', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      LoginPage.actions.login(credentials.username, 'invalid12345');
      LoginPage.actions.loginPopUpMessage();
      if (brand == 'misspap.com') {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginAttempts[language]);
      } else if (isSiteGenesisBrand) {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginErrorSiteGenesisEmailOrPassword[language]);
      } else {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginAttempts[language]);
      }
    });
  });

  it('CYP-133 Verify that user can not login with non-registered mail address and that user can start process of reseting password using the "Forgot your password?" link', function () {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login('invalid_email@gmail.com', credentials.password);
      LoginPage.actions.loginPopUpMessage();
      if (brand == 'coastfashion.com' || brand == 'karenmillen.com' || brand == 'boohooman.com' || brand == 'boohoomena.com' || (brand == 'misspap.com' && locale == 'US')) {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginErrorSiteGenesisEmailOrPassword[language]);
      } else if (brand == 'oasis-stores.com' || brand == 'warehousefashion.com' || (brand == 'misspap.com' && locale != 'US')) {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.loginErrorSiteGenesisCustomer[language]);
      } else {
        LoginPage.assertions.assertErrorLoginMessageIsPresent(assertionText.unknownEmail[language]);
      }
    });
    LoginPage.click.forgotPasswordLink();
    LoginPage.actions.resetPasswordEmail('jelenaboohoo@gmail.com');
    LoginPage.click.resetPasswordButon();
    LoginPage.assertions.assertForgotPasswordMessageisDisplayed('jelenaboohoo@gmail.com');
  });

});