export class HomePage {

    navigate() {
        cy.visit('/')
    }

    acceptCookiesButton() {
        return cy.get('.b-notification_panel-controls > [data-event-click="accept"]')
    }

    acceptCookies() {
        this.acceptCookiesButton().click()
    }

    logInIcon() {
        return cy.get('.b-header_login-icon > .i-icon')
    }


    email() {
        return cy.get('#dwfrm_login_email')
    }

    password() {
        return cy.get('#dwfrm_login_password')
    }

    logInButton() {
        return cy.get('.b-login_form-actions_group > :nth-child(1) > .b-button')
    }

    login(username, password) {
        this.logInIcon().click()
        this.email().click().type(username)
        this.password().click().type(password)
        this.logInButton().click()
    }

    errorMsg() {
        return cy.get('.b-message-copy')
    }

    validateErrorMessage(errorText) {
        this.errorMsg().should('include.text', errorText)
    }

    suitsSection() {
        return cy.get('.m-mens-suits > .b-menu_bar-link')
    }

    twoSuitsPage() {
        return cy.get('#main-menu > li.b-menu_bar-item.m-mens-suits > div > div.b-menu_bar-flyout_inner > div:nth-child(1) > div > div > div:nth-child(1) > a')
    }

    goTo2SuitsPage() {
        this.suitsSection().click()
        this.twoSuitsPage().click()
    }

    searchIcon() {
        return cy.get('.b-search_toggle-icon > .i-icon')
    }

    searchInput() {
        return cy.get('#header-search-input')
    }

    searchForItem(sku) {
        this.searchIcon().should('be.visible')
        this.searchIcon().click()
        this.searchInput().type(sku)
    }

    goToAccount() {
        cy.url('/account?registration=false')
    }

    loginForm(){
        return cy.get('.b-login_form')
    }
}