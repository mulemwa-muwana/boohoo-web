import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class PlpPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {

    // Refinements
    categoryRefinement (){
      cy.get('#searchRefineBarAccordionItemBtn-category > span').click();
    },
    sizeRefinement (){
      cy.get('#searchRefineBarAccordionItemBtn-size > span').click();
    },
    styleRefinement (){
      cy.get('#searchRefineBarAccordionItemBtn-style > span').click();
    },
    colorRefinements (){
      cy.get('#searchRefineBarAccordionItemBtn-colour > span').click();
    },
    priceRefinements (){
      cy.get('#searchRefineBarAccordionItemBtn-price > span').click();
    },
    shopByFitRefinements (){
      cy.get('#searchRefineBarAccordionItemBtn-shop-by-fit > span').click();
    },
    occassionRefinement (){
      cy.get('#searchRefineBarAccordionItemBtn-occasion > span').click();
    },
    sortProducts (){
      cy.get('#plp-sort-desktop').click();
    },
    priceVariant (){
      cy.get(':nth-child(2) > .b-refinement_radio > .b-refinement_radio-label').click();
    },
    
    // Refinement variants: Colours, Sizes, occassions
    selectRefinementVariant (text: string){
      cy.contains(text).click({force: true});
    },

    // Load more products
    loadMoreProducts (){
      cy.scrollTo('bottom');
      cy.get('div.b-load_more > a').click();
      cy.wait(10000);
    },

    // Product details (image, name, price, wishlist, quickview)
    wishlistOnPlpImage (){
      cy.get('.b-wishlist_button-icon').eq(0).click();
    }
    
  };

  actions = {
    
  };

  assertions = {
    assertOnPage (){
      cy.url().then(currentUrl => {
        expect(currentUrl).to.contain('back-in-stock');
      }); 
    },
    assertNumberOfItemsTextISVisible (){
      cy.scrollTo('bottom');
      cy.get('div.b-load_progress > span').should('be.visible');
    },
    assertLoadMoreBtnIsVisible (){
      cy.scrollTo('bottom');
      cy.get('div.b-load_more > a').should('be.visible');
    },
    assertProductImageIsDisplayed (){
      cy.get('.b-product_tile-image_image').eq(0).should('be.visible').should('have.attr', 'src');
    },
    assertItemIsAddedToWishlist (){
      cy.get('.b-header_wishlist-count').should('contain','01');
    },
    assertProductNameIsDisplayed (){
      cy.get('.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link').eq(0).should('have.css', 'font-family');
    },
    assertProductPriceIsDispayed (){
      cy.get('span.b-price-item.m-new').eq(0).should('have.css', 'color').should('be.visible');
    },
    assertNewProductPriceIsDispayed (){
      cy.get('.b-price-item m-new').eq(0).should('be.visible').should('have.css', 'font-family');
    },
    assertProductColorIsDisplayedOnPLP () {
      cy.get('.b-product_tile_swatches-swatch_image').eq(1).should('have.attr', 'src');
    },
    assertProductVariantIsApplied (text: string) {
      cy.url().should('include', text);
    },
    
  };
}

export default new PlpPage();