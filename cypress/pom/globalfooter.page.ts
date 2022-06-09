import assertionText from '../helpers/assertionText';
import { CountryCode } from '../support/types';
import AbstractPage from './abstract/abstract.page';

class GlobalFooter implements AbstractPage {

  goto () {
    throw new Error('No goto href for the global footer, try HomePage.goto()');
  }

  click = {
    privacyPolicyLink () {
      cy.contains('Privacy Notice - Updated March 2021').click();
    },
    copyrightPrivacyPolicyLink () {
      cy.get('#footercontent > div.content-asset > div > div > ul > li:nth-child(2) > a').click();
    },
    instagramLink () {
      cy.get('a[href="https://www.instagram.com/boohoo/"]').then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    facebookLink () {
      cy.get('a[href="https://www.facebook.com/boohoo.com"]').then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    twitterLink () {
      cy.get('a[href="https://twitter.com/boohoo"]').then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    tiktokLink () {
      cy.get('a[href="https://www.tiktok.com/@boohoo?lang=en"]').then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    youtubeLink () {
      cy.get('a[href="https://www.youtube.com/c/boohoo"]').then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    pintrestLink () {
      cy.get('a[href="https://www.pinterest.co.uk/boohooofficial/_created/"]').then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    theFixLink () {
      cy.get('a[href="https://thefix.boohoo.com/"]').then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    footerPromo () {
      cy.get('div[class="b-footer_sticky"]').then(element => {
        const href = element.attr('href');
        cy.wrap(element).click();
        cy.url().then(url => {
          expect(url).to.contain(href);
        });
      });
    }
  };

  actions = {
    subscribeToNewsletter (email: string) {
      cy.get('input[id="dwfrm_newslettersubscribe_email"]').type(email);
      cy.get('button[data-id="submitButton"]').click();
    },
    checkFooterLinkByText (text: string, options?: { assertionUrl: string }) {
      cy.log(`searching for '${text}' in footer`);
      cy.scrollTo('bottom');
      cy.get('footer[class="l-page-footer l-footer"]').contains(text)
        .invoke('removeAttr', 'target')
        .then(element => {
          const href = element.attr('href');
          cy.wrap(element).click();
          cy.url().then(url => {
            expect(url).to.contain(options?.assertionUrl ?? href);
          });
        });
      cy.go('back');
    },
    changeCountry (country: CountryCode) {
      cy.wait(2000);
      cy.get('.b-country-select').select(country);
    }
  };

  assertions = {
    assertSuccessfulSubscription () {
      cy.get('div[class="b-newsletters-message_success"]').then(element => {
        expect(element.text().trim().toLowerCase()).to.contain('thanks');
      });
    },
    assertUnsuccessfulSubscription () {
      cy.get('div[id="dwfrm_newslettersubscribe_email-error"]').then(element => {
        expect(element.text().trim().toLowerCase()).to.contain('please');
        expect(element.text().trim().toLowerCase()).to.contain('valid');
        expect(element.text().trim().toLowerCase()).to.contain('email');
      });
    },
    asssertAlreadySubscribed () {
      cy.get('div[id="dwfrm_newslettersubscribe_email-error"]').then(element => {
        expect(element.text().trim().toLowerCase()).to.contain('already signed up');
      });
    },
    assertPaymentOptionsArePresent () {
      cy.get('.m-hide-md').scrollIntoView().should('be.visible');
    },
    assertPromoBannerPresent () {
      cy.get('div[class="b-app_banner"]').should('be.visible');
    },
    assertCurrencyByPageContext (currency: string) {
      cy.get('.js-page-context').invoke('attr', 'data-page-context').then(context => {
        const json = JSON.parse(context);
        expect(json.currencyCode).to.equal(currency);
      });
    },
    assertFooterIsFixedAndPresent () {
      cy.scrollTo('bottom');
      cy.get('.b-promo_info_box-caption > .b-promo_caption-subtitle').should('have.css', 'position', 'fixed');
    },
    assertHeaderIsVisible () {
      cy.get('.l-header-inner').should('be.visible');
    },
    assertHeaderIsNotVisible () {
      cy.get('.l-header-inner').should('not.be.visible');

    }
  };

}

export default new GlobalFooter();