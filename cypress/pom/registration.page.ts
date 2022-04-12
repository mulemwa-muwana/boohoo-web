import assertionText from '../helpers/assertionText';
import AbstractPage from './abstract/abstract.page';

class RegistrationPage implements AbstractPage {

  goto (): void {
    cy.visit('/login?registrationPage=true');
  }

  click = {
    chooseEmailConsent (){
      cy.get('#dwfrm_profile_customer_subscription_isemailsubscribed').click();
    },
    choosePostConsent (){
      cy.get('#dwfrm_profile_customer_subscription_ispostalsubscribed').click();
    },
    chooseSmsConsent (){
      cy.get('#dwfrm_profile_customer_subscription_issmssubscribed').click();
    },
    chooseThirdPartyConsent (){
      cy.get('#dwfrm_profile_customer_subscription_is3rdPartySubscribed').click();
    },
    submitButton (){
      cy.get(':nth-child(9) > .b-button').click();
    }
  };

  actions = {
    startRegistration (randomEmail: string){
      cy.get('#dwfrm_profile_customer_email').type(randomEmail);
      cy.get('button[data-id="continueButton"]').click();
    },
    confirmationCheckbox (){
      cy.get('#dwfrm_profile_customer_emailregistationconfirm').check();
    },
    enterNewUserData (password: string, confirmPassword: string, firstName: string, lastName: string){
      cy.get('#dwfrm_profile_login_password').type(password);
      cy.get('#dwfrm_profile_login_passwordconfirm').type(confirmPassword);
      cy.get('#dwfrm_profile_customer_firstname').type(firstName);
      cy.get('#dwfrm_profile_customer_lastname').type(lastName);
    },
    chooseDate (date: string, month: string, year: string){
      cy.get('#dwfrm_profile_customer_dayofbirth').select(date);
      cy.get('#dwfrm_profile_customer_monthofbirth').select(month);
      cy.get('#dwfrm_profile_customer_yearOfBirth').select(year);
    }

  };

  assertions = {
    assertRegistrarionFormIsPresent (){
      cy.get('.l-service-section').should('be.visible');
    },
    assertCheckboxIsChecked (){
      cy.get('#dwfrm_profile_customer_emailregistationconfirm').should('be.checked');
    },
    assertMyAcountPageIsOpened (){
      cy.url().should('include', '/myaccount?registration=submitted');
    },
    assertErrorMessageExistingEmail (){
      cy.get('#dwfrm_profile_customer_email-error > span').should('be.visible').then(element => {
        expect(element.text().trim().toUpperCase()).to.contain(assertionText.RegistrationPageExistingEmail['UK']);
      });
    }

  };
}

export default new RegistrationPage();