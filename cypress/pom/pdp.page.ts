import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    searchField: '#header-search-input',
    addToCart: '.b-product_addtocard-availability',
    addToWishListButton: '.m-outline > span',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart_icon-link',
    selectColor: '#maincontent > div > div > div > div.l-pdp-top > main > div.b-product_details-form > div.b-product_details-variations > section.b-variations_item.m-swatch.m-color',
    sizeVariations: '.b-product_details-variations > .m-size',
    productTitle: '#editProductModalTitle',
    productCode: 'span[data-tau="b-product_details-id',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner > :nth-child(1) > .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner', 
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text'   
  },
  'nastygal.com': {
    addToCart: '.b-product_addtocard-availability',
    addToWishListButton: '.b-button m-info b-product_wishlist-button b-wishlist_button ',
    returnLink: 'a[href="https://us1-dev.nastygal.com/eu/page/returns-and-refunds-customer-service.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart_icon-link',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.b-product_details-variations > .m-size',
    pruductCode: 'span[data-tau="b-product_details-id',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner > :nth-child(1) > .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
  },
  'dorothyperkins.com': {
    addToCart: '[data-widget="processButton"]',
    addToWishListButton: '.b-button m-info b-product_wishlist-button b-wishlist_button ',
    returnLink: 'a[href="https://dwdev.dorothyperkins.com/page/returns-refunds-cs.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart_icon-link',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.b-product_details-variations > .m-size',
    pruductCode: 'span[data-tau="b-product_details-id',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner > :nth-child(1) > .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
  },
  'burton.co.uk': {
    addToCart: '.b-product_addtocard-availability',
    addToWishListButton: '.b-button m-info b-product_wishlist-button b-wishlist_button ',
    returnLink: 'a[href="https://dwdev.burton.co.uk/page/returns-refunds-cs.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart_icon-link',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.b-product_details-variations > .m-size',
    pruductCode: 'span[data-tau="b-product_details-id',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner > :nth-child(1) > .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
  },
  'wallis.co.uk': {
    addToCart: '.b-product_addtocard-availability',
    addToWishListButton: '.b-button m-info b-product_wishlist-button b-wishlist_button ',
    returnLink: '',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart_icon-link',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.b-product_details-variations > .m-size',
    pruductCode: 'span[data-tau="b-product_details-id',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner > :nth-child(1) > .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class PdpPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {

    addToCart () {
      const addToCart = selectors[variables.brand].addToCart; 
<<<<<<< HEAD
      if (variables.brand == 'wallis.co.uk') {
        cy.get(addToCart).should('be.visible').click({force:true}); 
      } else {cy.get(addToCart).should('be.visible').click();}
=======
      cy.get(addToCart).should('be.visible').click({force: true}); 
>>>>>>> master
    },
    addToWishList () {
      const addToWishListButton = selectors[variables.brand].addToWishListButton;
      cy.get(addToWishListButton).should('be.visible').click();
    },
    shippingInfoButton () {
      const shippingInfoButton = selectors[variables.brand].shippingInfoButton;
      cy.get(shippingInfoButton).click(); // Only boohoo
    },
    returnLink () {
      const returnLink = selectors[variables.brand].returnLink;
      cy.get(returnLink).invoke('removeAttr', 'target').click();
    },
    shopNowLinkNL () {
      const shopNowLinkNL = selectors[variables.brand].shopNowLinkNL;
      cy.get(shopNowLinkNL).invoke('removeAttr', 'target').click();
    },
    shopNowLinkSA () {
      const shopNowLinkSA = selectors[variables.brand].shopNowLinkSA; 
      cy.get(shopNowLinkSA).invoke('removeAttr', 'target').click();
    },
    minicartCloseBtn () {
      const minicartCloseBtn = selectors[variables.brand].minicartCloseBtn;
      cy.get(minicartCloseBtn).click();
    },
    miniCartIcon () {
      const miniCartIcon = selectors[variables.brand].minicartIcon;
      cy.get(miniCartIcon).click();  
    },
    miniCartViewCartBtn () {
      const miniCartViewCartBtn = selectors[variables.brand].miniCartViewCartBtn;
      cy.get(miniCartViewCartBtn).click({ force: true });
    } 
  };

  actions = {
    selectColor (index: number) {
      const selectColor = selectors[variables.brand].selectColor;
      cy.get(selectColor).eq(index).click({force: true});
    },
    selectSize () {
      const sizeVariations = selectors[variables.brand].sizeVariations;
      cy.get(sizeVariations).find('button').each(($element) => {
        if (!$element.attr('title').includes('not available')) {
          $element.trigger('click');
          return false;
        }
      });
    },
    addToCart () {
      cy.wait(15000);
      const addToCart = selectors[variables.brand].addToCart;
      cy.get(addToCart).click(); //  Button[data-widget-event-click="addToCart"] one more locator for AddToCartField
    }
  };

  assertions = {
    assertProductNameIsDisplayed (productName: string) {
      const productTitle = selectors[variables.brand].productTitle;
      cy.get(productTitle).should('be.visible');

      // .and('include.text', productName);  // Skus are different 
    },
    assertProductCodeIsDisplayed (SKU: string) {
      const productCode = selectors[variables.brand].productCode;
      cy.get(productCode).should('be.visible').and('include.text', SKU);
    },
    assertProductPriceIsDisplayed () {
      const productPrice = selectors[variables.brand].productPrice;
      cy.get(productPrice).should('be.visible').and('not.have.text', '0.00');
    },
    assertImageIsDisplayed (pictureId: string) {
      cy.get(pictureId).then(element => {
        cy.wrap(element).invoke('width').should('be.gt', 10); 
      });
    },
    assertColorSwatchesAreVisible () {
      const colorSwatches = selectors[variables.brand].colorSwatches;
      cy.get(colorSwatches).should('be.visible'); // Check how it works with single color 
    },
    assertColorIsDisplayed (color: string) {
      const productImage = selectors[variables.brand].productImage;
      cy.get(productImage).should('have.attr', 'src').and('include',color);
    },
    assertSizeIsAvailable (msg: string) {
      cy.get('.b-availability-status').should('contain.text', msg); // N/a need check
    },
    assertProductIsAddedToCart (text: string) {
      const addToCartTitle = selectors[variables.brand].addToCartTitle;
      cy.get(addToCartTitle).should('be.visible').and('contain.text', text);
    },
    assertErrorMsgForSizeIsDisplayed (msg: string) {
      cy.get('.b-product_actions-error_msg').should('be.visible').and('contain.text', msg); //  Should be tested
    },
    assertMiniCartIsDisplayed () {
      const addToCartTitle = selectors[variables.brand].addToCartTitle;
      cy.get(addToCartTitle).should('be.visible');
      const miniCartProductIner = selectors[variables.brand].miniCartProductIner;
      cy.get(miniCartProductIner).should('be.visible');
    },
    assertProductIsAddedToWishlist (msg: string) {
      cy.get('.m-outline').should('have.text', msg); //  Check how to switch between brands
    },
    assertStyleNotesArePresent () {
      const productDescription = selectors[variables.brand].productDescription;
      cy.get(productDescription).should('be.visible').and('not.be.null');
    },
    assertDeliveryInfoIsDisplayed () {
      const productDelivery = selectors[variables.brand].productDelivery; 
      cy.get(productDelivery).should('be.visible');
      cy.get('a[data-event-click="loadDeliveryList"]').should('be.visible').click();
      cy.get('a[data-event-click="loadDeliveryList"]').should('have.text', '\nFewer shipping options\n'); //  Work only boohoo, other brands redirect to new tab
    },
    assertReturnInfoIsDisplayed () {
      const productReturnsDescription = selectors[variables.brand].productReturnsDescription;
      cy.get(productReturnsDescription).should('be.visible'); 
    },
    assertStartReturnPageIsDisplayed () {

      // Temp: const returnLink = selectors[variables.brand].returnLink;
      cy.url().should('include', 'returns'); //  Need to be change
    },
    assertCompleteLookDisplayed (text: string) {
      const completeLookBox = selectors[variables.brand].completeLookBox;
      cy.get(completeLookBox).should('have.text', text); //  Only boohoo
    },
    assertLinkNewSeasonIsLinked (text: string) {
      
      // Temp: const shopNowLinkNL = selectors[variables.brand].shopNowLinkNL;
      cy.url().should('include', text); //  Only boohoo brand // need to be change
    },
    assertLinkShoesAndAccIsLinked (text: string) {

      // Temp: const shopNowLinkSA = selectors[variables.brand].shopNowLinkSA;
      cy.url().should('include', text); //  Only boohoo brand //need to be change
    }
    
  };

}

export default new PdpPage();