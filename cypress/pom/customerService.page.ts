import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import globalfooterPage from './globalfooter.page';
import { brand } from 'cypress/support/e2e';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    trackOrderButton: '.l-customer_service-actions > a:nth-of-type(1)',
    startReturnButton: '.l-customer_service-actions > a:nth-of-type(2)',
    virtualAssistantButton:'.l-customer_service-button.egain-btn'

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

  click = {
  };

  actions = {
    checkTrackOrderButtonByText (text: string, expectedUrlFragment: string) {
      const trackOrderButton = selectors[brand].trackOrderButton;
      cy.get(trackOrderButton)
        .should('be.visible')
        .should('contain', text).then(element => {
          cy.wrap(element).click({force: true});
          cy.url().should('include', expectedUrlFragment);
        });
    },

    checkReturnButtonByText (text: string, expectedUrlFragment: string) {
      const startReturnButton = selectors[brand].startReturnButton;
      cy.get(startReturnButton)
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .should('contain', text).then(element => {
          cy.wrap(element).click({force: true});
          cy.url().should('include', expectedUrlFragment);
        });
    },
    checkVirtualAssistantButtonByText (text: string) {
      const virtualAssistantButton = selectors[brand].virtualAssistantButton;
      cy.get(virtualAssistantButton)
        .should('contain', text)
        .should('be.visible')
        .should('have.attr','onclick')
    }
  };

  assertions = {
  };

}
export default new CustomerServicePage();