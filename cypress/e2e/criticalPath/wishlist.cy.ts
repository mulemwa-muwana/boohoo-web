import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from 'cypress/pom/pdp.page';
import plpPage from 'cypress/pom/plp.page';
import cartPage from 'cypress/pom/cart.page';
import { isSiteGenesisBrand } from 'cypress/helpers/common';

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

    /*     //Issue Resolved No Need of if statement for CoastFashion
    if (variables.brand == 'coastfashion.com') { 
      plpPage.click.selectItem();
    } */
    
    pdpPage.actions.selectColorFromSku();
    cy.wait(5000);
    pdpPage.actions.selectSizeFromSku();
    cy.wait(5000);
    pdpPage.click.addToWishList();
    if (variables.brand == 'boohoo.com' ) {
      WishListPage.assertions.assertItemIsAddedtoWishlistAlertText(assertionText.WishlistItemsAddedAlert[variables.language]);
    }
    cy.wait(7000);
    HomePage.click.wishListIcon();
    WishListPage.assertions.assertItemIsAddedToWishlist();

    // Assert item can be added to cart
    WishListPage.click.addToCart();
    pdpPage.assertions.assertMiniCartIsDisplayed();
    
    // Cleanup of Whishlist and Cart
    WishListPage.click.removeItemFromWishlist();
    cy.wait(3000);
    if (isSiteGenesisBrand) {
      WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmptySiteGenesis[variables.language]);
    } else {
      WishListPage.assertions.assertWishListIsEmpty(assertionText.WishListIsEmptyBlp[variables.language]);
    }
    cartPage.goto();
    cy.wait(10000);
    cartPage.click.clearCart();
    cartPage.assertions.assertCartIsEmpty();   
  });
});