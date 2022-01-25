export class TwoPieceSuitsPage {

    colorDropdown() {
        return cy.get('#searchRefineBarAccordionItemBtn-colour > .b-refinements_accordion-title')
    }

    selectColor(color) {
        this.colorDropdown().click()
        cy.contains(color).click()
    }

    validateColor(color) {
        cy.url().should('include', color)
    }
}