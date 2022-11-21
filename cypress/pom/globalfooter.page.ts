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
    footerStickyPromo: '#footer-sticky-promo > a',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: '.l-footer-copy ul li a[href*="terms-and-conditions"]',
    footer: '#footercontent'
  },
  'nastygal.com': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    copyrightPrivacyPolicyLink: '.l-footer-copy ul li a[href*="privacy-notice"]',
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
    copyrightTermAndCondLink: '.l-footer-copy ul li a[href*="terms-and-conditions"]',
    footer: '#footercontent'
  },
  'dorothyperkins.com': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    copyrightPrivacyPolicyLink: '.l-footer-copy ul li a[href*="privacy-policy"]',
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
    copyrightTermAndCondLink: '.l-footer-copy ul li a[href*="terms-and-conditions"]',
    footer: '#footercontent'
  },
  'burton.co.uk': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    copyrightPrivacyPolicyLink: '.l-footer-copy ul li a[href*="privacy-policy"]',
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
    copyrightTermAndCondLink: '.l-footer-copy ul li a[href*="terms-and-conditions"]',
    footer: '#footercontent'
  },
  'wallis.co.uk': {
    privacyPolicyLink: 'div[class="l-footer-copy"] li:nth-child(2) a:nth-child(1)',
    copyrightPrivacyPolicyLink: '.l-footer-copy ul li a[href*="privacy-policy"]',
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
    copyrightTermAndCondLink: '.l-footer-copy ul li a[href*="terms-and-conditions"]',
    footer: '#footercontent'
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': {
    privacyPolicyLink: 'a[title="Privacy Notice"]',
    copyrightPrivacyPolicyLink: '.footer-copyright-wrapper [title="Privacy notice"]',
    instagramLink: 'a[href="https://www.instagram.com/coastfashion/?hl=en"]',
    facebookLink: 'a[href="https://www.facebook.com/coaststores/"]',
    twitterLink: 'a[href="https://twitter.com/CoastFashion"]',
    pintrestLink: 'a[href="https://www.pinterest.co.uk/coastfashion/"]',
    youtubeLink: 'a[href="https://www.youtube.com/user/CoastStores"]',
    newsletterInputMail: 'input[id^="footer_newsletter_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: '.newsletter-form-group button',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.footer-newsletter-info',
    unsuccessfulSubscriptionMsg: '[id^=footer_newsletter_email][class="error"]',
    paymentOptions: '.footer-payment-method',
    appBanner: '.footer-app-links',
    footerStickyPromo: '.header-banner-timer-inner .footer-promo',
    footerPromoLink: '.header-banner-timer-inner .footer-promo .banner-link',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer'
  },
  'warehousefashion.com': {
    privacyPolicyLink: 'a[title="Privacy Notice"]',
    copyrightPrivacyPolicyLink: '.footer-copyright-wrapper [title="Privacy notice"]',
    instagramLink: 'a[href="https://www.instagram.com/warehouseuk/"]',
    facebookLink: 'a[href="https://en-gb.facebook.com/WarehouseFashion/"]',
    twitterLink: 'a[href="https://twitter.com/warehouseuk"]',
    pintrestLink: 'a[href="https://www.pinterest.co.uk/warehouseuk/"]',
    youtubeLink: '',
    newsletterInputMail: 'input[id^="footer_newsletter_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: '.newsletter-form-group button',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.footer-newsletter-info',
    unsuccessfulSubscriptionMsg: '[id^=footer_newsletter_email][class="error"]',
    paymentOptions: '.footer-payment-method',
    appBanner: '.footer-app-links',
    footerStickyPromo: '.footer-promo.js-floating-promo',
    footerPromoLink: '.footer-promo.js-floating-promo .banner-link',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer'
  },
  'oasis-stores.com': {
    privacyPolicyLink: 'a[title="Privacy Notice"]',
    copyrightPrivacyPolicyLink: '.footer-copyright-wrapper [title="Privacy notice"]',
    instagramLink: 'a[href="https://www.instagram.com/oasisfashion/"]', 
    facebookLink: 'a[href="https://en-gb.facebook.com/oasisfashions/"]',
    twitterLink: 'a[href="https://twitter.com/oasisfashion"]',
    pintrestLink: 'a[href="https://www.pinterest.co.uk/oasisfashion/"]',
    youtubeLink: '',
    newsletterInputMail: 'input[id^="footer_newsletter_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: '.newsletter-form-group button',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.footer-newsletter-info',
    unsuccessfulSubscriptionMsg: '[id^=footer_newsletter_email][class="error"]',
    paymentOptions: '.footer-payment-method',
    appBanner: '.footer-app-links',
    footerStickyPromo: '.header-banner-timer-inner .footer-promo',
    footerPromoLink: '.header-banner-timer-inner .footer-promo .banner-link',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer'
  },
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
      cy.get(privacyPolicyLink).click({force:true});
    },
    copyrightPrivacyPolicyLink () {
      const copyrightPrivacyPolicyLink = selectors[variables.brand].copyrightPrivacyPolicyLink;
      cy.get(copyrightPrivacyPolicyLink).scrollIntoView().click({force:true});
    },
    copyrightTermsAndConditionsLink () {
      const copyrightTermAndCondLink = selectors[variables.brand].copyrightTermAndCondLink;
      cy.get(copyrightTermAndCondLink).scrollIntoView().click({force:true});
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
      const youtubeLink = selectors[variables.brand].youtubeLink; //  Only boohoo and coastfashion
      cy.get(youtubeLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200); 
      });
    },
    pintrestLink () {
      const pintrestLink = selectors[variables.brand].pintrestLink; //  Only boohoo and coastfashion
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
      const footerPromoLink = selectors[variables.brand].footerPromoLink;
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
      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'warehousefashion.com') {
        cy.get(newsletterInputMail).type(email, {force:true});
        cy.get(subscribeSubmitBtn).click({force:true});
      } else {
        cy.get(newsletterInputMail).type(email);
        cy.get(agreeToPrivacyCheckbox).check();
        cy.get(subscribeSubmitBtn).click();
      }
    },
    checkFooterLinkByText (text: string, options?: { assertionUrl: string }) { //  Not sure
      // Cy.log(`searching for '${text}' in footer`);
      cy.scrollTo('bottom');
      const footer = selectors[variables.brand].footer;
      cy.get(footer).contains(text, { matchCase: false })
        .invoke('removeAttr', 'target')
        .then(element => {
          const href = element.attr('href');
          cy.wrap(element).click({force: true});
          cy.url().then(url => {
            expect(url).to.contain(options?.assertionUrl ?? href);
          });
        });
    },
    changeCountry (country: CountryCode) {
      const changeCountryDropdown = selectors[variables.brand].changeCountryDropdown;
      cy.wait(2000);
      cy.get(changeCountryDropdown).select(country);
    },
    studentDiscountAcceptCookies () {
      cy.iframe('.student-beans > iframe').find('#onetrust-accept-btn-handler').click({force:true});
    }
  };

  assertions = {
    assertSuccessfulSubscription (text: string) {
      const successfulSubscriptionMsg = selectors[variables.brand].successfulSubscriptionMsg;
      cy.get(successfulSubscriptionMsg).contains(text);
    },
    assertUnsuccessfulSubscription (text: string) {
      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'warehousefashion.com') {
        const unsuccessfulSubscriptionMsg = selectors[variables.brand].unsuccessfulSubscriptionMsg;
        cy.get(unsuccessfulSubscriptionMsg).should('be.visible').invoke('text').should('contain', text);
      } else {
        const unsuccessfulSubscriptionMsg = selectors[variables.brand].unsuccessfulSubscriptionMsg;
        cy.get(unsuccessfulSubscriptionMsg).should('be.visible').and('contain.text', text);
      }
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
    assertFooterIsFixedAndPresent () {
      const footerStickyPromo = selectors[variables.brand].footerStickyPromo;
      cy.scrollTo('bottom');
      cy.get(footerStickyPromo).should('have.css', 'position', 'fixed');
    },
    assertHeaderIsVisible () {
      const headerInner = selectors[variables.brand].headerInner;
      cy.get(headerInner).invoke('show').should('be.visible');
    },
    assertHeaderIsNotVisible () {
      const headerInner = selectors[variables.brand].headerInner;
      cy.get(headerInner).should('not.be.visible');

    }
  };

}

export default new GlobalFooter();