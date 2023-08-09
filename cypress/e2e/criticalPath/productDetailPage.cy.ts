import PdpPage from '../../pom/pdp.page';
import HomePage from '../../pom/home.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from '../../pom/pdp.page';
import LoginPage from 'cypress/pom/login.page';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import { sku, brand, language } from 'cypress/support/e2e';

describe('Product Details Page tests', function () {

  beforeEach (()=>{   
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(sku);
  });  

  it('TC01 Verify that Product name, price and code is showing',function () { 
    const SKU = sku.replace(/^#/g, '') 
    PdpPage.assertions.assertProductNameIsDisplayed();
    PdpPage.assertions.assertProductPriceIsDisplayed();
    PdpPage.assertions.assertProductCodeIsDisplayed(SKU); 

    // We need to instal plugin for continuing after failed assertation just in case

    if (isSiteGenesisBrand) {
      PdpPage.assertions.assertImageIsDisplayed('.thumb-image');
    } else {
      PdpPage.assertions.assertImageIsDisplayed('#product-image-0');
      PdpPage.assertions.assertImageIsDisplayed('#product-image-1');
      PdpPage.assertions.assertImageIsDisplayed('#product-image-2');
    }

    // PdpPage.assertions.assertImageIsDisplayed('#product-image-3');  some products have only 3 images
  });
  
  it('TC02 Verify that colour swatches are displayed',function () {
    PdpPage.assertions.assertColorSwatchesAreVisible();
  });
  it('TC03 Verify that it is possible to select a size when available', function () {
    PdpPage.actions.selectFirstAvailableSize();  
    PdpPage.click.addToCart();
  });
  it('TC04 Verify if size is not selected user cannot add product to a bag', function () {
    if (brand == 'boohoo.com') {
      PdpPage.assertions.assertAddToCartBtnIsNotAvailable(assertionText.selectSize[language]);
    } else {
      PdpPage.assertions.assertAddToCartBtnDisabled();
    }
  });   
  it('TC05 Verify when selecting product and click on CTA "Add to cart" the mini cart is displayed', function () {
    PdpPage.actions.selectColorByIndex(0);
    PdpPage.actions.selectFirstAvailableSize();
    if (brand == 'burton.co.uk') {
      cy.wait(3000);
    }
    PdpPage.click.addToCart(); 
    PdpPage.assertions.assertMiniCartIsDisplayed();
  }); 
  it('TC06 Verify that save for later (heart icon) is functional when selected', function () {
    PdpPage.actions.selectFirstAvailableSize();
    PdpPage.click.addToWishList();
    cy.wait(3000);
    if (brand == 'boohoo.com') {
      PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAdded[language]);
    } else if (brand == 'coastfashion.com' || brand == 'oasis-stores.com' || brand == 'warehousefashion.com' || brand == 'karenmillen.com' || brand == 'boohooman.com' || brand == 'boohoomena.com') {
      LoginPage.assertions.assertWishlistLoginTitleIsPresent(assertionText.WishlistLoginTitle[language]);
    } else if (brand == 'misspap.com') {
      LoginPage.assertions.assertWishlistLoginTitleIsPresent(assertionText.WishlistLoginTitleMisspap[language]);
    } else {
      PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAddedArkadia[language]);
    }
  });
  it('TC07 Verify that Style Notes, Shipping & Return Info are displayed when configured', function () {
    PdpPage.assertions.assertProductDescriptionIsPresent();
    if (brand == 'boohoo.com' || brand == 'coastfashion.com' || brand == 'warehousefashion.com') {
      PdpPage.click.shippingInfoButton();
      PdpPage.assertions.assertDeliveryInfoIsDisplayed();
    }
    if (brand == 'dorothyperkins.com' || brand == 'burton.co.uk' || brand == 'wallis.co.uk'||brand == 'oasis-stores.com') {
      pdpPage.assertions.assertDeliveryOptionsAreDisplayed();
    } else {
      PdpPage.assertions.assertReturnInfoIsDisplayed(); 
    }

    // We need to instal plugin for continuing after failed assertation just in case
  });
  it('TC08 Verify that recomendation are displayed in COMPLETE THE LOOK category', function () {
    if (brand == 'boohoo.com') {
      PdpPage.assertions.assertCompleteLookDisplayed(assertionText.completeTheLook[language]);
    } else {
      this.skip();
    }
  });
}); 