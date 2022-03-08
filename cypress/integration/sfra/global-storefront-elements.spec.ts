import HomePage from '../../pom/home.page';

describe('Global Storefront Elements', function () {

  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
  });

  /**
     * Tests of out scope: None. (Feasability Analysis has not been performed).
     */

  describe('TC001 - Header icons and links are displayed and functional', function () {

    /*
        Open browser	                                                                                Browser should be opened
        Open url	                                                                                    Ecommerce website should be opened
        Verify that clicking on search icon expands and provides user option to search for product	
        Verify that clicking on user icon provides login and register option	                        Clicking on user icon should provide login and register option
        Verify that clicking on wishlist icon opens wishlist page	                                    Clicking on wishlist icon should  open wishlist page
        Verify that clicking on cart icon opens cart page	                                            Clicking on cart icon should open cart page
        */

    it('Logo', function () {

    });
    it('Search function', function () {
            
    });
    it('My Account', function () {
            
    });
    it('Crushes/Wishlist', function () {
            
    });
    it('Basket', function () {
            
    });
        
    // What is counter again?
    it('Counter?', function () {
            
    });
  });

  it('TC002 - Mega Menu is functioning as expected', function () {

    /* Expected Outcome overflowed ->
        
        Verify Tabs availability and design by pressing 'Tab' button	                                                                                                                                Focus should be cycled inside of modal dialog elements.
        Verify that Tabs show only active tab content	                                                                                                                                                Tab should show only active tab content
        Verify that 1st tab is active by default	                                                                                                                                                    1st tab should be active by default
        Verify that tab represents assigned content/elements	                                                                                                                                        Tab should represent assigned content/elements
        
        Verify that previously selected tab will be shown in inactive tab representation (if applicable) when user press moved to tab by keyboard navigation and select-follow focus is enabled	        Previously selected tab should show in inactive tab representation (if applicable) when user press moved to tab by keyboard navigation and select-follow focus is enabled
        */
  });
  it('TC003 - Verify Slide visual representations', function () {

  });
  it('TC004 - Verify that Dialog will be closed after user does following', function () {

  });
  it('TC005 - Other homepage features', function () {

  });
  it('TC006 - Verify Icons availability and design', function () {
        
  });
  it('TC007 - Verify links availability and design', function () {

  });
  it('TC008 - Header/Footer displayed on all pages (checkout will show minimised versions)', function () {

  });
  it('TC009 - Countdown timer displayed (if configured)', function () {
        
  });
});