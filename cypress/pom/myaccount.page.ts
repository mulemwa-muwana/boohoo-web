import { isSiteGenesisBrand } from 'cypress/helpers/common';
import { brand, locale, url } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import shippingPage from './shipping.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    accountLogout: 'a[data-tau="account_signout"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: 'a[data-tau="navigation_orderHistory"]',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[data-tau="navigation_addressList"]',
    paymentDetails: 'a[data-tau="navigation_paymentDetails"]',
    viewOrderBtn: 'a[data-tau="account_viewOrder"]:eq(1)',
    viewOrderBtnMobile:'.b-account_dashboard > .b-card > .b-card-body > .b-order_item > .b-order_item-buttons',
    socialAccounts: '.m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
    addressCardsList: 'section[class^="b-cards_grid-item "]',
    addressDefaultBox: 'section[data-tau="address_book_item_default"]',
    addressEditBtn: '.b-cards_grid-header > .b-button',
    addressEditForm: '.l-account_main-section',
    addressField: '#dwfrm_address_address1',
    addressSubmitBtn: 'button[data-tau="address_submit"]',
    addAddressBtn: 'a[data-tau="address_book_addNewAddress"]',
    addressFirstNameField: '#dwfrm_address_firstName',
    addressLastNameField: '#dwfrm_address_lastName',
    addressPhoneNumberField: '#dwfrm_address_phone',
    addressCityField: '#dwfrm_address_city',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressStateCode: '#dwfrm_address_states_stateCode',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    addressDeleteConfirmationBtn: 'button[data-tau="dialog_delete_address_confirm"]',
    creditCardsList: '.b-cards_grid',
    addCreditCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCardEditForm: '.l-account_main-section',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardOwnerUS:"input[id='dwfrm_creditCard_cardOwner']",
    addCreditCardNumber:"[data-fieldtype='encryptedCardNumber']",
    addCreditCardNumberUS:"input[id='dwfrm_creditCard_cardNumber']",
    addCreditCardExpDate: "[data-fieldtype='encryptedExpiryDate']",
    addCreditCardExpMonthUS: '#dwfrm_creditCard_expirationMonth',
    addCreditCardExpYearUS: '#dwfrm_creditCard_expirationYear',
    addCreditCardSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    creditCardSection: '.b-cards_grid section',
    creditCardDeleteBtn: '.b-cards_grid-footer > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
    newestOrderHistory: '[data-tau="account_viewOrder"]',
    orderID: '.b-account-title',
    shippingInfo: 'div.b-summary_group:nth-child(1)',
    billingAndPaymentInfo: 'div.b-summary_group:nth-child(2)',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: 'a[class="b-account_nav-item_link m-user"]',
    orderHistoryLink: 'a[class="b-account_nav-item_link m-history"]',
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]',
    addressCards:'[data-tau="address_book_item"]',
    addressDeleteButton:'[data-tau="address_book_delete"]',
    twitterLink: '.m-twitter',
    facebookLink: '.m-facebook',
    footerQuickLinks: '.l-footer-quick',
    mainAccountsection: '.l-account-main',
    countryField: '#dwfrm_profile_address_country',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCardCVCIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addressVarifyButton: '.verification-address-button'
  },
  'nastygal.com': {
    accountLogout: 'a[data-tau="account_signout"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: ':nth-child(2) > .b-account_nav-item_link > .b-account_nav-item_label',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[data-tau="navigation_addressList"]',
    paymentDetails: 'a[data-tau="navigation_paymentDetails"]',
    viewOrderBtn: 'a[data-tau="account_viewOrder"]',
    socialAccounts: '.m-happySmile',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
    addressCardsList: 'section[class^="b-cards_grid-item "]',
    addressDefaultBox: 'section[data-tau="address_book_item_default"]',
    addressEditBtn: 'a[data-tau="address_book_edit"]',
    addressEditForm: '.l-account_main-section',
    addressField: '#dwfrm_address_address1',
    addressSubmitBtn: 'button[data-tau="address_submit"]',
    addAddressBtn: 'a[data-tau="address_book_addNewAddress"]',
    addressFirstNameField: '#dwfrm_address_firstName',
    addressLastNameField: '#dwfrm_address_lastName',
    addressPhoneNumberField: '#dwfrm_address_phone',
    addressCityField: '#dwfrm_address_city',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressStateCode: '#dwfrm_address_states_stateCode',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    creditCardsList: '.b-cards_grid',
    addCreditCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCreditCardNumberUS:"input[id='dwfrm_creditCard_cardNumber']",
    addCardEditForm: '.l-account_main-section',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardOwnerUS:"input[id='dwfrm_creditCard_cardOwner']",
    addCreditCardNumber:"[data-fieldtype='encryptedCardNumber']",
    addCreditCardExpDate: "[data-fieldtype='encryptedExpiryDate']",
    addCreditCardExpMonthUS: '#dwfrm_creditCard_expirationMonth',
    addCreditCardExpYearUS: '#dwfrm_creditCard_expirationYear',
    addCreditCardSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    creditCardSection: '.b-cards_grid section',
    creditCardDeleteBtn: '.b-cards_grid-footer > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
    addressDeleteConfirmationBtn: 'button[data-tau="dialog_delete_address_confirm"]',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    billingAndPaymentInfo: 'section.l-account_main-section:nth-child(4)',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: '#lastOrderPanel > .b-card > .b-card-footer > .b-card-button',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: 'a[class="b-account_nav-item_link m-user"]',
    addressEnterManualyBtn: '.b-form_section>button',
    orderHistoryLink: 'a[class="b-account_nav-item_link m-history"]',
    newestOrderHistory: '[data-tau="account_viewOrder"]',
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]',
    addressCards:'[data-tau="address_book_item"]',
    addressDeleteButton:'[data-tau="address_book_delete"]',
    twitterLink: '.m-twitter',
    facebookLink: '.m-facebook',
    footerQuickLinks: '.l-footer-quick',
    mainAccountsection: '.l-account-main',
    countryField: '#dwfrm_profile_address_country',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCardCVCIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addressVarifyButton: '.verification-address-button'
  },
  'dorothyperkins.com': {
    accountLogout: 'a[data-tau="account_signout"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: '.m-active > .b-account_nav-item_link > .b-account_nav-item_label',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[data-tau="navigation_addressList"]',
    paymentDetails: 'a[data-tau="navigation_paymentDetails"]',
    viewOrderBtn: '.m-view_order',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
    addressCardsList: 'section[class^="b-cards_grid-item "]',
    addressDefaultBox: 'section[data-tau="address_book_item_default"]',
    addressEditBtn: 'a[data-tau="address_book_edit"]',
    addressEditForm: '.l-account_main-section',
    addressField: '#dwfrm_address_address1',
    addressSubmitBtn: 'button[data-tau="address_submit"]',
    addAddressBtn: 'a[data-tau="address_book_addNewAddress"]',
    addressFirstNameField: '#dwfrm_address_firstName',
    addressLastNameField: '#dwfrm_address_lastName',
    addressPhoneNumberField: '#dwfrm_address_phone',
    addressCityField: '#dwfrm_address_city',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressEnterManualyBtn: '.b-address_lookup > .b-button',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    creditCardsList: '.b-cards_grid',
    addCreditCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCardEditForm: '.l-account_main-section',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardNumber:"[data-fieldtype='encryptedCardNumber']",
    addCreditCardExpDate: "[data-fieldtype='encryptedExpiryDate']",
    addCreditCardSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    creditCardSection: '.b-cards_grid section',
    creditCardDeleteBtn: '.b-cards_grid-footer > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
    newestOrderHistory: '[data-tau="account_viewOrder"]',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    billingAndPaymentInfo: 'section.l-account_main-section:nth-child(4)',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: '#lastOrderPanel > .b-card > .b-card-footer > .b-card-button',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: 'a[class="b-account_nav-item_link m-user"]',
    orderHistoryLink: 'a[class="b-account_nav-item_link m-history"]',
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]',
    addressCards:'[data-tau="address_book_item"]',
    addressDeleteButton:'[data-tau="address_book_delete"]',
  },
  'burton.co.uk': {
    accountLogout: 'a[data-tau="account_signout"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: '.m-active > .b-account_nav-item_link > .b-account_nav-item_label',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[data-tau="navigation_addressList"]',
    paymentDetails: 'a[data-tau="navigation_paymentDetails"]',
    viewOrderBtn: '.m-view_order',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
    addressCardsList: 'section[class^="b-cards_grid-item "]',
    addressDefaultBox: 'section[data-tau="address_book_item_default"]',
    addressEditBtn: 'a[data-tau="address_book_edit"]',
    addressEditForm: '.l-account_main-section',
    addressField: '#dwfrm_address_address1',
    addressSubmitBtn: 'button[data-tau="address_submit"]',
    addAddressBtn: 'a[data-tau="address_book_addNewAddress"]',
    addressFirstNameField: '#dwfrm_address_firstName',
    addressLastNameField: '#dwfrm_address_lastName',
    addressPhoneNumberField: '#dwfrm_address_phone',
    addressCityField: '#dwfrm_address_city',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressEnterManualyBtn: '.b-address_lookup > .b-button',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    addressDeleteConfirmationBtn: 'button[data-tau="dialog_delete_address_confirm"]',
    creditCardsList: '.b-cards_grid',
    addCreditCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCardEditForm: '.l-account_main-section',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardNumber:"[data-fieldtype='encryptedCardNumber']",
    addCreditCardExpDate: "[data-fieldtype='encryptedExpiryDate']",
    addCreditCardSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    creditCardSection: '.b-cards_grid section',
    creditCardDeleteBtn: '.b-cards_grid-footer > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
    newestOrderHistory: '[data-tau="account_viewOrder"]',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    billingAndPaymentInfo: 'section.l-account_main-section:nth-child(4)',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: '#lastOrderPanel > .b-card > .b-card-footer > .b-card-button',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: 'a[class="b-account_nav-item_link m-user"]',
    orderHistoryLink: 'a[class="b-account_nav-item_link m-history"]',
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]',
    addressCards:'[data-tau="address_book_item"]',
    addressDeleteButton:'[data-tau="address_book_delete"]',
  },
  'wallis.co.uk': {
    accountLogout: 'a[data-tau="account_signout"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: '.m-active > .b-account_nav-item_link > .b-account_nav-item_label',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[data-tau="navigation_addressList"]',
    paymentDetails: 'a[data-tau="navigation_paymentDetails"]',
    viewOrderBtn: '.m-view_order',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
    addressCardsList: 'section[class^="b-cards_grid-item "]',
    addressDefaultBox: 'section[data-tau="address_book_item_default"]',
    addressEditBtn: 'a[data-tau="address_book_edit"]',
    addressEditForm: '.l-account_main-section',
    addressField: '#dwfrm_address_address1',
    addressSubmitBtn: 'button[data-tau="address_submit"]',
    addAddressBtn: 'a[data-tau="address_book_addNewAddress"]',
    addressFirstNameField: '#dwfrm_address_firstName',
    addressLastNameField: '#dwfrm_address_lastName',
    addressPhoneNumberField: '#dwfrm_address_phone',
    addressCityField: '#dwfrm_address_city',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    addressDeleteConfirmationBtn: 'button[data-tau="dialog_delete_address_confirm"]',
    creditCardsList: '.b-cards_grid',
    addCreditCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCardEditForm: '.l-account_main-section',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardNumber:"[data-fieldtype='encryptedCardNumber']",
    addCreditCardExpDate: "[data-fieldtype='encryptedExpiryDate']",
    addCreditCardSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    creditCardSection: '.b-cards_grid section',
    creditCardDeleteBtn: '.b-cards_grid-footer > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
    newestOrderHistory: '[data-tau="account_viewOrder"]',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    billingAndPaymentInfo: 'section.l-account_main-section:nth-child(3)',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: '#lastOrderPanel > .b-card > .b-card-footer > .b-card-button',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: 'a[class="b-account_nav-item_link m-user"]',
    addressEnterManualyBtn: '.b-address_lookup > .b-button',
    orderHistoryLink: 'a[class="b-account_nav-item_link m-history"]',
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]',
    addressCards:'[data-tau="address_book_item"]',
    addressDeleteButton:'[data-tau="address_book_delete"]',
  },
  'boohooman.com': {
    accountLogout: '.button.simple.js-logout',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: 'a[data-tau="navigation_orderHistory"]',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    accountDetailsDE: 'a[title="Persönliche Angaben anzeigen oder aktualisieren"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[title*="addresses"][href*="addresses"]',
    accountAddressesDE: 'a[title="Rechnungs- und Lieferadressen verwalten"]',
    paymentDetails: 'a[title$="credit cards"]',
    paymentDetailsDE: 'a[title="Kreditkarten verwalten"]',
    viewOrderBtn: 'a[data-tau="orders_viewOrder"]',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: '.js-update-details button[type="submit"]',
    addressCardsList: '.address-list-item',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '#edit-address-form',
    addressField: '#dwfrm_profile_address_address1',
    addressSubmitBtn: '.apply-button',
    addAddressBtn: '.address-create',
    addressFirstNameField: '#dwfrm_profile_address_firstname',
    addressLastNameField: '#dwfrm_profile_address_lastname',
    addressPhoneNumberField: '#dwfrm_profile_address_phone',
    addressCityField: '#dwfrm_profile_address_city',
    addressPostalCodeField: '#dwfrm_profile_address_postalcodes_postal',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    proceedToBillingBtn: '.verification-address-button-container .verification-address-button',
    addressDeleteBtn: '.address-delete-link',
    creditCardsList: '.account-payments',
    addCreditCardBtn: '.add-card',
    addCardEditForm: '#CreditCardForm',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardNumber:"[data-fieldtype='encryptedCardNumber']",
    addCreditCardExpDate: "[data-fieldtype='encryptedExpiryDate']",
    addCreditCardSecurityCode: "[data-fieldtype='encryptedSecurityCode']",
    addCreditCardSaveBtn: '#add-card-submit',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    newestOrderHistory: 'li.order-history-item:nth-child(1) button',
    orderID: '.orderdetails-header-number',
    shippingInfo: '.orderdetails-shipment-details',
    billingAndPaymentInfo: '.orderdetails-summary-wrapper',
    accountDetailsEmailField: '.account-email',
    nameGreeting: '.account-welcome-title',
    accountEditedSuccessfulPopup: '#js-accounteditsuccessfull-container',
    addressNameLine: '.mini-address-name',
    addressSummaryLine: '.mini-address-location-group',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: '.account-nav-content [title*="personal information"]',
    accountDetailsLinkDE: 'a[title="Persönliche Angaben anzeigen oder aktualisieren"]',
    orderHistoryLink: 'a[href*="order-history"]',
    viewNewestOrderDetails: 'button[class="order-details-btn"]',
    addressCards:'.account-page-list-inner',
    addressDeleteButton:'[class="address-delete-link js-address-delete"]',
    addressStateCode: '#dwfrm_profile_address_states_state',
    secondaryNavSiteGenisis: '.secondary-navigation',
    countryField: '#dwfrm_profile_address_country',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCardCVCIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addressVarifyButton: '.verification-address-button'
  },
  'karenmillen.com': {
    accountLogout: 'a[title="Log out"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: 'a[data-tau="navigation_orderHistory"]',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[title*="addresses"][href*="addresses"]',
    paymentDetails: 'a[title$="credit cards"]',
    viewOrderBtn: 'a[data-tau="orders_viewOrder"]',
    socialAccounts: '.m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: '.js-update-details button[value="Update"]',
    addressCardsList: '.address-list-item',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '.edit-address > .account-page-title',
    addressField: '#dwfrm_profile_address_address1',
    addressSubmitBtn: '.apply-button',
    addAddressBtn: '.address-create',
    addressFirstNameField: '#dwfrm_profile_address_firstname',
    addressLastNameField: '#dwfrm_profile_address_lastname',
    addressPhoneNumberField: '#dwfrm_profile_address_phone',
    addressCityField: '#dwfrm_profile_address_city',
    addressPostalCodeField: '#dwfrm_profile_address_postalcodes_postal',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    proceedToBillingBtn: '.verification-address-button-container .verification-address-button',
    addressDeleteBtn: '.address-delete-link',
    creditCardsList: '.account-payments',
    addCreditCardBtn: '.add-card',
    addCardEditForm: '.account-wrapper > .account-page-title',
    addCreditCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    addCreditCardNumberUS:'#cc_cardNumber',
    addCreditCardOwner: '[id^="adyen-checkout-holderName"]',
    addCreditCardOwnerUS:'#dwfrm_paymentinstruments_creditcards_newcreditcard_owner',
    addCreditCardExpDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    addCreditCardExpDateUS: '#cc_expDate',
    addCreditCardSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    addCreditCardSaveBtn: '#add-card-submit',
    addCreditCardSaveBtnUS: '#applyBtn',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    orderID: '.orderdetails-header-number',
    shippingInfo: '.orderdetails-shipment-details',
    billingAndPaymentInfo: '.orderdetails-summary-wrapper',
    accountDetailsEmailField: '.account-box-item.account-email',
    nameGreeting: '.account-welcome-title',
    accountEditedSuccessfulPopup: '#js-accounteditsuccessfull-container',
    addressNameLine: '.mini-address-name',
    addressSummaryLine: '.mini-address-location-group',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: '.account-nav-content [title*="personal information"]',
    orderHistoryLink: '[title="Order History"]',
    viewNewestOrderDetails: 'button[class="order-details-btn"]',
    addressCards:'.account-page-list-inner',
    addressDeleteButton:'[class="address-delete-link js-address-delete"]',
    addressStateCode: '#dwfrm_profile_address_states_state',
    secondaryNavSiteGenisis: '.secondary-navigation',
    countryField: '#dwfrm_profile_address_country',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCardCVCIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addressVarifyButton: '.verification-address-button'
  },
  'coastfashion.com': {
    accountLogout: 'a[title="Log out"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: 'a[data-tau="navigation_orderHistory"]',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[title*="addresses"][href*="addresses"]',
    paymentDetails: 'a[title$="credit cards"]',
    viewOrderBtn: 'a[data-tau="orders_viewOrder"]',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: '.js-update-details button[value="Update"]',
    addressCardsList: 'li[class^="account-page-list-item"]',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '.js-verification-address-wrapper',
    addressField: '#dwfrm_profile_address_address1',
    addressSubmitBtn: '.apply-button',
    addAddressBtn: '.address-create',
    addressFirstNameField: '#dwfrm_profile_address_firstname',
    addressLastNameField: '#dwfrm_profile_address_lastname',
    addressPhoneNumberField: '#dwfrm_profile_address_phone',
    addressCityField: '#dwfrm_profile_address_city',
    addressPostalCodeField: '#dwfrm_profile_address_postalcodes_postal',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    proceedToBillingBtn: '.verification-address-button-container .verification-address-button',
    addressDeleteBtn: '.address-delete-link',
    creditCardsList: '.account-payments',
    addCreditCardBtn: '.add-card',
    addCardEditForm: '#CreditCardForm',
    addCreditCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    addCreditCardOwner: '[id^="adyen-checkout-holderName"]',
    addCreditCardExpDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    addCreditCardSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    addCreditCardSaveBtn: '#add-card-submit',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    newestOrderHistory: 'li.order-history-item:nth-child(1) button',
    orderID: '.orderdetails-header-number',
    shippingInfo: '.orderdetails-shipment-details',
    billingAndPaymentInfo: '.orderdetails-summary-wrapper',
    accountDetailsEmailField: '.account-email',
    nameGreeting: '.account-welcome-title',
    accountEditedSuccessfulPopup: '#js-accounteditsuccessfull-container',
    addressNameLine: '.mini-address-name',
    addressSummaryLine: '.mini-address-location-group',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: '.account-nav-content [title*="personal information"]',
    orderHistoryLink: '[title="Order History"]',
    viewNewestOrderDetails: 'button[class="order-details-btn"]',
    addressCards:'.account-page-list-inner',
    addressDeleteButton:'[class="address-delete-link js-address-delete"]',
  },
  'warehousefashion.com': {
    accountLogout: 'a[title="Log out"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: 'a[data-tau="navigation_orderHistory"]',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[title*="addresses"][href*="addresses"]',
    paymentDetails: 'a[title$="credit cards"]',
    viewOrderBtn: 'a[data-tau="orders_viewOrder"]',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: '.js-update-details button[value="Update"]',
    addressCardsList: '.address-list-item',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '#edit-address-form',
    addressField: '#dwfrm_profile_address_address1',
    addressSubmitBtn: '.apply-button',
    addAddressBtn: '.address-create',
    addressFirstNameField: '#dwfrm_profile_address_firstname',
    addressLastNameField: '#dwfrm_profile_address_lastname',
    addressPhoneNumberField: '#dwfrm_profile_address_phone',
    addressCityField: '#dwfrm_profile_address_city',
    addressPostalCodeField: '#dwfrm_profile_address_postalcodes_postal',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    proceedToBillingBtn: '.verification-address-button-container .verification-address-button',
    addressDeleteBtn: '.address-delete-link',
    creditCardsList: '.account-payments',
    addCreditCardBtn: '.add-card',
    addCardEditForm: '#CreditCardForm',
    addCreditCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    addCreditCardOwner: '[id^="adyen-checkout-holderName"]',
    addCreditCardExpDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    addCreditCardSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    addCreditCardSaveBtn: '#add-card-submit',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    newestOrderHistory: 'li.order-history-item:nth-child(1) button',
    orderID: '.orderdetails-header-number',
    shippingInfo: '.orderdetails-shipment-details',
    billingAndPaymentInfo: '.orderdetails-summary-wrapper',
    accountDetailsEmailField: '.account-details > .account-box-content > .account-box-item',
    nameGreeting: '.account-welcome-title',
    accountEditedSuccessfulPopup: '#js-accounteditsuccessfull-container',
    addressNameLine: '.mini-address-name',
    addressSummaryLine: '.mini-address-location-group',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: '.account-nav-content [title*="personal information"]',
    orderHistoryLink: '[title="Order History"]',
    viewNewestOrderDetails: 'button[class="order-details-btn"]',
    addressCards:'.account-page-list-inner',
    addressDeleteButton:'[class="address-delete-link js-address-delete"]',
    addressStateCode:'#dwfrm_profile_address_states_state'
  },
  'oasis-stores.com': {
    accountLogout: 'a[title="Log out"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: 'a[data-tau="navigation_orderHistory"]',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[title*="addresses"][href*="addresses"]',
    paymentDetails: 'a[title$="credit cards"]',
    viewOrderBtn: 'a[data-tau="orders_viewOrder"]',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: '.js-update-details button[value="Update"]',
    addressCardsList: '.address-list-item',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '.js-verification-address-wrapper',
    addressField: '#dwfrm_profile_address_address1',
    addressSubmitBtn: '.apply-button',
    addAddressBtn: '.address-create',
    addressFirstNameField: '#dwfrm_profile_address_firstname',
    addressLastNameField: '#dwfrm_profile_address_lastname',
    addressPhoneNumberField: '#dwfrm_profile_address_phone',
    addressCityField: '#dwfrm_profile_address_city',
    addressPostalCodeField: '#dwfrm_profile_address_postalcodes_postal',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    proceedToBillingBtn: '.verification-address-button-container .verification-address-button',
    addressDeleteBtn: '.address-delete-link',
    creditCardsList: '.account-payments',
    addCreditCardBtn: '.add-card',
    addCardEditForm: '#CreditCardForm',
    addCreditCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    addCreditCardOwner: '[id^="adyen-checkout-holderName"]',
    addCreditCardExpDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    addCreditCardSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    addCreditCardSaveBtn: '#add-card-submit',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    newestOrderHistory: 'li.order-history-item:nth-child(1) button',
    orderID: '.orderdetails-header-number',
    shippingInfo: '.orderdetails-shipment-details',
    billingAndPaymentInfo: '.orderdetails-summary-wrapper',
    accountDetailsEmailField: '.account-email',
    nameGreeting: '.account-welcome-title',
    accountEditedSuccessfulPopup: '#js-accounteditsuccessfull-container',
    addressNameLine: '.mini-address-name',
    addressSummaryLine: '.mini-address-location-group',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: '.account-nav-content [title*="personal information"]',
    orderHistoryLink: '[title="Order History"]',
    viewNewestOrderDetails: 'button[class="order-details-btn"]',
    addressCards:'.account-page-list-inner',
    addressDeleteButton:'[class="address-delete-link js-address-delete"]'
  },
  'misspap.com': {
    accountLogout: '.account-logout > .button',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: 'a[data-tau="navigation_orderHistory"]',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[title*="addresses"][href*="addresses"]',
    paymentDetails: 'a[title$="credit cards"]',
    viewOrderBtn: '#primary > div > div.account-box.account-order-history.clearfix.fright > h3 > a',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: '.js-update-details button[value="Update"]',
    addressCardsList: '.address-list-item',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '#edit-address-form',
    addressField: '#dwfrm_profile_address_address1',
    addressSubmitBtn: '.apply-button',
    addAddressBtn: '.address-create',
    addressFirstNameField: '#dwfrm_profile_address_firstname',
    addressLastNameField: '#dwfrm_profile_address_lastname',
    addressPhoneNumberField: '#dwfrm_profile_address_phone',
    addressCityField: '#dwfrm_profile_address_city',
    addressPostalCodeField: '#dwfrm_profile_address_postalcodes_postal',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    addressStateCode:'#dwfrm_profile_address_states_state',
    proceedToBillingBtn: '.verification-address-button-container .verification-address-button',
    verificationAddressBtn:'.verification-address-button',
    addressDeleteBtn: '.address-delete-link',
    creditCardsList: '.account-payments',
    addCreditCardNumberUS:'#cc_cardNumber',
    addCreditCardOwnerUS: '#dwfrm_paymentinstruments_creditcards_newcreditcard_owner',
    addCreditCardBtn: '.add-card',
    addCreditCardExpDateUS: '#cc_expDate',
    addCreditCardSaveBtnUS: '#applyBtn',
    addCreditCardNumber: '[id^="adyen-checkout-encryptedCardNumber"]',
    addCreditCardOwner: '[id^="adyen-checkout-holderName"]',
    addCreditCardExpDate: '[id^="adyen-checkout-encryptedExpiryDate"]',
    addCreditCardSecurityCode: '[id^="adyen-checkout-encryptedSecurityCode"]',
    addCreditCardSaveBtn: '#add-card-submit',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    orderID: '.orderdetails-header-number',
    shippingInfo: '.orderdetails-shipment-details',
    billingAndPaymentInfo: '.orderdetails-summary-wrapper',
    accountDetailsEmailField: '.account-details > .account-box-content > .account-box-item',
    nameGreeting: '.account-welcome-title',
    accountEditedSuccessfulPopup: '#js-accounteditsuccessfull-container',
    addressNameLine: '.mini-address-name',
    addressSummaryLine: '.mini-address-location-group',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: '.account-nav-content [title*="personal information"]',
    orderHistoryLink: '[title="Order History"]',
    newestOrderHistory: '[data-tau="account_viewOrder"]',
    viewNewestOrderDetails: 'button[class="order-details-btn"]',
    addCardEditForm: '.account-wrapper',
    addressCards:'.account-page-list-inner',
    addressDeleteButton:'[class="address-delete-link js-address-delete"]',
    secondaryNavSiteGenisis: '.secondary-navigation',
    countryField: '#dwfrm_profile_address_country',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCardCVCIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addressVarifyButton: '.verification-address-button'
  },
  'boohoomena.com': {
    accountLogout: 'a[title="Log out"]',
    myAccountBtn: 'a[data-tau="navigation_accountOverview"]',
    ordersLink: 'a[data-tau="navigation_orderHistory"]',
    wishListBtn: 'a[data-tau="navigation_wishlistShow"]',
    accountDetails: 'a[data-tau="navigation_editProfile"]',
    changePassword: 'a[data-tau="navigation_passwordChange"]',
    contactPreferences: 'a[data-tau="navigation_contactPreferences"]',
    accountAddresses: 'a[title*="addresses"][href*="addresses"]',
    paymentDetails: 'a[title$="credit cards"]',
    viewOrderBtn: 'a[data-tau="orders_viewOrder"]',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: '.js-update-details button[value="Update"]',
    addressCardsList: '.address-list-item',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressDefaultlinkCTA: 'div [class="address-make-default-link"]',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '#primary > .edit-address',
    addressField: '#dwfrm_profile_address_address1',
    addressSubmitBtn: '.apply-button',
    addAddressBtn: '.address-create',
    addressFirstNameField: '#dwfrm_profile_address_firstname',
    addressLastNameField: '#dwfrm_profile_address_lastname',
    addressPhoneCode: '#dwfrm_phonedetails_phonecode',
    addressPhoneNumberField: '#dwfrm_phonedetails_phonenumber',
    addressCityField: '#dwfrm_profile_address_city',
    addressPostalCodeField: '#dwfrm_profile_address_postalcodes_postal',
    addressStateCode: '#dwfrm_profile_address_states_state',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressNicknameField: '#dwfrm_profile_address_addressid',
    proceedToBillingBtn: '.verification-address-button-container .verification-address-button',
    addressDeleteBtn: '.address-delete-link',
    creditCardsList: '.account-payments',
    addCreditCardBtn: '.add-card',
    addCardEditForm: 'div.account-wrapper',
    addCreditCardNumber: '.gsf-holder > .input-field.js-iframe-input',
    addCreditCardOwner: "input[name='holderName']",
    addCreditCardExpDate: '.gsf-holder > .input-field.js-iframe-input',
    addCreditCardSecurityCode: '.gsf-holder > .input-field.js-iframe-input',
    addCreditCardSaveBtn: '#add-card-submit',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    newestOrderHistory: 'li.order-history-item:nth-child(1) button',
    orderID: '.orderdetails-header-number > .value',
    shippingInfo: '.order-date > .value',
    billingAndPaymentInfo: '.processing',
    accountDetailsEmailField: '.account-email',
    nameGreeting: '.account-welcome-title',
    accountEditedSuccessfulPopup: '#js-accounteditsuccessfull-container',
    addressNameLine: '.mini-address-name',
    addressSummaryLine: '.mini-address-location-group',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: '.account-nav-content [title*="personal information"]',
    orderHistoryLink: '.account-nav-content [title="Order History"]',
    viewNewestOrderDetails: 'button[value="Order Details"]',
    addressCards:'.account-page-list-inner',
    addressDeleteButton:'a[title="Delete this address"]',
    footerQuickLinks: '.l-footer-quick',
    mainAccountsection: '.l-account-main',
    secondaryNavSiteGenisis: '.secondary-navigation',
    countryField: '#dwfrm_profile_address_country',
    addCardNumberIFrameBox: '.adyen-checkout__field--cardNumber .js-iframe',
    addCardExpDateIFrameBox: '.adyen-checkout__field--expiryDate .js-iframe',
    addCardCVCIFrameBox: '.adyen-checkout__card__cvc__input .js-iframe',
    addressVarifyButton: '.verification-address-button'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class MyAccountPage implements AbstractPage {

  // Assertions: any;
  goto (): void {
    cy.visit('/myaccount');
  }

  click =
    {
      logOutLink () {
        const accountLogout = selectors[brand].accountLogout;
        cy.get(accountLogout).should('be.visible').click({ force: true });
      },
      myAccountLink () {
        const myAccountBtn = selectors[brand].myAccountBtn;
        cy.get(myAccountBtn).should('be.visible').click();
      },
      accountMyPremierLink () {
        const myPremier = selectors[brand].myPremier;
        cy.get(myPremier).should('be.visible').click();
      },
      ordersLink () {
        const ordersLink = selectors[brand].ordersLink;
        cy.get(ordersLink).should('be.visible').click({ force: true });
      },
      loadMoreButton () {
        const loadMoreButton = selectors[brand].loadMoreButton;
        cy.get(loadMoreButton).eq(0).click({ force: true });
      },
      startReturnButton (text: string) {
        const secondaryNavSiteGenisis = selectors[brand].secondaryNavSiteGenisis;
        const mainAccountsection = selectors[brand].mainAccountsection;
        const footerQuickLinks = selectors[brand].footerQuickLinks;

        if (isSiteGenesisBrand) {
          cy.log(`searching for '${text}' in account nav panel on the left side`);
          cy.get(secondaryNavSiteGenisis).contains(text, {matchCase: false})
            .invoke('removeAttr', 'target')
            .click({force: true});
        } else if (brand == 'boohoo.com' && (locale == 'DE' || locale == 'SE')) {
          cy.log(`searching for '${text}' in order history`);
          cy.get(footerQuickLinks).contains(text)
            .invoke('removeAttr', 'target')
            .click({force: true});
        } else {
          cy.log(`searching for '${text}' in order history`);
          cy.get(mainAccountsection).contains(text)
            .invoke('removeAttr', 'target')
            .click({force: true});
        }
      },
      wishListLink () {
        const wishListBtn = selectors[brand].wishListBtn;
        cy.get(wishListBtn).should('be.visible').click();
      },
      changePasswordLink () {
        const changePassword = selectors[brand].changePassword;
        cy.get(changePassword).should('be.visible').click();
      },
      contactPreferencesLink () {
        const contactPreferences = selectors[brand].contactPreferences;
        cy.get(contactPreferences).should('be.visible').click();
      },
      accountDetailsLink () {
        const accountDetailsLink = selectors[brand].accountDetailsLink;
        const accountDetailsLinkDE = selectors[brand].accountDetailsLinkDE;

        if (brand == 'boohooman.com' && locale == 'DE') {
          cy.get(accountDetailsLinkDE).should('be.visible').click({force: true});
        } else {
          cy.get(accountDetailsLink).should('be.visible').click({force: true});
        }

      },
      addressesLink () {
        const accountAddresses = selectors[brand].accountAddresses;
        const accountAddressesDE = selectors[brand].accountAddressesDE;
        if (brand == 'boohooman.com' && locale == 'DE') {
          cy.get(accountAddressesDE).should('be.visible').click({ force: true });
        } else {
          cy.get(accountAddresses).should('be.visible').click({ force: true });
        }
      },
      paymentDetailsLink () {
        const paymentDetails = selectors[brand].paymentDetails;
        const paymentDetailsDE = selectors[brand].paymentDetailsDE;
        if (brand == 'boohooman.com' && locale == 'DE') {
          cy.get(paymentDetailsDE).should('be.visible').click({ force: true });
        } else {
          cy.get(paymentDetails).should('be.visible').click({force:true});
        }
      },
      socialAccountsLink () {
        const socialAccounts = selectors[brand].socialAccounts;
        cy.get(socialAccounts).should('be.visible').click();
      },

      // TODO : This function is un-used but keep it commented just for investigation and future use if we can.
      // ViewOrderBtn () {
      //   Const viewOrderBtn = selectors[brand].viewOrderBtn;
      //   Const viewOrderBtnMobile = selectors[brand].viewOrderBtnMobile;
      //   If (isMobileDeviceUsed) {
      //     Cy.get(viewOrderBtnMobile).click({force: true});
      //   } else {
      //     If (brand == 'boohoo.com' && locale == 'AU') {
      //       Cy.get('#maincontent > div > div.l-account.b-account.m-account_landing > main > div > div.b-account_dashboard-body > section > div > div > div.b-order_item-buttons > a:nth-child(2)').should('be.visible').click({force: true});
      //     } else {
      //       Cy.get(viewOrderBtn).should('be.visible').click({force:true});
      //     }
      //   }
      // },
      orderHistoryLink () {
        const orderHistoryLink = selectors[brand].orderHistoryLink;
        cy.get(orderHistoryLink).should('be.visible').click({force:true});
      },

      // TODO : This function is un-used but keep it commented just for investigation and future use if we can.
      // ViewNewestOrderHistory () {
      //   Const newestOrderHistory = selectors[brand].newestOrderHistory;
      //   If (brand == 'boohoo.com' &&locale == 'AU') {
      //     Cy.get('#maincontent > div > div.l-account.b-account.m-account_landing > main > div > div.b-account_dashboard-body > section > div > div > div.b-order_item-buttons > a:nth-child(2)').should('be.visible').click({force:true});
      //   } else {
      //     Cy.get(newestOrderHistory).should('be.visible').click({force:true});
      //   }
      // },
      viewNewestOrder () {
        const viewNewestOrderDetails = selectors[brand].viewNewestOrderDetails;
        cy.get(viewNewestOrderDetails).eq(0).click({ force: true });
      },

      // TODO : This function is un-used but keep it commented just for investigation and future use if we can.
      // SaveAnyway () {
      //   Cy.get('.verification-address-button').click();
      // },
      facebookLink () {
        const facebookLink = selectors[brand].facebookLink;
        cy.get(facebookLink).should('be.visible').click();
      },
      twitterLink () {
        const twitterLink = selectors[brand].twitterLink;
        cy.get(twitterLink).should('be.visible').click();
      },
      verificationAddress () {
        const verificationAddressBtn = selectors[brand].verificationAddressBtn;
        if (verificationAddressBtn.length > 0) {
          cy.wait(3000);
          cy.get(verificationAddressBtn).click({ force: true });
        }
      },
      addNewAddress () {
        const addAddressBtn = selectors[brand].addAddressBtn;
        cy.get(addAddressBtn).click( { force: true});
      }
    };

  actions =
    {
      updateAccountName (newName: string) {
        const firstNameField = selectors[brand].firstNameField;
        const profileUpdateBtn = selectors[brand].profileUpdateBtn;
        cy.get(firstNameField).clear({ force: true }).type(newName);
        cy.get(profileUpdateBtn).click({ force: true });
      },
      editDefaultAddress (line1: string) {
        const addressDefaultBox = selectors[brand].addressDefaultBox;
        const addressEditBtn = selectors[brand].addressEditBtn;
        const addressEditForm = selectors[brand].addressEditForm;
        const addressField = selectors[brand].addressField;
        const addressSubmitBtn = selectors[brand].addressSubmitBtn;
        cy.get(addressDefaultBox).find(addressEditBtn).click({ force: true });
        cy.get(addressEditForm).should('be.visible');
        cy.get(addressField).clear({ force: true }).type(line1);
        cy.get(addressSubmitBtn).click({ force: true });

      },
      createAddress (address: AddressData) {
        const addAddressBtn = selectors[brand].addAddressBtn;
        const addressFirstNameField = selectors[brand].addressFirstNameField;
        const addressLastNameField = selectors[brand].addressLastNameField;
        const addressPhoneNumberField = selectors[brand].addressPhoneNumberField;
        const addressField = selectors[brand].addressField;
        const addressCityField = selectors[brand].addressCityField;
        const addressEnterManualyBtn = selectors[brand].addressEnterManualyBtn;
        const addressPostalCodeField = selectors[brand].addressPostalCodeField;
        const addressSubmitBtn = selectors[brand].addressSubmitBtn;
        const addressNicknameField = selectors[brand].addressNicknameField;
        const addressStateCode = selectors[brand].addressStateCode;
        const countryField = selectors[brand].countryField;

        cy.get(addAddressBtn).should('be.visible').click({ force: true });
        cy.get(addressFirstNameField).should('be.visible').type(address.firstName, { force: true });
        cy.get(addressLastNameField).should('be.visible').type(address.lastName, { force: true });

        if (locale == 'EU' || (brand == 'misspap.com' && locale == 'IE')) {
          cy.get(countryField).select(address.country);
        }

        if (brand == 'boohoomena.com') {
          const addressPhoneCode = selectors[brand].addressPhoneCode;
          cy.get(addressPhoneCode).select(address.phone.slice(0,2));
          cy.get(addressPhoneNumberField).clear().type(address.phone.slice(2));
        } else {
          cy.get(addressPhoneNumberField).type(address.phone, { force: true });
        }

        if (!isSiteGenesisBrand) {
          cy.get(addressEnterManualyBtn).click({ force: true });
        }
        cy.get(addressField).should('be.visible').type(address.addressLine, { force: true });
        if (brand == 'boohoomena.com') {
          cy.get(addressCityField).select(address.city);
          cy.get(addressStateCode).select(address.county);
        } else {
          cy.get(addressCityField).type(address.city, { force: true });
        }
        cy.get(addressPostalCodeField).type(address.postcode, { force: true });
        if ( locale=='US' || locale == 'IE'|| locale == 'AU'|| locale =='BH') {
          cy.get(addressStateCode).select(address.county, { force: true });
        }
        if (isSiteGenesisBrand) {
          cy.get(addressNicknameField).type('New1');
        }
        cy.get(addressSubmitBtn).click({ force: true });
        shippingPage.click.proceedToBillingVerification();
      },
      deleteAddressIfExist () {
        const addressDeleteConfirmationBtn = selectors[brand].addressDeleteConfirmationBtn;
        const addressNameLine = selectors[brand].addressNameLine;
        const addressCards = selectors[brand].addressCards;
        const addressDeleteButton = selectors[brand].addressDeleteButton;

        cy.get(addressNameLine).then($addressCards=>{
          if ($addressCards.text().includes('Boohoo')) {
            cy.get(addressNameLine).contains('Boohoo').each((deleteAddressCard)=>{
              cy.wrap(deleteAddressCard).parentsUntil(addressCards).parent().find(addressDeleteButton).click({force:true});// Finding element by text then going to delete button through parentsUntil and parents
              cy.get(addressDeleteConfirmationBtn).click({force:true});
            });
          }
        });
      },
      deleteAddress () {
        const addressCards = selectors[brand].addressCards;
        const addressDeleteButton = selectors[brand].addressDeleteButton;
        const addressDeleteConfirmationBtn = selectors[brand].addressDeleteConfirmationBtn;
        cy.get(addressCards).contains('Boohoo').then(ele=>{
          cy.wrap(ele).parentsUntil(addressCards).parent().find(addressDeleteButton).click({force:true});
        });
        if (!isSiteGenesisBrand) {
          cy.get(addressDeleteConfirmationBtn).click({force:true});
        }
      },
      addCard (cardNumber: string, cardOwner: string, expiryDate: string, securityCode: string) {
        const addCreditCardBtn = selectors[brand].addCreditCardBtn;
        const addCardEditForm = selectors[brand].addCardEditForm;
        const addCreditCardNumber = selectors[brand].addCreditCardNumber;
        const addCreditCardOwner = selectors[brand].addCreditCardOwner;
        const addCreditCardExpDate = selectors[brand].addCreditCardExpDate;
        const addCreditCardSecurityCode = selectors[brand].addCreditCardSecurityCode;
        const addCreditCardSaveBtn = selectors[brand].addCreditCardSaveBtn;
        const addCardNumberIFrameBox = selectors[brand].addCardNumberIFrameBox;
        const addCardExpDateIFrameBox = selectors[brand].addCardExpDateIFrameBox;
        const addCardCVCIFrameBox = selectors[brand].addCardCVCIFrameBox;

        cy.get(addCreditCardBtn).click({ force: true });
        cy.get(addCardEditForm).should('be.visible');
        cy.iframe(addCardNumberIFrameBox).find(addCreditCardNumber).type(cardNumber);
        cy.iframe(addCardExpDateIFrameBox).find(addCreditCardExpDate).should('be.enabled').type(expiryDate, {force:true});
        cy.iframe(addCardCVCIFrameBox).find(addCreditCardSecurityCode).type(securityCode);
        cy.get(addCreditCardOwner).click({ force: true }).should('be.visible').type(cardOwner);
        cy.get(addCreditCardSaveBtn).click({ force: true });
      },
      addCardUS (cardNumber: string, cardOwner: string, cardMonth: string, cardYear: string, date: string) {
        const addCreditCardBtn = selectors[brand].addCreditCardBtn;
        const addCreditCardNumberUS = selectors[brand].addCreditCardNumberUS;
        const addCardEditForm = selectors[brand].addCardEditForm;
        const addCreditCardOwnerUS = selectors[brand].addCreditCardOwnerUS;
        const addCreditCardExpMonthUS = selectors[brand].addCreditCardExpMonthUS;
        const addCreditCardExpYearUS = selectors[brand].addCreditCardExpYearUS;
        const addCreditCardSaveBtn = selectors[brand].addCreditCardSaveBtn;
        const addCreditCardExpDateUS =selectors[brand].addCreditCardExpDateUS;
        const addCreditCardSaveBtnUS = selectors[brand].addCreditCardSaveBtnUS;
        cy.get(addCreditCardBtn).click({ force: true });
        cy.get(addCardEditForm).should('be.visible');

        cy.get(addCreditCardNumberUS).type(cardNumber);
        cy.get(addCreditCardOwnerUS).click({ force: true }).should('be.visible').type(cardOwner);
        if ((brand == 'karenmillen.com' || brand == 'misspap.com') && locale == 'US') {
          cy.get(addCreditCardExpDateUS).type(date);
        } else {
          cy.get(addCreditCardExpMonthUS).select(3).invoke('val').should('eq', '3');
          cy.get(addCreditCardExpYearUS).select(8) .invoke('val').should('eq', '2030');
        }
        if ((brand == 'karenmillen.com' || brand == 'misspap.com') && locale == 'US') {
          cy.get(addCreditCardSaveBtnUS).click({ force: true });
        } else {
          cy.get(addCreditCardSaveBtn).click({ force: true });
        }
      },

      deleteCard (cardEnd: string) {
        const creditCardSection = selectors[brand].creditCardSection;
        const creditCardDeleteBtn = selectors[brand].creditCardDeleteBtn;
        const cardDeleteConfirmationBtn = selectors[brand].cardDeleteConfirmationBtn;
        cy.get(creditCardSection).contains(cardEnd).should('be.visible');
        cy.get(creditCardSection).contains(cardEnd).parents(creditCardSection).find(creditCardDeleteBtn).click({ force: true });
        if (!isSiteGenesisBrand) {
          cy.get(cardDeleteConfirmationBtn).click({ force: true });
        }
      },

      // TODO : This function is un-used but keep it commented just for investigation and future use if we can.
      // TrackOrderByNumber () {
      //   Cy.get('b-order_item-button b-button m-small m-info m-view_order').eq(1).click(); //  Should be checked
      //   Cy.get('#dwfrm_trackOrder_orderNumber').clear().type('UK300151163');
      //   Cy.get('button[data-tau="track_order_submit"]').click();
      // }
    };

  assertions =
    {
      assertUrlContains (text: string) {
        cy.url().should('include', text);
      },
      assertOrderDetailsContent () {
        const orderID = selectors[brand].orderID;
        const shippingInfo = selectors[brand].shippingInfo;
        const billingAndPaymentInfo = selectors[brand].billingAndPaymentInfo;
        cy.get(orderID).should('be.visible');
        cy.get(shippingInfo).should('be.visible');
        cy.get(billingAndPaymentInfo).should('be.visible');
      },

      // TODO : This function is un-used but keep it commented just for investigation and future use if we can.
      // AssertLoadedOrders () {
      //   If (brand == 'boohooman.com' || brand == 'coastfashion.com') {
      //     Cy.get('.search-result-items').children().should('have.length', '6');
      //   } else {
      //     Cy.get('.b-load_progress-value').eq(1).should('be.greaterThan', '10'); //  Check (2 parametars)
      //   }
      // },
      assertAccountEmail (email: string) {
        const accountDetailsEmailField = selectors[brand].accountDetailsEmailField;
        if (isSiteGenesisBrand) {
          cy.get(accountDetailsEmailField).invoke('text').then((text) => expect(text.trim()).equal(email));
        } else {
          cy.get(accountDetailsEmailField).invoke('attr', 'value').should('contain', email);
        }
      },
      assertNameGreetingMessage (newName: string) {
        const nameGreeting = selectors[brand].nameGreeting;
        cy.get(nameGreeting).should('be.visible').then(element => {
          expect(element.text().trim().toUpperCase()).to.contain(newName);
        });
      },
      assertAccountEditedSuccessfulPopup () {
        const accountEditedSuccessfulPopup = selectors[brand].accountEditedSuccessfulPopup;
        cy.get(accountEditedSuccessfulPopup).should('be.visible');
      },
      assertDefaultAddressPresence () {
        const addressDefaultBox = selectors[brand].addressDefaultBox;
        const addressDefaultlinkCTA = selectors[brand].addressDefaultlinkCTA;
        if (brand == 'boohoomena.com') {
          cy.get(addressDefaultlinkCTA).eq(0).click();
        }
        cy.get(addressDefaultBox).should('be.visible');
      },
      assertDefaultAddressData (addressName: string) {
        const addressDefaultBox = selectors[brand].addressDefaultBox;
        const addressNameLine = selectors[brand].addressNameLine;
        const addressVarifyButton = selectors[brand].addressVarifyButton;
        cy.get('body').then($body => {
          if ($body.find(addressVarifyButton).length) {
            cy.get(addressVarifyButton).click({force: true});
          }
        });
        cy.get(addressDefaultBox).find(addressNameLine).should('contain.text', addressName);
      },
      assertNewAddressData (addressName: string) {
        cy.contains(addressName).should('be.visible');
      },
      assertAddressNotPresent (addressName: string) {
        const addressCardsList = selectors[brand].addressCardsList;
        cy.wait(3000);// Needed to keep this
        cy.get(addressCardsList).each(($el)=>{
          cy.wrap($el).should('be.visible').and('not.contain', addressName);
        });
      },
      assertCardDetails (cardEnd: string) {
        cy.contains(cardEnd).should('be.visible');
      },
      assertCardNotPresent (cardEnd: string) {
        const creditCardsList = selectors[brand].creditCardsList;
        cy.get(creditCardsList).should('not.contain', cardEnd);
      },

      // TODO : This function is un-used but keep it commented just for investigation and future use if we can.
      // AssertOrderCantBeTracked () {
      //   Cy.get('.b-form-message').should('include', 'Sorry, this order number does not match our records.');
      // },
      // AssertOrderCanBeTracked () {
      //   Cy.get('.b-form-message').should('include', 'We found your order');
      // },
      assertTwitterLinkPresent () {
        const twitterLink = selectors[brand].twitterLink;
        cy.get(twitterLink).should('be.visible');
      },
      assertFacebookLinkPresent () {
        const facebookLink = selectors[brand].facebookLink;
        cy.get(facebookLink).should('be.visible');
      },
      assertBMANUsLocaleIncludeListOfCountries (UScountires: Array<string>) {
        const countryField = selectors[brand].countryField;
        cy.get(countryField).invoke('text').then((countryList) => {
          UScountires.forEach((country) => {
            expect(countryList).to.include(country);
          });
        });
      }
    };
}

export default new MyAccountPage();