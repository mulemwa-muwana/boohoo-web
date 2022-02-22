import { GotoOptions } from '../support/types';
import AbstractPage from './abstract/abstract.page';
import * as CommonActions from '../helpers/common'

class HomePage implements AbstractPage {

    goto(options: GotoOptions = null) {
       
       cy.visit('https://storefront:Oreo2022@uk-dwdev.boohoo.com/');
       
        if (options?.applyCookies) {
            CommonActions.applyMarketingCookies();
          cy.visit('https://storefront:Oreo2022@uk-dwdev.boohoo.com/');
        }
    }

    click = {
        // We may want to force this click as the hover over element that shows this link cannot be actioned in Cypress.
        logInButton(opts = { force: false }) {
            cy.get('a.user-link-item[href*="/login"]').click({ force: opts.force });
        },

        //objects for search subsystem tests
        searchIcon(opts = { force: false }) {
            cy.get('.b-search_input-close').click({ force: opts.force });            
        },
        searchField(){
            cy.get('#header-search-input').click();
        },
        wishListIcon()
        {
            cy.get('.b-header_wishlist-icon > .i-icon').click();
        },
        cartIcon(){
            cy.get('.b-minicart_icon-link').click();
        }

    }

    actions = {       
        findItemUsingSKU(SKU){
            cy.get('.b-search_input-close').type(SKU);
        }

    }

    assertions = {
        assertUserPanelTitle(name: string) {
            // We have to manually show these elements by adding the display: unset style, as the on hover doesn't work in cypress.
            cy.get('.user-panel').invoke('attr', 'style', 'display: unset!important;');
            cy.get('.user-panel .user-title:nth-child(2)').should('contain.text', name)
        },

        //search assertions
        assertSearchIconPresent()
        {
            cy.get('.b-search_input-close').should('be.visible');
        },
        assertSearchFiledPresent()
        {
            cy.get('#header-search-input').should('be.visible');
        },
        assertSearchFieldContains(text: string)
        {
            cy.get('#header-search-input').contains(text)
        },
        assertSearchResultPageTitle(text: string)
        {
            cy.url().should('include', text)
        },
        assertAutosearchSuggestionsDispayed()
        {
            
        }


    }
    
}

export default new HomePage();