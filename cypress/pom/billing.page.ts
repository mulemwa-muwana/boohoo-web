import { isSiteGenesisBrand } from 'cypress/helpers/common';
import { locale, brand } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK button[type="submit"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodKlarna: '#payment-button-KlarnaUK',
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
  'nastygal.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow: '#payment-details-KlarnaUK button',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodKlarna: '#payment-button-KlarnaUK',
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
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    billingForm: '.b-billing_address-form',
    billingAddressFirstName: '#dwfrm_billing_addressFields_firstName',
    billingAddressLastName: '#dwfrm_billing_addressFields_lastName',
    newBillingAddressForm: 'div[data-ref="summarizedAddressBlock"]',
    viewAllBillingAddresses: '.b-form_section > .b-address_selector-actions > .m-link',
    billingAddressFromBook: '.b-form_section > :nth-child(2) > .b-option_switch-inner > .b-option_switch-label',
    dobDate: 'select[id="dwfrm_profile_customer_dayofbirth"]',
    dobMonth: 'select[id="dwfrm_profile_customer_monthofbirth"]',
    dobYear: 'select[id="dwfrm_profile_customer_yearOfBirth"]',
    dobForm: 'div[class="b-form_section m-required m-wrapper"]',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: "[data-fieldtype='encryptedCardNumber']",
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe',
    creditCardFieldsExpirationDate: "[data-fieldtype='encryptedExpiryDate']",
    creditCardSecurityCodeIframe: '.b-form-set > .b-payment_form .adyen-checkout__field__cvc .js-iframe',
    creditCardFieldsSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
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
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodKlarna: '#payment-button-KlarnaUK',
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
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodKlarna: '#payment-button-KlarnaUK',
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
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_billing_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    changeShippingAddress: ':nth-child(1) > .b-summary_group-subtitle > .b-button',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    shippingCheckbox: '#dwfrm_billing_addressFields_useShipping',
    paymentMethodCreditCard: '#payment-button-scheme',
    paymentMethodGooglePay: '#payment-button-PAYWITHGOOGLE-SSL',
    paymentMethodPayPal: '#payment-button-PayPal',
    paymentMethodKlarna: '#payment-button-KlarnaUK',
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
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: '.useAsBillingAddress.form-row-checkbox',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarna: '[for="is-KlarnaUK"]',
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
    viewAllBillingAddresses: '#dwfrm_billing_addressList',
    billingAddressFromBook: '#dwfrm_singleshipping_addressList > option:nth-child(3)',
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
  'karenmillen.com': {
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
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarna: '[for="is-KlarnaUK"]',
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
    creditCardSecurityCodeIframe: '#component_scheme .adyen-checkout__field__cvc .js-iframe',
    creditCardFieldsSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
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
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarna: '[for="is-KlarnaUK"]',
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
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarna: '[for="is-KlarnaUK"]',
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
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarna: '[for="is-KlarnaUK"]',
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
    shippingAddressSection: '.minicheckout-section',
    billingAddressFieldCity: '#dwfrm_billing_billingAddress_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_billingAddress_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_billingAddress_addressFields_states_state',
    billingPostCode: '#dwfrm_billing_billingAddress_addressFields_postalcodes_postal',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarna: '[for="is-KlarnaUK"]',
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
  'boohoomena.com': {
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
    changeShippingAddress: '.minicheckout-address-wrapper a[class*="js-edit-shipping"]',
    shippingMethodSelector: '.minicheckout-shipping-option',
    changeShippingMethod: '.minicheckout-shipping-wrapper a[class*="js-edit-shipping"]',
    shippingCheckbox: 'div[class*="useAsBillingAddress"]',
    paymentMethodCreditCard: '[for="is-ADYEN_CREDIT_CARD"]',
    paymentMethodPayPal: '[for="is-PayPal"]',
    paymentMethodKlarna: '[for="is-KlarnaUK"]',
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
      cy.get(changeShippingMethod).click();
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
      cy.get(paymentMethodCreditCard).click({force: true});
      cy.wait(4000);

      cy.get('body').then($body=>{ // (Updated) If there is saved Credit Card, click Add new Card button
        if ($body.find("[class='b-button m-info m-width_full ']").length>0) { 
          cy.get("[class='b-button m-info m-width_full ']").click();
        }
      });

      cy.iframe(creditCardCardNumberIframe).find(creditCardFieldsCardNumber).type(cardNo, {force:true});
      cy.iframe(creditCardExpirationDateIframe).find(creditCardFieldsExpirationDate).type(date, {force:true});
      cy.iframe(creditCardSecurityCodeIframe).find(creditCardFieldsSecurityCode).type(code, {force:true});
      cy.get(creditCardFieldsCardOwner).type(cardOwner, {force:true});
      cy.get(paynowBtnCC).click({force:true});

    },
    selectCreditCardUS (cardNo: string, cardOwner: string, date: string, code: string) {
      const paymentMethodCreditCard = selectors[brand].paymentMethodCreditCard;

      const creditCardCardNumberIframe = selectors[brand].creditCardCardNumberIframe;
      const creditCardFieldsCardNumber = selectors[brand].creditCardFieldsCardNumber;
      const creditCardExpirationDateIframe = selectors[brand].creditCardExpirationDateIframe;
      const creditCardFieldsExpirationDate = selectors[brand].creditCardFieldsExpirationDate;
      const creditCardSecurityCodeIframe = selectors[brand].creditCardSecurityCodeIframe;
      const creditCardFieldsSecurityCode = selectors[brand].creditCardFieldsSecurityCode;
      const creditCardFieldsCardOwner = selectors[brand].creditCardFieldsCardOwner;

      //const paynowBtnCC = selectors[variables.brand].paynowBtnCC;
      if(brand == 'boohooman.com'){
        cy.get(':nth-child(3) > .payment-method-option').click({force:true})
      } else{
        cy.get('#payment-button-scheme').click({force: true});
      }
    
      cy.wait(4000);

      cy.get('body').then($body=>{ // (Updated) If there is saved Credit Card, click Add new Card button
        if ($body.find("[class='b-button m-info m-width_full ']").length>0) { 
          cy.get("[class='b-button m-info m-width_full ']").click({force: true});
        }
      });
      cy.get('#dwfrm_billing_creditCardFields_cardNumber').type(cardNo);
      cy.get('#dwfrm_billing_creditCardFields_cardOwner').type(cardOwner);
      cy.get('#dwfrm_billing_creditCardFields_expirationMonth').select('03');
      cy.get('#dwfrm_billing_creditCardFields_expirationYear').select('2030');
      cy.get('#dwfrm_billing_creditCardFields_securityCode').type('737', {force: true});
      cy.get('#payment-details-CREDIT_CARD > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button').click({force:true});

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
    addBillingAddressGuestUser (line1: string, city: string, state: string, postcode: string) {
      const billingAddressFieldsAddress1 = selectors[brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[brand].billingAddressFieldCity;
      const billingPostCode = selectors[brand].billingPostCode;
      const billingAddressFieldsStateCode = selectors[brand].billingAddressFieldsStateCode;
      this.enterManuallyAddressDetails ();
      cy.get(billingAddressFieldsAddress1).clear().type(line1);
      cy.get(billingAddressFieldCity).clear({force: true}).type(city);
      if (locale == 'AU') {
        cy.get(billingAddressFieldsStateCode).select(state);
      } else if (!isSiteGenesisBrand) {
        cy.get(billingAddressFieldsStateCode).clear().type(state);
      }
      if (brand == 'boohoo.com' && locale == 'AU') {
        cy.get('#dwfrm_billing_addressFields_postalCode').clear().type(postcode);
      } else {
        cy.get(billingPostCode).clear().type(postcode);
      }
      
    },
    addBillingAddressRegisteredUser (localeAddress: AddressData) {
      const billingAddressFieldsAddress1 = selectors[brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[brand].billingAddressFieldCity;
      const billingPostCode = selectors[brand].billingPostCode;
      this.enterManuallyAddressDetails ();
      cy.get(billingAddressFieldsAddress1).clear().type(localeAddress.addressLine);
      if (brand == 'boohoomena.com') {
        cy.get(billingAddressFieldCity).select(localeAddress.city);
        cy.get('#dwfrm_billing_billingAddress_addressFields_states_state').select(localeAddress.county);
        cy.get('#dwfrm_phonedetails_phonecode').select(localeAddress.phone.slice(0, 2));
        cy.get('#dwfrm_phonedetails_phonenumber').clear().type(localeAddress.phone.slice(2));
      } else {
        cy.get(billingAddressFieldCity).clear().type(localeAddress.city);
      }
      if (brand == 'boohoo.com' && locale == 'AU') {
        cy.get('#dwfrm_billing_addressFields_postalCode').clear().type(localeAddress.postcode);
      } else {
        cy.get(billingPostCode).clear().type(localeAddress.postcode);
      }
      
    },
    addPromoCode (promo: string) {
      const couponCode = selectors[brand].couponCode;
      cy.get(couponCode).type(promo);
      cy.get(couponCode).click();
    },
    addGiftCard (giftCard: string) {
      const addGiftCertificate = selectors[brand].addGiftCertificate;
      const giftCertCode = selectors[brand].giftCertCode;
      const addGiftCert = selectors[brand].addGiftCert;
      cy.get(addGiftCertificate).click();
      cy.get(giftCertCode).should('be.visible').type(giftCard);
      cy.get(addGiftCert).click();
    },
    selectAddressFromBook () {
      const viewAllBillingAddresses = selectors[brand].viewAllBillingAddresses;
      const billingAddressFromBook = selectors[brand].billingAddressFromBook;
      if (brand == 'boohoo.com' && locale == 'AU') {
        cy.get('button[class="b-button m-link m-width_full"]').click({force: true});
      } else if (brand == 'boohooman.com') {
        cy.get(viewAllBillingAddresses).select('New1');
      } else { 
        cy.get(billingAddressFromBook).click({force: true});
      }      
    },
    selectKlarna () {
      const paymentMethodKlarna = selectors[brand].paymentMethodKlarna;
      if (locale == 'AU') {
        cy.get('#payment-button-KlarnaAU').click({force : true});
      } else if (locale == 'IE') {
        cy.get('#payment-button-KlarnaIE').click({force : true});
      } else if (locale == 'UK') {
        cy.get(paymentMethodKlarna).click({force:true});
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
      if (locale == 'AU') {
        cy.get('#payment-details-KlarnaAU > div > div.b-payment_accordion-submit > div > div > button').click({force:true});
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

        const payButtonLocator = (brand == 'nastygal.com') ? 'button[id*="purchase-review-continue-button"]' : '[data-testid="confirm-and-pay"]';
        body().find(payButtonLocator).click({force:true});
        cy.wait(5000);

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
      if (isSiteGenesisBrand) {
        cy.get('[for="is-CLEARPAY"]', { timeout: 15000 }).click({ force: true });
        cy.get('#billingSubmitButton').click({ force: true });
      } else {
        cy.get('#payment-button-CLEARPAY').click({ force: true });
        cy.get('#payment-details-CLEARPAY button[type="submit"]', { timeout: 20000 }).click();
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
    assertGiftCertificateFormIsPresent () {
      if (!isSiteGenesisBrand) {
        cy.get('button[data-event-click="showGiftCertificateForm"]').should('be.visible');
      }
    },
    assertPaymentMethodCreditCardIsDisplayed () {
      const paymentMethodCreditCard = selectors[brand].paymentMethodCreditCard;
      cy.get(paymentMethodCreditCard).should('be.visible');
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
        cy.get('label[for="is-KlarnaUK"]').should('be.visible');
      }
      if (!isSiteGenesisBrand && locale == 'AU') {
        cy.get('#payment-button-KlarnaAU').should('be.visible');
      } else if (!isSiteGenesisBrand && locale == 'IE') {
        cy.get('#payment-button-KlarnaIE').should('be.visible');
      } else if (!isSiteGenesisBrand && locale == 'UK') {
        cy.get('#payment-button-KlarnaUK').should('be.visible');
      }
    },
      
    assertPaymentMethodClearPayIsDisplayed () {
      const paymentMethodClearPay = selectors[brand].paymentMethodClearPay;
      if (locale == 'AU' || locale == 'US') {
        cy.get('#payment-button-AFTERPAY').should('be.visible');
      } else if (locale == 'UK') {
        cy.get(paymentMethodClearPay).should('be.visible');
      }
      
    }, 
    assertPaymentMethodAmazonPayIsDisplayed () {
      const paymentMethodAmazonPay = selectors[brand].paymentMethodAmazonPay;
      cy.get(paymentMethodAmazonPay).should('be.visible');
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
    assertOrderConfirmationPageIsDisplayed () {
      if (brand == 'wallis.co.uk' || brand == 'burton.co.uk' || brand == 'dorothyperkins.com') {
        cy.url({timeout: 30000}).should('include', 'orderconfirmation');
      } else if (isSiteGenesisBrand) {
        cy.url({timeout: 30000}).should('include', 'checkout-confirmation');
      } else {
        cy.url({timeout: 30000}).should('include', 'order-confirmation');
      }  
    },
    assertEmailFieldCantBeChanged () {
      cy.get('#dwfrm_billing_contactInfoFields_email').should('have.attr', 'disabled');
    },

    // METHODS ONLY FOR SITE GENESIS BRANDS //
    assertPromoCodeFieldIsDisplayed () {
      const promoCodeField = selectors[brand].promoCodeField;
      cy.get(promoCodeField).should('be.visible');
    },
  };
}

export default new BillingPage();

