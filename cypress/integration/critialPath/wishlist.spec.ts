import { LoginCredentials } from '../../support/types';
import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import pdpPage from '../../pom/pdp.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import homePage from '../../pom/home.page';
import assertionText from '../../helpers/assertionText';

describe('Home Page', function () {
    
  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();
      HomePage.click.logInIcon();
      LoginPage.actions.login(credentials.username, credentials.password);
      HomePage.goto(); // This is added because user is redirected to MyAccount page after login
    });
    HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink.EN);
    HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale.EN);
  });

  //  Describe('Verify user can add items to wishlist and add to the cart from wishlist', () => 
  {
    it('Verify that item is saved to wishlist', () => {           
      pdpPage.click.addToWishList(); 
      WishListPage.assertions.assertItemIsAddedtoWishlistAlertText(assertionText.WishlistItemsAddedAlert.EN);
      WishListPage.assertions.assertItemIsAddedToWishlist();
    }),
    it('Verify that user can add wishlist item to the cart', () => {
      HomePage.click.wishListIcon();
      WishListPage.click.addToCart();
    }),
    it('Verify that user can remove item from wishlist', () => {
      pdpPage.click.addToWishList(); 
      HomePage.click.wishListIcon();
      WishListPage.click.removeItemFromWishlist();
    });
  }

});