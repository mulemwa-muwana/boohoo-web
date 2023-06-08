import AbstractPage from './abstract/abstract.page';
import { brand, url, locale } from 'cypress/support/e2e';

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
    termsAndConditionsPageTitle: '#primary h1',
  },
  'boohoomena.com': {
    termsAndConditionsPageTitle: '#primary > div > h1'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class TermsAndConditionsPage implements AbstractPage {

  goto () {
    if (brand == 'coastfashion.com' || brand == 'oasis-stores.com' || brand == 'misspap.com' || brand == 'boohoomena.com') {
      cy.visit(url + '/page/terms-of-use.html');
      // if((brand == 'coastfashion.com' || brand == 'oasis-stores.com') && locale == 'EU'){
      //   cy.setCookie('dw_locale', 'default');
      // }
    } else {
      cy.visit(url + '/page/terms-and-conditions.html');
      // if((brand == 'karenmillen.com' || brand == 'warehousefashion.com') && locale == 'EU'){
      //   cy.setCookie('dw_locale', 'default');
      // }
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
      const termsAndConditionsPageTitle = selectors[brand].termsAndConditionsPageTitle;

      cy.get(termsAndConditionsPageTitle).contains(text, { matchCase: false }).should('be.visible');      

    } 
  };
}

export default new TermsAndConditionsPage();