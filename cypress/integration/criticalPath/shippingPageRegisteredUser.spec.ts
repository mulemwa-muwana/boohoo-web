import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import { LoginCredentials } from '../../support/types';
import shippingPage from '../../pom/shipping.page';
import checkoutPage from '../../pom/checkoutLogin.page';
import addresses from '../../helpers/addresses';
import assertionText from '../../helpers/assertionText';
import homePage from '../../pom/home.page';
import shippingMethods from '../../helpers/shippingMethods';

describe('Home Page', function () {
  
  beforeEach(() => {
    HomePage.goto();
    homePage.click.cartIcon();
    cartPage.click.clearCart();
    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      HomePage.goto();
      HomePage.click.searchField();
      HomePage.actions.findItemUsingSKU('aDZZ65279{enter}');
      pdpPage.click.addToCart();
      cy.wait(7000);
      homePage.click.cartIcon();  
      pdpPage.click.miniCartViewCartBtn();
      cartPage.click.proceedToCheckout();
      checkoutPage.actions.userEmailField(credentials.username);
      checkoutPage.actions.passwordField(credentials.password);
      checkoutPage.click.continueAsRegisteredUser();
    });
  });

  it('Verify that promo code field is dispayed', () => {
    shippingPage.assertions.assertPromoCodeFieldIsDispayed();
  });

  it.only('Verify that in Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', () => {
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
    shippingPage.actions.firstNameField(addresses.AddressLineUK.firstName);
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.actions.selectCountry(addresses.AddressLineUK.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(addresses.AddressLineUK.addrline1);
    shippingPage.actions.cityFiled(addresses.AddressLineUK.city);
    shippingPage.actions.postcodeField(addresses.AddressLineUK.postcode);
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK.phone);
    shippingPage.click.proceedToBilling();
    shippingPage.click.editAddress();
  });

  it('Verify that user can cancel editing shipping address', () => {
    shippingPage.click.addNewAddressButton();
    shippingPage.click.cancelAddingNewAddressForRegisteredUser();
  });

  it('Verify that user can view all saved addresses', () => {
    shippingPage.click.viewAllAddressesLink();
    shippingPage.assertions.assertOtherAddressesAreVisible();
  });

  it('Verify that Add new address button allows user to add address details', () => {
    shippingPage.click.addNewAddressButton();
    shippingPage.assertions.assertFirstNameFieldIsPopulated(addresses.AddressLineUK.firstName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(addresses.AddressLineUK.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name', () => {
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(addresses.AddressLineUK.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add last name', () => {
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(addresses.AddressLineUK.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can select country from drop down list', () => {
    shippingPage.actions.selectCountry(addresses.AddressLineUS.country);
    shippingPage.assertions.assertCountryIsSelected(addresses.AddressLineUS.countryCode);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add phone number', () => {
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK.phone);
    shippingPage.assertions.assertPhoneNumberFieldIsPopulated(addresses.AddressLineUK.phone);
  });

  it('Verify that ADDRESS LOOKUP field is dispayed and mandatory', () => {
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatory.EN);
  });

  it('Verify that "Enter manually" button allows user to enter address details', () => {
    shippingPage.click.addAddressManually();
    shippingPage.assertions.assertManualAddressFieldsAreDispayed();
  });

  it('Verify that user is able to add address details manually', () => {
    shippingPage.actions.firstNameField(addresses.AddressLineUK.firstName);
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.actions.selectCountry(addresses.AddressLineUK.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(addresses.AddressLineUK.addrline1);
    shippingPage.actions.cityFiled(addresses.AddressLineUK.city);
    shippingPage.actions.postcodeField(addresses.AddressLineUK.postcode);
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK.phone);
    shippingPage.click.proceedToBilling();
  });

  it('Verify that PREMIER can be added to the cart', () => {
    shippingPage.click.addPremierToCartFromShippingPage();
    shippingPage.assertions.assertCartShippingPageContainsContainsProduct(assertionText.Premier.EN);
  });

  it('Verify that user is able to select standard shipping method', () => {
    shippingPage.actions.selectShippingMethod(shippingMethods.UKshippingMethods.Standard);
    shippingPage.click.proceedToBilling();
  });

  it('Verify that PUDO locations are dispayed', () => {
    shippingPage.click.OpenPUDOlocations();
  });

  it('Verify that order total is dispayed', () => {
    shippingPage.assertions.assertOrderTotalIsDsipayed();
  });

  it('Verify that user can Edit cart from shipping page', () => {
    shippingPage.click.editCart();
    cartPage.assertions.assertTableWithProductIsVisible();
  });

  it('Verify that user is able to proceed to billing page', () => {
    shippingPage.actions.firstNameField(addresses.AddressLineUK.firstName);
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.actions.selectCountry(addresses.AddressLineUK.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(addresses.AddressLineUK.addrline1);
    shippingPage.actions.cityFiled(addresses.AddressLineUK.city);
    shippingPage.actions.postcodeField(addresses.AddressLineUK.postcode);
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK.phone);
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertUserProceededToBillinPage();
  });

});

