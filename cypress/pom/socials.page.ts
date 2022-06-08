import AbstractPage from './abstract/abstract.page';

class SocialsPage implements AbstractPage {

  goto () {
    throw new Error('SocialsPage is an abstract class representing multiple social pages.');
  }

  actions = {};

  click = {};

  assertions = {
    assertOnInstagram () {
      cy.url().then(url => {
        expect(url).to.contain('instagram.com/boohoo');
      });
    },
    assertInstagramIconIsPresent (){
      cy.get('a[href="https://www.instagram.com/boohoo/"] > svg > path').should('be.visible');
    },
    assertFacebookIconIsPresent (){
      cy.get('a[href="https://www.facebook.com/boohoo.com"] > svg').should('be.visible');
    },
    assertTheFixIconIsPresent (){
      cy.get('[href="https://thefix.boohoo.com/"] > svg').should('be.visible');
    },
    assertPinterestIconIsPresent (){
      cy.get('[href="https://www.pinterest.co.uk/boohooofficial/_created/"] > svg').should('be.visible');
    },
    assertTikTokIconIsPresent (){
      cy.get('a[href="https://www.tiktok.com/@boohoo?lang=en"] > svg').should('be.visible');
    },
    assertTwitterIconIsPresent (){
      cy.get('a[href="https://twitter.com/boohoo"] > svg > path').should('be.visible');
    },
    assertYouTubeIconIsPresent (){
      cy.get('a[href="https://www.youtube.com/c/boohoo"] > svg > path').should('be.visible');
    },
    assertOnFacebook () {
      cy.url().then(url => {
        expect(url).to.include('facebook.com/boohoo.com');
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