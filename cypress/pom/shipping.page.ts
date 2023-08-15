import { isSiteGenesisBrand, isMobileDeviceUsed } from 'cypress/helpers/common';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import { brand, locale, language } from 'cypress/support/e2e';
import assertionText from 'cypress/helpers/assertionText';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '[data-widget="processButtonNGVIP"]',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button.b-button.m-info',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    guestEditAddress: '.b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    couponCode: '#dwfrm_coupon_couponCode',
    promoButton: 'button[type="submit"].b-form-inline_button',
    promoErrorAlert: '#dwfrm_coupon_couponCode-error',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '.b-address_selector-button',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.b-checkout_products',
    orderSummaryOnShippingPage: '.b-summary_order-item.m-order',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Field: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Field: '[id$=addressFields_address2][id*="shipping"]',
    cityField: '[id$=addressFields_city][id*="shipping"]',
    countyField: '[id$=addressFields_states_stateCode][id*="shipping"]',
    postCodeField: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingMethodName: '.b-shipping_method',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    shippingState :'select#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearOfBirth',
    clickAndCollectTab:"[data-id='button-clickCollectPanel']",
    pudoShippingMethod:"[for='shippingMethod-pudo-myhermes']",
    pudoSearchField:'.b-pudo-search_field',
    pudoFirstShop:'.b-pudo_store',
    pudoSearchTitle:'.b-pudo_store .b-pudo_store-title',
    pudoSelectShop:'.b-pudo-expanded_inner button',
    pudoSelectedShopAddress:"[data-ref='clickAndCollectAddressContainer-pudo-myhermes']",
    changeCollectionAddressBtn:'[data-ref="inpostPopupLink"]',
    w3Winput:'#w3wInput',
    w3WAddressSuggestion:'[class="what3words-autosuggest-item match"]',
    successMark:"[class='what3words-autosuggest-state valid']"
  },
  'nastygal.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '[data-widget="processButtonNGVIP"]',
    premierProductTitle: 'NGVIP',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    guestEditAddress: '.b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '[data-tau="add_new_address"]',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    cartContainer: '[data-tau="checkout_products"]',
    orderSummaryOnShippingPage: '.b-summary_order-item.m-order',
    cartContainerMobile: '.b-checkout_products',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Field: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Field: '[id$=addressFields_address2][id*="shipping"]',
    cityField: '[id$=addressFields_city][id*="shipping"]',
    countyField: '[id$=addressFields_states_stateCode][id*="shipping"]',
    postCodeField: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodName: '.b-option_switch-label',
    shippingState :'select#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearOfBirth',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    clickAndCollectTab:"[data-id='button-clickCollectPanel']",
    pudoShippingMethod:"[for='shippingMethod-pudo-NUKmyhermes']",
    pudoSearchField:'.b-pudo-search_field',
    pudoFirstShop:'.b-pudo_store',
    pudoSearchTitle:'.b-pudo_store .b-pudo_store-title',
    pudoSelectShop:'.b-pudo-expanded_inner button',
    pudoSelectedShopAddress:"[data-ref='clickAndCollectAddressContainer-pudo-NUKmyhermes']",
    changeCollectionAddressBtn:'[data-ref="inpostPopupLink"]',
    w3Winput:'#w3wInput',
    w3WAddressSuggestion:'[class="what3words-autosuggest-item match"]',
    successMark:"[class='what3words-autosuggest-state valid']"
  },
  'dorothyperkins.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '[data-widget="processButtonNGVIP"]',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    guestEditAddress: '.b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#LoqateAutocomplete',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    shippingState :'select#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    confirmShippingAddress:'[data-id="submitShippingButton"]',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Field: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Field: '[id$=addressFields_address2][id*="shipping"]',
    cityField: '[id$=addressFields_city][id*="shipping"]',
    countyField: '[id$=addressFields_states_stateCode][id*="shipping"]',
    postCodeField: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodName: '.b-option_switch-label',
    cartContainer: '.b-checkout_products',
    orderSummaryOnShippingPage: '.b-summary_order-item.m-order',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
  },
  'burton.co.uk': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '[data-widget="processButtonNGVIP"]',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: '.b-option_switch:first-of-type [data-tau="edit_address"]',
    guestEditAddress: '.b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: '.b-address_selector-button[data-tau="add_new_address"]',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    shippingState :'select#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Field: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Field: '[id$=addressFields_address2][id*="shipping"]',
    cityField: '[id$=addressFields_city][id*="shipping"]',
    countyField: '[id$=addressFields_states_stateCode][id*="shipping"]',
    postCodeField: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodName: '.b-option_switch-label',
    cartContainer: '.b-checkout_products',
    orderSummaryOnShippingPage: '.b-summary_order-item.m-order',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    clickAndCollectTab:"[data-id='button-clickCollectPanel']",
    pudoShippingMethod:"[for='shippingMethod-pudo-myhermes']",
    pudoSearchField:'.b-pudo-search_field',
    pudoFirstShop:'.b-pudo_store',
    pudoSearchTitle:'.b-pudo_store .b-pudo_store-title',
    pudoSelectShop:'.b-pudo-expanded_inner button',
    pudoSelectedShopAddress:"[data-ref='clickAndCollectAddressContainer-pudo-myhermes']",
    changeCollectionAddressBtn:'[data-ref="inpostPopupLink"]',
    w3Winput:'#w3wInput',
    w3WAddressSuggestion:'[class="what3words-autosuggest-item match"]',
    successMark:"[class='what3words-autosuggest-state valid']"
  },
  'wallis.co.uk': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: '#deliveryTabs > div.b-tab_list > button:nth-child(2)',
    addPremierToCartFromShippingPage: '[data-widget="processButtonNGVIP"]',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.b-address_form-header > .b-button',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: '.b-address_selector-button',
    editAddress: '.b-option_switch:first-of-type [data-tau="edit_address"]',
    guestEditAddress: '.b-option_switch-label_surface > .b-button',
    editCart: '.b-summary_order-header > .b-link',
    addAddressManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.b-checkout_step-controls > .b-button',
    addNewAddress: 'button[data-tau="add_new_address"]',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#LoqateAutocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: 'b-address-name',
    fnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    lnameValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_shipping_shippingAddress_addressFields_postalCode-error',
    shippingFname: '[id$=addressFields_firstName][id*="shipping"]',
    shippingPhoneNumber: '[id$=addressFields_phone][id*="shipping"]',
    shippingLname: '[id$=addressFields_lastName][id*="shipping"]',
    shippingCountry: '[id$=addressFields_country][id*="shipping"]',
    shippingState :'select#dwfrm_shipping_shippingAddress_addressFields_states_stateCode',
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    addressLine1Field: '[id$=addressFields_address1][id*="shipping"]',
    addressLine2Field: '[id$=addressFields_address2][id*="shipping"]',
    cityField: '[id$=addressFields_city][id*="shipping"]',
    countyField: '[id$=addressFields_states_stateCode][id*="shipping"]',
    postCodeField: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    orderTotal: '.m-total > .b-summary_table-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '[id$=addressFields_postalCode][id*="shipping"], [id$=postalcodes_postal][id*="shipping"]',
    shippingMethodName: '.b-option_switch-label',
    cartContainer: "[data-tau='checkout_products']",
    orderSummaryOnShippingPage: '.b-summary_order-item.m-order',
    allAddressDetailsAreMandatory: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    cityDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_address1-error',
    address1DetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_city-error',
    postcodeDetailsAreMandatory: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    clickAndCollectTab:"[data-id='button-clickCollectPanel']",
    pudoShippingMethod:"[for='shippingMethod-pudo-myhermes']",
    pudoSearchField:'.b-pudo-search_field',
    pudoFirstShop:'.b-pudo_store',
    pudoSearchTitle:'.b-pudo_store .b-pudo_store-title',
    pudoSelectShop:'.b-pudo-expanded_inner button',
    pudoSelectedShopAddress:"[data-ref='clickAndCollectAddressContainer-pudo-myhermes']",
    changeCollectionAddressBtn:'[data-ref="inpostPopupLink"]',
    w3Winput:'#w3wInput',
    w3WAddressSuggestion:'[class="what3words-autosuggest-item match"]',
    successMark:"[class='what3words-autosuggest-state valid']"
  },
  'boohooman.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '.premier-add-to-cart',
    addPremierToCartFromShippingPageMobile: '.premier-box-btn.js-premier-box-link',
    addPremierToBagMobile: '#add-to-cart',
    premierProductTitle: 'BOOHOOMAN PREMIER - UNLIMITED NEXT DAY DELIVERY + EXCLUSIVE FREE RETURNS FOR 1 YEAR',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(2) > .address-radios-label .js-address-radios-edit',
    guestEditAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    newAddedAddressBlock: '#deliveryPanel [data-ref="summarizedAddressBlock"]',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    orderSummaryOnShippingPage: '.summary-inner',
    cartContainerMobile: '.cart-row',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    shippingState :'select#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    confirmShippingAddress:"button[class^='verification-address-button']",
    guestEmailField: '#dwfrm_billing_contactInfoFields_email',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    cityField: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    postCodeField: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
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
    shippingMethodName: '.js-shipping-method-list div.js-form-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    clickAndCollectTab:'.js-click-collect-tab',
    pudoShippingMethod:"[for='shipping-method-pudo-myhermes']",
    pudoSearchField:'.js-pudo-search-field',
    pudoFirstShop:'.js-shop',
    pudoSearchTitle:'.js-shop .pudo-title',
    pudoSelectShop:'.shop-expanded-inner .js-pudo-select-shop',
    pudoSelectedShopAddress:"[for='shipping-method-pudo-myhermes'] .js-pudo-address",
    w3Winput:'#dwfrm_singleshipping_shippingAddress_addressFields_w3w',
    w3WAddressSuggestion:':nth-child(8) > .w3w-list > :nth-child(1)',
    successMark:'.field-wrapper-w3w-valid'
  },
  'karenmillen.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '.premier-box-btn',
    addPremierToCartFromShippingPageMobile: '.premier-box-btn.js-premier-box-link',
    addPremierToBagMobile: '#add-to-cart',
    premierProductTitle: 'Karen Millen Premier',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: '.js-edit-address',
    guestEditAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    newAddedAddressBlock: '.checkout-address-form .address-summary',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    cartContainerMobile: '.cart-row',
    orderSummaryOnShippingPage: '.summary-inner',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    shippingState :'select#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    confirmShippingAddress:"button[class^='verification-address-button']",
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    cityField: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    countyFieldIE: '#dwfrm_singleshipping_shippingAddress_addressFields_states_state', 
    postCodeField: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodName: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    clickAndCollectTab:'.js-click-collect-tab',
    pudoShippingMethod:"[for='shipping-method-pudo-myhermes']",
    pudoSearchField:'.js-pudo-search-field',
    pudoFirstShop:'.js-shop',
    pudoSearchTitle:'.js-shop .pudo-title',
    pudoSelectShop:'.shop-expanded-inner .js-pudo-select-shop',
    pudoSelectedShopAddress:"[for='shipping-method-pudo-myhermes'] .js-pudo-address",
    w3Winput:'#dwfrm_singleshipping_shippingAddress_addressFields_w3w',
    w3WAddressSuggestion:':nth-child(8) > .w3w-list > :nth-child(1)',
    successMark:'.field-wrapper-w3w-valid',
    thrift: '#js-thrift-plus-product',
    addThriftToCartBtn: '#js-thrift-plus-add-to-bag',
  },
  'coastfashion.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    addPremierToCartFromShippingPageMobile: '.premier-box-btn.js-premier-box-link',
    addPremierToBagMobile: '#add-to-cart',
    premierProductTitle: 'Coast VIP',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: '.js-address-radios-edit:eq(1)',
    guestEditAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    newAddedAddressBlock: '.checkout-address-form .address-summary',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    orderSummaryOnShippingPage: '.summary-inner',
    cartContainerMobile: '.cart-row',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    shippingState :'select#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    confirmShippingAddress:"button[class^='verification-address-button']",
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    cityField: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    postCodeField: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    addressNicknameField: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodName: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
  },
  'warehousefashion.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '.add-to-cart-text',
    addPremierToCartFromShippingPageMobile: '.premier-box-btn.js-premier-box-link',
    addPremierToBagMobile: '#add-to-cart',
    premierProductTitle: 'WAREHOUSE LIMITLESS',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(1) > .address-radios-label .js-address-radios-edit',
    guestEditAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    newAddedAddressBlock: '.checkout-address-form .address-summary',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    orderSummaryOnShippingPage: '.summary-inner',
    cartContainerMobile: '.cart-row',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    shippingState :'select#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    confirmShippingAddress:"button[class^='verification-address-button']",
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    cityField: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    postCodeField: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodName: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    cityDetailsAreMandatory: 'dwfrm_singleshipping_shippingAddress_addressFields_city-error'
  },
  'oasis-stores.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '.add-to-cart-text',
    premierProductTitle: 'OASIS UNLIMITED - UNLIMITED DELIVERY',
    addPremierToCartFromShippingPageMobile: '.premier-box-btn.js-premier-box-link',
    addPremierToBagMobile: '#add-to-cart',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(2) > .address-radios-label .js-address-radios-edit',
    guestEditAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    newAddedAddressBlock: '.checkout-address-form .address-summary',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    orderSummaryOnShippingPage: '.summary-inner',
    cartContainerMobile: '.cart-row',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    shippingState :'select#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    confirmShippingAddress:"button[class^='verification-address-button']",
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    cityField: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    postCodeField: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    addressNicknameField: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodName: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
  },
  'misspap.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '#add-to-cart',
    addPremierToCartFromShippingPageMobile: '.premier-box-btn.js-premier-box-link',
    addPremierToBagMobile: '#add-to-cart',
    premierProductTitle: 'VIP DELIVERY',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: '.js-edit-address',
    guestEditAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '.add-new-address',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.form-row-button > .js-next-step-btn-wrapper > .next-step-btn',
    proceedToBillingVerificationBtn: '#dwfrm_singleshipping_shippingAddress > fieldset.address-container > fieldset:nth-child(3) > div > div > button > span',
    addNewAddress: '.add-new-address',
    newAddedAddressBlock: '.checkout-address-form .address-summary',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    orderSummaryOnShippingPage: '.summary-inner',
    cartContainerMobile: '.cart-row',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_phone-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneNumber: '#dwfrm_singleshipping_shippingAddress_addressFields_phone',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    shippingState :'select#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    confirmShippingAddress:"button[class^='verification-address-button']",
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    cityField: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#dwfrm_singleshipping_shippingAddress_addressFields_county',
    postCodeField: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-total',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodName: 'div.form-row.delivery-row',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    clickAndCollectTab:'.js-click-collect-tab',
    pudoShippingMethod:"[for='shipping-method-pudo-myhermes']",
    pudoSearchField:'.js-pudo-search-field',
    pudoFirstShop:'.js-shop',
    pudoSearchTitle:'.js-shop .pudo-title',
    pudoSelectShop:'.shop-expanded-inner .js-pudo-select-shop',
    pudoSelectedShopAddress:"[for='shipping-method-pudo-myhermes'] .js-pudo-address",
    w3Winput:'#dwfrm_singleshipping_shippingAddress_addressFields_w3w',
    w3WAddressSuggestion:':nth-child(8) > .w3w-list > :nth-child(1)',
    successMark:'.field-wrapper-w3w-valid'
  },
  'boohoomena.com': {
    promoCodeBtn: 'button[data-tau="coupon_submit"]',
    PUDOlocations: 'a.delivery-tabs-link:nth-child(2)',
    addPremierToCartFromShippingPage: '.premier-box-btn.js-premier-box-link',
    viewAllAddressesLink: '.b-address_selector-actions > .m-link',
    cancelAddingNewAddressForRegisteredUser: '.new-address-header-link',
    editExistingAddressButton: '.b-option_switch-label_surface > .b-button',
    addNewAddressButton: 'span.button.add-new-address',
    editAddress: ':nth-child(1) > .address-radios-label > .address-radios-inner > .address-radios-edit > .js-address-radios-edit',
    guestEditAddress: '.js-edit-address',
    editCart: '.section-header-note',
    addAddressManually: '#deliveryPanel > div > div:nth-child(1) > div > div:nth-child(2) > button',
    editSavedAddress: ':nth-child(1) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface > .b-button',
    proceedToBilling: '.js-checkout-next-step-btn',
    proceedToBillingVerificationBtn: '.verification-address-button',
    addNewAddress: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    newAddedAddressBlock: '.checkout-address-form .address-summary',
    cancelAddingNewAddress: '.b-button m-link b-address_form-back',
    addressLookup: '#address-autocomplete',
    enterManually: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    cartContainer: '.summary-inner',
    orderSummaryOnShippingPage: '.summary-inner',
    promoCodeField: '#dwfrm_coupon_couponCode',
    addressName: '#dwfrm_singleshipping_shippingAddress_addressFields_addressid',
    fnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName-error',
    lnameValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName-error',
    phoneValidationMsg: '#dwfrm_phonedetails_phonenumber-error',
    postCodeValidationMsg: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal-error',
    shippingFname: '#dwfrm_singleshipping_shippingAddress_addressFields_firstName',
    shippingPhoneCode: '#dwfrm_phonedetails_phonecode',
    shippingPhoneNumber: '#dwfrm_phonedetails_phonenumber',
    shippingLname: '#dwfrm_singleshipping_shippingAddress_addressFields_lastName',
    shippingCountry: '#dwfrm_singleshipping_shippingAddress_addressFields_country',
    guestEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    confirmEmail: '#dwfrm_singleshipping_shippingAddress_email_emailConfirm',
    addressLine1Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address1',
    addressLine2Field: '#dwfrm_singleshipping_shippingAddress_addressFields_address2',
    cityField: '#dwfrm_singleshipping_shippingAddress_addressFields_city',
    countyField: '#dwfrm_singleshipping_shippingAddress_addressFields_states_state',
    postCodeField: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    dobDay: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    orderTotal: '.order-value',
    allAddressDetailsValidation: '[data-ref="addressFormFields"] > [data-ref="autocompleteFields"] > .b-address_lookup > .m-required > .b-form_section-message',
    coupon: '#dwfrm_coupon_couponCode',
    shippingPostcode: '#dwfrm_singleshipping_shippingAddress_addressFields_postalcodes_postal',
    shippingMethodName: '.shipping-method-name',
    dateOfBirthForm: '.form-birthday-rows-inner',
    emptyEmailFieldError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    emptyDateFieldError: '#dwfrm_profile_customer_yearofbirth-error',
    cityDetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_city-error',
    address1DetailsAreMandatory: '#dwfrm_singleshipping_shippingAddress_addressFields_address1-error',
    w3Winput:'#dwfrm_singleshipping_shippingAddress_addressFields_w3w',
    w3WAddressSuggestion:':nth-child(8) > .w3w-list > :nth-child(1)',
    successMark:'.field-wrapper-w3w-valid'
  }
};

class ShippingPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    submitPromoCode () {
      const promoCodeBtn = selectors[brand].promoCodeBtn;
      cy.get(promoCodeBtn).click();
    },
    addNewAddress () {
      if (!isSiteGenesisBrand) {
        const addNewAddress = selectors[brand].addNewAddress;
        cy.wait(3000);
        cy.get('body').then($body => {
          if ($body.find(addNewAddress).length) {
            cy.get(addNewAddress).click({ force: true });
          }
        });
      } else {
        this.guestEditAddress();
      }
    },
    addPremierByButtonName (text: string) {
      cy.contains(text).click({ force: true });
    },
    cancelAddingNewAddress () {
      const cancelAddingNewAddress = selectors[brand].cancelAddingNewAddress;
      cy.get(cancelAddingNewAddress);
    },
    proceedToBilling () {
      const proceedToBilling = selectors[brand].proceedToBilling;
      cy.wait(3000);
      cy.get(proceedToBilling).click({ force: true });
    },
    proceedToBillingVerification () { // Only for SiteGenesis brands
      if (brand != 'boohoomena.com') {
        const proceedToBillingVerificationBtn = selectors[brand].proceedToBillingVerificationBtn;
        cy.wait(1000);
        cy.get('body').then($body=>{
          if ($body.find(proceedToBillingVerificationBtn).length>0) {
            cy.get(proceedToBillingVerificationBtn).click({ force: true });
          }
        });
      }
    },
    proceedToBillingVerificationAndWaitBillingPageToLoad () { // Only for SiteGenesis brands
      const proceedToBillingVerificationBtn = selectors[brand].proceedToBillingVerificationBtn;
      cy.wait(1000);
      cy.intercept(/checkoutshopper\/assets\/html/).as('paymentMethodsSection');
      cy.get(proceedToBillingVerificationBtn).click({ force: true });
      cy.wait('@paymentMethodsSection', { timeout: 20000 }).its('response.statusCode').should('eq', 200);
    },
    editSavedAddress () {
      const editSavedAddress = selectors[brand].editSavedAddress;
      cy.get(editSavedAddress).click();
    },
    addAddressManually () {
      if (!isSiteGenesisBrand) {
        const addAddressManually = selectors[brand].addAddressManually;
        cy.wait(5000);
        cy.get('body').then($body => {
          if ($body.find(addAddressManually).length) {
            cy.get(addAddressManually).click({ force: true });
          }
        });
      }
    },
    editCart () {
      const editCart = selectors[brand].editCart;
      cy.get(editCart).click({ force: true });
    },
    editAddress () {
      if (brand != 'boohooman.com') {
        const editAddress = selectors[brand].editAddress;
        cy.get(editAddress).click({ force: true });
      }
    },
    guestEditAddress () {
      const guestEditAddress = selectors[brand].guestEditAddress;
      cy.get('body').then($body => {
        if ($body.find(guestEditAddress).length) {
          cy.get(guestEditAddress).click({ force: true });
        }
      });
    },
    addNewAddressButton () {
      if (brand != 'boohooman.com') {
        const addNewAddressButton = selectors[brand].addNewAddressButton;
        cy.get(addNewAddressButton).click({ force: true });
      }
    },
    editExistingAddressButton () {
      const editExistingAddressButton = selectors[brand].editExistingAddressButton;
      cy.get(editExistingAddressButton).click();
    },
    cancelAddingNewAddressForRegisteredUser () {
      const cancelAddingNewAddressForRegisteredUser = selectors[brand].cancelAddingNewAddressForRegisteredUser;
      cy.get(cancelAddingNewAddressForRegisteredUser).should('be.visible').click({ force: true });
    },
    viewAllAddressesLink () {
      const viewAllAddressesLink = selectors[brand].viewAllAddressesLink;
      cy.get(viewAllAddressesLink).should('be.visible').click();
    },
    addPremierToCartFromShippingPage () {
      const addPremierToCartFromShippingPage = selectors[brand].addPremierToCartFromShippingPage;
      const addPremierToCartFromShippingPageMobile = selectors[brand].addPremierToCartFromShippingPageMobile;
      if (isMobileDeviceUsed && isSiteGenesisBrand) {
        cy.get(addPremierToCartFromShippingPageMobile).click({ force: true });
      } else {
        cy.get(addPremierToCartFromShippingPage).eq(0).click({ force: true });
      }

    },
    OpenPUDOlocations () {
      const PUDOlocations = selectors[brand].PUDOlocations;
      cy.get(PUDOlocations).click();
    },
    enterManuallyAddressDetails () {
      const enterManually = selectors[brand].enterManually;
      if (!isSiteGenesisBrand) {
        if (brand=='boohoo.com') {
          cy.get('[data-event-click="handleManualEnterClick"]').eq(0).click();
        }
        cy.get(enterManually).click({ force: true });
      }
    },
    clickAndCollectShipping () {
      const clickAndCollectTab= selectors[brand].clickAndCollectTab;
      const pudoShippingMethod=selectors[brand].pudoShippingMethod;
      const changeCollectionAddressBtn=selectors[brand].changeCollectionAddressBtn;

      cy.wait(2000);
      cy.get(clickAndCollectTab).click({force:true});
      cy.wait(3000);
      cy.get('body').then($btn=>{ // If radio button already checked then click on change address otherwise select address
        if ($btn.find(changeCollectionAddressBtn).length>0) {
          cy.get(changeCollectionAddressBtn).click();
        } else {
          cy.get(pudoShippingMethod).click({force:true});          
        }
      }); 
    },         
    addThriftToCart () {
      const addThriftToCartBtn = selectors[brand].addThriftToCartBtn;
      cy.get(addThriftToCartBtn).click({ force: true });
    }
  };

  actions = {
    clickPreferedShippingMethod (variables: EnvironmentVariables) {
      cy.get('span').contains(variables.shippingMethod).click();
    },
    addPromoCode (promo: string) {
      const couponCode = selectors[brand].couponCode;
      const promoButton = selectors[brand].promoButton;
      cy.get(couponCode).type(promo);
      cy.get(promoButton).click();
    },
    addNoPromoCode () {
      const promoButton = selectors[brand].promoButton;
      cy.get(promoButton).click();
    },
    addressLookupSelectFirstAddress (addressLine: string, city: string) {
      const addressLookup = selectors[brand].addressLookup;
      cy.get(addressLookup).type(addressLine);
      cy.wait(2000);
      cy.get(addressLookup).type(' ' + city);
      cy.wait(1000);
      cy.get(addressLookup).type('{enter}');
    },
    firstNameFieldClear () {
      const shippingFname = selectors[brand].shippingFname;
      cy.get(shippingFname).clear({ force: true });
    },
    firstNameField (fname: string) {
      const shippingFname = selectors[brand].shippingFname;
      cy.get(shippingFname).clear().type(fname, { force: true });
    },
    lastNameFieldClear () {
      const shippingLname = selectors[brand].shippingLname;
      cy.get(shippingLname).clear({ force: true });
    },
    lastNameField (lname: string) {
      const shippingLname = selectors[brand].shippingLname;
      cy.get(shippingLname).clear().type(lname, { force: true });
    },
    countrySelector () {
      cy.get('[id$=addressFields_country][id*="shipping"]');
    },
    phoneNumberFieldClear () {
      const shippingPhoneNumber = selectors[brand].shippingPhoneNumber;
      cy.get(shippingPhoneNumber).clear({ force: true }).blur();
    },
    phoneNumberField (phone: string) {
      cy.wait(1000);
      const shippingPhoneNumber = selectors[brand].shippingPhoneNumber;
      if (brand == 'boohoomena.com') {
        const shippingPhoneCode = selectors[brand].shippingPhoneCode;
        if (locale == 'KW') {
          cy.get(shippingPhoneCode).select(phone.slice(1, 2)); // Kuwait has a shorter phone code

        } else {
          cy.get(shippingPhoneCode).select(phone.slice(0, 2));
        }
   
        cy.get(shippingPhoneNumber).clear().type(phone.slice(2));
        cy.log(shippingPhoneNumber);
      } else {
        cy.get(shippingPhoneNumber).clear().type(phone);
      }
    },
    selectCountry (country: string) {
      if (brand != 'boohoomena.com' || locale != 'IL') { // Country cannot be changed on Shipping page for this brand
        const shippingCountry = selectors[brand].shippingCountry;
        cy.get(shippingCountry).select(country).invoke('show');
      }
    },
    selectState (state: string) {
      const shippingState = selectors[brand].shippingState;
      cy.get(shippingState).select(state).invoke('show');
    },
    adressLine1 (address1: string) {
      const addressLine1Field = selectors[brand].addressLine1Field;
      cy.get(addressLine1Field).clear({ force: true }).type(address1);
    },
    addressLine1Clear () {
      const addressLine1Field = selectors[brand].addressLine1Field;
      cy.get(addressLine1Field).clear({ force: true });
    },
    adressLine2 (address2: string) {
      const addressLine2Field = selectors[brand].addressLine2Field;
      cy.get(addressLine2Field).clear({ force: true }).type(address2);
    },
    addressLine2Clear () {
      const addressLine2Field = selectors[brand].addressLine2Field;
      cy.get(addressLine2Field).clear({ force: true });
    },
    cityFieldClear () {
      const cityField = selectors[brand].cityField;
      cy.get(cityField).clear({ force: true });
    },
    cityField (city: string) {
      const cityField = selectors[brand].cityField;
      if (brand == 'boohoomena.com') {
        cy.get(cityField).select(city, { force: true });
      } else {
        cy.get(cityField).clear({ force: true }).type(city);
      }
    },
    countyField (county: string) {
      const countyField = selectors[brand].countyField;
      const countyFieldIE = selectors[brand].countyFieldIE;
      if (brand=='karenmillen.com' && locale =='IE') {
        cy.get(countyFieldIE).select(county).invoke('show');
      } else if (brand == 'misspap.com' || (brand == 'boohooman.com' || brand =='karenmillen.com' && locale == 'UK')) {
        cy.get(countyField).clear({force:true}).type(county,{force:true});
      } else {
        cy.get(countyField).select(county);
      }
    },
    postcodeField (postcode: string) {
      cy.wait(1000);
      const shippingPostcode = selectors[brand].shippingPostcode;
      cy.get(shippingPostcode).clear({ force: true }).type(postcode);
      cy.wait(1000);
      cy.get(shippingPostcode).click();
    },
    addAddressNickname (addressNickname: string) {
      const addressNicknameField = selectors[brand].addressNicknameField;
      cy.get(addressNicknameField).type(addressNickname);
    },
    selectShippingMethod (shippingMethod: string) {
      const shippingMethodName = selectors[brand].shippingMethodName;    
      cy.wait(3000);
      cy.get(shippingMethodName).contains(shippingMethod).click({ force: true });
    },
    selectOtherShippingMethod (shippingMethod: string) {
      const shippingMethodName = selectors[brand].shippingMethodName;
      cy.get(shippingMethodName).contains(shippingMethod).click({force: true});
    },

    confirmShippingAddress () {
      const confirmShippingAddress = selectors[brand].confirmShippingAddress;
      cy.wait(5000);
      cy.get('body').then($body => { 
        if ($body.find(confirmShippingAddress).length > 0) { 
          cy.get(confirmShippingAddress).click({force:true});  
        }
      });
    },

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    selectDate (day: string, month: string, year: string) {
      const dobDay = selectors[brand].dobDay;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDay).select(day);
      cy.get(dobMonth).select(month);
      cy.get(dobYear).select(year);
    },
    notSelectedDate () {
      const dobDay = selectors[brand].dobDay;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDay).select(0);
      cy.get(dobMonth).select(0);
      cy.get(dobYear).select(0);
    },
    emailField (email: string) {
      const guestEmailField = selectors[brand].guestEmailField;
      cy.get(guestEmailField).clear().type(email);
    },
    confirmEmailField (email: string) {
      const confirmEmail = selectors[brand].confirmEmail;
      cy.get(confirmEmail).clear({force:true}).type(email);
    },
    emptyEmailField () {
      const guestEmailField = selectors[brand].guestEmailField;
      cy.get(guestEmailField).clear();
    },
    selectCollectionShop (postCode: any): any {
      const pudoSearchField=selectors[brand].pudoSearchField;
      const pudoFirstShop=selectors[brand].pudoFirstShop;
      const pudoSearchTitle=selectors[brand].pudoSearchTitle;
      const pudoSelectShop=selectors[brand].pudoSelectShop;

      cy.wait(2000);
      cy.get(pudoSearchField).clear().type(`${postCode}{enter}`);
      cy.wait(6000); 
      cy.get(pudoFirstShop, {timeout:20000}).should('be.visible');
      cy.get(pudoFirstShop).eq(0).click({force:true});
      return cy.get(pudoSearchTitle).eq(0).invoke('text').then(text=>{
        cy.get(pudoSelectShop).click({force:true}).then(()=>{
          return text;
        });
      });
    },
    selectW3WAddress (w3Words: string) {
      const w3Winput=selectors[brand].w3Winput;
      const w3WAddressSuggestion=selectors[brand].w3WAddressSuggestion;

      cy.get(w3Winput).type(w3Words);
      cy.wait(10000);
      cy.get(w3WAddressSuggestion).should('be.visible').and('contain.text', 'Manchester');
      cy.get(w3WAddressSuggestion).click();
    }
  };        

  assertions = {
    assertShopisSelected (pudoAddressText: any) {
      const pudoSelectedShopAddress=selectors[brand].pudoSelectedShopAddress;
      cy.get(pudoSelectedShopAddress).should('contain', pudoAddressText);
    },
    assertW3WisSelected () {
      const successMark=selectors[brand].successMark;
      cy.get(successMark).should('be.visible');
    },
    assertPromoCodeFieldIsDisplayed () {
      const coupon = selectors[brand].coupon;
      cy.get(coupon).should('be.visible');
    },
    assertInvalidPromoError () {
      const promoErrorAlert = selectors[brand].promoErrorAlert;
      const promoInvalidErrorMessage = assertionText.promoInvalidErrorMessage[language];
      cy.get(promoErrorAlert).should('have.text', promoInvalidErrorMessage, {matchCase:false});
    },
    assertEmptyPromoError () {
      const promoErrorAlert = selectors[brand].promoErrorAlert;
      const promoEmptydErrorMessage = assertionText.promoEmptydErrorMessage[language];
      cy.get(promoErrorAlert).should('have.text', promoEmptydErrorMessage, {matchCase:false});
    },
    assertSavedShippingAddressIsDispayed () {
      const addressName = selectors[brand].addressName;
      cy.get(addressName).eq(1).should('be.visible').should('not.be.empty');
    },
    assertNewAddedShippingAddress (addressLine: string, city: string, postCode: string) {
      const brandsPopulatingSeparateAddressFields: Array<GroupBrands> = ['nastygal.com', 'burton.co.uk', 'dorothyperkins.com', 'boohooman.com', 'wallis.co.uk'];
      if (brandsPopulatingSeparateAddressFields.includes(brand)) {
        const addressLine1Field = selectors[brand].addressLine1Field;
        const cityField = selectors[brand].cityField;
        const postCodeField = selectors[brand].postCodeField;
        cy.get(addressLine1Field).should('have.value', addressLine);
        cy.get(cityField).should('have.value', city);
        cy.get(postCodeField).should('have.value', postCode);
      } else {
        const newAddedAddressBlock = selectors[brand].newAddedAddressBlock;
        cy.get(newAddedAddressBlock).should('contain.text', addressLine)
          .and('contain.text', city)
          .and('contain.text', postCode);
      }
    },
    assertFirstNameIsMandatory (requiredFieldError: string) {
      const fnameValidationMsg = selectors[brand].fnameValidationMsg;
      cy.get(fnameValidationMsg).should('contain.text', requiredFieldError);
    },
    assertLastNameIsMandatory (requiredFieldError: string) {
      const lnameValidationMsg = selectors[brand].lnameValidationMsg;
      cy.get(lnameValidationMsg).should('contain.text', requiredFieldError);
    },
    assertPhoneNumberIsMandatory (requiredFieldError: string) {
      const phoneValidationMsg = selectors[brand].phoneValidationMsg;
      cy.get(phoneValidationMsg).should('contain.text', requiredFieldError);
    },
    assertCityIsMandatory (city: string) {
      const cityField = selectors[brand].cityField;
      cy.get(cityField).should('contain.text', city);
    },
    assertPostCodeIsMandatory (postcode: string) {
      const postCodeValidationMsg = selectors[brand].postCodeValidationMsg;
      cy.get(postCodeValidationMsg).should('contain.text', postcode);
    },
    assertUserProceededToBillingPage () {
      cy.url().should('include', 'billing');
    },
    assertFirstNameFieldIsPopulated (text: string) {
      const shippingFname = selectors[brand].shippingFname;
      cy.get(shippingFname).should('contain.value', text);
    },
    assertLastNameFieldIsPopulated (text: string) {
      const shippingLname = selectors[brand].shippingLname;
      cy.get(shippingLname).should('contain.value', text);
    },
    assertCountryIsSelected (text: string) {
      const shippingCountry = selectors[brand].shippingCountry;
      cy.get(shippingCountry).should('contain.value', text);
    },
    assertPhoneNumberFieldIsPopulated (text: string) {
      const shippingPhoneNumber = selectors[brand].shippingPhoneNumber;
      if (brand == 'boohoomena.com') {
        cy.get(shippingPhoneNumber).should('contain.value', text.slice(2));
      } else {
        cy.get(shippingPhoneNumber).should('contain.value', text);
      }
    },
    assertGuestEmailFieldDisplayed () {
      const guestEmailField = selectors[brand].guestEmailField;
      cy.get(guestEmailField).should('be.visible');
    },
    assertManualAddressFieldsAreDisplayed () {
      const addressLine1Field = selectors[brand].addressLine1Field;
      const addressLine2Field = selectors[brand].addressLine2Field;
      const cityField = selectors[brand].cityField;
      cy.get(addressLine1Field).should('be.visible');
      cy.get(addressLine2Field).should('be.visible');
      cy.get(cityField).should('be.visible');
    },
    assertOrderTotalIsDisplayed () {
      const orderTotal = selectors[brand].orderTotal;
      cy.get(orderTotal).should('not.be.empty');
    },
    assertAddressDetailsAreMandatory (text: string) {
      const cityDetailsAreMandatory = selectors[brand].cityDetailsAreMandatory;
      const address1DetailsAreMandatory = selectors[brand].address1DetailsAreMandatory;
      cy.get(cityDetailsAreMandatory).should('contain.text', text);
      cy.get(address1DetailsAreMandatory).should('contain.text', text);
    },
    assertAddressLookupFieldIsVisible () {
      const addressLookup = selectors[brand].addressLookup;
      cy.get(addressLookup).should('be.visible');
    },
    assertOtherAddressesAreVisible () {
      cy.get('.m-list > :nth-child(3) > .b-option_switch-inner > .b-option_switch-label > .b-option_switch-label_surface').should('be.visible');
    },
    assertCartShippingPageContainsProduct (product: string) {
      const cartContainer = selectors[brand].cartContainer;
      cy.get(cartContainer, { timeout: 20000 }).should('contain', product.trim());
    },
    assertShippingPageCartContainsVipProduct () {
      const cartContainer = selectors[brand].cartContainer;
      const cartContainerMobile = selectors[brand].cartContainerMobile;
      const premierProductTitle = selectors[brand].premierProductTitle;
      if (isMobileDeviceUsed) {
        cy.get(cartContainerMobile, { timeout: 20000 }).should('contain', premierProductTitle.trim());
      } else {
        cy.get(cartContainer, { timeout: 20000 }).should('contain', premierProductTitle.trim());
      }
    },
    assertShippingMethodIsSelected (shippingMethod: string) {
      const orderSummaryOnShippingPage = selectors[brand].orderSummaryOnShippingPage;
      const currentShippingMethod = shippingMethod;
      cy.get(orderSummaryOnShippingPage).should('contain', currentShippingMethod);
    },

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    assertEmailIsCorrect (email: string) {
      cy.get('#dwfrm_singleshipping_shippingAddress_email_emailAddress').should('have.value', email);
    },
    assertDateFormIsPresent () {
      const dateOfBirthForm = selectors[brand].dateOfBirthForm;
      cy.get(dateOfBirthForm).should('be.visible');
    },
    assertDateIsSelected (day: string, month: string, year: string) {
      const dobDay = selectors[brand].dobDay;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDay).should('have.have.value', day);
      cy.get(dobMonth).should('have.value', month);
      cy.get(dobYear).should('have.value', year);
    },
    assertEmptyEmailFieldError (errorMsg: string) {
      const emptyEmailFieldError = selectors[brand].emptyEmailFieldError;
      cy.get(emptyEmailFieldError).should('be.visible').and('contain.text', errorMsg);
    },
    assertEmptyDateFieldError (errorMsg: string) {
      const emptyDateFieldError = selectors[brand].emptyDateFieldError;
      cy.get(emptyDateFieldError).should('be.visible').and('contain.text', errorMsg);
    },
    assertThriftSectionIsVisible () {
      const thrift = selectors[brand].thrift;
      cy.scrollTo('bottom');
      cy.get(thrift).should('be.visible');
    },
    assertThriftBagIsAddedToTheCart () {
      cy.get('.checkout-mini-cart').should('contain', 'Thrift Bags');
    }
  };
}

export default new ShippingPage();

