import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class PdpPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    addToCart (){
      cy.get('.b-product_addtocard-availability').click();
    },
    addToWishList (){
      cy.get('.m-outline ').click();
    }
  };

  actions = {

  };

  assertions = {

  };
}

export default new PdpPage();