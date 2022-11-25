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
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '.m-with_actions',
    addPremierToCart: 'button[data-tau="product_addToCart"]',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[data-tau="cart_bottom_section"] [data-tau="start_checkout_bottom"]',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
  },
  'nastygal.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.l-cart_product-total',
    subtotal: 'tr[class="b-summary_table-item m-total"]',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantityDDL: '#quantity-29baf2a29909dbdb2daa4f029e',
    updateQuantityBtn: '.b-product_update-button_update',
    setQuantity: '.b-product_update-button_update',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
    premierBlock: '.b-ngvip',
    addPremierToCart:'.b-ngvip-button'
  },
  'dorothyperkins.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: '.b-cart_product-edit',
    updateQuantityBtn: '.b-product_update-button_update',
    setQuantityDDL: '.b-product_update-button_update',
    updateQuantityDDL: '#quantity-08630916a2e766c39d1e0c8c70',
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
  },
  'burton.co.uk': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: '.b-cart_product-edit',
    updateQuantityBtn: '#quantity',
    setQuantityDDL: '.b-product_update-button_update',
    updateQuantityDDL: '#quantity-4e1b2006e21c8bef56a9404a63',
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
  },
  'wallis.co.uk': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.m-user_cart > .b-summary_table-value',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: '.b-cart_product-edit',
    updateQuantityBtn: '.b-product_update-button_update',
    setQuantityDDL: '.b-product_update-button_update',
    updateQuantityDDL: '#quantity-5df24a2f64f926342fa1dc64be',
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
  },
  'boohooman.com': {
    productsTable: '.b-cart_products',
    productImage: '.l-cart_product-image',
    productPrice: '.l-cart_product-total',
    subtotal: '.m-total > .b-summary_table-value',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '.m-with_actions',
    addPremierToCart: 'button[data-tau="product_addToCart"]',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
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
    premierBlock: '[data-itemid="coastvip"]',
    addPremierToCart: '#quickviewbutton',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-1',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
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
    premierBlock: '[data-itemid="coastvip"]',
    addPremierToCart: '#quickviewbutton',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
  },
  'warehousefashion.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    subtotal: '.price-adjusted-total',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '[data-itemid="coastvip"]',
    addPremierToCart: '#quickviewbutton',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
  },
  'oasis-stores.com': {
    productsTable: '#cart-table',
    productImage: '[class*="item-image"] img[class*="product-tile-image"]',
    productPrice: '[class*="item-price"]',
    subtotal: '.price-adjusted-total',
    cartQuantity: '.cart-input-quantity',
    editQuantity: '.cart-input-quantity',
    updateQuantity: '.b-product_update-button_update',
    setQuantity: '#quantity-129d21f4236e7c5fcb9485c2d2',
    premierBlock: '[data-itemid="coastvip"]',
    addPremierToCart: '#quickviewbutton',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a' 
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
    premierBlock: '[data-itemid="coastvip"]',
    addPremierToCart: '#quickviewbutton',
    PayPalCTA: '.cart-action-checkout-inner .zoid-component-frame',
    KlarnaCTA: '#klarna-express-button',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '[class*="js-second-button-checkout"]',
    clearCart: '[class*="button-remove"]',
    emptyCartTitle: '.cart-empty-title',
    productDetails: '.variations',
    productName: '.name > a',
    updateQuantityDDL: '#quantity-4e1b2006e21c8bef56a9404a63'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class CartPage implements AbstractPage {
  goto (): void {
    cy.visit(variables.url + '/cart');
  }

  click = {
    proceedToCheckoutHeaderLink () {
      const proceedToCheckout = selectors[variables.brand].proceedToCheckout;
      cy.get(proceedToCheckout).should('be.visible').click();
    },
    clearCart () {
      const clearCart = selectors[variables.brand].clearCart;
      cy.get(clearCart).each(($el) => {
        $el.click();
      });
    },
    proceedToCheckout () {
      const proceedToCheckout = selectors[variables.brand].proceedToCheckout;
      cy.get(proceedToCheckout).should('be.visible').click({force: true});    
    }
  };

  actions = {
    updateQuantity () {
      const editQuantity = selectors[variables.brand].editQuantity;
      cy.get(editQuantity).should('be.visible').click();
    },
    removeFromCart (index: number) {
      cy.get('.b-cart_product-remove').eq(index).click();
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
      
      if (variables.brand == 'burton.co.uk') {
        cy.get('#klarna-express-button-0').click({force: true});
      } else {
        cy.get('#klarna-express-button-0').click();
      }

      // Stub the open method with just a console log to force it not to open a window.
      cy.window().then((window: Cypress.AUTWindow) => {
        cy.stub(window, 'open').callsFake(() => {
          console.log('stop this button click');
        });
      });
      cy.frameLoaded('#klarna-express-button-fullscreen');
    },
    openAmazonSandbox () {
      cy.get('#OffAmazonPaymentsWidgets0').invoke('removeAttr', 'target').click();
    },
    editCartQuantity (quantity: string) {
      const editQuantity = selectors[variables.brand].editQuantity;
      const setQuantity = selectors[variables.brand].setQuantity;
      const updateQuantity = selectors[variables.brand].updateQuantity;
      cy.get(editQuantity).click();
      cy.get(setQuantity).select(quantity);
      cy.get(updateQuantity).click();
    },

    editCartQuantityArkadia (quantity: number) {
      const editQuantity = selectors[variables.brand].editQuantity;
      const updateQuantityBtn = selectors[variables.brand].updateQuantityBtn;
      const updateQuantityDDL = selectors[variables.brand].updateQuantityDDL;
      cy.get(editQuantity).click({force: true});
      cy.get(updateQuantityDDL).select(quantity,{force: true});
      cy.get(updateQuantityBtn).click({force: true});
    },

    editCartQuantitySiteGenesis (quantity: string) {
      const editQuantity = selectors[variables.brand].editQuantity;
      cy.get(editQuantity).clear().type(quantity);
      cy.get(editQuantity).blur();
      cy.intercept('**/cart').as('cartPage');
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
      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'misspap.com' || variables.brand == 'dorothyperkins.com' || variables.brand == 'karenmillen.com') {
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
    assertAmazonPazCTAisVisible () {
      const AmazonCTA = selectors[variables.brand].AmazonCTA;
      cy.get(AmazonCTA).should('be.visible');
    }
  };
}

export default new CartPage();