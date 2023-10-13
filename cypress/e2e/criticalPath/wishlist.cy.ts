import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from 'cypress/pom/pdp.page';
import cartPage from 'cypress/pom/cart.page';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import { brand, language, sku } from 'cypress/support/e2e';

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
      HomePage.actions.findItemUsingSKU(sku);
      pdpPage.actions.selectColorFromSku();
      pdpPage.actions.selectSizeFromSku();
      pdpPage.click.addToWishList();
      if (brand == 'boohoo.com') {
        WishListPage.assertions.assertItemIsAddedtoWishlistAlertText(assertionText.WishlistItemsAddedAlert[language]);
      }
      HomePage.click.wishListIcon();
      WishListPage.assertions.assertItemIsAddedToWishlist();

      // Assert item can be added to cart
      WishListPage.click.addToCart();
      pdpPage.assertions.assertMiniCartIsDisplayed();

      // Cleanup of Whishlist and Cart
      WishListPage.click.removeItemFromWishlist();
      if (isSiteGenesisBrand) {
        WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmptySiteGenesis[language]);
      } else {
        WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmptyBlp[language]);
      }
      cartPage.goto();
      cartPage.click.clearCart();
      cartPage.assertions.assertCartIsEmpty();
    });
});