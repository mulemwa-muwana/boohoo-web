import { isSiteGenesisBrand } from 'cypress/helpers/common';
import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    instagramUrl: 'instagram.com/boohoo',
    instagram: 'a[href="https://www.instagram.com/boohoo/"] > svg > path',
    facebook: 'a[href="https://www.facebook.com/boohoo.com"] > svg',
    facebookUrl: 'facebook.com/boohoo.com',
    twitter: 'a[href="https://twitter.com/boohoo"] > svg > path',
    tiktok: 'a[href="https://www.tiktok.com/@boohoo?lang=en"] > svg',
    youtube: 'a[href="https://www.youtube.com/c/boohoo"] > svg > path',
    pinterest: '[href="https://www.pinterest.co.uk/boohooofficial/_created/"] > svg'
  },
  'nastygal.com': {
    instagramUrl: 'instagram.com/nastygal/',
    instagram: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(3) > svg',
    facebook: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(1) > svg > path',
    facebookUrl: 'facebook.com/nastygal',
    twitter: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(2)',
    tiktok: 'a[href="https://www.tiktok.com/@nastygal?lang=en"]',  
  },
  'dorothyperkins.com': {
    instagramUrl: 'instagram.com/dorothyperkins/',
    instagram: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(3) > svg',
    facebook: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(1) > svg > path',
    facebookUrl: 'facebook.com/dorothyperkins',
    twitter: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(2)'
  },
  'burton.co.uk': {
    instagramUrl: 'instagram.com/burton_menswear/',
    instagram: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(3) > svg',
    facebook: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(1) > svg > path',
    facebookUrl: 'facebook.com/burtonmenswear',
    twitter: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(2)'
  },
  'wallis.co.uk': {
    instagramUrl: 'instagram.com/wallisfashion/',
    instagram: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(3) > svg',
    facebook: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(1) > svg',
    facebookUrl: 'facebook.com/Wallis',
    twitter: '#footercontent > div.l-footer-content > div.l-footer-signup > div.l-footer-follow > div.b-footer_social > div > section > div > a:nth-child(2)'
  },
  'boohooman.com': undefined,
  'karenmillen.com': {
    instagramUrl: 'instagram.com/karen_millen/', 
    instagram: '.icon-instagram-2',
    facebook: '.icon-facebook-2',
    facebookUrl: 'facebook.com/coaststores',
    twitter: '.icon-twitter-2',
    youtube: '.icon-youtube-2',
    pinterest: '.icon-pinterest'
  },
  'coastfashion.com': {
    instagramUrl: 'instagram.com/coastfashion/',
    instagram: '.icon-instagram-2',
    facebook: '.icon-facebook-2',
    facebookUrl: 'facebook.com/coaststores',
    twitter: '.icon-twitter-2',
    youtube: '.icon-youtube-2',
    pinterest: '.icon-pinterest-2'
  },
  'warehousefashion.com': {
    instagramUrl: 'instagram.com/coastfashion/',
    instagram: '.icon-instagram-2',
    facebook: '.icon-facebook-2',
    facebookUrl: 'facebook.com/coaststores',
    twitter: '.icon-twitter-2',
    youtube: '',
    pinterest: '.icon-pinterest'
  },
  'oasis-stores.com': {
    instagramUrl: 'instagram.com/oasisfashion/',
    instagram: '.icon-instagram-2',
    facebook: '.icon-facebook-2',
    facebookUrl: 'facebook.com/oasisfashions',
    twitter: '.icon-twitter-2',
    youtube: '',
    pinterest: '.icon-pinterest'
  },
  'misspap.com': {
    instagramUrl: 'instagram.com/misspap/',
    instagram: ' .icon-instagram',
    facebook: '.icon-facebook',
    facebookUrl: 'facebook.com/MisspapOfficial/',
    twitter: '.icon-twitter',
    youtube: '.icon-youtube',
    pinterest: '.icon-pinterest'
  }
};

const variables = Cypress.env() as EnvironmentVariables;
class SocialsPage implements AbstractPage {

  goto () {
    throw new Error('SocialsPage is an abstract class representing multiple social pages.');
  }

  actions = {};

  click = {};

  assertions = {
    assertOnInstagram () {
      const instagramUrl = selectors[variables.brand].instagramUrl;
      cy.url().then(url => {
        expect(url).to.contain(instagramUrl);
      });
    },

    // Not working for Dorothy Perkins and Wallis 
    assertInstagramIconIsPresent () {
      const instagram = selectors[variables.brand].instagram;
      if (isSiteGenesisBrand) {
        cy.get(instagram).parent().invoke('attr', 'style', 'overflow:visible');
        cy.get(instagram).should('be.visible');
      } else {
        cy.get(instagram).should('be.visible');
      }
    },
    assertFacebookIconIsPresent () {
      const facebook = selectors[variables.brand].facebook;
      if (isSiteGenesisBrand) {
        cy.get(facebook).parent().invoke('attr', 'style', 'overflow:visible');
        cy.get(facebook).should('be.visible');
      } else {
        cy.get(facebook).should('be.visible');
      }
    },
    assertTheFixIconIsPresent () {
      cy.get('[href="https://thefix.boohoo.com/"] > svg').should('be.visible');
    },
    assertPinterestIconIsPresent () {
      const pinterest = selectors[variables.brand].pinterest;
      if (isSiteGenesisBrand) {
        cy.get(pinterest).parent().invoke('attr', 'style', 'overflow:visible');
        cy.get(pinterest).should('be.visible');
      } else {
        cy.get(pinterest).should('be.visible');
      }
    },
    assertTikTokIconIsPresent () {
      const tiktok = selectors[variables.brand].tiktok;
      cy.get(tiktok).should('be.visible');
    },
    assertTwitterIconIsPresent () {
      const twitter = selectors[variables.brand].twitter;
      if (isSiteGenesisBrand) {
        cy.get(twitter).parent().invoke('attr', 'style', 'overflow:visible');
        cy.get(twitter).should('be.visible');
      } else {
        cy.get(twitter).should('be.visible');
      }
    },
    assertYouTubeIconIsPresent () {
      const youtube = selectors[variables.brand].youtube;
      if (variables.brand == 'coastfashion.com' || variables.brand == 'karenmillen.com') {
        cy.get(youtube).parent().invoke('attr', 'style', 'overflow:visible');
        cy.get(youtube).should('be.visible');
      } else {
        cy.get(youtube).should('be.visible');
      }
    },
    assertOnFacebook () {
      const facebookUrl = selectors[variables.brand].facebookUrl;
      cy.url().then(url => {
        expect(url).to.include(facebookUrl);
      });
    },
    assertOnTwitter () {
      cy.url().then(url => {
        expect(url).to.contain('twitter.com/boohoo');
      });
    },
    assertOnTikTok () {
      cy.url().then(url => {
        expect(url).to.contain('tiktok.com/@boohoo');
      });
    },
    assertOnYouTube () {
      cy.url().then(url => {
        expect(url).to.contain('youtube.com/c/boohoo');
      });
    },
    assertOnPintrest () {
      cy.url().then(url => {
        expect(url).to.contain('pinterest.co.uk/boohooofficial');
      });
    },
    assertOnTheFix () {
      cy.url().then(url => {
        expect(url).to.contain('thefix.boohoo.com');
      });
    }
  };
}

export default new SocialsPage();