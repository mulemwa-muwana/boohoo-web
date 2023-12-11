import { isSiteGenesisBrand } from 'cypress/helpers/common';
import assertionText from '../helpers/assertionText';
import AbstractPage from './abstract/abstract.page';
import { brand , language } from 'cypress/support/e2e';


const selectors: SelectorBrandMap = {
    'boohooman.com': {
        firstNameField: 'input#first_name',
        lastNameField: 'input#last_name',
        signupButton:'.submit',
        dayOfBirth:'select#day',
        monthOfBirth:'select#month',
        yearOfBirth:'select#year',
        emailForKeyWorker:'input#email_address',
        KeyWorkerForm:'.form_title.tk-nimbus-sans-extended',
        EmailAddressError: '#email_address-error'

    },
    'nastygal.com': { 
    },
    'dorothyperkins.com': {
    },
    'burton.co.uk': {
    },
    'wallis.co.uk': {
    },
    'karenmillen.com': { 
    },
    'coastfashion.com': {
    },
    'warehousefashion.com': {
    },
    'oasis-stores.com': { 
    },
    'misspap.com': { 
    },
    'boohoo.com': {
    },
    'boohoomena.com': {

    },
    
  };

  const variables = Cypress.env() as EnvironmentVariables;
  
  class KeyWorkerPage implements AbstractPage {
    goto () {
      cy.visit( variables.url + '/key-workers.html');
    }
    click = {
      signupButton () {
        const signupButton = selectors[brand].signupButton;
        cy.get(signupButton).click({force: true});
      }
    };

    actions = {

        EnterData(firstName: string, lastName: string){
      const firstNameField = selectors[brand].firstNameField;
      const lastNameField = selectors[brand].lastNameField;

      cy.get(firstNameField).click({force: true}).type(firstName);
      cy.get(lastNameField).click({force: true}).type(lastName);
        },
        EnterEmail (username: string) {
          const emailForKeyWorker = selectors[brand].emailForKeyWorker;
          cy.get(emailForKeyWorker).click({force: true}).type(username);
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

      assertKeyWorkerFormIsPresent (text:string) {
        const KeyWorkerForm = selectors[brand].KeyWorkerForm;
        cy.get(KeyWorkerForm).should('be.visible').and('include.text', text);
      },

      assertKeyWorkeErrorMessagePresent (text:string) {
        const EmailAddressError = selectors[brand].EmailAddressError;
        cy.get(EmailAddressError).should('be.visible').and('include.text', text);

      }
    };
  }
  export default new KeyWorkerPage();