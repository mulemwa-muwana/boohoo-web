import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import globalfooterPage from './globalfooter.page';
import { brand, language } from 'cypress/support/e2e';
import assertionText from 'cypress/helpers/assertionText';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    customerServiceButtonsAtTop: '.l-customer_service-button'
  },
  'nastygal.com': {},
  'dorothyperkins.com':{},
  'burton.co.uk':{},
  'wallis.co.uk':{},
  'boohooman.com':{},
  'karenmillen.com':{},
  'coastfashion.com':{},
  'warehousefashion.com':{},
  'oasis-stores.com':{},
  'misspap.com':{},
  'boohoomena.com':{}
};

class CustomerServicePage implements AbstractPage {

  goto () {
    homePage.goto();
    globalfooterPage.click.helpLink();
  }

  click ={
  };

  actions = {
    openVirtualAssistant (text: string) {
      const customerServiceButtonsAtTop = selectors[brand].customerServiceButtonsAtTop; 
      cy.scrollTo('top');
      cy.get(customerServiceButtonsAtTop)
        .contains(text)
        .invoke('removeAttr', 'target')
        .click({force: true});
      cy.wait(2000);   
    }

  };

  assertions = {
    assertTrackOrderButtonIsPresent () {
      const customerServiceButtonsAtTop = selectors[brand].customerServiceButtonsAtTop;
      cy.get(customerServiceButtonsAtTop)
        .contains(assertionText.customerServicePageTrackOrderButton[language])
        .should('be.visible');

    },

    assertTrackOrderButtonIsFunctional () {
      const customerServiceButtonsAtTop = selectors[brand].customerServiceButtonsAtTop;
      cy.get(customerServiceButtonsAtTop)
        .contains(assertionText.customerServicePageTrackOrderButton[language])
        .click();
      cy.url().should('include', 'trackform');
    },

    assertStartReturnButtonIsPresent () {
      const customerServiceButtonsAtTop = selectors[brand].customerServiceButtonsAtTop;
      cy.get(customerServiceButtonsAtTop)
        .contains(assertionText.customerServicePageReturnButton[language])
        .should('be.visible');
    },

    assertStartReturnButtonIsFunctional () {
      const customerServiceButtonsAtTop = selectors[brand].customerServiceButtonsAtTop;
      cy.get(customerServiceButtonsAtTop)
        .invoke('removeAttr', 'target')
        .contains(assertionText.customerServicePageReturnButton[language])
        .click();
      cy.url().should('include', 'returns');
    },

    assertVirtualAssistantIsOpen () {
      cy.wait(12000);

      // To be completed in phase 2
    }

  };

}
export default new CustomerServicePage();