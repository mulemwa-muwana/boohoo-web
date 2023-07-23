import { isSiteGenesisBrand, isMobileDeviceUsed } from 'cypress/helpers/common';
import { RouteMatcher } from 'cypress/types/net-stubbing';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import assertionText from 'cypress/helpers/assertionText';
import { brand, language, locale } from 'cypress/support/e2e';
import { CompletionTriggerKind } from 'typescript';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    categoryRefinement: '#searchRefineBarAccordionItemBtn-category > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    styleRefinement: '#searchRefineBarAccordionItemBtn-style',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    priceRefinements: '#searchRefineBarAccordionItemBtn-price > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    occassionRefinement: '#searchRefineBarAccordionItemBtn-occasion > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
    selectRefinementVariantColour: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantStyle: '#refinementAttributesList-style',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantCategory: '#refinementAttributesList-category',
    selectRefinementVariantCategoryOtherLanguages: '#searchRefineBarAccordionItemBtn-',
    SelectRefinementVariantCategory: '#searchRefineBarAccordionItemBtn-category',
    selectRefinementVariantOccasion: '#searchRefineBarAccordionItemInner-occasion',
    selectRefinementVariantShopByPrice: '#searchRefineBarAccordionItemInner-price',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: 'div.b-load_more > a',
    loadMoreProductsMobile: '.b-load_more-button',
    numberOfItemsTextIsVisible: 'div.b-load_progress > span',
    productColorIsDisplayedOnPLP: '.b-product_tile_swatches-swatch_image',
    newProductPriceIsDispayed: '.m-new',
    productPriceIsDispayed: '.b-price-item',
    productImageIsDisplayed: '.b-product_tile-image',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link',
    quickView:'.b-product_tile-quick_view',
    quickViewSize: 'button[aria-disabled="false"] .b-variation_swatch-value_text',
    quickAddtoCart:'.b-button.b-product_addtocard.m-width_full',
    miniCartQty:'.b-minicart_icon-qty'
  },
  'nastygal.com': {
    categoryRefinement: '#searchRefineBarAccordionItemBtn-category > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    occassionRefinement: '#searchRefineBarAccordionItemBtn-occasion > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
    selectRefinementVariantColour: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantCategory: '#searchRefineBarAccordionItemInner-category',
    selectRefinementVariantOccasion: '#searchRefineBarAccordionItemInner-occasion',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: 'div.b-load_more > a',
    loadMoreProductsMobile: '.b-load_more-button',
    numberOfItemsTextIsVisible: 'div.b-load_progress > span',
    productColorIsDisplayedOnPLP: '.b-product_tile-container > .b-quickbuy-swatches > .b-product_slider-track > .b-product_tile_swatches-swatch_wrapper > .b-product_tile_swatches-swatch',
    newProductPriceIsDispayed: '.m-new',
    productPriceIsDispayed: '.b-price-item',
    productImageIsDisplayed: '#product-grid > div.l-plp_grid > section:nth-child(3) > div.b-product_tile-container > div:nth-child(1) > div.b-product_tile-top > a > picture > img',
    itemIsAddedToWishlist: '.b-header_wishlist-count', //  Does not exist for NG 
    productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
    quickView:'.b-product_tile-quick_view',
    quickViewSize: '.b-product_tile_swatches-swatch.m-quickbuy.m-size:not(.m-disabled)',
    quickAddtoCart:'.b-quickbuy-addtocart_availability',
    miniCartQty:'.b-minicart_icon-qty'
  },
  'dorothyperkins.com': {
    styleRefinement: '#searchRefineBarAccordionItemBtn-style > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantStyle: '#searchRefineBarAccordionItemInner-style',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantColor: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: 'div.b-load_more > a',
    loadMoreProductsMobile: '.b-load_more-button',
    numberOfItemsTextIsVisible: 'div.b-load_progress > span',
    productColorIsDisplayedOnPLP: '.b-product_tile_swatches-swatch_image',
    newProductPriceIsDispayed: '.m-new',
    productPriceIsDispayed: '.b-price-item',
    productImageIsDisplayed: '.b-product_tile-image img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'

  },
  'burton.co.uk': {
    styleRefinement: '#searchRefineBarAccordionItemBtn-style > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantStyle: '#searchRefineBarAccordionItemInner-style',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantColor: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: 'div.b-load_more > a',
    loadMoreProductsMobile: '.b-load_more-button',
    numberOfItemsTextIsVisible: 'div.b-load_progress > span',
    productColorIsDisplayedOnPLP: '.b-product_tile_swatches-swatch_image',
    newProductPriceIsDispayed: '.m-new',
    productPriceIsDispayed: '.b-price-item',
    productImageIsDisplayed: '.b-product_tile-image img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
  },
  'wallis.co.uk': {
    styleRefinement: '#searchRefineBarAccordionItemBtn-style > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantStyle: '#searchRefineBarAccordionItemInner-style',
    selectRefinementVariantSize: '#searchRefineBarAccordionItemInner-size',
    selectRefinementVariantColor: '#searchRefineBarAccordionItemInner-colour',
    selectRefinementVariantShopByFit: '#searchRefineBarAccordionItemInner-shop-by-fit',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: 'div.b-load_more > a',
    loadMoreProductsMobile:'.b-load_more-button',
    numberOfItemsTextIsVisible: 'div.b-load_progress > span',
    productColorIsDisplayedOnPLP: '.b-product_tile_swatches-swatch_image',
    newProductPriceIsDispayed: '.m-new',
    productPriceIsDispayed: '.b-price-item',
    productImageIsDisplayed: '.b-product_tile-image img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
  },
  'boohooman.com': {
    categoryRefinement: 'div[class="refinement js-refinement category"] input',
    styleRefinement: 'div[class="refinement js-refinement style"] input',
    sizeRefinement: 'div[class="refinement js-refinement sizeRefinement"] input',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantCategory: '.js-refinement-category.refinement-dropdown',
    selectRefinementVariantStyle: '.js-refinement-style.refinement-dropdown',
    selectRefinementVariantSize: 'div[class="refinement js-refinement sizeRefinement"] div ul',
    selectRefinementVariantColor: '.js-refinement-color.refinement-dropdown',
    selectRefinementVariantPrice: '.js-refinement-price.refinement-dropdown ul',
    selectRefinementVariantShopByFit: '.js-refinement-classification.refinement-dropdown',
    selectRefinementVariantOccasion: '.js-refinement-occasion.refinement-dropdown',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: '.search-result-options:not([class*="js-search-result-options"]) [title="Next"]',
    loadMoreProductsMobile: '.is-mobile.m-pagination-wrapper > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link > .pagination-item-link-text',
    numberOfPagesTextIsVisible: '.search-result-options > div > ul.pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
    promoTitle: 'promo',
    quickView:'a#quickviewbutton',
    quickViewSize: 'ul.swatches.size.clearfix li.selectable',
    quickAddtoCart:'button#add-to-cart',
    miniCartQty:'.js-minicart-quantity '
  },
  'karenmillen.com': {
    categoryRefinement: 'div[class="refinement js-refinement category"] input',
    styleRefinement: 'div[class="refinement js-refinement style"] input',
    sizeRefinement: 'div[class="refinement js-refinement sizeRefinement"] input',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantCategory: '.js-refinement-category.refinement-dropdown',
    selectRefinementVariantStyle: '.js-refinement-style.refinement-dropdown',
    selectRefinementVariantSize: 'div[class="refinement js-refinement sizeRefinement"] div ul',
    selectRefinementVariantColor: '.js-refinement-color.refinement-dropdown',
    selectRefinementVariantPrice: '.js-refinement-price.refinement-dropdown ul',
    selectRefinementVariantShopByFit: '.js-refinement-classification.refinement-dropdown',
    selectRefinementVariantOccasion: '.js-refinement-occasion.refinement-dropdown',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: '.search-result-options [title="Next"]',
    loadMoreProductsMobile: '.is-mobile.m-pagination-wrapper > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link',
    numberOfPagesTextIsVisible: '.search-result-options select[class*="pagination-select"]',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
    quickView:'a#quickviewbutton',
    quickViewSize: 'ul.swatches.size.clearfix li.selectable',
    quickAddtoCart:'button#add-to-cart',
    miniCartQty:'.mini-cart-wrapper .minicart-has-products'
  },
  'coastfashion.com': {
    categoryRefinement: 'div[class="refinement js-refinement category"] input',
    styleRefinement: 'div[class="refinement js-refinement style"] input',
    sizeRefinement: 'div[class="refinement js-refinement sizeRefinement"] input',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantCategory: '.js-refinement-category.refinement-dropdown',
    selectRefinementVariantStyle: '.js-refinement-style.refinement-dropdown',
    selectRefinementVariantSize: 'div[class="refinement js-refinement sizeRefinement"] div ul',
    selectRefinementVariantColor: '.js-refinement-color.refinement-dropdown',
    selectRefinementVariantPrice: '.js-refinement-price.refinement-dropdown ul',
    selectRefinementVariantShopByFit: '.js-refinement-classification.refinement-dropdown',
    selectRefinementVariantOccasion: '.js-refinement-occasion.refinement-dropdown',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: '.search-result-options [title="Next"]',
    loadMoreProductsMobile: '.filter-wrapper > .m-pagination-wrapper > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link > .pagination-item-link-text',
    numberOfPagesTextIsVisible: '.search-result-options > div > ul.pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
    plpProduct: '.product-tile-name > .name-link',
  },
  'warehousefashion.com': {
    categoryRefinement: 'div[class="refinement js-refinement category"] input',
    styleRefinement: 'div[class="refinement js-refinement style"] input',
    sizeRefinement: 'div[class="refinement js-refinement sizeRefinement"] input',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantCategory: '.js-refinement-category.refinement-dropdown',
    selectRefinementVariantStyle: '.js-refinement-style.refinement-dropdown',
    selectRefinementVariantSize: 'div[class="refinement js-refinement sizeRefinement"] div ul',
    selectRefinementVariantColor: '.js-refinement-color.refinement-dropdown',
    selectRefinementVariantPrice: '.js-refinement-price.refinement-dropdown ul',
    selectRefinementVariantShopByFit: '.js-refinement-classification.refinement-dropdown',
    selectRefinementVariantOccasion: '.js-refinement-occasion.refinement-dropdown',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: '.search-result-options [title="Next"]',
    loadMoreProductsMobile:'.is-mobile.m-pagination-wrapper > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link > .pagination-item-link-text',
    numberOfPagesTextIsVisible: '.search-result-options select[class*="pagination-select"]',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
    quickView:'a#quickviewbutton',
    quickViewSize: 'ul.swatches.size.clearfix li.selectable',
    quickAddtoCart:'button#add-to-cart',
    miniCartQty:'.js-minicart-quantity '
  },
  'oasis-stores.com': {
    categoryRefinement: 'div[class="refinement js-refinement category"] input',
    styleRefinement: 'div[class="refinement js-refinement style"] input',
    sizeRefinement: 'div[class="refinement js-refinement sizeRefinement"] input',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantCategory: '.js-refinement-category.refinement-dropdown',
    selectRefinementVariantStyle: '.js-refinement-style.refinement-dropdown',
    selectRefinementVariantSize: 'div[class="refinement js-refinement sizeRefinement"] div ul',
    selectRefinementVariantColor: '.js-refinement-color.refinement-dropdown',
    selectRefinementVariantPrice: '.js-refinement-price.refinement-dropdown ul',
    selectRefinementVariantShopByFit: '.js-refinement-classification.refinement-dropdown',
    selectRefinementVariantOccasion: '.js-refinement-occasion.refinement-dropdown',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: ':nth-child(5) > .pagination .view-items-perpage-link, :nth-child(6) > .pagination .view-items-perpage-link',
    loadMoreProductsMobile: '.is-mobile.m-pagination-wrapper > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link',
    numberOfPagesTextIsVisible: ':nth-child(6) > .pagination > .pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
  },
  'misspap.com': {
    categoryRefinement: 'div[class="refinement js-refinement category"] input',
    styleRefinement: 'div[class="refinement js-refinement style"] input',
    sizeRefinement: 'div[class="refinement js-refinement sizeRefinement"] input',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantCategory: '.js-refinement-category.refinement-dropdown',
    selectRefinementVariantStyle: '.js-refinement-style.refinement-dropdown',
    selectRefinementVariantSize: 'div[class="refinement js-refinement sizeRefinement"] div ul',
    selectRefinementVariantColor: '.js-refinement-color.refinement-dropdown',
    selectRefinementVariantPrice: '.js-refinement-price.refinement-dropdown ul',
    selectRefinementVariantShopByFit: '.js-refinement-classification.refinement-dropdown',
    selectRefinementVariantOccasion: '.js-refinement-occasion.refinement-dropdown',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: ':nth-child(5) > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link > .pagination-item-link-text',
    loadMoreProductsMobile: '.is-mobile.m-pagination-wrapper > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link > .pagination-item-link-text',
    numberOfPagesTextIsVisible: ':nth-child(6) > .pagination > .pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
    quickView:'a#quickviewbutton',
    quickViewSize: 'ul.swatches.size.clearfix li.selectable',
    quickAddtoCart:'button#add-to-cart',
    miniCartQty:'.mini-cart-wrapper .minicart-has-products'

  },
  'boohoomena.com': {
    styleRefinement: '#searchRefineBarAccordionItemBtn-style > span',
    sizeRefinement: '#searchRefineBarAccordionItemBtn-size > span',
    colorRefinement: '#searchRefineBarAccordionItemBtn-colour > span',
    shopByFitRefinements: '#searchRefineBarAccordionItemBtn-shop-by-fit > span',
    lengthRefinement: '#searchRefineBarAccordionItemBtn-length > span',
    sortProducts: '#plp-sort-desktop',
    priceVariant: '',
    selectRefinementVariantCategory: '.js-refinement-category.refinement-dropdown',
    selectRefinementVariantStyle: 'div.js-refinement-style.refinement-dropdown',
    selectRefinementVariantSize:  'div.js-refinement-sizeRefinement.refinement-dropdown',
    selectRefinementVariantColor: 'div.js-refinement-color.refinement-dropdown',
    selectRefinementVariantPrice: '.js-refinement-price > .clearfix',
    selectRefinementVariantShopByFit: 'div.js-refinement-classification.refinement-dropdown',
    selectRefinementVariantOccasion: 'div.js-refinement-occasion.refinement-dropdown',
    selectRefinementVariantLength: '#searchRefineBarAccordionItemInner-length',
    wishlistPlpIcon: '.b-wishlist_button-icon',
    loadMoreProducts: 'div.search-result-options > .pagination [title="Next"]',
    numberOfPagesTextIsVisible: '.search-result-options > div > ul.pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon',
    quickView:'a#quickviewbutton',
    quickViewSize: 'ul.swatches.size.clearfix li.selectable',
    quickAddtoCart:'button#add-to-cart',
    miniCartQty:'.mini-cart-wrapper .minicart-has-products'
  }
};

const variables = Cypress.env() as EnvironmentVariables;

class PlpPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {

    // Refinements
    categoryRefinement () {
      const categoryRefinement = selectors[variables.brand].categoryRefinement;
      cy.get(categoryRefinement).click({ force: true });
    },
    sizeRefinement () {
      const sizeRefinement = selectors[variables.brand].sizeRefinement;
      cy.get(sizeRefinement).click({ force: true });
    },
    styleRefinement () {
      const styleRefinement = selectors[variables.brand].styleRefinement;
      cy.get(styleRefinement).click({ force: true });
    },
    colorRefinement () {
      const colorRefinement = selectors[variables.brand].colorRefinement;
      cy.get(colorRefinement).click({ force: true });
    },
    priceRefinements () {
      const priceRefinements = selectors[variables.brand].priceRefinements;
      cy.get(priceRefinements).click({ force: true });
    },
    shopByFitRefinements () {
      const shopByFitRefinements = selectors[variables.brand].shopByFitRefinements;
      cy.get(shopByFitRefinements).click({ force: true });
    },
    fitRefinements () {
      const fitRefinements = selectors[variables.brand].fitRefinements;
      cy.get(fitRefinements).click({ force: true });
    },
    occassionRefinement () {
      const occassionRefinement = selectors[variables.brand].occassionRefinement;
      cy.get(occassionRefinement).click({ force: true });
    },
    sortProducts () {
      const sortProducts = selectors[variables.brand].sortProducts;
      cy.get(sortProducts).click({ force: true });
    },
    priceVariant () {
      const priceVariant = selectors[variables.brand].priceVariant;
      cy.get(priceVariant).click({ force: true });
    },

    selectRefinementVariantShopByFit (productVariation: string) {
      if (isSiteGenesisBrand) {
        const selectRefinementVariantShopByFit = selectors[variables.brand].selectRefinementVariantShopByFit;
        cy.get(selectRefinementVariantShopByFit).contains(productVariation).click({ force: true });
      } else if (variables.brand == 'dorothyperkins.com') {
        cy.get('button[id*="-shop-by-"]').click({ force: true });
        cy.get('ul[id*="refinementAttributesList-shop-by-"]').contains(productVariation).click({ force: true });
      } else {
        cy.get('button[id*="-' + (assertionText.shopByFit[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.shopByFit[variables.language])).contains(productVariation).click({ force: true });
      }
    },

    selectRefinementVariantColor (color: string) {
      if (isSiteGenesisBrand) {
        const selectRefinementVariantColor = selectors[variables.brand].selectRefinementVariantColor;
        cy.get(selectRefinementVariantColor).contains(color).click({ force: true });
      } else if (brand == 'boohoo.com' && locale == 'US') {
        cy.get('button[id*="-' + (assertionText.color[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.color[variables.language])).contains(color).click({ force: true });
      } else {
        cy.get('button[id*="-' + (assertionText.colour[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.colour[variables.language])).contains(color).click({ force: true });
      }
    },

    selectRefinementVariantStyle (style: string) {
      if (isSiteGenesisBrand) {
        const selectRefinementVariantStyle = selectors[variables.brand].selectRefinementVariantStyle;
        cy.get(selectRefinementVariantStyle).contains(style).click({ force: true });
      } else {
        cy.get('button[id*="-' + (assertionText.style[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.style[variables.language])).contains(style).click({ force: true });
      }
    },

    selectRefinementVariantSize () {
      if (isSiteGenesisBrand) {
        const selectRefinementVariantSize = selectors[variables.brand].selectRefinementVariantSize;
        cy.get(selectRefinementVariantSize).find('li').each(($element) => {
          if ($element.attr('data-value')) {
            $element.find('span').trigger('click');
            return false;
          }
        });
      } else {
        cy.get('button[id*="-' + (assertionText.size[variables.language] + '"]')).click({ force: true });
        cy.get('#searchRefineBarAccordionItemPanel-' + (assertionText.size[variables.language])).find('li').each(($element) => {
          if ($element.attr('data-tau')) {
            $element.find('span').trigger('click');
            return false;
          }
        });
      }
    },

    selectRefinementVariantSizePerLanguages () {
      const selectRefinementVariantSize = selectors[variables.brand].selectRefinementVariantSize;
      cy.get(selectRefinementVariantSize).find('li').each(($element) => {
        if ($element.attr('data-value')) {
          $element.find('span').trigger('click');
          return false;
        }
      });
    },

    selectRefinementVariantCategory (category: string) {
      if (isSiteGenesisBrand) {
        const selectRefinementVariantCategory = selectors[variables.brand].selectRefinementVariantCategory;
        cy.get(selectRefinementVariantCategory).contains(category).click({ force: true });
      } else {
        cy.get('button[id*="-' + (assertionText.category[variables.language] + '"]')).click({ force: true });
        cy.get('#searchRefineBarAccordionItemPanel-' + (assertionText.category[variables.language])).contains(category).click({ force: true });
      }
    },

    selectCategoryPerLanguages (language: string) {
      const selectRefinementVariantCategoryOtherLanguages = selectors[variables.brand].selectRefinementVariantCategoryOtherLanguages;
      cy.get(selectRefinementVariantCategoryOtherLanguages + language).click({ force: true });
    },

    selectRefinementVariantOccasion () {
      if (isSiteGenesisBrand) {
        const selectRefinementVariantOccasion = selectors[variables.brand].selectRefinementVariantOccasion;
        cy.get(selectRefinementVariantOccasion).contains('Casual').click({ force: true });
      } else {
        cy.get('button[id*="-' + (assertionText.occasion[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-' + (assertionText.occasion[variables.language])).contains('Casual').click({ force: true });
      }
    },

    selectRefinementVariantPrice () {
      if (isSiteGenesisBrand) {
        const selectRefinementVariantPrice = selectors[variables.brand].selectRefinementVariantPrice;
        cy.get(selectRefinementVariantPrice).find('li').each(($element) => {
          if ($element.attr('data-value')) {
            $element.find('span').trigger('click');
            return false;
          }
        });
      } else {
        cy.get('button[id*="-' + (assertionText.price[variables.language] + '"]')).click({ force: true });
        cy.get('#refinementAttributesList-price').find('li').each(($element) => {
          if ($element.attr('data-tau')) {
            $element.find('span').trigger('click');
            return false;
          }
        });
      }
    },

    // Load more products
    loadMoreProducts () {
      cy.scrollTo('bottom');
      const loadMoreProducts = selectors[variables.brand].loadMoreProducts;
      cy.get('body').then($body => {
        if ($body.find(loadMoreProducts).length) {
          if (variables.brand == 'warehousefashion.com') {
            cy.get(loadMoreProducts).eq(1).click({ force: true });

          } else {
            cy.get(loadMoreProducts).click({ force: true });
          }
          cy.wait(10000);
        }
      } 
      );
      
    },

    // Product details (image, name, price, wishlist, quickview)
    wishlistOnPlpImage () {
      const brand: GroupBrands = 'boohoo.com';
      const wishlistPlpIcon = selectors[brand].wishlistPlpIcon;
      cy.get(wishlistPlpIcon).eq(1).click({ force: true });
    },
    selectItem () {
      const plpProduct = selectors[variables.brand].plpProduct;
      cy.get('body').then($body => {
        if ($body.find(plpProduct).length) {
          cy.get(plpProduct).eq(0).click({ force: true });
        }
      }
      );     
    },
    quickAddtoCart () {
      const productHover = selectors[variables.brand].productImageIsDisplayed;
      cy.get(productHover).eq(0).as('hoverOverProduct');
      const quickViewButton: any = selectors[variables.brand].quickView;
      const quickViewSize: any = selectors[variables.brand].quickViewSize;
      cy.get('@hoverOverProduct').scrollIntoView().trigger('mouseover',{force: true}).then(() => {
        if (isSiteGenesisBrand) {
          cy.get(quickViewButton).eq(0).invoke('css', 'display','inline').then($quickView=>{
            const quickView: any = $quickView;
            const addToCart: any = selectors[variables.brand].quickAddtoCart;
            const selectSize: any = selectors[variables.brand].quickViewSize;
            cy.wait(5000);
            cy.get(quickView).click({force:true});
            cy.wait(5000);
            cy.get(selectSize).eq(0).click();
            cy.wait(5000);
            cy.get(addToCart).click({force: true});
            cy.wait(5000);
          });
        } else {
          cy.get(quickViewButton).eq(0).invoke('css','opacity',1).should('be.visible').then($quickView=>{
            const quickView: any = $quickView;
            const addToCart: any = selectors[variables.brand].quickAddtoCart;
            const selectSize: any = selectors[variables.brand].quickViewSize;
            cy.wait(5000);
            cy.get(quickView).click({force:true});
            cy.wait(5000);
            cy.get(selectSize).eq(0).click();
            cy.wait(5000);
            cy.get(addToCart).click({force: true});
            cy.wait(5000);
          });
            
        }
      });
    }
  };

  actions = {
    setupChangeIntercept (interceptRouteRegex: RouteMatcher) {
      cy.intercept(interceptRouteRegex).as('updateRefinement');
    },
    waitForPageRefinementUpdate () {
      cy.wait('@updateRefinement', { timeout: 60000 }).its('response.statusCode').should('eq', 200);
    }
  };

  assertions = {
    assertOnPage (text: string) {
      if (variables.brand == 'boohooman.com') {
        cy.url().then(currentUrl => {
          expect(currentUrl).to.contain(selectors[variables.brand].promoTitle);
        });
      } else {
        cy.url().then(currentUrl => {
          expect(currentUrl).to.contain(text);
        });
      }
    },
    assertMiniCartHasValue () {
      const miniCartQty = selectors[variables.brand].miniCartQty;
      cy.scrollTo('topRight');
      cy.get(miniCartQty).should('be.visible');

    },
    assertNumberOfItemsTextIsVisible () {
      cy.scrollTo('bottom');
      if (isSiteGenesisBrand) {
        const numberOfPagesTextIsVisible = selectors[variables.brand].numberOfPagesTextIsVisible;
        cy.get(numberOfPagesTextIsVisible).should('be.visible');
      } else {
        const numberOfItemsTextIsVisible = selectors[variables.brand].numberOfItemsTextIsVisible;
        cy.get(numberOfItemsTextIsVisible).should('be.visible');
      }
    },
    assertLoadMoreBtnIsVisible () {
      cy.scrollTo('bottom');
      const loadMoreProducts = selectors[variables.brand].loadMoreProducts;
      const loadMoreProductsMobile = selectors[variables.brand].loadMoreProductsMobile;

      if (isMobileDeviceUsed) {
        cy.get(loadMoreProductsMobile).invoke('show').should('be.visible');
      } else {
        cy.get(loadMoreProducts).invoke('show').should('be.visible');
      }
    },
    assertProductImageIsDisplayed () {
      const productImageIsDisplayed = selectors[variables.brand].productImageIsDisplayed;
      if (variables.brand == 'nastygal.com') {
        cy.get(productImageIsDisplayed).should('be.visible').and('have.prop', 'naturalWidth').should('be.greaterThan', 0);
      } else {
        cy.get(productImageIsDisplayed).eq(1).should('be.visible').should('have.attr', 'src');
      }
    },
    assertItemIsAddedToWishlist () {
      const itemIsAddedToWishlist = selectors[variables.brand].itemIsAddedToWishlist;
      cy.get(itemIsAddedToWishlist).should('contain', '01');
    },
    assertQuickViewIsDisplayed () {
      const quickViewButtonText = assertionText.quickView[language];
      const quickBuyButtonText = assertionText.quickBuy[language];
      const productHover = selectors[variables.brand].productImageIsDisplayed;
      cy.get(productHover).eq(0).as('hoverOverProduct');
      const quickViewButton: any = selectors[variables.brand].quickView;
      cy.get('@hoverOverProduct').scrollIntoView().trigger('mouseover',{force: true}).then(() => {
        if (isSiteGenesisBrand) {
          cy.get(quickViewButton).eq(0).invoke('css', 'display','inline').then(($buttonText) =>{
            const button: any = $buttonText;
            const buttonText = button.text();
            cy.wait(1000);
            expect(buttonText).to.be.oneOf([quickViewButtonText, quickBuyButtonText]);
          });
        } else {
          cy.get(quickViewButton).eq(0).invoke('css','opacity',1).should('be.visible').then($buttonText=>{
            const button: any = $buttonText;
            const buttonText = button.text().trim();
            expect(buttonText).to.be.oneOf([quickViewButtonText, quickBuyButtonText]);
          });
        }

      });

    },
    assertProductNameIsDisplayed () {
      const productNameIsDisplayed = selectors[variables.brand].productNameIsDisplayed;
      cy.get(productNameIsDisplayed).eq(0).should('have.css', 'font-family');
    },
    assertProductPriceIsDispayed () {
      const productPriceIsDispayed = selectors[variables.brand].productPriceIsDispayed;
      cy.get(productPriceIsDispayed).eq(1).should('be.visible').and('not.be.null');
    },
    assertNewProductPriceIsDispayed () {
      const newProductPriceIsDispayed = selectors[variables.brand].newProductPriceIsDispayed;
      cy.get(newProductPriceIsDispayed).eq(1).should('be.visible').should('have.css', 'font-family');
    },
    assertProductColorIsDisplayedOnPLP () {
      const productColorIsDisplayedOnPLP = selectors[variables.brand].productColorIsDisplayedOnPLP;
      if (variables.brand == 'nastygal.com') {
        cy.get(productColorIsDisplayedOnPLP).eq(1).should('have.attr', 'href'); // Attribute changed from src to href for NastyGal
      } else {
        cy.get(productColorIsDisplayedOnPLP).eq(1).should('have.attr', 'src');
      }
    },
    assertProductVariantIsApplied (typeOfPrefn: string, productVariations: string) {
      cy.location('search', {timeout: 60000})
        .should('contains', '?prefn1=' + typeOfPrefn + '&prefv1=')
        .then((s) => new URLSearchParams(s))
        .invoke('get', 'prefv1', {timeout: 60000})
        .should('contains', productVariations);
    },
    assertProductSizeIsDisplayedOnPLP () {
      if (isSiteGenesisBrand) {
        cy.get('.sizeRefinement > div > ul > li.swatches-item.selected').invoke('attr', 'data-value').as('selectedSize');
      } else {
        cy.wait(8000); // It takes sometime to display checkbox as checked
        cy.get('#refinementAttributesList-' + (assertionText.size[variables.language]) + ' li div[aria-checked="true"]').invoke('attr', 'aria-label').as('selectedSize');
      }
      cy.location('search', {timeout: 60000})
        .should('contains', '?prefn1=sizeRefinement&prefv1=')
        .then((s) => new URLSearchParams(s))
        .invoke('get', 'prefv1', {timeout: 60000}).then( function (size) {
          cy.wrap(size).should('eq', this.selectedSize);
        });
    },
    assertProductPriceIsDisplayedOnPLP () {
      cy.location('search', {timeout: 60000})
        .should('contains', 'pmax')
        .should('contains', 'pmin');
    },

    assertItemIsAddedToWishlistColorChange () {
      const wishListIconColor = selectors[variables.brand].wishListIconColor;
      cy.get(wishListIconColor).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    }

  };
}

export default new PlpPage();