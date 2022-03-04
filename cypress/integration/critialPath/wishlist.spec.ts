import { LoginCredentials } from '../../support/types';
import LoginPage from '../../pom/login.page';
import * as CommonActions from '../../helpers/common';
import GlobalFooter from '../../pom/globalfooter.page';
import HomePage from '../../pom/home.page';
import WishListPage from '../../pom/wishlist.page';
import pdpPage from '../../pom/pdp.page';


describe('Home Page', function () {
    
    // This will execute before every single test, we're just going to the baseURL.
    beforeEach(() => {
      HomePage.goto();
      cy.fixture('users').then((credentials: LoginCredentials) => {
        HomePage.goto();
        HomePage.click.logInButton();
        LoginPage.actions.login(credentials.username, credentials.password);
        HomePage.goto(); // this is added because user is redirected to MyAccount page after login
        })
    })

  //  describe('Verify user can add items to wishlist and add to the cart from wishlist', () => 
    {
        it('Verify that item is saved to wishlist', () => {           
            HomePage.click.searchIcon();
            HomePage.actions.findItemUsingSKU('aAZZ06403-105-35{enter}');
            pdpPage.click.addToWishList();  
            WishListPage.assertions.assertItemIsAddedToWishlist();
        }),
        it('Verify that user can add wishlist item to the cart', () => {
            HomePage.click.wishListIcon();
            WishListPage.click.addToCart();
        }),
        it('Verify that user can remove item from wishlist', () => {
            HomePage.click.searchIcon();
            HomePage.actions.findItemUsingSKU('aAZZ06403-105-35{enter}');
            pdpPage.click.addToWishList();  
            HomePage.click.wishListIcon();
            WishListPage.click.removeItemFromWishlist();
        })
    }

})