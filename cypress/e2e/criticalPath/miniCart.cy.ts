import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import { sku, brand } from 'cypress/support/e2e';

describe('Mini Cart is displayed, Mini Cart Contains correct information, Checkout and View Bag buttons redirect correctly', function () {
    
  // This will execute before every single test
  beforeEach(() => {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();
      HomePage.click.logInIcon();
      LoginPage.actions.login(credentials.username, credentials.password);
      HomePage.goto(); // This is added because user is redirected to MyAccount page afters login
    });
  });
  {
    it('CYP-134 Verify that the Mini Cart is displayed', () => {
      cy.log(process.env.CYPRESS_JIRA_USERNAME);     
      HomePage.click.searchIcon();
      HomePage.actions.findItemUsingSKU(sku);
      pdpPage.actions.selectFirstAvailableSize();
      if (brand == 'burton.co.uk' || brand == 'boohoo.com') {
        cy.wait(3000);
      }
      pdpPage.click.addToCart();
      pdpPage.assertions.assertMiniCartIsDisplayed();
    
    });
  }

});
