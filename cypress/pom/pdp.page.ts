import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

class PdpPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    addToCart () { 
      cy.get('.b-product_addtocard-availability').click(); 
    },
    addToWishList () {
      cy.get('.b-wishlist_button-icon').eq(1).click();
    },
    shippingInfoButton (){
      cy.get('#product-details-btn-shipping').click();
    },
    returnLink (){
      cy.get('a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]').invoke('removeAttr', 'target').click();
    },
    shopNowLinkNL (){
      cy.get(':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link').invoke('removeAttr', 'target').click();
    },
    shopNowLinkSA (){
      cy.get(':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link').invoke('removeAttr', 'target').click();
    },
    minicartCloseBtn (){
      cy.get('#minicart-dialog-close > .b-close_button').click();
    },
    miniCartViewCartBtn (){
      cy.get('.b-minicart-actions > .m-outline').click();
    }
  
  };

  actions = {
    selectColor (index: number) {
      cy.get('.b-variation_swatch-color_value').eq(index).click({force: true});
    },
    selectSize (index: number) {
      cy.get('.b-variation_swatch  ').find('.b-variation_swatch-value_text').eq(index).click({force: true});
    },
    addToCart (){
      cy.wait(1000);
      cy.get('button[data-widget-event-click="addToCart"]').click();
    }
  
  };

  assertions = {
    assertProductNameIsDisplayed (productName: string){
      cy.get('.b-product_details-name').should('be.visible').and('include.text', productName);
    },
    assertProductCodeIsDisplayed (SKU: string){
      cy.get('span[data-tau="b-product_details-id"]').should('be.visible').and('include.text', SKU);
    },
    assertProductPriceIsDisplayed (){
      cy.get('.b-product_details-price').should('be.visible').and('not.have.text', '0.00');
    },
    assertImageIsDisplayed (pictureId: string){
      cy.get(pictureId).then(element => {
        cy.wrap(element).invoke('width').should('be.gt', 10); 
      });
    },
    assertColorSwatchesAreVisible (){
      cy.get('div[role="radiogroup"]').should('be.visible');
    },
    assertColorIsDisplayed (color: string){
      cy.get('#product-image-0').should('have.attr', 'src').and('include',color);
    },
    assertSizeIsAvailable (stock: string){
      cy.get('.b-availability-status').should('contain', stock);
    },
    assertSizeIsNotAvailable (){
      cy.get ('.b-product_addtocard-availability').should('have.text', 'Out of Stock');
    },
    assertProductIsAddedToCart (){
      cy.get('.b-minicart-inner > :nth-child(1) > .b-minicart-title').should('be.visible').and('have.text', '\nAdded to your cart\n');
    },
    assertErrorMsgForSizeIsDisplayed (msg: string){
      cy.get('div[data-tau="product_actions_error"]').should('be.visible').and('contain', msg);
    },
    assertMiniCartIsDisplayed (){
      cy.get('.b-minicart-inner > :nth-child(1) > .b-minicart-title').should('be.visible');
      cy.get('.b-minicart_product-inner').should('be.visible');
    },
    assertProductIsAddedToWishlist (msg: string){
      cy.get('.m-outline').should('have.text', msg);
    },
    assertStyleNotesArePresent (){
      cy.get('.m-description').should('be.visible').and('not.be.null');
    },
    assertDeliveryInfoIsDisplayed (){
      cy.get('.b-product_delivery').should('be.visible');
      cy.get('a[data-event-click="loadDeliveryList"]').should('be.visible').click();
      cy.get('a[data-event-click="loadDeliveryList"]').should('have.text', '\nFewer shipping options\n');
    },
    assertReturnInfoIsDisplayed (){
      cy.get('.b-product_shipping-returns').should('be.visible'); 
    },
    assertStartReturnPageIsDisplayed () {
      cy.url().should('include', '/page/returns-information.html');
    },
    assertCompleteLookDisplayed (){
      cy.get('.b-product_section').should('be.visible');
    },
    assertLinkNewSeasonIsLinked (){
      cy.url().should('include', '/new-season');
    },
    assertLinkShoesAndAccIsLinked (){
      cy.url().should('include', '/shoes-accessories');
    }
    
  };

}

export default new PdpPage();