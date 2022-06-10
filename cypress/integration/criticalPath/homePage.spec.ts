import { LoginCredentials } from '../../support/types';
import LoginPage from '../../pom/login.page';
import * as CommonActions from '../../helpers/common';
import GlobalFooter from '../../pom/globalfooter.page';
import HomePage from '../../pom/home.page';
import PrivacyPolicyPage from '../../pom/privacypolicy.page';
import SocialsPage from '../../pom/socials.page';
import homePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import assertionText from '../../helpers/assertionText';

describe('Home Page', function () {
    
  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
  });

  describe('Verify that home page is displayed after login or not and user name is displayed.', () => {
    it('No login', () => {
      HomePage.click.logInIcon();
      HomePage.assertions.assertUserIsNotLoggedIn(assertionText.assertUserIsNotLoggedIn.EN);
    });
    it('After login', () => {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        LoginPage.goto();
        LoginPage.actions.login(credentials.username, credentials.password);
        HomePage.goto();
        HomePage.assertions.assertUserPanelTitle(assertionText.assertUsername.EN);
      });
    });
       
    // HEADER
    describe('Header verifications', () => {
      it('Header Logo', () => {
        homePage.assertions.assertLogoPresent();
        // showing team how to create PR
      });
    
      it('Verify search icon is present', () => {
        HomePage.click.searchIcon();
        HomePage.assertions.assertSearchIconPresent();

        // Just trying to show PR
      });
      it('Verify search field is present', () => {
        HomePage.click.searchIcon();
        HomePage.assertions.assertSearchFiledPresent();
      });
      it('Verify search results page opens', () => {
        HomePage.click.searchIcon();
        HomePage.actions.findItemUsingSKU('aAZZ06403-105-35{enter}');
        HomePage.assertions.assertSearchResultPage('AZZ06403');
      });  
    
      it('Verify header icon Account present', () => {
        homePage.assertions.assertAccountIconPresent();
      });

      it('Verify header icon Wish List present', () => {
        homePage.assertions.assertWishListIconPresent();
      });

      it('Verify header icon Cart present', () => {
        homePage.assertions.assertCartIconPresent();
      });

      it('Verify header Counter present', () => {
        homePage.assertions.counterOnHeaderPresent();
      });

      it('Verify Mega Menu - Sale link opens', () => {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink.EN);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale.EN);
        homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.saleLink.EN.toLowerCase());
      });
 
      it('Verify Mega Menu - NewIn link opens', () => {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing.EN);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn.EN);
        homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.subnavClothingNewInURL.EN);
      });

    });

  });

  // FOOTER
  describe('Footer verification', () => {
    it('Verify success message is displayed after signing up - newsletter subscription footer', () => {
      const randomEmail = CommonActions.randomEmail();
      GlobalFooter.actions.subscribeToNewsletter(randomEmail);
      GlobalFooter.assertions.assertSuccessfulSubscription();
    });
    
    it('Verify that Form validation error is displayed - newsletter subscription footer', () => {
      GlobalFooter.actions.subscribeToNewsletter('nonValidEmail.com');
      GlobalFooter.assertions.assertUnsuccessfulSubscription();
    });
    
    it('Verify correct error message is displayed - newsletter subscription footer', () => {
      const randomEmail = CommonActions.randomEmail();
      GlobalFooter.actions.subscribeToNewsletter(randomEmail);
      HomePage.goto();
      GlobalFooter.actions.subscribeToNewsletter(randomEmail);
      GlobalFooter.assertions.asssertAlreadySubscribed();
    });
    
    describe('Verify the content page (Privacy Policy) is displayed.', () => {
      it('Privacy policy', () => {
        GlobalFooter.click.privacyPolicyLink();
        PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens();
        PrivacyPolicyPage.assertions.assertOnPage();
      });
    }); 
    
    describe('Verify that Social Networking Links are present.', () => {
      it('Instagram', () => {
        SocialsPage.assertions.assertInstagramIconIsPresent();
        GlobalFooter.click.instagramLink();
      });
    
      it('Facebook', () => {
        SocialsPage.assertions.assertFacebookIconIsPresent();
        GlobalFooter.click.facebookLink();
      });
    
      it('Twitter', () => {
        SocialsPage.assertions.assertTwitterIconIsPresent();
        GlobalFooter.click.twitterLink();
      });
    
      it('TikTok', () => {
        SocialsPage.assertions.assertTikTokIconIsPresent();
        GlobalFooter.click.tiktokLink();
      });
    
      it('YouTube', () => {
        SocialsPage.assertions.assertYouTubeIconIsPresent();
        GlobalFooter.click.youtubeLink();
      });
    
      it('Pintrest', () => {
        SocialsPage.assertions.assertPinterestIconIsPresent();
        GlobalFooter.click.pintrestLink();
      });
    
      it('TheFix', () => {
        SocialsPage.assertions.assertTheFixIconIsPresent();
        GlobalFooter.click.theFixLink();
      });
    });
    
    it('Verify that Payment and Delivery Providers are present as content slot.', () => {
      GlobalFooter.assertions.assertPaymentOptionsArePresent();
    });
      
    it('Verify that App Banner is present as content slot.', () => {
      GlobalFooter.assertions.assertPromoBannerPresent();
    });
    
    it('Verify that Footer Navigation Component is present and Links are functional.', () => {

      // Each of these will go back to the previous URL once the action has been completed.
    
      // First column (Quick Links)      
      GlobalFooter.actions.checkFooterLinkByText('Track My Order');
      GlobalFooter.actions.checkFooterLinkByText('Help');      
      GlobalFooter.actions.checkFooterLinkByText('Returns');
      GlobalFooter.actions.checkFooterLinkByText('Delivery Info');
      
      // Second column (About Us & More)
      GlobalFooter.actions.checkFooterLinkByText('About boohoo');
      GlobalFooter.actions.checkFooterLinkByText('Size Guide');
      GlobalFooter.actions.checkFooterLinkByText('The boohoo App');
      GlobalFooter.actions.checkFooterLinkByText('boohoo Premier');
      GlobalFooter.actions.checkFooterLinkByText('Student Discount');
      GlobalFooter.actions.checkFooterLinkByText('Discount & Promo Codes');
      GlobalFooter.actions.checkFooterLinkByText('Get Exclusive Offers & Updates');

      //  GlobalFooter.actions.checkFooterLinkByText('Gift Cards'); <- Links to boohoo.com (prod env)
      GlobalFooter.actions.checkFooterLinkByText('Refer a Friend');
      GlobalFooter.actions.checkFooterLinkByText('Become an Affiliate');
      GlobalFooter.actions.checkFooterLinkByText('Become a Partner');
    
      // Third column (Information)
      GlobalFooter.actions.checkFooterLinkByText('Sustainability');
      GlobalFooter.actions.checkFooterLinkByText('Klarna');
      GlobalFooter.actions.checkFooterLinkByText('Clearpay');
      GlobalFooter.actions.checkFooterLinkByText('Laybuy');
      GlobalFooter.actions.checkFooterLinkByText('Zip');
      GlobalFooter.actions.checkFooterLinkByText('Investor Relations');
      GlobalFooter.actions.checkFooterLinkByText('Environmental & Social Responsibility');
      GlobalFooter.actions.checkFooterLinkByText('BCI Membership');
      GlobalFooter.actions.checkFooterLinkByText('Modern Slavery Statement', { assertionUrl: 'https://www.boohooplc.com/sustainability/downloads/modern-slavery' });
      GlobalFooter.actions.checkFooterLinkByText('Careers');
      GlobalFooter.actions.checkFooterLinkByText('T&Cs');
      GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated March 2021');
      GlobalFooter.actions.checkFooterLinkByText('About Cookies');
      GlobalFooter.actions.checkFooterLinkByText('Sitemap');
     
    });
    
    it('Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
      const currentYear = new Date().getFullYear();
      cy.contains(`Copyright © ${currentYear} boohoo.com.`).should('be.visible');
    });
    
    describe('Verify that the Country Selector displayed and functional.', () => {
      it('US', () => {
        GlobalFooter.actions.changeCountry('US');
        HomePage.assertions.assertCountryURL('us-dwdev.boohoo.com');
      });
    
      it('AU', () => {
        GlobalFooter.actions.changeCountry('AU');
        HomePage.assertions.assertCountryURL('au-dwdev.boohoo.com');
      });
    
      it('FR', () => {
        GlobalFooter.actions.changeCountry('FR');
        HomePage.assertions.assertCountryURL('fr-dwdev.boohoo.com');
        
      });
    
      it('KW', () => {
        GlobalFooter.actions.changeCountry('KW');
        GlobalFooter.assertions.assertCurrencyByPageContext('KWD');
      });
    });
    
    it('Verify that the Sticky Footer displayed below Copyright and clickable.', () => {
      GlobalFooter.assertions.assertFooterIsFixedAndPresent();
      GlobalFooter.click.footerPromo();
    });
    
    describe('Verify that the global header is displayed.', () => {
      it('Check global header hides when scrolling down.', () => {
        cy.scrollTo('bottom');
        GlobalFooter.assertions.assertHeaderIsNotVisible();
      });
      it('Check global header displays.', () => {
        cy.scrollTo('top');
        GlobalFooter.assertions.assertHeaderIsVisible();
      });
    
    });

  });   

});
