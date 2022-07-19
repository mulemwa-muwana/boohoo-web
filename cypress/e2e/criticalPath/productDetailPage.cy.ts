import PdpPage from '../../pom/pdp.page';
import HomePage from '../../pom/home.page';
import { EnvironmentVariables, SKU } from '../../support/types';
import skuAssertions from '../../helpers/skuAssertions';
import assertionText from '../../helpers/assertionText';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';

describe('Product Details Page tests', function () {

  beforeEach (()=>{
    const variables = Cypress.env() as EnvironmentVariables;

    HomePage.goto();
    HomePage.actions.findItemUsingSKU[variables.sku]; // {enter} might be missing
  });
    
  it('TC01 Verify that Product name is showing',function (){
    const variables = Cypress.env() as EnvironmentVariables;
    PdpPage.assertions.assertProductNameIsDisplayed (skuAssertions.skuTitle[variables.language]);
  });
  it('TC02 Verify that Product price is showing',function (){
    PdpPage.assertions.assertProductPriceIsDisplayed();
  });
  it('TC03 Verify that Product code is showing',function (){
    const sku = Cypress.env('sku');
    PdpPage.assertions.assertProductCodeIsDisplayed[sku]; 
  });
  it('TC04 Verify that images are displayed',function (){
    PdpPage.assertions.assertImageIsDisplayed('#product-image-0');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-1');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-2');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-3');
  });
  it('TC05 Verify that colour swatches are shown and selecting one will change the main image',function (){
    const variables = Cypress.env() as EnvironmentVariables;
    PdpPage.assertions.assertColorSwatchesAreVisible();
    PdpPage.actions.selectColor(0); //  Color is selected by its index number(trying to find better solution)
    PdpPage.assertions.assertColorIsDisplayed(skuAssertions.mainSkuColor[variables.language]);
  });
  it('TC06 Verify that it is possible to select a size when available', function (){
    const language = Cypress.env('language');
    PdpPage.actions.selectColor(0);
    PdpPage.actions.selectSize(1);
    PdpPage.assertions.assertSizeIsAvailable(assertionText.inStock[language]);
    PdpPage.actions.addToCart();
    PdpPage.assertions.assertProductIsAddedToCart(assertionText.addedToCard[language]);
  });
  it('TC07 Verify if size is not selected, and user tries to add product to a bag, error message is displayed', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    PdpPage.actions.addToCart();
    PdpPage.assertions.assertErrorMsgForSizeIsDisplayed(assertionText.sizeErrorMsg[variables.language]);
  });   
  it('TC08 Verify when selecting product and click on CTA "Add to cart" the mini cart is displayed', function (){
    PdpPage.actions.selectColor(0);
    PdpPage.actions.selectSize(0);
    PdpPage.actions.addToCart();
    PdpPage.assertions.assertMiniCartIsDisplayed();
  }); 
  it('TC09 Verify that save for later (heart icon) is functional when selected', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    PdpPage.click.addToWishList();
    PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAdded[variables.language]);
  });
  it('TC10 Verify that Style Notes and Details & Care are displayed when configured', function (){
    PdpPage.assertions.assertStyleNotesArePresent();
  });
  it('TC11 Verify that Shipping Info is displayed when configured', function (){
    PdpPage.click.shippingInfoButton();
    PdpPage.assertions.assertDeliveryInfoIsDisplayed();
  });
  it('TC12 Verify that Returns Info carousel is displayed when configured', function (){
    PdpPage.click.shippingInfoButton();
    PdpPage.assertions.assertReturnInfoIsDisplayed();
    PdpPage.click.returnLink();
    PdpPage.assertions.assertStartReturnPageIsDisplayed();
  });
  it('TC13 Verify that recomendation are displayed in COMPLETE THE LOOK category', function (){
    const variables = Cypress.env() as EnvironmentVariables;
    PdpPage.assertions.assertCompleteLookDisplayed();
    PdpPage.click.shopNowLinkNL();
    PdpPage.assertions.assertLinkNewSeasonIsLinked(megaMenuLinksLanguages.newSeason[variables.language]);
    cy.go('back');
    PdpPage.click.shopNowLinkSA();
    PdpPage.assertions.assertLinkShoesAndAccIsLinked(megaMenuLinksLanguages.shoesAndAcc[variables.language]);
  });
 
});  