import AbstractPage from './abstract/abstract.page';

class SocialsPage implements AbstractPage {

    goto() {
        throw new Error('SocialsPage is an abstract class representing multiple social pages.');
    }

    actions = {}

    click = {}

    assertions = {
        assertOnInstagram() {
            cy.url().then(url => {
                expect(url).to.contain('instagram.com/boohoo')
            })
        },
        assertOnFacebook() {
            cy.url().then(url => {
                expect(url).to.contain('facebook.com/boohoo.com')
            })
        },
        assertOnTwitter() {
            cy.url().then(url => {
                expect(url).to.contain('twitter.com/boohoo')
            })
        },
        assertOnTikTok() {
            cy.url().then(url => {
                expect(url).to.contain('tiktok.com/@boohoo')
            })
        },
        assertOnYouTube() {
            cy.url().then(url => {
                expect(url).to.contain('youtube.com/c/boohoo')
            })
        },
        assertOnPintrest() {
            cy.url().then(url => {
                expect(url).to.contain('pinterest.co.uk/boohooofficial')
            })
        },
        assertOnTheFix() {
            cy.url().then(url => {
                expect(url).to.contain('thefix.boohoo.com')
            })
        }
    }
}

export default new SocialsPage();