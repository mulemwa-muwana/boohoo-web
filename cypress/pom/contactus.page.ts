import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    facebook: 'b-contact-channel m-facebook-channel',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon: '.m-facebook-channel',
    emailIcon: '.m-email-channel',
  },
  'nastygal.com': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon: '.m-facebook-channel',
    emailIcon: '.m-email-channel',
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
    emailIcon:'[class="contact-channel js-contact-channel-email"]'
  },
  'karenmillen.com': {
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]'
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
    emailIcon:'[class="contact-channel js-contact-channel-email"]'
  },
  'boohoomena.com': {
    instagram: 'a[href="https://www.instagram.com/boohoo/"] > svg > path',
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    message: 'a[href="https://twitter.com/boohoo"] > svg > path',
    twitterIcon: '.m-twitter-channel',
    facebookIcon:'[class="contact-channel facebook-channel"]',
    emailIcon:'[class="contact-channel js-contact-channel-email"]'
  }
};
 
const variables = Cypress.env() as EnvironmentVariables;
class ContactUsPage implements AbstractPage {
  goto () {
    throw new Error('No goto href for the global footer, try HomePage.goto()');
  }

  click = { };
  actions = { };
  assertions = {
    assertTwitterIconIsNotPresent () {
      const viewportWidth = Cypress.config('viewportWidth');
      const twitterIcon = selectors[variables.brand].twitterIcon;
      
      // For either mobile or desktop view
      if (viewportWidth < 1100 || viewportWidth < 1100 ) {
      if (variables.brand !== 'dorothyperkins.com') {
        cy.scrollTo('top');
      }
      cy.get(twitterIcon).should('not.exist');
    }
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
    }
  };

} 

export default new ContactUsPage();