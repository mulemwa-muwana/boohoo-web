import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import productVariations from '../../helpers/productVariations';

const variables = Cypress.env() as EnvironmentVariables;

describe('Product Listing Page tests', function () {
  
  beforeEach(() => {
    HomePage.goto();
    if (variables.brand == 'boohoo.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
    } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaDresses[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
    } else {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
    }
  });
  it('Verify that plp page opens', () => {
    plpPage.assertions.assertOnPage(megaMenuLinksLanguages.urlLinkNewIn[variables.language]);
  });
  it.only('Verify the "Load More" button is located at the bottom of the page and functions correctly.', () => {
    plpPage.assertions.assertLoadMoreBtnIsVisible();
    plpPage.click.loadMoreProducts();
    plpPage.assertions.assertNumberOfItemsTextIsVisible();
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
      if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
        plpPage.click.wishlistOnPlpImage();
        plpPage.assertions.assertItemIsAddedToWishlist();
      } else if (variables.brand == 'dorothyperkins.com') {
        plpPage.click.wishlistOnPlpImage();
        plpPage.assertions.assertItemIsAddedToWishlistColorChange();
      }  
    });
    it('Verify that product color is dispayed', () => {
      plpPage.assertions.assertProductColorIsDisplayedOnPLP();
    });
  });

  describe('Product refinements', () => {
    it.skip('Verify category refinement is applied', () => {
      if (variables.brand == 'boohoo.com' && variables.locale == 'UK') {
        plpPage.click.categoryRefinement();
      }
      plpPage.click.selectRefinementVariantCategory(productVariations.productAccessories[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productAccessories[variables.language]);
    });
    it.skip('Verify size refinement is applied', () => {

      // PlpPage.click.sizeRefinement();
      plpPage.click.selectRefinementVariantSize(productVariations.Size[variables.locale]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.Size[variables.locale]);
    });
    it.skip('Verify style refinement is applied', () => {

      // PlpPage.click.styleRefinement();
      plpPage.click.selectRefinementVariantStyle(productVariations.productShopByStyle[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByStyle[variables.language]);
    });
    it.skip('Verify colour refinement is applied', () => {

      // PlpPage.click.colorRefinement();
      plpPage.click.selectRefinementVariantColour(productVariations.ColorBlack[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.ColorBlack[variables.language]);
    });
    it.skip('Verify price refinement is applied', () => {

      // PlpPage.click.priceRefinements();
      plpPage.click.selectRefinementVariantShopByPrice(productVariations.priceRangePLPrefinements.range0to5); 
    });
    it.skip('Verify shop by fit refinement is applied', () => {

      // PlpPage.click.shopByFitRefinements();
      plpPage.click.selectRefinementVariantShopByFit(productVariations.productShopByFitRefinementTall[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByFitRefinementTall[variables.language]);
    });
    it.skip('Verify occasion refinement is applied', () => {

      // PlpPage.click.occassionRefinement();  
      plpPage.click.selectRefinementVariantOccassion(productVariations.productShopByOccassionRefinementCasual[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByOccassionRefinementCasual[variables.language]);   
    });
  });
}); 