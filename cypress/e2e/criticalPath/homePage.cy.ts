import * as CommonActions from '../../helpers/common';
import GlobalFooter from '../../pom/globalfooter.page';
import HomePage from '../../pom/home.page';
import PrivacyPolicyPage from '../../pom/privacypolicy.page';
import SocialsPage from '../../pom/socials.page';
import homePage from '../../pom/home.page';
import megaMenuLinksLanguages from '../../helpers/megaMenuLinksLanguages';
import assertionText from '../../helpers/assertionText';

const variables = Cypress.env() as EnvironmentVariables;

describe('Home Page', function () {
    
  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();

    /* If (variables.brand == 'nastygal.com') {
      HomePage.actions.closeNastygalPopup();
    }*/
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
      HomePage.assertions.assertSearchFiledPresent();
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

    it('Verify header Counter present', () => {
      homePage.assertions.counterOnHeaderPresent();
    });

    it('Verify Mega Menu - Sale link opens', () => {
      if (variables.brand == 'boohoo.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.saleLink[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavAllSale[variables.language]);
      } else {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingArkadiaNewIn[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      }
      homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.urlValidationSale[variables.language].toLowerCase());
    });
 
    it('Verify Mega Menu - NewIn link opens', () => {
      if (variables.brand == 'boohoo.com') {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.AllClothing[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      } else {
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.linkArkadiaNewIn[variables.language]);
        HomePage.click.selectLinkFromMegaMenu(megaMenuLinksLanguages.subnavClothingNewIn[variables.language]);
      }
      homePage.assertions.assertMegaMenuLinkIsOpeningCorrectPage(megaMenuLinksLanguages.urlValidationNewIn[variables.language]);
    });

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
    GlobalFooter.assertions.assertUnsuccessfulSubscription(assertionText.unsuccessfulSubscription[variables.language]);
  });
    
  it('Verify correct error message is displayed - newsletter subscription footer', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const randomEmail = CommonActions.randomEmail();
    GlobalFooter.actions.subscribeToNewsletter(randomEmail);
    HomePage.goto();
    GlobalFooter.actions.subscribeToNewsletter(randomEmail);
    GlobalFooter.assertions.asssertAlreadySubscribed(assertionText.alreadySubscribed[variables.language]);
  });

  // Needs updating global footer, privacy and social pages
    
  describe('Verify the content page (Privacy Policy) is displayed.', () => {
    it('Privacy policy', () => {
      GlobalFooter.click.privacyPolicyLink();
      if (variables.brand == 'boohoo.com') {
        PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1[variables.language]);
      } else {
        PrivacyPolicyPage.assertions.assertPrivacyNoticyPageOpens(assertionText.PrivacyPolicyH1Arcadia[variables.language]);
      }
      PrivacyPolicyPage.assertions.assertOnPage(assertionText.PrivacyPolicyURL[variables.language]);
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
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackMyOrder[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Help', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerHelp[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Returns', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkReturns[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Delivery Info', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDeliveryInfo[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - About boohoo', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkAbout[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Size Guide', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkSizeGuide[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - The boohoo App', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkTrackApp[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - boohoo Premier', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkPremier[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Student Discount', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkStudentDiscount[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Discount & Promo Codes', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkDiscountPromo[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Get Exclusive Offers & Updates', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGetExclusiveOffersAndUpdates[variables.language]);
  });

  /*
      It('Verify that Footer Navigation Component is present and Links are functional - Refer a Friend', () => {
      GlobalFooter.actions.checkFooterLinkByText('Refer a Friend');
    });
    */
  it('Verify that Footer Navigation Component is present and Links are functional - Become an Affiliate', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.becomeAnAffiliate[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Become a Partner', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.becomePartner[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Sustainability', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.sustainability[variables.language]);
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
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.careers[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - T&Cs', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.termsAndCond[variables.language]); 
  });
  it('Verify that Footer Navigation Component is present and Links are functional - Privacy - Updated March 2021', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.privacyPolicy[variables.language]);
  });
  it('Verify that Footer Navigation Component is present and Links are functional - About Cookies', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.aboutCookies[variables.language]);
  });
  it.only('Verify that Footer Navigation Component is present and Links are functional - Sitemap', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    GlobalFooter.actions.checkFooterLinkByText(assertionText.sitemap[variables.language]); 
  });  
  it('Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
    const currentYear = new Date().getFullYear();
    cy.scrollTo('bottom');
    cy.contains(`COPYRIGHT © ${currentYear} BOOHOO`).should('be.visible');
  });
    
  describe('Verify that the Country Selector displayed and functional.', () => {
    it('US', () => {
      GlobalFooter.actions.changeCountry('US');
      HomePage.assertions.assertCountryURL('us-dwstg.boohoo.com');
    });
    
  });
    
  /* It('Verify that the Sticky Footer displayed below Copyright and clickable.', () => {
    GlobalFooter.assertions.assertFooterIsFixedAndPresent();
    GlobalFooter.click.footerPromo();
  });*/
    
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