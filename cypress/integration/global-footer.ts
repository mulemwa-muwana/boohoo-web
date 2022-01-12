import * as CommonActions from '../helpers/common';
import HomePage from '../pom/home.page';
import PrivacyPolicyPage from '../pom/privacypolicy.page';
import SocialsPage from '../pom/socials.page';

describe('Global Footer', () => {

  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
  })

  describe('Verify the details for Global Footer', function () {

    /**
     * Tests of out scope:
     * TC006 - Blind assistance cannot be automated currently.
     * TC007 - Not functionality we currently have.
     * TC010 - Not checking for alt tags.
     * TC021 - No language selector on site.
     * TC022 - No language selector on site.
     */

    it('TC001, TC004 - Verify success message is displayed after signing up.', () => {
      const randomEmail = CommonActions.randomEmail();
      HomePage.actions.subscribeToNewsletter(randomEmail);
      HomePage.assertions.assertSuccessfulSubscription();
    })

    it('TC002, TC003 - Verify that Form validation error is displayed.', () => {
      HomePage.actions.subscribeToNewsletter('nonValidEmail.com');
      HomePage.assertions.assertUnsuccessfulSubscription();
    })

    it('TC005 - Verify correct error message is displayed.', () => {
      const randomEmail = CommonActions.randomEmail();
      HomePage.actions.subscribeToNewsletter(randomEmail);
      HomePage.goto();
      HomePage.actions.subscribeToNewsletter(randomEmail);
      HomePage.assertions.asssertAlreadySubscribed();
    })

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


    describe('TC009 - Verify that Social Networking Links are present.', () => {
      it('Instagram', () => {
        HomePage.click.instagramLink();
        SocialsPage.assertions.assertOnInstagram();
      })

      it('Facebook', () => {
        HomePage.click.facebookLink();
        SocialsPage.assertions.assertOnFacebook();
      })

      it('Twitter', () => {
        HomePage.click.twitterLink();
        SocialsPage.assertions.assertOnTwitter();
      })

      it('TikTok', () => {
        HomePage.click.tiktokLink();
        SocialsPage.assertions.assertOnTikTok();
      })

      it('YouTube', () => {
        HomePage.click.youtubeLink();
        SocialsPage.assertions.assertOnYouTube();
      })

      it('Pintrest', () => {
        HomePage.click.pintrestLink();
        SocialsPage.assertions.assertOnPintrest();
      })

      it('TheFix', () => {
        HomePage.click.theFixLink();
        SocialsPage.assertions.assertOnTheFix();
      })
    })

    it('TC011 - Verify that Payment and Delivery Providers are present as content slot.', () => {
      HomePage.assertions.assertPaymentOptionsArePresent();
    })
    
    it('TC012 - Verify that App Banner is present as content slot.', () => {
      HomePage.assertions.assertPromoBannerPresent()
    })
  
    it('TC013 - Verify that Footer Navigation Component is present and Links are functional.', () => {
      // Each of these will go back to the previous URL once the action has been completed.

      // First column
      HomePage.actions.checkFooterLinkByText('Help');
      HomePage.actions.checkFooterLinkByText('Track My Order');
      HomePage.actions.checkFooterLinkByText('boohoo Premier');
      HomePage.actions.checkFooterLinkByText('Returns');
      HomePage.actions.checkFooterLinkByText('Size Guide');
      HomePage.actions.checkFooterLinkByText('Student Discount - Get Offers');
      HomePage.actions.checkFooterLinkByText('Discount & Promo Codes');
      HomePage.actions.checkFooterLinkByText('Get Exclusive Offers & Updates');

      // Second column
      HomePage.actions.checkFooterLinkByText('Delivery Information');
      HomePage.actions.checkFooterLinkByText('Sustainability');
      HomePage.actions.checkFooterLinkByText('Covid-19 Update');
      HomePage.actions.checkFooterLinkByText('Recycling Options');
      HomePage.actions.checkFooterLinkByText('T&C\'s');
      HomePage.actions.checkFooterLinkByText('About Cookies');
      HomePage.actions.checkFooterLinkByText('Refer a Friend');

      // Third column
      HomePage.actions.checkFooterLinkByText('About boohoo');
      HomePage.actions.checkFooterLinkByText('Investor Relations');
      HomePage.actions.checkFooterLinkByText('Environment & Social Responsibility');
      HomePage.actions.checkFooterLinkByText('BCI Membership');
      HomePage.actions.checkFooterLinkByText('Modern Slavery Statement', { assertionUrl: 'https://www.boohooplc.com/sustainability/downloads/modern-slavery' });
      HomePage.actions.checkFooterLinkByText('Careers');
      HomePage.actions.checkFooterLinkByText('Become an Affiliate');
      HomePage.actions.checkFooterLinkByText('Become a Partner');
      HomePage.actions.checkFooterLinkByText('Sitemap');
      HomePage.actions.checkFooterLinkByText('Klarna');
      HomePage.actions.checkFooterLinkByText('Clearpay');
      HomePage.actions.checkFooterLinkByText('Laybuy');
      HomePage.actions.checkFooterLinkByText('Zip');
    })
  
    it('TC014, TC015 - Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
      const currentYear = new Date().getFullYear();
      cy.contains(`Copyright © ${currentYear} boohoo.com.`).should('be.visible');
    })
  
    describe('TC016 - Verify that the Country Selector displayed and functional.', () => {
      it('USA', () => {
        HomePage.actions.changeCountry('USA');
        HomePage.assertions.assertCurrencyByPageContext('USD');
      })

      it('AUD', () => {
        HomePage.actions.changeCountry('AUD');
        HomePage.assertions.assertCurrencyByPageContext('AUD');
      })

      it('FRA', () => {
        HomePage.actions.changeCountry('FRA');
        HomePage.assertions.assertCurrencyByPageContext('EUR');
      })

      it('KW', () => {
        HomePage.actions.changeCountry('KW');
        HomePage.assertions.assertCurrencyByPageContext('KWD');
      })
    })
  
    it('TC017 - Verify that the Sticky Footer displayed below Copyright and clickable.', () => {
      HomePage.assertions.assertFooterIsFixedAndPresent();
      HomePage.click.footerPromo();
    })
  
    describe('TC018, TC019, TC020 - Verify that the global header is displayed.', () => {
      it('Check global header hides when scrolling down.', () => {
        cy.scrollTo('bottom');
        HomePage.assertions.assertHeaderIsNotVisible();
      })
      it('Check global header displays.', () => {
        cy.scrollTo('top');
        HomePage.assertions.assertHeaderIsVisible();
      })
    })

  })
  
})
