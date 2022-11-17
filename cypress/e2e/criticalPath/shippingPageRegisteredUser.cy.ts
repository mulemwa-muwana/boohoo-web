import HomePage from '../../pom/home.page';
import pdpPage from '../../pom/pdp.page';
import cartPage from '../../pom/cart.page';
import shippingPage from '../../pom/shipping.page';
import checkoutPage from '../../pom/checkoutLogin.page';
import assertionText from '../../helpers/assertionText';
import shippingMethods from '../../helpers/shippingMethods';
import Addresses from '../../helpers/addresses';
import billingPage from 'cypress/pom/billing.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Shipping Page Registered user tests', function () {
  
  beforeEach (()=>{
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(variables.sku);
    cy.wait(3000);
    pdpPage.actions.selectSize();
    cy.wait(3000);
    pdpPage.click.addToCart();
    cy.wait(3000);
    HomePage.click.cartIcon();
    cy.wait(3000);
    if (variables.brand != 'coastfashion.com' && variables.brand != 'oasis-stores.com') {
      pdpPage.click.miniCartViewCartBtn();
    }
    cartPage.click.proceedToCheckout();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      checkoutPage.actions.userEmailField(credentials.username);

      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'misspap.com') {
        checkoutPage.click.continueAsRegisteredUser();
      }
      checkoutPage.actions.passwordField(credentials.password);
      checkoutPage.click.continueAsRegisteredUser();
    });
  });
  
  if (variables.brand != 'coastfashion.com' && variables.brand != 'oasis-stores.com'  && variables.brand != 'misspap.com') {
    it('Verify that promo code field is dispayed', () => {
      shippingPage.assertions.assertPromoCodeFieldIsDisplayed();
    });
  }
  
  it('Verify that in "DELIVERY INFORMATION"  first name, last name and telephone number are mandatory', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'secondaryAddress');
    shippingPage.click.addNewAddressButton();
    if (variables.locale == 'AU') {
      shippingPage.actions.selectCountry(localeAddress.countryCode); // Can't select
    } else {
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    cy.wait(5000);
    shippingPage.click.enterManuallyAddressDetails();
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'boohoo.com') {
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcode[variables.language]);
    } else {
      shippingPage.assertions.assertPostCodeIsMandatory(assertionText.ShippingMandatoryFieldsFnameLnamePostcodeArcadia[variables.language]);
    }
  });

  it('Verify that user can proceed to billing with one of the saved addresees', () => {
    if (variables.locale != 'IE') {
      shippingPage.click.proceedToBilling();
      if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'misspap.com') {
        shippingPage.click.proceedToBillingVerification();
      }
      cy.wait(4000);
      shippingPage.assertions.assertUserProceededToBillingPage();
    }   
  });

  it('Verify that user can edit saved shipping address', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'secondaryAddress');
    shippingPage.click.editAddress();
    shippingPage.actions.selectCountry(localeAddress.country);
    cy.wait(5000);
    if (variables.brand == 'boohoo.com' || variables.brand == 'nastygal.com') {
      shippingPage.click.addNewAddress();
    }
    shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
    shippingPage.actions.clearCityFieldAndAddNewOne(localeAddress.city);
    shippingPage.actions.clearPostcodeFieldAndAddNewOne(localeAddress.postcode);
    if (variables.locale == 'US') {
      shippingPage.actions.selectState(localeAddress.county);
    }
    shippingPage.actions.clearPhoneNumberFieldAndAddNewOne(localeAddress.phone);
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
      shippingPage.click.proceedToBillingVerification();
    } 
    billingPage.assertions.assertBillingPageIsLoaded();
    billingPage.assertions.assertNewShippingAddress(localeAddress.addrline1);
  });

  it('Verify that user can cancel editing shipping address', () => {
    shippingPage.click.addNewAddressButton();
    shippingPage.click.cancelAddingNewAddressForRegisteredUser();
  });

  it('Verify that Add new address button allows user to add address details', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    if (variables.locale == 'IE') {
      shippingPage.actions.selectCountry(localeAddress.country);
    }
    shippingPage.assertions.assertFirstNameFieldIsPopulated(localeAddress.firstName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add first name', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add last name', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.lastNameField(localeAddress.lastName);
    shippingPage.assertions.assertLastNameFieldIsPopulated(localeAddress.lastName);
  });

  it('Verify that in "DELIVERY INFORMATION" user can select country from drop down list', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.selectCountry(localeAddress.country);
    shippingPage.assertions.assertCountryIsSelected(localeAddress.countryCode);
  });

  it('Verify that in "DELIVERY INFORMATION" user can add phone number', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
    shippingPage.click.addNewAddressButton();
    shippingPage.actions.phoneNumberField(localeAddress.phone);
    shippingPage.assertions.assertPhoneNumberFieldIsPopulated(localeAddress.phone);
  });

  // If (variables.brand != 'coastfashion.com' && variables.brand != 'oasis-stores.com') {
  it('Verify that ADDRESS LOOKUP field is dispayed and mandatory', () => {
    shippingPage.click.addNewAddressButton();
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'boohoo.com') {
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatory[variables.language]);
    } else {
      shippingPage.assertions.assertAddressDetailsAreMandatory(assertionText.assertShippingAddressIsMandatoryArkadia[variables.language]);
    }
  });

  // }

  // If (variables.brand != 'coastfashion.com' && variables.brand != 'oasis-stores.com') {
  it('Verify that "Enter manually" button allows user to enter address details', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
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
    shippingPage.assertions.assertManualAddressFieldsAreDispayed();
  });

  // }

  it('Verify that user is able to add address details manually', () => {
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
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
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
      if (variables.locale == 'AU') {
        shippingPage.actions.stateField(localeAddress.county);
      }
    } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'misspap.com') {
      shippingPage.actions.adressLine1(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
    } else {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }   
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com' || variables.brand == 'misspap.com') {
      shippingPage.click.proceedToBillingVerification();
    } 
    billingPage.assertions.assertBillingPageIsLoaded();
    billingPage.assertions.assertNewShippingAddress(localeAddress.addrline1);
  });

  it('Verify that PREMIER can be added to the cart', () => {
    if (variables.brand == 'boohoo.com') {
      shippingPage.click.addPremierToCartFromShippingPage();
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.Premier[variables.language]);
    } else if (variables.brand == 'nastygal.com' && variables.locale == 'UK') {
      shippingPage.click.addPremierToCartFromShippingPage();
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.PremierNG[variables.language]);
    } else if (variables.brand == 'coastfashion.com'|| variables.brand != 'oasis-stores.com') {
      shippingPage.click.addPremierToCartFromShippingPage();
      shippingPage.assertions.assertCartShippingPageContainsProduct(assertionText.PremierSiteGenesis[variables.language]);
    }
  });

  it('Verify that user is able to select standard shipping method', () => {
    const localeShippingMethod = shippingMethods.getShippingMethodByLocale(variables.locale, 'shippingMethod1');
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
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
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
      if (variables.locale == 'AU') {
        shippingPage.actions.stateField(localeAddress.county);
      }
    } else if (variables.brand == 'coastfashion.com' || variables.brand != 'oasis-stores.com') {
      shippingPage.actions.adressLine1(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
    } else {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
    } 
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    shippingPage.click.proceedToBilling();
    billingPage.assertions.assertBillingPageIsLoaded();
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
    const localeAddress = Addresses.getAddressByLocale(variables.locale,'primaryAddress');
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
        shippingPage.actions.selectState(localeAddress.county);
      }
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
      if (variables.locale == 'AU') {
        shippingPage.actions.stateField(localeAddress.county);
      }
    } else if (variables.brand == 'burton.co.uk' || variables.brand == 'dorothyperkins.com' || variables.brand == 'wallis.co.uk' && variables.locale != 'EU') {
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.clearAdressLine1AndAddNewOne(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
      shippingPage.actions.postcodeField(localeAddress.postcode);
    } else if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
      shippingPage.actions.adressLine1(localeAddress.addrline1);
      shippingPage.actions.cityField(localeAddress.city);
    
      shippingPage.actions.postcodeField(localeAddress.postcode);
      shippingPage.actions.phoneNumberField(localeAddress.phone);
    }
    shippingPage.actions.selectShippingMethod(localeShippingMethod.shippingMethodName);
    shippingPage.click.proceedToBilling();
    if (variables.brand == 'coastfashion.com' || variables.brand == 'oasis-stores.com') {
      shippingPage.click.proceedToBillingVerification();
    }
    billingPage.assertions.assertBillingPageIsLoaded();
    shippingPage.assertions.assertUserProceededToBillingPage();
  });

});

