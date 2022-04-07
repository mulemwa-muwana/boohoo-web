import AbstractPage from './abstract/abstract.page';

class ShippingPage implements AbstractPage {

  goto (): void {
    cy.visit('/shipping');
  }

  click = {
    submitPromoCode (){
      cy.get('button[data-tau="coupon_submit"]').click();
    }
  };

  actions = {
    promoCodeField (promoCode: string){
      cy.get('dwfrm_coupon_couponCode').type(promoCode);
    }
  };

  assertions = {
    AssertShippingPageUrl (){
      cy.url().should('include', 'https://uk-dwdev.boohoo.com/checkout?step=shipping');
    }
        
  };

}

export default new ShippingPage();