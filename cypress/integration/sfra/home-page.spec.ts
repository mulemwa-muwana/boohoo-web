import { LoginCredentials } from '../../support/types';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';

describe('Home Page', () => {  
    
    // This will execute before every single test, we're just going to the baseURL.
    beforeEach(() => {
      HomePage.goto();
    })

    /**
     * Tests of out scope: None. (Feasability Analysis has not been performed).
     */

    describe('TC001, TC002 - Verify that home page is displayed after login or not and user name is displayed.', () => {
        it('No login', () => {
            HomePage.goto();
            HomePage.assertions.assertUserPanelTitle('Login / Register');
        })
        it('After login', () => {
            cy.fixture('users').then((credentials: LoginCredentials) => {
                LoginPage.goto();
                LoginPage.actions.login(credentials.username, credentials.password);
                HomePage.goto();
                HomePage.assertions.assertUserPanelTitle(credentials.name);
            })
        })
    })

    it('TC003 - Verify that featured products are displayed on home page', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        User should be logged in and Featured products are displayed on home page
        */
    })

    it('TC004 - Verify that Search Functionality is present on home page.', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        User should be logged in and Search functionality is present on home page.
        */
    })

    it('TC005 - Verify the home page of application on different browsers.', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        User should be logged in and home page should be same on different browsers.
        */
    })

    it('TC006 - Verify the alignment on the home page.', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        User should be logged in and alignment of products on home page should be proper.
        */
    })

    it('TC007 - Verify that products displayed on home page are clickable.', () => {
        /*
        Open browser	                                Browser should be opened
        Open url	                                    Ecommerce website should be opened
        Enter username and password	                    User should be able to input username and password
        Click on login button	                        Home page should be displayed after login and user name should be displayed on home page
        Click on any product displayed on home page	    User should be redirected to product specification page.
        */
    })

    it('TC008 - Verify that when user clicks on a product, user should be redirected to product specification page.', () => {
        /*
        Open browser	                                Browser should be opened
        Open url	                                    Ecommerce website should be opened
        Enter username and password	                    User should be able to input username and password
        Click on login button	                        Home page should be displayed after login and user name should be displayed on home page
        Click on any product displayed on home page 	User should be redirected to product specification page.
        */
    })

    it('TC009 - Verify that user profile section is present on home page.', () => {
        /*
        Open browser	                                Browser should be opened
        Open url	                                    Ecommerce website should be opened
        Enter username and password	                    User should be able to input username and password
        Click on login button	                        Home page should be displayed after login and user name should be displayed on home page
        Click on user name displayed on home page.	    User profile should be present.
        */
    })

    it('TC010 - Verify that products displayed on home page are categorised.', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        Used should be logged in and home page should be displayed, products should be categorised. User should be able to click/tap on selected category tile or press Enter on a keyboard (only for in-focus elements)
        */
    })

    it('TC011 - Verify that Hero carousel is displayed on home page and autorotated.', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        Used should be logged in and home page should be displayed, Hero carousel is displayed on home page and autorotated. User should be able to click/tab on Hero carousel. User can hover over selected slide or select slide using keyboard except navigation controls.
        */
    })

    it('TC012 - Verify that Supplementary content slots are displayed.', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        User should be logged in and Supplementary content slots are displayed.
        */
    })

    it('TC013 - Verify Full Product Recommendation on Home Page are displayed.', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        User should be logged in and Full Product Recommendation should be displayed as set of product tiles in the carousel.
        */
    })

    it('TC014 - Verify Short Product Recommendation on Home Page are displayed.', () => {
        /*
        Open browser	                Browser should be opened
        Open url	                    Ecommerce website should be opened
        Enter username and password	    User should be able to input username and password
        Click on login button	        User should be logged in and Short Product Recommendation should be displayed.
        */
    })
})