import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import productVariations from '../../helpers/productVariations';

describe('Home Page', function (){
  
  beforeEach(() => {
    HomePage.goto();
    HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink['EN']);
    HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale['EN']);
  });
  it('Verify that plp page opens', () => {
    plpPage.assertions.assertOnPage(megaMenuLinksLanguages.saleLink['EN'].toLowerCase());
  });
  it('Verify the "Load More" button is located at the bottom of the page and functions correctly.', () => {
    plpPage.assertions.assertLoadMoreBtnIsVisible();
    plpPage.click.loadMoreProducts();
    plpPage.assertions.assertNumberOfItemsTextISVisible();
    plpPage.click.loadMoreProducts();
  });
  describe('Products details are displayed', () => {  
    it('Verify product image is displayed', () => {
      plpPage.assertions.assertProductImageIsDisplayed();
    });
    it('Verify product name is displayed', () => {
      plpPage.assertions.assertProductNameIsDisplayed();
    });
    it('Verify product price is displayed', () => {
      plpPage.assertions.assertProductPriceIsDispayed();
    });
    it.skip('Verify new product price is displayed', () => {
        
      // To be discussed is it needed because many products dont have it (maybe looping)
    });
    it('Verify add to wishlist is displayed', () => {
      plpPage.click.wishlistOnPlpImage();
      plpPage.assertions.assertItemIsAddedToWishlist();
    });
    it('Verify that product color is dispayed', () => {
      plpPage.assertions.assertProductColorIsDisplayedOnPLP();
    });
  });

  describe('Product refinements', () => {
    it('Verify category refinement is applied', () => {
      plpPage.click.categoryRefinement();  
      plpPage.click.selectRefinementVariantCategory(productVariations.productTops.EN);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productTops.EN);
    });
    it('Verify size refinement is applied', () => {
      plpPage.click.sizeRefinement();
      plpPage.click.selectRefinementVariantSize(productVariations.Size.UK);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.Size.UK);
    });
    it('Verify style refinement is applied', () => {
      plpPage.click.styleRefinement();
      plpPage.click.selectRefinementVariantStyle(productVariations.productShopByStyle.EN);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByStyle.EN);
    });
    it('Verify colour refinement is applied', () => {
      plpPage.click.colorRefinement();
      plpPage.click.selectRefinementVariantColour(productVariations.ColorBlack.EN);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.ColorBlack.EN);
    });
    it('Verify price refinement is applied', () => {
      plpPage.click.priceRefinements();
      plpPage.click.selectRefinementVariantShopByPrice(productVariations.priceRangePLPrefinements.range0to5); 
    });
    it('Verify shop by fit refinement is applied', () => {
      plpPage.click.shopByFitRefinements();
      plpPage.click.selectRefinementVariantShopByFit(productVariations.productShopByFitRefinementTall.EN);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByFitRefinementTall.EN);
    });
    it('Verify occasion refinement is applied', () => {
      plpPage.click.occassionRefinement();  
      plpPage.click.selectRefinementVariantOccassion(productVariations.productShopByOccassionRefinementCasual.EN);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByOccassionRefinementCasual.EN);   
    });
  });
}); 