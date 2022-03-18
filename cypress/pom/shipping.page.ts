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
        
  };

}

export default new ShippingPage();