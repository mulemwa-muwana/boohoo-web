import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    emailIsDisplayed:'.b-confirmation_header-email',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'[aria-label="Shipping Details"] p.b-address-name',
    shippingAddressDetailsSummary:'[aria-label="Shipping Details"] p.b-address-summary',
    orderNumberIsDisplayed:':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'[aria-label="Payment Details"] p.b-address-name',
    billingAddressDetailsSummary:'[aria-label="Payment Details"] p.b-address-summary',
    shippingMethodIsDisplayed:'b-summary_shipping-name',
    paymentMethod:'.b-summary_payment-item',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpasswordconfirm',
    closePopUP: 'button[data-e2e="lightboxClose"]'
  },
  'nastygal.com': {
    emailIsDisplayed: '.b-confirmation_header-email',
    orderValueIsDisplayed: '.b-summary_shipping-cost',
    shippingAddressDetailsName: '[aria-label="Shipping Details"] p.b-address-name',
    shippingAddressDetailsSummary: '[aria-label="Shipping Details"] p.b-address-summary',
    orderNumberIsDisplayed: ':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName: '[aria-label="Payment Details"] p.b-address-name',
    billingAddressDetailsSummary: '[aria-label="Payment Details"] p.b-address-summary',
    shippingMethodIsDisplayed: 'b-summary_shipping-name',
    paymentMethod: '.b-summary_payment',
    orderTotalIsVisible: '.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed: '#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed: '#dwfrm_newPasswords_newpasswordconfirm',
    closePopUP: '[id^=WLbanner] > a'
  },
  'dorothyperkins.com': {
    emailIsDisplayed:'.b-confirmation_header-email',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'[aria-label="Shipping Details"] p.b-address-name',
    shippingAddressDetailsSummary:'[aria-label="Shipping Details"] p.b-address-summary',
    orderNumberIsDisplayed:':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'[aria-label="Payment Details"] p.b-address-name',
    billingAddressDetailsSummary:'[aria-label="Payment Details"] p.b-address-summary',
    shippingMethodIsDisplayed:'b-summary_shipping-name',
    paymentMethod:'.b-summary_payment',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpasswordconfirm',
    closePopUP: '[id^=WLbanner] > a'
  },
  'burton.co.uk': {
    emailIsDisplayed:'.b-confirmation_header-email',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'[aria-label="Shipping Details"] p.b-address-name',
    shippingAddressDetailsSummary:'[aria-label="Shipping Details"] p.b-address-summary',
    orderNumberIsDisplayed:':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'[aria-label="Payment Details"] p.b-address-name',
    billingAddressDetailsSummary:'[aria-label="Payment Details"] p.b-address-summary',
    shippingMethodIsDisplayed:'b-summary_shipping-name',
    paymentMethod:'.b-summary_payment',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpasswordconfirm',
    closePopUP: '[id^=WLbanner] > a'
  },
  'wallis.co.uk': {
    emailIsDisplayed: '.b-confirmation_header-email',
    orderValueIsDisplayed: '.b-summary_shipping-cost',
    shippingAddressDetailsName:'[aria-label="Shipping Details"] p.b-address-name',
    shippingAddressDetailsSummary:'[aria-label="Shipping Details"] p.b-address-summary',
    orderNumberIsDisplayed: ':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'[aria-label="Payment Details"] p.b-address-name',
    billingAddressDetailsSummary:'[aria-label="Payment Details"] p.b-address-summary',
    shippingMethodIsDisplayed: 'b-summary_shipping-name',
    paymentMethod: '.b-summary_payment',
    orderTotalIsVisible: '.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed: '#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed: '#dwfrm_newPasswords_newpasswordconfirm',
    closePopUP: '[id^=WLbanner] > a'
  },
  'boohooman.com': {
    emailIsDisplayed:'.confirmation-message-info > span',
    orderValueIsDisplayed:'.orderdetails-header-number > span[class="value"]',
    shippingAddressDetailsName:'.minicheckout-name',
    shippingAddressDetailsSummary:'.address',
    orderNumberIsDisplayed:'.orderdetails-header-number',
    billingAddressDetailsName:'.mini-address-name',
    billingAddressDetailsSummary:'.mini-address-location-group',
    shippingMethodIsDisplayed:'tr.order-shipping',
    paymentMethod:'.payment-type',
    orderTotalIsVisible:'.order-value',
    thatPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"]',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_passwordconfirm"]',
    closePopUP: '[id^=WLbanner] > a'
  },
  'karenmillen.com': {
    emailIsDisplayed:'.confirmation-message-info',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'div.minicheckout-name.js-mask-sensitive',
    shippingAddressDetailsSummary:'div.minicheckout-value.js-mask-sensitive',
    orderNumberIsDisplayed:'.orderdetails-header-number',
    billingAddressDetailsName:'div.mini-address-name.js-mask-sensitive',
    billingAddressDetailsSummary:'span.mini-address-location-group',
    shippingMethodIsDisplayed:'div.value',
    paymentMethod:'.payment-type',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'[id*=login_password]',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'[id*=login_passwordconfirm]',
    closePopUP: '[id^=WLbanner] > a'
  },
  'coastfashion.com': {
    emailIsDisplayed:'.confirmation-message-info > span',
    orderValueIsDisplayed:'.orderdetails-header-number > span[class="value"]',
    shippingAddressDetailsName:'.minicheckout-name',
    shippingAddressDetailsSummary:'.address',
    orderNumberIsDisplayed:'.orderdetails-header-number',
    billingAddressDetailsName:'.mini-address-name',
    billingAddressDetailsSummary:'.mini-address-location-group',
    shippingMethodIsDisplayed:'tr.order-shipping',
    paymentMethod:'.payment-type',
    orderTotalIsVisible:'.order-value',
    thatPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"]',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_passwordconfirm"]',
    closePopUP: '[id^=WLbanner] > a'
  },
  'warehousefashion.com': {
    emailIsDisplayed:'.confirmation-message-info > span',
    orderValueIsDisplayed:'.orderdetails-header-number > span[class="value"]',
    shippingAddressDetailsName:'.minicheckout-name',
    shippingAddressDetailsSummary:'.address',
    orderNumberIsDisplayed:'.orderdetails-header-number',
    billingAddressDetailsName:'.mini-address-name',
    billingAddressDetailsSummary:'.mini-address-location-group',
    shippingMethodIsDisplayed:'tr.order-shipping',
    paymentMethod:'.payment-type',
    orderTotalIsVisible:'.order-value',
    thatPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"]',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_passwordconfirm"]',
    closePopUP: '[id^=WLbanner] > a'
  },
  'oasis-stores.com': {
    emailIsDisplayed:'.confirmation-message-info > span',
    orderValueIsDisplayed:'.orderdetails-header-number > span[class="value"]',
    shippingAddressDetailsName:'.minicheckout-name',
    shippingAddressDetailsSummary:'.address',
    orderNumberIsDisplayed:'.orderdetails-header-number',
    billingAddressDetailsName:'.mini-address-name',
    billingAddressDetailsSummary:'.mini-address-location-group',
    shippingMethodIsDisplayed:'tr.order-shipping',
    paymentMethod:'.payment-type',
    orderTotalIsVisible:'.order-value',
    thatPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"]',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_passwordconfirm"]',
    closePopUP: '[id^=WLbanner] > a'
  },
  'misspap.com': {
    emailIsDisplayed:'.confirmation-message-info',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'div.minicheckout-name.js-mask-sensitive',
    shippingAddressDetailsSummary:'div.minicheckout-value.js-mask-sensitive',
    orderNumberIsDisplayed:'.orderdetails-header-number',
    billingAddressDetailsName:'div.mini-address-name.js-mask-sensitive',
    billingAddressDetailsSummary:'span.mini-address-location-group',
    shippingMethodIsDisplayed:'div.value',
    paymentMethod:'.payment-type',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'[id*=login_password]',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'[id*=login_passwordconfirm]',
    closePopUP: '[id^=WLbanner] > a'
  },
  'boohoomena.com': {
    emailIsDisplayed:'.confirmation-message-info > span',
    orderValueIsDisplayed:'.orderdetails-header-number > span[class="value"]',
    shippingAddressDetailsName:'.minicheckout-name',
    shippingAddressDetailsSummary:'.address',
    orderNumberIsDisplayed:'.orderdetails-header-number',
    billingAddressDetailsName:'.mini-address-name',
    billingAddressDetailsSummary:'.mini-address-location-group',
    shippingMethodIsDisplayed:'tr.order-shipping',
    paymentMethod:'.payment-type',
    orderTotalIsVisible:'.order-value',
    thatPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_password"]:not([class*="passwordconfirm"]',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'[id^="dwfrm_profile_login_passwordconfirm"]',
    closePopUP: '[id^=WLbanner] > a'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class OrderConfirmation implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {

  };

  actions = {

  };

  assertions = {
    assertEmailIsDisplayed (email: string) {
      const emailIsDisplayed = selectors[variables.brand].emailIsDisplayed;
      cy.get(emailIsDisplayed).should('contain.text', email);
    },
    assertOrderValueIsDisplayed () {
      const orderValueIsDisplayed = selectors[variables.brand].orderValueIsDisplayed;
      cy.get(orderValueIsDisplayed).should('not.be.empty');
    },
    assertShippingAddressDetails (fname: string, lname: string, addressLine1: string) {
      const shippingAddressDetailsName = selectors[variables.brand].shippingAddressDetailsName;
      cy.get(shippingAddressDetailsName).should('contain', fname);
      cy.get(shippingAddressDetailsName).should('contain', lname);
      const shippingAddressDetailsSummary = selectors[variables.brand].shippingAddressDetailsSummary;
      cy.get(shippingAddressDetailsSummary).should('contain', addressLine1);
    },
    assertOrderNumberIsDisplayed () {
      const orderNumberIsDisplayed = selectors[variables.brand].orderNumberIsDisplayed;
      cy.get(orderNumberIsDisplayed).eq(0).should('not.be.empty');
    },
    assertBillingAddressDetails (fname: string, lname: string, addressLine1: string) {
      const billingAddressDetailsName = selectors[variables.brand].billingAddressDetailsName;
      cy.get(billingAddressDetailsName).should('contain', fname);
      cy.get(billingAddressDetailsName).should('contain', lname);
      const billingAddressDetailsSummary = selectors[variables.brand].billingAddressDetailsSummary;
      cy.get(billingAddressDetailsSummary).should('contain', addressLine1);
    },
    assertShippingMethodIsDisplayed () {
      const shippingMethodIsDisplayed = selectors[variables.brand].shippingMethodIsDisplayed;
      cy.get(shippingMethodIsDisplayed).should('not.be.empty');
    },
    assertPaymentMethod (method: string) {
      const paymentMethod = selectors[variables.brand].paymentMethod;
      cy.get(paymentMethod).should('contain.text', method);
    },
    assertOrderTotalIsVisible () {
      const orderTotalIsVisible = selectors[variables.brand].orderTotalIsVisible;
      cy.get(orderTotalIsVisible).should('not.be.empty');
    },
    assertThatPasswordFieldForGuestUserIsDisplayed () {
      const thatPasswordFieldForGuestUserIsDisplayed = selectors[variables.brand].thatPasswordFieldForGuestUserIsDisplayed;
      cy.get(thatPasswordFieldForGuestUserIsDisplayed).should('be.visible');
    },
    assertThatConfirmPasswordFieldForGuestUserIsDisplayed () {
      const thatConfirmPasswordFieldForGuestUserIsDisplayed = selectors[variables.brand].thatConfirmPasswordFieldForGuestUserIsDisplayed;
      cy.get(thatConfirmPasswordFieldForGuestUserIsDisplayed).should('be.visible');
    }
  };

}

export default new OrderConfirmation();