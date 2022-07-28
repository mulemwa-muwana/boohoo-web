import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
class OrderConfirmation implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    closePopUp (){
      cy.get('#WLbanner_2112171003 > a', {timeout: 10000}).click();
    }
  };

  actions = {

  };

  assertions = {
    assertEmailIsDisplayed (email: string){
      cy.get('.b-confirmation_header-email').should('contain.text', email);
    },
    assertOrderValueIsDisplayed (){
      cy.get('.b-summary_shipping-cost').should('not.be.empty');
    },
    assertShippingAddressDetails (fname: string, lname: string, addressLine1: string, phone: string){
      cy.get('.b-address-name').should('contain', fname);
      cy.get('.b-address-name').should('contain', lname);
      cy.get('.b-address-summary').should('contain', addressLine1);
    },
    assertOrderNumberIsDisplayed (){
      cy.get(':nth-child(1) > .b-summary_group-details').eq(0).should('not.be.empty');
    },
    assertBillingAddressDetails (fname: string, lname: string, addressLine1: string, phone: string){
      cy.get('.b-address-name').eq(1).should('contain', fname);
      cy.get('.b-address-name').eq(1).should('contain', lname);
      cy.get('.b-address-summary').eq(1).should('contain', addressLine1);
    },
    assertShippingMethodIsDisplayed (){
      cy.get('b-summary_shipping-name').should('not.be.empty');
    },
    assertPaymentMethod (method: string){
      cy.get('.b-summary_payment-name').should('contain.text', method);
    },
    assertOrderTotalIsVisible (){
      cy.get('.b-summary_shipping-cost').should('not.be.empty');
    },
    assertThatPasswordFieldForGuestUserIsDisplayed (){
      cy.get('#dwfrm_newPasswords_newpassword').should('be.visible');
    },
    assertThatConfirmPasswordFieldForGuestUserIsDisplayed (){
      cy.get('#dwfrm_newPasswords_newpasswordconfirm').should('be.visible');
    }
  };

}

export default new OrderConfirmation();