import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.b-minicart_product-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Shipping: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Shipping: '[id$=addressFields_address2][id*="shipping"]',
    shippingCityShipping: '[id$=addressFields_city][id*="shipping"]',
    shippingCounty: '[id$=addressFields_states_stateCode][id*="shipping"]',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingMethodname: '.b-option_switch-label',
  },
  'nastygal.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '.b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    cartContainer: '[data-tau="checkout_products"]',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Shipping: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Shipping: '[id$=addressFields_address2][id*="shipping"]',
    shippingCityShipping: '[id$=addressFields_city][id*="shipping"]',
    shippingCounty: '[id$=addressFields_states_stateCode][id*="shipping"]',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodname: '.b-option_switch-label',
  },
  'dorothyperkins.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    postcodeFiled: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    postcodeValidation: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Shipping: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Shipping: '[id$=addressFields_address2][id*="shipping"]',
    shippingCityShipping: '[id$=addressFields_city][id*="shipping"]',
    shippingCounty: '[id$=addressFields_states_stateCode][id*="shipping"]',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodname: '.b-option_switch-label',
    cartContainer: '.b-summary_table-name',
  },
  'burton.co.uk': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    postcodeFiled: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    postcodeValidation: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Shipping: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Shipping: '[id$=addressFields_address2][id*="shipping"]',
    shippingCityShipping: '[id$=addressFields_city][id*="shipping"]',
    shippingCounty: '[id$=addressFields_states_stateCode][id*="shipping"]',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodname: '.b-option_switch-label',
    cartContainer: '.b-summary_table-name',
  },
  'wallis.co.uk': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    postcodeFiled: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    postcodeValidation: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Shipping: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Shipping: '[id$=addressFields_address2][id*="shipping"]',
    shippingCityShipping: '[id$=addressFields_city][id*="shipping"]',
    shippingCounty: '[id$=addressFields_states_stateCode][id*="shipping"]',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodname: '.b-option_switch-label',
    cartContainer: '.b-summary_table-name',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.b-minicart_product-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Shipping: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Shipping: '[id$=addressFields_address2][id*="shipping"]',
    shippingCityShipping: '[id$=addressFields_city][id*="shipping"]',
    shippingCounty: '[id$=addressFields_states_stateCode][id*="shipping"]',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingMethodname: '.b-option_switch-label',
  },
  'warehousefashion.com': undefined,
  'oasis-stores.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: '.b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '#address-autocomplete',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '#dwfrm_singleshipping_shippingAddress > fieldset.address-container > fieldset:nth-child(3) > div > div > button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm', 
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    postcodeFiled: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
  },
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class ShippingPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    submitPromoCode () {
      const promoCodeBtn = selectors[variables.brand].promoCodeBtn;
      cy.get(promoCodeBtn).click();
    },
    addNewAddress () {
      const addNewAddress = selectors[variables.brand].addNewAddress;
      cy.get(addNewAddress).click({force: true});
    },
    cancelAddingNewAddress () {
      const cancelAddingNewAddress = selectors[variables.brand].cancelAddingNewAddress;
      cy.get(cancelAddingNewAddress);
    },
    proceedToBilling () {
      const proceedToBilling = selectors[variables.brand].proceedToBilling;
      cy.wait(1000);
      cy.get(proceedToBilling).click({force: true});
      
      // Proceed to billing as Site Genesis confirms your delivery address.
      if (variables.brand === 'oasis-stores.com') {
        cy.contains('there may be a problem with the address you have entered.').should('be.visible');
        cy.get('.verification-address-button').should('be.visible').click();
      }

      // Wait for payment methods to load on a page - that indicates the billing page is fully loaded
      cy.intercept(/checkoutshopper/).as('paymentMethodsSection');
      cy.wait('@paymentMethodsSection', { timeout: 20000 }).its('response.statusCode').should('eq', 200);
    },
    editSavedAddress () {
      const editSavedAddress = selectors[variables.brand].editSavedAddress;
      cy.get(editSavedAddress).click();
    },
    addAddressManually () {
      const addAddressManually = selectors[variables.brand].addAddressManually;
      cy.get(addAddressManually).should('be.visible').click({force:true});
    },
    confirmEmail () {
      const confirmEmail = selectors[variables.brand].confirmEmail;
      if (variables.brand == 'oasis-stores.com') {
        cy.get(confirmEmail).type('euboohoo+guest1@gmail.com');
      }
    },
    editCart () {
      const editCart = selectors[variables.brand].editCart;
      cy.get(editCart).should('be.visible').click();
    },
    editAddress () {
      const editAddress = selectors[variables.brand].editAddress;
      cy.get(editAddress).click({force: true});
    },
    addNewAddressButton () {
      const addNewAddressButton = selectors[variables.brand].addNewAddressButton;
      cy.get(addNewAddressButton).click();
    },
    editExistingAddressButton () {
      const editExistingAddressButton = selectors[variables.brand].editExistingAddressButton;
      cy.get(editExistingAddressButton).click();
    },
    cancelAddingNewAddressForRegisteredUser () {
      const cancelAddingNewAddressForRegisteredUser = selectors[variables.brand].cancelAddingNewAddressForRegisteredUser;
      cy.get(cancelAddingNewAddressForRegisteredUser).should('be.visible').click();
    },
    viewAllAddressesLink () {
      const viewAllAddressesLink = selectors[variables.brand].viewAllAddressesLink;
      cy.get(viewAllAddressesLink).should('be.visible').click();
    },
    addPremierToCartFromShippingPage () {
      const addPremierToCartFromShippingPage = selectors[variables.brand].addPremierToCartFromShippingPage;
      cy.get(addPremierToCartFromShippingPage).should('be.visible').click();
    },
    OpenPUDOlocations () {
      const PUDOlocations = selectors[variables.brand].PUDOlocations;
      cy.get(PUDOlocations).click();
    },
    enterManuallyAddressDetails () {
      const enterManually = selectors[variables.brand].enterManually;
      cy.get(enterManually).click({force: true});
    }
  
  };

  actions = {
    clickPreferedShippingMethod (variables: EnvironmentVariables) {
      cy.get('span').contains(variables.shippingMethod).click();
    },
    promoCodeField (promoCode: string) {
      const coupon = selectors[variables.brand].coupon;
      cy.get(coupon).type(promoCode);
    },
    addressLookupField (address: string) {
      const PostcodeLookup = selectors[variables.brand].PostcodeLookup;
      cy.get(PostcodeLookup).click({force: true}).type(address+'{enter}').should('be.visible');
      cy.get(PostcodeLookup).type('{enter}');
    },
    selectFirstAddressFromAddressLookup (address: string) {
      const PostcodeLookup = selectors[variables.brand].PostcodeLookup;
      cy.get(PostcodeLookup).click({force: true}).type(address+'{enter}').should('be.visible');
      cy.get(PostcodeLookup).type('{enter}');
      cy.get('div:nth-child(1) > span').eq(1).click({force: true});
      
    },
    firstNameField (fname: string) {
      const shippingFname = selectors[variables.brand].shippingFname;
      cy.get(shippingFname).clear().type(fname);
    },
    lastNameField (lname: string) {
      const shippingLname = selectors[variables.brand].shippingLname;
      cy.get(shippingLname).clear().type(lname);
    },
    countrySelector () {
      cy.get('[id$=addressFields_country][id*="shipping"]'); 
    },
    clearPhoneNumberFieldAndAddNewOne (phone: string) {
      cy.wait(1000);
      const shippingPhoneNumber = selectors[variables.brand].shippingPhoneNumber;
      cy.get(shippingPhoneNumber).clear().type(phone);
    },
    phoneNumberField (phone: string) {
      cy.wait(1000);
      const shippingPhoneNumber = selectors[variables.brand].shippingPhoneNumber;
      cy.get(shippingPhoneNumber).type(phone);
    },
    selectCountry (country: string) {
      const shippingCountry = selectors[variables.brand].shippingCountry;
      cy.get(shippingCountry).select(country).invoke('show');
    },
    adressLine1 (address1: string) {
      const addressLine1Shipping = selectors[variables.brand].addressLine1Shipping;
      cy.get(addressLine1Shipping).type(address1);
    },
    clearAdressLine1AndAddNewOne (address1: string) {
      const addressLine1Shipping = selectors[variables.brand].addressLine1Shipping;
      cy.get(addressLine1Shipping).clear({force: true}).type(address1);
    },
    clearAdressLine2AndAddNewOne (address2: string) {
      const addressLine2Shipping = selectors[variables.brand].addressLine2Shipping;
      cy.get(addressLine2Shipping).clear({force: true}).type(address2);
    },
    adressLine2 (address2: string) {
      const addressLine2Shipping = selectors[variables.brand].addressLine2Shipping;
      cy.get(addressLine2Shipping).type(address2);
    },
    cityField (city: string) {
      const shippingCityShipping = selectors[variables.brand].shippingCityShipping;
      cy.get(shippingCityShipping).type(city);
    },
    clearCityFieldAndAddNewOne (city: string) {
      const shippingCityShipping = selectors[variables.brand].shippingCityShipping;
      cy.get(shippingCityShipping).clear({force: true}).type(city);
    },
    countyField (county: string) {
      const shippingCounty = selectors[variables.brand].shippingCounty;
      cy.get(shippingCounty).select(county);
    },
    postcodeField (postcode: string) {
      cy.wait(1000);
      const shippingPostcode = selectors[variables.brand].shippingPostcode;
      cy.get(shippingPostcode).type(postcode);
    },
    clearPostcodeFieldAndAddNewOne (postcode: string) {
      cy.wait(1000);
      const shippingPostcode = selectors[variables.brand].shippingPostcode;
      cy.get(shippingPostcode).clear({force: true}).type(postcode);
    },
    selectShippingMethod (shippingMethod: string) {
      const shippingMethodname = selectors[variables.brand].shippingMethodname;
      cy.get(shippingMethodname).each(() => {
        cy.contains(shippingMethod).click({force: true});
      });
    },

  };

  assertions = {
    assertPromoCodeFieldIsDispayed () {
      const coupon = selectors[variables.brand].coupon;
      cy.get(coupon).should('be.visible');
    },
    assertSavedShippingAddressIsDispayed () {
      const addressName = selectors[variables.brand].addressName;
      cy.get(addressName).eq(1).should('be.visible').should('not.be.empty');
    }, 
    assertFirstNameIsMandatory (fname: string) {
      const fnameValidationMsg = selectors[variables.brand].fnameValidationMsg;
      cy.get(fnameValidationMsg).should('contain.text', fname); 
    },
    assertCityIsMandatory (city: string) {
      const shippingCityShipping = selectors[variables.brand].shippingCityShipping;
      cy.get(shippingCityShipping).should('contain.text', city); 
    },
    assertPostCodeIsMandatory (postcode: string) {
      const postcodeValidation = selectors[variables.brand].postcodeValidation;
      cy.get(postcodeValidation).should('contain.text', postcode); 
    },
    assertUserProceededToBillinPage () {
      cy.url().should('include', 'billing');
    },
    assertFirstNameFieldIsPopulated (text: string) {
      const shippingFname = selectors[variables.brand].shippingFname;
      cy.get(shippingFname).should('contain.value', text);
    },
    assertLastNameFieldIsPopulated (text: string) {
      const shippingLname = selectors[variables.brand].shippingLname;
      cy.get(shippingLname).should('contain.value', text);
    },
    assertCountryIsSelected (text: string) {
      const shippingCountry = selectors[variables.brand].shippingCountry;
      cy.get(shippingCountry).should('contain.value', text);
    },
    assertPhoneNumberFieldIsPopulated (text: string) {
      const shippingPhoneNumber = selectors[variables.brand].shippingPhoneNumber;
      cy.get(shippingPhoneNumber).should('contain.value', text);
    },
    assertGuestEmailFiledDispayes () {
      const guestEmailField = selectors[variables.brand].guestEmailField;
      cy.get(guestEmailField).should('be.visible');
    },
    assertManualAddressFieldsAreDispayed () {
      const addressLine1Shipping = selectors[variables.brand].addressLine1Shipping;
      const addressLine2Shipping = selectors[variables.brand].addressLine2Shipping;
      const shippingCityShipping = selectors[variables.brand].shippingCityShipping;
      cy.get(addressLine1Shipping).should('be.visible');
      cy.get(addressLine2Shipping).should('be.visible');
      cy.get(shippingCityShipping).should('be.visible');
    },
    assertOrderTotalIsDsipayed () {
      const orderTotal = selectors[variables.brand].orderTotal;
      cy.get(orderTotal).should('not.be.empty');
    },
    assertAddressDetailsAreMandatory (text: string) {
      cy.get('[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message').should('contain.text', text);
    },
    assertPostcodeLookupIsVisible () {
      const PostcodeLookup = selectors[variables.brand].PostcodeLookup;
      cy.get(PostcodeLookup).should('be.visible');
    },
    assertOtherAddressesAreVisible () {
      cy.get('.m-list > :nth-child(3) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface').should('be.visible');
    },
    assertCartShippingPageContainsContainsProduct (product: string) {
      const cartContainer = selectors[variables.brand].cartContainer;
      cy.get(cartContainer).each(() => {
        cy.contains(product.trim());
      });
    },
    assertAddressLookupIsVisible () {
      const PostcodeLookup = selectors[variables.brand].PostcodeLookup;
      cy.get(PostcodeLookup).should('be.visible');
    },
    assertShippingMethodIsSelected (shippingMethod: string) {
      const cartContainer = selectors[variables.brand].cartContainer;
      cy.get(cartContainer).each(() => {
        cy.contains(shippingMethod.trim());
      });
    },
    assertNewAddressIsAdded (addressline1: string) {
      cy.get('.b-address > .b-address-summary').should('contain.text', addressline1);
    }
  };

}

export default new ShippingPage();

