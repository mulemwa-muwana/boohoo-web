import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';
import Cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';
import assertionText from 'cypress/helpers/assertionText';
import { isSiteGenesisBrand } from 'cypress/helpers/common';

const variables = Cypress.env() as EnvironmentVariables;

describe('Account page', function () {

  // This will execute before every single test, we're going to the baseURL and Login.
  beforeEach(() => {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login(credentials.username, credentials.password);
    });
  });

  // Order History test cases
  it('TC01 Verify that Order history page works as expected and user is able to view order details', function () {
    MyAccountPage.click.orderHistoryLink();
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com' || isSiteGenesisBrand) {
      MyAccountPage.assertions.assertUrlContains('order-history');
    } else {
      MyAccountPage.assertions.assertUrlContains('orders');
    }
    MyAccountPage.assertions.assertLoadedOrders();
  });
  it('TC02 Verify that returns option links to correct page', function () {
    if (isSiteGenesisBrand) {
      MyAccountPage.click.startReturnButton(assertionText.startReturnButtonText[variables.language]);
      MyAccountPage.assertions.assertUrlContains('return');
    } else {
      MyAccountPage.click.viewOrderBtn();
      MyAccountPage.click.startReturnButton(assertionText.startReturnButtonText[variables.language]);
      MyAccountPage.assertions.assertUrlContains('delivery');
    }
  });

  // My Acount Details test cases
  it('TC03 Verify that account details display correct email and that account details are editable', function () {
    if (!isSiteGenesisBrand) {
      MyAccountPage.click.accountDetailsLink();
    }
    cy.fixture('users').then((credentials: LoginCredentials) => {
      MyAccountPage.assertions.assertAccountEmail(credentials.username);
    });

    MyAccountPage.click.accountDetailsLink();
    MyAccountPage.actions.updateAccountName('Test');
    if (isSiteGenesisBrand) {
      MyAccountPage.assertions.assertAccountEditedSuccessfulPopup();
    } else {
      MyAccountPage.assertions.assertNameGreetingMessage('TEST');
    }
  });

  it('TC04 Verify that addresses are editable; user can add and delete new address', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    MyAccountPage.click.addressesLink();
    MyAccountPage.assertions.assertDefaultAddressPresence();
    MyAccountPage.actions.editDefaultAddress('Old Bond St', localeAddress.country);
    MyAccountPage.assertions.assertDefaultAddressData(localeAddress.firstName, 'Old Bond St');

    if (variables.brand == 'burton.co.uk') {
      cy.scrollTo('top');
    } 
    MyAccountPage.click.addressesLink();
    MyAccountPage.actions.createAddress(localeAddress);

    MyAccountPage.click.addressesLink();
    MyAccountPage.actions.deleteAddress();
    MyAccountPage.assertions.assertAddressNotPresent(localeAddress.firstName);
  });

  it('TC05 Verify that card can be viewed / saved / deleted', function () {
    MyAccountPage.click.paymentDetailsLink();
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end);

    MyAccountPage.actions.addCard(Cards.visa.cardNo, Cards.visa.owner, Cards.visa.date, Cards.visa.code);
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end);

    MyAccountPage.actions.deleteCard(Cards.visa.end);
    MyAccountPage.assertions.assertCardNotPresent(Cards.visa.end);
  });

});