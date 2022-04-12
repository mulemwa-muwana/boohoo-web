import plpPage from '../../pom/plp.page';
import HomePage from '../../pom/home.page';

describe('Home Page', function () {
  
  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
    HomePage.click.clothingsLink(); // TODO: Miona could you look at this one please.
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

    it('Verify product name is displayed', () => {
      plpPage.assertions.assertProductNameIsDisplayed();
    });

    it('Verify product price is displayed', () => {
      plpPage.assertions.assertProductPriceIsDispayed();
    });

    it('Verify new product price is displayed', () => {
        
      // To be discussed is it needed
    });

    it('Verify add to wishlist is displayed', () => {
      plpPage.click.wishlistOnPlpImage();
      plpPage.assertions.assertItemIsAddedToWishlist();
    });

    it('Verify that product color is dispayed', () => {
      plpPage.assertions.assertProductColorIsDisplayedOnPLP();
    });

  });

  describe('Product refinements', () => {

    it('Verify category refinement is applied', () => {
      plpPage.click.categoryRefinement();  
      plpPage.click.selectRefinementVariant('Denim');
      plpPage.assertions.assertProductVariantIsApplied('denim');
    });

    it('Verify size refinement is applied', () => {
      plpPage.click.sizeRefinement();
      plpPage.click.selectRefinementVariant('12');
      plpPage.assertions.assertProductVariantIsApplied('12');
    });

    it('Verify style refinement is applied', () => {
      plpPage.click.styleRefinement();
      plpPage.click.selectRefinementVariant('Tops');
      plpPage.assertions.assertProductVariantIsApplied('tops');
    });

    it('Verify colour  refinement is applied', () => {
      plpPage.click.colorRefinements();
      plpPage.click.selectRefinementVariant('Black');
      plpPage.assertions.assertProductVariantIsApplied('black');
    });

    it('Verify price refinement is applied', () => {
      plpPage.click.priceRefinements();
      plpPage.click.priceVariant(); // This TC needs to be expanded
    });

    it('Verify shop by fit refinement is applied', () => {
      plpPage.click.shopByFitRefinements();
      plpPage.click.selectRefinementVariant('boohoo Tall');
      plpPage.assertions.assertProductVariantIsApplied('boohoo%20Tall');
    });

    it('Verify occasion refinement is applied', () => {
      plpPage.click.occassionRefinement();  
      plpPage.click.selectRefinementVariant('Casual');
      plpPage.assertions.assertProductVariantIsApplied('casual');   
    });

  });
});

