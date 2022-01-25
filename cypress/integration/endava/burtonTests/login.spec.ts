import HomePage from '../../../pom/home.page';

describe('Login functionality', () => {

    // We might wanna change this to a fixture.
    const validUsername = Cypress.env('validUsername')
    const validPassword = Cypress.env('validPassword')
    const invalidPassword = Cypress.env('invalidPassword')
    const wrongEmail = Cypress.env('wrongEmail')

    beforeEach(() => {
        HomePage.goto(); // Already has an accept cookies method included in the index.ts of /support.
    })

    it('User should login with valid credentials', () => {
        /*
        homePage.login(validUsername, validPassword)
        validateUrl('account?registration=false')
        validatePageTitle('My Account')
        validatePageContent(accountPage.greetingMsg(), 'Hey, Jeca!')
        */

        /*
        Login Method (Valid Credentails)
        Validate Landed URL
        Validate Page Title
        Validate Page Content
        */
    })

    it('User should not login with wrong credentials', () => {
        /*
        HomePage.login(validUsername, invalidPassword)
        HomePage.validateErrorMessage("You have 4 more login attempts until your account’s locked.")
        */

        /*
        Login Method (Invalid Credentials)
        Validate Error Messages 
        */
    })

    it('User should not login with non-registered mail address', () => {
        /* 
        HomePage.login(wrongEmail, validPassword)
        HomePage.validateErrorMessage("Sorry, your email or password doesn't match our records.")
        */

        /*
        Login Method (Non Existant Credentials)
        Validate Error Message
        */
    })

    it('User should logout', () => {
        /*
        HomePage.login(validUsername, validPassword)
        AccountPage.logOut()
        validatePageTitle('Sign in page with registration')
        validateContentPresence(HomePage.loginForm())
        */

        /*
        Login Method (Valid Credentails)
        Log Out Method
        Validate Signed out
        Validate Content Login Form
        */
    })

})