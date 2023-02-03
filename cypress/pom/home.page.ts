import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    resetPassword: '',
    wishListIcon: '.b-header_wishlist-icon',
    registrationButton: '.b-registration_benefits > .b-button',
    minicartIcon: '.b-minicart_icon-link',
    promotion: '#promotion_slide-0 > div > div > a',
    loginIcon: '.b-header_login-icon > .i-icon',
    logo: '.b-logo',
  },
  'nastygal.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    wishListIcon: '.l-header-right > .b-header_actions > .m-wishlist > .b-header_wishlist > .b-header_wishlist-icon > .i-icon > [fill="none"]',
    minicartIcon: '.b-minicart_icon-link',
    registrationButton: '.b-registration_benefits > .b-button',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    promotion: 'div[class="b-hero_carousel-track"]',
    loginIcon: '.b-header_login-icon > .i-icon',
    logo: '.b-logo',
  },
  'dorothyperkins.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.b-minicart_icon-link',
    loginIcon: '.i-icon.i-icon-user',
    registrationButton: '#page-body > div.b-miniaccount_panel > div > div > div > div.b-miniaccount-content > div.b-registration_benefits > a',
    wishListIcon: '.l-header-right > .b-header_actions > .m-wishlist > .b-header_wishlist > .b-header_wishlist-icon > .i-icon > [fill="none"]',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    promotion: 'div[class="b-hero_carousel-track"]',
    logo: '.b-logo',
  },
  'burton.co.uk': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.b-minicart_icon-link',
    loginIcon: '.b-header_login-icon',
    registrationButton: '.b-registration_benefits > .b-button',
    wishListIcon: '.l-header-right > .b-header_actions > .m-wishlist > .b-header_wishlist > .b-header_wishlist-icon > .i-icon > [fill="none"]',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    promotion: 'div[class="b-hero_carousel-track"]',
    logo: '.b-logo',
  },
  'wallis.co.uk': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.b-minicart_icon-link',
    loginIcon: '.b-header_login-icon > .i-icon',
    registrationButton: '.b-registration_benefits > .b-button',
    wishListIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    promotion: 'div[class="b-hero_carousel-track"]',
    logo: '.b-logo',
  },
  'boohooman.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '#mini-cart .mini-cart-link',
    loginIcon: '.user-account',
    registrationButton: '.user-links > a:nth-child(2)',
    wishListIcon: '.header-wishlist > .header-wishlist-link',
    searchField: '.js-header-search-input',
    searchIcon: '.js-search-icon',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
  },
  'karenmillen.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.mini-cart-link',
    loginIcon: '.user-account',
    registrationButton: 'a[title="Register"]',
    wishListIcon: '.icon-wishlist-bold',
    searchField: '.js-header-search-input',
    searchIcon: '.js-search-icon',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link'
  },
  'coastfashion.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.mini-cart-link',
    loginIcon: '.user-account',
    registrationButton: 'a[title="Register"]',
    wishListIcon: '.header-wishlist > .header-wishlist-link',
    searchField: '.js-header-search-input',
    searchIcon: '.js-search-icon',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
  },
  'warehousefashion.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.mini-cart-link',
    loginIcon: '.user-account',
    registrationButton: 'a[title="Register"]',
    wishListIcon: '.header-wishlist > .header-wishlist-link',
    searchField: '.js-header-search-input',
    searchIcon: '.js-search-icon',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
  },
  'oasis-stores.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.mini-cart-link',
    loginIcon: '.user-account',
    registrationButton: 'a[title="Register"]',
    wishlistIcon: '.wishlist-button',
    searchField: '.js-header-search-input',
    wishListIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
    searchIcon: '.js-search-icon',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link',
  },
  'misspap.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.mini-cart-link',
    loginIcon: '.link-item-login',
    registrationButton: 'button.login-page-button[value="Create Account"]',
    wishListIcon: '.icon-wishlist-header',
    searchField: 'form > fieldset > input',
    searchIcon: '.icon-search',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link'
  },
  'boohoomena.com': {
    acceptCookies: '#onetrust-accept-btn-handler',
    minicartIcon: '.mini-cart-link',
    loginIcon: ' span.user-account',
    registrationButton: '.js-header-right-box [title="Register"]',
    wishListIcon: '.icon-wishlist',
    searchField: '.js-header-search-input',
    searchIcon: '.js-search-icon',
    promotion: 'div.product-category-slider',
    logo: '.primary-logo-link'
  }
  
};

const variables = Cypress.env() as EnvironmentVariables;
class HomePage implements AbstractPage {

  goto () {
    if (variables.brand == 'nastygal.com') {
      cy.intercept(/newsletter/i, []); // Stops nastygal newsletter popup
    }

    // TODO: When Accept Cookies popup is added for these brands, remove constant and 'if' conditional
    const brandsWithoutPopup: Array<GroupBrands> = ['dorothyperkins.com', 'wallis.co.uk', 'burton.co.uk'];
    if (!brandsWithoutPopup.includes(variables.brand)) {
      cy.session('accept-cookies', () => {
        cy.visit(variables.url);
        this.click.acceptCookies();
      });
    }
    
    cy.visit(variables.url);
  }

  click = {

    // We may want to force this click as the hover over element that shows this link cannot be actioned in Cypress.
    logInIcon () {
      const loginIcon = selectors[variables.brand].loginIcon;
      cy.get(loginIcon).invoke('show').click({ force: true });
    },
    forgotPasswordLink () {
      const resetPassword = selectors[variables.brand].resetPassword;
      cy.get(resetPassword).click();
    },
    registrationButton () {
      const registrationButton = selectors[variables.brand].registrationButton;
      cy.get(registrationButton).click({force:true});
    },

    // Objects for search subsystem tests
    searchIcon (opts = { force: true }) {
      const searchIcon = selectors[variables.brand].searchIcon;
      cy.get(searchIcon).click({force: opts.force});
    },
    searchField () {
      const searchField = selectors[variables.brand].searchField;
      cy.get(searchField).click({force: true});
    },
    wishListIcon () {
      const wishListIcon = selectors[variables.brand].wishListIcon;
      cy.get(wishListIcon).click({force: true});
    },
    cartIcon () {
      const minicartIcon = selectors[variables.brand].minicartIcon;
      cy.get(minicartIcon).click({force: true});
    },

    // MEGA MENU - MAIN NAV

    selectLinkFromMegaMenu (text: string) {
      cy.contains(text).click({ force: true });
    },

    //  SUB-LINKS FROM MEGA MENU
    backInStockLink (opts = { force: true }) {
      cy.get('#womens > div > ul > li:nth-child(3) > div > div.b-menu_bar-flyout_inner.m-tab_womens > div:nth-child(1) > div > div > div:nth-child(2) > a').click({ force: opts.force });
    },
    allShoesLink (opts = { force: true }) {
      cy.get('a[href="https://uk-dwdev.boohoo.com/womens/shoes"]').click({ force: opts.force });
    },
    investorRelationsAcceptBtn () {
      cy.get('cc-saveAll-startBtn').click();
    },
    acceptCookies () {
      const acceptCookies = selectors[variables.brand].acceptCookies;
      cy.get(acceptCookies).click();
    }
  };

  actions = {
    findItemUsingSKU (SKU: string) {
      if (variables.brand != 'boohoo.com') {
        const searchIcon = selectors[variables.brand].searchIcon;
        cy.get(searchIcon).click({ force: true });
      }
      const searchField = selectors[variables.brand].searchField;
      const searchIcon = selectors[variables.brand].searchIcon;
      cy.get(searchIcon).click({ force: true });
      cy.get(searchField).click({ force: true }).type(SKU + '{enter}', {force: true});
    },
    forgotPassword (email: string) {
      cy.get('button[data-tau="login_password_reset"]').click();
      cy.get('.b-dialog-window').should('be.visible');
      cy.get('#dwfrm_profile_resetPassword_email').type(email);
      cy.get('button[data-tau="forgot_password_submit"]', { timeout: 6000 }).click();
    },
    closeNastygalPopup () {

      // Cy.get('.b-dialog.m-opened, .b-dialog.m-active').should('be.visible').click();

      cy.get('body').then($body => {
        if ($body.find('.b-dialog.m-opened').length > 0) {
          cy.get('.b-dialog.m-opened').invoke('attr', 'style', 'visibility:hidden!important;');
        }
      });

    }
  };

  assertions = {
    assertUserPanelTitle (name: string) {
      cy.get('.b-header_login-icon > .i-icon').click();
      cy.get(':nth-child(1) > .b-account_nav-item_link > .b-account_nav-item_label').click();
      cy.get('.b-user_greeting-message').should('contain.text', name);
    },

    // Search assertions
    assertSearchIconPresent () {
      const searchIcon = selectors[variables.brand].searchField;
      cy.get(searchIcon).invoke('show').should('be.visible');
    },
    assertSearchFieldPresent () {
      const searchField = selectors[variables.brand].searchField;
      cy.get(searchField).should('be.visible');
    },
    assertSearchFieldContains (text: string) {
      const searchField = selectors[variables.brand].searchField;
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
      cy.get('.b-miniaccount-title').should('contain.text', msg);
    },

    // Counter (header) assertion
    assertPromotionPresent () {
      const promotion = selectors[variables.brand].promotion;
      cy.get(promotion).invoke('show').then(element => {
        cy.wrap(element).invoke('show').should('be.visible');
      });
    },

    // Links assertions
    assertMegaMenuLinkIsOpeningCorrectPage (text: string) {
      cy.url().should('include', text);
    },

    // Logo
    assertLogoPresent () {
      const logo = selectors[variables.brand].logo;
      cy.get(logo).should('be.visible').should('have.attr', 'href');
    },

    // Header icons
    assertWishListIconPresent () {
      const wishListIcon = selectors[variables.brand].wishListIcon;
      cy.get(wishListIcon).invoke('show').then(element => {
        cy.wrap(element).invoke('show').should('be.visible');
      });
    },
    assertCartIconPresent () {
      const minicartIcon = selectors[variables.brand].minicartIcon;
      cy.get(minicartIcon).should('be.visible');
    },
    assertAccountIconPresent () {
      const loginIcon = selectors[variables.brand].loginIcon;
      cy.get(loginIcon).invoke('show').then(element => {
        cy.wrap(element).invoke('show').should('be.visible');
      });
    },

    assertCountryURL (country: string) {
      cy.url().should('include', country);
    },
    assertPromoLinkHeaderIsVisible () {
      cy.get('div[class="b-hero_carousel-item m-promotion m-current"]').should('be.visible').click();
    }

  };

}

export default new HomePage();

