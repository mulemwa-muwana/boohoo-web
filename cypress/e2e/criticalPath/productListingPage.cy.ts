import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import productVariations from '../../helpers/productVariations';
import { brand, language, locale } from 'cypress/support/e2e';

describe('Product Listing Page tests', function () {

  beforeEach(() => {
    HomePage.goto();
    HomePage.actions.closeNastygalPopup();
    if (brand == 'nastygal.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[language]);
      HomePage.click.selectLinkFromMegaMenuSubNav(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[language]);
    } else if (brand == 'boohoo.com' || brand == 'boohooman.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[language]);
    } else if (brand == 'coastfashion.com' || brand == 'oasis-stores.com' || brand == 'karenmillen.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLinkArkadia[language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[language]);
    } else if (brand == 'dorothyperkins.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewInDP[language]);
    } else {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[language]);
    }
  });

  it('Verify that plp page opens', () => {
    cy.wait(3000);
    if (brand == 'coastfashion.com' || brand == 'oasis-stores.com' || brand == 'karenmillen.com') {
      plpPage.assertions.assertOnPage(megaMenuLinksLanguages.urlValidationSale[language]);
    } else {
      plpPage.assertions.assertOnPage(megaMenuLinksLanguages.urlLinkNewIn[language]);
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
      if (brand == 'boohoo.com') {
        plpPage.click.wishlistOnPlpImage();
        plpPage.assertions.assertItemIsAddedToWishlist();
      } else if (brand == 'dorothyperkins.com' || brand == 'nastygal.com') {
        plpPage.click.wishlistOnPlpImage();
        plpPage.assertions.assertItemIsAddedToWishlistColorChange();
      }
    });
    it('Verify that product color is dispayed', function () {
      if (brand == 'boohooman.com') { // No product colors on Plp page for this brand
        this.skip();
      }
      plpPage.assertions.assertProductColorIsDisplayedOnPLP();
    });
  });

  describe('Product refinements', () => {
    
    it('Verify category refinement is applied', () => {
      plpPage.actions.setupChangeIntercept(/category/);
      plpPage.click.selectRefinementVariantCategory(productVariations.productAccessories[language]);
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('category', productVariations.productAccessories[language]);
    });

    it('Verify size refinement is applied', () => {
      plpPage.actions.setupChangeIntercept(/size/);
      plpPage.click.selectRefinementVariantSize();
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductSizeIsDisplayedOnPLP();
    });
    
    it('Verify style refinement is applied', function () {
      const nastygalLocalesExcludedStyle: Array<Locale> = ['IE', 'EU', 'AU', 'US', 'CA'];
      if ((brand == 'nastygal.com' && nastygalLocalesExcludedStyle.includes(locale)) || (brand =='misspap.com')) {
        this.skip();
      } 
      plpPage.actions.setupChangeIntercept(/style/);
      plpPage.click.selectRefinementVariantStyle(productVariations.productShopByStyle[language]);
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('style', productVariations.productShopByStyle[language]);   
    });
    
    it('Verify color refinement is applied', () => {
      plpPage.actions.setupChangeIntercept(/color/);
      plpPage.click.selectRefinementVariantColor(productVariations.ColorBlack[language]);
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('color', productVariations.ColorBlack[language]);
    });
    
    it('Verify price refinement is applied', function () {
      const brandsExludedPriceRefinement: Array<GroupBrands> = ['nastygal.com', 'dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];
      if (brandsExludedPriceRefinement.includes(brand)) {
        this.skip();
      }
      plpPage.actions.setupChangeIntercept(/pmin=/);
      plpPage.click.selectRefinementVariantPrice();
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductPriceIsDisplayedOnPLP();
    });

    it('Verify shop by fit refinement is applied', function () {
      if (brand == 'burton.co.uk' || brand == 'boohooman.com' || brand == 'misspap.com') {
        this.skip();
      }  
      plpPage.actions.setupChangeIntercept(/classification/);
      plpPage.click.selectRefinementVariantShopByFit('Petite');
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('classification', 'Petite');
    });

    it('Verify occasion refinement is applied', function () {
      const brandsExcludedOccasion: Array<GroupBrands> = ['dorothyperkins.com', 'wallis.co.uk'];
      if (brandsExcludedOccasion.includes(brand)) {
        this.skip();
      }
      plpPage.actions.setupChangeIntercept(/occasion/);
      plpPage.click.selectRefinementVariantOccasion();
      plpPage.actions.waitForPageRefinementUpdate();
      plpPage.assertions.assertProductVariantIsApplied('occasion', 'Casual');
    });
  });
});