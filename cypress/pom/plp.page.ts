import { isSiteGenesisBrand } from 'cypress/helpers/common';
import productVariations from 'cypress/helpers/productVariations';
import { isNumber } from 'cypress/types/lodash';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';

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
    numberOfItemsTextIsVisible: 'div.b-load_progress > span',
    productColorIsDisplayedOnPLP: '.b-product_tile_swatches-swatch_image',
    newProductPriceIsDispayed: '.m-new',
    productPriceIsDispayed: '.b-price-item',
    productImageIsDisplayed: '.b-product_tile-image > .null',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link'
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
    numberOfItemsTextIsVisible: 'div.b-load_progress > span',
    productColorIsDisplayedOnPLP: '.b-product_tile_swatches-swatch_image',
    newProductPriceIsDispayed: '.m-new',
    productPriceIsDispayed: '.b-price-item',
    productImageIsDisplayed: '#product-grid > div.l-plp_grid > section:nth-child(3) > div.b-product_tile-container > div:nth-child(1) > div.b-product_tile-top > a > picture > img',
    itemIsAddedToWishlist: '.b-header_wishlist-count', //  Does not exist for NG 
    productNameIsDisplayed: '.b-product_tile-container > [data-ref="gridTileTopContainer"] > .b-product_tile-title > .b-product_tile-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
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
    numberOfPagesTextIsVisible: '.search-result-options > div > ul.pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
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
    numberOfPagesTextIsVisible: '.search-result-options select[class*="pagination-select"]',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
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
    numberOfPagesTextIsVisible: '.search-result-options > div > ul.pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
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
    numberOfPagesTextIsVisible: '.search-result-options select[class*="pagination-select"]',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
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
    loadMoreProducts: ':nth-child(6) > .pagination > .pagination-list > .pagination-item-next > .pagination-item-link > .pagination-item-link-text',
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
    loadMoreProducts: '.search-result-options [title="Next"]',
    numberOfPagesTextIsVisible: ':nth-child(6) > .pagination > .pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
  },
  'boohoomena.com': {
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
    loadMoreProducts: 'div.search-result-options > .pagination [title="Next"]',
    numberOfPagesTextIsVisible: '.search-result-options > div > ul.pagination-list',
    productColorIsDisplayedOnPLP: 'img[class*=swatch-image]',
    newProductPriceIsDispayed: '.product-pricing .product-sales-price',
    productPriceIsDispayed: '.product-pricing .product-standard-price',
    productImageIsDisplayed: '.thumb-link img',
    itemIsAddedToWishlist: '.b-header_wishlist-count',
    productNameIsDisplayed: '.product-tile-name > .name-link',
    wishListIconColor: '.b-wishlist_button.m-tile .b-wishlist_button-icon'
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

    selectRefinementVariantShopByFit (classification: string) {
      const selectRefinementVariantShopByFit = selectors[variables.brand].selectRefinementVariantShopByFit;
      cy.get(selectRefinementVariantShopByFit).contains(classification).click({ force: true });
    },

    selectRefinementVariantFit () {
      const selectRefinementVariantFit = selectors[variables.brand].selectRefinementVariantFit;
      cy.get(selectRefinementVariantFit).click({ force: true });
    },

    selectRefinementVariantColor (color: string) {
      const selectRefinementVariantColor = selectors[variables.brand].selectRefinementVariantColor;
      cy.get(selectRefinementVariantColor).contains(color).click({ force: true });
    },

    selectRefinementVariantStyle (style: string) {
      const selectRefinementVariantStyle = selectors[variables.brand].selectRefinementVariantStyle;
      cy.get(selectRefinementVariantStyle).contains(style).click({ force: true });
    },

    selectRefinementVariantSize () {
      const selectRefinementVariantSize = selectors[variables.brand].selectRefinementVariantSize;
      cy.get(selectRefinementVariantSize).find('li').each(($element) => {
        if ($element.attr('data-value')) {
          $element.find('span').trigger('click');
          return false;
        }
      });
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
      const selectRefinementVariantCategory = selectors[variables.brand].selectRefinementVariantCategory;
      cy.get(selectRefinementVariantCategory).contains(category).click({ force: true });
    },

    selectCategoryPerLanguages (language: string) {
      const selectRefinementVariantCategoryOtherLanguages = selectors[variables.brand].selectRefinementVariantCategoryOtherLanguages;
      cy.get(selectRefinementVariantCategoryOtherLanguages + language).click({ force: true });
    },

    selectRefinementVariantOccasion (occasion: string) {
      const selectRefinementVariantOccasion = selectors[variables.brand].selectRefinementVariantOccasion;
      cy.get(selectRefinementVariantOccasion).contains(occasion).click({ force: true });
    },

    selectRefinementVariantPrice () {
      const selectRefinementVariantPrice = selectors[variables.brand].selectRefinementVariantPrice;
      cy.get(selectRefinementVariantPrice).find('li').each(($element) => {
        if ($element.attr('data-value')) {
          $element.find('span').trigger('click');
          return false;
        }
      });
    },

    // Load more products
    loadMoreProducts () {
      cy.scrollTo('bottom');
      const loadMoreProducts = selectors[variables.brand].loadMoreProducts;
      cy.get(loadMoreProducts).click({ force: true });
      cy.wait(10000);
    },

    // Product details (image, name, price, wishlist, quickview)
    wishlistOnPlpImage () {
      const brand: GroupBrands = 'boohoo.com';
      const wishlistPlpIcon = selectors[brand].wishlistPlpIcon;
      cy.get(wishlistPlpIcon).eq(1).click({ force: true });
    }

  };

  actions = {

  };

  assertions = {
    assertOnPage (text: string) {
      cy.url().then(currentUrl => {
        expect(currentUrl).to.contain(text);
      });
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
      cy.get(loadMoreProducts).should('be.visible');
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
      cy.get(productColorIsDisplayedOnPLP).eq(1).should('have.attr', 'src');
    },
    assertProductVariantIsApplied (typeOfPrefn: string, productVariations: string) {
      cy.location('search')
        .should('contains', '?prefn1=' + typeOfPrefn + '&prefv1=')
        .then((s) => new URLSearchParams(s))
        .invoke('get', 'prefv1')
        .should('contains', productVariations);
    },
    assertProductSizeIsDisplayedOnPLP (selectedSize: string) {
      cy.location('search')
        .should('contains', '?prefn1=sizeRefinement&prefv1=')
        .then((s) => new URLSearchParams(s))
        .invoke('get', 'prefv1')
        .should('eq', selectedSize);
    },
    assertProductPriceIsDisplayedOnPLP () {
      cy.location('search')
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