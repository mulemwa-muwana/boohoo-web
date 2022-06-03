import AbstractPage from './abstract/abstract.page';

class BillingPage implements AbstractPage {
  goto (): void {
    cy.visit('/checkout?step=billing');
  }

  click = {
    changeShippingAddress (){
      cy.get(':nth-child(1) > .b-summary_group-subtitle > .b-button').click();
    },
    changeShippingMethod (){
      cy.get('.m-bordered > .b-summary_group-subtitle > .b-button').click();
    },
    shippingCheckbox (){
      cy.get('#dwfrm_billing_addressFields_useShipping').uncheck();
    }
   
  };

  actions = {
    selectDate (day: string, month: string, year: string){
      cy.get('select[id="dwfrm_profile_customer_dayofbirth"]').should('be.visible').select(day);
      cy.get('select[id="dwfrm_profile_customer_monthofbirth"]').select(month);
      cy.get('select[id="dwfrm_profile_customer_yearOfBirth"]').select(year);
    },
    selectCreditCard (cardNo: string, cardOwner: string, month: string, year: string, code: string){
      cy.get('span[class="b-payment_accordion-icon"]').eq(1).click();
      cy.get('#dwfrm_billing_creditCardFields_cardNumber').type(cardNo);
      cy.get('#dwfrm_billing_creditCardFields_cardOwner').type(cardOwner);
      cy.get('#dwfrm_billing_creditCardFields_expirationMonth').select(month);
      cy.get('#dwfrm_billing_creditCardFields_expirationYear').select(year);
      cy.get('#dwfrm_billing_creditCardFields_securityCode').type(code);
      cy.get('#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button').click();
    },
    emptyEmailField (){
      cy.get('#dwfrm_billing_contactInfoFields_email').clear();
    },
    addBillingAddress (line1: string, city: string, county: string, postcode: string){
      cy.get('[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button').click();
      cy.get('#dwfrm_billing_addressFields_address1').should('be.visible').type(line1);
      cy.get('#dwfrm_billing_addressFields_city').type(city);
      cy.get('#dwfrm_billing_addressFields_states_stateCode').type(county);
      cy.get('#dwfrm_billing_addressFields_postalCode').type(postcode);

    },
    addPromoCode (promo: string){
      cy.get('#dwfrm_coupon_couponCode').type(promo);
      cy.get('#dwfrm_coupon_couponCode').click();
    },
    addGiftCard (giftCard: string){
      cy.get('.b-gift_certificate-add').click();
      cy.get('#dwfrm_billing_giftCertCode').should('be.visible').type(giftCard);
      cy.get('#add-giftcert').click();
    },
    selectAddressFromBook (){
      cy.get('.b-form_section > .b-address_selector-actions > .m-link').click();
      cy.get('.b-form_section > :nth-child(2) > .b-option_switch-inner > .b-option_switch-label').click();
    }
  
  };

  assertions = {
    assertShippingAddressPresent (){
      cy.get('section[class="b-checkout_card b-summary_group-item m-full-width"]').should('be.visible').and('not.be.empty');
    },
    assertShippingMethodPresent (shippingMethod: string){
      cy.get('.b-summary_shipping-name').should('be.visible').and('contain.text', shippingMethod);
    },
    assertEmailIsCorrect (email: string){
      cy.get('input[id="dwfrm_billing_contactInfoFields_email"]').should('have.value', email);
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
    },
    assertEmptyEmailFieldError (errorMsg: string){
      cy.get('#dwfrm_billing_contactInfoFields_email-error').should('be.visible').and('contain.text', errorMsg);
    },
    assertEmptyDateFieldError (errorMsg: string){
      cy.get('#dwfrm_profile_customer_yearOfBirth-error').should('be.visible').and('contain', errorMsg);
    },
    assertSameAsShippingIsChecked (){
      cy.get('#dwfrm_billing_addressFields_useShipping').should('be.checked');
    },
    assertBillingAddressFormIsPresent (){
      cy.get('.b-billing_address-form').should('be.visible');
    },
    assertNewBillingAddress (address: string){
      cy.get('div[data-ref="summarizedAddressBlock"]').should('be.visible').and('include.text', address);
    },
    assertPaymentMethodIsDisplayed (method: string){
      cy.get(method).should('be.visible');
    },
    assertPromoCodeIsApplied (promoName: string){
      cy.get('.success coupon-item-name').should('be.visible');
      cy.get('.order-discount-wrapper').should('be.visible');
      cy.get('.order-discount-message').should('include.text', promoName);
    },
    assertGiftCardIsApplied (giftValue: string){
      cy.get('.b-gift_certificate-info_label').should('be.visible').and('include.text','Gift card applied');
      cy.get('.b-summary_table-name').should('be.visible').and('include.text', 'Gift card');
      cy.get('.b-summary_table-value').should('be.visible').and('include.text', giftValue);
    },
    assertShippingPageIsOpened (){
      cy.url().should('include', 'shipping');
    },
    assertOrderConfirmationPAgeIsDisplayed (){
      cy.url().should('include', 'order-confirmation');
    },
    assertEmailFieldCantBeChanged (){
      cy.get('#dwfrm_billing_contactInfoFields_email').should('have.attr', 'disabled');
    }
  };
}

export default new BillingPage();

