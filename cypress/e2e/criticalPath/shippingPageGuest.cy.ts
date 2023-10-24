import cartPage from '../../pom/cart.page';
import shippingPage from '../../pom/shipping.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import Addresses from '../../helpers/addresses';
import { isMobileDeviceUsed, isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import { brand, language, locale } from 'cypress/support/e2e';
import navigate from 'cypress/helpers/navigate';
import billingPage from 'cypress/pom/billing.page';

describe('Shipping Page Guest user tests', function () {

  before(() => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wrap(credentials.guest).as('guestEmail');
    });
  });

  beforeEach(function () {
    if (brand == 'boohoomena.com') {
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
    const localeAddress = Addresses.getAddressByLocale(locale, 'secondaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);

    shippingPage.actions.firstNameFieldClear();
    shippingPage.actions.lastNameFieldClear();
    shippingPage.actions.phoneNumberFieldClear();

    if (brand == 'boohoo.com' || brand == 'nastygal.com') {
      shippingPage.click.enterManuallyAddressDetails();
    }
    shippingPage.click.proceedToBilling();

    if (brand == 'boohoo.com') {
      shippingPage.assertions.assertFirstNameIsMandatory(assertionText.ShippingMandatoryFieldErrorBoohoo[language]);
      shippingPage.assertions.assertLastNameIsMandatory(assertionText.ShippingMandatoryFieldErrorBoohoo[language]);
      shippingPage.assertions.assertPhoneNumberIsMandatory(assertionText.ShippingMandatoryFieldErrorBoohoo[language]);
    } else {
      shippingPage.assertions.assertFirstNameIsMandatory(assertionText.ShippingMandatoryFieldError[language]);
      shippingPage.assertions.assertLastNameIsMandatory(assertionText.ShippingMandatoryFieldError[language]);
      shippingPage.assertions.assertPhoneNumberIsMandatory(assertionText.ShippingMandatoryFieldError[language]);
    }
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name, last name, select country from drop down list, add phone number', function () {
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
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
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    shippingPage.click.addNewAddress();
    if (locale == 'EU') {
      shippingPage.actions.firstNameField(localeAddress.firstName);
      shippingPage.actions.lastNameField(localeAddress.lastName);
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    shippingPage.assertions.assertAddressLookupFieldIsVisible();
  });

  it('Verify that "Enter manually" button allows guest to enter address details', function () {
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    shippingPage.click.addNewAddress();
    if (locale == 'EU') {
      shippingPage.actions.firstNameField(localeAddress.firstName);
      shippingPage.actions.lastNameField(localeAddress.lastName);
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    shippingPage.click.addAddressManually();
    shippingPage.assertions.assertManualAddressFieldsAreDisplayed();
  });

  it('Verify that user is able to add address details manually', function () {
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    if (!isSiteGenesisBrand) {
      shippingPage.click.addNewAddress();
      shippingPage.click.addAddressManually();
    }
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    if (!isSiteGenesisBrand) {
      shippingPage.click.enterManuallyAddressDetails();
    }
    shippingPage.actions.adressLine1(localeAddress.addressLine);
    shippingPage.actions.cityField(localeAddress.city);
    if (isSiteGenesisBrand && (locale == 'IE' || locale == 'AU' || locale == 'US')) {
      shippingPage.actions.selectState(localeAddress.county);
    }
    if (!isSiteGenesisBrand && (locale == 'US' || locale == 'CA')) {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (isSiteGenesisBrand) {
      shippingPage.actions.selectDate('23', localeAddress.month, '2001');
      if (brand != 'boohooman.com') {
        shippingPage.actions.emailField(this.guestEmail);
        shippingPage.actions.confirmEmailField(this.guestEmail);
      }
    }
    shippingPage.click.proceedToBilling();
    shippingPage.click.proceedToBillingVerification();
    shippingPage.assertions.assertUserProceededToBillingPage();
  });

  it('Verify that user is able to select standard shipping method', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(locale, 'shippingMethod1');
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);

    if (!isSiteGenesisBrand) {
      shippingPage.click.enterManuallyAddressDetails();
    }
    cy.wait(5000);
    shippingPage.actions.adressLine1(localeAddress.addressLine);
    shippingPage.actions.cityField(localeAddress.city);
    if (brand == 'boohooman.com' && locale != 'UK') {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);

    if (isSiteGenesisBrand) {
      shippingPage.actions.selectDate('23', localeAddress.month, '2001');
      if (brand != 'boohooman.com') {
        shippingPage.actions.emailField(this.guestEmail);
        shippingPage.actions.confirmEmailField(this.guestEmail);
      }
    }
    if (brand != 'boohooman.com' && locale != 'EU') {
      shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    }
    shippingPage.click.proceedToBilling();
    shippingPage.click.proceedToBillingVerification();
    shippingPage.assertions.assertUserProceededToBillingPage();
  });

  it('KMEU: Verify that new shipping options display', function () {
    if (brand == 'karenmillen.com' && locale == 'EU') {
      const CountriesEU: Array<string> = ['Germany', 'Spain', 'France', 'Netherlands'];
      for (let i = 0; i < CountriesEU.length; i++) {
        shippingPage.actions.selectCountry(CountriesEU[i]);
        shippingPage.assertions.assertDeliverySection(`${CountriesEU[i]} Standard`);
      }
    }
  });

  it('Verify that user is able to select 2nd shipping method', function () {
    const isBoohooLocaleWithoutSecondShipping: boolean = (brand == 'boohoo.com' && (locale == 'NO' || locale == 'FI') || locale == 'EU');
    const isKMLocaleWithSelectState: boolean = (brand == 'karenmillen.com' && (locale == 'US' || locale == 'IE'));
    const isMANLocaleWithSelectState: boolean = (brand == 'boohooman.com' && (locale == 'IE' || locale == 'US'));
    const isMPLocaleWithProceedVrf: boolean = (brand == 'misspap.com' && (locale == 'IE' || locale == 'US' || locale == 'AU'));

    if (isBoohooLocaleWithoutSecondShipping || brand == 'boohoomena.com') { // No 2nd shipping method for these boohoo brands and locales
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);

    if (!isSiteGenesisBrand) {
      shippingPage.click.enterManuallyAddressDetails();
    }
    cy.wait(5000);
    shippingPage.actions.adressLine1(localeAddress.addressLine);
    shippingPage.actions.cityField(localeAddress.city);
    if ((!isSiteGenesisBrand && (locale == 'US' || locale == 'CA')) || (brand == 'misspap.com' && locale == 'IE')) {
      shippingPage.actions.countyField(localeAddress.county);
    }
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (locale == 'AU' || isKMLocaleWithSelectState || (brand == 'boohoo.com' && locale == 'CA') || isMANLocaleWithSelectState || (brand == 'misspap.com' && locale == 'US')) {
      shippingPage.actions.selectState(localeAddress.county);
    }
    if (isSiteGenesisBrand) {
      shippingPage.actions.selectDate('23', localeAddress.month, '2001');
      if (brand != 'boohooman.com') {
        shippingPage.actions.emailField(this.guestEmail);
        shippingPage.actions.confirmEmailField(this.guestEmail);
      }
    }
    cy.wait(5000);
    shippingPage.actions.selectSecondShippingMethod();
    shippingPage.actions.secondShippingMethodName().then((secondShippingMethodName) => {
      cy.log(secondShippingMethodName);
      shippingPage.click.proceedToBilling();
      if ((brand == 'boohooman.com' && locale == 'US') || isMPLocaleWithProceedVrf || (brand == 'karenmillen.com' && locale == 'IE')) {
        shippingPage.click.proceedToBillingVerification();
      } else if (locale == 'IL') {
        cy.wait(2000); // Clicking the first time confirms the address, while clicking it a second time will navigate you to the billing page
        shippingPage.click.proceedToBilling();
      }
      billingPage.actions.waitPageToLoad();
      shippingPage.assertions.assertShippingMethodIsSelected(secondShippingMethodName);
    });
  });

  it('Verify that guest user can Edit cart from shipping page', function () {
    shippingPage.click.editCart();
    cartPage.assertions.assertTableWithProductIsVisible();
  });

  it('Verify that user is able to proceed to billing page after adding fname, lname, country, phone number and select shipping method', function () {
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    shippingPage.click.addNewAddress();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);

    if (!isSiteGenesisBrand) {
      shippingPage.click.enterManuallyAddressDetails();
    }
    shippingPage.actions.adressLine1(localeAddress.addressLine);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    if (locale == 'US' || locale == 'AU' || locale == 'CA') {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (isSiteGenesisBrand) {
      shippingPage.actions.selectDate('23', '05', '2001');
      if (brand != 'boohooman.com') {
        shippingPage.actions.emailField(this.guestEmail);
        shippingPage.actions.confirmEmailField(this.guestEmail);
      }
    }
    shippingPage.click.proceedToBilling();
    shippingPage.click.proceedToBillingVerification();
    shippingPage.assertions.assertUserProceededToBillingPage();
  });

  //  TESTS FOR SITE GENESIS BRANDS:  //
  it('SG: Verify that email field is filled with correct email address', function () {
    if (!isSiteGenesisBrand || brand == 'boohooman.com' || brand == 'karenmillen.com') { // Email field only for Site Genesis brands is on Shipping page.
      this.skip();
    }
    shippingPage.assertions.assertEmailIsCorrect(this.guestEmail);
  });
  it('SG: Verify that date of birth form is present and that guest user can select date of birth', function () {
    if (!isSiteGenesisBrand) {
      this.skip(); // Date of birth form only for Site Genesis brands is on Shipping page.
    }
    shippingPage.assertions.assertDateFormIsPresent();
    shippingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
    shippingPage.assertions.assertDateIsSelected('23', '05', '2001');
  });
  it('SG: Verify that guest user cannot proceed to billing page if email field is empty', function () {
    if (!isSiteGenesisBrand || brand == 'boohooman.com') {
      this.skip(); // Email field only for Site Genesis brands is on Shipping page.
    }
    shippingPage.actions.emptyEmailField();
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertEmptyEmailFieldError(assertionText.ShippingMandatoryFieldError[language]);
  });
  it('SG: Verify that guest user cannot proceed to billing page if date of birth is not selected', function () {
    if (!isSiteGenesisBrand) {
      this.skip(); // Date of birth form only for Site Genesis brands is on Shipping page.
    }
    shippingPage.actions.notSelectedDate(); // Day, month, and year must be selected as default, and their notations differ in each language. Instead of creating a new array, used index numbers
    shippingPage.click.proceedToBilling();
    shippingPage.assertions.assertEmptyDateFieldError(assertionText.ShippingMandatoryFieldError[language]);
  });
  it ('Verify that user can enter valid credentials in w3w', function () {
    if (isSiteGenesisBrand) {
      const excludedMisspapWithLocales: boolean = brand == 'misspap.com' && (locale == 'IE' || locale == 'AU' || locale == 'US' || locale == 'UK');
      const excludedkarenmillenWithLocales: boolean = brand == 'karenmillen.com' && (locale == 'US' || locale == 'EU');
      if (brand == 'boohooman.com' || brand == 'boohoomena.com' || excludedMisspapWithLocales || excludedkarenmillenWithLocales) {
        this.skip();
      } else {
        cy.clearAllCookies();
        navigate.toShippingPage('GuestUser'); // Clearing session and cookies to render addresses(w3w) option back if running multiple times locally with PUDO TestCase
      }
    } else if ((brand == 'boohoo.com' || brand == 'nastygal.com') && (locale == 'US' || locale == 'IE')) {
      this.skip();
    }

    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');

    if (!isSiteGenesisBrand) {
      shippingPage.click.addNewAddress();
    }
    if (brand == 'boohoo.com' || brand == 'nastygal.com') {
      shippingPage.click.enterManuallyAddressDetails();
    }
    shippingPage.actions.selectW3WAddress(localeAddress.what3Words);
    shippingPage.assertions.assertW3WisSelected();
  });
  it('Verify that user can select PUDO location', function () {
    if (locale != 'UK' || brand == 'boohooman.com') {
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');

    if (!isSiteGenesisBrand) {
      shippingPage.click.addNewAddress();
    }
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.click.clickAndCollectShipping();
    shippingPage.actions.selectCollectionShop(localeAddress.postcode).then(resp => {
      shippingPage.assertions.assertShopisSelected(resp);
    });
  });
  it('SG: Verify that guest user can add Thrift to the order', function () {
    if (brand == 'karenmillen.com' && locale == 'UK') {
      shippingPage.assertions.assertThriftSectionIsVisible();
      shippingPage.click.addThriftToCart();
      shippingPage.assertions.assertThriftBagIsAddedToTheCart();
    }
  });

  it('Verify is correct validation added if code is invalid for guest user', function () {
    if (brand != 'boohoo.com') {
      this.skip();
    }
    shippingPage.actions.addPromoCode('InvalidPromoCode');
    shippingPage.assertions.assertInvalidPromoError();
  });

  it('Verify is correct validation added if code is empty for guest user', function () {
    if (brand != 'boohoo.com') {
      this.skip();
    }
    shippingPage.actions.addNoPromoCode();
    shippingPage.assertions.assertEmptyPromoError();
  });

  it('Verify that "Help & info" link on header opens corresponding page', function () {
    if (brand == 'boohoo.com' || brand == 'nastygal.com') {
      this.skip(); // No help and info link on these brands
    }
    if (isMobileDeviceUsed) {
      cy.scrollTo('bottom');
    } 
    shippingPage.click.helpAndInfoLink();
    shippingPage.assertions.assertCustomerServicePageIsOpened();
    
  });
});