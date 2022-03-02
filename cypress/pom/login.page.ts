
import AbstractPage from './abstract/abstract.page';


class LoginPage implements AbstractPage {

    goto(): void {
        cy.visit('/login');
    }

    click = {

        logInButton(){
            cy.get('div.b-login_form-group_cta m-full_width').click();
        },
        forgotPasswordLink(){
            cy.get('#password-reset').click();
        }

    }
    actions = {
        login(user: string, pass: string) {
            cy.get('.username[type="email"]').type(user);
            cy.get('.password[type="password"]').type(pass);
            cy.get('.login-page-form button').click();
        },
        
        startRegistration(newUser: string){
            cy.get('#dwfrm_profile_customer_email').type(newUser);
            cy.get('button.b-button m-width_full').click();
        }
       
    }
    assertions = {
        assertErrorMessageText(text: string){
            cy.get('b-message-copy').should('include', text)
        }
    }
    
}

export default new LoginPage();