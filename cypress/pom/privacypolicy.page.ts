import * as CommonActions from '../helpers/common';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    privacyNoticyPageTitle: 'span.b-page_title',
  },
  'nastygal.com': {
    privacyNoticyPageTitle: 'span.b-page_title',
  },
  'dorothyperkins.com': {
    privacyNoticyPageTitle: 'span.b-page_title',
  },
  'burton.co.uk': {
    privacyNoticyPageTitle: 'span.b-page_title',
  },
  'wallis.co.uk': {
    privacyNoticyPageTitle: 'span.b-page_title',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class PrivacyPolicyPage implements AbstractPage {

  goto (options: GotoOptions = null) {
    cy.visit('page/privacy-notice.html');
    if (options?.applyCookies) {
      CommonActions.applyMarketingCookies();
      cy.visit('/');
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
    assertPrivacyNoticyPageOpens (text: string){
      const privacyNoticyPageTitle = selectors[variables.brand].privacyNoticyPageTitle;
      cy.get(privacyNoticyPageTitle).should('contain.text', text);
    }
  };
}

export default new PrivacyPolicyPage();