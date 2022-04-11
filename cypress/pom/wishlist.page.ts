import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class WishListPage implements AbstractPage {
  goto (): void {
    homePage.goto();
    homePage.click.wishListIcon();
  }

  click = {
    sortItems (){
      cy.get('div.b-wishlist-sorting');
    },
    sortByDateAddedFromNew () {
      cy.get('//*[@id="wishlist-sort"]/option[1]');
    },
    sortByDateAddedFromOld () {
      cy.get('//*[@id="wishlist-sort"]/option[2]');
    },
    sortByPriceFromLowToHigh () {
      cy.get('//*[@id="wishlist-sort"]/option[3]');
    },
    sortByPriceFromHighToLow () {
      cy.get('//*[@id="wishlist-sort"]/option[4]');
    },
    addToCart () {
      cy.get('div.b-wishlist_tile-actions > button > span').click;
    },
    removeItemFromWishlist () {
      cy.get('a[data-tau="wishlist_product_delete"]').eq(0).click();
    },
    wishlistLoginBtn (){
      cy.get('#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a').click();
    }

  };

  actions = {
    showInStockItemsCheckbox (){
      cy.get('.show-in-stock').check();
    }
  };

  assertions = {
    assertItemIsAddedToWishlist () {
      cy.get('div.b-product_actions.m-auxiliary.b-product_wishlist > button > span').should('have.text', 'Saved');
    },
    assertWishListIsEmpty () {
      cy.get('.b-wishlist-empty > :nth-child(2)').should('have.text', 'You dont have any items saved for later (yet)');
    }
  };
}

export default new WishListPage();