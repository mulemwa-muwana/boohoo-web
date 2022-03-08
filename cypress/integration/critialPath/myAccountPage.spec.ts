import { LoginCredentials } from '../../support/types';
import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';
import myaccountPage from '../../pom/myaccount.page';

describe('Account Page', function () {

    // This will execute before every single test, we're just going to the baseURL.
    beforeEach(() => {
        HomePage.goto();
        cy.fixture('users').then((credentials: LoginCredentials) => {
            LoginPage.actions.login(credentials.username, credentials.password);
            //HomePage.assertions.assertUserPanelTitle(credentials.name);
        })
    })


    //Order History test cases
    it('TC01 Able to view order details', function () {
        MyAccountPage.actions.viewNewestOrderHistory();
        myaccountPage.assertions.assertOrderDetailsContent();
    })

    it('TC02 The "Load More" button at the buttom of the page works as expected', function () {
        MyAccountPage.click.orderHistoryLink();
        MyAccountPage.assertions.assertOrderHistoryPageTitle('order-history');
        MyAccountPage.actions.loadMoreOrders();

    })

    it('TC03 Returns option links to correct page', function () {
        MyAccountPage.actions.viewNewestOrderHistory();
        MyAccountPage.click.startReturnButton();
        MyAccountPage.assertions.assertStartReturnPageIsDisplayed();

    })

    //My Acount Details test cases
    it('TC04 Account details display correct customer information', function () {
        MyAccountPage.click.accountDetailsLink();
        cy.fixture('users').then((credentials: LoginCredentials) => {
            MyAccountPage.assertions.assertAccountDetails(credentials.username);
        })
    })

    it('TC05 Account details are editable', function () {
        MyAccountPage.click.accountDetailsLink();
        MyAccountPage.actions.updateAccountName('BOOHOO');
        MyAccountPage.assertions.assertUpdatedName('BOOHOO');

    })

    /*it.skip('TC06 Addresses show correct saved address information', function () {
        MyAccountPage.click.addressesLink();
        const addressData = [
            "wefwf fewefwf",
            "Slack & Andrews Ltd Dale House",
            "Manchester",
            "M1 2HF", 
            "United Kingdom",
            "01111111111" ]
        cy.get('section[data-tau="address_book_item_default"]').find('.b-address').find('p[class=*b-address]')
        })

    })*/

    it('TC07 Addresses are editable', function () {
        MyAccountPage.click.addressesLink();
        MyAccountPage.assertions.assertDefaultAddressPresence();
        myaccountPage.actions.editDefaultAddress('OxfordStreet');
        myaccountPage.assertions.assertDefaultAddressData('wefwf fewefwf', 'OxfordStreet')

    })

    it('TC08 Addresses allow for new address to be created', function () {

    })

    it('TC09 Addresses can be deleted', function () {

    })

    it('TC10 Payment Details show correct saved Card details', function () {

    })

    it('TC11 Payment Details allow for new cards to be created', function () {

    })

    it('TC12 Payment Details can be deleted', function () {

    })

    //My account Track my order
    it('TC13 It should be possible for search for order information using order number', function () {

    })






})
