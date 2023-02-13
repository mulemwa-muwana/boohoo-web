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

  it.only('Verify that in Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', () => {    
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'secondaryAddress');
    shippingPage.click.addNewAddressButton();
    if (variables.locale == 'AU') {
      shippingPage.actions.selectCountry(localeAddress.countryCode); // Can't select
    } else {
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    if (variables.brand == 'boohooman.com' || variables.brand == 'warehousefashion.com') {
      shippingPage.actions.addressLine1Clear();
      shippingPage.actions.cityFieldClear();
    }
    cy.wait(5000);
    if (variables.brand !='warehousefashion.com') {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.click.proceedToBilling();
    }
    if (variables.brand == 'boohoo.com') {
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
    } else if (variables.brand =='warehousefashion.com') { 
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
    } else {
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcodeArcadia[variables.language]);
    }
  });

  it('Verify that user can edit saved shipping address', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'secondaryAddress');
    shippingPage.click.editAddress();
    shippingPage.actions.selectCountry(localeAddress.countryCode);
    cy.wait(5000);
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
      shippingPage.click.addNewAddress();
    }
    shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
    cy.wait(2000);
    shippingPage.actions.clearCityFieldAndAddNewOne(localeAddress.city);
    shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode);
    if (variables.locale == 'US' || variables.locale == 'AU' || variables.locale == 'IE') {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.clearPhoneNumberFieldAndAddNewOne(localeAddress.phone);
    shippingPage.click.proceedToBilling();
    if (isSiteGenesisBrand) {
      shippingPage.click.proceedToBillingVerification();
    }
    billingPage.actions.waitPageToLoad();
    billingPage.assertions.assertNewShippingAddress(localeAddress.addrline1);
    
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

    shippingPage.click.addNewAddressButton();
    cy.wait(3000);
    if (variables.locale == 'US') {
      shippingPage.actions.selectCountry(localeAddress.countryCode);
      shippingPage.click.addAddressManually();
      shippingPage.actions.selectState(localeAddress.county);
    } else {
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    shippingPage.assertions.assertCountryIsSelected(localeAddress.countryCode);
  });

  it('Verify that ADDRESS LOOKUP field is dispayed and functional', function () {
    if (isSiteGenesisBrand) { // Address Lookup isn't mandatory on Site Genesis websites
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    cy.wait(3000);
    if (variables.brand == 'boohoo.com') {
      shippingPage.click.addAddressManually(); 
      shippingPage.click.proceedToBilling();
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatory[variables.language]);
    } else if (variables.brand == 'nastygal.com') {
      shippingPage.actions.selectCountry(localeAddress.countryCode);
      cy.wait(4000);
      shippingPage.click.addAddressManually();
      cy.wait(4000);
      if (variables.brand == 'nastygal.com' && (variables.locale == 'US' || variables.locale == 'AU')) {
        shippingPage.actions.selectState(localeAddress.county);
        shippingPage.click.proceedToBilling();
      }
      if (variables.locale == 'EU') {
        shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode);
      }
      shippingPage.click.proceedToBilling();
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatoryNG[variables.language]);
    } else {
      shippingPage.click.proceedToBilling();
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatoryArkadia[variables.language]);
    }
  });

  it('Verify that user is able to add address details manually', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');

    shippingPage.click.addNewAddressButton();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
      shippingPage.click.addNewAddress();
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      if (variables.locale == 'US') {
        shippingPage.actions.selectCountry(localeAddress.countryCode);
        cy.wait(3000);
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
      if (variables.locale == 'AU') {
        shippingPage.actions.stateField(localeAddress.county);
      }
    } else if (isSiteGenesisBrand) {
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.clearCityFieldAndAddNewOne(localeAddress.city);
      shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode);
      shippingPage.actions.clearPhoneNumberFieldAndAddNewOne(localeAddress.phone);
      if (variables.brand == 'boohoomena.com') {
        shippingPage.actions.countyField(localeAddress.county);
      }
    } else {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }
    shippingPage.click.proceedToBilling();
    if (isSiteGenesisBrand && variables.brand !='warehousefashion.com') {
      shippingPage.click.proceedToBillingVerification();
    }
    billingPage.actions.waitPageToLoad();
    billingPage.assertions.assertNewShippingAddress(localeAddress.addrline1);
  });

  it('Verify that PREMIER can be added to the cart', function () {
    if (variables.brand == 'boohoomena.com') { // No Premier/VIP for this brand
      this.skip();
    }
    const includedLocals: Array<Locale> = ['UK', 'FR', 'IE'];
    const includededBrands: Array<GroupBrands> = ['dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk']; // Boohoo is different than Arcadia

    if (includededBrands.includes(variables.brand) && includedLocals.includes(variables.locale)) {
      shippingPage.click.addPremierByButtonName(assertionText.AddPremierToCartButton[variables.language]);
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.Premier[variables.language]);
    } else if ( variables.brand == 'boohoo.com' && includedLocals.includes(variables.locale)) {
      shippingPage.click.addPremierByButtonName(assertionText.AddPremierToCartButton[variables.language]); // User has PREMIER account
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.Premier[variables.language]);
    } else if (variables.brand == 'nastygal.com' && includedLocals.includes(variables.locale)) {
      shippingPage.click.addPremierToCartFromShippingPage();
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.PremierNG[variables.language]);
    } else if (variables.brand == 'coastfashion.com' || variables.brand == 'karenmillen.com') {
      shippingPage.click.addPremierToCartFromShippingPage();
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.PremierSiteGenesis[variables.language]);
    } else if (variables.brand == 'warehousefashion.com') {
      shippingPage.click.addPremierToCartFromShippingPage();
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.PremierWarehouse[variables.language]);
    } else {
      throw new Error('This brand is to be covered yet');
    }
  });

  it('Verify that user is able to select standard shipping method', () => {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');

    shippingPage.click.addNewAddressButton();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
      shippingPage.click.addNewAddress();
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      if (variables.locale == 'US') {
        shippingPage.actions.selectCountry(localeAddress.countryCode);
        cy.wait(3000);
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
      if (variables.locale == 'AU') {
        shippingPage.actions.stateField(localeAddress.county);
      }
    } else if (isSiteGenesisBrand) {
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.clearCityFieldAndAddNewOne(localeAddress.city);
      shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode);
      shippingPage.actions.clearPhoneNumberFieldAndAddNewOne(localeAddress.phone);
      if (variables.brand == 'boohoomena.com') {
        shippingPage.actions.countyField(localeAddress.county);
      }
    } else {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
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