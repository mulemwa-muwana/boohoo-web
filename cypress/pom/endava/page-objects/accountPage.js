export class AccountPage {

   signOutLink() {
      return cy.get('.b-account-signout')
   }

   logOut() {
      this.signOutLink().click()
   }

   orderHistoryLink() {
      return cy.get(':nth-child(2) > .b-account_nav-item_link > .b-account_nav-item_label')
   }

   goToOrderHistory() {
      this.orderHistoryLink().click()
   }

   newestOrder() {
      return cy.get(':nth-child(1) > .b-card-body > .b-order_item > .b-order_item-buttons > .m-view_order')
   }

   openNewestOrder() {
      this.newestOrder().should('be.visible').click()
   }

   startReturnButton() {
      return cy.get('.b-order_item-button')
   }

   startReturn() {
      this.startReturnButton().click()
   }

   greetingMsg(){
      return cy.get('.b-user_greeting-message')
   }

}

