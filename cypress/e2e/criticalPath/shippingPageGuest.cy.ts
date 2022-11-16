import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import checkoutPage from '../../pom/checkoutLogin.page';
import shippingPage from '../../pom/shipping.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import Addresses from '../../helpers/addresses';
import billingPage from 'cypress/pom/billing.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Shipping Page Guest user tests', function () {
  
  before(() => {
    cy.fixture('users').then((credentials: LoginCredentials) => {
      cy.wrap(credentials.guest).as('guestEmail');
    });
  });

  beforeEach(function () {
    
    // Const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    cy.wait(3000);
    pdpPage.actions.selectSize();
    cy.wait(3000);
    pdpPage.click.addToCart();
    cy.wait(3000);
    HomePage.click.cartIcon();
    cy.wait(3000);
    if (variables.brand != 'coastfashion.com') {
      pdpPage.click.miniCartViewCartBtn();
    }
    cartPage.click.proceedToCheckout();
    checkoutPage.actions.guestCheckoutEmail(this.guestEmail);
    checkoutPage.click.continueAsGuestBtn();
  });

  if (variables.brand != 'coastfashion.com') {
    it('Verify that promo code field is dispayed', function () {
      shippingPage.assertions.assertPromoCodeFieldIsDisplayed();
    });
  }

  it('Verify that in Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'secondaryAddress');
    if (variables.brand != 'coastfashion.com') {
      shippingPage.click.addNewAddressButton();
    }
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    
    if (variables.brand == 'burton.co.uk' || variables.brand == 'wallis.co.uk' || variables.brand == 'dorothyperkins.com') {
      shippingPage.click.enterManuallyAddressDetails();
    }   
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'boohoo.com' && variables.locale == 'UK') {
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
    }
    shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryPostcodeArcadia[variables.language]);    
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.assertions.assertFirstNameFieldIsPopulated(localeAddress.firstName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add last name', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can select country from drop down list', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.assertions.assertCountryIsSelected(localeAddress.countryCode);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add phone number', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'primaryAddress');
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.assertions.assertPhoneNumberFieldIsPopulated(localeAddress.phone);
  });

  if (variables.brand != 'coastfashion.com') {
    it('Verify that ADDRESS LOOKUP field is dispayed and mandatory', function () {
      const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
      if (variables.locale == 'EU') {
        shippingPage.actions.firstNameField(localeAddress.firstName);
        shippingPage.actions.lastNameField(localeAddress.lastName);
        shippingPage.actions.selectCountry(localeAddress.country);
      }
      shippingPage.assertions.assertPostcodeLookupIsVisible();
    });
  }

  if (variables.brand != 'coastfashion.com') {
    it('Verify that "Enter manually" button allows guest to enter address details', function () {
      const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
      if (variables.locale == 'EU') {
        shippingPage.actions.firstNameField(localeAddress.firstName);
        shippingPage.actions.lastNameField(localeAddress.lastName);
        shippingPage.actions.selectCountry(localeAddress.country);
      }
      shippingPage.click.addAddressManually();
      shippingPage.assertions.assertManualAddressFieldsAreDispayed();
    });
  }

  it('Verify that user is able to add address details manually', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    if (variables.brand == 'boohoo.com') {
      shippingPage.click.addNewAddress();
    }
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.enterManuallyAddressDetails();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (variables.brand == 'coastfashion.com') {
      shippingPage.actions.selectDate('23', 'May', '2001');
      shippingPage.actions.confirmEmail(this.guestEmail);
    }
    shippingPage.click.proceedToBilling();
  });

  it('Verify that user is able to select standard shipping method', function () {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'secondaryAddress');
    if (variables.brand == 'boohoo.com') {
      shippingPage.click.addNewAddress();
    }
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    shippingPage.click.enterManuallyAddressDetails();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (variables.brand == 'coastfashion.com') {
      shippingPage.actions.selectDate('23', 'May', '2001');
      shippingPage.actions.confirmEmail(this.guestEmail);
    }
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    shippingPage.click.proceedToBilling();
  });

  it.skip('Verify that user is able to select DPD shipping method', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale, 'secondaryAddress');
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod2');
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.addAddressManually();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.adressLine2(localeAddress.addrline2);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (variables.brand == 'coastfashion.com') {
      shippingPage.actions.selectDate('23', 'May', '2001');
      shippingPage.actions.confirmEmail(this.guestEmail);
    }
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    shippingPage.click.proceedToBilling();
  });

  it('Verify that PUDO locations are dispayed', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    if (variables.brand == 'boohoo.com') {
      shippingPage.click.addNewAddress();
    }
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.click.enterManuallyAddressDetails();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.click.OpenPUDOlocations();

    // PUDO OPTIONS ARE MISSING FOR GUEST, need to check with Trupti
  });

  it('Verify that order total is displayed', function () {
    shippingPage.assertions.assertOrderTotalIsDisplayed();
  });

  it('Verify that guest user can Edit cart from shipping page', function () {
    shippingPage.click.editCart();
    cartPage.assertions.assertTableWithProductIsVisible();
  });

  it('Verify that user is able to proceed to billing page after adding fname, lname, country, phone number and select shipping method', function () {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    if (variables.brand == 'boohoo.com') {
      shippingPage.click.addNewAddress();
    }
    shippingPage.actions.firstNameField(localeAddress.firstName);
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    shippingPage.click.enterManuallyAddressDetails();
    shippingPage.actions.adressLine1(localeAddress.addrline1);
    shippingPage.actions.cityField(localeAddress.city);
    shippingPage.actions.postcodeField(localeAddress.postcode);
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    if (variables.brand == 'coastfashion.com') {
      shippingPage.actions.selectDate('23', 'May', '2001');
      shippingPage.actions.confirmEmail(this.guestEmail);
    }
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'coastfashion.com') {
      shippingPage.click.proceedToBillingAddressVerification();
      shippingPage.assertions.assertUserProceededToBillingPage();
    } else {
      shippingPage.assertions.assertGuestEmailFieldDisplayed();
      shippingPage.assertions.assertUserProceededToBillingPage();
    }
  });

});