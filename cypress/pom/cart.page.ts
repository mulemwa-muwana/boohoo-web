import { isSiteGenesisBrand, isMobileDeviceUsed } from 'cypress/helpers/common';
import { brand, url } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.l-cart_product-total',
    productPriceMobile: '.b-cart_product-price > .b-price > .m-new',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    editQuantityMobile: '[data-tau="cart_product_quantity"]',
    editDetailsMobile: '.b-cart_product-edit',
    updateBtnMobile: ' .b-product_update-button_update',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.m-with_actions',
    addPremierToCart: 'button[data-tau="product_addToCart"]',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    clearCartMobile: 'button.b-cart_product-remove[title="Remove"]',
    emptyCartTitle: '.b-cart_empty-title',
    emptyCartTitleMobile: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'nastygal.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.l-cart_product-total',
    productPriceMobile: '.m-total > .b-summary_table-value',
    subtotal: 'tr[class="b-summary_table-item m-total"]',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    editQuantityMobile: '[data-tau="cart_product_quantity"]',
    editDetailsMobile: '.b-cart_product-edit',
    updateBtnMobile: '.b-product_update-button_update',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    clearCartMobile: '.b-cart_product-remove[title="Remove"]',
    emptyCartTitle: '.b-cart_empty-title',
    emptyCartTitleMobile: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
    premierBlock: '.b-ngvip',
    addPremierToCart: '.b-ngvip-button',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'dorothyperkins.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    productPriceMobile: '.l-cart_product-total',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty_value',
    editQuantity: '.b-product_update-attribute_name',
    editQuantityMobile: '[data-tau="cart_product_quantity"] ',
    editDetailsMobile: '.b-cart_product-edit',
    updateBtnMobile: '.b-product_update-button_update',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.b-ngvip-details',
    addPremierToCart: '.b-ngvip-button',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    clearCartMobile: '.l-cart_product-remove > .b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    emptyCartTitleMobile: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'burton.co.uk': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    productPriceMobile: '.m-total > .b-summary_table-value',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    editQuantityMobile: '.b-product_update-button_update',
    editDetailsMobile: '.b-cart_product-edit',
    updateBtnMobile: ' .b-product_update-button_update',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.b-ngvip-details',
    addPremierToCart: '.b-ngvip-button',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    clearCartMobile: '.l-cart_product-remove > .b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    emptyCartTitleMobile: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'wallis.co.uk': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    productPriceMobile: '.b-cart_product-price > .b-price',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    editQuantityMobile: '[data-tau="cart_product_quantity"]',
    editDetailsMobile: '.b-cart_product-edit',
    updateBtnMobile: '.b-product_update-button_update',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.b-ngvip-details',
    addPremierToCart: '.b-ngvip-button',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    clearCartMobile: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    emptyCartTitleMobile: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'boohooman.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    productPriceMobile: '.order-value',
    subtotal: '.order-subtotal > :nth-child(2)',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    editQuantityMobile: '#Quantity',
    editDetailsMobile: '.item-actions-btns > .item-edit-details > .item-actions-inner > .item-actions-copy',
    updateBtnMobile: '.add-to-cart-text',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: 'div.premier-box-main',
    addPremierToCart: '#add-to-cart',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '.item-total .js-remove-from-bag',
    clearCartMobile: '.item-details-container > .item-actions-btns > .remove > .item-actions-inner > .item-actions-icon',
    emptyCartTitle: '.cart-empty-title',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'karenmillen.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    productPriceMobile: '.price-adjusted-total > span',
    subtotal: '.order-subtotal > :nth-child(2)',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    editQuantityMobile: '#Quantity',
    editDetailsMobile: '.item-actions-btns > .item-edit-details > .item-actions-inner > .item-actions-copy',
    updateBtnMobile: '.add-to-cart-text',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '#cart-unlimited',
    addPremierToCart: '[data-cmp="PremierAddToCartBtn"]',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    clearCartMobile: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'coastfashion.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    productPriceMobile: '.price-adjusted-total > span',
    subtotal: '.price-adjusted-total',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    editQuantityMobile: '#Quantity',
    editDetailsMobile: '.item-actions-btns > .item-edit-details > .item-actions-inner > .item-actions-copy',
    updateBtnMobile: ' .add-to-cart-text',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: 'div.premier-box-main',
    addPremierToCart: '#add-to-cart',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    clearCartMobile: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'warehousefashion.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    productPriceMobile: '.price-adjusted-total > span',
    subtotal: '.cart-cell.item-total',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    editQuantityMobile: '#Quantity',
    editDetailsMobile: '.item-actions-btns > .item-edit-details > .item-actions-inner > .item-actions-copy',
    updateBtnMobile: '.add-to-cart-text',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: 'div#cart-limitless',
    addPremierToCart: '.js-cmp-PremierAddToCartBtn',
    PayPalCTA: '.cart-action-checkout .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    clearCartMobile: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'oasis-stores.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    productPriceMobile: '.price-adjusted-total > span',
    subtotal: 'span.price-adjusted-total',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    editQuantityMobile: '#Quantity',
    editDetailsMobile: '.item-actions-btns > .item-edit-details > .item-actions-inner > .item-actions-copy',
    updateBtnMobile: '.add-to-cart-text',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '#cart-unlimited',
    addPremierToCart: '[data-cmp="PremierAddToCartBtn"]',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    clearCartMobile: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'misspap.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    productPriceMobile: '.price-total',
    subtotal: '.order-subtotal > :nth-child(2)',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    editQuantityMobile: '#Quantity',
    editDetailsMobile: '.item-actions-btns > .item-edit-details > .item-actions-inner > .item-actions-copy',
    updateBtnMobile: '.add-to-cart-text',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '.html-slot-container',
    addPremierToCart: '[data-button-text="GET VIP DELIVERY"]',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    clearCartMobile: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    updateQuantityDDL: '#quantity-4e1b2006e21c8bef56a9404a63',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'boohoomena.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    subtotal: '.price-adjusted-total',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: 'div.premier-box-main',
    addPremierToCart: '#add-to-cart',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    clearCartMobile: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    emptyCartTitleMobile: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
};

class CartPage implements AbstractPage {
  goto(): void {
    cy.visit(url + '/cart');
  }

  click = {
    clearCart() {
      const clearCart = selectors[brand].clearCart;
      cy.get(clearCart).each(() => {
        cy.get(clearCart).eq(0).click({ force: true }); // In case of multiple item After Deleting an item, page refreshes and previous cy.wrap() embeded element detached from DOM
        cy.wait(7000);
      });
    },
    removePremierFromCart() {

      // Remove everything except the first item. If there are 3 items in cart, items 2 and 3 will be removed
      const clearCart = selectors[brand].clearCart;
      cy.get(clearCart).each(($el, index) => {
        if (index > 0) {
          cy.wrap($el).click({ force: true });
        }
      });
    },
    proceedToCheckout() {
      const proceedToCheckout = selectors[brand].proceedToCheckout;
      const checkoutBtnForMobile = selectors[brand].checkoutBtnForMobile;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(checkoutBtnForMobile).invoke('show').click({ force: true });

        // If Desktop Device is used
      } else {
        cy.get(proceedToCheckout).invoke('show').click({ force: true });
      }
    },
  };

  actions = {
    updateQuantity() {
      const editQuantity = selectors[brand].editQuantity;
      cy.get(editQuantity).should('be.visible').click();
    },
    openPayPalSandbox() {
      const payPalCTA = selectors[brand].PayPalCTA;
      cy.get(payPalCTA).its('0.contentDocument.defaultView')
        .then(win => {
          cy.stub(win, 'open');
        });
      cy.wait(800);
      cy.iframe(payPalCTA).find('.paypal-button').should('be.visible').click({ force: true });
    },
    openKlarnaSandbox() {

      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });
      cy.get('#klarna-express-button-0').shadow().find('#klarna-express-button').click({ force: true });

      cy.frameLoaded('#klarna-express-button-fullscreen');
    },
    openAmazonSandbox() {
      cy.get('#OffAmazonPaymentsWidgets0').invoke('removeAttr', 'target').click();
    },
    editCartQuantity(quantity: string) {
      const editQuantity = selectors[brand].editQuantity;
      const setQuantity = selectors[brand].setQuantity;
      const updateQuantity = selectors[brand].updateQuantity;
      cy.get(editQuantity).eq(0).click({ force: true });
      cy.get(setQuantity).eq(0).select(quantity, { force: true });

      cy.intercept(/cart/).as('updateCartProduct');
      cy.get(updateQuantity).eq(0).click({ force: true });
      if (brand != 'nastygal.com' && brand != 'boohoo.com') {
        cy.wait('@updateCartProduct', { timeout: 30000 }).its('response.statusCode').should('eq', 200); // Wait for cart product to refresh
      }
    },

    editCartQuantitySiteGenesis(quantity: string) {
      const editQuantity = selectors[brand].editQuantity;
      const editQuantityMobile = selectors[brand].editQuantityMobile;
      const editDetailsMobile = selectors[brand].editDetailsMobile;
      const updateBtnMobile = selectors[brand].updateBtnMobile;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(editDetailsMobile).click({ force: true });
        cy.wait(5000);
        cy.get(editQuantityMobile).clear({ force: true }).type(quantity);
        cy.get(updateBtnMobile).click({ force: true });
        cy.intercept('**/cart').as('cartPage');
        cy.wait('@cartPage', { timeout: 30000 }).its('response.statusCode').should('eq', 200);

        // If Desktop Device is used
      } else {
        cy.get(editQuantity).clear().type(quantity);
        cy.intercept('**/cart').as('cartPage');
        cy.get(editQuantity).blur();
        cy.wait('@cartPage', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
      }
    }
  };

  assertions = {
    assertTableWithProductIsVisible() {
      const productsTable = selectors[brand].productsTable;
      cy.get(productsTable).should('be.visible');
    },
    assertProductImageIsDisplayed() {
      const productImage = selectors[brand].productImage;
      cy.get(productImage).then(element => {
        cy.wrap(element).invoke('width').should('be.gt', 10);
      });
    },
    assertProductTitleIsVisible() {
      const productName = selectors[brand].productName;
      cy.get(productName).should('not.be.empty');
    },
    assertProductDetailsAreVisible() {
      const productDetails = selectors[brand].productDetails;
      cy.get(productDetails).should('be.visible');
    },
    assertPriceAndSubtotalAreVisible() {

      const productPrice = selectors[brand].productPrice;
      const productPriceMobile = selectors[brand].productPriceMobile;
      const subtotal = selectors[brand].subtotal;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {

        cy.get(productPriceMobile).should('be.visible');

        // If Desktop Device is used
      } else {

        cy.get(productPrice).should('be.visible').and('not.null');
        cy.get(subtotal).should('be.visible').and('not.to.be.empty');
      }
    },
    assertQuantityIsDisplayed(quantity: string) {
      const cartQuantity = selectors[brand].cartQuantity;
      if (isSiteGenesisBrand) {
        cy.get(cartQuantity).should('have.value', quantity);
      } else {
        cy.get(cartQuantity).should('contain', quantity);
      }
    },
    assertCartIsEmpty() {
      const emptyCartTitle = selectors[brand].emptyCartTitle;
      const emptyCartTitleMobile = selectors[brand].emptyCartTitleMobile;
      if (isMobileDeviceUsed) {
        cy.get(emptyCartTitleMobile).should('be.visible');
      } else {
        cy.get(emptyCartTitle).should('be.visible');
      }
    },
    assertPremierSlotsAreVisible() {
      const premierBlock = selectors[brand].premierBlock;
      const addPremierToCart = selectors[brand].addPremierToCart;

      cy.get(premierBlock).should('be.visible');
      cy.get(addPremierToCart).should('be.visible');
    },
    assertPayPalCTAisVisible() {
      const PayPalCTA = selectors[brand].PayPalCTA;
      cy.get(PayPalCTA).should('be.visible');
    },
    assertKlarnaCTAisVisible() {
      const KlarnaCTA = selectors[brand].KlarnaCTA;
      cy.get(KlarnaCTA).should('be.visible');
    },
    assertAmazonPayCTAisVisible() {
      const AmazonCTA = selectors[brand].AmazonCTA;
      cy.get(AmazonCTA).should('be.visible');
    }
  };
}

export default new CartPage();