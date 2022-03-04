import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class LoginPage implements AbstractPage {

    goto(): void {
        homePage.goto();
    }

    click = {}

    actions = {
    login(user: string, pass: string) {
        cy.get('a[data-tau="header_signIn"]').click()
        cy.get('#dwfrm_login_email').type(user); 
        cy.get('#dwfrm_login_password').type(pass);
        cy.get('button[data-tau="login_submit"]').click();
        }
    }
    assertions = {}
    
}

export default new LoginPage();