import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class ShippingPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    submitPromoCode (){
      cy.get('button[data-tau="coupon_submit"]').click();
    },
    addNewAddress (){
      cy.get('button[data-tau="add_new_address"]').eq(1).click();
    },
    cancelAddingNewAddress (){
      cy.get('.b-button m-link b-address_form-back');
    },
    proceedToBilling (){
      cy.get('button[data-tau="proceed_to_payment"]').eq(1).click();
    },
  
  };

  actions = {
    promoCodeField (promoCode: string){
      cy.get('dwfrm_coupon_couponCode').type(promoCode);
    },
    addressLookupField (address: string){
      cy.get('#LoqateAutocomplete').type(address);
    },
    firstNameField (fname: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_firstName').type(fname);
    },
    lastNameField (lname: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_lastName').type(lname);
    },
    countrySelector (){

    },
    phoneNumberField (phone: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_phone').type(phone);
    }
  };

  assertions = {
    assertPromoCodeFieldIsDispayed (){
      cy.get('button[data-tau="coupon_submit"]').should('be.visible');
    },
    assertSavedShippingAddressIsDispayed (){
      cy.get('b-address-name').eq(1).should('be.visible').should('not.be.empty');
    } 
  };

}

export default new ShippingPage();