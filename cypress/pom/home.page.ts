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

    click: {

    }
    actions: {
        
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