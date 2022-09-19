import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    productPrice: 'div[class="b-price-item "]',
    subtotal: 'tr[class="b-summary_table-item m-total"]',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantity: '#quantity-74ac3e217d2adbf01f8d1b2e86',
    setQuantity: '.b-product_update-button_update',
    premierBlock: '.m-with_actions',
    addPremierToCart: 'button[data-tau="product_addToCart"]',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: 'a[class="b-cart_product-name"]',
  },
  'nastygal.com': {
    productPrice: 'div[class="b-price-item "]',
    subtotal: 'tr[class="b-summary_table-item m-total"]',
    cartQuantity: '.b-cart_product-qty',
    editQuantity: 'button[data-tau="cart_product_edit"]',
    updateQuantity: '#quantity-74ac3e217d2adbf01f8d1b2e86',
    setQuantity: '.b-product_update-button_update',
    PayPalCTA: '.zoid-component-frame',
    KlarnaCTA: '#klarna-express-button-0',
    AmazonCTA: '#OffAmazonPaymentsWidgets0',
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productName: 'a[class="b-cart_product-name"]',
  },
  'dorothyperkins.com': {
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
    proceedToCheckout: '[href="https://dwdev.dorothyperkins.com/checkout-login"]',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
  },
  'burton.co.uk': {
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
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
  },
  'wallis.co.uk': {
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
    proceedToCheckout: '.b-summary_section > :nth-child(1) > .b-cart_actions-button',
    clearCart: '.b-cart_product-remove',
    emptyCartTitle: '.b-cart_empty-title',
    productDetails: '.l-cart_product-details',
    productName: '.b-cart_product-title > a',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
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
    },
    cartPageCheckoutButton () {
      cy.get('.b-proceed_checkout > .b-cart_actions > .b-cart_actions-button').click();
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
      cy.get('.zoid-component-frame').invoke('removeAttr', 'target').click();
    },
    openKlarnaSandbox () {
      cy.get('#klarna-express-button-0').invoke('removeAttr', 'target').click();
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
      cy.get(editQuantity).click();
      cy.get(updateQuantityDDL).select(quantity);
      cy.get(updateQuantityBtn).click();
    }
  };

  assertions = {
    assertTableWithProductIsVisible () {
      cy.get('.b-cart_products').should('be.visible');
    },
    assertProductImageIsDisplayed (pictureId: string) {
      cy.get(pictureId).then(element => {
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
      cy.get(subtotal).should('be.visible').and('not.null');
    },
    assertQuantityIsDisplayed (quantity: string) {
      const cartQuantity = selectors[variables.brand].cartQuantity;
      cy.get(cartQuantity).should('contain', quantity);
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