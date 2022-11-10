import cards from 'cypress/helpers/cards';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK button[type="submit"]',
    billingAddressFieldCity: '#dwfrm_billing_addressFields_city',
    billingAddressFieldsAddress1: '#dwfrm_billing_addressFields_address1',
    addGiftCertificate: '.b-gift_certificate-add',
    billingAddressFieldsStateCode: '#dwfrm_billing_addressFields_states_stateCode',
    billingPostCode: '#dwfrm_shipping_shippingAddress_addressFields_postalCode',
    couponCode: '#dwfrm_coupon_couponCode',
    giftCertCode: '#dwfrm_billing_giftCertCode',
    addGiftCert: '#add-giftcert',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    shippingAddress: '.b-address > .b-address-summary',
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
    paymentMethodLayBuy: '#payment-button-LAYBUY',
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
<<<<<<< HEAD
    billingAddressCountry: '',
    billingCountryCode: '#dwfrm_billing_addressFields_states_stateCode',
=======
>>>>>>> master

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '[class*="adyen-checkout__card__exp-cvc"] > [class*="adyen-checkout__field"]:not([class*="storedCard"]) [class*="adyen-checkout__card__cvc__input"] .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
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
    paymentMethodLayBuy: '#payment-button-LAYBUY',
    shippingMethodSelector: 'p.b-summary_shipping-method > span',
    changeShippingAddress: '#checkout-main > div > div > main > section:nth-child(3) > section.b-checkout_step-item.m-summary > div > div > section:nth-child(1) > h3 > button',
    changeShippingMethod: '.m-bordered > .b-summary_group-subtitle > .b-button',
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    shippingAddress: '.b-address > .b-address-summary',
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
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '.b-form-set > .b-payment_form .adyen-checkout__field__cvc .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
  },
  'dorothyperkins.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    shippingAddress: '.b-address > .b-address-summary',
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
    paymentMethodLayBuy: '#payment-button-LAYBUY',
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
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '[class*="adyen-checkout__card__exp-cvc"] > [class*="adyen-checkout__field"]:not([class*="storedCard"]) [class*="adyen-checkout__card__cvc__input"] .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
  },
  'burton.co.uk': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK button[type="submit"]',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    shippingAddress: '.b-address > .b-address-summary',
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
    paymentMethodLayBuy: '#payment-button-LAYBUY',
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
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '[class*="adyen-checkout__card__exp-cvc"] > [class*="adyen-checkout__field"]:not([class*="storedCard"]) [class*="adyen-checkout__card__cvc__input"] .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
  },
  'wallis.co.uk': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
    klarnaPayNow:'#payment-details-KlarnaUK > div > div.b-payment_accordion-submit > div > div > button',
    shippingAddressSection: 'section[class="b-checkout_card b-summary_group-item m-full-width"]',
    shippingAddress: '.b-address > .b-address-summary',
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
    paymentMethodLayBuy: '#payment-button-LAYBUY',
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
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
  },
  'boohooman.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    shippingAddress: 'div.minicheckout-value:nth-child(3)',
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
    paymentMethodLayBuy: '[for="is-LAYBUY"]',
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

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
  },
  'karenmillen.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    shippingAddress: 'div.minicheckout-value:nth-child(3)',
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
    paymentMethodLayBuy: '[for="is-LAYBUY"]',
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

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
  },
  'coastfashion.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    shippingAddress: 'div.minicheckout-value:nth-child(3)',
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
    paymentMethodLayBuy: '[for="is-LAYBUY"]',
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

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
  },
  'warehousefashion.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    shippingAddress: 'div.minicheckout-value:nth-child(3)',
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
    paymentMethodLayBuy: '[for="is-LAYBUY"]',
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

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
  },
  'oasis-stores.com': {
    dateError: '#dwfrm_profile_customer_yearOfBirth-error',
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
    emptyEmailField: '#dwfrm_billing_contactInfoFields_email',
    addNewAddressBtn: '.b-form_section > .b-address_selector-actions > .b-address_selector-button',
    addNewAddressField: '.b-form_section > .b-address_selector-actions > .b-button',
    emptyEmailFiledError: '#dwfrm_billing_contactInfoFields_email-error',

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'.b-payment_accordion-submit > div > .b-button',
  },
  'misspap.com': {
    dateError: '#dwfrm_profile_customer_yearofbirth-error',
    klarnaPayNow:'#billingSubmitButton',
    shippingAddressSection: '.minicheckout-section',
    shippingAddress: 'div.minicheckout-value:nth-child(3)',
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
    paymentMethodLayBuy: '[for="is-LAYBUY"]',
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

    // Credit card section
    creditCardCardNumberIframe: '.adyen-checkout__field--cardNumber .js-iframe',
    creditCardFieldsCardNumber: '#encryptedCardNumber',
    creditCardExpirationDateIframe: '.adyen-checkout__field--expiryDate .js-iframe, .adyen-checkout__card__exp-date__input .js-iframe',
    creditCardFieldsExpirationDate: '#encryptedExpiryDate',
    creditCardSecurityCodeIframe: '.adyen-checkout__card__cvc__input .js-iframe',
    creditCardFieldsSecurityCode: '#encryptedSecurityCode',
    creditCardFieldsCardOwner : '.adyen-checkout__card__holderName .adyen-checkout__input, input.adyen-checkout__input',
    paynowBtnCC:'#billingSubmitButton',
  }
};

const variables = Cypress.env() as EnvironmentVariables;
class BillingPage implements AbstractPage {
  goto (): void {
    cy.visit('/checkout?step=billing');
  }

  click = {
    changeShippingAddress () {
      const changeShippingAddress = selectors[variables.brand].changeShippingAddress;
      cy.get(changeShippingAddress).click({force: true});
    },
    addNewBilingAddress () {
      const addNewBillingAddress = selectors[variables.brand].addNewBillingAddress;
      cy.get(addNewBillingAddress).click({force: true});
    },
    changeShippingMethod () {
      const changeShippingMethod = selectors[variables.brand].changeShippingMethod;
      cy.get(changeShippingMethod).click();
    },
    uncheckShippingCheckbox () {
      const shippingCheckbox = selectors[variables.brand].shippingCheckbox;
      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
        cy.get(shippingCheckbox).click();
      } else {
        cy.get(shippingCheckbox).should('be.checked').uncheck();
      }
    },
    chooseCC () {
      const paynowBtnCC = selectors[variables.brand].paynowBtnCC;
      cy.get(paynowBtnCC).click({force: true});
    }
   
  };

  actions = {
    selectDate (day: string, month: string, year: string) {
      const dobDate = selectors[variables.brand].dobDate;
      const dobMonth = selectors[variables.brand].dobMonth;
      const dobYear = selectors[variables.brand].dobYear;
      cy.get(dobDate).should('be.visible').select(day);
      cy.get(dobMonth).select(month);
      cy.get(dobYear).select(year);
      cy.get(dobYear).blur();
    },
    selectCreditCard (cardNo: string, cardOwner: string, date: string, code: string) {
      const paymentMethodCreditCard = selectors[variables.brand].paymentMethodCreditCard;

      const creditCardCardNumberIframe = selectors[variables.brand].creditCardCardNumberIframe;
      const creditCardFieldsCardNumber = selectors[variables.brand].creditCardFieldsCardNumber;
      const creditCardExpirationDateIframe = selectors[variables.brand].creditCardExpirationDateIframe;
      const creditCardFieldsExpirationDate = selectors[variables.brand].creditCardFieldsExpirationDate;
      const creditCardSecurityCodeIframe = selectors[variables.brand].creditCardSecurityCodeIframe;
      const creditCardFieldsSecurityCode = selectors[variables.brand].creditCardFieldsSecurityCode;
      const creditCardFieldsCardOwner = selectors[variables.brand].creditCardFieldsCardOwner;

      const paynowBtnCC = selectors[variables.brand].paynowBtnCC;
      cy.get(paymentMethodCreditCard).click({force: true});
      cy.wait(2000);

      cy.get('body').then($body => { // If there is saved Credit Card, click Add new Card button
        if ($body.find('[data-ref="newAdyenCardBlock"]').attr('hidden') == 'hidden') {  
          cy.get('.b-payment_options_group-actions > button').click({force:true});
        }
      });

      cy.iframe(creditCardCardNumberIframe).find(creditCardFieldsCardNumber).type(cardNo, {force:true});
      cy.iframe(creditCardExpirationDateIframe).find(creditCardFieldsExpirationDate).type(date, {force:true});
      cy.iframe(creditCardSecurityCodeIframe).find(creditCardFieldsSecurityCode).type(code, {force:true});
      cy.get(creditCardFieldsCardOwner).type(cardOwner, {force:true});
      cy.get(paynowBtnCC).click({force:true});

      if (cardNo == cards.master.cardNo) { // Adyen test simulator page appears for MasterCard
        cy.get('.adyen-checkout__iframe', { timeout: 20000 }).should('be.visible');
        cy.iframe('.adyen-checkout__iframe').find('.input-field').type('password');
        cy.iframe('.adyen-checkout__iframe').find('#buttonSubmit').click();
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
        cy.get(addNewAddressBtn).eq(0).click({force: true});
      } else if (variables.brand == 'nastygal.com' || variables.brand == 'wallis.co.uk' || variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com') {
        cy.get(addNewAddressField).click({force: true});
      }    
    },
    enterManuallyAddressDetails () {
      const enterManually = selectors[variables.brand].enterManually;
      if (variables.brand != 'coastfashion.com' && variables.brand != 'oasis-stores.com') {
        cy.get(enterManually).click({force: true});
      }
    },
    billingFirstNameField (firstName: string) {
      const billingAddressFirstName = selectors[variables.brand].billingAddressFirstName;
      cy.get(billingAddressFirstName).clear().type(firstName);
    },
    billingLastNameField (lastName: string) {
      const billingAddressLastName = selectors[variables.brand].billingAddressLastName;
      cy.get(billingAddressLastName).clear().type(lastName);
    },
    addBillingAddressGuestUser (line1: string, city: string, state: string, countryCode: string) {
      const billingAddressFieldsAddress1 = selectors[variables.brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[variables.brand].billingAddressFieldCity;
      const billingAddressFieldsStateCode = selectors[variables.brand].billingAddressFieldsStateCode;
      const billingCountryCode = selectors[variables.brand].billingCountryCode;
      this.enterManuallyAddressDetails ();
      cy.get(billingAddressFieldsAddress1).clear().type(line1);
      cy.get(billingAddressFieldCity).clear({force: true}).type(city);
      if (variables.locale == 'AU') {
        cy.get(billingAddressFieldsStateCode).select(state);
      } 
      if (variables.locale == 'IE') {
        cy.get(billingCountryCode).select(countryCode);
      }

      // Cy.get(billingPostCode).should('be.visible').type(postcode);
    },
    addBillingAddressRegisteredUser (line1: string, city: string, postcode: string) {
      const billingAddressFieldsAddress1 = selectors[variables.brand].billingAddressFieldsAddress1;
      const billingAddressFieldCity = selectors[variables.brand].billingAddressFieldCity;
      const billingPostCode = selectors[variables.brand].billingPostCode;
      this.enterManuallyAddressDetails ();
      cy.get(billingAddressFieldsAddress1).clear().type(line1);
      cy.get(billingAddressFieldCity).clear().type(city);

      // Cy.get(billingPostCode).clear().type(postcode);
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
      const viewAllBillingAddresses = selectors[variables.brand].viewAllBillingAddresses;
      const billingAddressFromBook = selectors[variables.brand].billingAddressFromBook;
      cy.get(viewAllBillingAddresses).click({force: true});
      cy.get(billingAddressFromBook).click({force: true});
    },
    selectKlarna () {
      const paymentMethodKlarna = selectors[variables.brand].paymentMethodKlarna;
      cy.get(paymentMethodKlarna).click({force:true});
      cy.wait(5000);
      
      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });
      
      // Click on PayNow.
      const klarnaPayNow = selectors[variables.brand].klarnaPayNow;
      if (variables.locale == 'AU') {
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
          if ($body.find('#pay_now-pay_now').length) { // If Payment options popup exists select Pay now
            body().find('#pay_now-pay_now').click();
            body().find('button[data-testid="select-payment-category"]').click();
            cy.wait(5000);
          }
        });
        
        body().then($body => {
          const continueButtonLocator= (variables.brand == 'nastygal.com') ? '[data-cid="btn-primary"]' : 'button[data-testid="pick-plan"]';
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

        const payButtonLocator = (variables.brand == 'nastygal.com') ? 'button[id*="purchase-review-continue-button"]' : '[testid="confirm-and-pay"]';
        body().find(payButtonLocator).click({force:true});

        body().then($body => {

          // Cy.wait(1000);
          if ($body.find('#dialog [data-testid="PushFavoritePayment:skip-favorite-selection"]').length) { // If Skip and continue button exists
            body().find('#dialog [data-testid="PushFavoritePayment:skip-favorite-selection"]').click({force:true});
          }
        });
      });
    },

    selectPayPal () {
      const paymentMethodPayPal = selectors[variables.brand].paymentMethodPayPal;
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
    selectLaybuy () {
      cy.wait(5000);
      if (variables.brand == 'oasis-stores.com' || variables.brand == 'coastfashion.com') {
        cy.get('[for="is-LAYBUY"]', { timeout: 30000 }).should('be.visible').click({ force: true });
        cy.get('#billingSubmitButton', { timeout: 30000 }).click({ force: true });
      } else {
        cy.get('#payment-button-LAYBUY', { timeout: 30000 }).should('be.visible').click({ force: true });
        cy.get('#payment-details-LAYBUY > .b-payment_accordion-content_inner > .b-payment_accordion-submit > .b-checkout_step-controls > div > .b-button', { timeout: 30000 }).click();
      }
      cy.get('.sc-himrzO', { timeout: 30000 }).click();
      cy.get('input[type="email"]', { timeout: 30000 }).clear().type('euboohoo+uklaybuy@gmail.com');
      cy.get('input[type="password"]', { timeout: 30000 }).clear().type('Boohoo123$');
      cy.get('button[type="submit"]', { timeout: 30000 }).click();
      cy.get('button[data-test-id="payment-complete-order-button"]', { timeout: 60000 }).should('not.have.attr', 'disabled');
      cy.get('button[data-test-id="payment-complete-order-button"]').click();
    },
    selectClearpay () {
      if (variables.brand == 'oasis-stores.com' || variables.brand == 'coastfashion.com') {
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
    assertBillingPageIsLoaded () {

      // Wait for payment methods to load on a page - that indicates the billing page is fully loaded
      if (variables.brand == 'nastygal.com') {
        cy.intercept('https://checkoutshopper-test.adyen.com/checkoutshopper/assets/html/**').as('paymentMethodsSection');
      } else {
        cy.intercept(/checkoutshopper\/assets\/html/).as('paymentMethodsSection');
      }
      cy.wait('@paymentMethodsSection', { timeout: 20000 }).its('response.statusCode').should('eq', 200);
      cy.wait(1000);
    },
    assertShippingAddressPresent () {
      const shippingAddressSection = selectors[variables.brand].shippingAddressSection;
      cy.get(shippingAddressSection).should('be.visible').and('not.be.empty');
    },
    assertNewShippingAddress (addressline1: string) {
      const shippingAddress = selectors[variables.brand].shippingAddress;
      cy.get(shippingAddress).should('contain.text', addressline1);
    },
    assertShippingMethodPresent (shippingMethod: string) {
      const shippingMethodSelector = selectors[variables.brand].shippingMethodSelector;
      cy.get(shippingMethodSelector).should('be.visible').and('include.text', shippingMethod.trim());
    },
    assertEmailIsCorrect (email: string) {
      cy.get('input[id="dwfrm_billing_contactInfoFields_email"]').should('have.value', email);
    },
    assertSubscriptionBlockPresent () {
      cy.get('div[class="b-create_account_form-subscription"]').should('be.visible');
    },
    assertDateFormIsPresent () {
      const dobForm = selectors[variables.brand].dobForm;
      cy.get(dobForm).should('be.visible');
    },
    assertDateIsSelected (day: string, month: string, year: string) {
      const dobDate = selectors[variables.brand].dobDate;
      const dobMonth = selectors[variables.brand].dobMonth;
      const dobYear = selectors[variables.brand].dobYear;
      cy.get(dobDate).should('have.have.value', day);
      cy.get(dobMonth).should('have.value', month);
      cy.get(dobYear).should('have.value', year);
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
      const shippingCheckbox = selectors[variables.brand].shippingCheckbox;
      if (variables.brand == 'coastfashion.com') {
        cy.get(shippingCheckbox).should('have.class', 'is-checked');
      } else {
        cy.get(shippingCheckbox).should('be.checked');
      }
    },
    assertBillingAddressFormIsPresent () {
      const billingForm = selectors[variables.brand].billingForm;
      cy.get(billingForm).should('be.visible');
    },
    assertNewBillingAddress (address: string) {
      const newBillingAddressForm = selectors[variables.brand].newBillingAddressForm;
      cy.get(newBillingAddressForm).should('be.visible').and('include.text', address);
    },
    assertGiftCertificateFormIsPresent () {
      if (variables.brand != 'coastfashion.com') {
        cy.get('button[data-event-click="showGiftCertificateForm"]').should('be.visible');
      }
    },
    assertPaymentMethodCreditCardIsDisplayed () {
      const paymentMethodCreditCard = selectors[variables.brand].paymentMethodCreditCard;
      cy.get(paymentMethodCreditCard).should('be.visible');
    },
    assertPaymentMethodGooglePayIsDisplayed () {
      const paymentMethodGooglePay = selectors[variables.brand].paymentMethodGooglePay;
      cy.get(paymentMethodGooglePay).should('be.visible');
    },
    assertPaymentMethodPayPalIsDisplayed () {
      const paymentMethodPayPal = selectors[variables.brand].paymentMethodPayPal;
      cy.get(paymentMethodPayPal).should('be.visible');
    },
    assertPaymentMethodKlarnaIsDisplayed () {
      const paymentMethodKlarna = selectors[variables.brand].paymentMethodKlarna;
      if (variables.locale == 'AU') {
        cy.get('#payment-button-KlarnaAU').should('be.visible');
      } else {
        cy.get(paymentMethodKlarna).should('be.visible');
      }
    },
      
    assertPaymentMethodClearPayIsDisplayed () {
      const paymentMethodClearPay = selectors[variables.brand].paymentMethodClearPay;
      if (variables.locale == 'AU' || variables.locale == 'US') {
        cy.get('#payment-button-AFTERPAY').should('be.visible');
      } else {
        cy.get(paymentMethodClearPay).should('be.visible');
      }
      
    }, 
    assertPaymentMethodAmazonPayIsDisplayed () {
      const paymentMethodAmazonPay = selectors[variables.brand].paymentMethodAmazonPay;
      cy.get(paymentMethodAmazonPay).should('be.visible');
    },
    assertPaymentMethodLayBuyIsDisplayed () {
      const paymentMethodLayBuy = selectors[variables.brand].paymentMethodLayBuy;
      cy.get(paymentMethodLayBuy).should('be.visible');
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
      if (variables.brand == 'wallis.co.uk' || variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com') {
        cy.url({timeout: 30000}).should('include', 'orderconfirmation');
      } else if (variables.brand == 'coastfashion.com') {
        cy.url({timeout: 30000}).should('include', 'checkout-confirmation');
      } else {
        cy.url({timeout: 30000}).should('include', 'Order-Confirm');
      }     
    },
    assertEmailFieldCantBeChanged () {
      cy.get('#dwfrm_billing_contactInfoFields_email').should('have.attr', 'disabled');
    }
  };
}

export default new BillingPage();

