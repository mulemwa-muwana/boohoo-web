import assertionText from 'cypress/helpers/assertionText';
import LoginPage from 'cypress/pom/login.page';
import * as CommonActions from '../../helpers/common';
import { isSiteGenesisBrand } from '../../helpers/common';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';
import RegistrationPage from '../../pom/registration.page';
import { language } from 'cypress/support/e2e';

describe('Verify Registration feature', function () {
  beforeEach(() => {
    HomePage.goto();
    
    LoginPage.click.loginIcon();
    HomePage.click.registrationButton();
  });
  it('CYP-174 Verify that registration button is visible and it opens registration form', function () {
    const randomEmail = CommonActions.randomEmail();
    RegistrationPage.actions.startRegistration(randomEmail);
    RegistrationPage.assertions.assertRegistrationFormIsPresent();
  });
  it('CYP-175 Verify that user can register new account using valid credentials', function () {
    cy.fixture('newuser').then((credentials) =>{
      const randomEmail = CommonActions.randomEmail();
      RegistrationPage.actions.startRegistration(randomEmail);
      if (!isSiteGenesisBrand) {
        RegistrationPage.actions.confirmationCheckbox();
        RegistrationPage.assertions.assertCheckboxIsChecked();
      }
      RegistrationPage.actions.enterNewUserData(credentials.password, credentials.password, credentials.firstname, credentials.lastname);
    
      RegistrationPage.actions.chooseDate('23', assertionText.DOBmonth[language], '1989');
      RegistrationPage.click.chooseEmailConsent();
      RegistrationPage.click.submitButton();
      RegistrationPage.assertions.assertMyAcountPageIsOpened();
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.firstname);
    });
  });
  it('CYP-176 Verify that user can not register using email that already has account', function () {
    cy.fixture('newuser').then((credentials) =>{
      RegistrationPage.actions.startRegistration(credentials.username);
      if (!isSiteGenesisBrand) {
        RegistrationPage.actions.confirmationCheckbox();
        RegistrationPage.assertions.assertCheckboxIsChecked();
      }
      RegistrationPage.actions.enterNewUserData(credentials.password, credentials.password, credentials.firstname, credentials.lastname);
    });
    RegistrationPage.actions.chooseDate('23', assertionText.DOBmonth[language], '1989');
    RegistrationPage.click.chooseEmailConsent();
    RegistrationPage.click.submitButton();
    RegistrationPage.assertions.assertErrorMessageExistingEmail();
  });
});