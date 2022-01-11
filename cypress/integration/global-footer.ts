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

    describe.skip('TC008 - Verify the content page (Privacy Policy) is displayed.', () => {
      it('First link.', () => {
        HomePage.click.privacyPolicyLink();
        PrivacyPolicyPage.assertions.assertOnPage();
      })

      it('Second link.', () => {
        HomePage.click.copyrightPrivacyPolicyLink();
        PrivacyPolicyPage.assertions.assertOnPage();
      })
    }) 


    describe.skip('TC009 - Verify that Social Networking Links are present.', () => {
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

    it.skip('TC011 - Verify that Payment and Delivery Providers are present as content slot.', () => {
      HomePage.assertions.assertPaymentOptionsArePresent();
    })
    
    it.skip('TC012 - Verify that App Banner is present as content slot.', () => {
      HomePage.assertions.assertPromoBannerPresent()
    })
  
    it.skip('TC013 - Verify that Footer Navigation Component is present and Links are functional.', () => {
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
      HomePage.actions.checkFooterLinkByText('Modern Slavery Statement', { url: 'https://www.boohooplc.com/sustainability/downloads/modern-slavery' });
      HomePage.actions.checkFooterLinkByText('Careers');
      HomePage.actions.checkFooterLinkByText('Become an Affiliate');
      HomePage.actions.checkFooterLinkByText('Become a Partner');
      HomePage.actions.checkFooterLinkByText('Sitemap');
      HomePage.actions.checkFooterLinkByText('Klarna');
      HomePage.actions.checkFooterLinkByText('Clearpay');
      HomePage.actions.checkFooterLinkByText('Laybuy');
      HomePage.actions.checkFooterLinkByText('Zip');
    })
  
    it.skip('TC014, TC015 - Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
      const currentYear = new Date().getFullYear();
      cy.contains(`Copyright © ${currentYear} boohoo.com.`).should('be.visible');
    })
  
    describe.skip('TC016 - Verify that the Country Selector displayed and functional.', () => {
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
  
    it.skip('TC017 - Verify that the Sticky Footer displayed below Copyright and clickable.', () => {
      HomePage.assertions.assertFooterIsFixedAndPresent();
      HomePage.click.footerPromo();
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
