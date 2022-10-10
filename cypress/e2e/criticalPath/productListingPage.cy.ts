import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import productVariations from '../../helpers/productVariations';

const variables = Cypress.env() as EnvironmentVariables;

describe('Home Page', function () {
  
  beforeEach(() => {
    const variables = Cypress.env() as EnvironmentVariables;
    HomePage.goto();
    HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[variables.language]);
    HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaDresses[variables.language]);
  });
  it('Verify that plp page opens', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    plpPage.assertions.assertOnPage(megaMenuLinksLanguages.linkArkadiaDresses[variables.language].toLowerCase());
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
      
      if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
        plpPage.assertions.assertItemIsAddedToWishlist();
      } else if (variables.brand == 'dorothyperkins.com') {
        plpPage.assertions.assertItemIsAddedToWishlistColorChange();
      }  
    });
    it('Verify that product color is dispayed', () => {
      plpPage.assertions.assertProductColorIsDisplayedOnPLP();
    });
  });

  describe('Product refinements', () => {
    it('Verify category refinement is applied', () => {
      const variables = Cypress.env() as EnvironmentVariables; 
      if (variables.brand == 'boohoo.com' && variables.locale == 'UK') {
        plpPage.click.categoryRefinement();
      }
      plpPage.click.selectRefinementVariantCategory(productVariations.productAccessories[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productAccessories[variables.language]);
    });
    it('Verify size refinement is applied', () => {
      const variables = Cypress.env() as EnvironmentVariables;

      // PlpPage.click.sizeRefinement();
      plpPage.click.selectRefinementVariantSize(productVariations.Size[variables.locale]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.Size[variables.locale]);
    });
    it('Verify style refinement is applied', () => {
      const variables = Cypress.env() as EnvironmentVariables;

      // PlpPage.click.styleRefinement();
      plpPage.click.selectRefinementVariantStyle(productVariations.productShopByStyle[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByStyle[variables.language]);
    });
    it('Verify colour refinement is applied', () => {
      const variables = Cypress.env() as EnvironmentVariables;

      // PlpPage.click.colorRefinement();
      plpPage.click.selectRefinementVariantColour(productVariations.ColorBlack[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.ColorBlack[variables.language]);
    });
    it('Verify price refinement is applied', () => {

      // PlpPage.click.priceRefinements();
      plpPage.click.selectRefinementVariantShopByPrice(productVariations.priceRangePLPrefinements.range0to5); 
    });
    it('Verify shop by fit refinement is applied', () => {
      const variables = Cypress.env() as EnvironmentVariables;

      // PlpPage.click.shopByFitRefinements();
      plpPage.click.selectRefinementVariantShopByFit(productVariations.productShopByFitRefinementTall[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByFitRefinementTall[variables.language]);
    });
    it('Verify occasion refinement is applied', () => {
      const variables = Cypress.env() as EnvironmentVariables;

      // PlpPage.click.occassionRefinement();  
      plpPage.click.selectRefinementVariantOccassion(productVariations.productShopByOccassionRefinementCasual[variables.language]);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByOccassionRefinementCasual[variables.language]);   
    });
  });
}); 