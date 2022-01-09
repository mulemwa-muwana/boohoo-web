import { GotoOptions } from '../support/types';
import * as CommonActions from '../helpers/common';

/**
 * Page Objects should consist of:
 * @method goto should navigate to the page in context.
 * @object 'click' object containg all singular cypress click methods.
 * @object 'actions' object containing all cypress complex page methods.
 * @object 'assertions' object containing all cypress assertion methods.
 */

class HomePage {

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
            cy.get('[title="Privacy Notice"]').click();
        }
    }

    actions = {
        subscribeToNewsletter(email: string) {
            cy.get('.newsletter-form-field[type="email"]').type(email);
            cy.get('button.newsletter-form-btn').click();
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
        }
    }

}

export default new HomePage();