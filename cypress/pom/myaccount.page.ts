import { isSiteGenesisBrand } from 'cypress/helpers/common';
import AbstractPage from './abstract/abstract.page';

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
    viewOrderBtn: 'a[data-tau="account_viewOrder"]',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
    addressCardsList: '.b-cards_grid > div',
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
    creditCardsList: '.b-cards_grid',
    addCreditCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCardEditForm: '.l-account_main-section',
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]'
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
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
    addressCardsList: '.b-cards_grid > div',
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
    addCardEditForm: '.l-account_main-section',
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    creditCardSection: '.b-cards_grid section',
    creditCardDeleteBtn: '.b-cards_grid-footer > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click\\.prevent="confirm"]',
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
    addressEnterManualyBtn: '.b-address_lookup > .b-button',
    orderHistoryLink: 'a[class="b-account_nav-item_link m-history"]',
    newestOrderHistory: '[data-tau="account_viewOrder"]',
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]'
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
    addressCardsList: '.b-cards_grid > div',
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
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]'
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
    addressCardsList: '.b-cards_grid > div',
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
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]'
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
    addressCardsList: '.b-cards_grid > div',
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
    creditCardsList: '.b-cards_grid',
    addCreditCardBtn: 'a[data-tau="address_book_addNewAddress"]',
    addCardEditForm: '.l-account_main-section',
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]'
  },
  'boohooman.com': {
    accountLogout: '.button.simple.js-logout',
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
    addressCardsList: '.account-page-list',
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
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    orderHistoryLink: 'a[href*="order-history"]',
    viewNewestOrderDetails: 'button[class="order-details-btn"]'
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
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: '.js-update-details button[value="Update"]',
    addressCardsList: '.account-page-list',
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
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
    addCreditCardSaveBtn: '#add-card-submit',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    orderID: '.orderdetails-header-number',
    shippingInfo: '.orderdetails-shipment-details',
    billingAndPaymentInfo: '.orderdetails-summary-wrapper',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: '.account-welcome-title',
    accountEditedSuccessfulPopup: '#js-accounteditsuccessfull-container',
    addressNameLine: '.mini-address-name',
    addressSummaryLine: '.mini-address-location-group',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: '.account-nav-content [title*="personal information"]',
    orderHistoryLink: '[title="Order History"]',
    viewNewestOrderDetails: 'button[class="order-details-btn"]'
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
    addressCardsList: '.mini-address-name',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '.ui-dialog-content-wrapper',
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
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    viewNewestOrderDetails: 'button[class="order-details-btn"]'
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
    addressCardsList: '#addresses',
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
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    viewNewestOrderDetails: 'button[class="order-details-btn"]'
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
    addressCardsList: '.account-page-list',
    addressDefaultBox: 'li.account-page-list-item.default',
    addressEditBtn: '.address-edit-link',
    addressEditForm: '.account-page-header',
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
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    viewNewestOrderDetails: 'button[class="order-details-btn"]'
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
    addressCardsList: '.account-page-list',
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
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
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
    addCardEditForm: '#dialog-container',
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
    addressCardsList: '.account-page-list',
    addressDefaultBox: 'li.account-page-list-item.default',
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
    addCardEditForm: '#CreditCardForm',
    addCreditCardNumber: '#encryptedCardNumber',
    addCreditCardOwner: 'input.adyen-checkout__input',
    addCreditCardExpDate: '#encryptedExpiryDate',
    addCreditCardSecurityCode: '#encryptedSecurityCode',
    addCreditCardSaveBtn: '#add-card-submit',
    creditCardSection: '.payment-list-item',
    creditCardDeleteBtn: '.button-delete',
    newestOrderHistory: 'li.order-history-item:nth-child(1) button',
    orderID: '.order-number > .value',
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
    viewNewestOrderDetails: 'a[data-tau="orders_viewOrder"]'
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
        const accountLogout = selectors[variables.brand].accountLogout;
        cy.get(accountLogout).should('be.visible').click({ force: true });
      },
      myAccountLink () {
        const myAccountBtn = selectors[variables.brand].myAccountBtn;
        cy.get(myAccountBtn).should('be.visible').click();
      },
      accountMyPremierLink () {
        const myPremier = selectors[variables.brand].myPremier;
        cy.get(myPremier).should('be.visible').click();
      },
      ordersLink () {
        const ordersLink = selectors[variables.brand].ordersLink;
        cy.get(ordersLink).should('be.visible').click({ force: true });
      },
      loadMoreButton () {
        const loadMoreButton = selectors[variables.brand].loadMoreButton;
        cy.get(loadMoreButton).eq(0).click({ force: true });
      },
      startReturnButton (text: string) {
        if (variables.brand == 'nastygal.com') {
          cy.get('.b-order_item-button').click();
        } else if (isSiteGenesisBrand) {
          cy.log(`searching for '${text}' in account nav panel on the left side`);
          cy.get('.secondary-navigation').contains(text, {matchCase: false})
            .invoke('removeAttr', 'target')
            .click({force: true});
        } else {
          cy.log(`searching for '${text}' in order history`);
          cy.get('.l-account-main').contains(text)
            .invoke('removeAttr', 'target')
            .click({force: true});
        }
      },
      wishListLink () {
        const wishListBtn = selectors[variables.brand].wishListBtn;
        cy.get(wishListBtn).should('be.visible').click();
      },
      changePasswordLink () {
        const changePassword = selectors[variables.brand].changePassword;
        cy.get(changePassword).should('be.visible').click();
      },
      contactPreferencesLink () {
        const contactPreferences = selectors[variables.brand].contactPreferences;
        cy.get(contactPreferences).should('be.visible').click();
      },
      accountDetailsLink () {
        const accountDetailsLink = selectors[variables.brand].accountDetailsLink;
        if (variables.brand == 'boohoo.com' && variables.locale == 'AU') {
          cy.get('a[class="b-account_nav-item_link m-user"]').should('be.visible').click({force: true});
        } else {
          cy.get(accountDetailsLink).should('be.visible').click({force: true});
        }
        
      },
      addressesLink () {
        const accountAddresses = selectors[variables.brand].accountAddresses;
        cy.get(accountAddresses).should('be.visible').click({ force: true });
      },
      paymentDetailsLink () {
        const paymentDetails = selectors[variables.brand].paymentDetails;
        cy.get(paymentDetails).should('be.visible').click();
      },
      socialAccountsLink () {
        const socialAccounts = selectors[variables.brand].socialAccounts;
        cy.get(socialAccounts).should('be.visible').click();
      },
      viewOrderBtn () {
        const viewOrderBtn = selectors[variables.brand].viewOrderBtn;
        if (variables.brand == 'boohoo.com' && variables.locale == 'AU') {
          cy.get('#maincontent > div > div.l-account.b-account.m-account_landing > main > div > div.b-account_dashboard-body > section > div > div > div.b-order_item-buttons > a:nth-child(2)').should('be.visible').click({force: true});
        } else {
          cy.get(viewOrderBtn).should('be.visible').click({force:true});
        }
        
      },
      orderHistoryLink () {
        const orderHistoryLink = selectors[variables.brand].orderHistoryLink;
        if (variables.brand == 'boohoo.com' && variables.locale == 'AU') {
          cy.get('a[class="b-account_nav-item_link m-history"]').click({force:true});
        } else {
          cy.get(orderHistoryLink).should('be.visible').click({force:true});
        }
      },
      viewNewestOrderHistory () {
        const newestOrderHistory = selectors[variables.brand].newestOrderHistory;
        if (variables.brand == 'boohoo.com' && variables.locale == 'AU') {
          cy.get('#maincontent > div > div.l-account.b-account.m-account_landing > main > div > div.b-account_dashboard-body > section > div > div > div.b-order_item-buttons > a:nth-child(2)').should('be.visible').click({force:true});
        } else {
          cy.get(newestOrderHistory).should('be.visible').click({force:true});
        }
      },
      viewNewestOrder () {
        const viewNewestOrderDetails = selectors[variables.brand].viewNewestOrderDetails;
        cy.get(viewNewestOrderDetails).eq(0).click({ force: true });
      },
      saveAnyway () {
        cy.get('.verification-address-button').click();
      }
    };

  actions =
    {
      updateAccountName (newName: string) {
        const firstNameField = selectors[variables.brand].firstNameField;
        const profileUpdateBtn = selectors[variables.brand].profileUpdateBtn;
        cy.get(firstNameField).clear({ force: true }).type(newName);
        cy.get(profileUpdateBtn).click({ force: true });
      },
      editDefaultAddress (line1: string, country: string) {
        const addressDefaultBox = selectors[variables.brand].addressDefaultBox;
        const addressEditBtn = selectors[variables.brand].addressEditBtn;
        const addressEditForm = selectors[variables.brand].addressEditForm;
        const addressField = selectors[variables.brand].addressField;
        const addressSubmitBtn = selectors[variables.brand].addressSubmitBtn;
        cy.get(addressDefaultBox).find(addressEditBtn).click({ force: true });
        cy.get(addressEditForm).should('be.visible');
        cy.get(addressField).clear({ force: true }).type(line1);
        if (variables.brand == 'nastygal.com' && variables.locale == 'IE') {
          cy.get('#dwfrm_address_country').select(country).invoke('show');
        }
        cy.get(addressSubmitBtn).click({ force: true });
    
      },
      createAddress (address: AddressData) {
        const addAddressBtn = selectors[variables.brand].addAddressBtn;
        const addressFirstNameField = selectors[variables.brand].addressFirstNameField;
        const addressLastNameField = selectors[variables.brand].addressLastNameField;
        const addressPhoneNumberField = selectors[variables.brand].addressPhoneNumberField;
        const addressField = selectors[variables.brand].addressField;
        const addressCityField = selectors[variables.brand].addressCityField;
        const addressEnterManualyBtn = selectors[variables.brand].addressEnterManualyBtn;
        const addressPostalCodeField = selectors[variables.brand].addressPostalCodeField;
        const addressSubmitBtn = selectors[variables.brand].addressSubmitBtn;
        const addressNicknameField = selectors[variables.brand].addressNicknameField;
        const proceedToBillingBtn = selectors[variables.brand].proceedToBillingBtn;
        const addressStateCode = selectors[variables.brand].addressStateCode;
        cy.get(addAddressBtn).should('be.visible').click({ force: true });
        cy.get(addressFirstNameField).should('be.visible').type(address.firstName, { force: true });
        cy.get(addressLastNameField).should('be.visible').type(address.lastName, { force: true });
        
        if (variables.brand == 'boohoomena.com') {
          const addressPhoneCode = selectors[variables.brand].addressPhoneCode;
          cy.get(addressPhoneCode).select(address.phone.slice(0, 2));
          cy.get(addressPhoneNumberField).clear().type(address.phone.slice(2));
        } else {
          cy.get(addressPhoneNumberField).type(address.phone, { force: true });
        }

        if (!isSiteGenesisBrand) {
          cy.get(addressEnterManualyBtn).click({ force: true });
        }
        cy.get(addressField).should('be.visible').type(address.addressLine, { force: true });
        if (variables.brand == 'boohoomena.com') {
          cy.get(addressCityField).select(address.city);
        } else {
          cy.get(addressCityField).type(address.city, { force: true });
        }
        cy.get(addressPostalCodeField).type(address.postcode, { force: true });
        if (variables.locale == 'AU' || variables.brand == 'boohoomena.com') {
          cy.get(addressStateCode).select(address.county, { force: true });
        }
        if (isSiteGenesisBrand) {
          cy.get(addressNicknameField).type('New1');
        }
        cy.get(addressSubmitBtn).click({ force: true }); 
      },
      deleteAddress () {
        const addressDeleteBtn = selectors[variables.brand].addressDeleteBtn;
        cy.get(addressDeleteBtn).eq(0).click({ force: true }); //  It was eq(3)
      },
      addCard (cardNumber: string, cardOwner: string, expiryDate: string, securityCode: string) {
        const addCreditCardBtn = selectors[variables.brand].addCreditCardBtn;
        const addCardEditForm = selectors[variables.brand].addCardEditForm;
        const addCreditCardNumber = selectors[variables.brand].addCreditCardNumber;
        const addCreditCardOwner = selectors[variables.brand].addCreditCardOwner;
        const addCreditCardExpDate = selectors[variables.brand].addCreditCardExpDate;
        const addCreditCardSecurityCode = selectors[variables.brand].addCreditCardSecurityCode;
        const addCreditCardSaveBtn = selectors[variables.brand].addCreditCardSaveBtn;
        cy.get(addCreditCardBtn).click({ force: true });
        cy.get(addCardEditForm).should('be.visible');

        cy.iframe('.adyen-checkout__field--cardNumber .js-iframe').find(addCreditCardNumber).type(cardNumber);
        cy.iframe('.adyen-checkout__field--expiryDate .js-iframe').find(addCreditCardExpDate).type(expiryDate);
        cy.iframe('.adyen-checkout__card__cvc__input .js-iframe').find(addCreditCardSecurityCode).type(securityCode);
        cy.get(addCreditCardOwner).click({ force: true }).should('be.visible').type(cardOwner);
        cy.get(addCreditCardSaveBtn).click({ force: true });
      },

      deleteCard (cardEnd: string) {
        const creditCardSection = selectors[variables.brand].creditCardSection;
        const creditCardDeleteBtn = selectors[variables.brand].creditCardDeleteBtn;
        const cardDeleteConfirmationBtn = selectors[variables.brand].cardDeleteConfirmationBtn;
        cy.get(creditCardSection).contains(cardEnd).should('be.visible');
        cy.get(creditCardSection).contains(cardEnd).parents(creditCardSection).find(creditCardDeleteBtn).click({ force: true });
        if (!isSiteGenesisBrand) {
          cy.get(cardDeleteConfirmationBtn).click();
        }
      },
      trackOrderByNumber () {
        cy.get('b-order_item-button b-button m-small m-info m-view_order').eq(1).click(); //  Should be checked
        cy.get('#dwfrm_trackOrder_orderNumber').clear().type('UK300151163');
        cy.get('button[data-tau="track_order_submit"]').click();
      }
    };

  assertions =
    {
      assertUrlContains (text: string) {
        cy.url().should('include', text);
      },
      assertOrderDetailsContent () {
        const orderID = selectors[variables.brand].orderID;
        const shippingInfo = selectors[variables.brand].shippingInfo;
        const billingAndPaymentInfo = selectors[variables.brand].billingAndPaymentInfo;
        cy.get(orderID).should('be.visible');
        cy.get(shippingInfo).should('be.visible');
        cy.get(billingAndPaymentInfo).should('be.visible');
      },
      assertLoadedOrders () {
        if (variables.brand == 'boohooman.com' || variables.brand == 'coastfashion.com') {
          cy.get('.search-result-items').children().should('have.length', '6');
        } else {
          cy.get('.b-load_progress-value').eq(1).should('be.greaterThan', '10'); //  Check (2 parametars)
        }
      },
      assertAccountEmail (email: string) {
        const accountDetailsEmailField = selectors[variables.brand].accountDetailsEmailField;
        if (isSiteGenesisBrand) {
          cy.get(accountDetailsEmailField).invoke('text').then((text) => expect(text.trim()).equal(email));
        } else {
          cy.get(accountDetailsEmailField).invoke('attr', 'value').should('contain', email);
        }
      },
      assertNameGreetingMessage (newName: string) {
        const nameGreeting = selectors[variables.brand].nameGreeting;
        cy.get(nameGreeting).should('be.visible').then(element => {
          expect(element.text().trim().toUpperCase()).to.contain(newName);
        });
      },
      assertAccountEditedSuccessfulPopup () {
        const accountEditedSuccessfulPopup = selectors[variables.brand].accountEditedSuccessfulPopup;
        cy.get(accountEditedSuccessfulPopup).should('be.visible');
      },
      assertDefaultAddressPresence () {
        const addressDefaultBox = selectors[variables.brand].addressDefaultBox;
        cy.get(addressDefaultBox).should('be.visible');
      },
      assertDefaultAddressData (addressName: string, addressSummary: string) {
        cy.get('body').then($body => {
          if ($body.find('.verification-address-button').length) {
            cy.get('.verification-address-button').click({force: true});
          }
        });
        const addressDefaultBox = selectors[variables.brand].addressDefaultBox;
        const addressNameLine = selectors[variables.brand].addressNameLine;
        const addressSummaryLine = selectors[variables.brand].addressSummaryLine;
        //cy.get(addressDefaultBox).find(addressNameLine).should('contain.text', addressName);
      },
      assertNewAddressData (addressName: string) {
        cy.contains(addressName).should('be.visible');
      },
      assertAddressNotPresent (addressName: string) {
        const addressCardsList = selectors[variables.brand].addressCardsList;
        cy.get(addressCardsList).should('not.contain', addressName);
      },
      assertCardDetails (cardEnd: string) {
        cy.contains(cardEnd).should('be.visible');
      },
      assertCardNotPresent (cardEnd: string) {
        const creditCardsList = selectors[variables.brand].creditCardsList;
        cy.get(creditCardsList).should('not.contain', cardEnd);
      },
      assertOrderCantBeTracked () {
        cy.get('.b-form-message').should('include', 'Sorry, this order number does not match our records.');
      },
      assertOrderCanBeTracked () {
        cy.get('.b-form-message').should('include', 'We found your order');
      },
    };
}

export default new MyAccountPage();