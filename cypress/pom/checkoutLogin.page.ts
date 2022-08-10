import assertionText from '../helpers/assertionText';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class CheckoutPage implements AbstractPage {

  goto (): void {
    homePage.goto();
  }

  click = {
    continueAsGuestBtn () {
      cy.get('.b-form > .b-button').then(element => {
        cy.wrap(element).click();
      });    
    },
    continueAsRegisteredUser () {
      cy.get(':nth-child(8) > .b-login_form-group_cta > .b-button').then(element => {
        cy.wrap(element).click();
      });
    },
    premierAddToCart () {
      cy.get('product_addToCart').click();
    }
  };

  actions = {
    guestCheckoutEmail (guestEmail: string) {
      cy.get('#dwfrm_login_guestEmail').type(guestEmail);
    },
    userEmailField (username: string) {
      cy.get('#dwfrm_login_email').type(username);
    },
    passwordField (password: string) {
      cy.get('#dwfrm_login_password').type(password);
    }
  };

  assertions = {
    assertUserProceededToShippingPage () {
      cy.url().should('include', 'shipping');
    },
    assertLoginFieldForRegisteredUserIsVisible () {
      cy.get('#dwfrm_login_email').should('be.visible');
    },
    assertPasswordFieldForRegisteredUserIsVisible () {
      cy.get('#dwfrm_login_password').should('be.visible');
    },
    assertEmailnFieldForGuestUserIsVisible () {
      cy.get('#dwfrm_login_guestEmail').should('be.visible');
    },
    assertPremierIsDisplayed () {
      cy.get('.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-title').should('have.text', assertionText.Premier.EN);
      cy.get('.l-checkout_login-bottom_slot > .b-ngvip > .b-ngvip-inner > .b-ngvip-common > .b-ngvip-details > .b-ngvip-description > .b-ngvip-subtitle').should('have.text', assertionText.PremierText.EN);
    }
  };
}

export default new CheckoutPage();