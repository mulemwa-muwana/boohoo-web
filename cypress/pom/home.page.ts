import { GotoOptions } from '../support/types';
import AbstractPage from './abstract/abstract.page';
import * as CommonActions from '../helpers/common';

class HomePage implements AbstractPage {

  goto (options: GotoOptions = null) {
       
    cy.visit('https://storefront:Oreo2022@uk-dwdev.boohoo.com/');
       
    if (options?.applyCookies) {
      CommonActions.applyMarketingCookies();
      cy.visit('https://storefront:Oreo2022@uk-dwdev.boohoo.com/');
    }
  }

  click = {

    // We may want to force this click as the hover over element that shows this link cannot be actioned in Cypress.
    logInIcon (opts = { force: false }) {
      cy.get('.b-header_login-icon > .i-icon').click({ force: opts.force });
    },
    forgotPasswordLink (){
      cy.get('button[data-tau="login_password_reset"]').click();
    },
    registrationButton (){
      cy.get('.b-registration_benefits-button').should('be.visible').click();
    },

    // Objects for search subsystem tests
    searchIcon (opts = { force: false }) {
      cy.get('.b-search_input-close').click({ force: opts.force });            
    },
    searchField (){
      cy.get('#header-search-input').click();
    },
    wishListIcon () {
      cy.get('.b-header_wishlist-icon > .i-icon').click();
    },
    cartIcon (){
      cy.get('.b-minicart_icon-link').should('be.visible');
      cy.get('.b-minicart_icon-link').then(element =>{
        cy.wrap(element).invoke('show').click();
      });
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
      cy.get('.b-search_input-close').should('be.visible');
    },
    assertSearchFiledPresent () {
      cy.get('#header-search-input').should('be.visible');
    },
    assertSearchFieldContains (text: string) {
      cy.get('#header-search-input').contains(text);
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
      cy.get('.b-header_wishlist-icon > .i-icon').should('be.visible');
    },
    assertCartIconPresent (){
      cy.get('.b-minicart_icon-link').should('be.visible');
    },
    assertAccountIconPresent (){
      cy.get('.b-header_login-icon > .i-icon').should('be.visible');
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

