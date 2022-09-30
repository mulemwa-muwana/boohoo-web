import { contains } from 'cypress/types/jquery';
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
    viewOrderBtn: 'a[data-tau="orders_viewOrder"]',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    myPremier: 'a[data-tau="navigation_accountPremier"]',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
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
    addressStateCodeField: '#dwfrm_address_states_stateCode',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressEnterManualyBtn: 'button[data-event-click="handleManualEnterClick"]',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    addCreditCardNumber: '#dwfrm_creditCard_cardNumber',
    addCreditCardOwner: '#dwfrm_creditCard_cardOwner',
    addCreditCardExpMonth: 'dwfrm_creditCard_expirationMonth',
    addCreditCardExpYear: '#dwfrm_creditCard_expirationYear',
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    cardDeleteConfirmationBtn: '#maincontent > div > div.l-account.b-account.m-account_subpage > main > div.l-account_main > div > div > div > div:nth-child(3) > div > div > div.b-dialog-footer.m-actions > button:nth-child(1)',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: 'a[data-tau="orders_load_more',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: ':nth-child(5) > .b-account_nav-item_link > .b-account_nav-item_label',
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
    viewOrderBtn: 'a[data-tau="orders_viewOrder"]',
    socialAccounts: '.b-account_nav-item_link m-happySmile',
    firstNameField: '#dwfrm_profile_customer_firstname',
    profileUpdateBtn: 'button[data-tau="profile_customer_save"]',
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
    addressStateCodeField: '#dwfrm_address_states_stateCode',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    addCreditCardNumber: '.adyen-checkout__input-wrapper > .adyen-checkout__input',
    addCreditCardOwner: '.adyen-checkout__input-wrapper > .adyen-checkout__input', 
    addCreditCardExpMonth: '.adyen-checkout__input-wrapper > .adyen-checkout__input',
    addCreditCardExpYear: '.adyen-checkout__input-wrapper > .adyen-checkout__input',
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click.prevent="confirm"]',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: '#lastOrderPanel > .b-card > .b-card-footer > .b-card-button',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: ':nth-child(4) > .b-account_nav-item_link > .b-account_nav-item_label',
    addressEnterManualyBtn: '.b-address_lookup > .b-button',
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
    addressStateCodeField: '#dwfrm_address_states_stateCode',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressEnterManualyBtn: '.b-address_lookup > .b-button',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    addCreditCardNumber: '#dwfrm_creditCard_cardNumber',
    addCreditCardOwner: '#dwfrm_creditCard_cardOwner',
    addCreditCardExpMonth: 'dwfrm_creditCard_expirationMonth',
    addCreditCardExpYear: '#dwfrm_creditCard_expirationYear',
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click.prevent="confirm"]',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: '#lastOrderPanel > .b-card > .b-card-footer > .b-card-button',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: ':nth-child(4) > .b-account_nav-item_link > .b-account_nav-item_label',
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
    addressStateCodeField: '#dwfrm_address_states_stateCode',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressEnterManualyBtn: '.b-address_lookup > .b-button',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    addCreditCardNumber: '#dwfrm_creditCard_cardNumber',
    addCreditCardOwner: '#dwfrm_creditCard_cardOwner',
    addCreditCardExpMonth: 'dwfrm_creditCard_expirationMonth',
    addCreditCardExpYear: '#dwfrm_creditCard_expirationYear',
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click.prevent="confirm"]',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: '#lastOrderPanel > .b-card > .b-card-footer > .b-card-button',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: ':nth-child(4) > .b-account_nav-item_link > .b-account_nav-item_label',
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
    addressStateCodeField: '#dwfrm_address_states_stateCode',
    addressPostalCodeField: '#dwfrm_address_postalCode',
    addressDeleteBtn: '.b-cards_grid-footer > .b-button',
    addCreditCardNumber: '#dwfrm_creditCard_cardNumber',
    addCreditCardOwner: '#dwfrm_creditCard_cardOwner',
    addCreditCardExpMonth: 'dwfrm_creditCard_expirationMonth',
    addCreditCardExpYear: '#dwfrm_creditCard_expirationYear',
    addCreditCardSaveBtn: '.m-mobile_column > .b-button',
    cardDeleteConfirmationBtn: 'button[data-event-click.prevent="confirm"]',
    orderID: '.b-account-title',
    shippingInfo: '.b-summary_group',
    accountDetailsEmailField: '#account-email-input',
    nameGreeting: 'p[data-tau="greeting_message"]',
    addressNameLine: '.b-address-name',
    addressSummaryLine: '.b-address-summary',
    loadMoreButton: '#lastOrderPanel > .b-card > .b-card-footer > .b-card-button',
    startReturnButton: '[href="/delivery-and-returns"]',
    accountDetailsLink: ':nth-child(4) > .b-account_nav-item_link > .b-account_nav-item_label',
    addressEnterManualyBtn: '.b-address_lookup > .b-button',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class MyAccountPage implements AbstractPage {
  goto (): void {
    cy.visit('/myaccount');
  }

  click =
    {
      logOutLink () {
        const accountLogout = selectors[variables.brand].accountLogout;
        cy.get(accountLogout).should('be.visible').click();
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
        cy.get(ordersLink).should('be.visible').click({force: true});
      },
      loadMoreButton () {
        const loadMoreButton = selectors[variables.brand].loadMoreButton;
        cy.get(loadMoreButton).eq(0).click({force: true});
      },
      startReturnButton (text: string) {
        cy.log(`searching for '${text}' in order history`);
        cy.get('.l-account-main').contains(text)
          .invoke('removeAttr', 'target')
          .then(element => {
            const href = element.attr('href');
            cy.wrap(element).click({force: true});
            cy.url().then(url => {
              expect(url).to.contain('delivery');
            });
          });
        cy.go('back');
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
        cy.get(accountDetailsLink).should('be.visible').click({force: true});
      },
      addressesLink () {
        const accountAddresses = selectors[variables.brand].accountAddresses;
        cy.get(accountAddresses).should('be.visible').click({force: true});
      },
      paymentOptionsLink () {
        const paymentDetails = selectors[variables.brand].paymentDetails;
        cy.get(paymentDetails).should('be.visible').click();
      },
      socialAccountsLink () {
        const socialAccounts = selectors[variables.brand].socialAccounts;
        cy.get(socialAccounts).should('be.visible').click();
      },
      viewOrderBtn () {
        const viewOrderBtn = selectors[variables.brand].viewOrderBtn;
        cy.get(viewOrderBtn).should('be.visible').click({force:true});
      },
    };

  actions =
    {
      viewNewestOrderHistory () {
        const orderHistory = selectors[variables.brand].orderHistory;
        cy.get(orderHistory).should('be.visible').click({force:true});
      },
      loadMoreOrders () {
        const orderHistoryLoadMoreBtn = selectors[variables.brand].orderHistoryLoadMoreBtn;
        if (cy.get(orderHistoryLoadMoreBtn).should('be.visible')) {
          cy.get(orderHistoryLoadMoreBtn).click({force: true});
        }
      },
      updateAccountName (newName: string) {
        const firstNameField = selectors[variables.brand].firstNameField;
        const profileUpdateBtn = selectors[variables.brand].profileUpdateBtn;
        cy.get(firstNameField).clear().type(newName);
        cy.get(profileUpdateBtn).click();
      },
      editDefaultAddress (line1: string) {
        const addressDefaultBox = selectors[variables.brand].addressDefaultBox;
        const addressEditBtn = selectors[variables.brand].addressEditBtn;
        const addressEditForm = selectors[variables.brand].addressEditForm;
        const addressField = selectors[variables.brand].addressField;
        const addressSubmitBtn = selectors[variables.brand].addressSubmitBtn;
        cy.get(addressDefaultBox).find(addressEditBtn).click({force: true});
        cy.get(addressEditForm).should('be.visible');
        cy.get(addressField).clear({force: true}).type(line1);
        cy.get(addressSubmitBtn).click({force: true});
      },
      createAddress (address: AddressData) {
        const addAddressBtn = selectors[variables.brand].addAddressBtn;
        const addressFirstNameField = selectors[variables.brand].addressFirstNameField;
        const addressLastNameField = selectors[variables.brand].addressLastNameField;
        const addressPhoneNumberField = selectors[variables.brand].addressPhoneNumberField;
        const addressField = selectors[variables.brand].addressField;
        const addressCityField = selectors[variables.brand].addressCityField;
        const addressEnterManualyBtn = selectors[variables.brand].addressEnterManualyBtn;
        const addressStateCodeField = selectors[variables.brand].addressStateCodeField;
        const addressPostalCodeField = selectors[variables.brand].addressPostalCodeField;
        const addressSubmitBtn = selectors[variables.brand].addressSubmitBtn;
        cy.get(addAddressBtn).should('be.visible').click({force: true});
        cy.get(addressFirstNameField).should('be.visible').type(address.firstName, {force: true});
        cy.get(addressLastNameField).should('be.visible').type(address.lastName, {force: true});
        cy.get(addressPhoneNumberField).type(address.phone, {force: true});
        cy.get(addressEnterManualyBtn).click({force: true}); //  Only boohoo, dp, burton
        cy.get(addressField).should('be.visible').type(address.addrline1, {force: true});
        cy.get(addressCityField).type(address.city, {force: true});
        cy.get(addressStateCodeField).type(address.county, {force: true});
        cy.get(addressPostalCodeField).type(address.postcode, {force: true});
        cy.get(addressSubmitBtn).click({force: true});
      },
      deleteAddress () {
        const addressDeleteBtn = selectors[variables.brand].addressDeleteBtn;
        cy.get(addressDeleteBtn).eq(0).click(); //  It was eq(3)
      },
      addCard (cardNumber: string, cardOwner: string) {
        const addCardBtn = selectors[variables.brand].addAddressBtn;
        const addCardEditForm = selectors[variables.brand].addressEditForm;
        const addCreditCardNumber = selectors[variables.brand].addCreditCardNumber;
        const addCreditCardOwner = selectors[variables.brand].addCreditCardOwner;
        const addCreditCardExpMonth = selectors[variables.brand].addCreditCardExpMonth;
        const addCreditCardExpYear = selectors[variables.brand].addCreditCardExpYear;
        const addCreditCardSaveBtn = selectors[variables.brand].addCreditCardSaveBtn;
        cy.get(addCardBtn).click({force: true}); //  Is this correct??
        cy.get(addCardEditForm).should('be.visible'); //  Same
        cy.get(addCreditCardNumber).type(cardNumber); //  Ng'input#encryptedCardNumber'
        cy.get(addCreditCardOwner).type(cardOwner); //  Ng '.adyen-checkout__input adyen-checkout__input--text adyen-checkout__card__holderName__input _3JmldYKADXTctIE9oP8lcu adyen-checkout__input--large'
        cy.get(addCreditCardExpMonth).select('03').should('have.value', '3'); //  Ng 'input#encryptedExpiryDate' exp month and year in same field
        cy.get(addCreditCardExpYear).select('2030').should('have.value', '2030'); //  Ng  has CVC Field ??
        cy.get(addCreditCardSaveBtn).click();
      },

      addCardNG (cardNumber: string, cardOwner: string) {
        const addCardBtn = selectors[variables.brand].addAddressBtn;
        const addCardEditForm = selectors[variables.brand].addressEditForm;
        const addCreditCardNumber = selectors[variables.brand].addCreditCardNumber;
        const addCreditCardOwner = selectors[variables.brand].addCreditCardOwner;
        const addCreditCardExpMonth = selectors[variables.brand].addCreditCardExpMonth;
        const addCreditCardExpYear = selectors[variables.brand].addCreditCardExpYear;
        const addCreditCardSaveBtn = selectors[variables.brand].addCreditCardSaveBtn;
        cy.get(addCardBtn).click({force: true}); //  Is this correct??
        cy.get(addCardEditForm).should('be.visible'); //  Same
        cy.get(addCreditCardNumber).eq(0).click({force:true}).type(cardNumber); //  Ng'input#encryptedCardNumber'
        cy.get(addCreditCardOwner).eq(1).click({force:true}).type(cardOwner); //  Ng '.adyen-checkout__input adyen-checkout__input--text adyen-checkout__card__holderName__input _3JmldYKADXTctIE9oP8lcu adyen-checkout__input--large'
        cy.get(addCreditCardExpMonth).eq(2).click({force:true}).type('03/30').should('have.value', '3'); //  Ng 'input#encryptedExpiryDate' exp month and year in same field
        cy.get(addCreditCardExpYear).eq(3).click({force:true}).type('737').should('have.value', '737'); //  Ng  has CVC Field ??
        cy.get(addCreditCardSaveBtn).click();
      },
      deleteCard (cardEnd: string) {
        const cardDeleteBtn = selectors[variables.brand].addressDeleteBtn;
        const cardDeleteConfirmationBtn = selectors[variables.brand].cardDeleteConfirmationBtn;
        cy.contains(cardEnd).should('be.visible');
        cy.get(cardDeleteBtn).eq(0).click();
        cy.get(cardDeleteConfirmationBtn).click();
      },
      trackNewestOrder () {
        cy.get('b-order_item-button b-button m-small m-info m-view_order').eq(1).click(); //  Should be checked
        cy.url().should('include', 'order-details?orderID=');
        cy.get('button[data-tau="track_order_submit"]').click();
      },
      trackOrderByNumber () {
        cy.get('b-order_item-button b-button m-small m-info m-view_order').eq(1).click(); //  Should be checked
        cy.get('#dwfrm_trackOrder_orderNumber').clear().type('UK300151163');
        cy.get('button[data-tau="track_order_submit"]').click();
      }
    };
    
  assertions = 
    {
      assertOrderHistoryPageTitle (text: string) {
        cy.url().should('include', text);  
      },
      assertStartReturnPageIsDisplayed () {
        cy.url().should('include', 'delivery');
      },
      assertOrderDetailsContent () {
        const orderID = selectors[variables.brand].orderID;
        const shippingInfo = selectors[variables.brand].shippingInfo;
        const billingAndPaymentInfo = selectors[variables.brand].shippingInfo; //  Check
        cy.get(orderID).should('be.visible');
        cy.get(shippingInfo).eq(0).should('be.visible');
        cy.get(billingAndPaymentInfo).eq(1).should('be.visible');
      },
      assertLoadedOrders () {
        cy.get('.b-load_progress-value').eq(1).should('be.greaterThan', '10'); //  Check (2 parametars)
      },
      assertAccountDetails (email: string) {
        const accountDetailsEmailField = selectors[variables.brand].accountDetailsEmailField;
        cy.get(accountDetailsEmailField).should('have.value', email);
      },
      assertNameGreetingMessage (newName: string) {
        const nameGreeting = selectors[variables.brand].nameGreeting;
        cy.get(nameGreeting).should('be.visible').then(element => {
          expect(element.text().trim().toUpperCase()).to.contain(newName);
        });
      },
      assertDefaultAddressPresence () {
        const addressDefaultBox = selectors[variables.brand].addressDefaultBox;
        cy.get(addressDefaultBox).should('be.visible');
      },
      assertDefaultAddressData (addressName: string, addressSummary: string) {
        const addressDefaultBox = selectors[variables.brand].addressDefaultBox;
        const addressNameLine = selectors[variables.brand].addressNameLine;
        const addressSummaryLine = selectors[variables.brand].addressSummaryLine;
        cy.get(addressDefaultBox).find(addressNameLine).should('contain.text', addressName);
        cy.get(addressDefaultBox).find(addressSummaryLine).should('contain', addressSummary);
      },
      assertNewAddressData (addressName: string) {
        cy.contains(addressName).should('be.visible');
      },
      assertAddressNotPresent (addressName: string) {
        cy.get('.b-cards_grid > div').should('not.contain', addressName);
      },
      assertCardDetails (cardEnd: string) {
        cy.contains(cardEnd).should('be.visible');
      },
      assertCardNotPresent (cardEnd: string) {
        cy.get('.b-cards_grid').should('not.contain', cardEnd);
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