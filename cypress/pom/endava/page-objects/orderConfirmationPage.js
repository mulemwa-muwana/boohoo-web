export class OrderConfirmationPage {

    orderNumberSection() {
        return cy.get('[aria-label="Order Details"] > .b-summary_group > :nth-child(1)')
    }

    shippingInfo() {
        return cy.get('[aria-label="Shipping Details"]')
    }
}