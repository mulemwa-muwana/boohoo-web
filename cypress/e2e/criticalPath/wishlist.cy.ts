import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from 'cypress/pom/pdp.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Wishlist Page tests', function () {

  // This will execute before every single test
  beforeEach(() => {
    HomePage.goto();
    HomePage.actions.closeNastygalPopup();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login(credentials.username, credentials.password);
      HomePage.goto(); // This is added because user is redirected to MyAccount page after login
    });
  
  });
  
  it('Verify that item is saved to wishlist', () => {   
    HomePage.actions.findItemUsingSKU(variables.sku);
    pdpPage.actions.selectSize();
    pdpPage.click.addToWishList(); 
    if (variables.brand == 'boohoo.com' ) {
      WishListPage.assertions.assertItemIsAddedtoWishlistAlertText(assertionText.WishlistItemsAddedAlert[variables.language]);
    }
    HomePage.goto();
    HomePage.click.wishListIcon();
    WishListPage.assertions.assertItemIsAddedToWishlist();
  }),
  it('Verify that user can add wishlist item to the cart', () => {
    HomePage.click.wishListIcon();
    WishListPage.click.addToCart();
  }),
  it.only('Verify that user can remove item from wishlist', () => {
    HomePage.click.wishListIcon();
    WishListPage.click.removeItemFromWishlist();
  });

});