import { isSiteGenesisBrand, isMobileDeviceUsed } from 'cypress/helpers/common';
import { brand, url, locale, language } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import assertionText from 'cypress/helpers/assertionText';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    searchField: '#header-search-input',
    searchFieldMobile: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    searchIconMobile:'.b-search_toggle-icon',
    searchFieldCloseMobile: '.b-search_input-close',
    resetPassword: '',
    wishListIcon: '.b-header_wishlist-icon',
    wishListIconMobile: 'span.b-header_wishlist-icon',
    registrationButton: '.b-registration_benefits > .b-button',
    minicartIcon: '.b-minicart_icon-link',
    promotion: '#promotion_slide-0 > div > div > a',
    loginIcon: '.b-header_login-icon > .i-icon',
    logo: '.b-logo',
    logoMobile: '[aria-label="Boohoo"]',
    hamburgerMenu: '#main-navigation-toggle',
    loginIconMobile: '.m-login',
    registrationButtonMobiles:'[class="b-hamburger_account-action_link m-register"]',
    energySaver: '.b-sustainable_toggle',
    energySlider: 'div.b-sustainable_browsing-desktop > div.b-sustainable_toggle > div > div.b-sustainable_toggle-slide',
    energySaverActivated: '.b-sustainable_toggle-slide.m-active',
    sizeGuideGender: 'div.l-static_page-guide_selectors > :nth-child(1) >.b-form_section-label',
    sizeGuideCategory:'div.l-static_page-guide_selectors > :nth-child(2) >.b-form_section-label',
    sizeGuideFit: 'div.l-static_page-guide_selectors > :nth-child(3) >.b-form_section-label',
    selectGender:'select#sizeGuideGender',
    selectCategory: 'select#sizeGuideCategory',
    selectFit: 'select#sizeGuideFit',
    countryBtn:'.b-country-select.b-select-input.m-country',
    backInStockLink: '#womens > div > ul > li:nth-child(3) > div > div.b-menu_bar-flyout_inner.m-tab_womens > div:nth-child(1) > div > div > div:nth-child(2) > a',
    allShoesLink: 'a[href="https://uk-dwdev.boohoo.com/womens/shoes"]',
    investorRelationsAcceptBtn: 'cc-saveAll-startBtn',
    forgetPasswordLink: 'button[data-tau="login_password_reset"]',
    forgetPasswordPopupWindow: '.b-dialog-window',
    resetPasswordEmailBox: '#dwfrm_profile_resetPassword_email',
    resetPasswordButton: 'button[data-tau="forgot_password_submit"]',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]',
    acceptBtn:'[value="YES, I ACCEPT"]',
    selectBtn:'div#PanelList div > div > div:nth-child(1) > div > div > a',
    chooseAmount: '#ctl22_ddlAmount_0',
    recipientEmail: '#ctl22_tbEmail',
    confirmRecipientEmail: '#ctl22_tbConfirmEmail',
    addToBag: '#ctl22_lnkAddToBasketDetail',
    removeBtn: '#MainContent_RepeaterShoppingCart_btnRemove_0',
    addGiftCardBtn: '.continueShoppingLink'
  },
  'nastygal.com': {
    wishListIcon: '.l-header-inner > .l-header-right span.b-header_wishlist-icon',
    wishListIconMobile: '.l-header-left > .b-header_actions > .m-wishlist > .b-header_wishlist > .b-header_wishlist-icon > .i-icon > [fill="none"]',
    minicartIcon: '.b-minicart_icon-link',
    registrationButton: '.b-registration_benefits > .b-button',
    searchField: '#header-search-input',
    searchFieldMobile: 'input[id="header-search-input"]',
    searchIcon: 'button.b-search_toggle',
    searchIconMobile:'.b-search_toggle-icon',
    searchFieldCloseMobile: '.b-search_dialog-cancel',
    promotion: 'div[class="b-hero_carousel-track"]',
    loginIcon: '.b-header_login-icon > .i-icon',
    logo: '.b-logo',
    logoMobile: '[aria-label="Nasty gal"]',
    hamburgerMenu: '#main-navigation-toggle',
    loginIconMobile: '.m-login',
    registrationButtonMobiles:'[class="b-menu_panel-guest_action m-register"]',
    countryBtn: '#country-switcher-menu',
    dialogPopupNG: '.b-dialog.m-opened',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title'
  },
  'dorothyperkins.com': {
    minicartIcon: '.b-minicart_icon-link',
    loginIcon: '.i-icon.i-icon-user',
    registrationButton: 'a.b-button.m-small.b-registration_benefits-button',
    registrationButtonMobiles:'[class="b-menu_panel-guest_action m-register"]',
    wishListIcon: 'span.b-header_wishlist-icon:eq(1)',
    wishListIconMobile: '.l-header-left > .b-header_actions > .m-wishlist > .b-header_wishlist > .b-header_wishlist-icon > .i-icon > [fill="none"]',
    searchField: '#header-search-input',
    searchFieldMobile:'#header-search-input',
    searchIcon: 'button.b-search_toggle',
    searchIconMobile:'span.b-search_toggle-icon',
    searchFieldCloseMobile: '.b-search_dialog-cancel',
    promotion: '.b-hero_carousel.m-promotions.m-dualstrip>.b-hero_carousel-track:nth-child(2)',
    logo: '#main-menu>a.b-logo',
    logoMobile: '.l-logo-container>a[class="b-logo"]',
    hamburgerMenu: '#main-navigation-toggle',
    loginIconMobile: '.m-login',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  },
  'burton.co.uk': {
    minicartIcon: '.b-minicart_icon-link',
    loginIcon: '.b-header_login-icon',
    registrationButton: '.b-registration_benefits > .b-button',
    registrationButtonMobiles:'[class="b-menu_panel-guest_action m-register"]',
    wishListIcon: '.l-header-right > .b-header_actions > .m-wishlist > .b-header_wishlist > .b-header_wishlist-icon > .i-icon > [fill="none"]',
    wishListIconMobile: '.l-header-left > .b-header_actions > .m-wishlist > .b-header_wishlist > .b-header_wishlist-icon > .i-icon > [fill="none"]',
    searchField: '#header-search-input',
    searchFieldMobile: 'input[id="header-search-input"]',
    searchIcon: 'button.b-search_toggle',
    searchIconMobile:'.l-header-right>.b-header_actions .b-search_toggle',
    searchFieldCloseMobile: '.b-search_dialog-cancel',
    promotion: 'div[class="b-hero_carousel-track"]',
    logo: '.b-logo',
    logoMobile: '.b-logo',
    hamburgerMenu: '#main-navigation-toggle',
    loginIconMobile: '.m-login',
    countryBtn: '#country-switcher-menu',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  },
  'wallis.co.uk': {
    minicartIcon: '.b-minicart_icon-link',
    loginIcon: '.b-header_login-icon > .i-icon',
    registrationButton: '.b-registration_benefits > .b-button',
    registrationButtonMobiles:'[class="b-menu_panel-guest_action m-register"]',
    wishListIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
    wishListIconMobile: '.l-header-left > .b-header_actions > .m-wishlist > .b-header_wishlist > .b-header_wishlist-icon > .i-icon > [fill="none"]',
    searchField: '#header-search-input',
    searchFieldMobile: 'input[id="header-search-input"]',
    searchIcon: 'button.b-search_toggle',
    searchIconMobile:'.b-search_toggle-icon',
    searchFieldCloseMobile: '.b-search_dialog-cancel',
    promotion: 'div[class="b-hero_carousel-track"]',
    logo: '.b-logo',
    logoMobile: '.b-logo',
    hamburgerMenu: '#main-navigation-toggle',
    loginIconMobile: '.m-login',
    countryBtn: '#country-switcher-menu',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  },
  'boohooman.com': {
    minicartIcon: "[class='js-minicart-quantity minicart-quantity-value is-mobile']",
    loginIcon: 'span.user-account',
    registrationButton: '.user-links > a:nth-child(2)',
    registrationButtonMobiles: '.user-link-item[title="Register"]:eq(1)',
    shopInstagramBtn: 'a[href="/instashop"]',
    wishListIcon: '.header-wishlist > .header-wishlist-link',
    wishListIconMobile: '.header-wishlist-link',
    searchField: '.js-header-search-input',
    searchFieldMobile: '.js-header-search-input',
    searchIcon: '.js-search-icon[type="submit"]',
    searchIconMobile:'.icon-search',
    searchFieldCloseMobile: 'span.icon-close ',
    promotion: 'div.product-category-slider',
    logo: '[class="primary-logo"]>a.primary-logo-link',
    logoMobile: '.primary-logo',
    hamburgerMenu: '.menu-toggle',
    loginIconMobile: '#mobile-navigation div div div div div a[href*="login"]',
    countryBtn: 'li.hidden-on-mobile.js-appshell-uncached-countryselector-container > div > div > div > div.current-country > span > i',
    countryList: 'div[class="selector active"]',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]',
    mangamingSlot: '.home-container > div:nth-of-type(1) img',
    mangamingPage: '.boohooman-app-img.content-asset > .col-5.disc',
    shopNowBtn: 'div[class="shop-button"]',
    selectBtn:'div#ctl19_PanelList div:nth-child(1) > div > div > a',
    acceptBtn:'[value="YES, I ACCEPT"]',
    chooseAmount: '#ctl19_ddlAmount_0',
    recipientEmail: '#ctl19_tbEmail',
    confirmRecipientEmail: '#ctl19_tbConfirmEmail',
    addToBag: '#ctl19_lnkAddToBasketDetail',
    removeBtn: '#MainContent_RepeaterShoppingCart_btnRemove_0',
    addGiftCardBtn: '.continueShoppingLink'
  },
  'karenmillen.com': {
    minicartIcon: '.mini-cart-link',
    loginIcon: '.user-account',
    loginIconLinkMobile: '#mobile-navigation > div > div.mobile-menu-header > div.js-appshell-uncached-headercustomerinfo-container > div > div > div > div > a:nth-child(1)',
    registrationButton: 'a[title="Register"]',
    registrationButtonMobiles: '.user-link-item[title="Register"]:eq(1)',
    wishListIcon: '.icon-wishlist-bold',
    wishListIconMobile: '.icon-wishlist-bold',
    searchField: '.js-header-search-input',
    searchFieldMobile: '.js-header-search-input',
    searchIcon: '.js-search-icon',
    searchIconMobile:'[class="icon-search js-icon-search"]',
    searchFieldCloseMobile: '.mobile-menu-header > .icon-close',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
    logoMobile: '.primary-logo-link',
    hamburgerMenu: '.menu-toggle',
    loginIconMobile: '#mobile-navigation div div div div div a[href*="login"]',
    countryBtn: '.current-country-arrow > .flag-icon',
    countryList: '.selector>div>div',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  },
  'coastfashion.com': {
    minicartIcon: '.mini-cart-total>.mini-cart-link',
    loginIcon: 'span.user-account',
    registrationButton: 'a[title="Register"]',
    registrationButtonMobiles: '.user-link-item[title="Register"]:eq(1)',
    wishListIcon: '.header-wishlist >a.header-wishlist-link',
    wishListIconMobile: '.icon-wishlist',
    searchField: 'input.js-header-search-input[type="search"]',
    searchFieldMobile: '.js-header-search-input',
    searchIcon: 'button.js-search-icon',
    searchIconMobile: '.icon-search',
    searchFieldCloseMobile:'.search-close-button ',
    promotion: 'div.product-category-slider',
    logo: 'a.primary-logo-link',
    logoMobile: '.logo-svg',
    hamburgerMenu: '.menu-toggle',
    loginIconMobile: '#mobile-navigation div div div div div a[href*="login"]',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  },
  'warehousefashion.com': {
    minicartIcon: '.mini-cart-link',
    loginIcon: '.user-account',
    registrationButton: 'a[title="Register"]',
    registrationButtonMobiles: '.user-link-item[title="Register"]:eq(1)',
    wishListIcon: '.header-wishlist > .header-wishlist-link',
    wishListIconMobile: '.icon-wishlist',
    searchField: '.js-header-search-input',
    searchFieldMobile: '.js-header-search-input',
    searchIcon: '.js-search-icon',
    searchIconMobile:'[class="icon-search js-icon-search"]',
    searchFieldCloseMobile: '.search-close-button',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
    logoMobile: '.primary-logo-link',
    hamburgerMenu: '.menu-toggle',
    countryBtn: '.current-country-arrow > .flag-icon',
    countryList: '.selector>div>div',
    loginIconMobile: '#mobile-navigation div div div div div a[href*="login"]',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  },
  'oasis-stores.com': {
    minicartIcon: '.mini-cart-link',
    loginIcon: '.user-account',
    registrationButton: 'a[title="Register"]',
    registrationButtonMobiles: '.user-link-item[title="Register"]:eq(1)',
    wishlistIcon: '.wishlist-button',
    wishListIconMobile: '.header-wishlist',
    searchField: '.js-header-search-input',
    searchFieldMobile: '.js-header-search-input',
    wishListIcon: '.icon-wishlist',
    searchIcon: '.js-search-icon',
    searchIconMobile:'.icon-search ',
    searchFieldCloseMobile: '.search-close-button',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
    logoMobile: '.primary-logo-link',
    hamburgerMenu: '.menu-toggle',
    loginIconMobile: '#mobile-navigation div div div div div a[href*="login"]',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  },
  'misspap.com': {
    minicartIcon: '.mini-cart-link',
    loginIcon: '.link-item-login',
    wishListIconMobile: '.icon-wishlist-header',
    registrationButton: 'button.login-page-button[value="Create Account"]',
    registrationButtonMobiles: '.user-links [title="Join"]:eq(1)',
    wishListIcon: '.icon-wishlist-header',
    searchField: 'form > fieldset > input',
    searchFieldMobile: '.js-header-search-input',
    searchIcon: '.icon-search',
    searchIconMobile:'.icon-search',
    searchFieldCloseMobile: '.header-search .icon-close',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
    logoMobile: '.primary-logo-link',
    hamburgerMenu: '.menu-toggle',
    loginIconMobile: '.mobile-mega-menu .link-item-login',
    countryBtn: 'li.hidden-on-mobile.js-appshell-uncached-countryselector-container > div > div > div > div.current-country > span > i',
    countryList: 'div[class="selector active"]',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  },
  'boohoomena.com': {
    minicartIcon: '#js-minicart-quantity',
    loginIcon: ' span.user-account',
    registrationButton: '.js-header-right-box [title="Register"]',
    wishListIcon: '.icon-wishlist',
    wishListIconMobile: '.icon-wishlist',
    searchField: '.js-header-search-input',
    searchFieldMobile: '.js-header-search-input',
    searchIcon: '.js-search-icon',
    searchIconMobile: '.icon-search',
    searchFieldCloseMobile: '.search-close-button',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
    hamburgerMenu: '.menu-toggle',
    loginIconMobile: ':nth-child(1) > .user-link-item',
    countryBtn: '.js-header-right-box > .js-appshell-uncached-countryselector-container > .header-countryselector > .content-asset > .country-selector > .current-country > .current-country-arrow > .flag-icon',
    countryList: '.selector>div>div',
    myAccountTileSlideMenu: ':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label',
    myaccountUserPanelGreetingMsg: '.b-user_greeting-message',
    logInSlideManuTitle: '.b-miniaccount-title',
    promoLinkCurrentSlide: 'div[class="b-hero_carousel-item m-promotion m-current"]'
  }

};
class HomePage implements AbstractPage {

  goto () {
    if (brand == 'nastygal.com') {

      // Cy.intercept(/newsletter/i, []); // Stops nastygal newsletter popup
    }
    if ((brand == 'coastfashion.com' || brand == 'karenmillen.com' || brand == 'oasis-stores.com' || brand == 'warehousefashion.com') && locale == 'EU') {
      cy.setCookie('dw_locale', 'default');

      // It needs to be set again when linking to another page.
    }
    if (brand == 'misspap.com' && locale == 'UK') { // To make Klarna option available for Misspap UK, IE and AU
      cy.setCookie('billingCountryCode','GB');
      cy.setCookie('dw_locale', 'en_GB');
    } else if (brand == 'misspap.com' && locale == 'IE') {
      cy.setCookie('billingCountryCode','IE');
      cy.setCookie('dw_locale','en_IE');
    } else if (brand == 'misspap.com' && locale == 'AU') {
      cy.setCookie('billingCountryCode','AU');
      cy.setCookie('dw_locale','en_AU');
    } else if (brand == 'misspap.com' || locale == 'US') {
      cy.setCookie('billingCountryCode','US');
      cy.setCookie('dw_locale','en_US');
    }

    cy.visit(url);
    if (brand=='boohoomena.com') {
      cy.wait(7000);
      cy.getAllCookies();
    }
   
  }

  click = {

    // We may want to force this click as the hover over element that shows this link cannot be actioned in Cypress.
    logInIcon () {
      const hamburgerMenu = selectors[brand].hamburgerMenu;
      const loginIconMobile = selectors[brand].loginIconMobile;
      const loginIcon = selectors[brand].loginIcon;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(hamburgerMenu).click({force: true});
        cy.get(loginIconMobile).should('be.visible').click({force:true});

      // If Desktop Device is used
      } else {
        cy.get(loginIcon).should('be.visible');
      }
    },

    shopInstagramButton () {
      const shopInstagramBtn = selectors[brand].shopInstagramBtn;
      cy.get(shopInstagramBtn).should('be.visible')
        .invoke('removeAttr', 'target').click();
    },
    Mangamingslot () {
      const mangamingSlot = selectors[brand].mangamingSlot;
      cy.get(mangamingSlot).click();
    },

    shopNowButton () {
      cy.get('.instashop-tile.instashop-tile-one-product.js-insta-shop-tile').eq(0).as('hoverOverTile');
      cy.get('@hoverOverTile').scrollIntoView().trigger('mouseover', { force: true }).then(() => {
        cy.get('[class="shop-button"]').eq(0).invoke('css', 'display', 'inline').as('InstaShopNowButton');
        cy.get('@InstaShopNowButton').click({ force: true });

      });

    },

    forgotPasswordLink () {
      const resetPassword = selectors[brand].resetPassword;
      cy.get(resetPassword).click();
    },
    registrationButton () {
      const registrationButton = selectors[brand].registrationButton;
      const registrationButtonMobiles = selectors[brand].registrationButtonMobiles;

      if (isMobileDeviceUsed ) {
        cy.get(registrationButtonMobiles).click({force:true});
      } else {
        cy.get(registrationButton).click({force:true});
      }
    },

    // Objects for search subsystem tests
    searchIcon (opts = { force: true }) {
      const searchIcon = selectors[brand].searchIcon;
      const searchIconMobile = selectors[brand].searchIconMobile;
      if (isMobileDeviceUsed ) {
        cy.get(searchIconMobile).click({force: opts.force});
      } else {
        cy.get(searchIcon).click({force: opts.force});
      }
    },
    searchField () {
      const searchField = selectors[brand].searchField;
      cy.get(searchField).click({force: true});
    },
    wishListIcon () {
      const wishListIcon = selectors[brand].wishListIcon;
      cy.get(wishListIcon).click({force: true});
    },
    cartIcon () {
      const minicartIcon = selectors[brand].minicartIcon;
      cy.waitUntil(() => {
        return cy.get(minicartIcon, {timeout: 7000}).invoke('show').click({ force: true });
      });
    },

    // MEGA MENU - MAIN NAV

    selectLinkFromMegaMenu (text: string) {
      const hamburgerMenu = selectors[brand].hamburgerMenu;
      if (isMobileDeviceUsed) {
        cy.get(hamburgerMenu).click({force: true});
      }
      cy.contains(text).click({ force: true });
    },

    selectLinkFromMegaMenuSubNav (text: string) {
      cy.contains(text).click({ force: true });
    },

    // MEGA MENU - MAIN NAV DOROTHYPERKINS FOR DOUBLECLICK

    selectLinkFromMegaMenuForDorothy (text: string) {
      cy.contains(text).dblclick({ force: true });
    },

    //  SUB-LINKS FROM MEGA MENU
    backInStockLink (opts = { force: true }) {
      const backInStockLink = selectors[brand].backInStockLink;
      cy.get(backInStockLink).click({ force: opts.force });
    },
    allShoesLink (opts = { force: true }) {
      const allShoesLink = selectors[brand].allShoesLink;
      cy.get(allShoesLink).click({ force: opts.force });
    },
    nastyBlogLink (text: string) {
      cy.contains(text).click({force:true});
    },
    investorRelationsAcceptBtn () {
      const investorRelationsAcceptBtn = selectors[brand].investorRelationsAcceptBtn;
      cy.get(investorRelationsAcceptBtn).click();
    },
    expandHamburgerMenu () {
      const hamburgerMenu = selectors[brand].hamburgerMenu;
      cy.get('body').then($body => {
        if ($body.find(hamburgerMenu).length) {
          cy.get(hamburgerMenu).click({force: true});
        }
      }
      );
    },
    countryDropdown () {
      const countryBtn = selectors[brand].countryBtn;
      const hamburgerMenu = selectors[brand].hamburgerMenu;
      if (isSiteGenesisBrand && isMobileDeviceUsed) {
        cy.get(hamburgerMenu).click(({force: true}));
      } else {
        cy.get(countryBtn).click({force: true});
      }
    },
    recyclingOptions (text: string) {
      cy.contains(text).click({ force : true });
    },
    unidays (text: string) {
      cy.contains(text).click({ force : true });
    },
    selectBtn () {
      const selectBtn = selectors[brand].selectBtn;
      cy.get(selectBtn).click({ force : true });
    },
    acceptBtn () {
      const acceptBtn = selectors[brand].acceptBtn;
      cy.get(acceptBtn).click({ force : true });
    },
    removeGiftCard () {
      const removeBtn = selectors[brand].removeBtn;
      cy.get(removeBtn).click({ force : true });

    }
  };

  actions = {
    findItemUsingSKU (SKU: string) {
      if (brand != 'boohoo.com') {
        const searchIcon = selectors[brand].searchIcon;
        cy.get(searchIcon).click({ force: true });
      }
      const searchField = selectors[brand].searchField;
      const searchIcon = selectors[brand].searchIcon;
      cy.get(searchIcon).click({ force: true });
      cy.get(searchField).type(SKU +'{enter}', {force: true});
    },
    forgotPassword (email: string) {
      const forgetPasswordLink = selectors[brand].forgetPasswordLink;
      const forgetPasswordPopupWindow = selectors[brand].forgetPasswordPopupWindow;
      const resetPasswordEmailBox = selectors[brand].resetPasswordEmailBox;
      const resetPasswordButton = selectors[brand].resetPasswordButton;

      cy.get(forgetPasswordLink).click();
      cy.get(forgetPasswordPopupWindow).should('be.visible');
      cy.get(resetPasswordEmailBox).type(email);
      cy.get(resetPasswordButton, { timeout: 6000 }).click();
    },
    closeNastygalPopup () {
      const dialogPopupNG = selectors[brand].dialogPopupNG;

      cy.get('body').then($body => {
        if ($body.find(dialogPopupNG).length > 0) {
          cy.get(dialogPopupNG).invoke('attr', 'style', 'visibility:hidden!important;');
        }
      });

    },
    closeSearchFieldForMobiles () {

      // If Mobile Device is used
      const searchFieldCloseMobile = selectors[brand].searchFieldCloseMobile;
      if (isMobileDeviceUsed) {
        cy.get(searchFieldCloseMobile).click({force: true});
      }
    },
    toggleEnergySaver () {
      const energySlider = selectors[brand].energySlider;
      const energySaverActivated = selectors[brand].energySaverActivated;
      cy.get(energySlider).click();
      cy.get(energySaverActivated).should('be.visible');

      // Turn it off again
      cy.get(energySlider).click();
    },

    selectDropdown () {
      const selectGender = selectors[brand].selectGender;
      const selectCategory = selectors[brand].selectCategory;
      const selectFit = selectors[brand].selectFit;
      const woman = assertionText.Womens[language];
      const trousers = assertionText.trousers[language];
      const regular = assertionText.regular[language];

      if (!isSiteGenesisBrand) {
        if (isMobileDeviceUsed && brand == 'boohoo.com') {
          cy.get(selectGender).select(woman).should('have.value', 'woman');
          cy.get(selectCategory).select(trousers).should('have.value','trousers');
          cy.get(selectFit).select(regular).should('have.value','regular');

        }

      }
    } ,
    selectCountryFromDropdown () {
      const countryBtn = selectors[brand].countryBtn;
      const countryList = selectors[brand].countryList;

      if (!isSiteGenesisBrand) {
        if (brand == 'boohoo.com'||brand == 'wallis.co.uk' || brand == 'burton.co.uk') {
          cy.get(countryBtn).select('IE €',{ force: true });
        } else if (brand=='nastygal.com') {
          cy.get(countryBtn).select('IRL (€)',{ force: true });
        }

      } else {
        cy.get(countryList).contains('IE €').click({force: true});
      }
    },
    fillGiftCardForm (user: string) {
      const chooseAmount = selectors[brand].chooseAmount;
      const recipientEmail = selectors[brand].recipientEmail;
      const confirmRecipientEmail = selectors[brand].confirmRecipientEmail;
      const addToBag = selectors[brand].addToBag;
      cy.get(chooseAmount).click({force: true});
      cy.wait(2000);
      cy.get(recipientEmail).type(user,{timeout:2000});
      cy.wait(2000);
      cy.get(confirmRecipientEmail).type(user,{timeout:2000});
      cy.get(addToBag).click({force: true});     
    
    },  
  };

  assertions = {
    assertUserPanelTitle (name: string) {
      const loginIcon = selectors[brand].loginIcon;
      const myAccountTileSlideMenu = selectors[brand].myAccountTileSlideMenu;
      const myaccountUserPanelGreetingMsg = selectors[brand].myaccountGreetingMsg;

      cy.get(loginIcon).click();
      cy.get(myAccountTileSlideMenu).click();
      cy.get(myaccountUserPanelGreetingMsg).should('contain.text', name);
    },

    // Insta shop assertions
    assertInstaShopPresent () {
      const shopInstagramBtn = selectors[brand].shopInstagramBtn;
      cy.get(shopInstagramBtn).should('be.visible');
    },
    assertShopNowDisplayed () {
      cy.get('.instashop-tile.instashop-tile-one-product.js-insta-shop-tile').eq(0).as('hoverOverTile');
      cy.get('@hoverOverTile').scrollIntoView().trigger('mouseover', { force: true }).then(() => {
        cy.get('[class="shop-button"]').eq(0).invoke('css', 'display', 'inline').as('InstaShopNowButton');
        cy.get('@InstaShopNowButton').should('contain', 'Shop now');
      });
    },

    assertMangamingPresent () {
      const mangamingSlot = selectors[brand].mangamingSlot;
      cy.get(mangamingSlot).should('be.visible');
    },
    assertMangamingOpen () {
      const mangamingPage = selectors[brand].mangamingPage;
      cy.get(mangamingPage).should('be.visible');

    },

    // Search assertions
    assertSearchIconPresent () {
      const searchIcon = selectors[brand].searchField;
      const searchIconMobile = selectors[brand].searchIconMobile;
      if (isMobileDeviceUsed && brand == 'warehousefashion.com') {
        cy.get(searchIconMobile).invoke('show').should('be.visible');
      } else {
        cy.get(searchIcon).invoke('show').should('be.visible');
      }
    },
    assertSearchFieldPresent () {
      const searchField = selectors[brand].searchField;
      const searchFieldMobile = selectors[brand].searchFieldMobile;
      if (isMobileDeviceUsed) {
        cy.get(searchFieldMobile).invoke('show').should('be.visible');
      } else {
        cy.get(searchField).should('be.visible');
      }
    },
    assertSearchFieldContains (text: string) {
      const searchField = selectors[brand].searchField;
      cy.get(searchField).contains(text);
    },
    assertSearchResultPage (text: string) {
      const helper = text.split('-');
      const finalSku = helper[0].trim().replace('#','');
      cy.url().should('include', finalSku);
    },
    assertAutosearchSuggestionsDispayed () {

      // TODO.
    },
    assertUserIsNotLoggedIn (msg: string) {
      const logInSlideManuTitle = selectors[brand].logInSlideManuTitle;

      cy.get(logInSlideManuTitle).should('contain.text', msg);
    },

    // SizeGuide assertions
    assertSizeGuideGenderPresent (gender: string) {
      const sizeGuideGender = selectors[brand].sizeGuideGender;
      cy.get(sizeGuideGender).should('be.visible').and('have.text', gender);
    },
    assertSizeGuideCategoryPresent (category: string) {
      const sizeGuideCategory = selectors[brand].sizeGuideCategory;
      cy.get(sizeGuideCategory).should('be.visible').and('have.text', category);
    },
    assertSizeGuideFitPresent (fit: string) {
      const sizeGuideFit = selectors[brand].sizeGuideFit;
      cy.get(sizeGuideFit).should('be.visible').and('have.text', fit);
    },

    // Counter (header) assertion
    assertPromotionPresent () {
      const promotion = selectors[brand].promotion;
      cy.get(promotion).invoke('show').then(element => {
        cy.wrap(element).invoke('show').should('be.visible');
      });
    },

    // Links assertions
    assertLinkIsOpeningCorrectPage (text: string) {
      cy.url().should('include', text);
    },

    // Logo
    assertLogoPresent () {
      const logo = selectors[brand].logo;
      const logoMobile = selectors[brand].logoMobile;
      if (isMobileDeviceUsed) {
        cy.get(logoMobile).should('be.visible');
      } else {
        cy.get(logo).should('be.visible').should('have.attr', 'href');
      }
    },

    // Header icons
    assertWishListIconPresent () {

      const wishListIconMobile = selectors[brand].wishListIconMobile;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(wishListIconMobile).invoke('show').should('be.visible');

      // If Desktop Device is used
      } else {
        const wishListIcon = selectors[brand].wishListIcon;
        cy.get(wishListIcon).should('be.visible');
      }

    },
    assertCartIconPresent () {
      const minicartIcon = selectors[brand].minicartIcon;
      cy.get(minicartIcon).should('be.visible');
    },
    assertAccountIconPresent () {
      const loginIcon = selectors[brand].loginIcon;
      const hamburgerMenu = selectors[brand].hamburgerMenu;
      const loginIconMobile = selectors[brand].loginIconMobile;
      const loginIconLinkMobile = selectors[brand].loginIconLinkMobile;

      // If Mobile Device is used
      if (isMobileDeviceUsed) {
        cy.get(hamburgerMenu).click({force: true});
        if (brand == 'karenmillen.com') {
          cy.get(loginIconLinkMobile).should('be.visible');
        } else {
          cy.get(loginIconMobile).invoke('show').click({force: true});
        }

      // If Desktop Device is used
      } else {
        if (isSiteGenesisBrand) {
          cy.get(loginIcon).should('be.visible');
        } else {
          cy.get(loginIcon).invoke('show').should('be.visible');
        }
      }
    },

    assertCountryURL (country: string) {
      cy.url().should('include', country);
    },
    assertPromoLinkHeaderIsVisible () {
      const promoLinkCurrentSlide = selectors[brand].promoLinkCurrentSlide;

      cy.get(promoLinkCurrentSlide).should('be.visible').click();
    },
    assertEnergySaverVisible () {
      const energySaver = selectors[brand].energySaver;
      cy.get(energySaver).should('be.visible');
    },
    assertSelectCountryFromDropdown () {
      cy.url().should('include', '/ie');
    },
    assertInstaURL () {
      cy.url().should('contain','instashop');
    },
    assertRecyclingOptionsPageIsDisplayed () {
      cy.url({ timeout : 30000 }).should('include','recycling');
    },
    assertUnidaysPageIsDisplayed () {
      cy.url({ timeout : 30000 }).should('include','unidays');
    },
    assertGiftCardPageIsDisplayed () {
      cy.url({ timeout : 30000 }).should('include','egift');
    },
    assertGiftCardIsAdded () {
      cy.url({ timeout : 30000 }).should('include','checkout#basket');
    },
    assertGiftCardIsRemoved () {
      const addGiftCardBtn = selectors[brand].addGiftCardBtn;
      cy.get('.continueShoppingLink').should('be.visible');
    },

  };

}

export default new HomePage();

