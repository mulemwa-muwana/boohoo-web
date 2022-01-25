import { GotoOptions } from '../support/types';
import AbstractPage from './abstract/abstract.page';
import * as CommonActions from '../helpers/common'

class HomePage implements AbstractPage {

    goto(options: GotoOptions = null) {
        cy.visit('/');
        if (options?.applyCookies) {
            CommonActions.applyMarketingCookies();
            cy.visit('/');
        }
    }

    click = {
        // We may want to force this click as the hover over element that shows this link cannot be actioned in Cypress.
        logInButton(opts = { force: false }) {
            cy.get('a.user-link-item[href*="/login"]').click({ force: opts.force });
        }
    }

    actions = {
        
    }

    assertions = {
        assertUserPanelTitle(name: string) {
            // We have to manually show these elements by adding the display: unset style, as the on hover doesn't work in cypress.
            cy.get('.user-panel').invoke('attr', 'style', 'display: unset!important;');
            cy.get('.user-panel .user-title:nth-child(2)').should('contain.text', name)
        }
    }
    
}

export default new HomePage();