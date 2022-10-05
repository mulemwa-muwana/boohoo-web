import assertionText from '../helpers/assertionText';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    submitButton: ':nth-child(9) > .b-button',
    emailError: '#dwfrm_profile_customer_email-error > span'
  },
  'nastygal.com': {
    submitButton: '[data-tau="register_submit"]',
    emailError: '#dwfrm_profile_customer_email-error'
  },
  'dorothyperkins.com': {
    submitButton: '[data-tau="register_submit"]',
    emailError: '#dwfrm_profile_customer_email-error'
  },
  'burton.co.uk': {
    submitButton: '[data-tau="register_submit"]',
    emailError: '#dwfrm_profile_customer_email-error'
  },
  'wallis.co.uk': {
    submitButton: '[data-tau="register_submit"]',
    emailError: '#dwfrm_profile_customer_email-error'
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class RegistrationPage implements AbstractPage {

  goto (): void {
    cy.visit('/login?registrationPage=true');
  }

  click = {
    chooseEmailConsent () {
      cy.get('#dwfrm_profile_customer_subscription_isemailsubscribed').click({force: true});
    },
    choosePostConsent () {
      cy.get('#dwfrm_profile_customer_subscription_ispostalsubscribed').click();
    },
    chooseSmsConsent () {
      cy.get('#dwfrm_profile_customer_subscription_issmssubscribed').click();
    },
    chooseThirdPartyConsent () {
      cy.get('#dwfrm_profile_customer_subscription_is3rdPartySubscribed').click();
    },
    submitButton () {
      const submitButton = selectors[variables.brand].submitButton;
      cy.get(submitButton).click();
    }
  };

  actions = {
    startRegistration (randomEmail: string) {
      if (variables.brand == 'wallis.co.uk'||variables.brand == 'dorothyperkins.com'||variables.brand == 'burton.co.uk') {
        cy.get('#dwfrm_profile_customer_email').click({force: true}).type(randomEmail);
      } else {
        cy.get('#dwfrm_profile_customer_email').type(randomEmail);
      }
      
      if (variables.brand == 'boohoo.com') {
        cy.get('button[data-id="continueButton"]').click();
      }
      
    },
    confirmationCheckbox () {
      if (variables.brand == 'burton.co.uk'|| variables.brand == 'dorothyperkins.com'||variables.brand == 'wallis.co.uk') {
        cy.get('#dwfrm_profile_customer_emailregistationconfirm').check({force:true});
      } else {
        cy.get('#dwfrm_profile_customer_emailregistationconfirm').check();
      }
      
    },
    enterNewUserData (password: string, confirmPassword: string, firstName: string, lastName: string) {
      if (variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com' || variables.brand == 'wallis.co.uk') {
        cy.get('#dwfrm_profile_login_password').click({force: true}).type(password);
        cy.get('#dwfrm_profile_login_passwordconfirm').click({force: true}).type(confirmPassword);
        cy.get('#dwfrm_profile_customer_firstname').click({force: true}).type(firstName);
        cy.get('#dwfrm_profile_customer_lastname').click({force: true}).type(lastName);
      } else {
        cy.get('#dwfrm_profile_login_password').type(password);
        cy.get('#dwfrm_profile_login_passwordconfirm').type(confirmPassword);
        cy.get('#dwfrm_profile_customer_firstname').type(firstName);
        cy.get('#dwfrm_profile_customer_lastname').type(lastName);
      }
     
    },
    chooseDate (date: string, month: string, year: string) {
      if (variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com' || variables.brand == 'wallis.co.uk') {
        cy.get('#dwfrm_profile_customer_dayofbirth').select(date,{force: true});
        cy.get('#dwfrm_profile_customer_monthofbirth').select(month,{force: true});
        cy.get('#dwfrm_profile_customer_yearOfBirth').select(year,{force: true});
      } else {
        cy.get('#dwfrm_profile_customer_dayofbirth').select(date);
        cy.get('#dwfrm_profile_customer_monthofbirth').select(month);
        cy.get('#dwfrm_profile_customer_yearOfBirth').select(year);
      }
      
    }

  };

  assertions = {
    assertRegistrarionFormIsPresent () {
      cy.get('.l-service-section').should('be.visible');
    },
    assertCheckboxIsChecked () {
      cy.get('#dwfrm_profile_customer_emailregistationconfirm').should('be.checked');
    },
    assertMyAcountPageIsOpened () {
      cy.url().should('include', '?registration=submitted');
    },
    assertErrorMessageExistingEmail () {
      const emailError = selectors[variables.brand].emailError;
      if (variables.brand == 'boohoo.com') {
        cy.get(emailError).should('be.visible').and('include.text', assertionText.RegistrationPageExistingEmail[variables.language]);
      } else {
        cy.get(emailError).should('be.visible').and('include.text', assertionText.RegistrationPageExistingEmailArcadia[variables.language]);
        
      }
      
    }

  };
}

export default new RegistrationPage();