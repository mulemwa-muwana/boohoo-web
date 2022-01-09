import * as CommonActions from '../helpers/common';
import HomePage from '../pom/home.page';
import PrivacyPolicyPage from '../pom/privacypolicy.page';

describe('Global Footer', () => {

  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto({ applyCookies: true })
  })

  describe('Verify the details for Global Footer', function () {

    /**
     * Tests of out scope:
     * TC006 - Blind assistance cannot be automated currently.
     * TC007 - Not functionality we currently have.
     */

    it.skip('TC001, TC004 - Verify success message is displayed after signing up.', () => {
      const randomEmail = CommonActions.randomEmail();
      HomePage.actions.subscribeToNewsletter(randomEmail);
      HomePage.assertions.assertSuccessfulSubscription();
    })

    it.skip('TC002, TC003 - Verify that Form validation error is displayed.', () => {
      HomePage.actions.subscribeToNewsletter('nonValidEmail.com');
      HomePage.assertions.assertUnsuccessfulSubscription();
    })

    it.skip('TC005 - Verify correct error message is displayed.', () => {
      const randomEmail = CommonActions.randomEmail();
      HomePage.actions.subscribeToNewsletter(randomEmail);
      HomePage.goto();
      HomePage.actions.subscribeToNewsletter(randomEmail);
      HomePage.assertions.asssertAlreadySubscribed();
    })

    // it('TC007 - Verify that Footer Email Subscription is displayed and functional.', () => {
    //   cy.goOffline();
    //   const randomEmail = CommonActions.randomEmail();
    //   HomePage.actions.subscribeToNewsletter(randomEmail);
    // })

    describe('TC008 - Verify the content page (Privacy Policy) is displayed.', () => {

      it('First link.', () => {
        HomePage.click.privacyPolicyLink();
        PrivacyPolicyPage.assertions.assertOnPage();
      })

      it('Second link.', () => {
        HomePage.click.copyrightPrivacyPolicyLink();
        PrivacyPolicyPage.assertions.assertOnPage();
      })

    }) 


    it.skip('TC009 - Verify that Social Networking Links are present.', () => {
    })
    
    it.skip('TC010 - Verify that Social Networking Links are present and functional and functional.', () => {
    })
    
    it.skip('TC011 - Verify that Payment and Delivery Providers are present as content slot.', () => {
    })
    
    it.skip('TC012 - Verify that App Banner is present as content slot.', () => {
    })
  
    it.skip('TC013 - Verify that Footer Navigation Component is present and Links are functional.', () => {
    })
  
    it.skip('TC014 - Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
    })
  
    it.skip('TC015 - Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
    })
  
    it.skip('TC016 - Verify that the Country Selector displayed and functional.', () => {
    })
  
    it.skip('TC017 - Verify that the Sticky Footer displayed below Copyright and clickable.', () => {
    })
  
    it.skip('TC018 - Verify that the Sticky Footer is displayed below Copyright and is clickable.', () => {
    })
  
    it.skip('TC019 - Verify that the Sticky Footer is displayed below Copyright and is clickable.', () => {
    })
  
    it.skip('TC020 - Verify that the Sticky Footer is functional', () => {
    })
  
    it.skip('TC021 - Verify that the Language Selector is displayed and is functional.', () => {
    })
  
    it.skip('TC022 - Verify that the Currency Selector is present next to Language selector and is functional', () => {
    })

  })
  
})
