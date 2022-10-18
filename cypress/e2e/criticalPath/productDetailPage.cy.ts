import PdpPage from '../../pom/pdp.page';
import HomePage from '../../pom/home.page';
import skuAssertions from '../../helpers/skuAssertions';
import assertionText from '../../helpers/assertionText';
import pdpPage from '../../pom/pdp.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Product Details Page tests', function () {

  beforeEach (()=>{   
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
  });  
  it('TC01 Verify that Product name is showing',function () {
    PdpPage.assertions.assertProductNameIsDisplayed();
  });
  it('TC02 Verify that Product price is showing',function () {
    PdpPage.assertions.assertProductPriceIsDisplayed();
  });
  it('TC03 Verify that Product code is showing',function () {
    const sku = Cypress.env('sku');
    PdpPage.assertions.assertProductCodeIsDisplayed[sku];
  });
  it('TC04 Verify that images are displayed',function () {
    PdpPage.assertions.assertImageIsDisplayed('#product-image-0');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-1');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-2');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-3');
  });
  it('TC05 Verify that colour swatches are shown and selecting one will change the main image',function () {
    PdpPage.assertions.assertColorSwatchesAreVisible();
  });
  it('TC06 Verify that it is possible to select a size when available', function () {
    PdpPage.actions.selectSize();
    if (variables.brand == 'boohoo.com') {
      PdpPage.assertions.assertSizeIsAvailable(assertionText.inStock[variables.language]);
    } else {
      PdpPage.assertions.assertSizeIsAvailable(assertionText.inStockArkadia[variables.language]);  
    }    
    PdpPage.actions.addToCart();

    //  PdpPage.assertions.assertProductIsAddedToCart(assertionText.addedToCard[variables.language]); // we cannot predict when minicart pop up will appear
  });
  it('TC07 Verify if size is not selected user cannot add product to a bag', function () {
    PdpPage.assertions.assertAddToCartBtnIsNotAvailable(assertionText.selectSize[variables.language]);
  });   
  it('TC08 Verify when selecting product and click on CTA "Add to cart" the mini cart is displayed', function () {
    PdpPage.actions.selectColor(0);
    PdpPage.actions.selectSize();
    PdpPage.actions.addToCart();
    PdpPage.assertions.assertMiniCartIsDisplayed();
  }); 
  it('TC09 Verify that save for later (heart icon) is functional when selected', function () {
    PdpPage.actions.selectSize();
    PdpPage.click.addToWishList();
    cy.wait(3000);
    if (variables.brand == 'boohoo.com') {
      PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAdded[variables.language]);
    } else {
      PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAddedArkadia[variables.language]);
    }  
    
  });
  it('TC10 Verify that Style Notes and Details & Care are displayed when configured', function () {
    PdpPage.assertions.assertStyleNotesArePresent();
  });
  it('TC11 Verify that Shipping Info is displayed when configured', function () {
    if (variables.brand == 'boohoo.com') {
      PdpPage.click.shippingInfoButton();
      PdpPage.assertions.assertDeliveryInfoIsDisplayed();
    }
    pdpPage.assertions.assertDeliveryOptionsAvailableArkadia();
  });
  it('TC12 Verify that Returns Info carousel is displayed when configured', function () {
    PdpPage.assertions.assertReturnInfoIsDisplayed();
  });
  it('TC13 Verify that recomendation are displayed in COMPLETE THE LOOK category', function () {
    if (variables.brand == 'boohoo.com') {
      PdpPage.assertions.assertCompleteLookDisplayed(assertionText.completeTheLook[variables.language]);
    }
  });
 
}); 