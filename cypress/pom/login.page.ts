import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class LoginPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {};
  assertions = {
    assertLoginFormIsPresent (){
      cy.get(':nth-child(1) > .l-service-section_inner > .b-form_box').should('be.visible');
    }
  };

  actions = {
    login (user: string, pass: string) {
      cy.get('.b-header_login-icon > .i-icon').click();
      cy.get('#dwfrm_login_email').type(user); 
      cy.get('#dwfrm_login_password').type(pass);
      cy.get('button[data-tau="login_submit"]').click();
    }
  };
  
}

export default new LoginPage();