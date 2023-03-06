import cartPage from '../../pom/cart.page';
import shippingPage from '../../pom/shipping.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';

const variables = Cypress.env() as EnvironmentVariables;

describe('Shipping Page Guest user tests', function () {
  
  before(() => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wrap(credentials.guest).as('guestEmail');
    });
  });

  beforeEach(function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
    }

    Navigate.toShippingPageUsingSession('GuestUser');
  });
  
  it('Verify that order total and promo code are displayed', function () {
    shippingPage.assertions.assertOrderTotalIsDisplayed();
    if (!isSiteGenesisBrand) {
      shippingPage.assertions.assertPromoCodeFieldIsDisplayed();
    }
  });

  it('Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'secondaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    shippingPage.click.enterManuallyAddressDetails();
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'boohoo.com') {
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldErrorBoohoo[variables.language]);
    } else if (variables.brand == 'boohooman.com') {
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcodeBHM[variables.language]);
    } else {
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldError[variables.language]);
    }
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name, last name, select country from drop down list, add phone number', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.assertions.assertFirstNameFieldIsPopulated(localeAddress.firstName);

    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);

    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.assertions.assertCountryIsSelected(localeAddress.countryCode);

    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.assertions.assertPhoneNumberFieldIsPopulated(localeAddress.phone);
  });

  it('Verify that ADDRESS LOOKUP field is dispayed and mandatory', function () {
    if (isSiteGenesisBrand) {
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddress();
    if (variables.locale == 'EU') {
      shippingPage.actions.firstNameField(localeAddress.firstName);
      shippingPage.actions.lastNameField(localeAddress.lastName);
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    shippingPage.assertions.assertAddressLookupFieldIsVisible();
  });

  it('Verify that "Enter manually" button allows guest to enter address details', function () {
    if (isSiteGenesisBrand) { // Site Genesis websites have all fields displayed, no Enter Manually button
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddress();
    if (variables.locale == 'EU') {
      shippingPage.actions.firstNameField(localeAddress.firstName);
      shippingPage.actions.lastNameField(localeAddress.lastName);
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    shippingPage.click.addAddressManually();
    shippingPage.assertions.assertManualAddressFieldsAreDisplayed();
  });

  it('Verify that user is able to add address details manually', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.click.addAddressManually();

    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.enterManuallyAddressDetails();
    shippingPage.actions.adressLine1(localeAddress.addressLine);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (isSiteGenesisBrand && variables.brand != 'boohooman.com') {
      shippingPage.actions.selectDate('23', 'May', '2001');
      shippingPage.actions.confirmEmailField(this.guestEmail);
    }
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertUserProceededToBillingPage();
  });

  it('Verify that user is able to select standard shipping method', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    shippingPage.click.guestEditAddress();
    if (!isSiteGenesisBrand) {
      shippingPage.click.enterManuallyAddressDetails();
    }
    cy.wait(5000);
    shippingPage.actions.adressLine1(localeAddress.addressLine);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (variables.locale == 'AU') {
      shippingPage.actions.stateField(localeAddress.county);
    }
    if (isSiteGenesisBrand && variables.brand != 'boohooman.com') {
      shippingPage.actions.selectDate('23', 'May', '2001');
      shippingPage.actions.confirmEmailField(this.guestEmail);
    } 
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertUserProceededToBillingPage();
  });

  it('Verify that guest user can Edit cart from shipping page', function () {
    shippingPage.click.editCart();
    cartPage.assertions.assertTableWithProductIsVisible();
  });

  it('Verify that user is able to proceed to billing page after adding fname, lname, country, phone number and select shipping method', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    shippingPage.click.guestEditAddress();
    if (!isSiteGenesisBrand) {
      shippingPage.click.enterManuallyAddressDetails();
    }
    shippingPage.actions.adressLine1(localeAddress.addressLine);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    if (variables.locale == 'US' || variables.locale == 'AU') {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (isSiteGenesisBrand) {
      shippingPage.actions.selectDate('23', '05', '2001');
      if (variables.brand != 'boohooman.com') {
        shippingPage.actions.confirmEmailField(this.guestEmail); 
      }
    }
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertUserProceededToBillingPage();
  });

  //  TESTS FOR SITE GENESIS BRANDS:  //
  it('SG: Verify that email field is filled with correct email address', function () {   
    if (!isSiteGenesisBrand || variables.brand == 'boohooman.com') { // Email field only for Site Genesis brands is on Shipping page.
      this.skip();
    }
    shippingPage.assertions.assertEmailIsCorrect(this.guestEmail);
  });
  it('SG: Verify that date of birth form is present and that guest user can select date of birth', function () {
    if (!isSiteGenesisBrand) {
      this.skip(); // Date of birth form only for Site Genesis brands is on Shipping page.
    }
    shippingPage.assertions.assertDateFormIsPresent();
    shippingPage.actions.selectDate('23', assertionText.DOBmonth[variables.language], '2001');
    shippingPage.assertions.assertDateIsSelected('23', '05', '2001');
  });
  it('SG: Verify that guest user cannot proceed to billing page if email field is empty', function () {
    if (!isSiteGenesisBrand || variables.brand == 'boohooman.com') {
      this.skip(); // Email field only for Site Genesis brands is on Shipping page.
    }
    shippingPage.actions.emptyEmailField();
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertEmptyEmailFieldError(assertionText.ShippingMandatoryFieldError[variables.language]);
  });
  it('SG: Verify that guest user cannot proceed to billing page if date of birth is not selected', function () {
    if (!isSiteGenesisBrand) {
      this.skip(); // Date of birth form only for Site Genesis brands is on Shipping page.
    }
    shippingPage.actions.selectDate('Day', 'Month', 'Year');
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldError[variables.language]);
  });
});