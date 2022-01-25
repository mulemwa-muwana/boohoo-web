import { AccountPage } from "../../page-objects/accountPage";
import { HomePage } from "../../page-objects/homePage";
import { validatePageTitle, validateUrl, validatePageContent, validateContentPresence } from "../../page-objects/commonFunctions"

describe('Login functionality', () => {

    const homePage = new HomePage()
    const accountPage = new AccountPage()

    const validUsername = Cypress.env('validUsername')
    const validPassword = Cypress.env('validPassword')
    const invalidPassword = Cypress.env('invalidPassword')
    const wrongEmail = Cypress.env('wrongEmail')

    beforeEach(() => {
        homePage.navigate()
        homePage.acceptCookies()
    })

    it('User should login with valid credentials', () => {
        homePage.login(validUsername, validPassword)
        validateUrl('account?registration=false')
        validatePageTitle('My Account')
        validatePageContent(accountPage.greetingMsg(), 'Hey, Jeca!')
    })

    it('User should not login with wrong credentials', () => {
        homePage.login(validUsername, invalidPassword)
        homePage.validateErrorMessage("You have 4 more login attempts until your account’s locked.")
    })

    it('User should not login with non-registered mail address', () => {
        homePage.login(wrongEmail, validPassword)
        homePage.validateErrorMessage("Sorry, your email or password doesn't match our records.")
    })

    it('User should logout', () => {
        homePage.login(validUsername, validPassword)
        accountPage.logOut()
        validatePageTitle('Sign in page with registration')
        validateContentPresence(homePage.loginForm())
    })

})










