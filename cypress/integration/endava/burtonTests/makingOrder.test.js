import { CheckoutPage } from "../../page-objects/checkoutPage"
import { HomePage } from "../../page-objects/homePage"
import { Pdp } from "../../page-objects/pdp"
import { validatePageContent, validatePageTitle, validateContentPresence } from "../../page-objects/commonFunctions"
import { OrderConfirmationPage } from "../../page-objects/orderConfirmationPage"

describe('Making order as an user', () => {

    const homePage = new HomePage()
    const pdp = new Pdp()
    const checkoutPage = new CheckoutPage()
    const orderConfirmation = new OrderConfirmationPage()


    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Top level nodes have to be of the same kind.')) {
        return false
      }
  })

    before(() => {
        homePage.navigate()
        homePage.acceptCookies()
        homePage.login(Cypress.env('validUsername'), Cypress.env('validPassword'))
    })

    it('Should make an order as a user', () => {
        homePage.searchForItem('ABB01243{enter}')

        pdp.selectSize()

        validatePageContent(pdp.availabalityStatus(), 'Currently in stock')

        pdp.addToCart()
        pdp.openMiniCart()

        validatePageContent(checkoutPage.productTitle(), ' Grey Joggers ')

        checkoutPage.clickCheckOut()
        checkoutPage.chooseSavedCC(Cypress.env('securityCodeMasterVisa'))
        checkoutPage.payNow()

        validatePageTitle('Thank you for your order!')
        validateContentPresence(orderConfirmation.orderNumberSection())
        validateContentPresence(orderConfirmation.shippingInfo())


    })

})