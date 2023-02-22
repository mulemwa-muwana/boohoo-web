import { isSiteGenesisBrand } from 'cypress/helpers/common';
import assertionText from '../helpers/assertionText';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_profile_login_password',
    passwordConfirmField: '#dwfrm_profile_login_passwordconfirm',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearOfBirth',
    emailConsent: '#dwfrm_profile_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_profile_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_profile_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_profile_customer_subscription_is3rdPartySubscribed',
    submitButton: ':nth-child(9) > .b-button',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_profile_customer_email-error > span'
  },
  'nastygal.com': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_profile_login_password',
    passwordConfirmField: '#dwfrm_profile_login_passwordconfirm',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearOfBirth',
    emailConsent: '#dwfrm_profile_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_profile_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_profile_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_profile_customer_subscription_is3rdPartySubscribed',
    submitButton: '[data-tau="register_submit"]',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_profile_customer_email-error'
  },
  'dorothyperkins.com': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_profile_login_password',
    passwordConfirmField: '#dwfrm_profile_login_passwordconfirm',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearOfBirth',
    emailConsent: '#dwfrm_profile_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_profile_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_profile_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_profile_customer_subscription_is3rdPartySubscribed',
    submitButton: '[data-tau="register_submit"]',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_profile_customer_email-error'
  },
  'burton.co.uk': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_profile_login_password',
    passwordConfirmField: '#dwfrm_profile_login_passwordconfirm',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearOfBirth',
    emailConsent: '#dwfrm_profile_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_profile_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_profile_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_profile_customer_subscription_is3rdPartySubscribed',
    submitButton: '[data-tau="register_submit"]',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_profile_customer_email-error'
  },
  'wallis.co.uk': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_profile_login_password',
    passwordConfirmField: '#dwfrm_profile_login_passwordconfirm',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearOfBirth',
    emailConsent: '#dwfrm_profile_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_profile_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_profile_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_profile_customer_subscription_is3rdPartySubscribed',
    submitButton: '[data-tau="register_submit"]',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_profile_customer_email-error'
  },
  'boohooman.com': {
    registrationForm: '#RegistrationForm',
    passwordField: '[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"])',
    passwordConfirmField: '[id^="dwfrm_profile_login_passwordconfirm"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearofbirth',
    emailConsent: '.form-row.isemailsubscribed > .form-label',
    postConsent: '.form-row.ispostalsubscribed > .form-label',
    smsConsent: '.form-row.issmssubscribed > .form-label',
    thirdPartyConsent: '.form-row.is3rdPartySubscribed > .form-label',
    submitButton: '.form-row-button > .button',
    myAccountUrl: 'myaccount?registration=true',
    emailError: 'div[class^="error error-message"]'
  },
  'karenmillen.com': {
    registrationForm: '#RegistrationForm',
    passwordField: '[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"])',
    passwordConfirmField: '[id^="dwfrm_profile_login_passwordconfirm"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearofbirth',
    emailConsent: '.form-row.isemailsubscribed > .form-label',
    postConsent: '.form-row.ispostalsubscribed > .form-label',
    smsConsent: '.form-row.issmssubscribed > .form-label',
    thirdPartyConsent: '.form-row.is3rdPartySubscribed > .form-label',
    submitButton: '.form-row-button > .button',
    myAccountUrl: 'myaccount?registration=true',
    emailError: '#dwfrm_profile_customer_emailconfirm-error'
  },
  'coastfashion.com': {
    registrationForm: '#RegistrationForm',
    passwordField: '[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"])',
    passwordConfirmField: '[id^="dwfrm_profile_login_passwordconfirm"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearofbirth',
    emailConsent: '.form-row.isemailsubscribed > .form-label',
    postConsent: '.form-row.ispostalsubscribed > .form-label',
    smsConsent: '.form-row.issmssubscribed > .form-label',
    thirdPartyConsent: '.form-row.is3rdPartySubscribed > .form-label',
    submitButton: '.form-row-button > .button',
    myAccountUrl: 'myaccount?registration=true',
    emailError: 'div[class^="error error-message"]'
  },
  'warehousefashion.com': {
    registrationForm: '#RegistrationForm',
    passwordField: '[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"])',
    passwordConfirmField: '[id^="dwfrm_profile_login_passwordconfirm"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearofbirth',
    emailConsent: '.form-row.isemailsubscribed > .form-label',
    postConsent: '.form-row.ispostalsubscribed > .form-label',
    smsConsent: '.form-row.issmssubscribed > .form-label',
    thirdPartyConsent: '.form-row.is3rdPartySubscribed > .form-label',
    submitButton: '.form-row-button > .button',
    myAccountUrl: 'myaccount?registration=true',
    emailError: 'div[class^="error error-message"]'
  },
  'oasis-stores.com': {
    registrationForm: '#RegistrationForm',
    passwordField: '[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"])',
    passwordConfirmField: '[id^="dwfrm_profile_login_passwordconfirm"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearofbirth',
    emailConsent: '.form-row.isemailsubscribed > .form-label',
    postConsent: '.form-row.ispostalsubscribed > .form-label',
    smsConsent: '.form-row.issmssubscribed > .form-label',
    thirdPartyConsent: '.form-row.is3rdPartySubscribed > .form-label',
    submitButton: '.form-row-button > .button',
    myAccountUrl: 'myaccount?registration=true',
    emailError: 'div[class^="error error-message"]'
  },
  'misspap.com': {
    registrationForm: '#RegistrationForm',
    passwordField: '[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"])',
    passwordConfirmField: '[id^="dwfrm_profile_login_passwordconfirm"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearofbirth',
    emailConsent: '.form-row.isemailsubscribed > .form-label',
    postConsent: '.form-row.ispostalsubscribed > .form-label',
    smsConsent: '.form-row.issmssubscribed > .form-label',
    thirdPartyConsent: '.form-row.is3rdPartySubscribed > .form-label',
    submitButton: '.form-row-button > .button',
    myAccountUrl: 'myaccount?registration=true',
    emailError: 'div[class^="error error-message"]'
  },
  'boohoomena.com': {
    registrationForm: '#RegistrationForm',
    passwordField: '[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"])',
    passwordConfirmField: '[id^="dwfrm_profile_login_passwordconfirm"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    lastNameField: '#dwfrm_profile_customer_lastname',
    dayOfBirth: '#dwfrm_profile_customer_dayofbirth',
    monthOfBirth: '#dwfrm_profile_customer_monthofbirth',
    yearOfBirth: '#dwfrm_profile_customer_yearofbirth',
    emailConsent: '.form-row.isemailsubscribed > .form-label',
    postConsent: '.form-row.ispostalsubscribed > .form-label',
    smsConsent: '.form-row.issmssubscribed > .form-label',
    thirdPartyConsent: '.form-row.is3rdPartySubscribed > .form-label',
    submitButton: '.form-row-button > .button',
    myAccountUrl: 'myaccount?registration=true',
    emailError: 'div[class^="error error-message"]'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class RegistrationPage implements AbstractPage {

  goto (): void {
    cy.visit('/login?registrationPage=true');
  }

  click = {
    chooseEmailConsent () {
      const emailConsent = selectors[variables.brand].emailConsent;
      cy.get(emailConsent).click({force: true});
    },
    choosePostConsent () {
      const postConsent = selectors[variables.brand].postConsent;
      cy.get(postConsent).click();
    },
    chooseSmsConsent () {
      const smsConsent = selectors[variables.brand].smsConsent;
      cy.get(smsConsent).click();
    },
    chooseThirdPartyConsent () {
      const thirdPartyConsent = selectors[variables.brand].thirdPartyConsent;
      cy.get(thirdPartyConsent).click();
    },
    submitButton () {
      const submitButton = selectors[variables.brand].submitButton;
      cy.get(submitButton).click({force: true});
    }
  };

  actions = {
    startRegistration (randomEmail: string) {
      cy.get('#dwfrm_profile_customer_email').click({force: true}).type(randomEmail);
      if (isSiteGenesisBrand) {
        cy.get('#dwfrm_profile_customer_emailconfirm').click({force: true}).type(randomEmail);
      }
      
      if (variables.brand == 'boohoo.com') {
        cy.get('button[data-id="continueButton"]').click();
      }
    },
    confirmationCheckbox () {
      if (variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com' ||variables.brand == 'wallis.co.uk') {
        cy.get('#dwfrm_profile_customer_emailregistationconfirm').check({force:true});
      } else {
        cy.get('#dwfrm_profile_customer_emailregistationconfirm').check();
      }
    },
    enterNewUserData (password: string, confirmPassword: string, firstName: string, lastName: string) {
      const passwordField = selectors[variables.brand].passwordField;
      const passwordConfirmField = selectors[variables.brand].passwordConfirmField;
      const firstNameField = selectors[variables.brand].firstNameField;
      const lastNameField = selectors[variables.brand].lastNameField;

      cy.get(passwordField).click({force: true}).type(password);
      cy.get(passwordConfirmField).click({force: true}).type(confirmPassword);
      cy.get(firstNameField).click({force: true}).type(firstName);
      cy.get(lastNameField).click({force: true}).type(lastName);
    },
    chooseDate (date: string, month: string, year: string) {
      const dayOfBirth = selectors[variables.brand].dayOfBirth;
      const monthOfBirth = selectors[variables.brand].monthOfBirth;
      const yearOfBirth = selectors[variables.brand].yearOfBirth;

      cy.get(dayOfBirth).select(date,{force: true});
      cy.get(monthOfBirth).select(month,{force: true});
      cy.get(yearOfBirth).select(year,{force: true});
    }

  };

  assertions = {
    assertRegistrationFormIsPresent () {
      const registrationForm = selectors[variables.brand].registrationForm;
      cy.get(registrationForm).should('be.visible');
    },
    assertCheckboxIsChecked () {
      cy.get('#dwfrm_profile_customer_emailregistationconfirm').should('be.checked');
    },
    assertMyAcountPageIsOpened () {
      const myAccountUrl = selectors[variables.brand].myAccountUrl;
      cy.url().should('include', myAccountUrl);
    },
    assertErrorMessageExistingEmail () {
      const emailError = selectors[variables.brand].emailError;
      if (variables.brand == 'boohoo.com') {
        cy.get(emailError).should('be.visible').and('include.text', assertionText.RegistrationPageExistingEmail[variables.language]);
      } else if (isSiteGenesisBrand) {
        cy.get(emailError).should('be.visible').and('include.text', assertionText.RegistrationPageExistingEmailSiteGenesis[variables.language]);
      } else {
        cy.get(emailError).should('be.visible').and('include.text', assertionText.RegistrationPageExistingEmailArcadia[variables.language]);
        
      }
      
    }

  };
}

export default new RegistrationPage();