import { AccountPage } from "../../page-objects/accountPage"
import { HomePage } from "../../page-objects/homePage"
import { validatePageTitle, validateUrl, validatePageContent } from "../../page-objects/commonFunctions"
import { ReturnsPage } from "../../page-objects/returnsPage"


describe('My Account - order information', () => {

    const homePage = new HomePage()
    const accPage = new AccountPage()
    const returnsPage = new ReturnsPage()

    beforeEach(() => {
        homePage.navigate()
        homePage.acceptCookies()
        homePage.login(Cypress.env('validUsername'), Cypress.env('validPassword'))
    })

    it('Should be able to view order and start return', () => {
        accPage.goToOrderHistory()
        validatePageTitle('Order History')
        accPage.openNewestOrder()
        validatePageTitle('My Account: Order details page')
        accPage.startReturn()
        validateUrl('delivery-and-returns')
        validatePageContent(returnsPage.reuturnsAndRefundsTitle(), 'Returns & Refunds')
    })
})

