import { isSiteGenesisBrand } from 'cypress/helpers/common';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    searchField: '#header-search-input',
    addToCart:'.b-product_actions-inner [data-id="addToCart"]',
    addToWishListButton: '.m-outline > span',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline', // Changed for billing page - should checknp
    selectColor: '.b-product_details-variations > .m-swatch.m-color button',
    sizeVariations: '.b-product_details-variations > .m-size',
    productTitle: '#editProductModalTitle',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner',
    miniCartProductIner: '.b-minicart_product-inner',
    miniCartProductInerMobile:'',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    addedToWishlistMsg: '.b-message',
    wishListIcon: '.b-header_wishlist',
    cartValidation: '.b-product_actions-error_msg',
    checkoutBtn: '/checkout-login',
  },
  'nastygal.com': {
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToWishListButton: '.b-product_wishlist-button',
    returnLink: 'a[href="https://us1-dev.nastygal.com/eu/page/returns-and-refunds-customer-service.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-product_details-variations > .m-swatch.m-color button',
    sizeVariations: '.b-product_details-variations > .m-size',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner .b-minicart_product-title',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    productReturnsInfoButton: '#product-details-btn-shipping',
    productTitle: '#editProductModalTitle',
    productTitleMobile: '#editProductModalTitle',
    shippingInfoButton: '.b-product_delivery-link',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_delivery',
    wishListIcon: '.b-header_wishlist',
    cartValidation: '.b-product_actions-error_msg',
    disabledAddToCart: '[data-widget="processButton"]'
  },
  'dorothyperkins.com': {
    addToCart: '.b-product_actions-inner [data-id="addToCart"]',
    addToWishList: '.b-product_wishlist-button > .b-button-icon',
    returnLink: 'a[href="https://dwdev.dorothyperkins.com/page/returns-refunds-cs.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    addToWishListButton: '.b-product_wishlist-button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-product_details-variations > .m-swatch.m-color button',
    sizeVariations: '[data-tau-unique="size-swatches"]',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    productTitle: '#editProductModalTitle',
    shippingInfoButton: '.b-product_delivery-link',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_tabs-list',
    wishListIcon: '.b-header_wishlist',
    cartValidation: '.b-product_actions-error_msg',
    disabledAddToCart: '[data-widget="processButton"]'
  },
  'burton.co.uk': {
    addToCart: '.b-product_addtocard-availability',
    addToWishList: '.b-product_wishlist-button > span',
    addToWishListButton: '.b-product_wishlist-button',
    returnLink: 'a[href="https://dwdev.burton.co.uk/page/returns-refunds-cs.html"]',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-product_details-variations > .m-swatch.m-color button',
    sizeVariations: '.b-product_details-variations > .m-size',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    productTitle: '#editProductModalTitle',
    shippingInfoButton: '#product-details-btn-shipping',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_tabs-list',
    wishListIcon: '.b-header_wishlist',
    cartValidation: '.b-product_actions-error_msg',
    disabledAddToCart: '[data-widget="processButton"]'
  },
  'wallis.co.uk': {
    addToCart: '[data-id="addToCart"]',
    addToWishListButton: '.b-product_wishlist-button',
    returnLink: '',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    selectColor: '.b-product_details-variations > .m-swatch.m-color button',
    sizeVariations: '.b-product_details-variations > .m-size',
    productCode: 'span[data-tau="b-product_details-id"]',
    productPrice: '.b-product_details-price',
    colorSwatches: 'div[role="radiogroup"]',
    productImage: '#product-image-0',
    addToCartTitle: '.b-minicart-inner',
    miniCartProductIner: '.b-minicart_product-inner',
    productDescription: 'div[data-id="descriptions"]',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.b-product_shipping-returns',
    productTitle: '#editProductModalTitle',
    shippingInfoButton: '#product-details-btn-shipping',
    addedToWishlistMsg: '.b-message',
    productDeliveryInfo: '.b-product_tabs-list',
    wishListIcon: '.b-header_wishlist',
    cartValidation: '.b-product_actions-error_msg',
    disabledAddToCart: '[data-widget="processButton"]'
  },
  'boohooman.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '.wishlist-button',
    shippingInfoButton: '#product-delivery-info-tab',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.b-minicart-actions > .m-outline',
    deselectSize:'[class="swatches size clearfix"] li:eq(0)',
    selectColor: '.swatches.color',
    sizeVariations: '.swatches.size',
    productTitle: '.product-detail > h1.product-name',
    productCode: '.product-number > [itemprop="sku"]',
    productPrice: '.product-price',
    colorSwatches: '.swatches.color',
    productImage: '#product-image-0',
    addToCartTitle: '.mini-cart-header-product-added',
    miniCartProductIner: '.mini-cart-content-inner',
    productDescription: '#ui-id-2 > p',
    productDelivery: '.del-table',
    productReturnsInfoButton: '#product-returns-info-tab',
    productReturnsDescription: '#ui-id-5',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '.product-delivery-info a',
  },
  'karenmillen.com': {
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
    miniCartProductIner:'[class="mini-cart-content-inner js-mini-cart-content-inner"]',
    selectColor: '.swatches.color',
    sizeVariations: '.swatches.size',
    productTitle: '.product-detail > h1.product-name',
    productTitleMobile: '.product-col-1 > .product-name',
    productCode: '.product-number > [itemprop="sku"]',
    productPrice: '.product-price',
    colorSwatches: '.swatches.color',
    productImage: '#product-image-0',
    addToCartTitle: '.mini-cart-header-text',
    productDescription: '#ui-id-2 > p',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '#ui-id-5',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '#product-delivery-info-tab',
    productReturnsInfoButton: '#ui-id-5'
  },
  'coastfashion.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '.wishlist-button',
    shippingInfoButton: '#product-delivery-info-tab',
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
    addToCartTitle: '.mini-cart-header-text',
    miniCartProductIner: '.mini-cart-product',
    productDescription: '#ui-id-3',
    productDelivery: '.del-table',
    productReturnsInfoButton: '#product-returns-info-tab',
    productReturnsDescription: '#ui-id-5',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '.product-delivery-info a',
  },
  'warehousefashion.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '.wishlist-button',
    shippingInfoButton: '#product-delivery-info-tab',
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
    addToCartTitle: '.mini-cart-header-text',
    miniCartProductIner: '.mini-cart-product',
    productDescription: '#ui-id-2',
    productDelivery: '.del-table',
    productReturnsInfoButton: '#product-returns-info-tab',
    productReturnsDescription: '.product-returns-info',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '.product-delivery-info a',
    cartValidation: '.b-product_actions-error_msg',
  },
  'oasis-stores.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '.wishlist-button',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.mini-cart-link',
    selectColor: '.swatches.color',
    sizeVariations: '.swatches.size',
    productTitleMobile: '.product-col-1 > .product-name',
    productTitle: '.product-detail > h1.product-name',
    productCode: '.product-number > [itemprop="sku"]',
    productPrice: '.product-price',
    colorSwatches: '.swatches.color',
    productImage: '.primary-image',
    addToCartTitle: '.mini-cart-header-text',
    miniCartProductIner: '.mini-cart-product',
    productDescription: '#ui-id-2 > p',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.product-returns-info',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '#product-delivery-info-tab',
    cartValidation: '.b-product_actions-error_msg',
    productReturnsInfoButton: '#product-returns-info-tab'
  },
  'misspap.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '.wishlist-button',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.mini-cart-link',
    selectColor: '.swatches.color',
    sizeVariations: '.swatches.size',
    productTitle: '#product-content > .product-name',
    productCode: '.product-number > [itemprop="sku"]',
    productPrice: '.product-price',
    colorSwatches: '.swatches.color',
    productImage: '.primary-image',
    addToCartTitle: '.mini-cart-link',
    miniCartProductIner: '.mini-cart-product',
    productDescription: '.product-description-info',
    productDelivery: '.b-product_delivery',
    productReturnsDescription: '.product-returns-link > .product-info-link-text',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '.product-delivery-link > .product-info-link-text',
    productReturnsInfoButton: '.product-returns-link > .product-info-link-text',
    showAllContentButton: '[class="show-all js-show-all"]'
  },
  'boohoomena.com': {
    searchField: '#header-search-input',
    addToCart: '#add-to-cart',
    addToWishListButton: '.wishlist-button',
    shippingInfoButton: '#product-details-btn-shipping',
    returnLink: 'a[href="https://uk-dwdev.boohoo.com/page/returns-information.html"]',
    shopNowLinkNL: ':nth-child(1) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    shopNowLinkSA: ':nth-child(2) > .b-product_look-item > .b-product_look-panel > .b-product_look-link',
    minicartCloseBtn: '#minicart-dialog-close > .b-close_button',
    miniCartIcon: '.b-minicart_icon-link',
    miniCartViewCartBtn: '.mini-cart-link',
    selectColor: '.swatches.color',
    sizeVariations: '.swatches.size',
    productTitle: '.product-detail > h1.product-name',
    productCode: '.product-number > [itemprop="sku"]',
    productPrice: '.product-price',
    colorSwatches: '.swatches.color',
    productImage: '.primary-image',
    addToCartTitle: '.mini-cart-header-product-added',
    miniCartProductIner: '.mini-cart-product',
    productDescription: '#ui-id-2 > p',
    productDelivery: '.b-product_delivery',
    productReturnsInfoButton: '#product-returns-info-tab',
    productReturnsDescription: '#ui-id-5',
    completeLookBox: ':nth-child(2) > .b-product_section-title > .b-product_section-title_text',
    productDeliveryInfo: '#product-delivery-info-tab',
    cartValidation: '.b-product_actions-error_msg'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class PdpPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {

    addToCart () {
      cy.wait(3000);
      const addToCart = selectors[variables.brand].addToCart;
      cy.get(addToCart).invoke('show').click({force: true});
    },
    addToWishList () {
      cy.wait(4000);
      const addToWishListButton = selectors[variables.brand].addToWishListButton;
      cy.get(addToWishListButton).invoke('show').click({force: true});
    },
    shippingInfoButton () {
      const shippingInfoButton = selectors[variables.brand].shippingInfoButton;
      cy.get(shippingInfoButton).click();
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
      cy.get(miniCartIcon).click({force: true});
    },
    miniCartViewCartBtn () {
      const miniCartViewCartBtn = selectors[variables.brand].miniCartViewCartBtn;
      const viewportWidth = Cypress.config('viewportWidth');
      if (viewportWidth > 1100) {
        cy.get(miniCartViewCartBtn).click({force: true}); 
      }
    },
    wishListIcon () {
      const wishListIcon = selectors[variables.brand].wishListIcon;
      cy.get(wishListIcon).click({force:true});
    }
  };

  actions = {
    selectColorByIndex (index: number) {
      const selectColor = selectors[variables.brand].selectColor;
      cy.get(selectColor).eq(index).click({ force: true });
    },
    selectColorFromSku () {
      const selectColor = selectors[variables.brand].selectColor;
      const colorFromSku = variables.fullSku.split('-')[1]; // Get color part from fullSku FZZ80440-106-18 => 106

      if (isSiteGenesisBrand) {
        cy.get(selectColor + ` span[data-variation-values*='backendValue": "${colorFromSku}']`).then(($element) => {
          if (!$element.parent().hasClass('selected')) { // If <li> doesn't have 'selected' class - it isn't already selected
            $element.trigger('click');
          }
        });
      } else {
        cy.get(selectColor + `[data-tau-color-id="${colorFromSku}"]`).click({force:true});
      }
      cy.wait(3000);
    },
    selectSizeFromSku () {
      const sizeVariations = selectors[variables.brand].sizeVariations;
      const sizeFromSku = variables.fullSku.split('-')[2]; // Get size part from fullSku FZZ80440-106-18 => 18

      if (isSiteGenesisBrand) {
        cy.get(sizeVariations + ` span[data-variation-values*='backendValue": "${sizeFromSku}']`).then(($element) => {
          if (!$element.parent().hasClass('selected')) { // If <li> doesn't have 'selected' class - it isn't already selected
            $element.trigger('click');
          }
        });
      } else {
        cy.get(sizeVariations + ` button[data-tau-size-id="${sizeFromSku}"]`).click({force:true});
      }
      cy.wait(3000);
    },
    selectFirstAvailableSize () {
      const sizeVariations = selectors[variables.brand].sizeVariations;
      if (isSiteGenesisBrand) {
        cy.get(sizeVariations).find('li').each(($element) => {
          if ($element.hasClass('selectable')) { // If size is available(selectable) 
            if (!$element.hasClass('selected')) { // If size not already selected
              $element.find('span').trigger('click');
              return false;
            } 
            return false;
          }
        });
      } else {
        cy.get(sizeVariations).find('button').each(($element) => {
          if (!$element.attr('title').includes('not available')) { // If size is available
            if ($element.attr('data-attr-is-selected').includes('false')) { // If size not already selected
              $element.trigger('click');
              return false;
            } 
            return false;
          }
        });
      }
    },
    miniCartProceedToCheckout () {
      const checkoutBtn = selectors[variables.brand].checkoutBtn;
      cy.get(checkoutBtn).click({force: true});
    }
  };

  assertions = {
    assertProductNameIsDisplayed () {
      const productTitle = selectors[variables.brand].productTitle;
      const productTitleMobile = selectors[variables.brand].productTitleMobile;
      const viewportWidth = Cypress.config('viewportWidth');

      // If Mobile Device is used
      if (viewportWidth < 1100) {
        
        cy.get(productTitleMobile).should('be.visible');
        
        // If Desktop Device is used
      } else {
        cy.get(productTitle).should('be.visible');
      }

      // .and('include.text', productName);  // Skus are different 
    },
    assertProductCodeIsDisplayed (SKU: string) {
      const productCode = selectors[variables.brand].productCode;
      cy.get(productCode).should('be.visible').invoke('text').then(productCodeText => {
        expect(SKU).to.contain(productCodeText);
      });
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
      const cartValidation = selectors[variables.brand].cartValidation;
      cy.get(addToCart).click({force: true} );
      cy.get(cartValidation).should('contain.text', msg);
    },
    assertAddToCartBtnDisabled () {
      if (isSiteGenesisBrand) {
        const addToCart = selectors[variables.brand].addToCart;
        if (variables.brand=='boohooman.com') { 
          const deselectSize=selectors[variables.brand].deselectSize; // Deselecting Size to Disable addToCart button for BHM
          cy.get(deselectSize).click();
        }
        cy.get(addToCart).should('have.attr', 'disabled');
      } else {
        const disabledAddToCart = selectors[variables.brand].disabledAddToCart;
        cy.get(disabledAddToCart).should('have.attr', 'disabled');  
      }   
    },
    assertMiniCartIsDisplayed () { 
      const addToCartTitle = selectors[variables.brand].addToCartTitle;
      if (variables.brand != 'boohooman.com') {
        cy.get(addToCartTitle).should('be.visible');
      }
      const miniCartProductIner = selectors[variables.brand].miniCartProductIner;
      cy.get(miniCartProductIner).should('be.visible');
    },
    assertProductIsAddedToWishlist (msg: string) {
      const addedToWishlistMsg = selectors[variables.brand].addedToWishlistMsg; 
      cy.get(addedToWishlistMsg).should('contains.text', msg); //  Check how to switch between brands
    },
    assertProductDescriptionIsPresent () {
      const productDescription = selectors[variables.brand].productDescription;
      const showAllContentButton = selectors[variables.brand].showAllContentButton;
      if (variables.brand == 'misspap.com') {
        cy.get(showAllContentButton).click({force: true});
      }
      cy.get(productDescription).should('be.visible').and('not.be.null');
    },
    assertDeliveryInfoIsDisplayed () {
      const productDelivery = selectors[variables.brand].productDelivery;
      
      if (variables.brand == 'boohoo.com' && variables.locale != 'UK') {
        cy.get('.b-product_shipping-delivery').should('be.visible');
      } else if (isSiteGenesisBrand) {
        cy.get(productDelivery).should('be.visible');
        
      } else {
        cy.get(productDelivery).should('be.visible');
        cy.get('a[data-event-click="loadDeliveryList"]').should('be.visible').click();
        cy.get('a[data-event-click="loadDeliveryList"]').should('have.text', '\nFewer shipping options\n');
      }
      
    },
    assertDeliveryOptionsAreDisplayed () {
      const productDeliveryInfo = selectors[variables.brand].productDeliveryInfo;
      cy.get(productDeliveryInfo).should('be.visible');
    },
    assertReturnInfoIsDisplayed () {
      const productReturnsInfoButton = selectors[variables.brand].productReturnsInfoButton;
      const productReturnsDescription = selectors[variables.brand].productReturnsDescription;
      const viewportWidth = Cypress.config('viewportWidth');
      if (isSiteGenesisBrand) {
        cy.get(productReturnsInfoButton).click({force: true});
      } 

      // If Mobile Device is used
      if (viewportWidth < 1100) {
        
        cy.get(productReturnsInfoButton).click({force:true});
      }
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