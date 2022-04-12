import PdpPage from '../../pom/pdp.page';
import HomePage from '../../pom/home.page';

describe('Product Details Page tests', function () {

  beforeEach (()=>{
    HomePage.goto();
    
    HomePage.actions.findItemUsingSKU('aDZZ02796-256-56');
  });
    
  it('TC01 Verify that Product name is showing',function (){
    PdpPage.assertions.assertProductNameIsDisplayed ('\nGrey Oversized Hoodie\n');
  });
  it('TC02 Verify that Product price is showing',function (){
    PdpPage.assertions.assertProductPriceIsDisplayed();
  });
  it('TC03 Verify that Product code is showing',function (){
    PdpPage.assertions.assertProductCodeIsDisplayed ('#DZZ02796-8');
  });
  it('TC04 Verify that images are displayed',function (){
    PdpPage.assertions.assertImageIsDisplayed('#product-image-0');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-1');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-2');
    PdpPage.assertions.assertImageIsDisplayed('#product-image-3');
  });
  it('TC05 Verify that colour swatches are shown and selecting one will change the main image',function (){
    PdpPage.assertions.assertColorSwatchesAreVisible();
    PdpPage.actions.selectColor(3); //  Color is selected by its index number(trying to find better solution)
    PdpPage.assertions.assertColorIsDisplayed('black');
  });
  it('TC06 Verify that it is possible to select a size when available', function (){
    PdpPage.actions.selectColor(0);
    PdpPage.actions.selectSize(0);
    PdpPage.assertions.assertSizeIsAvailable();
    PdpPage.actions.addToCart();
    PdpPage.assertions.assertProductIsAddedToCart();
  });
  it('TC07 Verify that when product not available/out of stock the size is disabled', function (){
    PdpPage.actions.selectColor(4);
    PdpPage.assertions.assertColorIsDisplayed('white');
    PdpPage.actions.selectSize(0);
  });
  it('TC08 Verify if size is not selected, and user tries to add product to a bag, error message is displayed', function (){
    PdpPage.actions.addToCart();
    PdpPage.assertions.assertErrorMsgForSizeIsDisplayed();
  });   
  it('TC09 Verify when selecting product and click on CTA "Add to cart" the mini cart is displayed', function (){
    PdpPage.actions.selectColor(0);
    PdpPage.actions.selectSize(0);
    PdpPage.actions.addToCart();
    PdpPage.assertions.assertMiniCartIsDisplayed();
  }); 
  it('TC10 Verify that save for later (heart icon) is functional when selected', function (){
    PdpPage.click.addToWishList();
    PdpPage.assertions.assertProductIsAddedToWishlist();
  });
  it('TC11 Verify that Style Notes and Details & Care are displayed when configured', function (){
    PdpPage.assertions.assertStyleNotesArePresent();
  });
  it('TC12 Verify that Shipping Info is displayed when configured', function (){
    PdpPage.click.shippingInfoButton();
    PdpPage.assertions.assertDeliveryInfoIsDisplayed();
  });
  it('TC13 Verify that Returns Info carousel is displayed when configured', function (){
    PdpPage.click.shippingInfoButton();
    PdpPage.assertions.assertReturnInfoIsDisplayed();
    PdpPage.click.returnLink();
    PdpPage.assertions.assertStartReturnPageIsDisplayed();
  });
  it('TC14 Verify that recomendation are displayed in COMPLETE THE LOOK category', function (){
    PdpPage.assertions.assertCompleteLookDisplayed();
    PdpPage.click.shopNowLinkNL();
    PdpPage.assertions.assertLinkNewSeasonIsLinked();
    cy.go('back');
    PdpPage.click.shopNowLinkSA();
    PdpPage.assertions.assertLinkShoesAndAccIsLinked();
  });
 
});  