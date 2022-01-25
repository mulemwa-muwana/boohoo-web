import { CountryCode } from '../support/types';
import AbstractPage from './abstract/abstract.page';

class GlobalFooter implements AbstractPage {

    goto() {
        throw new Error('No goto href for the global footer, try HomePage.goto()')
    }

    click = {
        privacyPolicyLink() {
            cy.get('[title="Privacy Notice"]').click();
        },
        copyrightPrivacyPolicyLink() {
            cy.get('.footer-copyright [title="Privacy notice"]').click();
        },
        instagramLink() {
            cy.get('a[href="https://www.instagram.com/boohoo/"] img').then(element => {
                cy.wrap(element).invoke('width').should('be.gt', 10)
                cy.wrap(element).parent().invoke('removeAttr', 'target').click({ force: true });
            })
        },
        facebookLink() {
            cy.get('a[href="https://www.facebook.com/boohoo.com"] img').then(element => {
                cy.wrap(element).invoke('width').should('be.gt', 10)
                cy.wrap(element).parent().invoke('removeAttr', 'target').click({ force: true });
            })
        },
        twitterLink() {
            cy.get('a[href="https://www.twitter.com/boohoo"] img').then(element => {
                cy.wrap(element).invoke('width').should('be.gt', 10)
                cy.wrap(element).parent().invoke('removeAttr', 'target').click({ force: true });
            })
        },
        tiktokLink() {
            cy.get('a[href="https://www.tiktok.com/@boohoo?lang=en"] img').then(element => {
                cy.wrap(element).invoke('width').should('be.gt', 10)
                cy.wrap(element).parent().invoke('removeAttr', 'target').click({ force: true });
            })
        },
        youtubeLink() {
            cy.get('a[href="https://www.youtube.com/c/boohoo"] img').then(element => {
                cy.wrap(element).invoke('width').should('be.gt', 10)
                cy.wrap(element).parent().invoke('removeAttr', 'target').click({ force: true });
            })
        },
        pintrestLink() {
            cy.get('a[href="https://www.pinterest.co.uk/boohooofficial/_created/"] img').then(element => {
                cy.wrap(element).invoke('width').should('be.gt', 10)
                cy.wrap(element).parent().invoke('removeAttr', 'target').click({ force: true });
            })
        },
        theFixLink() {
            cy.get('a[href="https://thefix.boohoo.com/"] img').then(element => {
                cy.wrap(element).invoke('width').should('be.gt', 10)
                cy.wrap(element).parent().invoke('removeAttr', 'target').click({ force: true });
            })
        },
        footerPromo() {
            cy.get('.footer-promo a').then(element => {
                const href = element.attr('href');
                cy.wrap(element).click();
                cy.url().then(url => {
                    expect(url).to.contain(href);
            })
        })
        }
    }

    actions = {
        subscribeToNewsletter(email: string) {
            cy.get('.newsletter-form-field[type="email"]').type(email);
            cy.get('button.newsletter-form-btn').click();
        },
        checkFooterLinkByText(text: string, options?: { assertionUrl: string } ) {
            cy.log(`searching for '${text}' in footer`);
            cy.scrollTo('bottom');
            cy.get('.footer-navigation-wrapper  > div:nth-child(-n+3) a[href]').contains(text)
                .invoke('removeAttr', 'target')
                .then(element => {
                    const href = element.attr('href');
                    cy.wrap(element).click();
                    cy.url().then(url => {
                        expect(url).to.contain(options?.assertionUrl ?? href);
                })
            })
            cy.go('back');
        },
        changeCountry(country: CountryCode) {
            cy.wait(2000);
            cy.get('.hidden-on-mobile .current-country i').click();
            cy.get('.hidden-on-mobile .country-link').contains(country).click();
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
            cy.get('[alt="Payment Methods"]').scrollIntoView().should('be.visible');
        },
        assertPromoBannerPresent() {
            cy.get('#promo-banner.home-main').should('be.visible');
        },
        assertCurrencyByPageContext(currency: string) {
            cy.get('.js-page-context').invoke('attr', 'data-page-context').then(context => {
                const json = JSON.parse(context);
                expect(json.currencyCode).to.equal(currency);
            })
        },
        assertFooterIsFixedAndPresent() {
            cy.scrollTo('bottom');
            cy.get('.footer-promo').should('have.css', 'position', 'fixed');
        },
        assertHeaderIsVisible() {
            cy.get('.sticky-header').should('be.visible');
        },
        assertHeaderIsNotVisible() {
            cy.get('.sticky-header').should('not.be.visible');
        }
    }

}

export default new GlobalFooter();