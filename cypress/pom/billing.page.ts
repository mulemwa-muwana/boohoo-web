import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    paynowBtnCC:'#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    customerDOBday: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    customerDOBmonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    customerDOByear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    paymentTypeCC: '#payment-button-scheme',
    paymentTypeKlarna: '',
    creditCardFieldsExpirationMonth: '#dwfrm_billing_creditCardFields_expirationMonth',
    creditCardFieldsExpirationYear: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsSecurityCode: '#dwfrm_billing_creditCardFields_securityCode',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    creditCardFieldsCardNumber: '#dwfrm_billing_creditCardFields_cardNumber',
    creditCardFieldsCardOwner : '#dwfrm_billing_creditCardFields_cardOwner',
    creditcreditCardFieldsExpirationYearCardFields_expirationMonth: '#dwfrm_billing_creditCardFields_expirationMonth',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
  },
  'nastygal.com': {
    paynowBtnCC: '#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    customerDOBday: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    customerDOBmonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    customerDOByear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    paymentTypeCC: '#payment-button-scheme',
    paymentTypeKlarna: '',
    creditCardFieldsExpirationMonth: '#dwfrm_billing_creditCardFields_expirationMonth',
    creditCardFieldsExpirationYear: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsSecurityCode: '#dwfrm_billing_creditCardFields_securityCode',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    creditCardFieldsCardNumber: '#dwfrm_billing_creditCardFields_cardNumber',
    creditCardFieldsCardOwner : '#dwfrm_billing_creditCardFields_cardOwner',
    creditcreditCardFieldsExpirationYearCardFields_expirationMonth: '#dwfrm_billing_creditCardFields_expirationMonth',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
  },
  'dorothyperkins.com': {
    paynowBtnCC:'#payment-details-scheme > div > div.b-payment_accordion-submit.b-checkout_step-controls > div > button',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    customerDOBday: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    customerDOBmonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    customerDOByear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    paymentTypeCC: '#payment-button-scheme > .b-payment_accordion-icon',
    paymentTypeKlarna: '',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardFieldsCardOwner: '.adyen-checkout__card__holderName > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input',
    creditCardFieldsExpirationMonth: '#encryptedExpiryDate',
    creditCardFieldsExpirationYear: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
  },
  'burton.co.uk': {
    paynowBtnCC:'#payment-details-scheme > div > div.b-payment_accordion-submit.b-checkout_step-controls > div > button',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    customerDOBday: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    customerDOBmonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    customerDOByear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    paymentTypeCC: '#payment-button-scheme > .b-payment_accordion-icon',
    paymentTypeKlarna: '',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardFieldsCardOwner: '#payment-details-scheme > div > fieldset > div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__field.adyen-checkout__card__holderName > label > span.adyen-checkout__input-wrapper > input',
    creditCardFieldsExpirationMonth: '#encryptedExpiryDate',
    creditCardFieldsExpirationYear: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
  },
  'wallis.co.uk': {
    paynowBtnCC:'#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    customerDOBday: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    customerDOBmonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    customerDOByear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    paymentTypeCC: '#payment-button-scheme',
    paymentTypeKlarna: '',
    creditCardFieldsCardNumber: '#dwfrm_billing_creditCardFields_cardNumber',
    creditCardFieldsCardOwner: '#dwfrm_billing_creditCardFields_cardOwner',
    creditCardFieldsExpirationMonth: '#dwfrm_billing_creditCardFields_expirationMonth',
    creditCardFieldsExpirationYear: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsSecurityCode: '#dwfrm_billing_creditCardFields_securityCode',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
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
      const changeShippingAddress = selectors[variables.brand].changeShippingAddress;
      cy.get(changeShippingAddress).click();
    },
    changeShippingMethod () {
      const changeShippingMethod = selectors[variables.brand].changeShippingMethod;
      cy.get(changeShippingMethod).click();
    },
    shippingCheckbox () {
      const shippingCheckbox = selectors[variables.brand].shippingCheckbox;
      cy.get(shippingCheckbox).should('be.checked').uncheck();
    },
    chooseCC () {
      const paynowBtnCC = selectors[variables.brand].paynowBtnCC;
      cy.get(paynowBtnCC).click({force: true});
    }
   
  };

  actions = {
    selectDate (day: string, month: string, year: string) {
      const customerDOBday = selectors[variables.brand].customerDOBday;
      const customerDOBmonth = selectors[variables.brand].customerDOBmonth;
      const customerDOByear = selectors[variables.brand].customerDOByear;
      cy.get(customerDOBday).should('be.visible').select(day);
      cy.get(customerDOBmonth).select(month);
      cy.get(customerDOByear).select(year);
    },
    selectCreditCard (cardNo: string, cardOwner: string, month: string, year: string, code: string) {
      const paymentTypeCC = selectors[variables.brand].paymentTypeCC;
      const creditCardFieldsCardNumber = selectors[variables.brand].creditCardFieldsCardNumber;
      const creditCardFieldsCardOwner = selectors[variables.brand].creditCardFieldsCardOwner;
      const creditCardFieldsExpirationMonth = selectors[variables.brand].creditCardFieldsExpirationMonth;
      const creditCardFieldsSecurityCode = selectors[variables.brand].creditCardFieldsSecurityCode;
      const creditCardFieldsExpirationYear = selectors[variables.brand].creditCardFieldsExpirationYear;
      const paynowBtnCC = selectors[variables.brand].paynowBtnCC;
      cy.get('button[data-event-click="showGiftCertificateForm"]').should('be.visible');
      cy.wait(3000);
      cy.get(paymentTypeCC).click();
      cy.wait(2000);
      if (variables.brand == 'burton.co.uk') {
        cy.iframe('#payment-details-scheme > div > fieldset > div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__card__form > div.adyen-checkout__field.adyen-checkout__field--cardNumber > label > span.adyen-checkout__input-wrapper > span > iframe').find(creditCardFieldsCardNumber).should('be.visible').type('4111111111111111');
        cy.iframe('#payment-details-scheme > div > fieldset > div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__card__form > div.adyen-checkout__card__exp-cvc.adyen-checkout__field-wrapper > div.adyen-checkout__field.adyen-checkout__field--50.adyen-checkout__field--expiryDate > label > span.adyen-checkout__input-wrapper > span > iframe').find(creditCardFieldsExpirationMonth).should('be.visible').type('0330');
        cy.iframe('#payment-details-scheme > div > fieldset > div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__card__form > div.adyen-checkout__card__exp-cvc.adyen-checkout__field-wrapper > div.adyen-checkout__field.adyen-checkout__field--50.adyen-checkout__field__cvc.adyen-checkout__field--securityCode > label > span.adyen-checkout__input-wrapper > span > iframe').find(creditCardFieldsSecurityCode).should('be.visible').type(code);
        cy.get(creditCardFieldsCardOwner).type(cardOwner);
        cy.get(paynowBtnCC).click();
      }
      if (variables.brand == 'dorothyperkins.com') {
        cy.iframe('iframe.js-iframe:nth-child(2)').find(creditCardFieldsCardNumber).should('be.visible').type('4111111111111111');
        cy.iframe('#payment-details-scheme > div > fieldset > div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__card__form > div.adyen-checkout__card__exp-cvc.adyen-checkout__field-wrapper > div.adyen-checkout__field.adyen-checkout__field--50.adyen-checkout__field--expiryDate > label > span.adyen-checkout__input-wrapper > span > iframe').find(creditCardFieldsExpirationMonth).should('be.visible').type('0330');
        cy.iframe('#payment-details-scheme > div > fieldset > div > div > div > div.adyen-checkout__loading-input__form._1jpVsksYS5faJOp2y0Tpl4 > div.adyen-checkout__card__form > div.adyen-checkout__card__exp-cvc.adyen-checkout__field-wrapper > div.adyen-checkout__field.adyen-checkout__field--50.adyen-checkout__field__cvc.adyen-checkout__field--securityCode > label > span.adyen-checkout__input-wrapper > span > iframe').find(creditCardFieldsSecurityCode).should('be.visible').type(code);
        cy.get(creditCardFieldsCardOwner).should('be.visible').type(cardOwner);
        cy.get(paynowBtnCC).click();
      } else {
        cy.get(creditCardFieldsCardNumber).type(cardNo);
        cy.get(creditCardFieldsCardOwner).type(cardOwner);
        cy.get(creditCardFieldsExpirationMonth).select(month);
        cy.get(creditCardFieldsExpirationYear).select(year);
        cy.get(creditCardFieldsSecurityCode).type(code);
        cy.get(paynowBtnCC).click();
      }
    
    },
    emptyEmailField () {
      const emptyEmailField = selectors[variables.brand].emptyEmailField;
      cy.get(emptyEmailField).clear();
    },
    addNewAddress () {
      const addNewAddressBtn = selectors[variables.brand].addNewAddressBtn;
      const addNewAddressField = selectors[variables.brand].addNewAddressField;
      if (variables.brand == 'boohoo.com') {
        cy.get(addNewAddressBtn).click();
      }
      cy.get(addNewAddressField).click();
    },
    addBillingAddress (line1: string, city: string, county: string, postcode: string) {
      const billingAddressFieldsAddress1 = selectors[variables.brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[variables.brand].billingAddressFieldCity;
      const billingAddressFieldsStateCode = selectors[variables.brand].billingAddressFieldsStateCode;
      const billingPostCode = selectors[variables.brand].billingPostCode;
      if (variables.brand == 'boohoo.com') {
        cy.get('[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button').click();
      } else {
        cy.get('[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button').click();
      }
      cy.get(billingAddressFieldsAddress1).should('be.visible').type(line1);
      cy.get(billingAddressFieldCity).type(city);
      cy.get(billingAddressFieldsStateCode).type(county);
      cy.get(billingPostCode).type(postcode);

    },
    addPromoCode (promo: string) {
      const couponCode = selectors[variables.brand].couponCode;
      cy.get(couponCode).type(promo);
      cy.get(couponCode).click();
    },
    addGiftCard (giftCard: string) {
      const addGiftCertificate = selectors[variables.brand].addGiftCertificate;
      const giftCertCode = selectors[variables.brand].giftCertCode;
      const addGiftCert = selectors[variables.brand].addGiftCert;
      cy.get(addGiftCertificate).click();
      cy.get(giftCertCode).should('be.visible').type(giftCard);
      cy.get(addGiftCert).click();
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
    },
    selectLaybuy () {
      cy.get('#payment-button-LAYBUY').should('be.visible').click({ force: true });
      cy.wait(5000);
      cy.get('#payment-details-LAYBUY > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button').click();
      cy.wait(5000);
      cy.get('.sc-himrzO').click();
      cy.get('.mFrta > .Input__InputWrapper-pv27wu-0 > .Box-sc-1dqwcja-0 > .Input__StyledInput-pv27wu-3').type('euboohoo+nguklaybuy@gmail.com');
      cy.get(':nth-child(2) > .Input__InputWrapper-pv27wu-0 > .Input__InputOutlineLabel-pv27wu-1 > .Input__StyledInput-pv27wu-3').type('Boohoo123!');
      cy.get('.iWhXXJ > .Button-k6w95u-2').click();
      cy.get(':nth-child(4) > .Button-k6w95u-2').click();
      cy.get(':nth-child(4) > .Button-k6w95u-2').click();
    },
  
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
      const emptyEmailFiledError = selectors[variables.brand].emptyEmailFiledError;
      cy.get(emptyEmailFiledError).should('be.visible').and('contain.text', errorMsg);
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
      if (variables.brand == 'wallis.co.uk' || variables.brand == 'burton.co.uk') {
        cy.url().should('include', 'orderconfirmation');
      } else {
        cy.url().should('include', 'order-confirmation');
      }     
    },
    assertEmailFieldCantBeChanged () {
      cy.get('#dwfrm_billing_contactInfoFields_email').should('have.attr', 'disabled');
    }
  };
}

export default new BillingPage();

