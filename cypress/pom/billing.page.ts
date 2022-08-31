import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    paynowBtn:'',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button'
  },
  'nastygal.com': {
    paynowBtn: '.b-checkout_step-controls > .b-button',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error'
    
  },
  'dorothyperkins.com': {
    paynowBtn:''
  },
  'burton.co.uk': {
    paynowBtn:''
  },
  'wallis.co.uk': {
    paynowBtn:''
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;
class BillingPage implements AbstractPage {
  goto (): void {
    cy.visit('/checkout?step=billing');
  }

  click = {
    changeShippingAddress () {
      cy.get(':nth-child(1) > .b-summary_group-subtitle > .b-button').click();
    },
    changeShippingMethod () {
      cy.get('.m-bordered > .b-summary_group-subtitle > .b-button').click();
    },
    shippingCheckbox () {
      cy.get('#dwfrm_billing_addressFields_useShipping').should('be.checked').uncheck();
    }
   
  };

  actions = {
    selectDate (day: string, month: string, year: string) {
      cy.get('select[id="dwfrm_profile_customer_dayofbirth"]').should('be.visible').select(day);
      cy.get('select[id="dwfrm_profile_customer_monthofbirth"]').select(month);
      cy.get('select[id="dwfrm_profile_customer_yearOfBirth"]').select(year);
    },
    selectCreditCard (cardNo: string, cardOwner: string, month: string, year: string, code: string) {
      cy.get('#payment-button-CREDIT_CARD').click();
      cy.get('#dwfrm_billing_creditCardFields_cardNumber').type(cardNo);
      cy.get('#dwfrm_billing_creditCardFields_cardOwner').type(cardOwner);
      cy.get('#dwfrm_billing_creditCardFields_expirationMonth').select(month);
      cy.get('#dwfrm_billing_creditCardFields_expirationYear').select(year);
      cy.get('#dwfrm_billing_creditCardFields_securityCode').type(code);
      cy.get('.b-checkout_step-controls > .b-button').click();
    },
    emptyEmailField () {
      cy.get('#dwfrm_billing_contactInfoFields_email').clear();
    },
    addNewAddress () {
      if (variables.brand == 'boohoo.com') {
        cy.get('.b-form_section > .b-address_selector-actions > .b-address_selector-button').click();
      }
      cy.get('.b-form_section > .b-address_selector-actions > .b-button').click();
    },
    addBillingAddress (line1: string, city: string, county: string, postcode: string) {
      if (variables.brand == 'boohoo.com') {
        cy.get('[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button').click();
      } else {
        cy.get('[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button').click();
      }
      cy.get('#dwfrm_billing_addressFields_address1').should('be.visible').type(line1);
      cy.get('#dwfrm_billing_addressFields_city').type(city);
      cy.get('#dwfrm_billing_addressFields_states_stateCode').type(county);
      cy.get('#dwfrm_billing_addressFields_postalCode').type(postcode);

    },
    addPromoCode (promo: string) {
      cy.get('#dwfrm_coupon_couponCode').type(promo);
      cy.get('#dwfrm_coupon_couponCode').click();
    },
    addGiftCard (giftCard: string) {
      cy.get('.b-gift_certificate-add').click();
      cy.get('#dwfrm_billing_giftCertCode').should('be.visible').type(giftCard);
      cy.get('#add-giftcert').click();
    },
    selectAddressFromBook () {
      if (variables.brand == 'boohoo.com') {
        cy.get('.b-form_section > .b-address_selector-actions > .m-link').click();
        cy.get('.b-form_section > :nth-child(2) > .b-option_switch-inner > .b-option_switch-label').click();
      } else {
        cy.get('#dwfrm_billing > fieldset.b-billing_address > div.b-checkout_card.m-list > fieldset > div > div:nth-child(2) > div > label').click();
      }
    },
    selectKlarna () {
      cy.get('#payment-button-KlarnaUK').click();

      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });

      // Click on PayNow.
      const klarnaPayNow = selectors[variables.brand].klarnaPayNow;
      const paynowBtn = selectors[variables.brand].paynowBtn;
      if (variables.brand == 'boohoo.com') {
        cy.get(klarnaPayNow).click();
      } else {
        cy.get(paynowBtn).click();
      }

      // Click the Continue button.
      cy.get('button[style*="geometricprecision"]').click();

      // Get the new Klarna iframe.
      cy.frameLoaded('#klarna-apf-iframe');

      // Digsusting implicit wait.
      cy.wait(8000);

      // Complete the Klarna iframe journey.
      cy.enter('#klarna-apf-iframe').then(body => {
        body().find('#onContinue').should('be.visible').click();
        body().find('#otp_field').should('be.visible').type('111111');
        body().find('[data-cid="btn-primary"]').should('be.visible').click();

        // BHO Body().find('[data-testid="pick-plan"]').should('be.visible').click();
        // BHO Body().find('[testid="confirm-and-pay"]').should('be.visible').click();
        body().find('#payinparts_kp\\.bf0ddd49-7c29-47fe-a4df-ab9ffd52677d_3_slice_it_by_card-purchase-review-continue-button > div > div:nth-child(1)').should('be.visible').click();

        // BHO Body().find('[data-testid="PushFavoritePayment:skip-favorite-selection"]').should('be.visible').click();
        cy.wait(5000);
      });
    },

    selectPayPal () {
      cy.get('#payment-button-PayPal').click();

      cy.wait(2000);
      
      // Stub the open method inside iframe to force it not to open a window.
      
      cy.get('.zoid-component-frame').its('0.contentDocument.defaultView').then(win => {
      
        cy.stub(win, 'open');
      
      });
      
      // Click PayPal button
      
      cy.iframe('.zoid-component-frame').find('.paypal-button').should('be.visible').click({force:true});
      
      // Wait for PayPal window to load
      
      cy.wait(8000);
      
      // Get first iframe, inside its body get inner iframe and then find button
      
      cy.get('.paypal-checkout-sandbox-iframe').then((iframe) => {

        const innerIframe = iframe.contents().find('.zoid-component-frame').contents();
        
        cy.wrap(innerIframe).find('#email').clear().type('test.user@boohoo.com');
        cy.wrap(innerIframe).find('#btnNext').click();
        cy.wrap(innerIframe).find('#password').click().type('boohoo123');
        cy.wrap(innerIframe).find('#btnLogin').click();
        cy.wait(3000);
  
      });
      cy.get('.paypal-checkout-sandbox-iframe').then((iframe) => {

        const innerIframe = iframe.contents().find('.zoid-component-frame').contents();

        cy.wrap(innerIframe).find('#payment-submit-btn').should('be.visible').click();
  
      });
      cy.wait(5000);
    }
  
  };

  assertions = {
    assertShippingAddressPresent () {
      cy.get('section[class="b-checkout_card b-summary_group-item m-full-width"]').should('be.visible').and('not.be.empty');
    },
    assertShippingMethodPresent (shippingMethod: string) {
      cy.get('.b-summary_shipping-name').should('be.visible').and('include.text', shippingMethod);
    },
    assertEmailIsCorrect (email: string) {
      cy.get('input[id="dwfrm_billing_contactInfoFields_email"]').should('have.value', email);
    },
    assertSubscriptionBlockPresent () {
      cy.get('div[class="b-create_account_form-subscription"]').should('be.visible');
    },
    assertDateFormIsPresent () {
      cy.get('div[class="b-form_section m-required m-wrapper"]').should('be.visible');
    },
    assertDateIsSelected (day: string, month: string, year: string) {
      cy.get('select[id="dwfrm_profile_customer_dayofbirth"]').should('have.have.value',day);
      cy.get('select[id="dwfrm_profile_customer_monthofbirth"]').should('have.value',month);
      cy.get('select[id="dwfrm_profile_customer_yearOfBirth"]').should('have.value',year);
    },
    assertEmptyEmailFieldError (errorMsg: string) {
      cy.get('#dwfrm_billing_contactInfoFields_email-error').should('be.visible').and('contain.text', errorMsg);
    },
    assertEmptyDateFieldError (errorMsg: string) {
      const dateError = selectors[variables.brand].dateError;
      cy.get(dateError).should('be.visible').and('contain.text', errorMsg);
    },
    assertSameAsShippingIsChecked () {
      cy.get('#dwfrm_billing_addressFields_useShipping').should('be.checked');
    },
    assertBillingAddressFormIsPresent () {
      cy.get('.b-billing_address-form').should('be.visible');
    },
    assertNewBillingAddress (address: string) {
      cy.get('div[data-ref="summarizedAddressBlock"]').should('be.visible').and('include.text', address);
    },
    assertPaymentMethodIsDisplayed (method: string) {
      cy.get(method).should('be.visible');
    },
    assertPromoCodeIsApplied (promoName: string) {
      cy.get('.success coupon-item-name').should('be.visible');
      cy.get('.order-discount-wrapper').should('be.visible');
      cy.get('.order-discount-message').should('include.text', promoName);
    },
    assertGiftCardIsApplied (giftValue: string) {
      cy.get('.b-gift_certificate-info_label').should('be.visible').and('include.text','Gift card applied');
      cy.get('.b-summary_table-name').should('be.visible').and('include.text', 'Gift card');
      cy.get('.b-summary_table-value').should('be.visible').and('include.text', giftValue);
    },
    assertShippingPageIsOpened () {
      cy.url().should('include', 'shipping');
    },
    assertOrderConfirmationPAgeIsDisplayed () {
      cy.url().should('include', 'order-confirmation');
    },
    assertEmailFieldCantBeChanged () {
      cy.get('#dwfrm_billing_contactInfoFields_email').should('have.attr', 'disabled');
    }
  };
}

export default new BillingPage();

