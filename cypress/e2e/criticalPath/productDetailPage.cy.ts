import PdpPage from '../../pom/pdp.page';
import HomePage from '../../pom/home.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from '../../pom/pdp.page';
import LoginPage from 'cypress/pom/login.page';
import { isSiteGenesisBrand } from 'cypress/helpers/common';

const variables = Cypress.env() as EnvironmentVariables;

describe('Product Details Page tests', function () {

  beforeEach (()=>{   
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
  });  
  // eslint-disable-next-line mocha/no-exclusive-tests
  it('TC01 Verify that Product name, price and code is showing',function () {  
    PdpPage.assertions.assertProductNameIsDisplayed();
    PdpPage.assertions.assertProductPriceIsDisplayed();
    PdpPage.assertions.assertProductCodeIsDisplayed(variables.sku);

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
    PdpPage.actions.selectSize();  
    PdpPage.click.addToCart();
  });
  it('TC04 Verify if size is not selected user cannot add product to a bag', function () {
    if (variables.brand == 'boohoo.com') {
      PdpPage.assertions.assertAddToCartBtnIsNotAvailable(assertionText.selectSize[variables.language]);
    } else {
      PdpPage.assertions.assertAddToCartBtnDisabled();
    }
  });   
  it('TC05 Verify when selecting product and click on CTA "Add to cart" the mini cart is displayed', function () {
    PdpPage.actions.selectColor(0);
    PdpPage.actions.selectSize();
    if (variables.brand == 'burton.co.uk') {
      cy.wait(3000);
    }
    PdpPage.click.addToCart(); 
    PdpPage.assertions.assertMiniCartIsDisplayed();
  }); 
  it('TC06 Verify that save for later (heart icon) is functional when selected', function () {
    PdpPage.actions.selectSize();
    PdpPage.click.addToWishList();
    cy.wait(3000);
    if (variables.brand == 'boohoo.com') {
      PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAdded[variables.language]);
    } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'warehousefashion.com' || variables.brand == 'karenmillen.com' || variables.brand == 'boohooman.com' || variables.brand == 'boohoomena.com') {
      LoginPage.assertions.assertWishlistLoginTitleIsPresent(assertionText.WishlistLoginTitle[variables.language]);
    } else if (variables.brand == 'misspap.com') {
      LoginPage.assertions.assertWishlistLoginTitleIsPresent(assertionText.WishlistLoginTitleMisspap[variables.language]);
    } else {
      PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAddedArkadia[variables.language]);
    }
  });
  it('TC07 Verify that Style Notes, Shipping & Return Info are displayed when configured', function () {
    PdpPage.assertions.assertProductDescriptionIsPresent();
    if (variables.brand == 'boohoo.com' || variables.brand == 'coastfashion.com' || variables.brand == 'warehousefashion.com') {
      PdpPage.click.shippingInfoButton();
      PdpPage.assertions.assertDeliveryInfoIsDisplayed();
    }
    if (variables.brand == 'dorothyperkins.com' || variables.brand == 'burton.co.uk' || variables.brand == 'wallis.co.uk') {
      pdpPage.assertions.assertDeliveryOptionsAreDisplayed();
    } else {
      PdpPage.assertions.assertReturnInfoIsDisplayed(); 
    }

    // We need to instal plugin for continuing after failed assertation just in case
  });
  it('TC08 Verify that recomendation are displayed in COMPLETE THE LOOK category', function () {
    if (variables.brand == 'boohoo.com') {
      PdpPage.assertions.assertCompleteLookDisplayed(assertionText.completeTheLook[variables.language]);
    } else {
      this.skip();
    }
  });
}); 