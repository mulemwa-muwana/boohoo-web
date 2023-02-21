import { isSiteGenesisBrand } from 'cypress/helpers/common';
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
    addNewAddressButton: '.b-address_selector-button.b-button.m-info',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.b-checkout_products',
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
    stateField: '#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingState: '#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearOfBirth',
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
    addNewAddress: '#deliveryPanel > div > div:nth-child(1) > div > button',
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
    stateField: '#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    shippingState: '#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearOfBirth',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
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
    cartContainer: '.b-checkout_products',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
  },
  'burton.co.uk': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '#deliveryPanel > .b-checkout_card > [role="none"] > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-actions > .b-ngvip-button',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: '[data-tau="edit_address"]',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '.b-address_selector-button[data-tau="add_new_address"]',
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
    cartContainer: '.b-checkout_products',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
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
    cartContainer: '.b-checkout_products',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
  },
  'boohooman.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(2) > .address-radios-label .js-address-radios-edit',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    shippingCityShipping: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    shippingCounty: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_city-error',
    address1DetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_address1-error',
    postcodeDetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodname: '.js-shipping-method-list div.js-form-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
  },
  'karenmillen.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    postcodeValidation: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    shippingCityShipping: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    shippingCounty: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodname: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
  },
  'coastfashion.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(2) > .address-radios-label .js-address-radios-edit',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    shippingCityShipping: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    shippingCounty: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodname: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
  },
  'warehousefashion.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(1) > .address-radios-label .js-address-radios-edit',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    shippingCityShipping: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    shippingCounty: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodname: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    cityDetailsAreMandatory: 'dwfrm_singleshipping_shippingAddress_addressFields_city-error'
  },
  'oasis-stores.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(2) > .address-radios-label .js-address-radios-edit',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    shippingCityShipping: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    shippingCounty: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodname: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
  },
  'misspap.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '.add-new-address',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '#dwfrm_singleshipping_shippingAddress > fieldset.address-container > fieldset:nth-child(3) > div > div > button > span',
    addNewAddress: '.add-new-address',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    shippingCityShipping: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    shippingCounty: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodname: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
  },
  'boohoomena.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(2) > .address-radios-label .js-address-radios-edit',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.js-checkout-next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    PostcodeLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    postcodeFiled: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    postcodeValidation: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneCode: '#dwfrm_phonedetails_phonecode',
    shippingPhoneNumber: '#dwfrm_phonedetails_phonenumber',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Shipping: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    shippingCityShipping: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    shippingCounty: '#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodname: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    cityDetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_city-error',
    address1DetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_address1-error',
  }
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
      cy.get(addNewAddress, {timeout: 30000}).click({force: true});
    },
    addPremierByButtonName (text: string) {
      cy.contains(text).click({force: true});
    },
    cancelAddingNewAddress () {
      const cancelAddingNewAddress = selectors[variables.brand].cancelAddingNewAddress;
      cy.get(cancelAddingNewAddress);
    },
    proceedToBilling () {
      const proceedToBilling = selectors[variables.brand].proceedToBilling;
      cy.wait(3000);
      cy.get(proceedToBilling).click({force: true});
    },
    proceedToBillingVerification () { // Only for SiteGenesis brands
      if (variables.brand != 'boohoomena.com') {
        const proceedToBillingVerificationBtn = selectors[variables.brand].proceedToBillingVerificationBtn;
        cy.wait(1000);
        cy.get(proceedToBillingVerificationBtn).click({force: true});
      }
    },
    proceedToBillingVerificationAndWaitBillingPageToLoad () { // Only for SiteGenesis brands
      const proceedToBillingVerificationBtn = selectors[variables.brand].proceedToBillingVerificationBtn;
      cy.wait(1000);
      cy.intercept(/checkoutshopper\/assets\/html/).as('paymentMethodsSection');
      cy.get(proceedToBillingVerificationBtn).click({force: true});
      cy.wait('@paymentMethodsSection', { timeout: 20000 }).its('response.statusCode').should('eq', 200);
    },
    editSavedAddress () {
      const editSavedAddress = selectors[variables.brand].editSavedAddress;
      cy.get(editSavedAddress).click();
    },
    addAddressManually () {
      if (!isSiteGenesisBrand) {
        const addAddressManually = selectors[variables.brand].addAddressManually;
        cy.get(addAddressManually).should('be.visible').click({force:true});
      }
    },
    editCart () {
      const editCart = selectors[variables.brand].editCart;
      cy.get(editCart).should('be.visible').click();
    },
    editAddress () {
      if (isSiteGenesisBrand && (variables.brand != 'boohooman.com')) {
        const editAddress = selectors[variables.brand].editAddress;
        cy.get('body').then($body => { // If Edit Address is visible
          if ($body.find(editAddress).length) {  
            cy.get(editAddress).click({force:true});
          }
        });
        
      }
    },
    addNewAddressButton () {
      if (variables.brand != 'boohooman.com') {
        const addNewAddressButton = selectors[variables.brand].addNewAddressButton;
        cy.get(addNewAddressButton).click({force:true});
      }
    },
    editExistingAddressButton () {
      const editExistingAddressButton = selectors[variables.brand].editExistingAddressButton;
      cy.get(editExistingAddressButton).click();
    },
    cancelAddingNewAddressForRegisteredUser () {
      const cancelAddingNewAddressForRegisteredUser = selectors[variables.brand].cancelAddingNewAddressForRegisteredUser;
      cy.get(cancelAddingNewAddressForRegisteredUser).should('be.visible').click({force:true});
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
      if (!isSiteGenesisBrand) {
        const enterManually = selectors[variables.brand].enterManually;
        cy.get(enterManually).click({force: true});
      }
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
      cy.get(shippingFname).clear().type(fname, {force: true});
    },
    lastNameField (lname: string) {
      const shippingLname = selectors[variables.brand].shippingLname;
      cy.get(shippingLname).clear().type(lname, {force: true});
    },
    countrySelector () {
      cy.get('[id$=addressFields_country][id*="shipping"]'); 
    },
    clearPhoneNumberFieldAndAddNewOne (phone: string) {
      cy.wait(1000);
      const shippingPhoneNumber = selectors[variables.brand].shippingPhoneNumber;
      if (variables.brand == 'boohoomena.com') {
        const shippingPhoneCode = selectors[variables.brand].shippingPhoneCode;
        cy.get(shippingPhoneCode).select(phone.slice(0, 2));
        cy.get(shippingPhoneNumber).clear().type(phone.slice(2));
      } else {
        cy.get(shippingPhoneNumber).clear().type(phone);
      }
    },
    phoneNumberField (phone: string) {
      cy.wait(1000);
      const shippingPhoneNumber = selectors[variables.brand].shippingPhoneNumber;
      if (variables.brand == 'boohoomena.com') {
        const shippingPhoneCode = selectors[variables.brand].shippingPhoneCode;
        cy.get(shippingPhoneCode).select(phone.slice(0, 2));
        cy.get(shippingPhoneNumber).type(phone.slice(2));
      } else {
        cy.get(shippingPhoneNumber).type(phone);
      }
    },
    selectCountry (country: string) {
      if (variables.brand != 'boohoomena.com') { // Country cannot be changed on Shipping page for this brand
        const shippingCountry = selectors[variables.brand].shippingCountry;
        cy.get(shippingCountry).select(country).invoke('show');
      }
    },
    selectState (state: string) {
      const shippingState = selectors[variables.brand].shippingState;
      cy.get(shippingState).select(state).invoke('show');
    },
    adressLine1 (address1: string) {
      const addressLine1Shipping = selectors[variables.brand].addressLine1Shipping;
      cy.get(addressLine1Shipping).click({force: true}).type(address1);
    },
    addressLine1Clear () {
      const addressLine1Shipping = selectors[variables.brand].addressLine1Shipping;
      cy.get(addressLine1Shipping).clear({force: true});
    },
    cityFieldClear () {
      const shippingCityShipping = selectors[variables.brand].shippingCityShipping;
      cy.get(shippingCityShipping).clear({force: true});
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
      if (variables.brand == 'boohoomena.com') {
        cy.get(shippingCityShipping).select(city);
      } else {
        cy.get(shippingCityShipping).type(city);
      }
    },
    clearCityFieldAndAddNewOne (city: string) {
      const shippingCityShipping = selectors[variables.brand].shippingCityShipping;
      if (variables.brand == 'boohoomena.com') {
        cy.get(shippingCityShipping).select(city);
      } else {
        cy.get(shippingCityShipping).clear({force: true}).type(city);
      }
    },
    countyField (county: string) {
      const shippingCounty = selectors[variables.brand].shippingCounty;
      cy.get(shippingCounty).select(county);
    },
    postcodeField (postcode: string) {
      cy.wait(1000);
      const shippingPostcode = selectors[variables.brand].shippingPostcode;
      cy.get(shippingPostcode).type(postcode).blur();
    },
    stateField (state: string) {
      cy.wait(1000);
      const stateField = selectors[variables.brand].stateField;
      cy.get(stateField).select(state);
    },
    clearPostcodeFieldAndAddNewOne (postcode: string) {
      cy.wait(1000);
      const shippingPostcode = selectors[variables.brand].shippingPostcode;
      cy.get(shippingPostcode).clear({force: true}).type(postcode).blur();
    },
    selectShippingMethod (shippingMethod: string) {
      const shippingMethodname = selectors[variables.brand].shippingMethodname;
      cy.get(shippingMethodname).each(() => {
        cy.contains(shippingMethod).click({force: true});
      });
    },

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    selectDate (day: string, month: string, year: string) {
      const dobDay = selectors[variables.brand].dobDay;
      const dobMonth = selectors[variables.brand].dobMonth;
      const dobYear = selectors[variables.brand].dobYear;
      cy.get(dobDay).select(day);
      cy.get(dobMonth).select(month);
      cy.get(dobYear).select(year);
    },
    emailField (email: string) {
      const guestEmailField = selectors[variables.brand].guestEmailField;
      cy.get(guestEmailField).type(email);
    },
    confirmEmailField (email: string) {
      const confirmEmail = selectors[variables.brand].confirmEmail;
      cy.get(confirmEmail).type(email);
    },
    emptyEmailField () {
      const guestEmailField = selectors[variables.brand].guestEmailField;
      cy.get(guestEmailField).clear();
    },

  };

  assertions = {
    assertPromoCodeFieldIsDisplayed () {
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
    assertUserProceededToBillingPage () {
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
      if (variables.brand == 'boohoomena.com') {
        cy.get(shippingPhoneNumber).should('contain.value', text.slice(2));
      } else {
        cy.get(shippingPhoneNumber).should('contain.value', text);
      }
    },
    assertGuestEmailFieldDisplayed () {
      const guestEmailField = selectors[variables.brand].guestEmailField;
      cy.get(guestEmailField).should('be.visible');
    },
    assertManualAddressFieldsAreDisplayed () {
      const addressLine1Shipping = selectors[variables.brand].addressLine1Shipping;
      const addressLine2Shipping = selectors[variables.brand].addressLine2Shipping;
      const shippingCityShipping = selectors[variables.brand].shippingCityShipping;
      cy.get(addressLine1Shipping).should('be.visible');
      cy.get(addressLine2Shipping).should('be.visible');
      cy.get(shippingCityShipping).should('be.visible');
    },
    assertOrderTotalIsDisplayed () {
      const orderTotal = selectors[variables.brand].orderTotal;
      cy.get(orderTotal).should('not.be.empty');
    },
    assertAddressDetailsAreMandatory (text: string) {
      const cityDetailsAreMandatory = selectors[variables.brand].cityDetailsAreMandatory;
      const address1DetailsAreMandatory = selectors[variables.brand].address1DetailsAreMandatory;
      cy.get(cityDetailsAreMandatory).should('contain.text', text);
      cy.get(address1DetailsAreMandatory).should('contain.text', text);
    },
    assertPostcodeLookupIsVisible () {
      const PostcodeLookup = selectors[variables.brand].PostcodeLookup;
      cy.get(PostcodeLookup).should('be.visible');
    },
    assertOtherAddressesAreVisible () {
      cy.get('.m-list > :nth-child(3) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface').should('be.visible');
    },
    assertCartShippingPageContainsProduct (product: string) {
      const cartContainer = selectors[variables.brand].cartContainer;
      cy.get(cartContainer).should('contain', product.trim());
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

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    assertEmailIsCorrect (email: string) {
      cy.get('#dwfrm_singleshipping_shippingAddress_email_emailAddress').should('have.value', email);
    },
    assertDateFormIsPresent () {
      const dateOfBirthForm = selectors[variables.brand].dateOfBirthForm;
      cy.get(dateOfBirthForm).should('be.visible');
    },
    assertDateIsSelected (day: string, month: string, year: string) {
      const dobDay = selectors[variables.brand].dobDay;
      const dobMonth = selectors[variables.brand].dobMonth;
      const dobYear = selectors[variables.brand].dobYear;
      cy.get(dobDay).should('have.have.value', day);
      cy.get(dobMonth).should('have.value', month);
      cy.get(dobYear).should('have.value', year);
    },
    assertEmptyEmailFieldError (errorMsg: string) {
      const emptyEmailFieldError = selectors[variables.brand].emptyEmailFieldError;
      cy.get(emptyEmailFieldError).should('be.visible').and('contain.text', errorMsg);
    },
    assertEmptyDateFieldError (errorMsg: string) {
      const emptyDateFieldError = selectors[variables.brand].emptyDateFieldError;
      cy.get(emptyDateFieldError).should('be.visible').and('contain.text', errorMsg);
    },
  };

}

export default new ShippingPage();

