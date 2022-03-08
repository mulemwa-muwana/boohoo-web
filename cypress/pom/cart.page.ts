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
        
  };
}

export default new CartPage();