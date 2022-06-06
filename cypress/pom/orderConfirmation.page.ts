import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class OrderConfirmation implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    continueBtn (){
      cy.get('#WLbanner_2112171003 > a")', { timeout: 15000 }).click();
    }
  };

  actions = {

  };

  assertions = {
    assertEmailIsDispplayed (email: string){
      cy.get('.b-confirmation_header-email').contains('text', email);
    }
  };

}

export default new OrderConfirmation();