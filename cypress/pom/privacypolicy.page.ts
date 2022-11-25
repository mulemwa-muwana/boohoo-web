import * as CommonActions from '../helpers/common';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    privacyNoticyPageTitle: 'span.b-page_title',
  },
  'nastygal.com': {
    privacyNoticyPageTitle: '.b-user_content h1',
  },
  'dorothyperkins.com': {
    privacyNoticyPageTitle: '.l-static_page-title',
  },
  'burton.co.uk': {
    privacyNoticyPageTitle: '.l-static_page-title',
  },
  'wallis.co.uk': {
    privacyNoticyPageTitle: '.l-static_page-title',
  },
  'boohooman.com': undefined,
  'karenmillen.com': {
    privacyNoticyPageTitle: 'h1 > strong',
  },
  'coastfashion.com': {
    privacyNoticyPageTitle: 'h1 > strong',
  },
  'warehousefashion.com': undefined,
  'oasis-stores.com': {
    privacyNoticyPageTitle: 'h1 > strong'
  },
  'misspap.com': {
    privacyNoticyPageTitle: 'h1 > strong'
  }
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
    assertPrivacyNoticyPageOpens (text: string) {
      const privacyNoticyPageTitle = selectors[variables.brand].privacyNoticyPageTitle;
      cy.get(privacyNoticyPageTitle).should('contains.text', text);
    }
  };
}

export default new PrivacyPolicyPage();