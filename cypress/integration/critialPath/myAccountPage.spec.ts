import { LoginCredentials } from '../../support/types';
import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';

describe('Home Page', function () {
  
  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();
      HomePage.click.logInButton();
      LoginPage.actions.login(credentials.username, credentials.password);
    });
  });

  describe('', () => {
    
    it('', () => {

      // Please fill later.

    });

    it('', () => {

      // Please fill later.

    });

  });

  it('', () => {

    // Please fill later.

  });

});

