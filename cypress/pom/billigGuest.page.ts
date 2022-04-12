import AbstractPage from './abstract/abstract.page';

class BillingPage implements AbstractPage {
  goto (): void {
    cy.visit('/checkout?step=billing');
  }

  click = {
   
  };

  actions = {
  
  };

  assertions = {
    assertShippingAddressPresent (){
      cy.get('section[class="b-checkout_card b-summary_group-item m-full-width"]').should('be.visible').and('not.be.empty');
    },
    assertShippingMethodPresent (shippingMethod: string){
      cy.get('section[class="b-checkout_card b-summary_group-item m-full-width m-bordered"]').should('be.visible').and('contain', shippingMethod);
    }
  };
}

export default new BillingPage();

