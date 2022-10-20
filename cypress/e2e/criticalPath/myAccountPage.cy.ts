import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';
import Cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';
import assertionText from 'cypress/helpers/assertionText';

const variables = Cypress.env() as EnvironmentVariables;

describe('Account page', function () {

  // This will execute before every single test, we're going to the baseURL and Login.
  beforeEach(() => {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();
      LoginPage.actions.login(credentials.username, credentials.password);
    });
  });

  // Order History test cases
  if (variables.brand != 'coastfashion.com') {
    it('TC01 Verify that user is able to view order details', function () {
      MyAccountPage.actions.viewNewestOrderHistory();
      MyAccountPage.assertions.assertOrderDetailsContent();
    });
  }
  it('TC02 Verify that Order history page works as expected', function () {
    MyAccountPage.click.orderHistoryLink();
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com' || variables.brand == 'coastfashion.com') {
      MyAccountPage.assertions.assertOrderHistoryPageTitle('order-history');
    } else {
      MyAccountPage.assertions.assertOrderHistoryPageTitle('orders');
    }
  });
  it('TC03 Verify that returns option links to correct page', function () {
    MyAccountPage.click.viewOrderBtn();
    MyAccountPage.click.startReturnButton(assertionText.startAReturnURLvalidation[variables.language]);
  });

  // My Acount Details test cases
  if (variables.brand != 'coastfashion.com') {
    it('TC04 Verify that account details display correct email', function () {
      MyAccountPage.click.accountDetailsLink();
      cy.fixture('users').then((credentials: LoginCredentials) => {
        MyAccountPage.assertions.assertAccountDetails(credentials.username);
      });
    });
  }
  it('TC05 Verify that account details are editable', function () {
    MyAccountPage.click.accountDetailsLink();
    MyAccountPage.actions.updateAccountName('Test');
    if (variables.brand == 'coastfashion.com') {
      MyAccountPage.assertions.assertAccountEditedSuccessfulPopup();
    } else {
      MyAccountPage.assertions.assertNameGreetingMessage('TEST');
    }
  });
  it('TC06 Verify that new address can be created', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    if (variables.brand == 'burton.co.uk') {
      cy.scrollTo('top');
    } 
    MyAccountPage.click.addressesLink();
    MyAccountPage.actions.createAddress(localeAddress);
  });
  it.skip('TC07 Verify that addresses show correct default address information', function () { // Not sure should this test be removed
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    MyAccountPage.click.addressesLink();
    MyAccountPage.assertions.assertDefaultAddressPresence();
    MyAccountPage.assertions.assertDefaultAddressData(localeAddress.firstName, localeAddress.addrline1);
  });
  it('TC08 Verify that addresses are editable', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    MyAccountPage.click.addressesLink();
    MyAccountPage.assertions.assertDefaultAddressPresence();
    MyAccountPage.actions.editDefaultAddress('Old Bond St');
    MyAccountPage.assertions.assertDefaultAddressData(localeAddress.firstName, 'Old Bond St');
  });
  it('TC09 Verify that address can be deleted', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    MyAccountPage.click.addressesLink();
    MyAccountPage.actions.deleteAddress();
    MyAccountPage.assertions.assertAddressNotPresent(localeAddress.firstName);
  });
  it('TC10 Verify that new card can be saved', function () {
    MyAccountPage.click.paymentDetailsLink();
    MyAccountPage.actions.addCard(Cards.visa.cardNo, Cards.visa.owner, Cards.visa.date, Cards.visa.code);
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end);  
  });
  it('TC11 Verify that payment details show correct saved card details', function () {
    MyAccountPage.click.paymentDetailsLink();
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end);
  });
  it('TC12 Verify that card can be deleted', function () {
    MyAccountPage.click.paymentDetailsLink();
    MyAccountPage.actions.deleteCard(Cards.visa.end);
    MyAccountPage.assertions.assertCardNotPresent(Cards.visa.end);
  });

});