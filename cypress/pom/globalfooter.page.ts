import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    copyrightPrivacyPolicyLink: '#footercontent > div.content-asset > div > div > ul > li:nth-child(2) > a',
    instagramLink: 'a[href="https://www.instagram.com/boohoo/"]',
    facebookLink: 'a[href="https://www.facebook.com/boohoo.com"]',
    twitterLink: 'a[href="https://twitter.com/boohoo"]',
    tiktokLink: 'a[href="https://www.tiktok.com/@boohoo?lang=en"]',
    youtubeLink: 'a[href="https://www.youtube.com/c/boohoo"]',
    pintrestLink: 'a[href="https://www.pinterest.co.uk/boohooofficial/_created/"]',
    theFixLink: 'a[href="https://thefix.boohoo.com/"]',
    footerPromoLink: '#footer-sticky-promo > a',
    newsletterInputMail: 'input[id="dwfrm_newslettersubscribe_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: 'button[data-id="submitButton"]',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.b-newsletters-message_success',
    unsuccessfulSubscriptionMsg: '#dwfrm_newslettersubscribe_email-error',
    paymentOptions: '.b-footer_top',
    appBanner: '.b-app_banner-actions',
    footerStickyPromo: '#footer-sticky-promo',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: 'b div[class="l-footer-copy"] li:nth-child(1) a:nth-child(1)',
  },
  'nastygal.com': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    instagramLink: 'a[href="https://www.instagram.com/nastygal/"]',
    facebookLink: 'a[href="https://www.facebook.com/nastygal"]',
    twitterLink: 'a[href="https://twitter.com/nastygal"]',
    tiktokLink: 'a[href="https://www.tiktok.com/@nastygal?lang=en"]',
    newsletterInputMail: 'input[id="dwfrm_newslettersubscribe_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: 'button[data-id="submitButton"]',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.b-newsletters-message_success',
    unsuccessfulSubscriptionMsg: '#dwfrm_newslettersubscribe_email-error',
    paymentOptions: '.b-footer_top',
    appBanner: '.b-app_banner-actions',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: 'b div[class="l-footer-copy"] li:nth-child(1) a:nth-child(1)',
  },
  'dorothyperkins.com': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    instagramLink: 'a[href="https://www.instagram.com/dorothyperkins/"]',
    facebookLink: 'a[href="https://www.facebook.com/dorothyperkins"]',
    twitterLink: 'a[href="https://twitter.com/Dorothy_Perkins"]',
    newsletterInputMail: 'input[id="dwfrm_newslettersubscribe_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: 'button[data-id="submitButton"]',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.b-newsletters-message_success',
    unsuccessfulSubscriptionMsg: '#dwfrm_newslettersubscribe_email-error',
    paymentOptions: '.b-footer_top',
    appBanner: '.l-footer-app_list',
    footerStickyPromo: '#footer-sticky-promo',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: 'b div[class="l-footer-copy"] li:nth-child(1) a:nth-child(1)',
  },
  'burton.co.uk': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    instagramLink: 'a[href="https://www.instagram.com/burton_menswear/"]',
    facebookLink: 'a[href="https://www.facebook.com/BurtonMenswear/"]',
    twitterLink: 'a[href="https://twitter.com/messages/1326555588-978546536232685568"]',
    newsletterInputMail: 'input[id="dwfrm_newslettersubscribe_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: 'button[data-id="submitButton"]',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.b-newsletters-message_success',
    unsuccessfulSubscriptionMsg: '#dwfrm_newslettersubscribe_email-error',
    paymentOptions: '.b-footer_top',
    appBanner: '.l-footer-app_list',
    footerStickyPromo: '#footer-sticky-promo',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: 'b div[class="l-footer-copy"] li:nth-child(1) a:nth-child(1)',
  },
  'wallis.co.uk': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    instagramLink: 'a[href="https://www.instagram.com/wallisfashion/"]',
    facebookLink: 'a[href="https://www.facebook.com/Wallis/"]',
    twitterLink: 'a[href="https://twitter.com/wallisfashion?lang=en"]',
    newsletterInputMail: 'input[id="dwfrm_newslettersubscribe_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: 'button[data-id="submitButton"]',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.b-newsletters-message_success',
    unsuccessfulSubscriptionMsg: '#dwfrm_newslettersubscribe_email-error',
    paymentOptions: '.b-footer_top',
    appBanner: '.l-footer-app_list',
    footerStickyPromo: '#footer-sticky-promo',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: 'b div[class="l-footer-copy"] li:nth-child(1) a:nth-child(1)',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;
class GlobalFooter implements AbstractPage {

  goto () {
    throw new Error('No goto href for the global footer, try HomePage.goto()');
  }

  click = {
    privacyPolicyLink () {
      const privacyPolicyLink = selectors[variables.brand].privacyPolicyLink;
      cy.get(privacyPolicyLink).click();
    },
    copyrightPrivacyPolicyLink () {
      const copyrightPrivacyPolicyLink = selectors[variables.brand].copyrightPrivacyPolicyLink;
      cy.get(copyrightPrivacyPolicyLink).click();
    },
    instagramLink () {
      const instagramLink = selectors[variables.brand].instagramLink;
      cy.get(instagramLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    facebookLink () {
      const facebookLink = selectors[variables.brand].facebookLink;
      cy.get(facebookLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    twitterLink () {
      const twitterLink = selectors[variables.brand].twitterLink;
      cy.get(twitterLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    tiktokLink () {
      const tiktokLink = selectors[variables.brand].tiktokLink; //  Only boohoo
      cy.get(tiktokLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    youtubeLink () {
      const youtubeLink = selectors[variables.brand].youtubeLink; //  Only boohoo
      cy.get(youtubeLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    pintrestLink () {
      const pintrestLink = selectors[variables.brand].pintrestLink; //  Only boohoo
      cy.get(pintrestLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    theFixLink () {
      const theFixLink = selectors[variables.brand].theFixLink; //  Only boohoo
      cy.get(theFixLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    footerPromo () {
      const footerPromoLink = selectors[variables.brand].footerPromoLink; //  Only boohoo
      cy.get(footerPromoLink).then(element => {
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
      const newsletterInputMail = selectors[variables.brand].newsletterInputMail;
      const agreeToPrivacyCheckbox = selectors[variables.brand].agreeToPrivacyCheckbox;
      const subscribeSubmitBtn = selectors[variables.brand].subscribeSubmitBtn;
      cy.get(newsletterInputMail).type(email);
      cy.get(agreeToPrivacyCheckbox).check();
      cy.get(subscribeSubmitBtn).click();
    },
    checkFooterLinkByText (text: string, options?: { assertionUrl: string }) { //  Not sure
      cy.log(`searching for '${text}' in footer`);
      cy.scrollTo('bottom');
      cy.get('footer[class="l-page-footer l-footer"]').contains(text)
        .invoke('removeAttr', 'target')
        .then(element => {
          const href = element.attr('href');
          cy.wrap(element).click({force: true});
          cy.url().then(url => {
            expect(url).to.contain(options?.assertionUrl ?? href);
          });
        });
      cy.go('back');
    },
    changeCountry (country: CountryCode) {
      const changeCountryDropdown = selectors[variables.brand].changeCountryDropdown;
      cy.wait(2000);
      cy.get(changeCountryDropdown).select(country);
    }
  };

  assertions = {
    assertSuccessfulSubscription (text: string) {
      const successfulSubscriptionMsg = selectors[variables.brand].successfulSubscriptionMsg;
      cy.get(successfulSubscriptionMsg).contains(text);
    },
    assertUnsuccessfulSubscription (text: string) {
      const unsuccessfulSubscriptionMsg = selectors[variables.brand].unsuccessfulSubscriptionMsg;
      cy.get(unsuccessfulSubscriptionMsg).should('be.visible').and('contain.text', text);
    },
    asssertAlreadySubscribed (text: string) {
      const unsuccessfulSubscriptionMsg = selectors[variables.brand].unsuccessfulSubscriptionMsg;
      cy.get(unsuccessfulSubscriptionMsg).should('contain.text', text);
    },
    assertPaymentOptionsArePresent () {
      const paymentOptions = selectors[variables.brand].paymentOptions;
      cy.get(paymentOptions).scrollIntoView().should('be.visible'); //  Only Wallis doesnt have
    },
    assertAppBannerPresent () {
      const appBanner = selectors[variables.brand].appBanner;
      cy.get(appBanner).scrollIntoView().should('be.visible'); //  It was div[class="b-app_banner"], only visible on BH and NG
    },
    assertCurrencyByPageContext (currency: string) { //  N/A
      cy.get('.js-page-context').invoke('attr', 'data-page-context').then(context => {
        const json = JSON.parse(context);
        expect(json.currencyCode).to.equal(currency);
      });
    },

    /* AssertFooterIsFixedAndPresent () {
      const footerStickyPromo = selectors[variables.brand].footerStickyPromo;
      cy.scrollTo('bottom');
      cy.get(footerStickyPromo).should('have.css', 'position', 'fixed');  //  Onlu NG doesnt have. Should be checked
    },*/ // This is removed because its config
    assertHeaderIsVisible () {
      const headerInner = selectors[variables.brand].headerInner;
      cy.get(headerInner).should('be.visible');
    },
    assertHeaderIsNotVisible () {
      const headerInner = selectors[variables.brand].headerInner;
      cy.get(headerInner).should('not.be.visible');

    }
  };

}

export default new GlobalFooter();