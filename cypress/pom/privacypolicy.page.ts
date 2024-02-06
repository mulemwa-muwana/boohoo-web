import { brand, locale } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    privacyNoticyPageTitle: 'span.b-page_title',
  },
  'nastygal.com': {
    privacyNoticyPageTitle: '.b-user_content h1',
    privacyNoticyPageTitleAUIE: 'h1',
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
  'boohooman.com': {
    privacyNoticyPageTitle: 'h1 > strong'
  },
  'karenmillen.com': {
    privacyNoticyPageTitle: 'h1 > strong',
    privacyNoticyPageTitleUS: '[class="content-asset cs-privacy-policy "]',
  },
  'coastfashion.com': {
    privacyNoticyPageTitle: 'h1 > strong',
  },
  'warehousefashion.com': {
    privacyNoticyPageTitle: 'h1 > strong',
  },
  'oasis-stores.com': {
    privacyNoticyPageTitle: 'h1 > strong'
  },
  'misspap.com': {
    privacyNoticyPageTitleAUIE: 'h1 > strong',
    privacyNoticyPageTitle: '.content-page-wrapper > :nth-child(1)',
  },
  'boohoomena.com': {
    privacyNoticyPageTitle: 'h1 > strong'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class PrivacyPolicyPage implements AbstractPage {

  goto () {
    cy.visit( variables.url + 'privacy-notice.html');
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
      const privacyNoticyPageTitleUS = selectors[variables.brand].privacyNoticyPageTitleUS;
      const privacyNoticyPageTitleAUIE = selectors[variables.brand].privacyNoticyPageTitleAUIE;
    
      if (brand == 'karenmillen.com' && locale == 'US') {
        cy.get(privacyNoticyPageTitleUS).should('contains.text', text, { matchCase: false });
      } else if (brand == 'misspap.com'|| brand =='nastygal.com' && locale == 'IE' || locale == 'AU') {
        cy.get(privacyNoticyPageTitleAUIE).should('contains.text', text, { matchCase: false });
        
      } else {
        cy.get(privacyNoticyPageTitle).should('contains.text', text, { matchCase: false });
      }
    }
  };
}

export default new PrivacyPolicyPage();