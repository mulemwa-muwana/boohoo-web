import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import shippingPage from '../../pom/shipping.page';
import checkoutPage from '../../pom/checkoutLogin.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import Addresses from '../../helpers/addresses';

const variables = Cypress.env() as EnvironmentVariables;

describe('Home Page', function () {
  
  beforeEach (()=>{

    // Const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    cy.wait(3000);
    pdpPage.actions.selectSize();
    cy.wait(3000);
    pdpPage.click.addToCart();
    HomePage.click.cartIcon();
    cy.wait(3000);
    cartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      checkoutPage.actions.userEmailField(credentials.username);
      checkoutPage.actions.passwordField(credentials.password);
      checkoutPage.click.continueAsRegisteredUser();
    });
  });

  it('Verify that promo code field is dispayed', () => {
    shippingPage.assertions.assertPromoCodeFieldIsDispayed();
  });

  it('Verify that in Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', () => {
    shippingPage.click.addNewAddressButton();
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'boohoo.com') {
      shippingPage.assertions.assertFirstNameIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
      shippingPage.assertions.assertCityIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
    } else {
      shippingPage.assertions.assertFirstNameIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcodeArcadia[variables.language]);
      shippingPage.assertions.assertCityIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcodeArcadia[variables.language]);
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcodeArcadia[variables.language]);
    }   
  });

  it('Verify that user can proceed to billing with one of the saved addresees', () => {
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertUserProceededToBillinPage();
  });

  it('Verify that user can edit saved shipping address', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'secondaryAddress');
    shippingPage.click.editAddress();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
      shippingPage.click.addAddressManually();
    }
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityFiled(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.click.proceedToBilling();
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
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.assertions.assertFirstNameFieldIsPopulated(localeAddress.firstName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add last name', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can select country from drop down list', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.assertions.assertCountryIsSelected(localeAddress.countryCode);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add phone number', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.assertions.assertPhoneNumberFieldIsPopulated(localeAddress.phone);
  });

  it('Verify that ADDRESS LOOKUP field is dispayed and mandatory', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    shippingPage.click.addNewAddressButton();
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatory[variables.language]);
    } else {
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatoryArkadia[variables.language]);
    }
  });

  it('Verify that "Enter manually" button allows user to enter address details', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addAddressManually();
    shippingPage.actions.addressLookupField(localeAddress.postcode);
    shippingPage.assertions.assertManualAddressFieldsAreDispayed();
  });

  it('Verify that user is able to add address details manually', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityFiled(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.click.proceedToBilling();
  });

  it('Verify that PREMIER can be added to the cart', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    shippingPage.click.addPremierToCartFromShippingPage();
    shippingPage.assertions.assertCartShippingPageContainsContainsProduct(assertionText.Premier[variables.language]);
  });

  it('Verify that user is able to select standard shipping method', () => {
    const variables = Cypress.env() as EnvironmentVariables;
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.shippingMethod, 'shippingMethod1');
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
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
    const variables = Cypress.env() as EnvironmentVariables;
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityFiled(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertUserProceededToBillinPage();
  });

});

