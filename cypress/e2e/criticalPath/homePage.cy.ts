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
import contactusPage from 'cypress/pom/contactus.page';
import faqPage from 'cypress/pom/faq.page';

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
    it('Verify that header logo, search icon/field, Account/ WishList/ Cart icons are present', () => {
      homePage.assertions.assertLogoPresent();
      homePage.assertions.assertWishListIconPresent();
      homePage.assertions.assertCartIconPresent();
      homePage.assertions.assertAccountIconPresent(); 
      HomePage.actions.closeSearchFieldForMobiles();

      HomePage.click.searchIcon();
      HomePage.assertions.assertSearchIconPresent();

      HomePage.assertions.assertSearchFieldPresent();
      HomePage.actions.closeSearchFieldForMobiles();
    });
    
    it('Verify search results page opens', () => {
      HomePage.click.searchIcon();
      HomePage.actions.findItemUsingSKU(variables.sku);
      HomePage.assertions.assertSearchResultPage(variables.sku);
    });

    it('Verify Mega Menu - Sale link opens', () => {
      if (variables.brand == 'boohoo.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
      } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
      } else if (variables.brand == 'boohooman.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLinkBHM[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSaleBHM[variables.language]);
      } else {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLinkArkadia[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
      }
      HomePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.urlValidationSale[variables.language].toLowerCase());
    });
 
    it('Verify Mega Menu - NewIn link opens', () => {
      if (variables.brand == 'boohoo.com' || variables.brand == 'boohoomena.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaDresses[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      } else if (variables.brand == 'nastygal.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
      } else if (variables.brand =='dorothyperkins.com') {
        HomePage.click.selectLinkFromMegaMenuForDorothy(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      } else {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      }    
      if (variables.brand == 'boohooman.com') {
        homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage('promo');
      } else {
        homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.urlValidationNewIn[variables.language]);
      }
    });

  });

  // FOOTER
  describe('Footer verification', () => {
    it('Verify success message is displayed after signing up - newsletter subscription footer', () => {
      const randomEmail = CommonActions.randomEmail();
      GlobalFooter.actions.subscribeToNewsletter(randomEmail);
      GlobalFooter.assertions.assertSuccessfulSubscription(assertionText.successfulSubscription[variables.language]);
    });
      
    it('Verify that Form validation error is displayed - newsletter subscription footer', () => {
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
      HomePage.goto();
      GlobalFooter.actions.subscribeToNewsletter('euboohoo@gmail.com'); // Bug fixed on DEV still on STG
      GlobalFooter.assertions.asssertAlreadySubscribed(assertionText.alreadySubscribed[variables.language]);
    });

    // Needs updating global footer, privacy and social pages
      
    describe('Verify the content page (Privacy Policy and Terms And Conditions) is displayed.', () => {
      it('Privacy policy', () => {
        GlobalFooter.click.privacyPolicyLink();
        if (variables.brand == 'boohoo.com' || (isSiteGenesisBrand && variables.brand != 'misspap.com')) {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1[variables.language]);
        } else if (variables.brand == 'misspap.com') {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyNoticeMisspap[variables.language]);
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
        if (variables.brand == 'boohooman.com') {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1BHM[variables.language]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice'); //  AssertionText.PrivacyPolicyArcadiaURL[variables.language]
        } else if (variables.brand == 'misspap.com') {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyNoticeMisspap[variables.language]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice'); //  AssertionText.PrivacyPolicyURL[variables.language]
        } else if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com' || isSiteGenesisBrand) {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1[variables.language]);
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
      it('Instagram', function () {
        this.skip(); // TODO: Enable this test after Build Server's IP address gets whitelisted for instagram.com
        
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
      
      it('TikTok', function () {
        const includedBrands: Array<GroupBrands> = ['boohoo.com', 'nastygal.com', 'misspap.com', 'boohooman.com'];
        if (!includedBrands.includes(variables.brand)) {
          this.skip();
        }
        SocialsPage.assertions.assertTikTokIconIsPresent();
        GlobalFooter.click.tiktokLink();
      });
      
      it('YouTube', function () {
        const includedBrands: Array<GroupBrands> = ['boohoo.com', 'coastfashion.com', 'karenmillen.com', 'misspap.com', 'boohoomena.com'];
        if (!includedBrands.includes(variables.brand)) {
          this.skip();
        }
        SocialsPage.assertions.assertYouTubeIconIsPresent();
        GlobalFooter.click.youtubeLink();
      });
      
      it('Pintrest', function () {
        const includedBrands: Array<GroupBrands> = ['boohoo.com', 'coastfashion.com', 'oasis-stores.com', 'warehousefashion.com', 'karenmillen.com', 'boohoomena.com'];
        if (!includedBrands.includes(variables.brand)) {
          this.skip();
        }  
        SocialsPage.assertions.assertPinterestIconIsPresent();
        GlobalFooter.click.pintrestLink();
      });
      
      it('TheFix', function () {
        if (variables.brand == 'boohoo.com') {
          SocialsPage.assertions.assertTheFixIconIsPresent();
          GlobalFooter.click.theFixLink();
        } else {
          this.skip();
        }
      });
    });
      
    describe('Verify Footer Payment providers and mobile App Banners', () => {
      it('Verify that Payment and Delivery Providers are present as content slot.', () => {
        GlobalFooter.assertions.assertPaymentOptionsArePresent();
      });
          
      it('Verify that App Banner is present as content slot.', function () {
        const excludedBoohooLocales: Array<Locale> = ['EU', 'NL', 'NO', 'DK', 'FI', 'IT', 'ES'];
        const excludedBoohooWithLocales: boolean = variables.brand == 'boohoo.com' && excludedBoohooLocales.includes(variables.locale);
        const excludedNastygalWithLocales: boolean = variables.brand == 'nastygal.com' && variables.locale == 'EU';
        const excludedCoastWithLocales: boolean = variables.brand == 'coastfashion.com' && variables.locale == 'IE';
        if (excludedBoohooWithLocales || excludedNastygalWithLocales || excludedCoastWithLocales) {
          this.skip();
        } else {
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
        if (isSiteGenesisBrand && variables.brand != 'misspap.com') {
          GlobalFooter.actions.checkHelpforSiteG(assertionText.footerCustomerService[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerHelp[variables.language]);
        }
        
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Returns', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkReturns[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Delivery Info', () => {
        const boohooLocales: Array<Locale> = ['EU', 'AU', 'NZ', 'US', 'CA'];
        if ((variables.brand == 'boohoo.com' && !boohooLocales.includes(variables.locale))) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfo[variables.language]);
        } else if (variables.brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfoNG[variables.language]);
        } else if (variables.brand == 'boohoo.com' && boohooLocales.includes(variables.locale)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerShipping[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfoArcadia[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - About Boohoo', function () {
        if (variables.brand == 'boohoo.com' || variables.brand == 'boohoomena.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkAboutBoohoo[variables.language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - About NastyGal', function () {
        if (variables.brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkAboutNastyGal[variables.language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Size Guide', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkSizeGuide[variables.language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - The boohoo/nastygal App', function () {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'FR' || variables.locale == 'IE' || variables.locale == 'AU' || variables.locale == 'US' || variables.locale == 'DE')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackAppBHO[variables.language]);
        } else if (variables.brand == 'nastygal.com' && variables.locale != 'EU') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackAppNG[variables.language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - boohoo Premier', function () {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'FR' || variables.locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkPremier[variables.language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Student Discount', function () {
        if (variables.brand == 'boohoomena.com' || (variables.brand == 'burton.co.uk' && variables.locale != 'UK')) {
          this.skip();
        }
        if (variables.brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDiscountPromoNG[variables.language]);
        } else { 
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkStudentDiscount[variables.language]);
        }
        if (variables.brand == 'warehousefashion.com') {
          GlobalFooter.actions.studentDiscountAcceptCookiesOnPopup(); // Needed for continuing cypress tests execution
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Discount & Promo Codes', function () {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'AU' || variables.locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDiscountPromo[variables.language]);
        } else if (variables.brand == 'nastygal.com' && (variables.locale == 'UK' || variables.locale == 'AU' || variables.locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDiscountPromoNG[variables.language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Get Exclusive Offers & Updates', function () {
        const boohooAndLocales: boolean = variables.brand == 'boohoo.com' && (variables.locale != 'NL' && variables.locale != 'FR' && variables.locale != 'IT' && variables.locale != 'ES' && variables.locale != 'NO');
        const boohooManAndLocales: boolean = variables.brand == 'boohooman.com' && (variables.locale != 'NL' && variables.locale != 'FR' && variables.locale != 'DE');
        
        if (boohooAndLocales || boohooManAndLocales || variables.brand == 'nastygal.com' || (isSiteGenesisBrand && variables.brand != 'misspap.com')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGetExclusiveOffersAndUpdates[variables.language]);
        } else if (variables.brand == 'misspap.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGetExclusiveOffersAndUpdatesMissPap[variables.language]);
        } else {
          this.skip();
        }
      });

      it('Verify that Footer Navigation Component is present and Links are functional - Gift Cards', function () {
        if ((variables.brand == 'boohoo.com' && (variables.locale == 'UK')) || (variables.brand == 'nastygal.com' && (variables.locale == 'UK' || variables.locale == 'US'))) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGiftCard[variables.language]);         
        } else if (variables.brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGiftVoucher[variables.language]);
        } else {
          this.skip();
        }
      });

      /*
          It('Verify that Footer Navigation Component is present and Links are functional - Refer a Friend', () => {
          GlobalFooter.actions.checkFooterLinkByText('Refer a Friend');
        });
        */
      it('Verify that Footer Navigation Component is present and Links are functional - Become an Affiliate', function () {
        if (variables.brand == 'boohoo.com' || (variables.brand == 'nastygal.com' && variables.locale == 'UK') || (variables.brand == 'coastfashion.com' && variables.locale != 'IE') || variables.brand == 'karenmillen.com' || variables.brand == 'misspap.com' || (variables.brand == 'boohooman.com' != (variables.locale == 'NL' || variables.locale == 'DE'|| variables.locale == 'FR'))) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.becomeAnAffiliate[variables.language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Become a Partner', function () {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'NZ')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.becomePartner[variables.language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Sustainability', function () {
        if (variables.brand == 'burton.co.uk' || variables.brand == 'misspap.com' || (variables.brand == 'boohoo.com' && (variables.locale == 'NL'|| variables.locale == 'IT' || variables.locale == 'ES'))) {
          this.skip();
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.sustainability[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Klarna', function () {
        const excludedBoohooWithLocales: boolean = variables.brand == 'boohoo.com' && (variables.locale == 'EU' || variables.locale == 'NO' || variables.locale == 'NL' || variables.locale == 'DK' || variables.locale == 'FI' || variables.locale == 'NZ' || variables.locale == 'CA');
        const excludedNastygalWithLocales: boolean = variables.brand == 'nastygal.com' && (variables.locale == 'EU' || variables.locale == 'IE');
        if ( excludedBoohooWithLocales || excludedNastygalWithLocales || (variables.brand == 'burton.co.uk' && variables.locale == 'EU') || variables.brand == 'boohoomena.com') {
          this.skip();
        } else {
          GlobalFooter.actions.checkFooterLinkByText('Klarna');
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Clearpay', function () {
        if (variables.locale == 'US' || variables.locale == 'AU') {
          GlobalFooter.actions.checkFooterLinkByText('Afterpay');
        } else if (variables.locale == 'UK' || (variables.brand == 'boohoo.com' && (variables.locale == 'FR' || variables.locale == 'IT' || variables.locale == 'ES')) || (variables.brand == 'nastygal.com' && variables.locale == 'FR' ) || (variables.brand == 'coastfashion.com' && (variables.locale != 'IE' ))) {
          GlobalFooter.actions.checkFooterLinkByText('Clearpay');
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - PayPal', function () {
        if (variables.brand == 'nastygal.com' && (variables.locale == 'UK' || variables.locale == 'US' || variables.locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText('Paypal');
        } else if ((variables.brand == 'coastfashion.com' && variables.locale == 'UK' ) || variables.locale == 'UK' || variables.locale == 'US' || variables.locale == 'IE') {
          GlobalFooter.actions.checkFooterLinkByText('PayPal');
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Investor Relations', function () {
        if (variables.brand == 'boohoo.com' || variables.brand == 'warehousefashion.com' || variables.brand == 'boohooman.com' || variables.brand == 'boohoomena.com' || variables.brand == 'coastfashion.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.investor[variables.language], { assertionUrl: 'www.boohooplc.com' });
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Nasty Galaxy', function () {
        if (variables.brand == 'nastygal.com' && (variables.locale == 'UK' || variables.locale == 'IE' || variables.locale == 'EU' || variables.locale == 'CA' || variables.locale == 'US')) {
          GlobalFooter.actions.checkFooterLinkByText('Nasty Galaxy'); 
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Become A Brand Ambassador', function () {
        if (variables.brand == 'nastygal.com' && (variables.locale == 'UK' || variables.locale == 'CA' || variables.locale == 'US')) {
          GlobalFooter.actions.checkFooterLinkByText('Become a Brand Ambassador'); 
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Environmental & Social Responsibility', function () {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'EU' || variables.locale == 'CA' || variables.locale == 'AU' || variables.locale == 'US'|| variables.locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText('Social Responsibility');
        } else if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'FR' || variables.locale == 'DE' || variables.locale == 'NZ' || variables.locale == 'DK' || variables.locale == 'FI'|| variables.locale == 'NO')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.envAndSocResp[variables.language]);
        } else if (variables.brand == 'nastygal.com' || variables.brand == 'misspap.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.envAndSocRespNG[variables.language]);
        } else if (['wallis.co.uk', 'dorothyperkins.com', 'burton.co.uk', ...siteGenesisBrands].includes(variables.brand)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.envAndSocRespSiteGenesis[variables.language]);
        } else {
          this.skip();
        }
      });
      it.skip('Verify that Footer Navigation Component is present and Links are functional - BCI Membership', () => {
        if (variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'NZ'))
          GlobalFooter.actions.checkFooterLinkByText('BCI Membership');
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Modern Slavery Statement', function () {
        const arkadiaBrands: Array<GroupBrands> = ['dorothyperkins.com', 'wallis.co.uk', 'burton.co.uk'];
        const sgBrands: Array<GroupBrands> = ['oasis-stores.com', 'coastfashion.com','warehousefashion.com', 'misspap.com', 'boohooman.com','karenmillen.com'];
        if (variables.brand == 'boohoomena.com') {
          this.skip();
        }
        if ((variables.brand == 'boohoo.com' && (variables.locale == 'UK' || variables.locale == 'NZ')) || ((variables.brand == 'nastygal.com' || sgBrands.includes(variables.brand)) && variables.locale == 'UK') || (arkadiaBrands.includes(variables.brand) && (variables.locale == 'UK' || variables.locale == 'IE' ||variables.locale == 'EU' ))) {
          GlobalFooter.actions.checkFooterLinkByText('Modern Slavery Statement', { assertionUrl: 'modern-slavery' });
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Careers', function () {
        if ((variables.brand == 'boohoo.com' && variables.locale == 'IT') || (variables.brand == 'nastygal.com' && variables.locale == 'FR') || variables.brand == 'boohoomena.com') {
          this.skip();
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.careers[variables.language], { assertionUrl: 'https://careers.boohoogroup.com/' });
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - T&Cs', () => {
        if (variables.brand == 'boohoo.com' || variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'warehousefashion.com' || variables.brand == 'karenmillen.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCond[variables.language]);
        } else if (variables.brand == 'boohooman.com' || variables.brand == 'boohoomena.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCondBoohooManAndMena[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCondArcadia[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Privacy Notice - Updated July 2022', () => {
        const australianLocales: boolean = variables.locale == 'AU' || variables.locale == 'NZ';
        const julyPrivacyPolicyBrands: Array<GroupBrands> = ['nastygal.com', 'warehousefashion.com', 'misspap.com', 'boohooman.com'];
        const augustPrivacyPolicyBrands: Array<GroupBrands> = ['karenmillen.com'];
        
        if ((variables.brand == 'boohoo.com' && !australianLocales) || julyPrivacyPolicyBrands.includes(variables.brand)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyJuly2022[variables.language]);
        } else if ((variables.brand == 'boohoo.com' && australianLocales) || augustPrivacyPolicyBrands.includes(variables.brand)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyAugust2022[variables.language]);
        } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated March 2023');
        } else if (variables.brand == 'boohoomena.com') {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated August 2020');
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyArcadia[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - About Cookies', () => {
        if (variables.brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.aboutCookiesNG[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.aboutCookies[variables.language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Sitemap', function () {
        if (variables.brand == 'boohoo.com' || isSiteGenesisBrand) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.sitemap[variables.language]); 
        } else {
          this.skip();
        }
      });  
      it('Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
        const currentYear = new Date().getFullYear();
        cy.scrollTo('bottom');
        if (variables.brand == 'boohooman.com') {
          cy.contains(`COPYRIGHT © ${currentYear - 1}`, { matchCase: false }).should('be.visible');
        } else {
          cy.contains(`COPYRIGHT © ${currentYear}`, { matchCase: false }).should('be.visible');
        }
      });
    });

    describe('Verify that the global header is displayed.', () => {
      it('Check global header is visible when scrolling down.', () => {
        const excludedBrands: Array<GroupBrands> = ['nastygal.com', 'coastfashion.com', 'oasis-stores.com', 'warehousefashion.com', 'karenmillen.com', 'boohoomena.com'];
        if (excludedBrands.includes(variables.brand)) { // For these brands header retracts(hides) on scroll down
          cy.scrollTo('bottom');
          GlobalFooter.assertions.assertHeaderIsNotVisible();
        } else {
          cy.scrollTo('bottom');
          GlobalFooter.assertions.assertHeaderIsVisible();
        }
      });
      it('Check global header displays.', () => {
        GlobalFooter.assertions.assertHeaderIsVisible();
      });
    });

    describe('Contact Us Page links', () => {

      beforeEach( function () {        
        if (variables.brand == 'boohooman.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerCustomerServiceBHM[variables.language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerHelp[variables.language]);
        }
        faqPage.click.contactUsLink();
      });

      it('Verify that Twitter is not an option', () => {
        contactusPage.assertions.assertTwitterIconIsNotPresent();
      });
      it('Verify that Facebook link is present and functional', () => {
        contactusPage.assertions.assertFacebookIconIsPresent();
      });
      it('Verify that Email link is present and functional', () => {
        contactusPage.assertions.assertEmailIconIsPresent();
      });
    });
  });
});
