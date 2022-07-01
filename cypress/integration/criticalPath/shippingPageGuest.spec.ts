import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import checkoutPage from '../../pom/checkoutLogin.page';
import shippingPage from '../../pom/shipping.page';
import addresses from '../../helpers/addresses';
import homePage from '../../pom/home.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import { EnvironmentVariables } from '../../support/types';

describe('Home Page', function () {
  
  beforeEach(() => {
    HomePage.goto();
    HomePage.click.searchField();
    HomePage.actions.findItemUsingSKU('aDZZ65279{enter}');
    pdpPage.click.addToCart();
    cy.wait(7000);
    homePage.click.cartIcon();  
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
    const variables = Cypress.env() as EnvironmentVariables;
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatory[variables.sku]);
  });

  it('Verify that "Enter manually" button allows guest to enter address details', () => {
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
    shippingPage.assertions.assertGuestEmailFiledDispayes();
  });

  it('Verify that user is able to select standard shipping method', () => {
    shippingPage.actions.firstNameField(addresses.AddressLineUK.firstName);
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.actions.selectCountry(addresses.AddressLineUK2.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(addresses.AddressLineUK.addrline1);
    shippingPage.actions.cityFiled(addresses.AddressLineUK.city);
    shippingPage.actions.postcodeField(addresses.AddressLineUK.postcode);
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK.phone);
    shippingPage.actions.selectShippingMethod(shippingMethods.UKshippingMethods.Standard);
    shippingPage.click.proceedToBilling();
  });

  it('Verify that user is able to select DPD shipping method', () => {
     
    // Address needs to be in LONDON
    shippingPage.actions.firstNameField(addresses.AddressLineUK1.firstName);
    shippingPage.actions.lastNameField(addresses.AddressLineUK1.lastName);
    shippingPage.actions.selectCountry(addresses.AddressLineUK1.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(addresses.AddressLineUK1.addrline1);
    shippingPage.actions.adressLine2(addresses.AddressLineUK1.addrline2);
    shippingPage.actions.cityFiled(addresses.AddressLineUK1.city);
    shippingPage.actions.postcodeField(addresses.AddressLineUK1.postcode);
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK1.phone);
    shippingPage.actions.selectShippingMethod(shippingMethods.UKshippingMethods.DPD);
    shippingPage.click.proceedToBilling();
  });

  it('Verify that PUDO locations are dispayed', () => {
    shippingPage.actions.firstNameField(addresses.AddressLineUK1.firstName);
    shippingPage.actions.lastNameField(addresses.AddressLineUK1.lastName);
    shippingPage.actions.selectCountry(addresses.AddressLineUK1.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(addresses.AddressLineUK1.addrline1);
    shippingPage.actions.adressLine2(addresses.AddressLineUK1.addrline2);
    shippingPage.actions.cityFiled(addresses.AddressLineUK1.city);
    shippingPage.actions.postcodeField(addresses.AddressLineUK1.postcode);
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK1.phone);
    shippingPage.click.OpenPUDOlocations();

    // PUDO OPTIONS ARE MISSING FOR GUEST, need to check with Trupti
  });

  it('Verify that order total is dispayed', () => {
    shippingPage.assertions.assertOrderTotalIsDsipayed();
  });

  it('Verify that guest user can Edit cart from shipping page', () => {
    shippingPage.click.editCart();
    cartPage.assertions.assertTableWithProductIsVisible();
  });

  it('Verify that user is able to proceed to billing page after adding fname, lname, country, phone number and select shipping method', () => {
    shippingPage.actions.firstNameField(addresses.AddressLineUK.firstName);
    shippingPage.actions.lastNameField(addresses.AddressLineUK.lastName);
    shippingPage.actions.selectCountry(addresses.AddressLineUK.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(addresses.AddressLineUK.addrline1);
    shippingPage.actions.cityFiled(addresses.AddressLineUK.city);
    shippingPage.actions.postcodeField(addresses.AddressLineUK.postcode);
    shippingPage.actions.phoneNumberField(addresses.AddressLineUK.phone);
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertGuestEmailFiledDispayes();
    shippingPage.assertions.assertUserProceededToBillinPage();
  });

});

