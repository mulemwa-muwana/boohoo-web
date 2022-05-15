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
    colorRefinement (){
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
      cy.get('#searchRefineBarAccordionItemBtn-price').click();
    },

    selectRefinementVariantShopByFit (text: string){
      cy.get('#refinementAttributesList-shop-by-fit').contains(text).click({force: true});
      cy.wait(5000);
    },
    
    selectRefinementVariantColour (text: string){
      cy.get('#refinementAttributesList-colour').contains(text).click({force: true});
      cy.wait(5000);
    },

    selectRefinementVariantStyle (text: string){
      cy.get('#refinementAttributesList-style').contains(text).click({force: true});
      cy.wait(5000);
    },

    selectRefinementVariantSize (text: string){
      cy.get('#refinementAttributesList-size').contains(text).click({force: true});
      cy.wait(5000);
    },

    selectRefinementVariantCategory (text: string){
      cy.get('#searchRefineBarAccordionItemInner-category').contains(text).click({force: true});
      cy.wait(5000);
    },

    selectRefinementVariantOccassion (text: string){
      cy.get('#searchRefineBarAccordionItemInner-occasion').contains(text).click({force: true});
      cy.wait(5000);
    },

    selectRefinementVariantShopByPrice (text: string){
      cy.get('#searchRefineBarAccordionItemInner-price').contains(text).click({force: true});
      cy.wait(5000);
    },

    // Load more products
    loadMoreProducts (){
      cy.scrollTo('bottom');
      cy.get('div.b-load_more > a').click();
      cy.wait(10000);
    },

    // Product details (image, name, price, wishlist, quickview)
    wishlistOnPlpImage (){
      cy.get('.b-wishlist_button-icon').eq(1).click();
    }
    
  };

  actions = {
    
  };

  assertions = {
    assertOnPage (text: string){
      cy.url().then(currentUrl => {
        expect(currentUrl).to.contain(text);
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
      cy.get('.b-product_tile-image_image').eq(1).should('be.visible').should('have.attr', 'src');
    },
    assertItemIsAddedToWishlist (){
      cy.get('.b-header_wishlist-count').should('contain','01');
    },
    assertProductNameIsDisplayed (){
      cy.get('.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link').eq(0).should('have.css', 'font-family');
    },
    assertProductPriceIsDispayed (){
      cy.get('span.b-price-item.m-new').eq(1).should('have.css', 'color').should('be.visible');
    },
    assertNewProductPriceIsDispayed (){
      cy.get('.b-price-item m-new').eq(1).should('be.visible').should('have.css', 'font-family');
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