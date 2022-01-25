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

    it.skip('TC003 - Verify that featured products are displayed on home page', () => {

    })

    it.skip('TC004 - Verify that Search Functionality is present on home page.', () => {

    })

    it.skip('TC005 - Verify the home page of application on different browsers.', () => {

    })

    it.skip('TC006 - Verify the alignment on the home page.', () => {

    })

    it.skip('TC007 - Verify that products displayed on home page are clickable.', () => {

    })

    it.skip('TC008 - Verify that when user clicks on a product, user should be redirected to product specification page.', () => {

    })

    it.skip('TC009 - Verify that user profile section is present on home page.', () => {

    })

    it.skip('TC010 - Verify that products displayed on home page are categorised.', () => {

    })

    it.skip('TC011 - Verify that Hero carousel is displayed on home page and autorotated.', () => {

    })

    it.skip('TC012 - Verify that Supplementary content slots are displayed.', () => {

    })

    it.skip('TC013 - Verify Full Product Recommendation on Home Page are displayed.', () => {

    })

    it.skip('TC014 - Verify Short Product Recommendation on Home Page are displayed.', () => {

    })
})