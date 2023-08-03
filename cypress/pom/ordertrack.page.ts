import { brand, url } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import { isMobileDeviceUsed } from 'cypress/helpers/common';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    trackOrderField: '#dwfrm_trackOrder_orderNumber',
    submitButton: '[data-tau="track_order_submit"]',
    errorForm: '.b-form-message',
  },
  'nastygal.com': {
    trackOrderField: '#dwfrm_trackOrder_orderNumber',
    submitButton: '[data-tau="track_order_submit"]',
    errorForm: '.b-form-message',
  },
  'dorothyperkins.com': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '[data-tau="track_order_submit"]',
    errorForm: '.b-form-message',
  },
  'burton.co.uk': {
    trackOrderField: 'input#dwfrm_trackOrder_orderNumber',
    submitButton: 'button.b-button.m-width_full',
    errorForm: '.b-form-message',
  },
  'wallis.co.uk': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '[data-tau="track_order_submit"]',
    errorForm: '.b-form-message',
  },
  'boohooman.com': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '.btn-fixed-height-slim.js-order-track-button.js-recaptcha.js-recaptcha-init-done',
    errorForm: '.order-track-error',
  },
  'karenmillen.com': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '.btn-fixed-height-slim.js-order-track-button.js-recaptcha.js-recaptcha-init-done',
    errorForm: '.order-track-error',
  },
  'coastfashion.com': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '.btn-fixed-height-slim.js-order-track-button.js-recaptcha.js-recaptcha-init-done',
    errorForm: '.order-track-error',
  },
  'warehousefashion.com': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '.btn-fixed-height-slim.js-order-track-button.js-recaptcha.js-recaptcha-init-done',
    errorForm: '.order-track-error',
  },
  'oasis-stores.com': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '.btn-fixed-height-slim.js-order-track-button.js-recaptcha.js-recaptcha-init-done',
    errorForm: '.order-track-error',
  },
  'misspap.com': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '.content-asset.cs-order-track-form-cta',
    errorForm: '.order-track-error',
  },
  'boohoomena.com': {
    trackOrderField: '#dwfrm_ordertrack_orderNumber',
    submitButton: '.btn-fixed-height-slim.js-order-track-button.js-recaptcha.js-recaptcha-init-done',
    errorForm: '.order-track-error',
  }
};
class OrderTrackPage implements AbstractPage {
  goto () {
    if (brand == 'boohoo.com' || brand == 'nastygal.com') {
      cy.visit (url + '/order-trackform');
    } else if (brand == 'misspap.com') {
      cy.visit (url + '/track-order');
    } else {
      cy.visit (url + '/customer-service');
    }
  }

  click = {

  };

  actions = {
    trackOrder (orderNumber: string) {
      const trackOrderField = selectors[brand].trackOrderField;
      const submitButton = selectors[brand].submitButton;
      if (isMobileDeviceUsed && brand == 'nastygal.com') {
        cy.get(trackOrderField).click({force:true}).type(orderNumber);
      } else {
        cy.get(trackOrderField).type(orderNumber,{force: true});
      }       
    
      cy.get(submitButton).click({force: true});
    }

  };

  assertions = {
    assertTrackOrderErrorMsg (unknownNo: string) {
      const errorForm = selectors[brand].errorForm;
      cy.get(errorForm).should('be.visible').and('include.text', unknownNo);
    }

  };
} export default new OrderTrackPage();