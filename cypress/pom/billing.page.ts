import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaButton:'#payment-button-KlarnaUK',
    klarnaPayNow:'#payment-details-KlarnaUK button[type="submit"]',
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
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input',
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
    klarnaButton:'#payment-button-KlarnaUK',
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
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
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
    klarnaButton:'#payment-button-KlarnaUK',
    klarnaPayNow:'#payment-details-KlarnaUK button[type="submit"]',
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
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
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
  'oasis-stores.com': {
    paynowBtnCC:'#billingSubmitButton',
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaButton:'.payment-methods-wrapper #is-KlarnaUK',
    klarnaPayNow:'#billingSubmitButton',
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
    customerDOByear: 'select[id="dwfrm_profile_customer_yearofbirth"]',
    paymentTypeCC: ':nth-child(3) > .payment-method-option',
    paymentTypeKlarna: '',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardFieldsCardOwner: '.adyen-checkout__card__holderName > .adyen-checkout__label > .adyen-checkout__input-wrapper > .adyen-checkout__input',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    
  },
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
    selectCreditCard (cardNo: string, cardOwner: string, date: string, code: string) {
      const paymentTypeCC = selectors[variables.brand].paymentTypeCC;
      const creditCardFieldsCardNumber = selectors[variables.brand].creditCardFieldsCardNumber;
      const creditCardFieldsCardOwner = selectors[variables.brand].creditCardFieldsCardOwner;
      const creditCardFieldsExpirationDate = selectors[variables.brand].creditCardFieldsExpirationDate;
      const creditCardFieldsSecurityCode = selectors[variables.brand].creditCardFieldsSecurityCode;
      const paynowBtnCC = selectors[variables.brand].paynowBtnCC;
      if (variables.brand !== 'oasis-stores.com') {
        cy.get('button[data-event-click="showGiftCertificateForm"]').should('be.visible');
      }
      cy.wait(3000);
      cy.get(paymentTypeCC).click();
      cy.wait(2000);

      cy.get('body').then($body => {
        if ($body.find('[data-ref="newAdyenCardBlock"]').attr('hidden') == 'hidden') {  
            cy.get('.b-payment_options_group-actions > button').click()
        }
      });
      cy.iframe('.adyen-checkout__field--cardNumber .js-iframe').find(creditCardFieldsCardNumber).should('be.visible').type(cardNo);
      cy.iframe('.adyen-checkout__field--expiryDate .js-iframe').find(creditCardFieldsExpirationDate).should('be.visible').type(date);
      cy.iframe('.adyen-checkout__field__cvc .js-iframe').find(creditCardFieldsSecurityCode).should('be.visible').type(code);
      cy.get(creditCardFieldsCardOwner).should('be.visible').type(cardOwner);
      cy.get(paynowBtnCC).click();

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
      const klarnaButton = selectors[variables.brand].klarnaButton;
      cy.get(klarnaButton).click({force:true});
      cy.wait(2000);
      
      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });
      
      // Click on PayNow.
      const klarnaPayNow = selectors[variables.brand].klarnaPayNow;
      cy.get(klarnaPayNow).click();
      
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
        cy.wait(3000);
        body().find('#pay_now-pay_now__container #pay_now-pay_now__label').should('be.visible').click();
        body().find('[data-testid="select-payment-category"]').should('be.visible').click();
        body().find('[testid="confirm-and-pay"]').should('be.visible').click();
        body().find('#dialog  [data-testid="PushFavoritePayment:skip-favorite-selection"]').should('be.visible').click();
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
    },
    selectLaybuy () {
      if (variables.brand == 'oasis-stores.com') {
        cy.get('[for="is-LAYBUY"]', { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.get('#billingSubmitButton').should('be.visible').click({ force: true });
      } else {
        cy.get('#payment-button-LAYBUY', { timeout: 10000 }).should('be.visible').click({ force: true });
        cy.get('#payment-details-LAYBUY > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button', { timeout: 10000 }).click();
      }
      cy.get('.sc-himrzO', { timeout: 10000 }).click();
      cy.get('input[type="email"]').type('euboohoo+uklaybuy@gmail.com');
      cy.get('input[type="password"]').type('Boohoo123$');
      cy.get('button[type="submit"]').click();
      cy.get('button[data-test-id="payment-complete-order-button"]').click();
    },
    selectClearpay () {
      if (variables.brand == 'oasis-stores.com') {
        cy.get('[for="is-CLEARPAY"]', { timeout: 15000 }).should('be.visible').click({ force: true });
        cy.get('#billingSubmitButton').should('be.visible').click({ force: true });
      } else {
        cy.get('#payment-button-CLEARPAY').should('be.visible').click({ force: true });
        cy.get('#payment-details-CLEARPAY button[type="submit"]', { timeout: 10000 }).should('be.visible').click();
      }
      cy.get('body', { timeout: 10000 }).then($body => {
        if ($body.find('[data-testid="summary-button"]').length > 0) {  
            cy.get('[data-testid="summary-button"]').click()
        }
      });
      cy.get('[data-testid="login-identity-input"]', { timeout: 12000 }).should('be.visible').clear();
      cy.wait(1000);
      cy.get('[data-testid="login-identity-input"]').should('be.visible').type('ukboohoo@outlook.com');
      cy.get('[data-testid="login-identity-button"]').should('be.visible').click();
      cy.get('[data-testid="login-password-input"]').should('be.visible').type('Boohoo!23');
      cy.get('[data-testid="login-password-button"]').should('be.visible').click();
      cy.get('[data-testid="summary-button"]', { timeout: 6000 }).should('be.visible').click();
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
      if (variables.brand == 'wallis.co.uk' || variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com') {
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

