import { isSiteGenesisBrand } from 'cypress/helpers/common';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.l-cart_product-total',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.m-with_actions',
    addPremierToCart: 'button[data-tau="product_addToCart"]',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'nastygal.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.l-cart_product-total',
    subtotal: 'tr[class="b-summary_table-item m-total"]',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout:'.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
    premierBlock: '.b-ngvip',
    addPremierToCart:'.b-ngvip-button',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'dorothyperkins.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty_value',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.b-ngvip-details',
    addPremierToCart: '.b-ngvip-button',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'burton.co.uk': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.b-ngvip-details',
    addPremierToCart: '.b-ngvip-button',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'wallis.co.uk': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: 'select[id^="quantity"]',
    premierBlock: '.b-ngvip-details',
    addPremierToCart: '.b-ngvip-button',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'boohooman.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    subtotal: '.order-subtotal > :nth-child(2)',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: 'div.premier-box-main',
    addPremierToCart: '#add-to-cart',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '.item-total .js-remove-from-bag',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
  'karenmillen.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    subtotal: '.order-subtotal > :nth-child(2)',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '#cart-unlimited',
    addPremierToCart: '[data-cmp="PremierAddToCartBtn"]',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'coastfashion.com': {
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
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'warehousefashion.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    subtotal: '.cart-cell.item-total',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: 'div#cart-limitless',
    addPremierToCart: '#add-to-cart',
    PayPalCTA: '.cart-action-checkout .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'oasis-stores.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    subtotal: 'span.price-adjusted-total',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '#cart-unlimited',
    addPremierToCart: '[data-cmp="PremierAddToCartBtn"]',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.cart-action-checkout-inner > .cart-action-checkout-wrapper > .button-fancy-large',
  },
  'misspap.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    subtotal: '.order-subtotal > :nth-child(2)',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '.html-slot-container',
    addPremierToCart: '[data-button-text="GET VIP DELIVERY"]',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
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
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    checkoutBtnForMobile: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
  },
};

const variables = Cypress.env() as EnvironmentVariables;

class CartPage implements AbstractPage {
  goto (): void {
    cy.visit(variables.url + '/cart');
  }

  click = {
    clearCart () {
      const clearCart = selectors[variables.brand].clearCart;
      cy.get(clearCart).each(($el) => {
        $el.click();
      });
    },
    removePremierFromCart () {

      // Remove everything except the first item. If there are 3 items in cart, item 2 and 3 will be removed
      const clearCart = selectors[variables.brand].clearCart;
      cy.get(clearCart).each(($el, index) => {
        if (index > 0) {
          cy.wrap($el).click({force: true});
        }
      });
    },
    proceedToCheckout () {
      const proceedToCheckout = selectors[variables.brand].proceedToCheckout;
      const checkoutBtnForMobile = selectors[variables.brand].checkoutBtnForMobile;

      // If Mobile Device is used
      const viewportWidth = Cypress.config('viewportWidth');
      if (viewportWidth < 1100) {
        cy.get(checkoutBtnForMobile).invoke('show').click({force: true});

      // If Desktop Device is used
      } else {
        cy.get(proceedToCheckout).invoke('show').click({force: true});
      }
    },
  };

  actions = {
    updateQuantity () {
      const editQuantity = selectors[variables.brand].editQuantity;
      cy.get(editQuantity).should('be.visible').click();
    },
    openPayPalSandbox () {
      const payPalCTA = selectors[variables.brand].PayPalCTA;
      cy.get(payPalCTA).click({force: true});
      cy.get('.zoid-component-frame').its('0.contentDocument.defaultView').then(win => {
      
        cy.stub(win, 'open');
      });
      cy.iframe('.zoid-component-frame').find('.paypal-button').should('be.visible').click({force:true});
      cy.wait(8000);
      cy.get('.paypal-checkout-sandbox-iframe').should('be.visible');
    },
    openKlarnaSandbox () { 
     
      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });
      cy.get('#klarna-express-button-0').shadow().find('#klarna-express-button').click({force: true});

      cy.frameLoaded('#klarna-express-button-fullscreen');
    },
    openAmazonSandbox () {
      cy.get('#OffAmazonPaymentsWidgets0').invoke('removeAttr', 'target').click();
    },
    editCartQuantity (quantity: string) {
      const editQuantity = selectors[variables.brand].editQuantity;
      const setQuantity = selectors[variables.brand].setQuantity;
      const updateQuantity = selectors[variables.brand].updateQuantity;
      cy.get(editQuantity).eq(0).click({force: true});
      cy.get(setQuantity).eq(0).select(quantity,{force: true});
      
      cy.intercept(/cart/).as('updateCartProduct');
      cy.get(updateQuantity).eq(0).click({force: true});
      cy.wait('@updateCartProduct', { timeout: 30000 }).its('response.statusCode').should('eq', 200); // Wait for cart product to refresh
    },

    editCartQuantitySiteGenesis (quantity: string) {
      const editQuantity = selectors[variables.brand].editQuantity;
      cy.get(editQuantity).clear().type(quantity);

      cy.intercept('**/cart').as('cartPage');
      cy.get(editQuantity).blur();
      cy.wait('@cartPage', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
    }
  };

  assertions = {
    assertTableWithProductIsVisible () {
      const productsTable = selectors[variables.brand].productsTable;
      cy.get(productsTable).should('be.visible');
    },
    assertProductImageIsDisplayed () {
      const productImage = selectors[variables.brand].productImage;
      cy.get(productImage).then(element => {
        cy.wrap(element).invoke('width').should('be.gt', 10);
      });
    },
    assertProductTitleIsVisible () {
      const productName = selectors[variables.brand].productName;
      cy.get(productName).should('not.be.empty');
    },
    assertProductDetailsAreVisible () {
      const productDetails = selectors[variables.brand].productDetails;
      cy.get(productDetails).should('be.visible');
    },
    assertPriceAndSubtotalAreVisible () {
      const productPrice = selectors[variables.brand].productPrice;
      const subtotal = selectors[variables.brand].subtotal;
      cy.get(productPrice).should('be.visible').and('not.null');
      cy.get(subtotal).should('be.visible').and('not.to.be.empty');
    },
    assertQuantityIsDisplayed (quantity: string) {
      const cartQuantity = selectors[variables.brand].cartQuantity;
      if (isSiteGenesisBrand) {
        cy.get(cartQuantity).should('have.value', quantity);
      } else {
        cy.get(cartQuantity).should('contain', quantity);
      }
    },
    assertCartIsEmpty () {
      const emptyCartTitle = selectors[variables.brand].emptyCartTitle;
      cy.get(emptyCartTitle).should('be.visible');
    },
    assertPremierSlotsAreVisible () {
      const premierBlock = selectors[variables.brand].premierBlock;
      const addPremierToCart = selectors[variables.brand].addPremierToCart;

      cy.get(premierBlock).should('be.visible');
      cy.get(addPremierToCart).should('be.visible');
    },
    assertPayPalCTAisVisible () {
      const PayPalCTA = selectors[variables.brand].PayPalCTA;
      cy.get(PayPalCTA).should('be.visible');
    },
    assertKlarnaCTAisVisible () {
      const KlarnaCTA = selectors[variables.brand].KlarnaCTA;
      cy.get(KlarnaCTA).should('be.visible');
    },
    assertAmazonPayCTAisVisible () {
      const AmazonCTA = selectors[variables.brand].AmazonCTA;
      cy.get(AmazonCTA).should('be.visible');
    }
  };
}

export default new CartPage();