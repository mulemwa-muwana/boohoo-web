import { isSiteGenesisBrand } from 'cypress/helpers/common';
import assertionText from '../helpers/assertionText';
import AbstractPage from './abstract/abstract.page';
import { brand , language } from 'cypress/support/e2e';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_registration_login_password',
    passwordConfirmField: '#dwfrm_registration_login_passwordconfirm',
    firstNameField: '#dwfrm_registration_customer_firstname',
    lastNameField: '#dwfrm_registration_customer_lastname',
    dayOfBirth: '#dwfrm_registration_customer_dayofbirth',
    monthOfBirth: '#dwfrm_registration_customer_monthofbirth',
    yearOfBirth: '#dwfrm_registration_customer_yearOfBirth',
    emailConsent: '#dwfrm_registration_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_registration_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_registration_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_registration_customer_subscription_is3rdPartySubscribed',
    submitButton: ':nth-child(9) > .b-button',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_registration_customer_email-error',
    emailForRegistration: '#dwfrm_registration_customer_email',
    confirmEmailForRegistration: '#dwfrm_registration_login_passwordconfirm',
  },
  'nastygal.com': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_registration_login_password',
    passwordConfirmField: '#dwfrm_registration_login_passwordconfirm',
    firstNameField: '#dwfrm_registration_customer_firstname',
    lastNameField: '#dwfrm_registration_customer_lastname',
    dayOfBirth: '#dwfrm_registration_customer_dayofbirth',
    monthOfBirth: '#dwfrm_registration_customer_monthofbirth',
    yearOfBirth: '#dwfrm_registration_customer_yearOfBirth',
    emailConsent: '#dwfrm_registration_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_registration_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_registration_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_registration_customer_subscription_is3rdPartySubscribed',
    submitButton: '[data-tau="register_submit"]',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_registration_customer_email-error',
    emailForRegistration: '#dwfrm_registration_customer_email',
    confirmEmailForRegistration: '#dwfrm_registration_login_passwordconfirm',
  },
  'dorothyperkins.com': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_registration_login_password',
    passwordConfirmField: '#dwfrm_registration_login_passwordconfirm',
    firstNameField: '#dwfrm_registration_customer_firstname',
    lastNameField: '#dwfrm_registration_customer_lastname',
    dayOfBirth: '#dwfrm_registration_customer_dayofbirth',
    monthOfBirth: '#dwfrm_registration_customer_monthofbirth',
    yearOfBirth: '#dwfrm_registration_customer_yearOfBirth',
    emailConsent: '#dwfrm_registration_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_registration_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_registration_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_registration_customer_subscription_is3rdPartySubscribed',
    submitButton: '[data-tau="register_submit"]',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_registration_customer_email-error',
    emailForRegistration: '#dwfrm_registration_customer_email',
    confirmEmailForRegistration: '#dwfrm_registration_login_passwordconfirm',
  },
  'burton.co.uk': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_registration_login_password',
    passwordConfirmField: '#dwfrm_registration_login_passwordconfirm',
    firstNameField: '#dwfrm_registration_customer_firstname',
    lastNameField: '#dwfrm_registration_customer_lastname',
    dayOfBirth: '#dwfrm_registration_customer_dayofbirth',
    monthOfBirth: '#dwfrm_registration_customer_monthofbirth',
    yearOfBirth: '#dwfrm_registration_customer_yearOfBirth',
    emailConsent: '#dwfrm_registration_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_registration_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_registration_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_registration_customer_subscription_is3rdPartySubscribed',
    submitButton: '[data-tau="register_submit"]',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_registration_customer_email-error',
    emailForRegistration: '#dwfrm_registration_customer_email',
    confirmEmailForRegistration: '#dwfrm_registration_login_passwordconfirm',
  },
  'wallis.co.uk': {
    registrationForm: 'form.b-form',
    passwordField: '#dwfrm_registration_login_password',
    passwordConfirmField: '#dwfrm_registration_login_passwordconfirm',
    firstNameField: '#dwfrm_registration_customer_firstname',
    lastNameField: '#dwfrm_registration_customer_lastname',
    dayOfBirth: '#dwfrm_registration_customer_dayofbirth',
    monthOfBirth: '#dwfrm_registration_customer_monthofbirth',
    yearOfBirth: '#dwfrm_registration_customer_yearOfBirth',
    emailConsent: '#dwfrm_registration_customer_subscription_isemailsubscribed',
    postConsent: '#dwfrm_registration_customer_subscription_ispostalsubscribed',
    smsConsent: '#dwfrm_registration_customer_subscription_issmssubscribed',
    thirdPartyConsent: '#dwfrm_registration_customer_subscription_is3rdPartySubscribed',
    submitButton: '[data-tau="register_submit"]',
    myAccountUrl: '?registration=submitted',
    emailError: '#dwfrm_registration_customer_email-error',
    emailForRegistration: '#dwfrm_registration_customer_email',
    confirmEmailForRegistration: '#dwfrm_registration_login_passwordconfirm',
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
    emailError: 'div[class^="error error-message"]',
    emailForRegistration: '#dwfrm_profile_customer_email',
    confirmEmailForRegistration: '#dwfrm_profile_customer_emailconfirm',
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
    emailError: 'div[class="error error-message js-error-message"]',
    emailForRegistration: '#dwfrm_profile_customer_email',
    confirmEmailForRegistration: '#dwfrm_profile_customer_emailconfirm',
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
    emailError: 'div[class^="error error-message"]',
    emailForRegistration: '#dwfrm_profile_customer_email',
    confirmEmailForRegistration: '#dwfrm_profile_customer_emailconfirm',
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
    emailError: 'div[class^="error error-message"]',
    emailForRegistration: '#dwfrm_profile_customer_email',
    confirmEmailForRegistration: '#dwfrm_profile_customer_emailconfirm',
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
    emailError: 'div[class^="error error-message"]',
    emailForRegistration: '#dwfrm_profile_customer_email',
    confirmEmailForRegistration: '#dwfrm_profile_customer_emailconfirm',
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
    emailError: 'div[class^="error error-message"]',
    emailForRegistration: '#dwfrm_profile_customer_email',
    confirmEmailForRegistration: '#dwfrm_profile_customer_emailconfirm',
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
    emailError: 'div[class^="error error-message"]',
    emailForRegistration: '#dwfrm_profile_customer_email',
    confirmEmailForRegistration: '#dwfrm_profile_customer_emailconfirm',
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class RegistrationPage implements AbstractPage {

  goto (): void {
    cy.visit('/login?registrationPage=true');
  }

  click = {
    chooseEmailConsent () {
      const emailConsent = selectors[brand].emailConsent;
      cy.get(emailConsent).click({force: true});
    },
    choosePostConsent () {
      const postConsent = selectors[brand].postConsent;
      cy.get(postConsent).click();
    },
    chooseSmsConsent () {
      const smsConsent = selectors[brand].smsConsent;
      cy.get(smsConsent).click();
    },
    chooseThirdPartyConsent () {
      const thirdPartyConsent = selectors[brand].thirdPartyConsent;
      cy.get(thirdPartyConsent).click();
    },
    submitButton () {
      const submitButton = selectors[brand].submitButton;
      cy.get(submitButton).click({force: true});
    }
  };

  actions = {
    startRegistration (randomEmail: string) {
      const emailForRegistration = selectors[brand].emailForRegistration;
      const confirmEmailForRegistration = selectors[brand].confirmEmailForRegistration;
      cy.get(emailForRegistration).click({force: true}).type(randomEmail);
      if (isSiteGenesisBrand) {
        cy.get(confirmEmailForRegistration).click({force: true}).type(randomEmail);
      }
      if (brand == 'boohoo.com') {
        cy.get('button[data-id="continueButton"]').click();
      }
    },
    confirmationCheckbox () {
      if (!isSiteGenesisBrand) {
        cy.get('#dwfrm_registration_customer_emailregistationconfirm').check({force:true});
      } else {
        cy.get('#dwfrm_profile_customer_emailregistationconfirm').check();
      }
    },
    enterNewUserData (password: string, confirmPassword: string, firstName: string, lastName: string) {
      const passwordField = selectors[brand].passwordField;
      const passwordConfirmField = selectors[brand].passwordConfirmField;
      const firstNameField = selectors[brand].firstNameField;
      const lastNameField = selectors[brand].lastNameField;

      cy.get(passwordField).click({force: true}).type(password);
      cy.get(passwordConfirmField).click({force: true}).type(confirmPassword);
      cy.get(firstNameField).click({force: true}).type(firstName);
      cy.get(lastNameField).click({force: true}).type(lastName);
    },
    chooseDate (date: string, month: string, year: string) {
      const dayOfBirth = selectors[brand].dayOfBirth;
      const monthOfBirth = selectors[brand].monthOfBirth;
      const yearOfBirth = selectors[brand].yearOfBirth;

      cy.get(dayOfBirth).select(date,{force: true});
      cy.get(monthOfBirth).select(month,{force: true});
      cy.get(yearOfBirth).select(year,{force: true});
    }

  };

  assertions = {
    assertRegistrationFormIsPresent () {
      const registrationForm = selectors[brand].registrationForm;
      cy.get(registrationForm).should('be.visible');
    },
    assertCheckboxIsChecked () {
      cy.get('#dwfrm_registration_customer_emailregistationconfirm').should('be.checked');
    },
    assertMyAcountPageIsOpened () {
      const myAccountUrl = selectors[brand].myAccountUrl;
      cy.url().should('include', myAccountUrl);
    },
    assertErrorMessageExistingEmail () {
      const emailError = selectors[brand].emailError;
      if (brand == 'boohoo.com') {
          cy.get(emailError).should('be.visible').and('include.text', assertionText.RegistrationPageExistingEmail[language]);
      } else if (isSiteGenesisBrand) {
        cy.get(emailError).should('be.visible').and('include.text', assertionText.RegistrationPageExistingEmailSiteGenesis[language]);
      } else {
        cy.get(emailError).should('be.visible').and('include.text', assertionText.RegistrationPageExistingEmailArcadia[language]);
        
      }
      
    }

  };
}

export default new RegistrationPage();