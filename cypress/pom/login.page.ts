import AbstractPage from './abstract/abstract.page';

class LoginPage implements AbstractPage {

    goto(): void {
        cy.visit('/login');
    }

    click = {}
    actions = {
        login(user: string, pass: string) {
            cy.get('.username[type="email"]').type(user);
            cy.get('.password[type="password"]').type(pass);
            cy.get('.login-page-form button').click();
        }
    }
    assertions = {}
    
}

export default new LoginPage();