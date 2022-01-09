import { GotoOptions } from '../support/types';
import * as CommonActions from '../helpers/common';
import AbstractPage from './abstract.page';

/**
 * Page Objects should consist of:
 * @method goto should navigate to the page in context.
 * @object 'click' object containg all singular cypress click methods.
 * @object 'actions' object containing all cypress complex page methods.
 * @object 'assertions' object containing all cypress assertion methods.
 */

class HomePage implements AbstractPage {

    goto(options: GotoOptions = null) {
        cy.visit('/');
        if (options?.applyCookies) {
            CommonActions.applyMarketingCookies();
            cy.visit('/');
        }
    }

    click = {
        privacyPolicyLink() {
            cy.get('[title="Privacy Notice"]').click();
        },
        copyrightPrivacyPolicyLink() {
            cy.get('.footer-copyright [title="Privacy notice"]').click();
        },
        instagramLink() {
            cy.get('a[href="https://www.instagram.com/boohoo/"]').click();
        },
        facebookLink() {
            cy.get('a[href="https://www.facebook.com/boohoo.com"]').click();
        },
        twitterLink() {
            cy.get('a[href="https://www.twitter.com/boohoo"]').click();
        },
        tiktokLink() {
            cy.get('a[href="https://www.tiktok.com/@boohoo?lang=en"]').click();
        },
        youtubeLink() {
            cy.get('a[href="https://www.youtube.com/c/boohoo"]').click();
        },
        pintrestLink() {
            cy.get('a[href="https://www.pinterest.co.uk/boohooofficial/_created/"]').click();
        },
        theFixLink() {
            cy.get('a[href="https://thefix.boohoo.com/"]').click();
        }
    }

    actions = {
        subscribeToNewsletter(email: string) {
            cy.get('.newsletter-form-field[type="email"]').type(email);
            cy.get('button.newsletter-form-btn').click();
        },
        checkAllNavigationLinks() {
            const links = cy.get('.footer-navigation-wrapper > *:nth-child(-n+3) li a');
            links.each((element) => {
                const href = element.attr('href');
                cy.wrap(element).click();
                cy.url().then(url => {
                    cy.log('URL: ' + url);
                    cy.log('HREF: ' + href);
                    expect(url).to.contain(href);
                })
                cy.go('back');
            })
        }
    }

    assertions = {
        assertSuccessfulSubscription() {
            cy.get('.footer-newsletter-info').then(element => {
                expect(element.text().trim().toLowerCase()).to.contain('thanks');
            })
        },
        assertUnsuccessfulSubscription() {
            cy.get('span[id*="footer_newsletter_email"].error').then(element => {
                expect(element.text().trim().toLowerCase()).to.contain('please');
                expect(element.text().trim().toLowerCase()).to.contain('valid');
                expect(element.text().trim().toLowerCase()).to.contain('email');
            })
        },
        asssertAlreadySubscribed() {
            cy.get('span[id*="footer_newsletter_email"].error').then(element => {
                expect(element.text().trim().toLowerCase()).to.contain('already signed up');
            })
        },
        assertPaymentOptionsArePresent() {
            cy.get('[src*="PAYMENT_STRIP_UK_ZIPPAY-NEWLOGO.svg"]').should('be.visible');
        },
        assertPromoBannerPresent() {
            cy.get('#promo-banner.home-main').should('be.visible');
        }
    }

}

export default new HomePage();