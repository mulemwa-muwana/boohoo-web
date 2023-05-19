import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from 'cypress/pom/pdp.page';
import plpPage from 'cypress/pom/plp.page';
import cartPage from 'cypress/pom/cart.page';
import navigate from 'cypress/helpers/navigate';

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
  
  it('Verify that item is saved to wishlist, can be added to cart and removed from wishlist', () => {
    HomePage.actions.findItemUsingSKU(variables.sku);
    if (variables.brand == 'coastfashion.com') {
      plpPage.click.selectItem();
    }
    pdpPage.actions.selectFirstAvailableSize();
    pdpPage.click.addToWishList();
    if (variables.brand == 'boohoo.com' ) {
      WishListPage.assertions.assertItemIsAddedtoWishlistAlertText(assertionText.WishlistItemsAddedAlert[variables.language]);
    }
    cy.wait(3000);
    HomePage.click.wishListIcon();
    WishListPage.assertions.assertItemIsAddedToWishlist();
    WishListPage.click.addToCart();
    pdpPage.assertions.assertMiniCartIsDisplayed();
    WishListPage.click.removeItemFromWishlist();
    WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmpty[variables.language]);
    cartPage.goto();
    cartPage.click.clearCart();
    cartPage.assertions.assertCartIsEmpty();
  });
});