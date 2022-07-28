import AbstractPage from './abstract/abstract.page';

class CartPage implements AbstractPage {
  goto (): void {
    cy.visit('/cart');
  }

  click = {
    proceedToCheckoutHeaderLink (){
      cy.get('.b-minicart_icon-link').should('be.visible').click();
    },
    clearCart (){
      cy.get('.b-cart_product-remove').each(($el) => {
        $el.click();
      });
    },
    proceedToCheckout (){
      cy.get('.b-minicart-button').contains('Checkout').should('be.visible').click();
    }
  };

  actions = {
    updateQuantity (){
      cy.get('.b-cart_product-edit').should('be.visible').click();
    },
    removeFromCart (index: number){
      cy.get('.b-cart_product-remove').eq(index).click();
    },
    openPayPalSandbox (){
      cy.get('.zoid-component-frame').invoke('removeAttr', 'target').click();
    },
    openKlarnaSandbox (){
      cy.get('#klarna-express-button-0').invoke('removeAttr', 'target').click();
    },
    openAmazonSandbox (){
      cy.get('#OffAmazonPaymentsWidgets0').invoke('removeAttr', 'target').click();
    },
    editCartQuantity (quantity: string){
      cy.get('button[data-tau="cart_product_edit"]').click();
      cy.get('#quantity-74ac3e217d2adbf01f8d1b2e86').select(quantity);
      cy.get('.b-product_update-button_update').click();
    }
  };

  assertions = {
    assertTableWithProductIsVisible (){
      cy.get('.b-cart_products').should('be.visible');
    },
    assertProductImageIsDisplayed (pictureId: string){
      cy.get(pictureId).then(element => {
        cy.wrap(element).invoke('width').should('be.gt', 10); 
      });
    },
    assertProductTitleIsVisible (){
      cy.get('a[class="b-cart_product-name"]').should('be.visible');
    },
    assertProductDetailsAreVisible (){
      cy.get('.l-cart_product-details').should('be.visible');
    },
    assertPriceAndSubtotalAreVisible (){
      cy.get('div[class="b-price-item "]').should('be.visible').and('not.null');
      cy.get('tr[class="b-summary_table-item m-total"]').should('be.visible').and('not.null');
    },
    assertQuantityIsDisplayed (quantity: string){
      cy.get('.b-cart_product-qty').should('contain', quantity);
    },
    assertCartIsEmpty (){
      cy.get('.b-cart_empty-title').should('be.visible');
    },
    assertPremierSlotsAreVisible (){
      cy.get('.m-with_actions').should('be.visible');
      cy.get('button[data-tau="product_addToCart"]').should('be.visible');
    },
    assertPayPalCTAisVisible (){
      cy.get('.zoid-component-frame').should('be.visible');
    },
    assertKlarnaCTAisVisible (){
      cy.get('#klarna-express-button-0').should('be.visible');
    },
    assertAmazonPazCTAisVisible (){
      cy.get('#OffAmazonPaymentsWidgets0').should('be.visible');
    }
  };
}

export default new CartPage();