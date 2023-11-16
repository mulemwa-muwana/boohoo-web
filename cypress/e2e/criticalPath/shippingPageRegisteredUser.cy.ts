import cartPage from '../../pom/cart.page';
import shippingPage from '../../pom/shipping.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import Addresses from '../../helpers/addresses';
import billingPage from 'cypress/pom/billing.page';
import { isSiteGenesisBrand, isMobileDeviceUsed } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import { brand, language, locale } from 'cypress/support/e2e';

describe('Shipping Page Registered user tests', function () {

  beforeEach(() => {
    Navigate.toShippingPageUsingSession('RegisteredUser');
  });

  /** [Test Steps]
   * Log in
   * Go to promo field
   * Check it's displayed
   */
  it('CYP-197 Verify that order total and promo code are displayed', function () {
    shippingPage.assertions.assertOrderTotalIsDisplayed();
    if (!isSiteGenesisBrand) {
      shippingPage.assertions.assertPromoCodeFieldIsDisplayed();
    }
  });

  it('CYP-198 Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', () => {
    shippingPage.click.addNewAddressButton();

    shippingPage.actions.firstNameFieldClear();
    shippingPage.actions.lastNameFieldClear();
    shippingPage.actions.phoneNumberFieldClear();

    if (!isSiteGenesisBrand) {
      shippingPage.click.proceedToBilling();
    }

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

  it('CYP-242 Verify that in "DELIVERY INFORMATION" address is mandatory', () => {
    if (brand == 'boohooman.com') {
      shippingPage.actions.addressLine1Clear();
      shippingPage.actions.cityFieldClear();
    } else {
      shippingPage.click.addNewAddressButton();
    }
    shippingPage.click.proceedToBilling();
    if (brand == 'boohoo.com') {
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.ShippingMandatoryFieldErrorBoohoo[language]);
    } else {
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.ShippingMandatoryFieldError[language]);
    }
  });

  it('CYP-199 Verify that user can edit saved shipping address', () => {
    const localeAddress = Addresses.getAddressByLocale(locale, 'secondaryAddress');
    cy.wait(4000);
    shippingPage.click.editAddress();
    shippingPage.actions.selectCountry(localeAddress.countryCode);
    cy.wait(5000);
    shippingPage.click.addAddressManually();

    shippingPage.actions.adressLine1(localeAddress.addressLine);
    if (brand == 'boohooman.com' || (brand == 'misspap.com' && locale == 'IE')) {
      shippingPage.actions.addressLine2Clear(); // To Remove complete data provided through BeforeEach ShippingPage Method
    }
    cy.wait(2000);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    if (locale == 'US' || locale == 'AU' || locale == 'IE' || locale == 'CA') {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if ((brand == 'oasis-stores.com' || brand == 'coastfashion.com') && isMobileDeviceUsed) {
      shippingPage.actions.addAddressNickname(localeAddress.addressNickname);
    }
    cy.wait(3000);
    shippingPage.click.proceedToBilling();
    cy.wait(2000);
    shippingPage.click.proceedToBillingVerification();
    billingPage.actions.waitPageToLoad();
    billingPage.assertions.assertNewShippingAddress(localeAddress.addressLine, localeAddress.city, localeAddress.postcode, localeAddress.country);

  });

  it('CYP-200 Verify that user can cancel editing shipping address', function () {
    if (brand == 'boohooman.com') {
      this.skip();
    }
    shippingPage.click.addNewAddressButton();
    shippingPage.click.cancelAddingNewAddressForRegisteredUser();
  });

  it('CYP-201 Verify that in "DELIVERY INFORMATION" user can add first name, last name, phone number and select country from drop down list', function () {
    if (brand == 'boohoomena.com') { // Country cannot be changed on Shipping page for this brand
      this.skip();
    }

    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
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

  it('CYP-202 Verify that ADDRESS LOOKUP field is displayed and functional', function () {
    if (brand == 'boohoomena.com') {
      this.skip(); // There is no Address Lookup for this brand
    }
    const secondaryAddress = Addresses.getAddressByLocale(locale,'secondaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.firstNameField('New');
    shippingPage.actions.lastNameField('Test');
    shippingPage.actions.selectCountry(secondaryAddress.country); // To select similar country from secondary addresses for other locale's assertion purpose
    shippingPage.actions.phoneNumberField(secondaryAddress.phone);

    cy.wait(3000);
    shippingPage.actions.addressLookupSelectFirstAddress(secondaryAddress.addressLine, secondaryAddress.city);
    shippingPage.assertions.assertNewAddedShippingAddress(secondaryAddress.addressLine, secondaryAddress.city, secondaryAddress.postcode);
    shippingPage.click.proceedToBilling();
    billingPage.assertions.assertNewShippingAddress(secondaryAddress.addressLine, secondaryAddress.city, secondaryAddress.postcode, secondaryAddress.country);
  });

  it('CYP-203 Verify that user is able to add address details manually', () => {
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
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
      if (brand == 'boohoomena.com') {
        shippingPage.actions.countyField(localeAddress.county);
      } else if (brand == 'karenmillen.com' && (locale == 'US' || locale == 'IE')) {
        shippingPage.actions.selectState(localeAddress.county);
      } else if (brand == 'boohooman.com' && locale == 'IE') {
        shippingPage.actions.selectState(localeAddress.county);
      } else if (brand == 'misspap.com' && (locale == 'IE' || locale == 'AU' || locale == 'US')) {
        shippingPage.actions.selectState(localeAddress.county);
      }
    } else {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      if (locale == 'US' || locale == 'AU' || locale == 'CA') {
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }
    shippingPage.click.proceedToBilling();
    cy.wait(2000);
    shippingPage.click.proceedToBillingVerification();
    billingPage.actions.waitPageToLoad();
    billingPage.assertions.assertNewShippingAddress(localeAddress.addressLine, localeAddress.city, localeAddress.postcode, localeAddress.country);
    
  });

  it('CYP-204 Verify that PREMIER can be added to the cart', function () {
    if ((brand == 'boohoomena.com' || brand == 'boohooman.com') || ((brand == 'nastygal.com') && (locale != 'UK' && locale != 'IE'))) { // No Premier/VIP for this brand/locale
      this.skip();
    }
    const includedLocales: Array<Locale> = ['UK', 'EU', 'IE', 'FR'];
    if (!includedLocales.includes(locale)) {
      this.skip(); // Other locales are not supported for Premier promotion
    }

    shippingPage.click.addPremierToCartFromShippingPage();

    const includededBlpBrands: Array<GroupBrands> = ['boohoo.com', 'dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk'];
    if (includededBlpBrands.includes(brand)) {
      const AddPremierToCartButton = (assertionText.AddPremierToCartButton[language]).toUpperCase();
      shippingPage.assertions.assertCartShippingPageContainsProduct(AddPremierToCartButton);
    } else if (brand == 'misspap.com' || brand == 'karenmillen.com') {
      this.skip(); // Redirecting to live site
    } else {
      shippingPage.assertions.assertShippingPageCartContainsVipProduct();
    }

    // Cleanup - remove Premier from Cart
    shippingPage.click.editCart();
    cartPage.click.removePremierFromCart();

  });

  it('CYP-205 Verify that "Find out more" link for Premier section expands and displays correct details', function () {
    if ((brand == 'boohoomena.com' || brand == 'misspap.com') || ((brand == 'nastygal.com' || brand == 'boohooman.com') && (locale != 'UK' && locale != 'IE'))) { // No Premier and no find out more link for MissPap
      this.skip();
    }
    const includedLocales: Array<Locale> = ['UK', 'IE', 'FR'];
    if (!includedLocales.includes(locale)) {
      this.skip(); // Other locales are not supported for Premier promotion
    }
    shippingPage.click.premierFindOutMoreLink();
    shippingPage.assertions.assertPremierSectionExpands();
    shippingPage.assertions.assertPremierDetailsText();
  });

  it('CYP-206 Verify that user is able to select standard shipping method', () => {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(locale, 'shippingMethod1');
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');

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
      if (brand == 'boohoomena.com') {
        shippingPage.actions.countyField(localeAddress.county);
      } else if (brand == 'karenmillen.com' && locale == 'US') {
        shippingPage.actions.selectState(localeAddress.county);
      } else if (brand == 'boohooman.com' && locale == 'IE') {
        shippingPage.actions.selectState(localeAddress.county);
      } else if (brand == 'misspap.com' && (locale == 'AU' || locale == 'US')) {
        shippingPage.actions.selectState(localeAddress.county);
      }

    } else {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      if (locale == 'US' || locale == 'AU' || locale == 'CA') {
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }
    if (brand == 'nastygal.com') {
      shippingPage.actions.selectShippingTab();
    }
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    shippingPage.click.proceedToBilling();
    if (locale == 'IE' || locale == 'US' || locale == 'AU') {
      shippingPage.click.proceedToBillingVerification();
    }
    billingPage.actions.waitPageToLoad();
    shippingPage.assertions.assertShippingMethodIsSelected(localeShippingMethod.shippingMethodName);
  });

  it('CYP-207 Verify that user is able to select 2nd shipping method', function () {
    const isBoohooLocaleWithoutSecondShipping: boolean = (brand == 'boohoo.com' && (locale == 'NO' || locale == 'FI') || locale == 'EU' );
    const isKMLocaleWithSelectState: boolean = (brand == 'karenmillen.com' && (locale == 'US' || locale == 'AU' || locale == 'IE'));
    const isMANLocaleWithSelectState: boolean = (brand == 'boohooman.com' && (locale == 'IE' || locale == 'US'));
    const isMisspapLocaleWithSelectState: boolean = (brand == 'misspap.com' && (locale == 'IE' || locale == 'US' || locale == 'AU'));

    if (isBoohooLocaleWithoutSecondShipping || brand == 'boohoomena.com') { // No 2nd shipping method for these
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
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
      if ( isMANLocaleWithSelectState|| isKMLocaleWithSelectState || isMisspapLocaleWithSelectState) {
        shippingPage.actions.selectState(localeAddress.county);
      } else if (brand == 'boohooman.com' && (locale != 'NL' && locale != 'DE' && locale != 'FR')) {
        shippingPage.actions.countyField(localeAddress.county);
      }
    } else {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      if (locale == 'US' || locale == 'AU' || locale == 'CA') {
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }
    cy.wait(5000);
    shippingPage.actions.selectSecondShippingMethod();
    shippingPage.actions.secondShippingMethodName().then((secondShippingMethodName) => {
      cy.log(secondShippingMethodName);
      if (brand == 'nastygal.com') {
        shippingPage.actions.selectShippingTab();
      }
      shippingPage.click.proceedToBilling();
      if (locale == 'IE' || (brand == 'boohooman.com' && locale == 'US') || (brand == 'karenmillen.com' && locale == 'US') || (brand == 'misspap.com' && (locale == 'US' || locale == 'AU'))) {
        shippingPage.click.proceedToBillingVerification();
      } else if (locale == 'IL') {
        cy.wait(2000); // Clicking the first time confirms the address, while clicking it a second time will navigate you to the billing page
        shippingPage.click.proceedToBilling();
      }
      billingPage.actions.waitPageToLoad();
      shippingPage.assertions.assertShippingMethodIsSelected(secondShippingMethodName);
    });
  });

  it('CYP-208 Verify that user can Edit cart from shipping page', () => {
    shippingPage.click.editCart();
    cartPage.assertions.assertTableWithProductIsVisible();
  });

  it('CYP-209 Verify that user can select PUDO location', function () {
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    if (locale != 'UK' || brand == 'boohooman.com') {
      this.skip();
    }
    shippingPage.click.clickAndCollectShipping();
    shippingPage.actions.selectCollectionShop(localeAddress.postcode).then(pudoAddress=>{
      shippingPage.assertions.assertShopisSelected(pudoAddress);
    });
  });

  it('CYP-210 Verify that user can enter valid credentials in w3w', function () {
    const excludedmisspapWithLocales: boolean = ((brand == 'misspap.com' || brand == 'nastygal.com'|| brand == 'boohoo.com' || brand == 'karenmillen.com') && (locale == 'IE' || locale == 'AU' || locale == 'US' || locale == 'EU' || locale == 'CA')) || (brand == 'boohooman.com' || brand == 'boohoomena.com' );
    if (excludedmisspapWithLocales) {
      this.skip();
    }
    const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
    shippingPage.click.addNewAddressButton();
    if (brand == 'boohoo.com' || brand == 'nastygal.com') {
      shippingPage.click.enterManuallyAddressDetails();
    }
    shippingPage.actions.selectW3WAddress(localeAddress.what3Words);
    shippingPage.assertions.assertW3WisSelected();
  });

  it('CYP-211 SG: Verify that guest user can add Thrift to the order', function () {
    if (brand == 'karenmillen.com' && locale == 'UK') {
      shippingPage.assertions.assertThriftSectionIsVisible();
      shippingPage.click.addThriftToCart();
      shippingPage.assertions.assertThriftBagIsAddedToTheCart();
    } else {
      this.skip();
    }
  });

  it('CYP-212 Verify is correct validation added if code is invalid for Registered user', function () {
    if (brand != 'boohoo.com') {
      this.skip();
    }
    shippingPage.actions.addPromoCode('InvalidPromoCode');
    shippingPage.assertions.assertInvalidPromoError();
  });

  it('CYP-213 Verify is correct validation added if code is empty for Registered user', function () {
    if (brand != 'boohoo.com') {
      this.skip();
    }
    shippingPage.actions.addNoPromoCode();
    shippingPage.assertions.assertEmptyPromoError();
  });

  it('CYP-214 Verify that "Help & info" link on header opens corresponding page', function () {
    if (brand == 'boohoo.com' || brand == 'nastygal.com') {
      this.skip(); // No help and info link on these brands
    }
    if (isMobileDeviceUsed) {
      cy.scrollTo('bottom');
    }
    shippingPage.click.helpAndInfoLink();
    shippingPage.assertions.assertCustomerServicePageIsOpened();
  });

  it('CYP-216 KMEU: Verify that user can select the standard shipping method for EU locale only', function () {
    if (brand == 'karenmillen.com' && locale == 'EU') {
      const CountriesEU: Array<string> = ['Germany', 'Spain', 'France', 'Netherlands'];
      shippingPage.click.addNewAddressButton();
      for (let i = 0; i < CountriesEU.length; i++) {
        shippingPage.actions.selectCountry(CountriesEU[i]);
        shippingPage.assertions.assertDeliverySection(`${CountriesEU[i]} Standard`);
      }
    } else {
      this.skip();
    }
  }
  );
});