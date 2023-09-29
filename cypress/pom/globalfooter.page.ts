import { isSiteGenesisBrand } from 'cypress/helpers/common';
import AbstractPage from './abstract/abstract.page';
import { isMobileDeviceUsed } from 'cypress/helpers/common';
import { brand, language, locale } from 'cypress/support/e2e';
import assertionText from 'cypress/helpers/assertionText';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    copyrightPrivacyPolicyLink: '#footercontent > div.content-asset > div > div > ul > li:nth-child(2) > a',
    instagramLink: 'a[href="https://www.instagram.com/boohoo/"]',
    facebookLink: 'a[href="https://www.facebook.com/boohoo.com"]',
    twitterLink: 'a[href="https://twitter.com/boohoo"]',
    tiktokLink: 'a[href="https://www.tiktok.com/@boohoo?lang=en"]',
    facebookContactLink: 'a[href="https://m.me/boohoo.com"]',
    emailContactLink: 'button.b-contact-channel',
    youtubeLink: 'a[href="https://www.youtube.com/c/boohoo"]',
    pintrestLink: 'a[href="https://www.pinterest.co.uk/boohooofficial/_created/"]',
    theFixLink: 'a[href="https://thefix.boohoo.com/"]',
    footerPromoLink: '#footer-sticky-promo > a',
    newsletterInputMail: 'input[id="dwfrm_newslettersubscribe_email"]',
    agreeToPrivacyCheckbox: 'input#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: 'button[data-id="submitButton"]',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.b-newsletters-message_success',
    unsuccessfulSubscriptionMsg: '#dwfrm_newslettersubscribe_email-error',
    paymentOptions: '.b-footer_top',
    appBanner: '.b-app_banner-actions',
    footerStickyPromo: '#footer-sticky-promo > a',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: '.l-footer-copy ul li a[href*="terms-and-conditions"]',
    footer: '#footercontent',
    helpLink: '.content-asset .b-footer_quick_links',
  },
  'nastygal.com': {
    copyrightPrivacyPolicyLink: '.l-footer-copy ul li a[href*="privacy-notice"]',
    instagramLink: 'a[href="https://www.instagram.com/nastygal/"]',
    facebookLink: 'a[href="https://www.facebook.com/nastygal"]',
    twitterLink: 'a[href="https://twitter.com/nastygal"]',
    tiktokLink: 'a[href="https://www.tiktok.com/@nastygal?lang=en"]',
    facebookContactLink:'a[href="https://m.me/nastygal"]',
    messageContactLink: 'a[href="https://wa.me/443333110804"]',
    emailContactLink: '.m-email-channel',
    newsletterInputMail: 'input[id="dwfrm_newslettersubscribe_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: '.b-newsletters-submit',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.b-newsletters-message_success',
    unsuccessfulSubscriptionMsg: '#dwfrm_newslettersubscribe_email-error',
    paymentOptions: '.b-footer_top',
    appBanner: '.b-app_banner-actions',
    headerInner: '.b-header_utility-inner',
    copyrightTermAndCondLink: '.l-footer-copy ul li a[href*="terms-and-conditions"]',
    footer: '#footercontent',
    helpLink: '.content-asset .b-footer_nav-column:nth-child(1)'
  },
  'dorothyperkins.com': {
    copyrightPrivacyPolicyLink: '.l-footer-copy ul li a[href*="privacy-policy"]',
    instagramLink: 'a[href="https://www.instagram.com/dorothyperkins/"]',
    facebookLink: 'a[href="https://www.facebook.com/dorothyperkins"]',
    twitterLink: 'a[href="https://twitter.com/Dorothy_Perkins"]',
    facebookContactLink: 'a[href="https://m.me/dorothyperkins"]',
    emailContactLink: '.m-email-channel',
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
    footer: '#footercontent',
    helpLink: '.content-asset .b-footer_quick_links',
  },
  'burton.co.uk': {
    copyrightPrivacyPolicyLink: '.l-footer-copy ul li a[href*="privacy-policy"]',
    instagramLink: 'a[href="https://www.instagram.com/burton_menswear/"]',
    facebookLink: 'a[href="https://www.facebook.com/BurtonMenswear/"]',
    twitterLink: '[data-tau="social_twitter"]',
    facebookContactLink: 'a[href="https://m.me/burtonmenswear"]',
    emailContactLink: '.m-email-channel',
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
    footer: '#footercontent',
    helpLink: '.content-asset .b-footer_quick_links',
    headerInnerBurton: '.l-header-inner'
  },
  'wallis.co.uk': {
    copyrightPrivacyPolicyLink: '.l-footer-copy ul li a[href*="privacy-policy"]',
    instagramLink: 'a[href="https://www.instagram.com/wallisfashion/"]',
    facebookLink: 'a[href="https://www.facebook.com/Wallis/"]',
    twitterLink: 'a[href="https://twitter.com/wallisfashion?lang=en"]',
    facebookContactLink: 'a[href="https://m.me/wallis"]',
    emailContactLink: '.m-email-channel',
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
    footer: '#footercontent',
    helpLink: '.content-asset .b-footer_quick_links',
  },
  'boohooman.com': {
    copyrightPrivacyPolicyLink: '.footer-copyright-wrapper a:eq(1)',
    instagramLink: 'a[href="https://www.instagram.com/boohoomanofficial"]',
    facebookLink: 'a[href="https://www.facebook.com/BoohooMAN"]',
    twitterLink: 'a[href="https://twitter.com/boohooMAN"]',
    pintrestLink: 'a[href="https://www.pinterest.co.uk/coastfashion/"]',
    youtubeLink: 'a[href="https://www.youtube.com/boohooMAN"]',
    tiktokLink: 'a[href="https://www.tiktok.com/@boohooman?lang=en"]',
    newsletterInputMail: 'input[id^="footer_newsletter_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: '.newsletter-form-group button',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.footer-newsletter-info',
    unsuccessfulSubscriptionMsg: '[id^=footer_newsletter_email][class="error"]',
    paymentOptions: '.footer-payment-method',
    appBanner: '.footer-app-block',
    footerStickyPromo: '.header-banner-timer-inner .footer-promo',
    footerPromoLink: '.header-banner-timer-inner .footer-promo .banner-link',
    headerInner: '.sticky-header',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer',
    helpLink: 'a[title="Customer Service"] , [title="Service client"]',
    helpLinkDE: 'a[title="Kundenservice"]'
  },
  'karenmillen.com': {
    copyrightPrivacyPolicyLink: '.footer-copyright-wrapper [title="Privacy notice"]',
    instagramLink: 'a[href="https://www.instagram.com/karen_millen/"]',
    facebookLink: 'a[href="https://www.facebook.com/karenmillen"]',
    twitterLink: 'a[href="https://twitter.com/karenmillen"]',
    pintrestLink: 'a[href="https://www.pinterest.co.uk/karenmillen/"]',
    youtubeLink: 'a[href="https://www.youtube.com/user/KarenMillen10"]',
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
    headerInner: '.sticky-header',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer',
    helpLink: 'a[title="Customer Service"]',
    getTheAppCTA: 'h5#ui-id-7'
  },
  'coastfashion.com': {
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
    headerInner: '.sticky-header',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer',
    helpLink: 'a[title="Customer Service"]'
  },
  'warehousefashion.com': {
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
    headerInner: '.sticky-header',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer',
    helpLink: 'a[title="Customer Service"]',
    studentBeansCookiePopup: '.student-beans > iframe',
    studentbeansCookieAcceptCTA: '#onetrust-accept-btn-handler'
  },
  'oasis-stores.com': {
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
    headerInner: '.sticky-header',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer',
    helpLink: 'a[title="Customer Service"]'
  },
  'misspap.com': {
    privacyPolicyLinkUS: ':nth-child(10) > a[title="Privacy Notice"]',
    copyrightPrivacyPolicyLink: '.footer-copyright [title="Privacy policy"]',
    instagramLink: 'a[href="https://www.instagram.com/misspap/"]',
    facebookLink: 'a[href="https://www.facebook.com/MissPapOfficial"]',
    twitterLink: 'a[href="https://twitter.com/misspap"]',
    pintrestLink: 'a[href="https://www.pinterest.co.uk/oasisfashion/"]',
    tiktokLink:'a[href="https://www.tiktok.com/@misspap"]',
    youtubeLink: 'a[href="https://www.youtube.com/channel/UC-fFPC-ggIM_EcHsfoDMbjg"]',
    newsletterInputMail: 'input[id^="footer_newsletter_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: '.newsletter-form-group button',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.footer-newsletter-info',
    unsuccessfulSubscriptionMsg: '[id^=footer_newsletter_email][class="error"]',
    paymentOptions: '.footer-payment-method',
    appBanner: '.horizontal-menu-app-links',
    footerStickyPromo: '.header-banner-timer-inner .footer-promo',
    footerPromoLink: '.header-banner-timer-inner .footer-promo .banner-link',
    headerInner: '.sticky-header',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer',
    helpLink: 'a[title="Help"]',
  },
  'boohoomena.com': {
    copyrightPrivacyPolicyLink: '.footer-copyright-wrapper [title="Privacy notice"]',
    instagramLink: '[title="Instagram"]',
    facebookLink: '[title="Facebook"]',
    twitterLink: '[title="Twitter"]',
    pintrestLink: '[title="Pinterest"]',
    youtubeLink: '[title="YouTube"]',
    snapchatLink: 'a[href="https://www.snapchat.com/add/boohooofficial"]',
    newsletterInputMail: 'input[id^="footer_newsletter_email"]',
    agreeToPrivacyCheckbox: '#dwfrm_newslettersubscribe_agreeToPrivacy',
    subscribeSubmitBtn: '.newsletter-form-group button',
    changeCountryDropdown: '.b-country-select',
    successfulSubscriptionMsg: '.footer-newsletter-info',
    unsuccessfulSubscriptionMsg: '[id^=footer_newsletter_email][class="error"]',
    paymentOptions: '.footer-payment-method',
    appBanner: '.footer-app-links',
    footerStickyPromo: '.footer-promo',
    footerPromoLink: '.banner-link',
    headerInner: '.sticky-header',
    copyrightTermAndCondLink: '.footer-copyright-wrapper a[href*="terms-of-use"]',
    footer: '.footer',
    helpLink: 'a[title="Customer Service"]',
    getTheAppCTA: 'h5#ui-id-7'
  }
};

const variables = Cypress.env() as EnvironmentVariables;
class GlobalFooter implements AbstractPage {

  goto () {
    throw new Error('No goto href for the global footer, try HomePage.goto()');
  }

  click = {
    copyrightPrivacyPolicyLink () {
      const copyrightPrivacyPolicyLink = selectors[brand].copyrightPrivacyPolicyLink;
      cy.get(copyrightPrivacyPolicyLink).scrollIntoView().click({force:true});
    },
    copyrightTermsAndConditionsLink () {
      const copyrightTermAndCondLink = selectors[brand].copyrightTermAndCondLink;
      cy.get(copyrightTermAndCondLink).scrollIntoView().click({force:true});
    },
    instagramLink () {
      const instagramLink = selectors[brand].instagramLink;
      cy.get(instagramLink).then(link => {
        cy
          .request({
            method:'HEAD',
            url: link.prop('href'),
            log:false
          })
          .its('status')
          .should('eq', 200);
      });
    },
    facebookLink () {
      const facebookLink = selectors[brand].facebookLink;
      cy.get(facebookLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200);
      });
    },
    twitterLink () {
      const twitterLink = selectors[brand].twitterLink;
      cy.get(twitterLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200);
      });
    },
    tiktokLink () {
      const tiktokLink = selectors[brand].tiktokLink; //  Only boohoo
      cy.get(tiktokLink).then(link => {
        cy
          .request(link.prop('href')) // Get the href attribute value
          .its('status')
          .should('eq', 200);
      });
    },
    youtubeLink () {
      const youtubeLink = selectors[brand].youtubeLink; //  Only boohoo and coastfashion
      cy.get(youtubeLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200);
      });
    },
    pintrestLink () {
      const pintrestLink = selectors[brand].pintrestLink; //  Only boohoo and coastfashion
      cy.get(pintrestLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200);
      });
    },
    theFixLink () {
      const theFixLink = selectors[brand].theFixLink; //  Only boohoo
      cy.get(theFixLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200);
      });
    },
    snapchatLink () {
      const snapchatLink = selectors[brand].snapchatLink; // Only boohoomena
      cy.get(snapchatLink).then(link => {
        cy
          .request(link.prop('href'))
          .its('status')
          .should('eq', 200);
      });
    },
    footerPromo () {
      const footerPromoLink = selectors[brand].footerPromoLink;
      cy.get(footerPromoLink).then(element => {
        const href = element.attr('href');
        cy.wrap(element).click();
        cy.url().then(url => {
          expect(url).to.contain(href);
        });
      });
    },

    helpLink () {
      const helpLink = selectors[brand].helpLink;
      const helpLinkDE = selectors[brand].helpLinkDE;

      if (brand == 'boohooman.com'&& locale == 'UK') {
        cy.get(helpLink).contains(assertionText.footerCustomerServiceBHM[language]).click({force:true});
      } else if ( brand == 'boohooman.com' && locale == 'DE') {
        cy.get(helpLinkDE).contains(assertionText.footerCustomerServiceBHM[language]).click({force:true});
      } else {
        cy.get(helpLink).contains(assertionText.footerHelp[language]).click({force:true});
      }

    },
  };

  actions = {
    subscribeToNewsletter (email: string) {
      const newsletterInputMail = selectors[brand].newsletterInputMail;
      const agreeToPrivacyCheckbox = selectors[brand].agreeToPrivacyCheckbox;
      const subscribeSubmitBtn = selectors[brand].subscribeSubmitBtn;
      if (isSiteGenesisBrand) {
        cy.get(newsletterInputMail).type(email, {force:true});
        cy.get(subscribeSubmitBtn).click({force:true});
      } else {
        cy.get(newsletterInputMail).type(email, {force:true});
        cy.get(agreeToPrivacyCheckbox).invoke('css','visibility', 'visible').as('agreeToPrivacyCheckboxVisible');
        cy.get('@agreeToPrivacyCheckboxVisible').check();
        cy.get(subscribeSubmitBtn).invoke('show').click({force:true});
      }
    },
    checkFooterLinkByText (text: string, options?: { assertionUrl: string }) { //  Not sure
      // Cy.log(searching for '${text}' in footer);
      cy.scrollTo('bottom');
      const footer = selectors[brand].footer;
      cy.get(footer).contains('a', text, { matchCase: false }) // Add Tag a contains Text Help to make it work for SG Brands
        .invoke('removeAttr', 'target')
        .then(element => {
          if (locale == 'UK' && (text.match('Sustainability'))||text.match('Modern Slavery Statement')) {
            cy.origin('https://www.boohooplc.com', () => {
              cy.on('uncaught:exception', (e) => {
                let href = element.attr('href');
                href = href.trim();
                cy.wrap(element).click({ force: true });
                cy.url().then(url => {
                  expect(url).to.contain(options?.assertionUrl ?? href);
                });
                if (e.message.includes('Things went bad')) {

                  // We expected this error, so let's ignore it
                  // And let the test continue
                  return false;
                }
              });
            });
          } else {
            let href = element.attr('href');
            href = href.trim();
            cy.wrap(element).click({ force: true });
            cy.url().then(url => {
              expect(url).to.contain(options?.assertionUrl ?? href);
            });

          }
        });
    },
    changeCountry (country: CountryCode) {
      const changeCountryDropdown = selectors[brand].changeCountryDropdown;
      cy.wait(2000);
      cy.get(changeCountryDropdown).select(country);
    },
    studentDiscountAcceptCookiesOnPopup () {
      const studentBeansCookiePopup = selectors[brand].studentBeansCookiePopup;
      const studentbeansCookieAcceptCTA = selectors[brand].studentbeansCookieAcceptCTA;
      cy.iframe(studentBeansCookiePopup).find(studentbeansCookieAcceptCTA).click({force:true});
    },
    checkHelpforSiteG (text: string) {
      const helpLink = selectors[brand].helpLink;
      const helpLinkDE = selectors[brand].helpLinkDE;
      if (brand == 'boohooman.com' && locale =='DE') {
        cy.get(helpLinkDE).click({force: true});
      } else {
        cy.get(helpLink).click({force: true});
      }
      cy.url().should('include', text);
    },
  };

  assertions = {
    assertSuccessfulSubscription (text: string) {
      const successfulSubscriptionMsg = selectors[brand].successfulSubscriptionMsg;
      cy.get(successfulSubscriptionMsg).contains(text);
    },
    assertUnsuccessfulSubscription (text: string) {
      if (isSiteGenesisBrand) {
        const unsuccessfulSubscriptionMsg = selectors[brand].unsuccessfulSubscriptionMsg;
        cy.get(unsuccessfulSubscriptionMsg).should('be.visible').invoke('text').should('contain', text);
      } else {
        const unsuccessfulSubscriptionMsg = selectors[brand].unsuccessfulSubscriptionMsg;
        cy.get(unsuccessfulSubscriptionMsg).should('be.visible').and('contain.text', text);
      }
    },
    asssertAlreadySubscribed (text: string) {
      const unsuccessfulSubscriptionMsg = selectors[brand].unsuccessfulSubscriptionMsg;
      cy.get(unsuccessfulSubscriptionMsg).should('contain.text', text);
    },
    assertPaymentOptionsArePresent () {
      const paymentOptions = selectors[brand].paymentOptions;
      cy.get(paymentOptions).scrollIntoView().should('be.visible'); //  Only Wallis doesnt have
    },
    assertAppBannerPresent () {
      const appBanner = selectors[brand].appBanner;
      const getTheAppCTA = selectors[brand].getTheAppCTA;
      if (isMobileDeviceUsed && (brand == 'karenmillen.com' || brand == 'boohoomena.com')) {
        cy.get(getTheAppCTA).click();
      }
      cy.get(appBanner).scrollIntoView().should('be.visible');
    },
    assertFooterIsFixedAndPresent () {
      const footerStickyPromo = selectors[brand].footerStickyPromo;
      cy.scrollTo('bottom');
      cy.get(footerStickyPromo).should('have.css', 'position', 'fixed');
    },
    assertHeaderIsVisible () {
      const headerInner = selectors[brand].headerInner;
      const headerInnerBurton = selectors[brand].headerInnerBurton;

      if (brand == 'burton.co.uk' && locale != 'UK') {
        cy.get(headerInnerBurton).invoke('show').should('be.visible');
      } else {
        cy.get(headerInner).invoke('show').should('be.visible');
      }
    },
    assertHeaderIsNotVisible () {
      const headerInner = selectors[brand].headerInner;
      cy.get(headerInner).should('not.be.visible');
    },
    assertReferFriendPagePresent (text: string) {
      cy.url().should('include', text);
    }
  };

}

export default new GlobalFooter();