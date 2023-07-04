import MyAccountPage from '../../pom/myaccount.page';
import Cards from '../../helpers/cards';
import Addresses from '../../helpers/addresses';
import assertionText from 'cypress/helpers/assertionText';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import { brand, language, locale } from 'cypress/support/e2e';

describe('Account page', function () {

  beforeEach(() => {
    Navigate.toMyAccountPageUsingSession();
  });

  // Order History test cases
  it('TC01 Verify that Order history page works as expected and user is able to view order details', function () {
    MyAccountPage.click.orderHistoryLink();
    if (brand == 'boohoo.com' || brand == 'nastygal.com' || isSiteGenesisBrand) {
      MyAccountPage.assertions.assertUrlContains('order-history');
    } else {
      MyAccountPage.assertions.assertUrlContains('orders');
    }
    MyAccountPage.click.viewNewestOrder();
    MyAccountPage.assertions.assertOrderDetailsContent();
  });

  it('TC02 Verify that returns option links to correct page', function () {
    MyAccountPage.click.startReturnButton(assertionText.startReturnButtonText[language]);
    MyAccountPage.assertions.assertUrlContains('return');
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
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    const localeNewAddress = Addresses.getAddressByLocale(locale, 'newAddedPrimaryAddress');

    if (brand == 'burton.co.uk') {
      cy.scrollTo('top');
    } 

    MyAccountPage.click.addressesLink();
    if (!isSiteGenesisBrand) {
      MyAccountPage.actions.deleteAddressIfExist();
    }

    MyAccountPage.actions.createAddress(localeNewAddress);
    MyAccountPage.click.addressesLink();
    MyAccountPage.assertions.assertDefaultAddressPresence();
    MyAccountPage.actions.editDefaultAddress(localeAddress.addressLine, localeAddress.country);
    MyAccountPage.assertions.assertDefaultAddressData(localeAddress.firstName);

    MyAccountPage.click.addressesLink();
    MyAccountPage.actions.deleteAddress();  
    MyAccountPage.assertions.assertAddressNotPresent(localeNewAddress.firstName); 
  });

  it('TC05 Verify that card can be viewed / saved / deleted', function () {
    MyAccountPage.click.paymentDetailsLink();
    if (brand=='boohoo.com'&& locale=='US') {
      MyAccountPage.actions.addCardUS(Cards.visa.cardNo, Cards.visa.owner, Cards.visa.month, Cards.visa.year);
    } else {
      MyAccountPage.actions.addCard(Cards.visa.cardNo, Cards.visa.owner, Cards.visa.date, Cards.visa.code);
    }
    MyAccountPage.assertions.assertCardDetails(Cards.visa.end);

    MyAccountPage.actions.deleteCard(Cards.visa.end);
    MyAccountPage.assertions.assertCardNotPresent(Cards.visa.end);
  });

});