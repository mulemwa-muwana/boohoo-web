import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span',
    removeItemFromWishlist: 'a[data-tau="wishlist_product_delete"]',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    wishListIsEmpty: '.b-wishlist-empty > :nth-child(2)',
    itemIsAddedtoWishlistAlertText: '.m-outline',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action',
    wishlistIcon: '.b-header_wishlist-icon',
  },
  'nastygal.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    wishListIsEmpty: '.b-wishlist-empty > :nth-child(2)',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
    removeItemFromWishlist: '.b-wishlist_tile-remove'
  },
  'dorothyperkins.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    wishListIsEmpty: '.b-wishlist-empty > :nth-child(2)',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    removeItemFromWishlist: '.b-wishlist_tile-remove',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
    wishlistIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
  },
  'burton.co.uk': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    wishListIsEmpty: '.b-wishlist-empty > :nth-child(2)',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    removeItemFromWishlist: '.b-wishlist_tile-remove',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
    wishlistIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
  },
  'wallis.co.uk': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: '.b-wishlist_tile-action > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    wishListIsEmpty: '.b-wishlist-empty > :nth-child(2)',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    removeItemFromWishlist: '.b-wishlist_tile-remove',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
    wishlistIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlist: 'form[name="dwfrm_wishlist_items_i0"] [class*="hidden-on-mobile"] .button-remove',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: '.wishlist-table form',
    wishListIsEmpty: '.b-wishlist-empty > :nth-child(2)',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action'
  },
  'warehousefashion.com': undefined,
  'oasis-stores.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlist: 'form[name="dwfrm_wishlist_items_i0"] [class*="hidden-on-mobile"] .button-remove',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: '.wishlist-table form',
    wishListIsEmpty: '.b-wishlist-empty > :nth-child(2)',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action',
    wishlistIcon: '.wishlist-button'
  },
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;
class WishListPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    sortItems () {
      const sortItems = selectors[variables.brand].sortItems;
      cy.get(sortItems);
    },
    sortByDateAddedFromNew () {
      const sortByDateAddedFromNew = selectors[variables.brand].sortByDateAddedFromNew;
      cy.get(sortByDateAddedFromNew);
    },
    sortByDateAddedFromOld () {
      const sortByDateAddedFromOld = selectors[variables.brand].sortByDateAddedFromOld;
      cy.get(sortByDateAddedFromOld);
    },
    sortByPriceFromLowToHigh () {
      const sortByPriceFromLowToHigh = selectors[variables.brand].sortByPriceFromLowToHigh;
      cy.get(sortByPriceFromLowToHigh);
    },
    sortByPriceFromHighToLow () {
      const sortByPriceFromHighToLow = selectors[variables.brand].sortByPriceFromHighToLow;
      cy.get(sortByPriceFromHighToLow);
    },
    addToCart () {
      const addToCart = selectors[variables.brand].addToCart;
      cy.get(addToCart).eq(0).click();
    },
    removeItemFromWishlist () {
      const removeItemFromWishlist = selectors[variables.brand].removeItemFromWishlist;
      cy.get(removeItemFromWishlist).eq(0).click();
    },
    wishlistLoginBtn () {
      const wishlistLoginBtn = selectors[variables.brand].wishlistLoginBtn;
      cy.get(wishlistLoginBtn).eq(0).click();
    },
    wishListIcon () {
      const wishListIcon = selectors[variables.brand].wishListIcon;
      cy.get(wishListIcon).click({ force: true });
    },

  };

  actions = {
    showInStockItemsCheckbox () {
      cy.get('.show-in-stock').check();
    },
    chooseSizeDDL (size: number) {
      const chooseSizeDDL = selectors[variables.brand].chooseSizeDDL;
      cy.get(chooseSizeDDL).select(size);
    },
    chooseSizeBHO () {
      const chooseSizeBHO = selectors[variables.brand].chooseSizeBHO;
      cy.get(chooseSizeBHO).click();
    },
    selectSizeBHO (size: number) {
      cy.get('#attribute-b42fa661ec3462331eea8571c9-size').select(size);
    },
    selectColourBHO (colour: number) {
      cy.get('.b-select-input attribute-color').select(colour);
    }
  };

  assertions = {
    assertItemIsAddedToWishlist () {
      const itemIsAddedToWishlist = selectors[variables.brand].itemIsAddedToWishlist;
      cy.get(itemIsAddedToWishlist).should('not.be.empty');
    },
    assertWishListIsEmpty (msg: string) {
      const wishListIsEmpty = selectors[variables.brand].wishListIsEmpty;
      cy.get(wishListIsEmpty).should('have.text', msg);
    },
    assertItemIsAddedtoWishlistAlertText (msg: string) {
      const itemIsAddedtoWishlistAlertText = selectors[variables.brand].itemIsAddedtoWishlistAlertText;
      cy.get(itemIsAddedtoWishlistAlertText).should('have.text', msg);
    }
  };
}

export default new WishListPage();