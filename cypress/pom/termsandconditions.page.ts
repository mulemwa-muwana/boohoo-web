import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    termsAndConditionsPageTitle: 'span.b-page_title',
  },
  'nastygal.com': {
    termsAndConditionsPageTitle: '.b-user_content h1',
  },
  'dorothyperkins.com': {
    termsAndConditionsPageTitle: '.l-static_page-title',
  },
  'burton.co.uk': {
    termsAndConditionsPageTitle: '.l-static_page-title',
  },
  'wallis.co.uk': {
    termsAndConditionsPageTitle: '.l-static_page-title',
  },
  'boohooman.com': {
    termsAndConditionsPageTitle: '.termsuse > h1'
  },
  'karenmillen.com': {
    termsAndConditionsPageTitle: '#primary > div > h1',
  },
  'coastfashion.com': {
    termsAndConditionsPageTitle: '.l-static_page-title',
  },
  'warehousefashion.com': {
    termsAndConditionsPageTitle: '[class*="content-page-wrapper"] > h1',
  },
  'oasis-stores.com': {
    termsAndConditionsPageTitle: '.l-static_page-title > strong'
  },
  'misspap.com': {
    termsAndConditionsPageTitle: '.content-page-wrapper > h3',
  },
  'boohoomena.com': {
    termsAndConditionsPageTitle: '#primary > div > h1'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class TermsAndConditionsPage implements AbstractPage {

  goto () {
    if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'misspap.com' || variables.brand == 'boohoomena.com') {
      cy.visit(variables.url + '/page/terms-of-use.html');
    } else {
      cy.visit(variables.url + '/page/terms-and-conditions.html');
    }
  }

  click = {
  };

  actions = {
  };

  assertions = {
    assertOnPage (text: string) {
      cy.url().should('include', text);
    },
    assertTermsAndConditionsPageOpens (text: string) {
      const termsAndConditionsPageTitle = selectors[variables.brand].termsAndConditionsPageTitle;
      cy.get(termsAndConditionsPageTitle).contains(text, { matchCase: false }).should('be.visible');      
    } 
  };
}

export default new TermsAndConditionsPage();