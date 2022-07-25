import {EnvironmentVariables, GotoOptions, GroupBrands, SelectorBrandMap } from '../support/types';
import AbstractPage from './abstract/abstract.page';
import * as CommonActions from '../helpers/common';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    resetPassword: '',
    wishListIcon: '.b-header_wishlist-icon',
    registrationButton: '.i-icon i-icon-user',
    headerSearchInputField: '#header-search-input',
    minicartIcon: '.b-minicart_icon-link',
    acceptCookies: '.b-notification_panel-controls > [data-event-click="accept"]'
  },
  'nastygal.com': {
    wishListIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
    minicartIcon: '.b-minicart_icon-link',
    registrationButton: '.i-icon i-icon-user',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    anotherSelector: '#another',
  },
  'dorothyperkins.com': {
    minicartIcon: '.b-minicart_icon-link',
    registrationButton: '.i-icon i-icon-user',
    wishListIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    anotherSelector: '#another',
  },
  'burton.co.uk': {
    minicartIcon: '.b-minicart_icon-link',
    registrationButton: '.i-icon i-icon-user',
    wishListIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    anotherSelector: '#another',
  },
  'wallis.co.uk': {
    minicartIcon: '.b-minicart_icon-link',
    registrationButton: '.i-icon i-icon-user',
    wishListIcon: 'div[class="b-header_actions b-header_actions_sticky"] span[class="b-header_wishlist-icon"]',
    searchField: '#header-search-input',
    searchIcon: 'button.b-search_toggle',
    anotherSelector: '#another',
  },
  'boohooman.com': undefined,
  'karenmillen.com': undefined,
  'coastfashion.com': undefined,
  'warehousefashion.com': undefined,
  'oasis-stores.com': undefined,
  'misspap.com': undefined
};

const variables = Cypress.env() as EnvironmentVariables;

class HomePage implements AbstractPage {

  goto (options: GotoOptions = null) {
       
    cy.visit(variables.url);
       
    if (options?.applyCookies) {
      CommonActions.applyMarketingCookies();
      cy.visit(variables.url);
    }
  }

  click = {

    // We may want to force this click as the hover over element that shows this link cannot be actioned in Cypress.
    logInIcon (opts = { force: false }) {
      const searchIcon = selectors[variables.brand].searchIcon;
      cy.get(searchIcon).click({ force: opts.force });
    },
    forgotPasswordLink (){
      const resetPassword = selectors[variables.brand].resetPassword;
      cy.get(resetPassword).click();
    },
    registrationButton (){
      const registrationButton = selectors[variables.brand].registrationButton;
      cy.get(registrationButton).should('be.visible').click();
    },

    // Objects for search subsystem tests
    searchIcon (opts = { force: false }) {
      const searchField = selectors[variables.brand].searchField;
      cy.get(searchField).click({ force: opts.force });            
    },
    searchField (){
      const headerSearchInputField = selectors[variables.brand].headerSearchInputField;
      cy.get(headerSearchInputField).click({force: true});
    },
    wishListIcon () {
      const wishListIcon = selectors[variables.brand].wishListIcon;
      cy.get(wishListIcon).click({force: true});
    },
    cartIcon (){
      const minicartIcon = selectors[variables.brand].minicartIcon;
      cy.get(minicartIcon).click({force: true});
    },
    
    // MEGA MENU - MAIN NAV

    selectLinkFromMegaMenu (text: string){
      cy.contains(text).click({force: true});
    },

    //  SUB-LINKS FROM MEGA MENU
    backInStockLink (opts = { force: true }){
      cy.get('#womens > div > ul > li:nth-child(3) > div > div.b-menu_bar-flyout_inner.m-tab_womens > div:nth-child(1) > div > div > div:nth-child(2) > a').click({ force: opts.force });
    },
    allShoesLink (opts = { force: true }){
      cy.get('a[href="https://uk-dwdev.boohoo.com/womens/shoes"]').click({ force: opts.force });
    },
    investorRelationsAcceptBtn (){
      cy.get('cc-saveAll-startBtn').click();
    },
    acceptCookies (){
      const acceptCookies = selectors[variables.brand].acceptCookies;      
      cy.get(acceptCookies).click();
    }   
  };

  actions = {       
    findItemUsingSKU (SKU: string){
      cy.get('.b-search_input-close').click().type(SKU+'{enter}');
    },
    forgotPassword (email: string){
      cy.get('button[data-tau="login_password_reset"]').click();
      cy.get('.b-dialog-window').should('be.visible');
      cy.get('#dwfrm_profile_resetPassword_email').type(email);
      cy.get('button[data-tau="forgot_password_submit"]', {timeout: 6000}).click();
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
      cy.get(searchIcon).should('be.visible');
    },
    assertSearchFiledPresent () {
      const searchField = selectors[variables.brand].searchField;
      cy.get(searchField).should('be.visible');
    },
    assertSearchFieldContains (text: string) {
      const searchField = selectors[variables.brand].searchField;
      cy.get(searchField).contains(text);
    },
    assertSearchResultPage (text: string) {
      cy.url().should('include', text);
    },
    assertAutosearchSuggestionsDispayed () {

      // TODO.
    },
    assertUserIsNotLoggedIn (msg: string){
      cy.get('.b-miniaccount-title').should('contain.text', msg);
    },

    // Counter (header) assertion
    counterOnHeaderPresent (){
      cy.get('#promotion_slide-0 > div > div > a').invoke('show').then(element => {
        cy.wrap(element).invoke('show').should('be.visible');
      });
    },

    // Links assertions
    assertMegaMenuLinkIsOpeningCorrectPage (text: string) {
      cy.url().should('include', text);
    },

    // Logo
    assertLogoPresent (){
      cy.get('.b-logo').should('be.visible').should('have.attr', 'href');
    },

    // Header icons
    assertWishListIconPresent (){
      cy.get('.b-header_wishlist-icon > .i-icon').invoke('show').then(element => {
        cy.wrap(element).invoke('show').should('be.visible');
      });
    },
    assertCartIconPresent (){
      cy.get('.b-minicart_icon-link').should('be.visible');
    },
    assertAccountIconPresent (){
      cy.get('.b-header_login-icon').invoke('show').then(element => {
        cy.wrap(element).invoke('show').should('be.visible');
      });
    },

    //  Login Attempts
    assertErrorLoginMessageIsPresent (text: string){
      cy.get('.b-message-copy').should('be.visible').and('contain', text);
    },
    assertForgotPasswordMessageisDisplayed (email: string){
      cy.get('.b-dialog-window').should('be.visible').and('contain', email);
    },
    assertCountryURL (country: string){
      cy.url().should('include', country);
    },
    assertPromoLinkHeaderIsVisible (){
      cy.get('div[class="b-hero_carousel-item m-promotion m-current"]').should('be.visible').click();
    }

  };
    
}

export default new HomePage();

