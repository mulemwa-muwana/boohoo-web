import * as CommonActions from '../../helpers/common';
import GlobalFooter from '../../pom/globalfooter.page';
import HomePage from '../../pom/home.page';
import PrivacyPolicyPage from '../../pom/privacypolicy.page';
import TermsAndConditionsPage from '../../pom/termsandconditions.page';
import SocialsPage from '../../pom/socials.page';
import homePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import assertionText from '../../helpers/assertionText';
import { isSiteGenesisBrand, siteGenesisBrands } from '../../helpers/common';

const variables = Cypress.env() as EnvironmentVariables;

describe('Home Page', function () {

  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();

  });

  /* Describe('Verify that home page is displayed after login or not and user name is displayed.', () => {
    it('No login', () => {
      HomePage.click.logInIcon();
      HomePage.assertions.assertUserIsNotLoggedIn(assertionText.assertUserIsNotLoggedIn[variables.language]);
    });
    it('After login', () => {
      cy.fixture('users').then((credentials: LoginCredentials) => {
        LoginPage.goto();
        LoginPage.actions.login(credentials.username, credentials.password);
        HomePage.goto();
        HomePage.assertions.assertUserPanelTitle(assertionText.assertUsername[variables.language]);
      });
    }); */
       
  // HEADER
  describe('Header verifications', () => {
    it('Header Logo', () => {
      homePage.assertions.assertLogoPresent();
    });
    
    it('Verify search icon is present', () => {
      HomePage.click.searchIcon();
      HomePage.assertions.assertSearchIconPresent();
    });
    it('Verify search field is present', () => {
      HomePage.click.searchIcon();
      HomePage.assertions.assertSearchFieldPresent();
    });
    it('Verify search results page opens', () => {
      HomePage.click.searchIcon();
      HomePage.actions.findItemUsingSKU(variables.sku);
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

    if (!isSiteGenesisBrand) {
      it('Verify header Counter present', () => {
        homePage.assertions.assertPromotionPresent();
      });
    }

    it('Verify Mega Menu - Sale link opens', () => {
      if (variables.brand == 'boohoo.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
      } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
      } else {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLinkArkadia[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
      }
      HomePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.urlValidationSale[variables.language].toLowerCase());
    });
 
    it('Verify Mega Menu - NewIn link opens', () => {
      if (variables.brand == 'boohoo.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaDresses[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      } else if (variables.brand == 'nastygal.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
      } else {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      }
      homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.urlValidationNewIn[variables.language]);
    });

  });

  // FOOTER
  describe('Footer verification', () => {
    it('Verify success message is displayed after signing up - newsletter subscription footer', () => {
      const variables = Cypress.env() as EnvironmentVariables;
      const randomEmail = CommonActions.randomEmail();
      GlobalFooter.actions.subscribeToNewsletter(randomEmail);
      GlobalFooter.assertions.assertSuccessfulSubscription(assertionText.successfulSubscription[variables.language]);
    });
      
    it('Verify that Form validation error is displayed - newsletter subscription footer', () => {
      const variables = Cypress.env() as EnvironmentVariables;
      GlobalFooter.actions.subscribeToNewsletter('nonValidEmail.com');
      if (variables.brand == 'boohoo.com') {
        GlobalFooter.assertions.assertUnsuccessfulSubscription(assertionText.unsuccessfulSubscription[variables.language]);
      } else if (isSiteGenesisBrand) {
        GlobalFooter.assertions.assertUnsuccessfulSubscription(assertionText.unsuccessfulSubscriptionCoast[variables.language]);
      } else {
        GlobalFooter.assertions.assertUnsuccessfulSubscription(assertionText.unsuccessfulSubscriptionNG[variables.language]);
      }
    });
      
    it('Verify correct error message is displayed - newsletter subscription footer', () => {
      const variables = Cypress.env() as EnvironmentVariables;
      HomePage.goto();
      GlobalFooter.actions.subscribeToNewsletter('euboohoo@gmail.com');
      GlobalFooter.assertions.asssertAlreadySubscribed(assertionText.alreadySubscribed[variables.language]);
    });

    // Needs updating global footer, privacy and social pages
      
    describe('Verify the content page (Privacy Policy and Terms And Conditions) is displayed.', () => {
      it('Privacy policy', () => {
        GlobalFooter.click.privacyPolicyLink();
        if (variables.brand == 'boohoo.com' || isSiteGenesisBrand) {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1[variables.language]);
        } else {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1Arcadia[variables.language]);
        }
        if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com' || isSiteGenesisBrand) {
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice');
        } else {
          PrivacyPolicyPage.assertions.assertOnPage('privacy-policy');
        }
      });
    
      it('Verify the content page (Privacy Policy) is displayed: Footer Link (copyright)', () => {
        GlobalFooter.click.copyrightPrivacyPolicyLink();
        if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com' || isSiteGenesisBrand) {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1[variables.language]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice'); //  AssertionText.PrivacyPolicyURL[variables.language]
        } else if (variables.brand == 'misspap.com') {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyNoticeMisspap[variables.brand]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice'); //  AssertionText.PrivacyPolicyURL[variables.language]
        } else {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1Arcadia[variables.language]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-policy'); //  AssertionText.PrivacyPolicyArcadiaURL[variables.language]
        }
      });

      it('Verify the content page (Terms And Conditions) is displayed: Footer Link (copyright)', () => {
        GlobalFooter.click.copyrightTermsAndConditionsLink();

        if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
          TermsAndConditionsPage.assertions.assertTermsAndConditionsPageOpens(assertionText.TermsAndConditionsH1[variables.language]);
          TermsAndConditionsPage.assertions.assertOnPage('terms-and-conditions');
        } else if (isSiteGenesisBrand) {
          TermsAndConditionsPage.assertions.assertTermsAndConditionsPageOpens(assertionText.TermsAndConditionsSiteGenesisH1[variables.language]);
          TermsAndConditionsPage.assertions.assertOnPage('terms-of-use');
        } else {
          TermsAndConditionsPage.assertions.assertTermsAndConditionsPageOpens(assertionText.TermsAndConditionsArcadiaH1[variables.language]);
          TermsAndConditionsPage.assertions.assertOnPage('cs-terms-and-conditions');
        }
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
        if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
          SocialsPage.assertions.assertTikTokIconIsPresent();
          GlobalFooter.click.tiktokLink();
        }
      });
      
      it('YouTube', () => {
        if (variables.brand == 'boohoo.com' || variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'karenmillen.com') {
          SocialsPage.assertions.assertYouTubeIconIsPresent();
          GlobalFooter.click.youtubeLink();
        }
      });
      
      it('Pintrest', () => {
        if (variables.brand == 'boohoo.com' || isSiteGenesisBrand) {
          SocialsPage.assertions.assertPinterestIconIsPresent();
          GlobalFooter.click.pintrestLink();
        }
      });
      
      it('TheFix', () => {
        if (variables.brand == 'boohoo.com') {
          SocialsPage.assertions.assertTheFixIconIsPresent();
          GlobalFooter.click.theFixLink();
        }
      });
    });
      
    describe('Verify Footer Payment providers and mobile App Banners', () => {
      it('Verify that Payment and Delivery Providers are present as content slot.', () => {
        GlobalFooter.assertions.assertPaymentOptionsArePresent();
      });
          
      it('Verify that App Banner is present as content slot.', () => {
        if (!((variables.brand == 'boohoo.com' && (variables.locale == 'EU' || variables.locale == 'NL' || variables.locale == 'NO' || variables.locale == 'DK' || variables.locale == 'FI' || variables.locale == 'IT' || variables.locale == 'ES')) || (variables.brand == 'nastygal.com' && variables.locale == 'EU'))) {
          GlobalFooter.assertions.assertAppBannerPresent();
        }
      });
    });

    describe('Verify Footer Navigation Components are present and Links are functional.', () => {
      it('Verify that Footer Navigation Component is present and Links are functional - Track My Order', () => {
        if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com' || isSiteGenesisBrand) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackMyOrder[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackMyOrderArcadia[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Help', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.footerHelp[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Returns', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkReturns[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Delivery Info', () => {
        if (variables.brand == 'boohoo.com' && (variables.locale != 'EU' && variables.locale != 'AU' && variables.locale != 'NZ' && variables.locale != 'US' && variables.locale != 'CA')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfo[variables.language]);
        } else if (isSiteGenesisBrand) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfoSiteGenesis[variables.language]);
        } else if (variables.brand == 'nastygal.com' || (variables.brand == 'boohoo.com' && (variables.locale == 'EU' || variables.locale == 'US' || variables.locale == 'NZ' || variables.locale == 'AU' || variables.locale == 'CA'))) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerShipping[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfoArcadia[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - About boohoo', () => {
        if (variables.brand == 'boohoo.com')
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkAbout[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Size Guide', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkSizeGuide[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - The boohoo App', () => {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'FR' || variables.locale == 'IE' || variables.locale == 'AU' || variables.locale == 'US' || variables.locale == 'DE'))
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackApp[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - boohoo Premier', () => {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'FR' || variables.locale == 'IE'))
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkPremier[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Student Discount', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkStudentDiscount[variables.language]);
        if (variables.brand == 'warehousefashion.com') {
          GlobalFooter.actions.studentDiscountAcceptCookiesOnPopup(); // Needed for continuing cypress tests execution
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Discount & Promo Codes', () => {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'AU' || variables.locale == 'IE'))
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDiscountPromo[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Get Exclusive Offers & Updates', () => {
        if ((variables.brand == 'boohoo.com' && (variables.locale != 'NL' && variables.locale != 'FR' && variables.locale != 'IT'&& variables.locale != 'ES' && variables.locale != 'NO')) || variables.brand == 'nastygal.com' || isSiteGenesisBrand)
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGetExclusiveOffersAndUpdates[variables.language]);
      });

      /*
          It('Verify that Footer Navigation Component is present and Links are functional - Refer a Friend', () => {
          GlobalFooter.actions.checkFooterLinkByText('Refer a Friend');
        });
        */
      it('Verify that Footer Navigation Component is present and Links are functional - Become an Affiliate', () => {
        if (variables.brand == 'boohoo.com' || (variables.brand == 'nastygal.com' && variables.locale == 'UK') || variables.brand == 'coastfashion.com'|| variables.brand == 'oasis-stores.com' || variables.brand == 'karenmillen.com')
          GlobalFooter.actions.checkFooterLinkByText(assertionText.becomeAnAffiliate[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Become a Partner', () => {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'NZ'))
          GlobalFooter.actions.checkFooterLinkByText(assertionText.becomePartner[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Sustainability', () => {
        if (!(variables.brand == 'burton.co.uk' || variables.brand == 'misspap.com' && variables.locale == 'IE') && !(variables.brand == 'boohoo.com' && (variables.locale == 'NL'|| variables.locale == 'IT' || variables.locale == 'ES')))
          GlobalFooter.actions.checkFooterLinkByText(assertionText.sustainability[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Klarna', () => {
        if (!((variables.brand == 'boohoo.com' && (variables.locale == 'EU' || variables.locale == 'NO' || variables.locale == 'NL' || variables.locale == 'DK' || variables.locale == 'FI' || variables.locale == 'NZ' || variables.locale == 'CA')) || (variables.brand == 'nastygal.com' && (variables.locale == 'EU' || variables.locale == 'IE')) || (variables.brand == 'burton.co.uk' && variables.locale == 'EU')))
          GlobalFooter.actions.checkFooterLinkByText('Klarna');
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Clearpay', () => {
        if (variables.locale == 'US' || variables.locale == 'AU') {
          GlobalFooter.actions.checkFooterLinkByText('Afterpay');
        } else if (variables.locale == 'UK' || (variables.brand == 'boohoo.com' && (variables.locale == 'FR' || variables.locale == 'IT' || variables.locale == 'ES')) || (variables.brand == 'nastygal.com' && variables.locale == 'FR' )) {
          GlobalFooter.actions.checkFooterLinkByText('Clearpay');
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Laybuy', () => {
        if ((variables.brand == 'boohoo.com' && (variables.locale == 'UK'|| variables.locale == 'AU'|| variables.locale == 'NZ' )) || (variables.brand == 'nastygal.com' && variables.locale != 'US'))
          GlobalFooter.actions.checkFooterLinkByText('Laybuy');
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Investor Relations', () => {
        if (variables.brand == 'boohoo.com' || variables.brand == 'warehousefashion.com')
          GlobalFooter.actions.checkFooterLinkByText(assertionText.investor[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Environmental & Social Responsibility', () => {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'EU' || variables.locale == 'CA' || variables.locale == 'AU' || variables.locale == 'US'|| variables.locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText('Social Responsibility');
        } else if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'FR' || variables.locale == 'DE' || variables.locale == 'NZ' || variables.locale == 'DK' || variables.locale == 'FI'|| variables.locale == 'NO')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.envAndSocResp[variables.language]);
        } else if (['nastygal.com', 'wallis.co.uk', 'dorothyperkins.com', 'burton.co.uk', ...siteGenesisBrands].includes(variables.brand)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.envAndSocRespSiteGenesis[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - BCI Membership', () => {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'NZ'))
          GlobalFooter.actions.checkFooterLinkByText('BCI Membership');
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Modern Slavery Statement', () => {
        if ((variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'NZ')) || (variables.brand == 'nastygal.com' && variables.locale == 'UK') || ['wallis.co.uk', 'dorothyperkins.com', 'burton.co.uk', ...siteGenesisBrands].includes(variables.brand))
          GlobalFooter.actions.checkFooterLinkByText('Modern Slavery Statement', { assertionUrl: 'modern-slavery' });
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Careers', () => {
        if (!(variables.brand == 'boohoo.com' && variables.locale == 'IT') && !(variables.brand == 'nastygal.com' && variables.locale == 'FR'))
          GlobalFooter.actions.checkFooterLinkByText(assertionText.careers[variables.language], { assertionUrl: 'https://careers.boohoogroup.com/' });
      });
      it('Verify that Footer Navigation Component is present and Links are functional - T&Cs', () => {
        if (variables.brand == 'boohoo.com' ) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCond[variables.language]);
        } else if (isSiteGenesisBrand) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCondSiteGenesis[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCondArcadia[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Privacy Notice - Updated July 2022', () => {
        const australianLocales: boolean = variables.locale == 'AU' || variables.locale == 'NZ';
        const julyPrivacyPolicyBrands: Array<GroupBrands> = ['nastygal.com', 'oasis-stores.com', 'warehousefashion.com', 'misspap.com'];
        const augustPrivacyPolicyBrands: Array<GroupBrands> = ['coastfashion.com', 'karenmillen.com'];
        
        if ((variables.brand == 'boohoo.com' && !australianLocales) || julyPrivacyPolicyBrands.includes(variables.brand)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyJuly2022[variables.language]);
        } else if ((variables.brand == 'boohoo.com' && australianLocales) || augustPrivacyPolicyBrands.includes(variables.brand)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyAugust2022[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyArcadia[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - About Cookies', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.aboutCookies[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Sitemap', () => {
        if (variables.brand == 'boohoo.com' || isSiteGenesisBrand)
          GlobalFooter.actions.checkFooterLinkByText(assertionText.sitemap[variables.language]); 
      });  
      it('Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
        const currentYear = new Date().getFullYear();
        cy.scrollTo('bottom');
        cy.contains(`COPYRIGHT © ${currentYear}`, { matchCase: false }).should('be.visible');
      });
        
      it('Verify that the Sticky Footer displayed below Copyright and clickable.', () => {
        if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com' || isSiteGenesisBrand) {
          GlobalFooter.assertions.assertFooterIsFixedAndPresent();
          GlobalFooter.click.footerPromo();
        }
      });
    });

    describe('Verify that the global header is displayed.', () => {
      it('Check global header is visible when scrolling down.', () => {
        if (!isSiteGenesisBrand) {
          cy.scrollTo('bottom');
          GlobalFooter.assertions.assertHeaderIsVisible();
        }
      });
      it('Check global header displays.', () => {
        if (!isSiteGenesisBrand) {
          GlobalFooter.assertions.assertHeaderIsVisible();
        }
      });
    });

  });

});
