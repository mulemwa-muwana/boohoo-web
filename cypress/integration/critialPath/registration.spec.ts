import * as CommonActions from '../../helpers/common';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';
import RegistrationPage from '../../pom/registration.page';

describe('Verify Registration feature', function (){
  beforeEach(() => {

    HomePage.goto();
    HomePage.click.logInIcon();
    
  });
  it('Verify that registration button is visible and it opens registration form', function (){
    HomePage.click.registrationButton();
    const randomEmail = CommonActions.randomEmail();
    RegistrationPage.actions.startRegistration(randomEmail);
    RegistrationPage.assertions.assertRegistrarionFormIsPresent();
  });
  it('Verify that user can register new account using valid credentials', function (){
    HomePage.click.registrationButton();
    cy.fixture('newuser').then((credentials) =>{
      RegistrationPage.actions.startRegistration(credentials.username);
      RegistrationPage.actions.confirmationCheckbox();
      RegistrationPage.assertions.assertCheckboxIsChecked();
      RegistrationPage.actions.enterNewUserData(credentials.password, credentials.password, credentials.firstname, credentials.lastname);
    
      RegistrationPage.actions.chooseDate('23', 'June', '1989');
      RegistrationPage.click.chooseEmailConsent();
      RegistrationPage.click.submitButton();
      RegistrationPage.assertions.assertMyAcountPageIsOpened();
      MyAccountPage.assertions.assertNameGreetingMessage(credentials.firstname);
    });
  });
  it('Verify that user can not register using email that already has account', function (){
    HomePage.click.registrationButton();
    cy.fixture('newuser').then((credentials) =>{
      RegistrationPage.actions.startRegistration(credentials.username);
      RegistrationPage.actions.confirmationCheckbox();
      RegistrationPage.assertions.assertCheckboxIsChecked();
      RegistrationPage.actions.enterNewUserData(credentials.password, credentials.password, credentials.firstname, credentials.lastname);
    });
    RegistrationPage.actions.chooseDate('23', 'June', '1989');
    RegistrationPage.click.chooseEmailConsent();
    RegistrationPage.click.submitButton();
    RegistrationPage.assertions.assertErrorMessageExistingEmail();
  });
});