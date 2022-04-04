import AbstractPage from './abstract/abstract.page';

class CartPage implements AbstractPage {
  goto (): void {
    cy.visit('/cart');
  }

  click = {
    proceedToCheckout (){
      cy.get('.b-summary_section > :nth-child(1) > .b-cart_actions-button').should('be.visible').click();
    }
  };

  actions = {
    updateQuantity (){
      cy.get('.b-cart_product-edit').should('be.visible').click();
    },
    removeFromCart (index: number){
      cy.get('.b-cart_product-remove').eq(index).click();
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
    assertCartIsEmpty (){
      cy.get('.b-cart_empty-title').should('be.visible');
    },
    assertPremierSlotsAreVisible (){
      cy.get('.m-with_actions').should('be.visible');
      cy.get('button[data-tau="product_addToCart"]').should('be.visible');
    }
  };
}

export default new CartPage();