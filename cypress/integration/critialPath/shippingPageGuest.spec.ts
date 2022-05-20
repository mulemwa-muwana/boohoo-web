import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import checkoutPage from '../../pom/checkoutLogin.page';
import shippingPage from '../../pom/shipping.page';
import addresses from '../../helpers/addresses';
import { add } from 'cypress/types/lodash';

describe('Home Page', function () {
  
  beforeEach(() => {
    HomePage.goto();
    HomePage.click.searchField();
    HomePage.actions.findItemUsingSKU('aDZZ65279{enter}');
    pdpPage.click.addToCart();
    pdpPage.click.miniCartViewCartBtn();  
    cartPage.click.proceedToCheckout();
    checkoutPage.actions.guestCheckoutEmail('euboohoo+guest@gmail.com');
    checkoutPage.click.continueAsGuestBtn();
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

  it('Verify that in "DELIVERY INFORMATION" user can add first name', () => {
    shippingPage.actions.firstNameField(addresses.AddressLineUK.firstName);
    shippingPage.assertions.assertFirstNameFieldIsPopulated(addresses.AddressLineUK.firstName);
  });

  it.only('Verify that in "DELIVERY INFORMATION" user can add last name', () => {
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.assertions.assertFirstNameFieldIsPopulated(addresses.AddressLineUK.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can select country from drop down list', () => {
    
  });

  it('Verify that in "DELIVERY INFORMATION" user can add phone number', () => {
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK.phone);
  });

  it('Verify that ADDRESS LOOKUP field is dispayed and mandatory', () => {
    shippingPage.actions.addressLookupField(addresses.AddressLineUK.postcode);
  });

  it('Verify that "Enter manually" button allows guest to enter address details', () => {
  
  });

  it('Veriry that user is able to add address details manually', () => {
  
  });

  it('Verify that user is able to select standard shipping method', () => {
  
  });

  it('Verify that user is able to select express shipping method', () => {
  
  });

  it('Verify that PUDO locations are dispayed', () => {
  
  });

  it('Verify that order total is dispayed', () => {
  
  });

  it('Verify that guest user can Edit cart from shipping page', () => {
  
  });

  it('Verify that user is able to proceed to billing page after adding fname, lname, country, phone number and select shipping method', () => {
    
    // Add steps
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertUserProceededToBillinPage();
  });

});

