import cartPage from '../../pom/cart.page';
import shippingPage from '../../pom/shipping.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import Addresses from '../../helpers/addresses';
import billingPage from 'cypress/pom/billing.page';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';

const variables = Cypress.env() as EnvironmentVariables;

describe('Shipping Page Registered user tests', function () {

  beforeEach(() => {
    Navigate.toShippingPageUsingSession('RegisteredUser');
  });

  /** [Test Steps]
   * Log in
   * Go to promo field
   * Check it's displayed
   */
  it('Verify that order total and promo code are displayed', function () {
    shippingPage.assertions.assertOrderTotalIsDisplayed();
    if (!isSiteGenesisBrand) {
      shippingPage.assertions.assertPromoCodeFieldIsDisplayed();
    }
  });

  it('Verify that in Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', () => {    
    shippingPage.click.addNewAddressButton();

    shippingPage.actions.firstNameFieldClear();
    shippingPage.actions.lastNameFieldClear();
    shippingPage.actions.phoneNumberFieldClear();

    if (!isSiteGenesisBrand) {
      shippingPage.click.proceedToBilling();
    }

    if (variables.brand == 'boohoo.com') {
      shippingPage.assertions.assertFirstNameIsMandatory(assertionText.ShippingMandatoryFieldErrorBoohoo[variables.language]);
      shippingPage.assertions.assertLastNameIsMandatory(assertionText.ShippingMandatoryFieldErrorBoohoo[variables.language]);
      shippingPage.assertions.assertPhoneNumberIsMandatory(assertionText.ShippingMandatoryFieldErrorBoohoo[variables.language]);
    } else {
      shippingPage.assertions.assertFirstNameIsMandatory(assertionText.ShippingMandatoryFieldError[variables.language]);
      shippingPage.assertions.assertLastNameIsMandatory(assertionText.ShippingMandatoryFieldError[variables.language]);
      shippingPage.assertions.assertPhoneNumberIsMandatory(assertionText.ShippingMandatoryFieldError[variables.language]);
    }
  });

  it('Verify that user can edit saved shipping address', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'secondaryAddress');
    cy.wait(4000);
    shippingPage.click.editAddress();
    shippingPage.actions.selectCountry(localeAddress.countryCode);
    cy.wait(5000);
    shippingPage.click.addAddressManually();

    shippingPage.actions.adressLine1(localeAddress.addressLine);
    cy.wait(2000);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    if (variables.locale == 'US' || variables.locale == 'AU' || variables.locale == 'IE') {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.phoneNumberField(localeAddress.phone);

    shippingPage.click.proceedToBilling();
    billingPage.actions.waitPageToLoad();
    billingPage.assertions.assertNewShippingAddress(localeAddress.addressLine, localeAddress.city, localeAddress.postcode, localeAddress.country);
    
  });

  it('Verify that user can cancel editing shipping address', function () {
    if (variables.brand == 'boohooman.com') {
      this.skip();
    }
    shippingPage.click.addNewAddressButton();
    shippingPage.click.cancelAddingNewAddressForRegisteredUser();
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name, last name, phone number and select country from drop down list', function () {
    if (variables.brand == 'boohoomena.com') { // Country cannot be changed on Shipping page for this brand
      this.skip();
    }
    
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.assertions.assertFirstNameFieldIsPopulated(localeAddress.firstName);

    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);

    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.assertions.assertPhoneNumberFieldIsPopulated(localeAddress.phone);

    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    shippingPage.assertions.assertCountryIsSelected(localeAddress.countryCode);
  });

  it('Verify that ADDRESS LOOKUP field is dispayed and functional', function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip(); // There is no Address Lookup for this brand
    }
    const secondaryAddress = Addresses.getAddressByLocale(variables.locale,'secondaryAddress');
    shippingPage.click.addNewAddressButton();
    cy.wait(3000);
    shippingPage.actions.addressLookupSelectFirstAddress(secondaryAddress.addressLine, secondaryAddress.city);
    shippingPage.assertions.assertNewAddedShippingAddress(secondaryAddress.addressLine, secondaryAddress.city, secondaryAddress.postcode);

    shippingPage.actions.firstNameField('New');
    shippingPage.actions.lastNameField('Test');
    shippingPage.actions.phoneNumberField(secondaryAddress.phone);
    shippingPage.click.proceedToBilling();
    billingPage.assertions.assertNewShippingAddress(secondaryAddress.addressLine, secondaryAddress.city, secondaryAddress.postcode, secondaryAddress.country);
  });

  it('Verify that user is able to add address details manually', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');

    shippingPage.click.addNewAddressButton();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);

    if (isSiteGenesisBrand) {
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
      if (variables.brand == 'boohoomena.com') {
        shippingPage.actions.countyField(localeAddress.county);
      }
    } else {
      if (variables.brand == 'boohoo.com') {
        shippingPage.click.addNewAddress();
      }
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      if (variables.locale == 'US' || variables.locale == 'AU') {
        shippingPage.actions.selectState(localeAddress.county);
      }  
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }

    shippingPage.click.proceedToBilling();
    billingPage.actions.waitPageToLoad();
    billingPage.assertions.assertNewShippingAddress(localeAddress.addressLine, localeAddress.city, localeAddress.postcode, localeAddress.country);
  });

  it('Verify that PREMIER can be added to the cart', function () {
    if (variables.brand == 'boohoomena.com') { // No Premier/VIP for this brand
      this.skip();
    }
    const includedLocales: Array<Locale> = ['UK', 'EU', 'IE', 'FR'];
    if (!includedLocales.includes(variables.locale)) {
      this.skip(); // Other locales are not supported for Premier promotion
    }
    
    shippingPage.click.addPremierToCartFromShippingPage();
    
    const includededBlpBrands: Array<GroupBrands> = ['boohoo.com', 'dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];
    if (includededBlpBrands.includes(variables.brand)) {
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.Premier[variables.language]);
    } else {
      shippingPage.assertions.assertShippingPageCartContainsVipProduct();
    }

    // Cleanup - remove Premier from Cart
    shippingPage.click.editCart();
    cartPage.click.removePremierFromCart();
  });

  it('Verify that user is able to select standard shipping method', () => {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');

    shippingPage.click.addNewAddressButton();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);

    if (isSiteGenesisBrand) {
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
      if (variables.brand == 'boohoomena.com') {
        shippingPage.actions.countyField(localeAddress.county);
      }
    } else {
      if (variables.brand == 'boohoo.com') {
        shippingPage.click.addNewAddress();
      }
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      if (variables.locale == 'US' || variables.locale == 'AU') {
        shippingPage.actions.selectState(localeAddress.county);
      }  
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    shippingPage.click.proceedToBilling();
    billingPage.actions.waitPageToLoad();
    shippingPage.assertions.assertShippingMethodIsSelected(localeShippingMethod.shippingMethodName);
  });

  it('Verify that user can Edit cart from shipping page', () => {
    shippingPage.click.editCart();
    cartPage.assertions.assertTableWithProductIsVisible();
  });
  
});