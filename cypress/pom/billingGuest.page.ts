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
      cy.get('select[id="dwfrm_profile_customer_dayofbirth"]').select(day);
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
    addBillingAddress (address: string){
      cy.get('#LoqateAutocompleteBilling').type(address);
      cy.get('#LoqateAutocomplete').clear();
      cy.get('#LoqateAutocomplete').type(address);
      cy.get('.pcaitem').eq(1).invoke('show');

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
      cy.get('.b-billing_address-form').should('be.visible').and('be.empty');
    },
    assertNewBillingAddress (address: string){
      cy.get('div[data-ref="summarizedAddressBlock"]').should('be.visible').and('contain', address);
    }
  };
}

export default new BillingPage();

