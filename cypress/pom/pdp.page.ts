import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    searchField: '#header-search-input',
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToWishListButton: '.m-outline > span',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline', // Changed for billing page - should checknp
    selectColor: '.b-product_details-variations > section.b-variations_item.m-swatch.m-color',
    sizeVariations: '.b-product_details-variations > .m-size',
    productTitle: '#editProductModalTitle',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    addedToWishlistMsg: '.b-message',
    
    // ViewCart: '.b-minicart-actions > .m-outline',
  },
  'nastygal.com': {
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToWishListButton: '.b-product_wishlist-button',
    returnLink: 'a[href="https://us1-dev.nastygal.com/eu/page/returns-and-refunds-customer-service.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.b-product_details-variations > .m-size',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    viewCart: '.b-minicart-actions > .m-outline',
    productTitle: '#editProductModalTitle',
    shippingInfoButton: '.b-product_delivery-link',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_delivery'
  },
  'dorothyperkins.com': {
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToWishList: '.b-product_wishlist-button > .b-button-icon',
    returnLink: 'a[href="https://dwdev.dorothyperkins.com/page/returns-refunds-cs.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    addToWishListButton: '.b-product_wishlist-button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.b-product_details-variations > .m-size',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    viewCart: '.b-minicart-actions > .m-outline',
    productTitle: '#editProductModalTitle',
    shippingInfoButton: '.b-product_delivery-link',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_tabs-list',
  },
  'burton.co.uk': {
    addToCart: '.b-product_addtocard-availability',
    addToWishList: '.b-product_wishlist-button > span',
    addToWishListButton: '.b-product_wishlist-button',
    returnLink: 'a[href="https://dwdev.burton.co.uk/page/returns-refunds-cs.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.b-product_details-variations > .m-size',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    viewCart: '.b-minicart-actions > .m-outline',
    productTitle: '#editProductModalTitle',
    shippingInfoButton: '#product-details-btn-shipping',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_tabs-list',
  },
  'wallis.co.uk': {
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToWishListButton: '.b-product_wishlist-button',
    returnLink: '',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.b-product_details-variations > .m-size',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    viewCart: '.b-minicart-actions > .m-outline',
    productTitle: '#editProductModalTitle',
    shippingInfoButton: '#product-details-btn-shipping',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_tabs-list',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '.wishlist-button',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.swatches.color',
    sizeVariations: '.swatches.size',
    productTitle: '.product-detail > h1.product-name',
    productCode: '.product-number > [itemprop="sku"]',
    productPrice: '.product-price',
    colorSwatches: '.swatches.color',
    productImage: '#product-image-0',
    addToCartTitle: '.mini-cart-header-product-added',
    miniCartProductIner: '.mini-cart-product',
    productDescription: '#ui-id-2 > p',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '#ui-id-5',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '#product-delivery-info-tab',
  },
  'warehousefashion.com': undefined,
  'oasis-stores.com': {
    addToCart: '#add-to-cart',
    addToWishListButton: '.b-button m-info b-product_wishlist-button b-wishlist_button ',
    returnLink: '',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '#mini-cart > div.mini-cart-content.js-mini-cart-content > div.mini-cart-content-inner.js-mini-cart-content-inner > div.mini-cart-totals > a.button.mini-cart-link-cart',
    selectColor: '.b-variation_swatch-color_value',
    sizeVariations: '.size-attribute > .value > .swatches > :nth-child(1) > .swatchanchor',
    pruductCode: 'span[data-tau="b-product_details-id',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner > :nth-child(1) > .b-minicart-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    viewCart: '.b-minicart-actions > .m-outline',
  },
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
      cy.get(addToCart, {timeout: 10000}).should('not.have.attr', 'disabled');
      cy.get(addToCart, {timeout: 10000}).should('not.have.attr', 'data-is-out-of-stock');
      cy.get(addToCart).click({force: true});
    },
    addToWishList () {
      const addToWishListButton = selectors[variables.brand].addToWishListButton;
      cy.get(addToWishListButton, {timeout: 10000}).should('not.have.attr', 'disabled');
      cy.get(addToWishListButton).click({force: true});
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
    },
    viewCart () {
      const viewCart = selectors[variables.brand].viewCart;
      cy.get(viewCart).click();
    }
  };

  actions = {
    selectColor (index: number) {
      const selectColor = selectors[variables.brand].selectColor;
      cy.get(selectColor).eq(index).click({ force: true });
    },
    selectSize () {
      const sizeVariations = selectors[variables.brand].sizeVariations;
      if (variables.brand == 'oasis-stores.com' || variables.brand == 'coastfashion.com') {
        cy.get(sizeVariations).find('li > span').each(($element) => {
          if (!$element.attr('title').includes('not available')) { // If size is available
            $element.trigger('click');
            return false;
          }
        });
      } else {
        cy.get(sizeVariations).find('button').each(($element) => {
          if (!$element.attr('title').includes('not available')) { // If size is available
            $element.trigger('click');
            return false;
          }
        });
      }
    },
  };

  assertions = {
    assertProductNameIsDisplayed () {
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
      cy.get(productImage).should('have.attr', 'src').and('include', color);
    },
    assertSizeIsAvailable (msg: string) {
      cy.get('.b-availability-status').should('contain.text', msg); // N/a need check
    },
    assertProductIsAddedToCart (text: string) {
      const addToCartTitle = selectors[variables.brand].addToCartTitle;
      cy.get(addToCartTitle).should('be.visible').and('contain.text', text);
    },
    assertAddToCartBtnIsNotAvailable (msg: string) {
      const addToCart = selectors[variables.brand].addToCart;
      cy.get(addToCart).should('be.visible').contains(msg);
    },
    assertMiniCartIsDisplayed () {
      const addToCartTitle = selectors[variables.brand].addToCartTitle;
      cy.get(addToCartTitle).should('be.visible');
      const miniCartProductIner = selectors[variables.brand].miniCartProductIner;
      cy.get(miniCartProductIner).should('be.visible');
    },
    assertProductIsAddedToWishlist (msg: string) {
      const addedToWishlistMsg = selectors[variables.brand].addedToWishlistMsg; 
      cy.get(addedToWishlistMsg).should('contains.text', msg); //  Check how to switch between brands
    },
    assertProductDescriptionIsPresent () {
      const productDescription = selectors[variables.brand].productDescription;
      cy.get(productDescription).should('be.visible').and('not.be.null');
    },
    assertDeliveryInfoIsDisplayed (text: string) {
      const productDelivery = selectors[variables.brand].productDelivery;
      cy.get(productDelivery).should('be.visible');
      cy.get('a[data-event-click="loadDeliveryList"]').should('be.visible').click();
      cy.get('a[data-event-click="loadDeliveryList"]').should('have.text', text); //  Work only boohoo, other brands redirect to new tab
    },
    assertDeliveryOptionsAreDisplayed () {
      const productDeliveryInfo = selectors[variables.brand].productDeliveryInfo;
      cy.get(productDeliveryInfo).should('be.visible');
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