class RefundOrder {

  refundCustomerORder (brandName: string) {
        
    cy.get('#showActivities___BV_modal_content_ select', { log: false }).select('Boohoo Group', { log: false });
    cy.get('[dusk="activity-3-select"]', { log: false }).click({ log: false });
    cy.get('#showActivities___BV_modal_content_', { log: false }).should('not.exist');
    cy.readFile(`cypress/artefacts/orderCreation/${brandName}/adyen-OrderRefund.json`).then(data => {
      cy.log(data.orderNumber);
      cy.wait(60000);
      cy.get('input[dusk="sidebar-search-input"]', { log: true }).type(data.orderNumber + '{enter}', { log: false });
    });
    cy.get('button').contains('Refund All').click();

  }
}

export default new RefundOrder();