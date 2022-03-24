import AbstractPage from './abstract/abstract.page';

class CartPage implements AbstractPage {
  goto (): void {
    cy.visit('/cart');
  }

  click = {

  };

  actions = {

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
  };
}

export default new CartPage();