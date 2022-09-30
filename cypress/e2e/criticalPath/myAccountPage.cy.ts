import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';
import Cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';
import assertionText from 'cypress/helpers/assertionText';

const variables = Cypress.env() as EnvironmentVariables;

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
  it('TC02 Verify that Order history page works as expected', function () {
    const variables = Cypress.env() as EnvironmentVariables;
    MyAccountPage.click.orderHistoryLink();
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
      MyAccountPage.assertions.assertOrderHistoryPageTitle('order-history');
    } else {

      // MyAccountPage.click.loadMoreButton();  // Works only if there are  >10 orders
      MyAccountPage.assertions.assertOrderHistoryPageTitle('orders');
    }
  
    // MyAccountPage.actions.loadMoreOrders(); // This test is impossible because user must have more than 10 orders in history
  });
  it('TC03 Verify that returns option links to correct page', function () {
    const variables = Cypress.env() as EnvironmentVariables;
    MyAccountPage.click.viewOrderBtn();
    MyAccountPage.click.startReturnButton(assertionText.startAReturnURLvalidation[variables.language]);
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
    if (variables.brand == 'burton.co.uk') {
      cy.scrollTo('top');
    } 
    MyAccountPage.click.addressesLink();
    MyAccountPage.actions.createAddress(localeAddress);
  });
  it.skip('TC07 Verify that addresses show correct default address information', function () { // Not sure should this test be removed
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
    if (variables.brand == 'nastygal.com') {
      MyAccountPage.actions.addCardNG(Cards.visa.cardNo, Cards.visa.owner); 
    } else {
      MyAccountPage.actions.addCard(Cards.visa.cardNo, Cards.visa.owner);    
    }
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end);  
  });
  it('TC11 Verify that payment details show correct saved card details', function () {
    MyAccountPage.click.paymentOptionsLink();
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end);
  });
  it('TC12 Verify that card can be deleted', function () {
    MyAccountPage.click.paymentOptionsLink();
    MyAccountPage.actions.deleteCard(Cards.visa.end, );
    MyAccountPage.assertions.assertCardNotPresent(Cards.visa.end);
  });

});