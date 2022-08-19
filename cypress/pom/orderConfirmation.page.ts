import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    emailIsDisplayed:'.b-confirmation_header-email',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'',
    shippingAddressDetailsSummary:'',
    orderNumberIsDisplayed:':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'',
    billingAddressDetailsSummary:'',
    shippingMethodIsDisplayed:'b-summary_shipping-name',
    paymentMethod:'.b-summary_payment',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpasswordconfirm',
  },
  'nastygal.com': {
    emailIsDisplayed:'.b-confirmation_header-email',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'',
    shippingAddressDetailsSummary:'',
    orderNumberIsDisplayed:':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'',
    billingAddressDetailsSummary:'',
    shippingMethodIsDisplayed:'b-summary_shipping-name',
    paymentMethod:'.b-summary_payment',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpasswordconfirm',
  },
  'dorothyperkins.com': {
    emailIsDisplayed:'.b-confirmation_header-email',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'',
    shippingAddressDetailsSummary:'',
    orderNumberIsDisplayed:':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'',
    billingAddressDetailsSummary:'',
    shippingMethodIsDisplayed:'b-summary_shipping-name',
    paymentMethod:'.b-summary_payment',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpasswordconfirm',
  },
  'burton.co.uk': {
    emailIsDisplayed:'.b-confirmation_header-email',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'',
    shippingAddressDetailsSummary:'',
    orderNumberIsDisplayed:':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'',
    billingAddressDetailsSummary:'',
    shippingMethodIsDisplayed:'b-summary_shipping-name',
    paymentMethod:'.b-summary_payment',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpasswordconfirm',
  },
  'wallis.co.uk': {
    emailIsDisplayed:'.b-confirmation_header-email',
    orderValueIsDisplayed:'.b-summary_shipping-cost',
    shippingAddressDetailsName:'',
    shippingAddressDetailsSummary:'',
    orderNumberIsDisplayed:':nth-child(1) > .b-summary_group-details',
    billingAddressDetailsName:'',
    billingAddressDetailsSummary:'',
    shippingMethodIsDisplayed:'b-summary_shipping-name',
    paymentMethod:'.b-summary_payment',
    orderTotalIsVisible:'.b-summary_shipping-cost',
    thatPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpassword',
    thatConfirmPasswordFieldForGuestUserIsDisplayed:'#dwfrm_newPasswords_newpasswordconfirm',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class OrderConfirmation implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    closePopUp (){
      cy.get('#WLbanner_2112171003 > a', {timeout: 10000}).click();
    }
  };

  actions = {

  };

  assertions = {
    assertEmailIsDisplayed (email: string){
      const emailIsDisplayed = selectors[variables.brand].emailIsDisplayed;
      cy.get(emailIsDisplayed).should('contain.text', email);
    },
    assertOrderValueIsDisplayed (){
      const orderValueIsDisplayed = selectors[variables.brand].orderValueIsDisplayed;
      cy.get('.b-summary_shipping-cost').should('not.be.empty');
    },
    assertShippingAddressDetails (fname: string, lname: string, addressLine1: string){
      const shippingAddressDetailsName = selectors[variables.brand].shippingAddressDetailsName;
      cy.get('.b-address-name').should('contain', fname);
      cy.get('.b-address-name').should('contain', lname);
      const shippingAddressDetailsSummary = selectors[variables.brand].shippingAddressDetailsSummary;
      cy.get('.b-address-summary').should('contain', addressLine1);
    },
    assertOrderNumberIsDisplayed (){
      const orderNumberIsDisplayed = selectors[variables.brand].orderNumberIsDisplayed;
      cy.get(':nth-child(1) > .b-summary_group-details').eq(0).should('not.be.empty');
    },
    assertBillingAddressDetails (fname: string, lname: string, addressLine1: string){
      const billingAddressDetailsName = selectors[variables.brand].billingAddressDetailsName;
      cy.get('.b-address-name').eq(1).should('contain', fname);
      cy.get('.b-address-name').eq(1).should('contain', lname);
      const billingAddressDetailsSummary = selectors[variables.brand].billingAddressDetailsSummary;
      cy.get('.b-address-summary').eq(1).should('contain', addressLine1);
    },
    assertShippingMethodIsDisplayed (){
      const shippingMethodIsDisplayed = selectors[variables.brand].shippingMethodIsDisplayed;
      cy.get('b-summary_shipping-name').should('not.be.empty');
    },
    assertPaymentMethod (method: string){
      const paymentMethod = selectors[variables.brand].paymentMethod;
      cy.get('.b-summary_payment').should('contain.text', method);
    },
    assertOrderTotalIsVisible (){
      const orderTotalIsVisible = selectors[variables.brand].orderTotalIsVisible;
      cy.get('.b-summary_shipping-cost').should('not.be.empty');
    },
    assertThatPasswordFieldForGuestUserIsDisplayed (){
      const thatPasswordFieldForGuestUserIsDisplayed = selectors[variables.brand].thatPasswordFieldForGuestUserIsDisplayed;
      cy.get('#dwfrm_newPasswords_newpassword').should('be.visible');
    },
    assertThatConfirmPasswordFieldForGuestUserIsDisplayed (){
      const thatConfirmPasswordFieldForGuestUserIsDisplayed = selectors[variables.brand].thatConfirmPasswordFieldForGuestUserIsDisplayed;
      cy.get('#dwfrm_newPasswords_newpasswordconfirm').should('be.visible');
    }
  };

}

export default new OrderConfirmation();