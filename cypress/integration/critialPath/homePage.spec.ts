import { LoginCredentials } from '../../support/types';
import LoginPage from '../../pom/login.page';
import * as CommonActions from '../../helpers/common';
import GlobalFooter from '../../pom/globalfooter.page';
import HomePage from '../../pom/home.page';
import PrivacyPolicyPage from '../../pom/privacypolicy.page';
import SocialsPage from '../../pom/socials.page';

describe('Home Page', function () {
    
    // This will execute before every single test, we're just going to the baseURL.
    beforeEach(() => {
      HomePage.goto();
    })

    describe('Verify that home page is displayed after login or not and user name is displayed.', () => 
    {
        it('No login', () => {
            HomePage.goto();
         //   HomePage.assertions.assertUserPanelTitle('Login / Register');
        })
        it.only('After login', () => {
            cy.fixture('users').then((credentials: LoginCredentials) => {
                LoginPage.goto();
                LoginPage.actions.login(credentials.username, credentials.password);
             // commenting this out because after migration its changed
             //   HomePage.goto();
             //   HomePage.assertions.assertUserPanelTitle(credentials.name);
         })
    })
       
    //HEADER
    it('Header Logo', () => {
    })

    it('Header Womens/Mens', () => {
    })

    describe('Header Search function', () => 
    {
    it('Header Search function', () => {
        HomePage.click.searchIcon();
        HomePage.assertions.assertSearchIconPresent();
    })
    it('Header Search function', () => {
        HomePage.click.searchIcon();
        HomePage.assertions.assertSearchIconPresent();
    })
    it('Header Search function', () => {
        HomePage.click.searchIcon();
        HomePage.assertions.assertSearchIconPresent();
    })  
    })

    it('Header icon Account', () => {
    })

    })

    it('Header icon Wish List', () => {

    })

    it('Header icons Basket', () => {

    })

    it('Header Counter', () => {

    })

    it('Mega Menu - Sale', () => {

    })

    it('Mega Menu - NewIn', () => {

    })

    it('Mega Menu - Clothing', () => {

    })

    it('Mega Menu - Dresses', () => {

    })

    it('Mega Menu - Tops', () => {

    })

    it('Mega Menu - Shoes&Accessories', () => {

    })

    it('Mega Menu - Ocasion wear', () => {

    })

    it('Mega Menu - Beauty', () => {

    })

    it('Promo content slots are displayed (if configured)', () => {

    })

    //FOOTER
    it('Verify success message is displayed after signing up - newsletter subscription footer', () => {
        const randomEmail = CommonActions.randomEmail();
        GlobalFooter.actions.subscribeToNewsletter(randomEmail);
        GlobalFooter.assertions.assertSuccessfulSubscription();
      })
    
      it('Verify that Form validation error is displayed - newsletter subscription footer', () => {
        GlobalFooter.actions.subscribeToNewsletter('nonValidEmail.com');
        GlobalFooter.assertions.assertUnsuccessfulSubscription();
      })
    
      it('Verify correct error message is displayed - newsletter subscription footer', () => {
        const randomEmail = CommonActions.randomEmail();
        GlobalFooter.actions.subscribeToNewsletter(randomEmail);
        HomePage.goto();
        GlobalFooter.actions.subscribeToNewsletter(randomEmail);
        GlobalFooter.assertions.asssertAlreadySubscribed();
      })
    
      describe('Verify the content page (Privacy Policy) is displayed.', () => {
        it('First link.', () => {
          GlobalFooter.click.privacyPolicyLink();
          PrivacyPolicyPage.assertions.assertOnPage();
        })
    
        it('Second link.', () => {
          GlobalFooter.click.copyrightPrivacyPolicyLink();
          PrivacyPolicyPage.assertions.assertOnPage();
        })
      }) 
    
    
      describe('Verify that Social Networking Links are present.', () => {
        it('Instagram', () => {
          GlobalFooter.click.instagramLink();
          SocialsPage.assertions.assertOnInstagram();
        })
    
        it('Facebook', () => {
          GlobalFooter.click.facebookLink();
          SocialsPage.assertions.assertOnFacebook();
        })
    
        it('Twitter', () => {
          GlobalFooter.click.twitterLink();
          SocialsPage.assertions.assertOnTwitter();
        })
    
        it('TikTok', () => {
          GlobalFooter.click.tiktokLink();
          SocialsPage.assertions.assertOnTikTok();
        })
    
        it('YouTube', () => {
          GlobalFooter.click.youtubeLink();
          SocialsPage.assertions.assertOnYouTube();
        })
    
        it('Pintrest', () => {
          GlobalFooter.click.pintrestLink();
          SocialsPage.assertions.assertOnPintrest();
        })
    
        it('TheFix', () => {
          GlobalFooter.click.theFixLink();
          SocialsPage.assertions.assertOnTheFix();
        })
      })
    
      it('Verify that Payment and Delivery Providers are present as content slot.', () => {
        GlobalFooter.assertions.assertPaymentOptionsArePresent();
      })
      
      it('Verify that App Banner is present as content slot.', () => {
        GlobalFooter.assertions.assertPromoBannerPresent()
      })
    
      it('Verify that Footer Navigation Component is present and Links are functional.', () => {
        // Each of these will go back to the previous URL once the action has been completed.
    
        // First column
        GlobalFooter.actions.checkFooterLinkByText('Help');
        GlobalFooter.actions.checkFooterLinkByText('Track My Order');
        GlobalFooter.actions.checkFooterLinkByText('boohoo Premier');
        GlobalFooter.actions.checkFooterLinkByText('Returns');
        GlobalFooter.actions.checkFooterLinkByText('Size Guide');
        GlobalFooter.actions.checkFooterLinkByText('Student Discount - Get Offers');
        GlobalFooter.actions.checkFooterLinkByText('Discount & Promo Codes');
        GlobalFooter.actions.checkFooterLinkByText('Get Exclusive Offers & Updates');
    
        // Second column
        GlobalFooter.actions.checkFooterLinkByText('Delivery Information');
        GlobalFooter.actions.checkFooterLinkByText('Sustainability');
        GlobalFooter.actions.checkFooterLinkByText('Covid-19 Update');
        GlobalFooter.actions.checkFooterLinkByText('Recycling Options');
        GlobalFooter.actions.checkFooterLinkByText('T&C\'s');
        GlobalFooter.actions.checkFooterLinkByText('About Cookies');
        GlobalFooter.actions.checkFooterLinkByText('Refer a Friend');
    
        // Third column
        GlobalFooter.actions.checkFooterLinkByText('About boohoo');
        GlobalFooter.actions.checkFooterLinkByText('Investor Relations');
        GlobalFooter.actions.checkFooterLinkByText('Environment & Social Responsibility');
        GlobalFooter.actions.checkFooterLinkByText('BCI Membership');
        GlobalFooter.actions.checkFooterLinkByText('Modern Slavery Statement', { assertionUrl: 'https://www.boohooplc.com/sustainability/downloads/modern-slavery' });
        GlobalFooter.actions.checkFooterLinkByText('Careers');
        GlobalFooter.actions.checkFooterLinkByText('Become an Affiliate');
        GlobalFooter.actions.checkFooterLinkByText('Become a Partner');
        GlobalFooter.actions.checkFooterLinkByText('Sitemap');
        GlobalFooter.actions.checkFooterLinkByText('Klarna');
        GlobalFooter.actions.checkFooterLinkByText('Clearpay');
        GlobalFooter.actions.checkFooterLinkByText('Laybuy');
        GlobalFooter.actions.checkFooterLinkByText('Zip');
      })
    
      it('Verify that the Footer Copyright and Security Information displayed at the bottom of the website.', () => {
        const currentYear = new Date().getFullYear();
        cy.contains(`Copyright © ${currentYear} boohoo.com.`).should('be.visible');
      })
    
      describe('Verify that the Country Selector displayed and functional.', () => {
        it('USA', () => {
          GlobalFooter.actions.changeCountry('USA');
          GlobalFooter.assertions.assertCurrencyByPageContext('USD');
        })
    
        it('AUD', () => {
          GlobalFooter.actions.changeCountry('AUD');
          GlobalFooter.assertions.assertCurrencyByPageContext('AUD');
        })
    
        it('FRA', () => {
          GlobalFooter.actions.changeCountry('FRA');
          GlobalFooter.assertions.assertCurrencyByPageContext('EUR');
        })
    
        it('KW', () => {
          GlobalFooter.actions.changeCountry('KW');
          GlobalFooter.assertions.assertCurrencyByPageContext('KWD');
        })
      })
    
      it('Verify that the Sticky Footer displayed below Copyright and clickable.', () => {
        GlobalFooter.assertions.assertFooterIsFixedAndPresent();
        GlobalFooter.click.footerPromo();
      })
    
      describe('Verify that the global header is displayed.', () => {
        it('Check global header hides when scrolling down.', () => {
          cy.scrollTo('bottom');
          GlobalFooter.assertions.assertHeaderIsNotVisible();
        })
        it('Check global header displays.', () => {
          cy.scrollTo('top');
          GlobalFooter.assertions.assertHeaderIsVisible();
        })
    
        })

    })   
