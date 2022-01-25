
export class CheckoutPage {

    checkoutButton() {
        return cy.get('.b-summary_section > :nth-child(1) > .b-cart_actions-button')
    }

    proceedToBillingButton() {
        return cy.get('.b-checkout_step-controls > .b-button')
    }

    clickCheckOut() {
        this.checkoutButton().click()
        this.proceedToBillingButton().click()
    }

    creditCardButton() {
        return cy.get('#payment-button-CREDIT_CARD > .b-payment_accordion-icon')
    }

    securityCodeField() {
        return cy.get('input[name="securityCode"]')
    }

    chooseSavedCC(code) {
        this.creditCardButton().click()
        this.securityCodeField().should('be.visible').type(code)
    }

    orderNumberTitle() {
        return cy.get('[aria-label="Order Details"] > .b-summary_group > :nth-child(1) > .b-summary_group-title')
    }

    payNowButton() {
        return cy.get('.b-checkout_step-controls > .b-button')
    }

    payNow() {
        this.payNowButton().click()
    }

    productTitle() {
        return cy.get('.b-cart_product-title > a')
    }


}