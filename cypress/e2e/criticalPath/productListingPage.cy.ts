import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import productVariations from '../../helpers/productVariations';
import assertionText from 'cypress/helpers/assertionText';

const variables = Cypress.env() as EnvironmentVariables;

describe('Product Listing Page tests', function () {
  
  beforeEach(() => {
    HomePage.goto();
    HomePage.actions.closeNastygalPopup();
    if (variables.brand == 'nastygal.com') {
       HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
       HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
    } else if (variables.brand == 'boohoo.com' || variables.brand == 'boohooman.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
    } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'karenmillen.com') {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaDresses[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
    } else {
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[variables.language]);
      HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
    }
  });
  it('Verify that plp page opens', () => {
    if (variables.brand == 'nastygal.com') {
      plpPage.assertions.assertOnPage(megaMenuLinksLanguages.urlDresses[variables.language]);
    } else {
      plpPage.assertions.assertOnPage(megaMenuLinksLanguages.urlLinkNewIn[variables.language]);
    }
  });
  it('Verify the "Load More" button is located at the bottom of the page and functions correctly.', () => {
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
      if (variables.brand == 'boohoo.com') {
        plpPage.click.wishlistOnPlpImage();
        plpPage.assertions.assertItemIsAddedToWishlist();
      } else if (variables.brand == 'dorothyperkins.com'|| variables.brand == 'nastygal.com') {
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
      if (variables.brand == 'boohoo.com' && variables.locale == 'UK') {
        plpPage.click.categoryRefinement();
        plpPage.click.selectRefinementVariantCategory(productVariations.productAccessories[variables.language]);
      } else if (variables.brand == 'boohoo.com' && variables.locale == 'FR') {
        cy.get('#searchRefineBarAccordionItemBtn-' + (assertionText.category[variables.language])).click();
        cy.get('#searchRefineBarAccordionItemInner-' + (assertionText.category[variables.language])).contains(productVariations.productAccessories[variables.language]).click({force: true});
      }
      cy.wait(3000);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productAccessories[variables.language]);
    });
    it('Verify size refinement is applied', () => {
      if (variables.brand == 'boohoo.com' && variables.locale == 'UK') {
        plpPage.click.sizeRefinement();
        plpPage.click.selectRefinementVariantSize('12');
        cy.wait(4000);
        plpPage.assertions.assertProductSizeIsDisplayedOnPLP('12');
      } else if (variables.brand == 'boohoo.com' && variables.locale == 'FR') {
        cy.get('#searchRefineBarAccordionItemBtn-' + (assertionText.size[variables.language])).click();
        cy.get('#refinementAttributesList-' + (assertionText.size[variables.language])).contains('38').click({force: true});
        cy.wait(4000);
        plpPage.assertions.assertProductSizeIsDisplayedOnPLP('?prefn1=sizeRefinement&prefv1=38');
      }

    });
    it.only('Verify style refinement is applied', function() {

      // PlpPage.click.styleRefinement();
      const nastygalLocalesExcludedStyle: Array<Locale> = ['IE', 'EU', 'AU','US','CA'];
      if (variables.brand == 'nastygal.com' && !nastygalLocalesExcludedStyle.includes(variables.locale) ) {
				this.skip();
      } else {
        cy.get('button[id*="-' + (assertionText.style[variables.language] + '"]')).click({force: true});
        cy.get('#refinementAttributesList-' + (assertionText.style[variables.language])).contains(productVariations.productShopByStyle[variables.language]).click({force: true});
        cy.wait(4000);
        plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByStyle[variables.language]);  // can be hard coded
      }
    });
    it.only('Verify colour refinement is applied', () => {

      // PlpPage.click.colorRefinement();
      cy.get('button[id*="-' + (assertionText.colour[variables.language] + '"]')).click({force: true});
      cy.get('#refinementAttributesList-' + (assertionText.colour[variables.language])).contains(productVariations.ColorBlack[variables.language]).click({force: true});
      cy.wait(4000);
      plpPage.assertions.assertProductVariantIsApplied(productVariations.ColorBlack[variables.language]);
    });
    it.skip('Verify price refinement is applied', () => {

      // PlpPage.click.priceRefinements();
      plpPage.click.selectRefinementVariantShopByPrice(); 
    });
    it.skip('Verify shop by fit refinement is applied', () => {

      // PlpPage.click.shopByFitRefinements();
      plpPage.click.selectRefinementVariantShopByFit();
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByFitRefinementTall[variables.language]);
    });
    it.skip('Verify occasion refinement is applied', () => {

      // PlpPage.click.occassionRefinement();  
      plpPage.click.selectRefinementVariantOccassion();
      plpPage.assertions.assertProductVariantIsApplied(productVariations.productShopByOccassionRefinementCasual[variables.language]);   
    });
  });
}); 