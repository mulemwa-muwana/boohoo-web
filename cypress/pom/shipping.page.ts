import assertionText from '../helpers/assertionText';
import { EnvironmentVariables } from '../support/types';
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
      cy.get('.b-checkout_step-controls > .b-button').click();
    },
    editSavedAddress (){
      cy.get(':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button').click();
    },
    addAddressManually (){
      cy.get('#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button').click().should('be.visible');
    },
    editCart (){
      cy.get('.b-summary_order-header > .b-link').should('be.visible').click();
    },
    editAddress (){
      cy.get(':nth-child(1) > .b-summary_group-subtitle > .b-button').should('be.visible').click();
    },
    addNewAddressButton (){
      cy.get('.b-address_selector-button').click();
    },
    editExistingAddressButton (){
      cy.get('.b-option_switch-label_surface > .b-button').click();
    },
    cancelAddingNewAddressForRegisteredUser (){
      cy.get('.b-address_form-header > .b-button').should('be.visible').click();
    },
    viewAllAddressesLink (){
      cy.get('.b-address_selector-actions > .m-link').should('be.visible').click();
    },
    addPremierToCartFromShippingPage (){
      cy.get('#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button').should('be.visible').click();
    },
    OpenPUDOlocations (){
      cy.get('#deliveryTabs > div.b-tab_list > button:nth-child(2)').click();
    },
  
  };

  actions = {
    clickPreferedShippingMethod (variables: EnvironmentVariables) {
      cy.get('span').contains(variables.shippingMethod).click();
    },
    promoCodeField (promoCode: string){
      cy.get('#dwfrm_coupon_couponCode').type(promoCode);
    },
    addressLookupField (address: string){
      cy.get('#LoqateAutocomplete').type(address).should('be.visible');
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
    },
    selectCountry (country: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_country').select(country).invoke('show');
    },
    adressLine1 (address1: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address1').type(address1);
    },
    adressLine2 (address2: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address2').type(address2);
    },
    cityFiled (city: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_city').type(city);
    },
    countyField (county: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_states_stateCode').type(county);
    },
    postcodeField (postcode: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_postalCode').type(postcode);
    },
    selectShippingMethod (shippingMethod: string){
      cy.get('.b-option_switch-label').each(() => {
        cy.contains(shippingMethod).click({force: true});
      });
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
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address1-error').should('contain.text', assertionText.ShippingMandatoryFieldsFnameLnamePostcode.EN);
    },
    assertCityIsMandatory (){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_city-error').should('contain.text', assertionText.ShippingMandatoryFieldsFnameLnamePostcode.EN);
    },
    assertPostCodeIsMandatory (){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_postalCode-error').should('contain.text', assertionText.ShippingMandatoryFieldsFnameLnamePostcode.EN);
    },
    assertUserProceededToBillinPage (){
      cy.url().should('include', 'billing');
    },
    assertFirstNameFieldIsPopulated (text: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_firstName').should('contain.value', text);
    },
    assertLastNameFieldIsPopulated (text: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_lastName').should('contain.value', text);
    },
    assertCountryIsSelected (text: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_country').should('contain.value', text);
    },
    assertPhoneNumberFieldIsPopulated (text: string){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_phone').should('contain.value', text);
    },
    assertGuestEmailFiledDispayes (){
      cy.get('#dwfrm_billing_contactInfoFields_email').should('be.visible');
    },
    assertManualAddressFieldsAreDispayed (){
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address1').should('be.visible');
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_address2').should('be.visible');
      cy.get('#dwfrm_shipping_shippingAddress_addressFields_city').should('be.visible');
    },
    assertOrderTotalIsDsipayed (){
      cy.get('.m-total > .b-summary_table-value').should('not.be.empty');
    },
    assertAddressDetailsAreMandatory (text: string){
      cy.get('[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message').should('contain.text', text);
    },
    assertPostcodeLookupIsVisible (){
      cy.get('#LoqateAutocomplete').should('be.visible');
    },
    assertOtherAddressesAreVisible (){
      cy.get('.m-list > :nth-child(3) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface').should('be.visible');
    },
    assertCartShippingPageContainsContainsProduct (product: string){
      cy.get('.b-minicart_product-inner').each(() => {
        cy.contains(product.trim());
      });
    }
  };

}

export default new ShippingPage();