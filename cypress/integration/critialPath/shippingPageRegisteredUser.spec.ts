import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import { LoginCredentials } from '../../support/types';
import shippingPage from '../../pom/shipping.page';
import checkoutPage from '../../pom/checkoutLogin.page';

describe('Home Page', function () {
  
  beforeEach(() => {
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();
      HomePage.click.searchField();
      HomePage.actions.findItemUsingSKU('aDZZ65279{enter}');
      pdpPage.click.addToCart();
      HomePage.click.cartIcon();
      cartPage.click.proceedToCheckout();
      checkoutPage.actions.userEmailField(credentials.username);
      checkoutPage.actions.passwordField(credentials.password);
      checkoutPage.click.continueAsRegisteredUser();
    });
  });

  it('Verify that promo code field is dispayed', () => {
    shippingPage.assertions.assertPromoCodeFieldIsDispayed();
  });

  it('Verify that in Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', () => {
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertFirstNameIsMandatory();
    shippingPage.assertions.assertCityIsMandatory();
    shippingPage.assertions.assertPostCodeIsMandatory();
  });

  it('Verify that user can proceed to billing with one of the saved addresees', () => {
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertUserProceededToBillinPage();
  });

  it('Verify that user can edit saved shipping address', () => {
  
  });

  it('Verify that user can cancel editing shipping address', () => {
    
  });

  it('Verify that user can view all saved addresses', () => {
  
  });

  it('Verify that Add new address button allows user to add address details', () => {
  
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name', () => {
  
  });

  it('Verify that in "DELIVERY INFORMATION" user can add last name', () => {
  
  });

  it('Verify that in "DELIVERY INFORMATION" user can select country from drop down list', () => {
  
  });

  it('Verify that in "DELIVERY INFORMATION" user can add phone number', () => {
  
  });

  it('Verify that ADDRESS LOOKUP field is dispayed and mandatory', () => {
  
  });

  it('Verify that "Enter manually" button allows guest to enter address details', () => {
  
  });

  it('Veriry that user is able to add address details manually', () => {
  
  });

  it('Verify that user can save address using save address checkbox', () => {
  
  });

  it('Verify that PREMIER can be added to the cart', () => {
  
  });

  it('Verify that user is able to select standard shipping method', () => {
  
  });

  it('Verify that PUDO locations are dispayed', () => {
  
  });

  it('Verify that order total is dispayed', () => {
  
  });

  it('Verify that user can Edit cart from shipping page', () => {
  
  });

  it('Verify that user is able to proceed to billing page', () => {
  
  });

});

