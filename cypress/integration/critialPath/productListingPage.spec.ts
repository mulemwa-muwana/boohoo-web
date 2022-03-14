import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';
import homePage from '../../pom/home.page';

describe('Home Page', function () {
  
  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
    HomePage.click.clothingsLink();
    HomePage.click.backInStockLink(); 
  });

  it('Verify that plp page opens', () => {
    plpPage.click.colorRefinements();
    plpPage.assertions.assertOnPage();
  });

  it('Verify the "Load More" button is located at the bottom of the page and functions correctly.', () => {
    plpPage.assertions.assertLoadMoreBtnIsVisible();
    plpPage.click.loadMoreProducts();
    plpPage.assertions.assertNumberOfItemsTextISVisible();
    plpPage.click.loadMoreProducts();

  });

  describe('Products details are displayed', () => {
    
    it('Verify product image is displayed', () => {
      plpPage.assertions.assertProductImageIsDisplayed();
    });

    it.only('Verify product name is displayed', () => {
      plpPage.assertions.assertProductNameIsDisplayed();
    });

    it.only('Verify product price is displayed', () => {
      plpPage.assertions.assertProductPriceIsDispayed();
    });

    it.only('Verify new product price is displayed', () => {
      plpPage.assertions.assertNewProductPriceIsDispayed();
    });

    it('Verify add to wishlist is displayed', () => {
      plpPage.click.wishlistOnPlpImage();
      plpPage.assertions.assertItemIsAddedToWishlist();
    });

    it.only('Verify that product color is dispayed', () => {
      plpPage.assertions.assertProductColorIsDisplayed();
    });

  });

  describe('Product refinements', () => {

    it('Verify category refinement is applied', () => {
      plpPage.click.categoryRefinement();  
      plpPage.click.colorBlue();
    });

    it('Verify size refinement is applied', () => {
      plpPage.click.sizeRefinement();

    });

    it('Verify style refinement is applied', () => {
      plpPage.click.styleRefinement();
    });

    it('Verify colour  refinement is applied', () => {
      plpPage.click.colorRefinements();
    });

    it('Verify price refinement is applied', () => {
      plpPage.click.priceRefinements();
    });

    it('Verify shop by fit refinement is applied', () => {
      plpPage.click.shopByFitRefinements();
    });

    it('Verify occasion refinement is applied', () => {
      plpPage.click.occassionRefinement();     
    });

    it('Verify clear filters can be applied', () => {
      plpPage.click.occassionRefinement();
      plpPage.click.shopByFitRefinements();
      plpPage.click.clearAllFilters();
    });

  });
});

