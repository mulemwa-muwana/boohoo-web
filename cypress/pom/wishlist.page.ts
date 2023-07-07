import { brand } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import { isMobileDeviceUsed } from 'cypress/helpers/common';

const variables = Cypress.env() as EnvironmentVariables;

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span , .b-wishlist_tile-actions > button',
    removeItemFromWishlist: 'a[data-tau="wishlist_product_delete"]',
    removeItemFromWishlistMobile: '.b-wishlist_tile-sub_action[data-ref="remove"]',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-tau-product-id="product-${variables.fullSku}"]`,
    wishListIsEmpty: '.b-wishlist-empty_text',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action'
  },
  'nastygal.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: `[data-tau-product-id="product-${variables.fullSku}"]`,
    confirmRemoveWishlistItem:'button[data-tau="remove_item_confirmation_confirm"]',
    wishListIsEmpty: '.b-wishlist-empty',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
    removeItemFromWishlist: '.b-wishlist_tile-remove',
    removeItemFromWishlistMobile: '.b-wishlist_tile-remove'
  },
  'dorothyperkins.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: `[data-tau-product-id="product-${variables.fullSku}"]`,
    confirmRemoveWishlistItem:'button[data-tau="remove_item_confirmation_confirm"]',
    wishListIsEmpty: '.b-wishlist-empty_text',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    removeItemFromWishlist: '.b-wishlist_tile-remove',
    removeItemFromWishlistMobile: '.b-wishlist_tile-remove',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
  },
  'burton.co.uk': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'div.b-wishlist_tile-actions > button > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: `[data-tau-product-id="product-${variables.fullSku}"]`,
    confirmRemoveWishlistItem:'button[data-tau="remove_item_confirmation_confirm"]',
    wishListIsEmpty: '.b-wishlist-empty_text',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    removeItemFromWishlist: '.b-wishlist_tile-remove',
    removeItemFromWishlistMobile: '.b-wishlist_tile-remove',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
  },
  'wallis.co.uk': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: '.b-wishlist_tile-action > span',
    wishlistLoginBtn: '.b-button',
    itemIsAddedToWishlist: `[data-tau-product-id="product-${variables.fullSku}"]`,
    confirmRemoveWishlistItem:'button[data-tau="remove_item_confirmation_confirm"]',
    wishListIsEmpty: '.b-wishlist-empty_text',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    removeItemFromWishlist: '.b-wishlist_tile-remove',
    removeItemFromWishlistMobile: '.b-wishlist_tile-remove',
    chooseSizeDDL: '[data-id="attribute-size"] > .b-select > .b-select-input',
  },
  'boohooman.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: '.button-fancy-small',
    removeItemFromWishlist: 'form[name="dwfrm_wishlist_items_i0"] [class*="hidden-on-mobile"] .button-remove',
    removeItemFromWishlistMobile: ':nth-child(3) > .button-text > .button-remove-text',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.wishlist-empty-message',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action'
  },
  'karenmillen.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlist: ".hidden-on-mobile [class='button-text button-remove js-remove-from-bag']",
    removeItemFromWishlistMobile: ':nth-child(3) > .button-text > .button-remove-text',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.wishlist-empty-message',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action'
  },
  'coastfashion.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlist: 'form[name="dwfrm_wishlist_items_i0"] [class*="hidden-on-mobile"] .button-remove',
    removeItemFromWishlistMobile: ':nth-child(3) > .button-text > .button-remove-text',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.wishlist-empty-message',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action'
  },
  'warehousefashion.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlistMobile: ':nth-child(3) > .button-text > .button-remove-text',
    removeItemFromWishlist: 'form[name="dwfrm_wishlist_items_i0"] [class*="hidden-on-mobile"] .button-remove',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.wishlist-empty-message',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action'
  },
  'oasis-stores.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlist: 'form[name="dwfrm_wishlist_items_i0"] [class*="hidden-on-mobile"] .button-remove',
    removeItemFromWishlistMobile: ':nth-child(3) > .button-text > .button-remove-text',
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.wishlist-empty-message',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action',
    wishlistIcon: '.wishlist-button'
  },
  'misspap.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlistMobile: ':nth-child(3) > .button-text > .button-remove-text',
    removeItemFromWishlist: ".hidden-on-mobile [class='button-text button-remove js-remove-from-bag']",
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.wishlist-empty-message',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action',
    wishlistIcon: '.wishlist-button'
  },
  'boohoomena.com': {
    sortItems: 'div.b-wishlist-sorting',
    sortByDateAddedFromNew: '//*[@id="wishlist-sort"]/option[1]',
    sortByDateAddedFromOld: '//*[@id="wishlist-sort"]/option[2]',
    sortByPriceFromLowToHigh: '//*[@id="wishlist-sort"]/option[3]',
    sortByPriceFromHighToLow: '//*[@id="wishlist-sort"]/option[4]',
    addToCart: 'form[name="dwfrm_wishlist_items_i0"] button[class*="button-fancy-small"]',
    removeItemFromWishlist: 'form[name="dwfrm_wishlist_items_i0"] [class*="hidden-on-mobile"] .button-remove',
    removeItemFromWishlistMobile: "[class='item-options-button is-mobile'] .button-remove-text",
    wishlistLoginBtn: '#maincontent > div > main > div.b-wishlist.m-guest > div > div > div.b-wishlist-empty > div.b-wishlist-actions > a',
    itemIsAddedToWishlist: `[data-pid="${variables.fullSku}"]`,
    wishListIsEmpty: '.wishlist-empty-message',
    itemIsAddedtoWishlistAlertText: '.b-global_alerts-item',
    chooseSizeBHO: '.b-wishlist_tile-actions > .b-wishlist_tile-action'
  }
};
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
      cy.get(addToCart).eq(0).click({ force: true });
    },
    removeItemFromWishlist () {
      const removeItemFromWishlist = selectors[variables.brand].removeItemFromWishlist;
      const removeItemFromWishListMobile = selectors[variables.brand].removeItemFromWishlistMobile;
      if (isMobileDeviceUsed) {
        this.removeItemFuncForWebAndMobile(removeItemFromWishListMobile);
      } else {  
        this.removeItemFuncForWebAndMobile(removeItemFromWishlist);
      }
    },
    removeItemFuncForWebAndMobile (deviceLocator: string) { // Function to remove item from wishlist for both Mobile and Web Resolution 
      const confirmRemoveWishlistItem=selectors[variables.brand].confirmRemoveWishlistItem;
      cy.get(deviceLocator).each(item => {
        cy.get(deviceLocator).eq(0).click({force:true});
        if (brand == 'wallis.co.uk' || brand == 'burton.co.uk' || brand == 'nastygal.com') {
          cy.get(confirmRemoveWishlistItem).click({ force: true });
        }
        cy.wait(3000);
      });

    },
    wishlistLoginBtn () {
      const wishlistLoginBtn = selectors[variables.brand].wishlistLoginBtn;
      cy.get(wishlistLoginBtn).eq(0).click();
    }

  };

  actions = {
    showInStockItemsCheckbox () {
      cy.get('.show-in-stock').check();
    },
    chooseSizeDDL (size: string) {
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
      cy.wait(2000);
      cy.get(itemIsAddedToWishlist).should('be.visible');
    },
    assertWishListIsEmpty (msg: string) {
      const wishListIsEmpty = selectors[variables.brand].wishListIsEmpty;
        cy.get(wishListIsEmpty).contains(msg, { matchCase: false }).should('be.visible');
    },
    assertItemIsAddedtoWishlistAlertText (msg: string) {
      const itemIsAddedtoWishlistAlertText = selectors[variables.brand].itemIsAddedtoWishlistAlertText;
      cy.get(itemIsAddedtoWishlistAlertText).should('have.text', msg);
    }
  };
}

export default new WishListPage();