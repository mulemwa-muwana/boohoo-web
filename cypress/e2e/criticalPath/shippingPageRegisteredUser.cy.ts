import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import shippingPage from '../../pom/shipping.page';
import checkoutPage from '../../pom/checkoutLogin.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import Addresses from '../../helpers/addresses';
import billingPage from 'cypress/pom/billing.page';
import { isSiteGenesisBrand } from 'cypress/helpers/common';

const variables = Cypress.env() as EnvironmentVariables;

describe('Shipping Page Registered user tests', function () {

  beforeEach(() => {
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    cy.wait(3000);
    pdpPage.actions.selectSize();
    cy.wait(3000);
    pdpPage.click.addToCart();
    cy.wait(3000);
    HomePage.click.cartIcon();
    cy.wait(3000);
    if (!isSiteGenesisBrand) {
      pdpPage.click.miniCartViewCartBtn();
    }
    cartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      checkoutPage.actions.userEmailField(credentials.username);
      if (isSiteGenesisBrand && variables.brand != 'boohooman.com' && variables.brand != 'boohoomena.com') {
        checkoutPage.click.continueAsRegisteredUser();
      }
      checkoutPage.actions.passwordField(credentials.password);
      cy.wait(1000);
      checkoutPage.click.continueAsRegisteredUser();
    });
  });

  /** [Test Steps]
   * Log in
   * Go to promo field
   * Check it's displayed
   */
  it('Verify that promo code field is displayed', function () {
    if (isSiteGenesisBrand) {
      this.skip(); // Promo code field for Site Genesis brands is displayed on Billing Page.
    }
    shippingPage.assertions.assertPromoCodeFieldIsDisplayed();
  });

  it('Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', () => {    
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'secondaryAddress');
    shippingPage.click.addNewAddressButton();
    if (variables.locale == 'AU') {
      shippingPage.actions.selectCountry(localeAddress.countryCode); // Can't select
    } else {
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    if (variables.brand == 'boohooman.com') {
      shippingPage.actions.addressLine1Clear();
      shippingPage.actions.cityFieldClear();
    }
    cy.wait(5000);
    shippingPage.click.enterManuallyAddressDetails();
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'boohoo.com') {
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
    } else {
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcodeArcadia[variables.language]);
    }
  });

  /** [Test Steps]
   * Log in
   * Go to billing 
   * Check it's displayed
   */
  it('Verify that user can proceed to billing with one of the saved addresees', () => {
    if (variables.locale != 'IE' && variables.locale != 'AU') {
      shippingPage.click.proceedToBilling();
      if (isSiteGenesisBrand) {
        shippingPage.click.proceedToBillingVerification();
      }
      cy.wait(4000);
      shippingPage.assertions.assertUserProceededToBillingPage();
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
    if (variables.locale == 'US' || variables.locale == 'AU') {
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

  it('Verify that Add new address button allows user to add address details', function () {
    if (variables.brand == 'boohooman.com') {
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.click.addNewAddressButton();
    if (variables.locale == 'IE') {
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    shippingPage.assertions.assertFirstNameFieldIsPopulated(localeAddress.firstName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.assertions.assertFirstNameFieldIsPopulated(localeAddress.firstName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add last name', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can select country from drop down list', function () {
    if (variables.brand == 'boohoomena.com') { // Country cannot be changed on Shipping page for this brand
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
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

  it('Verify that in "DELIVERY INFORMATION" user can add phone number', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.assertions.assertPhoneNumberFieldIsPopulated(localeAddress.phone);
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

  it('Verify that "Enter manually" button allows user to enter address details', function () {
    if (isSiteGenesisBrand) { // Site Genesis websites have all fields displayed, no Enter Manually button
      this.skip();
    }

    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    if (variables.brand == 'boohoo.com') {
      shippingPage.click.addNewAddressButton();

      // ShippingPage.click.addAddressManually();
    } else {
      shippingPage.click.addNewAddressButton();
      shippingPage.actions.selectCountry(localeAddress.country);
      cy.wait(4000);

      // ShippingPage.click.enterManuallyAddressDetails();
    }
    shippingPage.actions.selectFirstAddressFromAddressLookup(localeAddress.addrline1);
    shippingPage.assertions.assertManualAddressFieldsAreDisplayed();
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
    if (isSiteGenesisBrand) {
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
    const includededBrands: Array<GroupBrands> = ['boohoo.com', 'dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];

    if (includededBrands.includes(variables.brand) && includedLocals.includes(variables.locale)) {
      shippingPage.click.addPremierByButtonName(assertionText.AddPremierToCartButton[variables.language]);
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

  it.skip('Verify that PUDO locations are dispayed', () => {
    shippingPage.click.OpenPUDOlocations();
  });

  it('Verify that order total is dispayed', () => {
    shippingPage.assertions.assertOrderTotalIsDisplayed();
  });

  it('Verify that user can Edit cart from shipping page', () => {
    shippingPage.click.editCart();
    cartPage.assertions.assertTableWithProductIsVisible();
  });

  it('Verify that user is able to proceed to billing page', () => {
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
    } else if (variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com' || variables.brand == 'wallis.co.uk' || variables.brand == 'karenmillen.com' && variables.locale != 'EU') {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
    } else if (isSiteGenesisBrand) {
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.clearCityFieldAndAddNewOne(localeAddress.city);
      shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode);
      shippingPage.actions.clearPhoneNumberFieldAndAddNewOne(localeAddress.phone);
      if (variables.brand == 'boohoomena.com') {
        shippingPage.actions.countyField(localeAddress.county);
      }
    }
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    shippingPage.click.proceedToBilling();
    if (isSiteGenesisBrand) {
      shippingPage.click.proceedToBillingVerification();
    }
    billingPage.actions.waitPageToLoad();
    shippingPage.assertions.assertUserProceededToBillingPage();
  });

});

