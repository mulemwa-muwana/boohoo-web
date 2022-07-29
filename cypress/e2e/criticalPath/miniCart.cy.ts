import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';

describe('Mini Cart is displayed, Mini Cart Contains correct information, Checkout and View Bag buttons redirect correctly', function () {
    
  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();
      HomePage.click.logInIcon();
      LoginPage.actions.login(credentials.username, credentials.password);
      HomePage.goto(); // This is added because user is redirected to MyAccount page after login
    });
  });
  {
    it('Verify that the Mini Cart is displayed', () => {   
      const variables = Cypress.env() as EnvironmentVariables;    
      HomePage.click.searchIcon();
      HomePage.actions.findItemUsingSKU[variables.sku];
      pdpPage.click.addToCart();
          
    });
  }
    
});
