import assertionText from 'cypress/helpers/assertionText';
import LoginPage from 'cypress/pom/login.page';
import * as CommonActions from '../../helpers/common';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';
import RegistrationPage from '../../pom/registration.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Verify Registration feature', function () {
  beforeEach(() => {

    HomePage.goto();

    /* If (variables.brand == 'nastygal.com') {
      cy.get('#page-body > div.b-dialog.m-welcome_popup.welcome-popup-container.js-welcome-popup-wrapper.popup-template-5.popup-close-position-right.m-opened > div.b-dialog-window.m-top_dialog.m-welcome_popup.welcome-popup.welcome-popup-wrapper > div.b-dialog-header > button').should('be.visible').click();
    }*/
    
    LoginPage.click.loginIcon();
    HomePage.click.registrationButton();
  });
  it.only('Verify that registration button is visible and it opens registration form', function () {
    const randomEmail = CommonActions.randomEmail();
    RegistrationPage.actions.startRegistration(randomEmail);
    RegistrationPage.assertions.assertRegistrarionFormIsPresent();
  });
  it('Verify that user can register new account using valid credentials', function () {
    cy.fixture('newuser').then((credentials) =>{
      const randomEmail = CommonActions.randomEmail();
      RegistrationPage.actions.startRegistration(randomEmail);
      if (variables.brand != 'coastfashion.com' && variables.brand != 'oasis-stores.com') {
        RegistrationPage.actions.confirmationCheckbox();
        RegistrationPage.assertions.assertCheckboxIsChecked();
      }
      RegistrationPage.actions.enterNewUserData(credentials.password, credentials.password, credentials.firstname, credentials.lastname);
    
      RegistrationPage.actions.chooseDate('23', assertionText.DOBmonth[variables.language], '1989');
      RegistrationPage.click.chooseEmailConsent();
      RegistrationPage.click.submitButton();
      RegistrationPage.assertions.assertMyAcountPageIsOpened();
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.firstname);
    });
  });
  it('Verify that user can not register using email that already has account', function () {
    cy.fixture('newuser').then((credentials) =>{
      RegistrationPage.actions.startRegistration(credentials.username);
      if (variables.brand != 'coastfashion.com' && variables.brand != 'oasis-stores.com') {
        RegistrationPage.actions.confirmationCheckbox();
        RegistrationPage.assertions.assertCheckboxIsChecked();
      }
      RegistrationPage.actions.enterNewUserData(credentials.password, credentials.password, credentials.firstname, credentials.lastname);
    });
    RegistrationPage.actions.chooseDate('23', assertionText.DOBmonth[variables.language], '1989');
    RegistrationPage.click.chooseEmailConsent();
    RegistrationPage.click.submitButton();
    RegistrationPage.assertions.assertErrorMessageExistingEmail();
  });
});