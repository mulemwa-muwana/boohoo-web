import AbstractPage from './abstract/abstract.page';

class CheckoutPage implements AbstractPage {

  goto (): void {
    cy.visit('/new-season');
  }

  click = {

  };

  actions = {

  };

  assertions = {
        
  };
}

export default new CheckoutPage();