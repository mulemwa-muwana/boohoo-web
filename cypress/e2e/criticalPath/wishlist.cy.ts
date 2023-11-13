import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from 'cypress/pom/pdp.page';
import cartPage from 'cypress/pom/cart.page';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import { brand, fullSku, language } from 'cypress/support/e2e';

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

  it('CYP-215 Verify that item is saved to wishlist, can be added to cart and removed from wishlist', function () {
    if (brand != 'boohoo.com') { // Other brands to be included in phase 2
      this.skip();
    }
    HomePage.click.wishListIcon();
    WishListPage.click.removeAllItemsFromWishlist(); // Make sure wishlist is empty
    HomePage.actions.findItemUsingSKU(fullSku);
    pdpPage.actions.selectColorFromSku();
    cy.wait(1000);
    pdpPage.actions.selectSizeFromSku();
    cy.wait(1000);
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
    WishListPage.click.removeAllItemsFromWishlist();
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