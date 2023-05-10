import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import productVariations from '../../helpers/productVariations';

const variables = Cypress.env() as EnvironmentVariables;

describe('Product Listing Page tests', function () {

  beforeEach(() => {
    HomePage.goto();
    HomePage.actions.closeNastygalPopup();
    if (variables.brand == 'nastygal.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
      HomePage.click.selectLinkFromMegaMenuSubNav(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
    } else if (variables.brand == 'boohoo.com' || variables.brand == 'boohooman.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
    } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'karenmillen.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLinkArkadia[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
    } else if (variables.brand == 'dorothyperkins.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewInDP[variables.language]);
    } else {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
    }
  });

  it('Verify that plp page opens', () => {
    cy.wait(3000);
    if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'karenmillen.com') {
      plpPage.assertions.assertOnPage(megaMenuLinksLanguages.urlValidationSale[variables.language]);
    } else {
      plpPage.assertions.assertOnPage(megaMenuLinksLanguages.urlLinkNewIn[variables.language]);
    }
  });
  it('Verify the "Load More" button is located at the bottom of the page and functions correctly.', () => {
    plpPage.assertions.assertLoadMoreBtnIsVisible();
    plpPage.click.loadMoreProducts();
  });
  describe('Products details are displayed', () => {  
    it('Verify product image, name and price are displayed', () => {
      plpPage.assertions.assertProductImageIsDisplayed();
      plpPage.assertions.assertProductNameIsDisplayed();
      plpPage.assertions.assertProductPriceIsDispayed();
    });
    it('Verify add to wishlist is displayed', () => {
      if (variables.brand == 'boohoo.com') {
        plpPage.click.wishlistOnPlpImage();
        plpPage.assertions.assertItemIsAddedToWishlist();
      } else if (variables.brand == 'dorothyperkins.com' || variables.brand == 'nastygal.com') {
        plpPage.click.wishlistOnPlpImage();
        plpPage.assertions.assertItemIsAddedToWishlistColorChange();
      }
    });
    it('Verify that product color is dispayed', function () {
      if (variables.brand == 'boohooman.com') { // No product colors on Plp page for this brand
        this.skip();
      }
      plpPage.assertions.assertProductColorIsDisplayedOnPLP();
    });
  });

  describe('Product refinements', () => {
    
    it('Verify category refinement is applied', () => {
      plpPage.actions.setupChangeIntercept(/category/);
      plpPage.click.selectRefinementVariantCategory(productVariations.productAccessories[variables.language]);
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('category', productVariations.productAccessories[variables.language]);
    });

    it('Verify size refinement is applied', () => {
      plpPage.actions.setupChangeIntercept(/size/);
      plpPage.click.selectRefinementVariantSize();
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductSizeIsDisplayedOnPLP();
    });
    
    it('Verify style refinement is applied', function () {
      const nastygalLocalesExcludedStyle: Array<Locale> = ['IE', 'EU', 'AU', 'US', 'CA'];
      if (variables.brand == 'nastygal.com' && nastygalLocalesExcludedStyle.includes(variables.locale)) {
        this.skip();
      }  
      plpPage.actions.setupChangeIntercept(/style/);
      plpPage.click.selectRefinementVariantStyle(productVariations.productShopByStyle[variables.language]);
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('style', productVariations.productShopByStyle[variables.language]);
    });
    
    it('Verify color refinement is applied', () => {
      plpPage.actions.setupChangeIntercept(/color/);
      plpPage.click.selectRefinementVariantColor(productVariations.ColorBlack[variables.language]);
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('color', productVariations.ColorBlack[variables.language]);
    });
    
    it('Verify price refinement is applied', function () {
      const brandsExludedPriceRefinement: Array<GroupBrands> = ['nastygal.com', 'dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];
      if (brandsExludedPriceRefinement.includes(variables.brand)) {
        this.skip();
      }
      plpPage.actions.setupChangeIntercept(/pmin=/);
      plpPage.click.selectRefinementVariantPrice();
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductPriceIsDisplayedOnPLP();
    });

    it('Verify shop by fit refinement is applied', function () {
      if (variables.brand == 'burton.co.uk' || variables.brand == 'boohooman.com') {
        this.skip();
      }  
      plpPage.actions.setupChangeIntercept(/classification/);
      plpPage.click.selectRefinementVariantShopByFit('Petite');
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('classification', 'Petite');
    });

    it('Verify occasion refinement is applied', function () {
      const brandsExcludedOccasion: Array<GroupBrands> = ['dorothyperkins.com', 'wallis.co.uk'];
      if (brandsExcludedOccasion.includes(variables.brand)) {
        this.skip();
      }
      plpPage.actions.setupChangeIntercept(/occasion/);
      plpPage.click.selectRefinementVariantOccasion();
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('occasion', 'Casual');
    });
  });
});