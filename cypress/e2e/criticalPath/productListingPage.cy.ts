import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import productVariations from '../../helpers/productVariations';
import assertionText from 'cypress/helpers/assertionText';
import priceVariations from 'cypress/helpers/priceVariations';
import { isSiteGenesisBrand } from 'cypress/helpers/common';

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
      if (isSiteGenesisBrand) {
        plpPage.click.selectRefinementVariantCategory(productVariations.productAccessories[variables.language]);
      } else {
        cy.get('button[id*="-' + (assertionText.category[variables.language] + '"]')).click({ force: true });
        cy.get('#searchRefineBarAccordionItemPanel-' + (assertionText.category[variables.language])).contains(productVariations.productAccessories[variables.language]).click({ force: true });
      }
      cy.intercept(/category/).as('updateRefinement');
      cy.wait('@updateRefinement', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
      plpPage.assertions.assertProductVariantIsApplied('category', productVariations.productAccessories[variables.language]);
    });
    it('Verify size refinement is applied', () => {
      if (isSiteGenesisBrand) {
        plpPage.click.selectRefinementVariantSize();
        cy.intercept(/size/).as('updateRefinement');
        cy.wait('@updateRefinement', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
        cy.get('.sizeRefinement > div > ul > li.swatches-item.selected').invoke('attr', 'data-value').as('selectedSize').then(function () {
          plpPage.assertions.assertProductSizeIsDisplayedOnPLP(this.selectedSize);
        });
      } else {
        cy.get('button[id*="-' + (assertionText.size[variables.language] + '"]')).click({ force: true });
        cy.get('#searchRefineBarAccordionItemPanel-' + (assertionText.size[variables.language])).find('li').each(($element) => {
          if ($element.attr('data-tau')) {
            $element.find('span').trigger('click');
            return false;
          }
        })
        cy.intercept(/size/).as('updateRefinement');
        cy.wait('@updateRefinement', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
        cy.get('#refinementAttributesList-' + (assertionText.size[variables.language]) + ' li div[aria-checked="true"]').invoke('attr', 'aria-label').as('selectedSize').then(function () {
          plpPage.assertions.assertProductSizeIsDisplayedOnPLP(this.selectedSize);
        });
      }
    });
    it('Verify style refinement is applied', function () {
      const nastygalLocalesExcludedStyle: Array<Locale> = ['IE', 'EU', 'AU', 'US', 'CA'];
      if (variables.brand == 'nastygal.com' && !nastygalLocalesExcludedStyle.includes(variables.locale)) {
        this.skip();
      } else if (isSiteGenesisBrand) {
        plpPage.click.selectRefinementVariantStyle(productVariations.productShopByStyle[variables.language])
      } else {
        cy.get('button[id*="-' + (assertionText.style[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.style[variables.language])).contains(productVariations.productShopByStyle[variables.language]).click({ force: true });
      }
      cy.intercept(/style/).as('updateRefinement');
      cy.wait('@updateRefinement', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
      plpPage.assertions.assertProductVariantIsApplied('style', productVariations.productShopByStyle[variables.language]);
    });
    it('Verify color refinement is applied', () => {
      if (isSiteGenesisBrand) {
        plpPage.click.selectRefinementVariantColor(productVariations.ColorBlack[variables.language])
      } else {
        cy.get('button[id*="-' + (assertionText.colour[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.colour[variables.language])).contains(productVariations.ColorBlack[variables.language]).click({ force: true });
      }
      cy.intercept(/color/).as('updateRefinement');
      cy.wait('@updateRefinement', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
      plpPage.assertions.assertProductVariantIsApplied('color', productVariations.ColorBlack[variables.language]);
    });
    it('Verify price refinement is applied', function () {
      const brandsExludedPriceRefinement: Array<GroupBrands> = ['nastygal.com', 'dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];
      if (brandsExludedPriceRefinement.includes(variables.brand)) {
        this.skip();
      } else if (isSiteGenesisBrand) {
        plpPage.click.selectRefinementVariantPrice();
      } else {
        cy.get('button[id*="-' + (assertionText.price[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-price').find('li').each(($element) => {
          if ($element.attr('data-tau')) {
            $element.find('span').trigger('click');
            return false;
          }
        })
      }
      cy.intercept(/pmin=/).as('updateRefinement');
      cy.wait('@updateRefinement', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
      plpPage.assertions.assertProductPriceIsDisplayedOnPLP();
    });
    it('Verify shop by fit refinement is applied', function () {
      if (variables.brand == 'burton.co.uk') {
        this.skip();
      } else if (isSiteGenesisBrand) {
        plpPage.click.selectRefinementVariantShopByFit('Petite')
      } else if (variables.brand == 'dorothyperkins.com') {
        cy.get('button[id*="-shop-by-body-fit"]').click({ force: true });
        cy.get('#refinementAttributesList-shop-by-body-fit').contains('Petite').click({ force: true });
      } else {
        cy.get('button[id*="-' + (assertionText.shopByFit[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.shopByFit[variables.language])).contains('Petite').click({ force: true });
      }
      cy.intercept(/classification/).as('updateRefinement');
      cy.wait('@updateRefinement', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
      plpPage.assertions.assertProductVariantIsApplied('classification', 'Petite');
    });
    it('Verify occasion refinement is applied', function () {
      const brandsExcludedOccasion: Array<GroupBrands> = ['dorothyperkins.com', 'wallis.co.uk'];
      if (brandsExcludedOccasion.includes(variables.brand)) {
        this.skip();
      } else if (isSiteGenesisBrand) {
        plpPage.click.selectRefinementVariantOccasion('Casual');
      } else {
        cy.get('button[id*="-' + (assertionText.occasion[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.occasion[variables.language])).contains('Casual').click({ force: true });
      }
      cy.intercept(/occasion/).as('updateRefinement');
      cy.wait('@updateRefinement', { timeout: 30000 }).its('response.statusCode').should('eq', 200);
      plpPage.assertions.assertProductVariantIsApplied('occasion', 'Casual');
    });
  });
});