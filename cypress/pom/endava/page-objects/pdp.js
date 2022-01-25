export class Pdp {

    smallSizeButton() {
        return cy.get('#variation-swatch-button-1-30-smallView > .b-variation_swatch-value > .b-variation_swatch-value_text')
    }

    selectSize() {
        this.smallSizeButton().should('be.visible').click()
    }

    addToCartButton() {
        return cy.get('button[data-id="addToCart"]')
    }

    addToCart() {
        this.addToCartButton().should('be.visible').click()
    }

    miniCartIcon() {
        return cy.get('.m-empty > .i-icon')
    }

    openMiniCart() {
        this.miniCartIcon().should('be.visible').click()
    }

    availabalityStatus() {
        return cy.get('.b-availability-status')
    }

    




}