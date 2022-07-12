import {EnvironmentVariables, LoginCredentials } from '../../support/types';
import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';
import Cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';

describe('Account page', function () {

  // This will execute before every single test, we're just going to the baseURL.

  beforeEach(() => {

    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();
      LoginPage.actions.login(credentials.username, credentials.password);
    });
  });

  // Order History test cases
  it('TC01 Verify that user is able to view order details', function () {
    MyAccountPage.actions.viewNewestOrderHistory();
    MyAccountPage.assertions.assertOrderDetailsContent();
  });
  it('TC02 Verify that "Load More" button at the buttom of the page works as expected', function () {
    MyAccountPage.click.orderHistoryLink();
    MyAccountPage.assertions.assertOrderHistoryPageTitle('order-history');
    MyAccountPage.actions.loadMoreOrders();
  });
  it('TC03 Verify that returns option links to correct page', function () {
    MyAccountPage.actions.viewNewestOrderHistory();
    MyAccountPage.click.startReturnButton();
    MyAccountPage.assertions.assertStartReturnPageIsDisplayed();
  });

  // My Acount Details test cases
  it('TC04 Verify that account details display correct email', function () {
    MyAccountPage.click.accountDetailsLink();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      MyAccountPage.assertions.assertAccountDetails(credentials.username);
    });
  });
  it('TC05 Verify that account details are editable', function () {
    MyAccountPage.click.accountDetailsLink();
    MyAccountPage.actions.updateAccountName('Test');
    MyAccountPage.assertions.assertNameGreetingMessage('TEST');
  });
  it('TC06 Verify that new address can be created', function () {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    MyAccountPage.click.addressesLink();
    MyAccountPage.actions.createAddress(localeAddress);
    MyAccountPage.assertions.assertNewAddressData(localeAddress.firstName);
  });
  it('TC07 Verify that addresses show correct default address information', function () {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    MyAccountPage.click.addressesLink();
    MyAccountPage.assertions.assertDefaultAddressPresence();
    MyAccountPage.assertions.assertDefaultAddressData(localeAddress.firstName, localeAddress.addrline1);
  });
  it('TC08 Verify that addresses are editable', function () {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    MyAccountPage.click.addressesLink();
    MyAccountPage.assertions.assertDefaultAddressPresence();
    MyAccountPage.actions.editDefaultAddress('Old Bond St');
    MyAccountPage.assertions.assertDefaultAddressData(localeAddress.firstName, 'Old Bond St');
  });
  it('TC09 Verify that address can be deleted', function () {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    MyAccountPage.click.addressesLink();
    MyAccountPage.actions.deleteAddress();
    MyAccountPage.assertions.assertAddressNotPresent(localeAddress.firstName);
  });
  it('TC10 Verify that new card can be saved', function () {
    MyAccountPage.click.paymentOptionsLink();
    MyAccountPage.actions.addCard(Cards.visa.cardNo, Cards.visa.owner);
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end, Cards.visa.owner);  
  });
  it('TC11 Verify that payment details show correct saved card details', function () {
    MyAccountPage.click.paymentOptionsLink();
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end, Cards.visa.owner);
  });
  it('TC12 Verify that card can be deleted', function () {
    MyAccountPage.click.paymentOptionsLink();
    MyAccountPage.actions.deleteCard(Cards.visa.end, );
    MyAccountPage.assertions.assertCardNotPresent(Cards.visa.end);
  });
  
  // My account Track my order
  it('TC13 Verify that is possible to search for an order from My account', function () {
    MyAccountPage.click.orderHistoryLink();
    MyAccountPage.actions.trackNewestOrder();
    MyAccountPage.assertions.assertOrderCantBeTracked();
  });

});