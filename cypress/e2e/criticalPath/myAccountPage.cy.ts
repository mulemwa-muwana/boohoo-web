import MyAccountPage from '../../pom/myaccount.page';
import Cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';
import assertionText from 'cypress/helpers/assertionText';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';

const variables = Cypress.env() as EnvironmentVariables;

describe('Account page', function () {

  beforeEach(() => {
    Navigate.toMyAccountPageUsingSession();
  });

  // Order History test cases
  it('TC01 Verify that user is able to view order details', function () {
    if (isSiteGenesisBrand) {
      MyAccountPage.click.orderHistoryLink();
    }
    const includededBrands: Array<GroupBrands> = ['nastygal.com', 'burton.co.uk', 'dorothyperkins.com', 'wallis.co.uk'];
    if (includededBrands.includes(variables.brand) || isSiteGenesisBrand) {
      MyAccountPage.click.viewNewestOrderHistory(); 
    }
    MyAccountPage.assertions.assertLoadedOrders();
  });
  it('TC02 Verify that Order history page works as expected', function () {
    MyAccountPage.click.orderHistoryLink();
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com' || isSiteGenesisBrand) {
      MyAccountPage.assertions.assertUrlContains('order-history');
    } else {
      MyAccountPage.assertions.assertUrlContains('orders');
    }
  });
  it('TC03 Verify that returns option links to correct page', function () {
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
  it('TC04 Verify that account details display correct email', function () {
    if (!isSiteGenesisBrand) {
      MyAccountPage.click.accountDetailsLink();
    }
    cy.fixture('users').then((credentials: LoginCredentials) => {
      MyAccountPage.assertions.assertAccountEmail(credentials.username);
    });
  });
  it('TC05 Verify that account details are editable', function () {
    MyAccountPage.click.accountDetailsLink();
    MyAccountPage.actions.updateAccountName('Test');
    if (isSiteGenesisBrand) {
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
    MyAccountPage.actions.editDefaultAddress('Old Bond St', localeAddress.country);
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