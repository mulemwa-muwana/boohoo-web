import { TwoPieceSuitsPage } from "../../page-objects/twoPieceSuitsPage"
import { HomePage } from "../../page-objects/homePage"
import { validateUrl } from "../../page-objects/commonFunctions"


describe('Filtering color', () => {

    const homePage = new HomePage()
    const twoPieceSuitsPage = new TwoPieceSuitsPage()

    before(() => {
        homePage.navigate()
        homePage.acceptCookies()
    })

    it('Should preview only white boots', () => {
        homePage.goTo2SuitsPage()
        validateUrl('2-piece-suits')
        twoPieceSuitsPage.selectColor('Blue')
        twoPieceSuitsPage.validateColor('Blue')
    })
})










