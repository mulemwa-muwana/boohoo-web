import { GroupBrands, SelectorBrandMap } from '../support/types';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    categoryRefinement: '#searchRefineBarAccordionItemBtn-category > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    styleRefinement: '#searchRefineBarAccordionItemBtn-style > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    priceRefinements: '#searchRefineBarAccordionItemBtn-price > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    occassionRefinement: '#searchRefineBarAccordionItemBtn-occasion > span',
    sortProducts: '',
    priceVariant: '',
    selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
    selectRefinementVariantColour: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantStyle: '#searchRefineBarAccordionItemInner-style',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantCategory: '#searchRefineBarAccordionItemInner-category',
    selectRefinementVariantOccassion: '#searchRefineBarAccordionItemInner-occasion',
    selectRefinementVariantShopByPrice: '#searchRefineBarAccordionItemInner-price',

  },
  'nastygal.com': {
    categoryRefinement: '#searchRefineBarAccordionItemBtn-category > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    occassionRefinement: '#searchRefineBarAccordionItemBtn-occasion > span',
    sortProducts: '',
    priceVariant: '',
    selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
    selectRefinementVariantColour: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantCategory: '#searchRefineBarAccordionItemInner-category',
    selectRefinementVariantOccassion: '#searchRefineBarAccordionItemInner-occasion',
  },
  'dorothyperkins.com': {
    styleRefinement: '#searchRefineBarAccordionItemBtn-style > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '',
    priceVariant: '',
    selectRefinementVariantStyle: '#searchRefineBarAccordionItemInner-style',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantColor: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
  },
  'burton.co.uk': {
    categoryRefinement: '#searchRefineBarAccordionItemBtn-category > span',
    styleRefinement: '#searchRefineBarAccordionItemBtn-style > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    patternRefinement: '#searchRefineBarAccordionItemBtn-pattern > span',
    fitRefinement: '#searchRefineBarAccordionItemBtn-fit > span',
    sortProducts: '',
    priceVariant: '',
    selectRefinementVariantCategory: '#searchRefineBarAccordionItemInner-category',
    selectRefinementVariantStyle: '#searchRefineBarAccordionItemInner-style',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantColor: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantPattern: '#searchRefineBarAccordionItemInner-pattern',
    selectRefinementVariantFit: '#searchRefineBarAccordionItemInner-fit',
  },
  'wallis.co.uk': {
    categoryRefinement: '#searchRefineBarAccordionItemBtn-category > span',
    styleRefinement: '#searchRefineBarAccordionItemBtn-style > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    sortProducts: '',
    priceVariant: '',
    selectRefinementVariantCategory: '#searchRefineBarAccordionItemInner-category',
    selectRefinementVariantStyle: '#searchRefineBarAccordionItemInner-style',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantColor: '#searchRefineBarAccordionItemInner-colour',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

class PlpPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {

    // Refinements
    categoryRefinement (){
      const categoryRefinement = selectors[GroupBrands.Boohoo].categoryRefinement;
      cy.get(categoryRefinement).click({force: true});
    },
    sizeRefinement (){
      const sizeRefinement = selectors[GroupBrands.Boohoo].sizeRefinement;
      cy.get(sizeRefinement).click({force: true});
    },
    styleRefinement (){
      const styleRefinement = selectors[GroupBrands.Boohoo].styleRefinement;
      cy.get(styleRefinement).click({force: true});
    },
    colorRefinement (){
      const colorRefinement = selectors[GroupBrands.Boohoo].colorRefinement;
      cy.get(colorRefinement).click({force: true});
    },
    priceRefinements (){
      const priceRefinements = selectors[GroupBrands.Boohoo].priceRefinements;
      cy.get(priceRefinements).click({force: true});
    },
    shopByFitRefinements (){
      const shopByFitRefinements = selectors[GroupBrands.Boohoo].shopByFitRefinements;
      cy.get(shopByFitRefinements).click({force: true});
    },
    fitRefinements (){
      const fitRefinements = selectors[GroupBrands.Boohoo].fitRefinements;
      cy.get(fitRefinements).click({force: true});
    },
    occassionRefinement (){
      const occassionRefinement = selectors[GroupBrands.Boohoo].occassionRefinement;
      cy.get(occassionRefinement).click({force: true}); 
    },
    sortProducts (){
      const sortProducts = selectors[GroupBrands.Boohoo].sortProducts;
      cy.get(sortProducts).click({force: true});
    },
    priceVariant (){
      const priceVariant = selectors[GroupBrands.Boohoo].priceVariant;
      cy.get(priceVariant).click({force: true});
    },

    selectRefinementVariantShopByFit (text: string){
      const selectRefinementVariantShopByFit = selectors[GroupBrands.Boohoo].selectRefinementVariantShopByFit;
      cy.get(selectRefinementVariantShopByFit).click({force: true});
    },

    selectRefinementVariantFit (text: string){
      const selectRefinementVariantFit = selectors[GroupBrands.Boohoo].selectRefinementVariantFit;
      cy.get(selectRefinementVariantFit).click({force: true});
    },
    
    selectRefinementVariantColour (text: string){
      const selectRefinementVariantColour = selectors[GroupBrands.Boohoo].selectRefinementVariantColour;
      cy.get(selectRefinementVariantColour).click({force: true});
    },

    selectRefinementVariantStyle (text: string){
      const selectRefinementVariantStyle = selectors[GroupBrands.Boohoo].selectRefinementVariantStyle;
      cy.get(selectRefinementVariantStyle).click({force: true});
    },

    selectRefinementVariantSize (text: string){
      const selectRefinementVariantSize = selectors[GroupBrands.Boohoo].selectRefinementVariantSize;
      cy.get(selectRefinementVariantSize).click({force: true});
    },

    selectRefinementVariantCategory (text: string){
      const selectRefinementVariantCategory = selectors[GroupBrands.Boohoo].selectRefinementVariantCategory;
      cy.get(selectRefinementVariantCategory).click({force: true});
    },

    selectRefinementVariantOccassion (text: string){
      const selectRefinementVariantOccassion = selectors[GroupBrands.Boohoo].selectRefinementVariantOccassion;
      cy.get(selectRefinementVariantOccassion).click({force: true});
    },

    selectRefinementVariantShopByPrice (text: string){
      const selectRefinementVariantShopByPrice = selectors[GroupBrands.Boohoo].selectRefinementVariantShopByPrice;
      cy.get(selectRefinementVariantShopByPrice).click({force: true});
    },

    // Load more products
    loadMoreProducts (){
      cy.scrollTo('bottom');
      cy.get('div.b-load_more > a').click({force: true});
      cy.wait(10000);
    },

    // Product details (image, name, price, wishlist, quickview)
    wishlistOnPlpImage (){
      const wishlistPlpIcon = 
      cy.get('.b-wishlist_button-icon').eq(1).click({force: true});
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
      const NumberOfItemsTextISVisible = 
      cy.get('div.b-load_progress > span').should('be.visible');
    },
    assertLoadMoreBtnIsVisible (){
      cy.scrollTo('bottom');
      cy.get('div.b-load_more > a').should('be.visible');
    },
    assertProductImageIsDisplayed (){
      cy.get('.b-product_tile-image > .null').eq(1).should('be.visible').should('have.attr', 'src');
    },
    assertItemIsAddedToWishlist (){
      cy.get('.b-header_wishlist-count').should('contain','01');
    },
    assertProductNameIsDisplayed (){
      cy.get('.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link').eq(0).should('have.css', 'font-family');
    },
    assertProductPriceIsDispayed (){
      cy.get('.b-price-item').eq(1).should('be.visible').should('not.be.empty');
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