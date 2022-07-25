import { EnvironmentVariables, LoginCredentials } from '../../support/types';
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
      const variables = Cypress.env() as EnvironmentVariables;
      HomePage.click.logInIcon();
      HomePage.assertions.assertUserIsNotLoggedIn(assertionText.assertUserIsNotLoggedIn[variables.language]);
    });
    it('After login', () => {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        const variables = Cypress.env() as EnvironmentVariables;
        LoginPage.goto();
        LoginPage.actions.login(credentials.username, credentials.password);
        HomePage.goto();
        HomePage.assertions.assertUserPanelTitle(assertionText.assertUsername[variables.language]);
      });
    });
       
    // HEADER
    describe('Header verifications', () => {
      it('Header Logo', () => {
        homePage.assertions.assertLogoPresent();
      });
    
      it.only('Verify search icon is present', () => {
        HomePage.click.searchIcon();
        HomePage.assertions.assertSearchIconPresent();
      });
      it('Verify search field is present', () => {
        HomePage.click.searchIcon();
        HomePage.assertions.assertSearchFiledPresent();
      });
      it('Verify search results page opens', () => {
        const variables = Cypress.env() as EnvironmentVariables;
        HomePage.click.searchIcon();
        HomePage.actions.findItemUsingSKU[variables.sku];
        HomePage.assertions.assertSearchResultPage(variables.sku);
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
        const variables = Cypress.env() as EnvironmentVariables;
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
        homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.saleLink[variables.language].toLowerCase());
      });
 
      it('Verify Mega Menu - NewIn link opens', () => {
        const variables = Cypress.env() as EnvironmentVariables;
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
        homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.subnavClothingNewInURL[variables.language]);
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
      it('Privacy policy - first link', () => {
        GlobalFooter.click.privacyPolicyLink();
        PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens();
        PrivacyPolicyPage.assertions.assertOnPage();
      });
      it('Privacy policy - second link', () => {
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

    // Each of these will go back to the previous URL once the action has been completed.      

    it('Verify that Footer Navigation Component is present and Links are functional - Track My Order', () => {
      GlobalFooter.actions.checkFooterLinkByText('Track My Order');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Help', () => {
      GlobalFooter.actions.checkFooterLinkByText('Help');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Returns', () => {
      GlobalFooter.actions.checkFooterLinkByText('Returns');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Delivery Info', () => {
      GlobalFooter.actions.checkFooterLinkByText('Delivery Info');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - About boohoo', () => {
      GlobalFooter.actions.checkFooterLinkByText('About boohoo');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Size Guide', () => {
      GlobalFooter.actions.checkFooterLinkByText('Size Guide');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - The boohoo App', () => {
      GlobalFooter.actions.checkFooterLinkByText('The boohoo App');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - boohoo Premier', () => {
      GlobalFooter.actions.checkFooterLinkByText('boohoo Premier');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Student Discount', () => {
      GlobalFooter.actions.checkFooterLinkByText('Student Discount');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Discount & Promo Codes', () => {
      GlobalFooter.actions.checkFooterLinkByText('Discount & Promo Codes');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Get Exclusive Offers & Updates', () => {
      GlobalFooter.actions.checkFooterLinkByText('Get Exclusive Offers & Updates');
    });

    /*
      It('Verify that Footer Navigation Component is present and Links are functional - Refer a Friend', () => {
      GlobalFooter.actions.checkFooterLinkByText('Refer a Friend');
    });
    */
    it('Verify that Footer Navigation Component is present and Links are functional - Become an Affiliate', () => {
      GlobalFooter.actions.checkFooterLinkByText('Become an Affiliate');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Become a Partner', () => {
      GlobalFooter.actions.checkFooterLinkByText('Become a Partner');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Sustainability', () => {
      GlobalFooter.actions.checkFooterLinkByText('Sustainability');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Klarna', () => {
      GlobalFooter.actions.checkFooterLinkByText('Klarna');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Clearpay', () => {
      GlobalFooter.actions.checkFooterLinkByText('Clearpay');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Laybuy', () => {
      GlobalFooter.actions.checkFooterLinkByText('Laybuy');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Zip', () => {
      GlobalFooter.actions.checkFooterLinkByText('Zip');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Investor Relations', () => {
      GlobalFooter.actions.checkFooterLinkByText('Investor Relations');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Environmental & Social Responsibility', () => {
      GlobalFooter.actions.checkFooterLinkByText('Environmental & Social Responsibility');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - BCI Membership', () => {
      GlobalFooter.actions.checkFooterLinkByText('BCI Membership');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Modern Slavery Statement', () => {
      GlobalFooter.actions.checkFooterLinkByText('Modern Slavery Statement', { assertionUrl: 'https://www.boohooplc.com/sustainability/downloads/modern-slavery' });
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Careers', () => {
      GlobalFooter.actions.checkFooterLinkByText('Careers');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - T&Cs', () => {
      GlobalFooter.actions.checkFooterLinkByText('T&Cs'); 
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Privacy Notice - Updated March 2021', () => {
      GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated March 2021');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - About Cookies', () => {
      GlobalFooter.actions.checkFooterLinkByText('About Cookies');
    });
    it('Verify that Footer Navigation Component is present and Links are functional - Sitemap', () => {
      GlobalFooter.actions.checkFooterLinkByText('Sitemap'); 
    });  
    it('Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
      const currentYear = new Date().getFullYear();
      cy.contains(`Copyright © ${currentYear} boohoo.com.`).should('be.visible');
    });
    
    describe('Verify that the Country Selector displayed and functional.', () => {
      it('US', () => {
        GlobalFooter.actions.changeCountry('US');
        HomePage.assertions.assertCountryURL('us-dwstg.boohoo.com');
      });
    
    });
    
    it('Verify that the Sticky Footer displayed below Copyright and clickable.', () => {
      GlobalFooter.assertions.assertFooterIsFixedAndPresent();
      GlobalFooter.click.footerPromo();
    });
    
    describe('Verify that the global header is displayed.', () => {
      it('Check global header is visible when scrolling down.', () => {
        cy.scrollTo('bottom');
        GlobalFooter.assertions.assertHeaderIsVisible();
      });
      it('Check global header displays.', () => {
        GlobalFooter.assertions.assertHeaderIsVisible();
      });
    
    });

  });   

});
