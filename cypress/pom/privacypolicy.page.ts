import { GotoOptions } from '../support/types';
import * as CommonActions from '../helpers/common';
import AbstractPage from './abstract/abstract.page';
import assertionText from '../helpers/assertionText';

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
    assertOnPage () {
      cy.url().should('include', assertionText.PrivacyPolicyURL.EN);
    },
    assertPrivacyNoticyPageOpens (){
      cy.get('span.b-page_title').should('contain.text', assertionText.PrivacyPolicyH1.EN);
    }
  };
}

export default new PrivacyPolicyPage();