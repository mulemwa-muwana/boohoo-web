import { isSiteGenesisBrand } from 'cypress/helpers/common';
import { locale, brand, language } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import assertionText from 'cypress/helpers/assertionText';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaNLContinueBtn: '#onContinue',
    klarnaNLFrame: '#klarna-klarna-payments-fullscreen',
    klarnaPayNow:'#payment-details-KlarnaUK button[type="submit"]',
    klarnaPayNowAU: '#payment-details-KlarnaAU > div > div.b-payment_accordion-submit > div > div > button',
    klarnaPayNowUS: '[data-id="payButton-KlarnaUS"]>div>button',
    klarnaPayNowIE: '#payment-details-KlarnaIE > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    klarnaPayNowNL: '[data-id="payButton-Klarna"]',
    payButtonLocator:'[data-testid="confirm-and-pay"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    promoButton: 'button[type="submit"].b-form-inline_button',
    promoErrorAlert: '#dwfrm_coupon_couponCode-error',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    giftcartApplied:'.b-gift_certificate-code',
    giftcartOrderSummary: 'div.b-summary_order-details',
    orderSummaryQty: '.b-minicart_product-qty_value',
    removeCertificate: '.b-gift_certificate-remove.b-link.m-highlight',
    addGiftCert: '#add-giftcert',
    giftCardErrorMessage: 'div.b-gift_certificate-error',
    giftCardEmptyError:'#dwfrm_billing_giftCertCode-error',
    shippingAddressSection: '.b-billing_address-summary_address.b-summary_address  .b-address-summary',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: '[data-tau="summary_shipping"]',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodCreditCardUS: '#payment-button-CREDIT_CARD',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodClearPay: '#payment-button-CLEARPAY',
    paymentMethodAmazonPay: '#payment-button-AMAZON_PAYMENTS',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    addNewBillingAddress: '.b-form_section > .b-address_selector-actions > .m-info',
    enterManually: '[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > [data-ref="orManualButton"] > .b-button',
    billingForm: '.b-billing_address-form',
    billingAddressFirstName: '#dwfrm_billing_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.b-address_selector-actions > button:nth-child(2)',
    billingAddressFromBook: '.b-form_section > :nth-child(2) > .b-option_switch-inner > .b-option_switch-label',
    dobDate: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    dobMonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    dobYear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    dobForm: 'div[class="b-form_section m-required m-wrapper"]',
    billingAddressCountry: '',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    paymentMethodAfterPay: '[for="is-AFTERPAY"]',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardFieldsCardNumberUS:'#dwfrm_billing_creditCardFields_cardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDateUS: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardFieldsExpirationMonthUS: '#dwfrm_billing_creditCardFields_expirationMonth',
    creditCardSecurityCodeIframe: '[class*="adyen-checkout__card__exp-cvc"] > [class*="adyen-checkout__field"]:not([class*="storedCard"]) [class*="adyen-checkout__card__cvc__input"] .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsSecurityCodeUS: '#dwfrm_billing_creditCardFields_securityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    creditCardFieldsCardOwnerUS: '#dwfrm_billing_creditCardFields_cardOwner',
    paynowBtnCC:':nth-child(2).b-payment_accordion-submit > .b-checkout_step-controls .b-button',
    paynowBtnCCUS:'#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  },
  'nastygal.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    payButtonLocator: '[id$="by_card-purchase-review-continue-button"]' ,
    klarnaPayNowAU: '#payment-details-KlarnaAU > div > div.b-payment_accordion-submit > div > div > button',
    klarnaPayNowIE: '#payment-details-KlarnaIE > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    klarnaPayNow: '#payment-details-KlarnaUK button',
    klarnaPayNowUS: '[data-id="payButton-KlarnaUS"]>div>button',
    payButtonLocatorIE: '[data-testid="confirm-and-pay"]',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodCreditCardUS: '#payment-button-CREDIT_CARD',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodClearPay: '#payment-button-CLEARPAY',
    paymentMethodAmazonPay: '#payment-button-AMAZON_PAYMENTS',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingAddress: '#checkout-main > div > div > main > section:nth-child(3) > section.b-checkout_step-item.m-summary > div > div > section:nth-child(1) > h3 > button',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    addNewBillingAddress: '.b-form_section > .b-address_selector-actions > .m-info',
    enterManually: '[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftcartApplied:'.giftcard-redemption-title',
    giftcartOrderSummary: '.summary-inner > .checkout-order-totals',
    removeCertificate: '.giftcard-redemption-remove',
    giftCardErrorMessage:'',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    billingForm: '.b-billing_address-form',
    billingAddressFirstName: '#dwfrm_billing_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.b-form_section > .b-address_selector-actions > .m-link',
    billingAddressFromBook: 'button.m-info[data-tau="add_new_address"]',
    billingAddressFromBookUS: '.b-address_selector-actions > .m-info',
    dobDate: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    dobMonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    dobYear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    dobForm: 'div[class="b-form_section m-required m-wrapper"]',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    paymentMethodAfterPay: '[for="is-AFTERPAY"]',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardFieldsCardNumberUS:'#dwfrm_billing_creditCardFields_cardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardFieldsExpirationDateUS: '#dwfrm_billing_creditCardFields_expirationYear',
    creditCardFieldsExpirationMonthUS: '#dwfrm_billing_creditCardFields_expirationMonth',
    creditCardSecurityCodeIframe: '.b-form-set > .b-payment_form .adyen-checkout__field__cvc .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsSecurityCodeUS: '#dwfrm_billing_creditCardFields_securityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    creditCardFieldsCardOwnerUS: '#dwfrm_billing_creditCardFields_cardOwner',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
    paynowBtnCCUS:'#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  },
  'dorothyperkins.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftcartApplied:'.b-gift_certificate-code',
    giftcartOrderSummary: 'div.b-summary_order-details',
    orderSummaryQty: '.b-minicart_product-qty_value',
    removeCertificate: '.b-gift_certificate-remove.b-link.m-highlight',
    giftCardErrorMessage:'',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodClearPay: '#payment-button-CLEARPAY',
    paymentMethodAmazonPay: '#payment-button-AMAZON_PAYMENTS',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    addNewBillingAddress: '.b-form_section > .b-address_selector-actions > .m-info',
    enterManually: '[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    billingForm: '.b-billing_address-form',
    billingAddressFirstName: '#dwfrm_billing_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.b-address_selector-actions > button:nth-child(2)',
    billingAddressFromBook: '.b-form_section > :nth-child(2) > .b-option_switch-inner > .b-option_switch-label',
    dobDate: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    dobMonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    dobYear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    dobForm: 'div[class="b-form_section m-required m-wrapper"]',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardSecurityCodeIframe: '[class*="adyen-checkout__card__exp-cvc"] > [class*="adyen-checkout__field"]:not([class*="storedCard"]) [class*="adyen-checkout__card__cvc__input"] .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
  },
  'burton.co.uk': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK button[type="submit"]',
    klarnaPayNowIE: '#payment-details-KlarnaIE > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    payButtonLocator:'[data-testid="confirm-and-pay"]',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftcartApplied:'.b-gift_certificate-code',
    giftcartOrderSummary: 'div.b-summary_order-details',
    giftCardErrorMessage:'',
    orderSummaryQty: '.b-minicart_product-qty_value',
    removeCertificate: '.b-gift_certificate-remove.b-link.m-highlight',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodClearPay: '#payment-button-CLEARPAY',
    paymentMethodAmazonPay: '#payment-button-AMAZON_PAYMENTS',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    addNewBillingAddress: '.b-form_section > .b-address_selector-actions > .m-info',
    enterManually: '[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    billingForm: '.b-billing_address-form',
    billingAddressFirstName: '#dwfrm_billing_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.b-address_selector-actions > button:nth-child(2)',
    billingAddressFromBook: '.b-form_section > :nth-child(2) > .b-option_switch-inner > .b-option_switch-label',
    dobDate: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    dobMonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    dobYear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    dobForm: 'div[class="b-form_section m-required m-wrapper"]',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardSecurityCodeIframe: '[class*="adyen-checkout__card__exp-cvc"] > [class*="adyen-checkout__field"]:not([class*="storedCard"]) [class*="adyen-checkout__card__cvc__input"] .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
  },
  'wallis.co.uk': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button',
    payButtonLocator:'[data-testid="confirm-and-pay"]',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftcartApplied:'.b-gift_certificate-code',
    giftcartOrderSummary: 'div.b-summary_order-details',
    giftCardErrorMessage:'',
    orderSummaryQty: '.b-minicart_product-qty_value',
    removeCertificate: '.b-gift_certificate-remove.b-link.m-highlight',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodClearPay: '#payment-button-CLEARPAY',
    paymentMethodAmazonPay: '#payment-button-AMAZON_PAYMENTS',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    addNewBillingAddress: '.b-form_section > .b-address_selector-actions > .m-info',
    enterManually: '[data-ref="fieldset"] > [data-ref="autocompleteFields"] > .b-address_lookup > .b-button',
    billingForm: '.b-billing_address-form',
    billingAddressFirstName: '#dwfrm_billing_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.b-address_selector-actions > button:nth-child(2)',
    billingAddressFromBook: '.b-form_section > :nth-child(2) > .b-option_switch-inner > .b-option_switch-label',
    dobDate: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    dobMonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    dobYear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    dobForm: 'div[class="b-form_section m-required m-wrapper"]',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
  },
  'boohooman.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaNLFrame: '#klarna-payments-fullscreen',
    klarnaNLContinueBtn: '#onContinue__text',
    klarnaPayNow:'#billingSubmitButton > span',
    klarnaPayNowIE: '#billingSubmitButton > span',
    klarnaPayNowNL: '#billingSubmitButton',
    payButtonLocator: '[data-testid="confirm-and-pay"]',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '#dwfrm_billing_giftCertCode',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftcartApplied:'.giftcard-redemption-title',
    giftcartOrderSummary: '.summary-inner > .checkout-order-totals',
    orderSummaryQty: '.b-minicart_product-qty_value',
    giftCardErrorMessage:'',
    removeCertificate: '.b-gift_certificate-remove.b-link.m-highlight',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: '.useAsBillingAddress.form-row-checkbox',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarnaNl: '[for="is-Klarna"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    emailField: '#dwfrm_billing_billingAddress_email_emailAddress',
    confirmEmailField: '#dwfrm_billing_billingAddress_email_emailConfirm',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '[name="dwfrm_billing_addressList"]',
    billingAddressFromBook: '#dwfrm_singleshipping_addressList > option:nth-child(3)',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    paymentMethodAfterPay: '[for="is-AFTERPAY"]',
   
    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  },
  'karenmillen.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    klarnaPayNowAU: '#billingSubmitButton',
    klarnaPayNowIE: '#billingSubmitButton',
    klarnaPayNowUS: '#billingSubmitButton',
    payButtonLocator:'[data-testid="confirm-and-pay"]',
    payButtonLocatorAU:'[data-testid="confirm-and-pay"]>div>div>span',
    payButtonLocatorUS:'[data-testid="confirm-and-pay"]',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '#dwfrm_billing_giftCertCode',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftcartApplied:'.giftcard-redemption-title',
    giftcartOrderSummary: '.checkout-order-totals.js-checkout-order-totals table.order-totals-table tbody tr td',
    removeCertificate: '.giftcard-redemption-remove',
    giftCardErrorMessage:'',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodCreditCardUS: '[for="is-CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    paymentMethodAfterPay: '[for="is-AFTERPAY"]',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.use-another-address',
    billingAddressFromBook: ':nth-child(2) > .address-radios-label',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    
    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    creditCardFieldsCardNumberUS: '#cc_cardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    creditCardFieldsExpirationDateUS: '#cc_expDate',
    creditCardSecurityCodeIframe: '#component_scheme .adyen-checkout__field__cvc .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsSecurityCodeUS: '[class="form-row js-form-row cvn js-cvn cvn required"]>div>input',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    creditCardFieldsCardOwnerUS: '#dwfrm_billing_paymentMethods_creditCard_owner',
    paynowBtnCC:'#billingSubmitButton',
    paynowBtnCCUS:'#billingSubmitButton',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  },
  'coastfashion.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftCardErrorMessage:'',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.use-another-address',
    billingAddressFromBook: ':nth-child(2) > .address-radios-label',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
  },
  'warehousefashion.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftCardErrorMessage:'',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.use-another-address',
    billingAddressFromBook: ':nth-child(2) > .address-radios-label',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',
    payButtonLocator:"[data-testid='confirm-and-pay']",

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    creditCardSecurityCodeIframe: '#component_scheme .adyen-checkout__field__cvc .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
  },
  'oasis-stores.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftCardErrorMessage:'',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.use-another-address',
    billingAddressFromBook: ':nth-child(2) > .address-radios-label',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
  },
  'misspap.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    klarnaPayNowAU: '#billingSubmitButton',
    klarnaPayNowIE: '#payment-details-KlarnaIE > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button',
    paymentMethodCreditCardUS: '[for="is-CREDIT_CARD"]',
    klarnaPayNowUS: '#billingSubmitButton',
    payButtonLocator:'[data-testid="confirm-and-pay"]',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_billing_giftCertCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    promoButton: 'button[type="submit"].b-form-inline_button',
    promoErrorAlert: '#dwfrm_coupon_couponCode-error',
    giftCardErrorMessage:'',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.use-another-address',
    billingAddressFromBook: ':nth-child(2) > .address-radios-label',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',
    email: '#dwfrm_billing_contactInfoFields_email',
    paymentMethodAfterPay: '[for="is-AFTERPAY"]',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    creditCardFieldsCardNumberUS: '#cc_cardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    creditCardFieldsExpirationDateUS: '#cc_expDate',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsSecurityCodeUS: '[id^=dwfrm_billing_paymentMethods_creditCard_cvn]',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    creditCardFieldsCardOwnerUS: '#dwfrm_billing_paymentMethods_creditCard_owner',
    paynowBtnCC:'#billingSubmitButton',
    paynowBtnCCUS: '#billingSubmitButton',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  }, 
  'boohoomena.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '#dwfrm_billing_giftCertCode',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    giftCardErrorMessage:'',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodClearPay: '[for="is-CLEARPAY"]',
    emptyEmailField: '#dwfrm_singleshipping_shippingAddress_email_emailAddress',
    addNewAddressBtn: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_singleshipping_shippingAddress_email_emailAddress-error',
    addNewBillingAddress: '.js-edit-address',
    billingForm: '.js-address-form',
    billingAddressFirstName: '#dwfrm_billing_billingAddress_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_billingAddress_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.use-another-address',
    billingAddressFromBook: '.button',
    dobDate: '#dwfrm_profile_customer_dayofbirth',
    dobMonth: '#dwfrm_profile_customer_monthofbirth',
    dobYear: '#dwfrm_profile_customer_yearofbirth',
    dobForm: '.form-birthday-rows-inner',
    promoCodeField: '#dwfrm_billing_couponCode',
    paymentMethodAfterPay: '[for="is-AFTERPAY"]',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
    clickAddNewCard: "[class='b-button m-info m-width_full ']",
  }
};

class BillingPage implements AbstractPage {
  goto (): void {
    cy.visit('/checkout?step=billing');
  }

  click = {
    changeShippingAddress () {
      const changeShippingAddress = selectors[brand].changeShippingAddress;
      cy.get(changeShippingAddress).click({force: true});
    },
    addNewBilingAddress () {
      const addNewBillingAddress = selectors[brand].addNewBillingAddress;
      cy.get(addNewBillingAddress).click({force: true});
    },
    changeShippingMethod () {
      const changeShippingMethod = selectors[brand].changeShippingMethod;
      cy.get(changeShippingMethod).click({force: true});
    },
    uncheckShippingCheckbox () {
      const shippingCheckbox = selectors[brand].shippingCheckbox;
      if (isSiteGenesisBrand) {
        cy.get(shippingCheckbox).click({force:true});
      } else {
        cy.get(shippingCheckbox).should('be.checked').uncheck({force: true});
      }
    },
    chooseCC () {
      const paynowBtnCC = selectors[brand].paynowBtnCC;
      cy.get(paynowBtnCC).click({force: true});
    }
   
  };

  actions = {
    waitPageToLoad () {
      cy.wait(12000); 
      cy.url().should('include', 'billing');
    },
    selectDate (day: string, month: string, year: string) {
      const dobDate = selectors[brand].dobDate;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDate).select(day);
      cy.get(dobMonth).select(month);
      cy.get(dobYear).select(year);
      cy.get(dobYear).blur();
    },
    selectCreditCard (cardNo: string, cardOwner: string, date: string, code: string) {
      const paymentMethodCreditCard = selectors[brand].paymentMethodCreditCard;
      const creditCardCardNumberIframe = selectors[brand].creditCardCardNumberIframe;
      const creditCardFieldsCardNumber = selectors[brand].creditCardFieldsCardNumber;
      const creditCardExpirationDateIframe = selectors[brand].creditCardExpirationDateIframe;
      const creditCardFieldsExpirationDate = selectors[brand].creditCardFieldsExpirationDate;
      const creditCardSecurityCodeIframe = selectors[brand].creditCardSecurityCodeIframe;
      const creditCardFieldsSecurityCode = selectors[brand].creditCardFieldsSecurityCode;
      const creditCardFieldsCardOwner = selectors[brand].creditCardFieldsCardOwner;

      const paynowBtnCC = selectors[brand].paynowBtnCC;
      const clickAddNewCard = selectors[brand].clickAddNewCard;
      cy.get(paymentMethodCreditCard).click({force: true});
      cy.wait(4000);

      cy.get('body').then($body=>{ // (Updated) If there is saved Credit Card, click Add new Card button
        if ($body.find(clickAddNewCard).length>0) { 
          cy.get(clickAddNewCard).click();
        }
      });

      cy.iframe(creditCardCardNumberIframe).find(creditCardFieldsCardNumber).type(cardNo, {force:true});
      cy.iframe(creditCardExpirationDateIframe).find(creditCardFieldsExpirationDate).type(date, {force:true});
      cy.iframe(creditCardSecurityCodeIframe).find(creditCardFieldsSecurityCode).type(code, {force:true});
      cy.get(creditCardFieldsCardOwner).type(cardOwner, {force:true});
      cy.get(paynowBtnCC).click({force:true});

    },
    selectCreditCardUS (cardNo: string, cardOwner: string, date: string, code: string) {
      const paymentMethodCreditCardUS = selectors[brand].paymentMethodCreditCardUS;
      const creditCardFieldsCardNumberUS = selectors[brand].creditCardFieldsCardNumberUS;
      const creditCardFieldsCardOwnerUS = selectors[brand].creditCardFieldsCardOwnerUS;
      const creditCardFieldsExpirationDateUS= selectors[brand].creditCardFieldsExpirationDateUS;
      const creditCardFieldsExpirationMonthUS= selectors[brand].creditCardFieldsExpirationMonthUS;
      const creditCardFieldsSecurityCodeUS = selectors[brand].creditCardFieldsSecurityCodeUS; 
      const paynowBtnCCUS = selectors[brand].paynowBtnCCUS;  
      const saveCards = "[class='b-button m-info m-width_full ']";

      cy.get(paymentMethodCreditCardUS).click({force:true});   
      cy.wait(4000);

      cy.get('body').then($body=>{ // (Updated) If there is saved Credit Card, click Add new Card button
        if ($body.find(saveCards).length>0) { 
          cy.get(saveCards).click({force: true});
        }
      });
      cy.get(creditCardFieldsCardNumberUS).type(cardNo);
      cy.get(creditCardFieldsCardOwnerUS).type(cardOwner);
      if ((brand == 'karenmillen.com' || brand == 'misspap.com' ) && locale == 'US') {
        cy.get(creditCardFieldsExpirationDateUS).type(date, {force:true});
      } else {
        cy.get(creditCardFieldsExpirationMonthUS).select('12');
        cy.get(creditCardFieldsExpirationDateUS).select('2029');
      }
      cy.get(creditCardFieldsSecurityCodeUS).type(code, {force: true});
      cy.get(paynowBtnCCUS).click({force:true});

    },
    emptyEmailField () {
      const emptyEmailField = selectors[brand].emptyEmailField;
      cy.get(emptyEmailField).clear();
    },
    addNewAddress () {
      const addNewAddressBtn = selectors[brand].addNewAddressBtn;
      const addNewAddressField = selectors[brand].addNewAddressField;
      if (brand == 'boohoo.com') {
        cy.get(addNewAddressBtn).eq(0).click({force: true});
      } else if (brand == 'nastygal.com' || brand == 'wallis.co.uk' || brand == 'burton.co.uk' || brand == 'dorothyperkins.com') {
        cy.get(addNewAddressField).click({force: true});
      }    
    },
    enterManuallyAddressDetails () {
      const enterManually = selectors[brand].enterManually;
      if (!isSiteGenesisBrand) {
        cy.get(enterManually).click({force: true});
      }
    },
    billingFirstNameField (firstName: string) {
      const billingAddressFirstName = selectors[brand].billingAddressFirstName;
      cy.get(billingAddressFirstName).clear().type(firstName);
    },
    billingLastNameField (lastName: string) {
      const billingAddressLastName = selectors[brand].billingAddressLastName;
      cy.get(billingAddressLastName).clear().type(lastName);
    },
    billingEmailField (email: string) { // Only for boohooman
      const emailField = selectors[brand].emailField;
      cy.get(emailField).clear().type(email);
    },
    billingConfirmEmailField (email: string) { // Only for boohooman
      const confirmEmailField = selectors[brand].confirmEmailField;
      cy.get(confirmEmailField).clear().type(email);
    },
    addBillingAddressGuestUser (line1: string, city: string, state: string,county: string, postcode: string) {
      const billingAddressFieldsAddress1 = selectors[brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[brand].billingAddressFieldCity;
      const billingPostCode = selectors[brand].billingPostCode;
      const billingAddressFieldsStateCode = selectors[brand].billingAddressFieldsStateCode;
      const postCodeBoohooAU = '#dwfrm_billing_addressFields_postalCode';

      this.enterManuallyAddressDetails ();
      cy.get(billingAddressFieldsAddress1).clear().type(line1);
      cy.get(billingAddressFieldCity).clear({force: true}).type(city);
      if (!isSiteGenesisBrand ) {
        if (locale == 'AU'||locale == 'IE'||locale == 'US') {
          cy.get(billingAddressFieldsStateCode).select(county);
        } else {     
          cy.get(billingAddressFieldsStateCode).clear().type(state);
        }
      }
      if (brand == 'boohoo.com' && locale == 'AU') {
        cy.get(postCodeBoohooAU).clear().type(postcode);
      } else {
        cy.get(billingPostCode).clear().type(postcode);
      }
      
    },
    addBillingAddressRegisteredUser (localeAddress: AddressData) {
      const billingAddressFieldsAddress1 = selectors[brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[brand].billingAddressFieldCity;
      const billingPostCode = selectors[brand].billingPostCode;
      const boohooMenaState = '#dwfrm_billing_billingAddress_addressFields_states_state';
      const boohooMenaPhoneCode = '#dwfrm_phonedetails_phonecode';
      const boohooMenaPhoneNumber = '#dwfrm_phonedetails_phonenumber';
      const boohooAUPostCode = '#dwfrm_billing_addressFields_postalCode';

      this.enterManuallyAddressDetails ();
      cy.get(billingAddressFieldsAddress1).clear().type(localeAddress.addressLine);
      if (brand == 'boohoomena.com') {
        cy.get(billingAddressFieldCity).select(localeAddress.city);
        cy.get(boohooMenaState).select(localeAddress.county);
        cy.get(boohooMenaPhoneCode).select(localeAddress.phone.slice(0, 2));
        cy.get(boohooMenaPhoneNumber).clear().type(localeAddress.phone.slice(2));
      } else {
        cy.get(billingAddressFieldCity).clear().type(localeAddress.city);
      }
      if (brand == 'boohoo.com' && locale == 'AU') {
        cy.get(boohooAUPostCode).clear().type(localeAddress.postcode);
      } else {
        cy.get(billingPostCode).clear().type(localeAddress.postcode);
      }
      
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
    addGiftCard (giftCertificate: string) {
      
      const addGiftCertificate = selectors[brand].addGiftCertificate;
      const giftCertCode = selectors[brand].giftCertCode;
      const addGiftCert = selectors[brand].addGiftCert;
      cy.get(addGiftCertificate).click();
      cy.get(giftCertCode).should('be.visible').type(giftCertificate);
      cy.get(addGiftCert).click();
    },

    removeGiftCertificate () {
      const removeCertificate = selectors[brand].removeCertificate;
      const giftcartApplied = selectors[brand].giftcartApplied;
      cy.get(giftcartApplied).should('be.visible').then(()=>{
        cy.get(removeCertificate).click();
      });
    },

    selectAddressFromBook () {
      const viewAllBillingAddresses = selectors[brand].viewAllBillingAddresses;
      const billingAddressFromBook = selectors[brand].billingAddressFromBook;
      const billingAddressFromBookUS = selectors[brand].billingAddressFromBookUS;
      if (brand == 'boohoo.com' && locale == 'AU') {
        cy.get('button[class="b-button m-link m-width_full"]').click({force: true});
      } else if (brand == 'boohooman.com') {
        cy.get(viewAllBillingAddresses).select(2);
      } else if (brand == 'nastygal.com'&& locale == 'US') {
        cy.get(billingAddressFromBookUS).click({force: true});
      } else { 
        cy.get(billingAddressFromBook).click({force: true});
      }      
    },
    selectKlarnaBoohooNl () { // SelectKlarnaNew is created for BOOHOO/NL
      const paymentMethodKlarnaNl = selectors[brand].paymentMethodKlarnaNl;
      const klarnaPayNowNL = selectors[brand].klarnaPayNowNL;
      const klarnaNLFrame = selectors[brand].klarnaNLFrame;
      const klarnaNLContinueBtn = selectors[brand].klarnaNLContinueBtn;
      
      cy.get(paymentMethodKlarnaNl).click();
      cy.wait(5000);  
         
      if (brand == 'boohooman.com' && locale == 'NL') {
        cy.enter('#klarna-payments-main').then(iframeBody => {
          cy.wait(3000);
          iframeBody().find('[id="radio-pay_later__label"]>input').click({force: true});
        });
      }

      // Click on PayNow.
      cy.get(klarnaPayNowNL).click();

      // Click the Continue button inside iframe and make payment
      cy.enter(klarnaNLFrame ).then(iframeBody => {
        cy.wait(3000);
        iframeBody().find(klarnaNLContinueBtn).should('be.visible').click({force: true});
        cy.wait(5000);
        iframeBody().find('[name="otp_field"]').type('111111', { force: true });
        cy.wait(5000);
        iframeBody().then(() => {
          iframeBody().find('#invoice_kp-purchase-review-dialog__bottom').click();
        });
      });
    },

    selectKlarna () {
      if (isSiteGenesisBrand) {
        cy.get(`label[for="is-Klarna${locale}"]`).click({force:true});
      } else {
        cy.get(`#payment-button-Klarna${locale}`).click({force:true});
      }
      cy.wait(5000);
      
      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });
      
      // Click on PayNow.
      const klarnaPayNow = selectors[brand].klarnaPayNow;
      const klarnaPayNowAU = selectors[brand].klarnaPayNowAU;
      const klarnaPayNowUS = selectors[brand].klarnaPayNowUS;
      const klarnaPayNowIE = selectors[brand].klarnaPayNowIE;
      if (locale == 'AU') {
        cy.get(klarnaPayNowAU).click({force:true});
      } else if (locale == 'US') {
        cy.get(klarnaPayNowUS).click({force:true});
      } else if (locale == 'IE') {
        cy.get(klarnaPayNowIE).click({force:true});
      } else {
        cy.get(klarnaPayNow).click({force:true});
      }
      
      // Click the Continue button.
      cy.get('button[style*="geometricprecision"]').click({force:true});

      // Get the new Klarna iframe.
      cy.frameLoaded('#klarna-apf-iframe');

      // Digsusting implicit wait.
      cy.wait(12000);

      // Complete the Klarna iframe journey.
      cy.enter('#klarna-apf-iframe', { timeout: 20000 }).then(body => {
        body().find('#onContinue').click({force:true});
        cy.wait(2000);
        body().find('#otp_field').type('111111', {force: true});
        cy.wait(12000);

        body().then($body => {  
          if ($body.find("[value='pay_later']").length>0) { // If PAyment plan appears to select pay now or pay after 30 days
            body().find("[value='pay_later']").click();
          }
        });

        body().then($body => { 
          if ($body.find('#pay_now-pay_now').length) { // If Payment options popup exists select Pay now
            body().find('#pay_now-pay_now').click();
            body().find('button[data-testid="select-payment-category"]').click();
            cy.wait(5000);
          }
        });
        
        body().then($body => {
          const continueButtonLocator= (brand == 'nastygal.com') ? '[data-cid="btn-primary"]' : 'button[data-testid="pick-plan"]';
          if ($body.find(continueButtonLocator).length) { // If Continue button on test plan page exists
            body().find(continueButtonLocator).click({force:true});
            cy.wait(5000);
          }
        });
        body().then($body => {
          if ($body.find('#root > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(6) > div > label > div:nth-child(2)').length) { // If terms&condition checkbox exists
            body().find('#root > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(6) > div > label > div:nth-child(2)').click({force:true}); 
            cy.wait(5000);
          }
        });

        body().then($body => {
          if ($body.find('[data-testid="select-payment-category"]').length) { // If 'How do you want to pay' popup exists
            $body.find('[data-testid="select-payment-category"]').click();
            cy.wait(5000);
          }
        });

        body().then($body => {
          if ($body.find('[data-testid="pick-plan"]').length) { // If 'Pick plan' popup exists
            $body.find('[data-testid="pick-plan"]').click();
            cy.wait(5000);
          }
        });

        const payButtonLocator = selectors[brand].payButtonLocator;
        const payButtonLocatorIE = selectors[brand].payButtonLocatorIE;
       
        if (brand=='nastygal.com' && locale =='IE') {
          body().find(payButtonLocatorIE).click({force:true});
        } else { 
          body().find(payButtonLocator).click({force:true});
          cy.wait(5000); 
        
        }

        body().then($body => {
          if ($body.find('#dialog [data-testid="PushFavoritePayment:skip-favorite-selection"]').length) { // If 'Skip and continue' button exists
            $body.find('#dialog [data-testid="PushFavoritePayment:skip-favorite-selection"]').click();
            cy.wait(2000);
          }
        });
        
        body().then($body => {
          if ($body.find('[data-testid="SmoothCheckoutPopUp\\:skip"]').length) { // If 'Faster checkout' popup exists
            $body.find('[data-testid="SmoothCheckoutPopUp\\:skip"]').click();
            cy.wait(5000);
          }
        });
        
      });
 
    },

    selectPayPal () {
      const paymentMethodPayPal = selectors[brand].paymentMethodPayPal;
      cy.get(paymentMethodPayPal).click();
      cy.wait(2000);
      
      // Stub the open method inside iframe to force it not to open a window.
      cy.get('.zoid-component-frame').its('0.contentDocument.defaultView').then(win => {
        cy.stub(win, 'open');
      });
      
      // Click PayPal button
      cy.iframe('.zoid-component-frame').find('.paypal-button').eq(0).should('be.visible').click({force:true});
      
      // Wait for PayPal window to load
      cy.wait(8000);
      
      // Get first iframe, inside its body get inner iframe and then find button
      cy.get('.paypal-checkout-sandbox-iframe').then((iframe) => {
        const innerIframe = iframe.contents().find('.zoid-component-frame').contents();

        // If accept cookies button appears
        cy.wrap(innerIframe).then($body => {
          if ($body.find('#acceptAllButton').length) {
            cy.wrap(innerIframe).find('#acceptAllButton').click();
          }
        });
        
        // If Login form appears 
        cy.wrap(innerIframe).then($body => {
          if ($body.find('#email').length) {
            cy.wrap(innerIframe).find('#email').clear().type('test.user@boohoo.com');
            cy.wrap(innerIframe).find('#btnNext').click();
            cy.wrap(innerIframe).find('#password').type('boohoo123');
            cy.wrap(innerIframe).find('#btnLogin').click();
          }
        });
      });

      cy.wait(12000);

      // New iframe opens after PayPal user logs in
      cy.get('.paypal-checkout-sandbox-iframe').then((iframe) => {
        const innerIframe = iframe.contents().find('.zoid-component-frame').contents();
        cy.wrap(innerIframe).find('#payment-submit-btn').click({force: true});

      });
    },

    selectClearpay () {
      const siteGenesisClearPay = '[for="is-CLEARPAY"]';
      const siteGenesisClearPayButton = '#billingSubmitButton';
      const blpClearPay = '#payment-button-CLEARPAY';
      const blpClearPayButton = '#payment-details-CLEARPAY button[type="submit"]';
      if (isSiteGenesisBrand) {
        cy.get(siteGenesisClearPay, { timeout: 15000 }).click({ force: true });
        cy.get(siteGenesisClearPayButton).click({ force: true });
      } else {
        cy.get(blpClearPay).click({ force: true });
        cy.get(blpClearPayButton, { timeout: 20000 }).click();
      }
  
      cy.get('body', { timeout: 20000 }).then($body => {
        if ($body.find('[data-testid="summary-button"]').length > 0) {  
          cy.get('[data-testid="summary-button"]').click();
        }
      });

      cy.wait(5000);
      cy.get('[data-testid="login-identity-input"]', { timeout: 30000 }).clear();
      cy.wait(5000);
      cy.get('[data-testid="login-identity-input"]', { timeout: 30000 }).type('ukboohoo@outlook.com');
      cy.get('[data-testid="login-identity-button"]', { timeout: 30000 }).click();
      cy.get('[data-testid="login-password-input"]', { timeout: 30000 }).type('Boohoo!23');
      cy.get('[data-testid="login-password-button"]', { timeout: 30000 }).click();
      cy.get('[data-testid="summary-button"]', { timeout: 30000 }).click();
    },
  };

  assertions = {
    assertShippingAddressPresent () {
      const shippingAddressSection = selectors[brand].shippingAddressSection;
      cy.get(shippingAddressSection).should('be.visible').and('not.be.empty');
    },
    assertGiftCardAdded () {
      const giftcartApplied = selectors[brand].giftcartApplied;
      cy.get(giftcartApplied).should('be.visible');

      // Add text validation
    },
    assertGiftCardinOrderSummary () {
      const giftcartOrderSummary= selectors[brand].giftcartOrderSummary;
      const giftCard = assertionText.giftCard[language];
      cy.get(giftcartOrderSummary).then($orderGiftCard=>{
        const orderGiftCard: any = $orderGiftCard;
        cy.get(orderGiftCard).invoke('text').should('contain',giftCard);
      });
    },
    assertGiftCardRemoved () {
      const giftcartOrderSummary= selectors[brand].giftcartOrderSummary;
      const giftCard: string = assertionText.giftCard[language];
      cy.get(giftcartOrderSummary).then($orderGiftCard=>{
        const orderGiftCard: any = $orderGiftCard;
        cy.get(orderGiftCard).invoke('text').should('not.contain',giftCard);
      });
    },
    assertGiftCardError () {
      const errorMessage = selectors[brand].giftCardErrorMessage;
      const giftCardInvalidErrorMessage: string = assertionText.giftCardInvalidErrorMessage[language];
      cy.get(errorMessage).invoke('show').should('contain.text',giftCardInvalidErrorMessage);
    },
    assertGiftCardEmptyError () {
      const errorMessage = selectors[brand].giftCardEmptyError;
      const giftCardInvalidErrorMessage = assertionText.giftCardEmptydErrorMessage[language];
      cy.get(errorMessage).should('be.visible').should('contain.text',giftCardInvalidErrorMessage);
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
    assertNewShippingAddress (addressLine: string, city: string, postCode: string, country: string) {
      const shippingAddressSection = selectors[brand].shippingAddressSection;
      cy.get(shippingAddressSection).should('contain.text', addressLine)
        .and('contain.text', city)
        .and('contain.text', postCode)
        .and('contain.text', country);
    },
    assertShippingMethodPresent (shippingMethod: string) {
      const shippingMethodSelector = selectors[brand].shippingMethodSelector;
      cy.get(shippingMethodSelector).should('be.visible').and('include.text', shippingMethod.trim());
    },

    assertEmailIsCorrect (email: string) {
      cy.get('input[id="dwfrm_billing_contactInfoFields_email"]').should('have.value', email);
    },

    assertSubscriptionBlockPresent () {
      cy.get('div[class="b-create_account_form-subscription"]').should('be.visible');
    },
    assertDateFormIsPresent () {
      const dobForm = selectors[brand].dobForm;
      cy.get(dobForm).should('be.visible');
    },
    assertDateIsSelected (day: string, month: string, year: string) {
      const dobDate = selectors[brand].dobDate;
      const dobMonth = selectors[brand].dobMonth;
      const dobYear = selectors[brand].dobYear;
      cy.get(dobDate).should('have.value', day);
      cy.get(dobMonth).should('have.value', month);
      cy.get(dobYear).should('have.value', year);
    },
    assertEmptyEmailFieldError (errorMsg: string) {
      const emptyEmailFiledError = selectors[brand].emptyEmailFiledError;
      cy.get(emptyEmailFiledError).should('be.visible').and('contain.text', errorMsg);
    },
    assertEmptyDateFieldError (errorMsg: string) {
      const dateError = selectors[brand].dateError;
      cy.get(dateError).should('be.visible').and('contain.text', errorMsg);
    },
    assertSameAsShippingIsChecked () {
      const shippingCheckbox = selectors[brand].shippingCheckbox;
      if (isSiteGenesisBrand) {
        cy.get(shippingCheckbox).should('have.class', 'is-checked');
      } else {
        cy.get(shippingCheckbox).should('be.checked');
      }
    },
    assertBillingAddressFormIsPresent () {
      const billingForm = selectors[brand].billingForm;
      cy.get(billingForm).should('be.visible');
    },
    assertNewBillingAddress (address: string) {
      const newBillingAddressForm = selectors[brand].newBillingAddressForm;
      cy.get(newBillingAddressForm).should('be.visible').and('include.text', address);
    },

    assertPaymentMethodCreditCardIsDisplayed () {
      const paymentMethodCreditCard = selectors[brand].paymentMethodCreditCard;
      const paymentMethodCreditCardUS = selectors[brand].paymentMethodCreditCardUS;
      if ((brand =='boohoo.com' || brand == 'karenmillen.com' || brand == 'misspap.com'|| brand == 'nastygal.com') && (locale == 'US' || locale == 'CA')) {
        cy.get(paymentMethodCreditCardUS).should('be.visible');
      } else {
        cy.get(paymentMethodCreditCard).should('be.visible');
      }
    },

    assertPaymentMethodGooglePayIsDisplayed () {
      const paymentMethodGooglePay = selectors[brand].paymentMethodGooglePay;
      cy.get(paymentMethodGooglePay).should('be.visible');
    },
    assertPaymentMethodPayPalIsDisplayed () {
      const paymentMethodPayPal = selectors[brand].paymentMethodPayPal;
      cy.get(paymentMethodPayPal).should('be.visible');
    },

    assertPaymentMethodKlarnaIsDisplayed () {
      if (isSiteGenesisBrand) {
        cy.get(`label[for="is-Klarna${locale}"]`).should('be.visible');
      } else {
        cy.get(`#payment-button-Klarna${locale}`).should('be.visible');
      }
    },
      
    assertPaymentMethodClearPayIsDisplayed () {
      const paymentMethodClearPay = selectors[brand].paymentMethodClearPay;
      if (locale == 'UK') {
        cy.get(paymentMethodClearPay).should('be.visible');
      } else {
        this.skip();
      }
    }, 

    assertPaymentMethodAfterPayIsDisplayed () {
      const paymentMethodAfterPay = selectors[brand].paymentMethodAfterPay;
      cy.get(paymentMethodAfterPay).should('be.visible');
    },

    assertShippingPageIsOpened () {
      cy.url().should('include', 'shipping');
    },
    assertOrderConfirmationPageIsDisplayed () {
      const isOrderorderconfirmationBrand: boolean = brand == 'wallis.co.uk' || brand == 'burton.co.uk' || brand == 'dorothyperkins.com';
      const isCheckoutConfirmationBrandAndLocale: boolean = isSiteGenesisBrand && (locale == 'UK' || locale == 'NL'|| locale == 'IE' || locale == 'AU' || locale == 'DE');
      const isOrderConfirmationBrandAndLocale: boolean = ((brand =='boohoo.com' || brand == 'nastygal.com' || brand == 'misspap.com') && (locale == 'UK' || locale == 'US' || locale == 'IE' || locale == 'EU'));
    
      if (isOrderorderconfirmationBrand) {
        cy.url({timeout: 30000}).should('include', 'orderconfirmation');
      } else if (isCheckoutConfirmationBrandAndLocale) {
        cy.url({timeout: 30000}).should('include', 'checkout-confirmation');
      } else if (isOrderConfirmationBrandAndLocale ) {
        cy.url({timeout: 30000}).should('include', 'order-confirmation');  
      } else {
        cy.url({timeout: 30000}).should('include', 'Order-Confirm');
      }  
    },
    assertEmailFieldCantBeChanged () {
      const email = selectors[brand].email;
      cy.get(email).should('have.attr', 'disabled');
    },

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    assertPromoCodeFieldIsDisplayed () {
      const promoCodeField = selectors[brand].promoCodeField;
      cy.get(promoCodeField).should('be.visible');
    },
  };
}

export default new BillingPage();

