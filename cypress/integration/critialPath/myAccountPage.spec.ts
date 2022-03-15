import { AddressData, CardDetails, LoginCredentials } from '../../support/types';
import LoginPage from '../../pom/login.page';
import HomePage from '../../pom/home.page';
import MyAccountPage from '../../pom/myaccount.page';

describe('Account page', function () {
 
  // This will execute before every single test, we're just going to the baseURL.

  beforeEach(() => {

    HomePage.goto();

    cy.fixture('users').then((credentials: LoginCredentials) => {

      HomePage.goto();

      HomePage.click.logInButton();

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
    MyAccountPage.actions.updateAccountName('BOOHOO');
    MyAccountPage.assertions.assertUpdatedName('BOOHOO');
  });

  it('TC06 Verify that addresses show correct default address information', function () {
    MyAccountPage.click.addressesLink();
    MyAccountPage.assertions.assertDefaultAddressPresence();
    MyAccountPage.assertions.assertDefaultAddressData('wefwf fewefwf', 'OxfordStreet Dale House');
    
  });

  it('TC07 Verify that addresses are editable', function () {
    MyAccountPage.click.addressesLink();
    MyAccountPage.assertions.assertDefaultAddressPresence();
    MyAccountPage.actions.editDefaultAddress('Old Bond St');
    MyAccountPage.assertions.assertDefaultAddressData('wefwf fewefwf', 'Old Bond St');
  });

  it('TC08 Verify that new address can be created', function () {
    MyAccountPage.click.addressesLink();
    cy.fixture('address').then((addressData: AddressData) => {
      MyAccountPage.actions.createAddress(addressData.firstName, addressData.lastName, addressData.phone, addressData.line1);
      MyAccountPage.assertions.assertNewAddressData(addressData.addressName);
    });

  });

  it('TC09 Verify that address can be deleted', function () {
    MyAccountPage.click.addressesLink();
    cy.fixture('address').then((addressData: AddressData) => {
      MyAccountPage.actions.deleteAddress(addressData.addressName);
      MyAccountPage.assertions.assertAddressNotPresent(addressData.addressName);
    });

  });

  it('TC10 Verify that new card can be saved', function () {
    MyAccountPage.click.paymentOptionsLink();
    cy.fixture('card').then((cardDetails: CardDetails) => {
      MyAccountPage.actions.addCard(cardDetails.cardNo, cardDetails.owner);
      MyAccountPage.assertions.assertCardDetails(cardDetails.end, cardDetails.owner, cardDetails.date);
    });

  });

  it('TC11 Verify that payment details show correct saved card details', function () {
    MyAccountPage.click.paymentOptionsLink();
    cy.fixture('card').then((cardDetails: CardDetails) => {
      MyAccountPage.assertions.assertCardDetails(cardDetails.end, cardDetails.owner, cardDetails.date);
    });
  });

  it('TC12 Verify that card can be deleted', function () {
    MyAccountPage.click.paymentOptionsLink();
    cy.fixture('card').then((cardDetails: CardDetails) => {
      MyAccountPage.actions.deleteCard(cardDetails.end, 'button=[data-card="************1111"]');
      MyAccountPage.assertions.assertCardNotPresent(cardDetails.end);
    });
    
  });
  
  // My account Track my order
  it('TC13 Verify that is possible to search for an order by its number', function () {
    MyAccountPage.click.orderHistoryLink();
    MyAccountPage.actions.trackNewestOrder();
    MyAccountPage.assertions.assertOrderCanBeTracked();
  });

});