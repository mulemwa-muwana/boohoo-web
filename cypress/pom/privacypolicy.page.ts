import { GotoOptions } from '../support/types';
import * as CommonActions from '../helpers/common';

/**
 * Page Objects should consist of:
 * @method goto should navigate to the page in context.
 * @object 'click' object containg all singular cypress click methods.
 * @object 'actions' object containing all cypress complex page methods.
 * @object 'assertions' object containing all cypress assertion methods.
 */

class PrivacyPolicyPage {

    goto(options: GotoOptions = null) {
        cy.visit('page/privacy-notice.html');
        if (options?.applyCookies) {
            CommonActions.applyMarketingCookies();
            cy.visit('/');
        }
    }

    click = {
    }

    actions = {
    }

    assertions = {
        assertOnPage() {
            cy.url().then(currentUrl => {
                expect(currentUrl).to.contain('privacy-notice');
            }) 
        }
    }
}

export default new PrivacyPolicyPage();