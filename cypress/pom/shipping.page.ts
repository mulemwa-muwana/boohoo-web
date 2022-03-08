import AbstractPage from './abstract/abstract.page';

class ShippingPage implements AbstractPage {

  goto (): void {
    cy.visit('/shipping');
  }

  click = {

  };

  actions = {

  };

  assertions = {
        
  };

}

export default new ShippingPage();