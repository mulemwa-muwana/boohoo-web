import assertionText from '../helpers/assertionText';
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
    editSavedAddress (){
      cy.get(':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button').click();
    }
  
  };

  actions = {
    promoCodeField (promoCode: string){
      cy.get('#dwfrm_coupon_couponCode').type(promoCode);
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
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_country'); 
    },
    phoneNumberField (phone: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_phone').type(phone);
    }
  };

  assertions = {
    assertPromoCodeFieldIsDispayed (){
      cy.get('#dwfrm_coupon_couponCode').should('be.visible');
    },
    assertSavedShippingAddressIsDispayed (){
      cy.get('b-address-name').eq(1).should('be.visible').should('not.be.empty');
    }, 
    assertFirstNameIsMandatory (){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address1-error').should('contain.text', assertionText.ShippingMandatoryFieldsFnameLnamePostcode['UK']);
    },
    assertCityIsMandatory (){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_city-error').should('contain.text', assertionText.ShippingMandatoryFieldsFnameLnamePostcode['UK']);
    },
    assertPostCodeIsMandatory (){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_postalCode-error').should('contain.text', assertionText.ShippingMandatoryFieldsFnameLnamePostcode['UK']);
    },
    assertUserProceededToBillinPage (){
      cy.url().should('include', 'billing');
    }
    
  };

}

export default new ShippingPage();