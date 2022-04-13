import AbstractPage from './abstract/abstract.page';

class BillingPage implements AbstractPage {
  goto (): void {
    cy.visit('/checkout?step=billing');
  }

  click = {
    changeShippingAddress (){
      cy.get('button[class="b-button m-link"]').eq(1).click();
    },
    changeShippingMethod (){
      cy.get('button[class="b-button m-link"]').eq(2).click();
    }
   
  };

  actions = {
    selectDate (day: string, month: string, year: string){
      cy.get('select[id="dwfrm_profile_customer_dayofbirth"]').select(day);
      cy.get('select[id="dwfrm_profile_customer_monthofbirth"]').select(month);
      cy.get('select[id="dwfrm_profile_customer_yearOfBirth"]').select(year);
    }
  
  };

  assertions = {
    assertShippingAddressPresent (){
      cy.get('section[class="b-checkout_card b-summary_group-item m-full-width"]').should('be.visible').and('not.be.empty');
    },
    assertShippingMethodPresent (shippingMethod: string){
      cy.get('section[class="b-checkout_card b-summary_group-item m-full-width m-bordered"]').should('be.visible').and('contain', shippingMethod);
    },
    assertEmailIsCorrect (email: string){
      cy.get('input[id="dwfrm_billing_contactInfoFields_email"]').should('contain', email);
    },
    assertSubscriptionBlockPresent (){
      cy.get('div[class="b-create_account_form-subscription"]').should('be.visible');
    },
    assertDateFormIsPresent (){
      cy.get('div[class="b-form_section m-required m-wrapper"]').should('be.visible');
    },
    assertDateIsSelected (day: string, month: string, year: string){
      cy.get('select[id="dwfrm_profile_customer_dayofbirth"]').should('have.have.value',day);
      cy.get('select[id="dwfrm_profile_customer_monthofbirth"]').should('have.value',month);
      cy.get('select[id="dwfrm_profile_customer_yearOfBirth"]').should('have.value',year);
    }
  };
}

export default new BillingPage();

