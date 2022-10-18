import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import assertionText from '../../helpers/assertionText';
import plpPage from 'cypress/pom/plp.page';
import pdpPage from 'cypress/pom/pdp.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Wishlist Page tests', function () {
    
  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    const variables = Cypress.env() as EnvironmentVariables;  
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();

      //  HomePage.click.logInIcon();  check is this needed for BHO and NG
      LoginPage.actions.login(credentials.username, credentials.password);
      HomePage.goto(); // This is added because user is redirected to MyAccount page after login
    });
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    pdpPage.actions.selectSize();
  });

  it('Verify that item is saved to wishlist', () => {     
    const variables = Cypress.env() as EnvironmentVariables;      
    pdpPage.click.addToWishList(); 
    if (variables.brand == 'wallis.co.uk' || variables.brand == 'dorothyperkins.com' 
    || variables.brand == 'burton.co.uk' || variables.brand == 'boohoo.com' ) {
      WishListPage.assertions.assertItemIsAddedtoWishlistAlertText(assertionText.WishlistItemsAddedAlert[variables.language]);
      WishListPage.assertions.assertItemIsAddedToWishlist();     
    }
  }),
  it('Verify that user can add wishlist item to the cart', () => {
    HomePage.click.wishListIcon();
    WishListPage.click.addToCart();
  }),
  it('Verify that user can remove item from wishlist', () => {
    HomePage.click.wishListIcon();
    WishListPage.click.removeItemFromWishlist();
  });

});