import { brand, locale } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    facebook: 'b-contact-channel m-facebook-channel',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon: '.m-facebook-channel',
    emailIcon: '.m-email-channel',
    emailOptions: '[class="b-accordion-content"]',
    emailOptionsNL: '[data-ref="questionSelector"]',
  },
  'nastygal.com': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon: '.m-facebook-channel',
    emailIcon: '.m-email-channel',
    emailOptions: '[class="b-accordion-content"]',
  },
  'dorothyperkins.com': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon: '.m-facebook-channel',
    emailIcon: '.m-email-channel',
  },
  'burton.co.uk': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon: '.m-facebook-channel',
    emailIcon: '.m-email-channel',
    emailOptions: '[class="b-accordion-content"]',
  },
  'wallis.co.uk': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon: '.m-facebook-channel',
    emailIcon: '.m-email-channel',
  },
  'boohooman.com': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]',
    emailOptions: '[class="js-contactus-form form-horizontal"]',
    
  },
  'karenmillen.com': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]',
    emailOptions: '[class="cs_contactus-title"]',
  },
  'coastfashion.com': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]'
  },
  'warehousefashion.com': {
    instagram: 'a[href="https://www.instagram.com/boohoo/"] > svg > path',
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]'
  },
  'oasis-stores.com': {
    instagram: 'a[href="https://www.instagram.com/boohoo/"] > svg > path',
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]'
  },
  'misspap.com': {
    instagram: 'a[href="https://www.instagram.com/boohoo/"] > svg > path',
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.contact-channel twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]',
    emailOptions: '[class="js-contactus-form form-horizontal"]',
  },
  'boohoomena.com': {
    instagram: 'a[href="https://www.instagram.com/boohoo/"] > svg > path',
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]',
    emailOptions: '[class="js-contactus-form form-horizontal"]',
  }
};
 
const variables = Cypress.env() as EnvironmentVariables;
class ContactUsPage implements AbstractPage {
  goto () {
    throw new Error('No goto href for the global footer, try HomePage.goto()');
  }

  click = {
    emailIconOption () {
      cy.wait(4000);
      const emailIcon = selectors[variables.brand].emailIcon;
      cy.get(emailIcon).invoke('show').click({ multiple: true });
    },
  };

  actions = { };
  assertions = {
    assertTwitterIconIsNotPresent () {
      const twitterIcon = selectors[variables.brand].twitterIcon;
     
      if (variables.brand !== 'dorothyperkins.com') {
        cy.scrollTo('top');
      }
      cy.get(twitterIcon).should('not.exist');
    },
    assertFacebookIconIsPresent () {
      const facebookIcon = selectors[variables.brand].facebookIcon;
      if (variables.brand !== 'dorothyperkins.com') {
        cy.scrollTo('bottom');
      }
      cy.get(facebookIcon).should('be.visible');
    },
    assertEmailIconIsPresent () {
      const emailIcon = selectors[variables.brand].emailIcon;
      if (variables.brand !== 'dorothyperkins.com') {
        cy.scrollTo('top');
      }
      cy.get(emailIcon).should('be.visible');
    },
    assertEmailOptionsPresent () {
      const emailOptions = selectors[variables.brand].emailOptions;
      const emailOptionsNL =selectors[variables.brand].emailOptionsNL;
      if( brand == 'boohoo.com' && locale == 'NL'){
        cy.get(emailOptionsNL).should('be.visible');
      } else {
      cy.get(emailOptions).should('be.visible');
      }
    }
  };

} 

export default new ContactUsPage();