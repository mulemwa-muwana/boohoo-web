import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class OrderConfirmation implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    closePopUp (){
      cy.get('#WLbanner_2112171003 > a', {timeout: 10000}).click();
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