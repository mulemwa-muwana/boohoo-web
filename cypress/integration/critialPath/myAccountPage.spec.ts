import LoginPage from '../../pom/login.page';
import { LoginCredentials } from '../../support/types';
import HomePage from '../../pom/home.page'

describe('My Account', function (){

    beforeEach(() => {
        cy.fixture('users').then((credentials: LoginCredentials) => {
            LoginPage.goto();
            LoginPage.actions.login(credentials.username, credentials.password);
            HomePage.goto();
            HomePage.assertions.assertUserPanelTitle(credentials.name);
     })

      })

})