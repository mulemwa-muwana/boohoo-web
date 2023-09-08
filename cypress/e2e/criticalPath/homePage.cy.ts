import * as CommonActions from '../../helpers/common';
import GlobalFooter from '../../pom/globalfooter.page';
import HomePage from '../../pom/home.page';
import PrivacyPolicyPage from '../../pom/privacypolicy.page';
import TermsAndConditionsPage from '../../pom/termsandconditions.page';
import SocialsPage from '../../pom/socials.page';
import homePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import assertionText from '../../helpers/assertionText';
import { isSiteGenesisBrand, siteGenesisBrands, isMobileDeviceUsed } from '../../helpers/common';
import contactusPage from 'cypress/pom/contactus.page';
import faqPage from 'cypress/pom/faq.page';
import TrackOrderPage from '../../pom/ordertrack.page';
import { sku, brand, language, locale } from 'cypress/support/e2e';
import globalfooterPage from '../../pom/globalfooter.page';

describe('Home Page', function () {

  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();

  });

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
      HomePage.actions.findItemUsingSKU(sku);
      HomePage.assertions.assertSearchResultPage(sku);
    });

    it('Verify Mega Menu - Sale link opens', () => {
      if (brand == 'boohoo.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink[language]);
        if (locale != 'AU') {
          HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[language]);
        }
      } else if (brand == 'coastfashion.com' || brand == 'oasis-stores.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink[language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[language]);
      } else if (brand == 'boohooman.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLinkBHM[language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSaleBHM[language]);
      } else {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLinkArkadia[language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[language]);
      }
      HomePage.assertions.assertLinkIsOpeningCorrectPage(megaMenuLinksLanguages.urlValidationSale[language].toLowerCase());
    });
 
    it('Verify Mega Menu - NewIn link opens', () => {
      if (brand == 'boohoo.com' || brand == 'boohoomena.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[language]);
      } else if (brand == 'coastfashion.com' || brand == 'oasis-stores.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaDresses[language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[language]);
      } else if (brand == 'nastygal.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[language]);
      } else if (brand =='dorothyperkins.com') {
        HomePage.click.selectLinkFromMegaMenuForDorothy(megaMenuLinksLanguages.subnavClothingNewIn[language]);
      } else {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[language]);
      }    
      if (brand == 'boohooman.com') {
        if (locale == 'FR') {
          homePage.assertions.assertLinkIsOpeningCorrectPage('vetements');
        } else if (locale == 'NL') {
          homePage.assertions.assertLinkIsOpeningCorrectPage('nieuw-binnen');
        } else if (locale == 'IE') {
          homePage.assertions.assertLinkIsOpeningCorrectPage('new-in');
        } else {
          homePage.assertions.assertLinkIsOpeningCorrectPage('promo');
        }
      } else {
        homePage.assertions.assertLinkIsOpeningCorrectPage(megaMenuLinksLanguages.urlValidationNewIn[language]);
      }
    });

    it('Verify that Energy Saver option is present and functional - Boohoo UK', function () {
      if (brand == 'boohoo.com' && locale == 'UK' && !isMobileDeviceUsed) {
        homePage.assertions.assertEnergySaverVisible();
        homePage.actions.toggleEnergySaver();
      } else {
        this.skip();
      }
    });
    it('Verify that user can change country',()=>{
      if (isSiteGenesisBrand) {
        homePage.click.countryDropdown();
      } else {
        cy.scrollTo('bottom');
        cy.wait(3000);
      }
      homePage.actions.selectCountryFromDropdown();
      homePage.assertions.assertSelectCountryFromDropdown();   
    });

  });

  // FOOTER 
  describe('Footer verification', () => {
    it('Verify success message is displayed after signing up - newsletter subscription footer', () => {
      const randomEmail = CommonActions.randomEmail();
      GlobalFooter.actions.subscribeToNewsletter(randomEmail);
      GlobalFooter.assertions.assertSuccessfulSubscription(assertionText.successfulSubscription[language]);
    });
      
    it('Verify that Form validation error is displayed - newsletter subscription footer', () => {
      GlobalFooter.actions.subscribeToNewsletter('nonValidEmail.com');
      if (brand == 'boohoo.com') {
        GlobalFooter.assertions.assertUnsuccessfulSubscription(assertionText.unsuccessfulSubscription[language]);
      } else if (isSiteGenesisBrand) {
        GlobalFooter.assertions.assertUnsuccessfulSubscription(assertionText.unsuccessfulSubscriptionCoast[language]);
      } else {
        GlobalFooter.assertions.assertUnsuccessfulSubscription(assertionText.unsuccessfulSubscriptionNG[language]);
      }
    });
      
    it('Verify correct error message is displayed - newsletter subscription footer', () => {
      HomePage.goto();
      GlobalFooter.actions.subscribeToNewsletter('euboohoo@gmail.com'); // Bug fixed on DEV still on STG
      GlobalFooter.assertions.asssertAlreadySubscribed(assertionText.alreadySubscribed[language]);
    });

    // Needs updating global footer, privacy and social pages
      
    describe('Verify the content page (Privacy Policy and Terms And Conditions) is displayed.', () => {
      it('Privacy policy', () => {
        GlobalFooter.click.privacyPolicyLink();
        if (brand == 'boohoo.com' || (isSiteGenesisBrand && brand != 'misspap.com')) {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1[language]);
        } else if (brand == 'misspap.com') {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyNoticeMisspap[language]);
        } else {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1Arcadia[language]);
        }
        if (brand == 'boohoo.com' || brand == 'nastygal.com' || isSiteGenesisBrand) {
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice');
        } else {
          PrivacyPolicyPage.assertions.assertOnPage('privacy-policy');
        }
      });
    
      it('Verify the content page (Privacy Policy) is displayed: Footer Link (copyright)', () => {
        GlobalFooter.click.copyrightPrivacyPolicyLink();
        if (brand == 'boohooman.com') {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1BHM[language]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice'); //  AssertionText.PrivacyPolicyArcadiaURL[language]
        } else if (brand == 'misspap.com') {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyNoticeMisspap[language]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice'); //  AssertionText.PrivacyPolicyURL[language]
        } else if (brand == 'boohoo.com' || brand == 'nastygal.com' || isSiteGenesisBrand) {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1[language]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-notice'); //  AssertionText.PrivacyPolicyURL[language]
        } else {
          PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1Arcadia[language]);
          PrivacyPolicyPage.assertions.assertOnPage('privacy-policy'); //  AssertionText.PrivacyPolicyArcadiaURL[language]
        }
      });

      it('Verify the content page (Terms And Conditions) is displayed: Footer Link (copyright)', function () {
        if (brand == 'boohooman.com' && locale == 'FR') {
          this.skip();
        }
        GlobalFooter.click.copyrightTermsAndConditionsLink();

        if (brand == 'boohoo.com' || brand == 'nastygal.com') {
          TermsAndConditionsPage.assertions.assertTermsAndConditionsPageOpens(assertionText.TermsAndConditionsH1[language]);
          TermsAndConditionsPage.assertions.assertOnPage('terms-and-conditions');
        } else if (isSiteGenesisBrand) {
          TermsAndConditionsPage.assertions.assertTermsAndConditionsPageOpens(assertionText.TermsAndConditionsSiteGenesisH1[language]);
          TermsAndConditionsPage.assertions.assertOnPage('terms-of-use');
        } else {
          TermsAndConditionsPage.assertions.assertTermsAndConditionsPageOpens(assertionText.TermsAndConditionsArcadiaH1[language]);
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
        if (!includedBrands.includes(brand) || (brand == 'boohooman.com' && (locale == 'FR'|| locale == 'NL'||locale == 'IE' )) || (brand == 'misspap.com' && locale == 'IE')) {
          this.skip();
        }
        SocialsPage.assertions.assertTikTokIconIsPresent();
        GlobalFooter.click.tiktokLink();
      });
      
      it('YouTube', function () {
        const includedBrands: Array<GroupBrands> = ['boohoo.com', 'coastfashion.com', 'karenmillen.com', 'misspap.com', 'boohoomena.com'];
        if (!includedBrands.includes(brand)) {
          this.skip();
        }
        SocialsPage.assertions.assertYouTubeIconIsPresent();
        GlobalFooter.click.youtubeLink();
      });
      
      it('Pintrest', function () {
        const includedBrands: Array<GroupBrands> = ['boohoo.com', 'coastfashion.com', 'oasis-stores.com', 'warehousefashion.com', 'karenmillen.com', 'boohoomena.com'];
        if (!includedBrands.includes(brand)) {
          this.skip();
        }  
        SocialsPage.assertions.assertPinterestIconIsPresent();
        GlobalFooter.click.pintrestLink();
      });
      
      it('TheFix', function () {
        if (brand == 'boohoo.com') {
          SocialsPage.assertions.assertTheFixIconIsPresent();
          GlobalFooter.click.theFixLink();
        } else {
          this.skip();
        }
      });

      it('Snapchat', function () {
        if (brand == 'boohoomena.com') {
          SocialsPage.assertions.assertSnapchatIconIsPresent();
          GlobalFooter.click.snapchatLink();         
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
        const excludedBoohooWithLocales: boolean = brand == 'boohoo.com' && excludedBoohooLocales.includes(locale);
        const excludedNastygalWithLocales: boolean = brand == 'nastygal.com' && locale == 'EU';
        const excludedCoastWithLocales: boolean = brand == 'coastfashion.com' && locale == 'IE';
        const excludedMisspapWithLocales: boolean = brand == 'misspap.com' && locale == 'IE';
        const excludedBoohoomanWithLocales: boolean = brand == 'boohooman.com' && locale == 'NL';
        if (excludedBoohooWithLocales || excludedNastygalWithLocales || excludedCoastWithLocales || excludedMisspapWithLocales ||excludedBoohoomanWithLocales || (brand == 'coastfashion.com' && isMobileDeviceUsed)) {
          this.skip();
        } else {
          GlobalFooter.assertions.assertAppBannerPresent();
        }
      });
    });

    describe('Verify Footer Navigation Components are present and Links are functional.', () => {
      it('Verify that Footer Navigation Component is present and Links are functional - Track My Order', () => {
        if (brand == 'boohoo.com' || brand == 'nastygal.com' || isSiteGenesisBrand) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackMyOrder[language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackMyOrderArcadia[language]);
        }
        TrackOrderPage.actions.trackOrder('KUK300118644');
        if (isSiteGenesisBrand) {
          TrackOrderPage.assertions.assertTrackOrderErrorMsg(assertionText.orderNotFoundSG[language]);
        } else if (brand == 'boohoo.com') {
          TrackOrderPage.assertions.assertTrackOrderErrorMsg(assertionText.orderNotFoundBHO[language]);
        } else {
          TrackOrderPage.assertions.assertTrackOrderErrorMsg(assertionText.orderNotFound[language]);
        } 
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Help', () => {
        if (isSiteGenesisBrand && brand != 'misspap.com') {
          GlobalFooter.actions.checkHelpforSiteG(assertionText.footerCustomerService[language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerHelp[language]);
        }
        
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Returns', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkReturns[language]);
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Delivery Info', function () {
        const boohooLocales: Array<Locale> = ['EU', 'AU', 'NZ', 'US', 'CA','NO'];
        if ((brand == 'boohoo.com' && !boohooLocales.includes(locale))) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfo[language]);
        } else if (brand == 'nastygal.com') {
          if (locale == 'AU') {
            this.skip();
          } else {
            GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfoNG[language]);
          }
        } else if (brand == 'boohoo.com' && boohooLocales.includes(locale)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerShipping[language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfoArcadia[language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - About Boohoo', function () {
        if (brand == 'boohoo.com' || brand == 'boohoomena.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkAboutBoohoo[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - About NastyGal', function () {
        if (brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkAboutNastyGal[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Size Guide', () => {
        GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkSizeGuide[language]);
      });

      it('Verify that user can choose gender, category, fit - Size Guide', function () {
        if (brand == 'boohoo.com' && (locale == 'UK' || locale == 'FR' || locale == 'IE' || locale == 'AU' || locale == 'US' || locale == 'DE') ) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkSizeGuide[language]);
          homePage.assertions.assertSizeGuideGenderPresent();
          homePage.assertions.assertSizeGuideCategoryPresent();
          homePage.assertions.assertSizeGuideFitPresent();
          homePage.actions.selectDropdown();
        } else {
          this.skip();
        }
      });

      it('Verify that Footer Navigation Component is present and Links are functional - The boohoo/nastygal App', function () {
        if (brand == 'boohoo.com' && (locale == 'UK' || locale == 'FR' || locale == 'IE' || locale == 'AU' || locale == 'US' || locale == 'DE')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackAppBHO[language]);
        } else if (brand == 'nastygal.com' && locale != 'EU') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackAppNG[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - boohoo Premier', function () {
        if (brand == 'boohoo.com' && (locale == 'UK' || locale == 'FR' || locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkPremier[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Student Discount', function () {
        const excludedMisspapWithLocales: boolean = brand == 'misspap.com' && locale == 'IE';
        const excludedBurtonLocales: boolean = brand == 'burton.co.uk' && locale != 'UK';
        const excludedOasisLocales: boolean = brand == 'oasis-stores.com' && locale == 'IE';
        if (brand == 'boohoomena.com' || excludedMisspapWithLocales || excludedBurtonLocales || excludedOasisLocales) {
          this.skip();
        }
        if (brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDiscountPromoNG[language]);
        } else if (brand == 'karenmillen.com' && locale == 'US') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkStudentBean[language]);
        } else { 
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkStudentDiscount[language]);
        }
        if (brand == 'warehousefashion.com') {
          GlobalFooter.actions.studentDiscountAcceptCookiesOnPopup(); // Needed for continuing cypress tests execution
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Discount & Promo Codes', function () {
        if (brand == 'boohoo.com' && (locale == 'UK' || locale == 'AU' || locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDiscountPromo[language]);
        } else if (brand == 'nastygal.com' && (locale == 'UK' || locale == 'AU' || locale == 'IE')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDiscountPromoNG[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Get Exclusive Offers & Updates', function () {
        const boohooAndLocales: boolean = brand == 'boohoo.com' && (locale != 'NL' && locale != 'FR' && locale != 'IT' && locale != 'ES' && locale != 'NO');
        const boohooManAndLocales: boolean = brand == 'boohooman.com' && (locale != 'NL' && locale != 'FR' && locale != 'DE');
        if ( brand == 'boohooman.com' && locale == 'NL') {
          this.skip();
        } else if (boohooAndLocales || boohooManAndLocales || brand == 'nastygal.com' || (isSiteGenesisBrand && brand != 'misspap.com')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGetExclusiveOffersAndUpdates[language]);
        } else if (brand == 'misspap.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGetExclusiveOffersAndUpdatesMissPap[language]);
        } else {
          this.skip();
        }
      });

      it('Verify that Footer Navigation Component is present and Links are functional - Gift Cards', function () {
        if ((brand == 'boohoo.com' && (locale == 'UK')) || (brand == 'nastygal.com' && (locale == 'UK' || locale == 'US'))) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGiftCard[language]);         
        } else if (brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGiftVoucher[language]);
        } else {
          this.skip();
        }
      });

      it('Verify that Footer Navigation Component is present and links are functional - Refer a friend', function () {
        if (brand == 'boohoo.com' || (brand == 'boohooman.com' && locale == 'UK') || brand == 'misspap.com' && locale == 'UK') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.referFriendText[language]);
          GlobalFooter.assertions.assertReferFriendPagePresent(assertionText.referFriendPage[language]);
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
        if (brand == 'boohoo.com' || (brand == 'nastygal.com' && locale == 'UK') || (brand == 'coastfashion.com' && locale != 'IE') || (brand == 'karenmillen.com'&& locale != 'US')|| brand == 'misspap.com' || (brand == 'boohooman.com' != (locale == 'NL' || locale == 'DE'|| locale == 'FR'))) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.becomeAnAffiliate[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Become a Partner', function () {
        if (brand == 'boohoo.com' && (locale == 'UK' || locale == 'NZ')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.becomePartner[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Sustainability', function () {
        if (brand == 'burton.co.uk' || brand == 'misspap.com' || (brand == 'boohoo.com' && (locale == 'NL'|| locale == 'IT' || locale == 'ES'))) {
          this.skip();
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.sustainability[language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Klarna', function () {
        const excludedBoohooWithLocales: boolean = brand == 'boohoo.com' && (locale == 'EU' || locale == 'NO' || locale == 'NL' || locale == 'DK' || locale == 'FI' || locale == 'NZ' || locale == 'CA');
        const excludedNastygalWithLocales: boolean = brand == 'nastygal.com' && (locale == 'EU' || locale == 'IE');
        if ( excludedBoohooWithLocales || excludedNastygalWithLocales || (brand == 'burton.co.uk' && locale == 'EU') || brand == 'boohoomena.com') {
          this.skip();
        } else {
          GlobalFooter.actions.checkFooterLinkByText('Klarna');
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Clearpay', function () {
        if (locale == 'US' || locale == 'AU') {
          GlobalFooter.actions.checkFooterLinkByText('Afterpay');
        } else if (locale == 'UK' || (brand == 'boohoo.com' && (locale == 'FR' || locale == 'IT' || locale == 'ES')) || (brand == 'nastygal.com' && locale == 'FR' ) || (brand == 'coastfashion.com' && (locale != 'IE' ))) {
          GlobalFooter.actions.checkFooterLinkByText('Clearpay');
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - PayPal', function () {
        const includedLocales: Array<Locale> = ['UK', 'US', 'IE', 'AU'];
        if (brand == 'nastygal.com' && (locale == 'UK' || locale == 'US' || locale == 'IE') || brand == 'misspap.com' || (brand == 'karenmillen.com' && locale=='UK')) {
          GlobalFooter.actions.checkFooterLinkByText('Paypal');
        } else if (brand == 'boohooman.com'&& locale =='IE') {
          this.skip();
        } else if ((brand == 'coastfashion.com' && locale == 'UK') || includedLocales.includes(locale)) {
          GlobalFooter.actions.checkFooterLinkByText('PayPal');
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Investor Relations', function () {
        if (brand == 'boohoo.com' || brand == 'warehousefashion.com' || brand == 'boohooman.com' || brand == 'boohoomena.com' || brand == 'coastfashion.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.investor[language], { assertionUrl: 'www.boohooplc.com' });
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Nasty Galaxy', function () {
        if (brand == 'nastygal.com' && (locale == 'UK' || locale == 'IE' || locale == 'EU' || locale == 'CA' || locale == 'US')) {
          GlobalFooter.actions.checkFooterLinkByText('Nasty Galaxy'); 
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Become A Brand Ambassador', function () {
        if (brand == 'nastygal.com' && (locale == 'UK' || locale == 'CA' || locale == 'US')) {
          GlobalFooter.actions.checkFooterLinkByText('Become a Brand Ambassador'); 
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Environmental & Social Responsibility', function () {
        if (brand == 'boohoo.com' && (locale == 'EU' || locale == 'CA' || locale == 'AU' || locale == 'US'|| locale == 'IE' || locale == 'NO')) {
          GlobalFooter.actions.checkFooterLinkByText('Social Responsibility');
        } else if (brand == 'boohoo.com' && (locale == 'UK' || locale == 'FR' || locale == 'DE' || locale == 'NZ' || locale == 'DK' || locale == 'FI'|| locale == 'NO')) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.envAndSocResp[language]);
        } else if (brand == 'nastygal.com' || brand == 'misspap.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.envAndSocRespNG[language]);
        } else if (brand == 'boohooman.com' && locale == 'NL') {
          this.skip();
        } else if (['wallis.co.uk', 'dorothyperkins.com', 'burton.co.uk', ...siteGenesisBrands ].includes(brand)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.envAndSocRespSiteGenesis[language]);
        } else {
          this.skip();
        }
      });
      it.skip('Verify that Footer Navigation Component is present and Links are functional - BCI Membership', () => {
        if (brand == 'boohoo.com' && (locale == 'UK' || locale == 'NZ'))
          GlobalFooter.actions.checkFooterLinkByText('BCI Membership');
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Modern Slavery Statement', function () {
        const arkadiaBrands: Array<GroupBrands> = ['dorothyperkins.com', 'wallis.co.uk', 'burton.co.uk'];
        const sgBrands: Array<GroupBrands> = ['oasis-stores.com', 'coastfashion.com','warehousefashion.com', 'misspap.com', 'boohooman.com','karenmillen.com'];
        if (brand == 'boohoomena.com') {
          this.skip();
        }
        if ((brand == 'boohoo.com' && (locale == 'UK' || locale == 'NZ')) || ((brand == 'nastygal.com' || sgBrands.includes(brand)) && locale == 'UK') || (arkadiaBrands.includes(brand) && (locale == 'UK' || locale == 'IE' ||locale == 'EU' ))) {
          GlobalFooter.actions.checkFooterLinkByText('Modern Slavery Statement', { assertionUrl: 'modern-slavery' });
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Careers', function () {
        const excludedBoohooWithLocales: boolean = brand == 'boohoo.com' && locale == 'IT';
        const excludedNastygalWithLocales: boolean = brand == 'nastygal.com' && locale == 'FR';
        const excludedOasisWithLocales: boolean = brand == 'oasis-stores.com' && (locale == 'IE' || locale == 'EU');
        const excludedMisspapWithLocales: boolean = brand == 'misspap.com' && locale == 'IE';
        if (excludedBoohooWithLocales || excludedNastygalWithLocales || excludedOasisWithLocales || excludedMisspapWithLocales || brand == 'boohoomena.com') {
          this.skip();
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.careers[language], { assertionUrl: 'https://careers.boohoogroup.com/' });
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - T&Cs', () => {
        if (brand == 'boohoo.com' || brand == 'coastfashion.com' || brand == 'oasis-stores.com' || brand == 'warehousefashion.com' || brand == 'karenmillen.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCond[language]);
        } else if (brand == 'boohooman.com' || brand == 'boohoomena.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCondBoohooManAndMena[language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCondArcadia[language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Thrift', function () {
        if (brand == 'karenmillen.com' && locale == 'UK') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.thrift[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Notebook', function () {
        if (brand == 'karenmillen.com' && locale == 'UK') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.notebook[language], { assertionUrl: 'notebook' });
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Rental', function () {
        if (brand == 'karenmillen.com' && locale == 'UK') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.rental[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Karen Millen Loyalty', function () {
        if (brand == 'karenmillen.com' && locale == 'UK') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.loyalty[language]);
        } else {
          this.skip();
        }
      });

      it('Verify that Footer Navigation Component is present and Links are functional - BHM Key Worker Discount', function () {
        if (brand == 'boohooman.com' && locale == 'UK') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.keyWorkerDiscount[language]);
        } else {
          this.skip();
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - BHM boohooMAN ACTIVE', () => {
        if (brand == 'boohooman.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.boohooMANACTIVE[language]);
        }
      });

      // Skipping this test because its missing on STG and exists on PROD, until ints fixed on STG
      it.skip('Verify that Footer Navigation Component is present and Links are functional - NastyGal California Consumer Privacy Act', () => {
        if (brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.californiaConsumerPrivacyAct[language]);
        }
      });

      // Skipping this test because its missing on STG and exists on PROD, until ints fixed on STG
      it.skip('Verify that Footer Navigation Component is present and Links are functional - California Transparency In Supply Chains Act Statement', () => {
        if (brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.californiaTransparencyInSupplyChainsActStatement[language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Nasty Blog', () => {
        if (brand == 'nastygal.com') {
          homePage.click.nastyBlogLink('Nasty Blog');
          homePage.assertions.assertLinkIsOpeningCorrectPage('https://blog.nastygal.com/');
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Privacy Notice - Updated month year', () => {
        const australianLocales: boolean = locale == 'AU' || locale == 'NZ';
        const julyPrivacyPolicyBrands: Array<GroupBrands> = ['nastygal.com', 'warehousefashion.com', 'misspap.com'];
        
        if (brand=='nastygal.com' && locale=='IE') {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated August 2022');
        } if (brand=='karenmillen.com') {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - updated July 2023');
        } else if ((brand == 'boohoo.com' && !australianLocales) || julyPrivacyPolicyBrands.includes(brand)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyJuly2022[language]);
        } else if ((brand == 'boohoo.com' && australianLocales)) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyAugust2022[language]);
        } else if (brand == 'boohooman.com' && locale == 'NL') {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Beleid- Sinds Maart 2020');
        } else if (brand == 'boohooman.com' && locale != 'FR') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyJuly2022[language]);
        } else if (brand == 'boohooman.com' && locale == 'FR') {
          GlobalFooter.actions.checkFooterLinkByText('Politique de confidentialité - mise à jour Juin 2021');
        } else if ((locale == 'UK' || locale == 'EU') && (brand == 'coastfashion.com' || brand == 'oasis-stores.com')) {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated May 2023');
        } else if ((locale == 'IE') && (brand == 'coastfashion.com')) {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated June 2022');
        } else if ((locale == 'IE') && (brand == 'oasis-stores.com')) {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated July 2022');
        } else if (brand == 'boohoomena.com') {
          GlobalFooter.actions.checkFooterLinkByText('Privacy Notice - Updated August 2020');
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicyArcadia[language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - About Cookies', () => {
        if (brand == 'nastygal.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.aboutCookiesNG[language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.aboutCookies[language]);
        }
      });
      it('Verify that Footer Navigation Component is present and Links are functional - Sitemap', function () {
        if (brand == 'boohoo.com' || isSiteGenesisBrand) {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.sitemap[language]); 
        } else {
          this.skip();
        }
      });  
      it('Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
        const currentYear = new Date().getFullYear();
        cy.scrollTo('bottom');
        cy.contains(`COPYRIGHT © ${currentYear}`, { matchCase: false }).should('be.visible');
      });

    });

    describe('Verify that the global header is displayed.', () => {
      it('Check global header is visible when scrolling down.', () => {
        const excludedBrands: Array<GroupBrands> = ['nastygal.com', 'coastfashion.com', 'oasis-stores.com', 'warehousefashion.com', 'karenmillen.com', 'boohoomena.com'];
        
        if (isMobileDeviceUsed) {
          cy.scrollTo('bottom');
          GlobalFooter.assertions.assertHeaderIsVisible();
        } else if (excludedBrands.includes(brand)) { // For these brands header retracts(hides) on scroll down
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
        if (brand == 'boohooman.com') {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerCustomerServiceBHM[language]);
        } else {
          GlobalFooter.actions.checkFooterLinkByText(assertionText.footerHelp[language]);
        }
        faqPage.click.contactUsLink();
      });

      it('Verify that Twitter is not an option', function () {
        if (brand =='boohoo.com' || brand == 'boohooman.com' && (locale == 'NL' || locale == 'SE')) {
          this.skip();
        }      
        contactusPage.assertions.assertTwitterIconIsNotPresent();
      });
      it('Verify that Facebook link is present and functional',function () {
        if (brand == 'boohooman.com' && (locale == 'FR' || locale =='NL' || locale =='IE')) {
          this.skip(); // Facebook link isn't exist on contuct us page
        }
        contactusPage.assertions.assertFacebookIconIsPresent();
      });
      it('Verify that Email link is present and functional', function () {
        if (brand == 'boohooman.com' && (locale =='IE')) {
          this.skip(); // Email Us link isn't exist on contuct us page
        }
        contactusPage.assertions.assertEmailIconIsPresent();
      });
    });

  });
});
