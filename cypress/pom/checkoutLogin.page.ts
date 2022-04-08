import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import wishlistPage from './wishlist.page';

class CheckoutPage implements AbstractPage {

  goto (): void {
    homePage.goto();
    homePage.click.wishListIcon();
    wishlistPage.click.wishlistLoginBtn();
  }

  click = {
    continueAsGuestBtn (){
      cy.get('.b-form > .b-button').then(element => {
        cy.wrap(element).click();
      });    
    },
    continueAsRegisteredUser (){
      cy.get(':nth-child(9) > .b-login_form-group_cta > .b-button').then(element => {
        cy.wrap(element).click();
      });
    }
  };

  actions = {
    guestCheckoutEmail (guestEmail: string){
      cy.get('#dwfrm_login_guestEmail').type(guestEmail);
    },
    userEmailField (username: string){
      cy.get('#dwfrm_login_email').type(username);
    },
    passwordField (password: string){
      cy.get('#dwfrm_login_password').type(password);
    }
  };

  assertions = {
        
  };
}

export default new CheckoutPage();