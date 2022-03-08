import { GotoOptions } from '../support/types';
import * as CommonActions from '../helpers/common';
import AbstractPage from './abstract/abstract.page';

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
      cy.url().then(currentUrl => {
        expect(currentUrl).to.contain('privacy-notice');
      }); 
    }
  };
}

export default new PrivacyPolicyPage();