import orderConfirmationPage from '../../pom/orderConfirmationDev.page';
import billingPage from 'cypress/pom/billingDev.page';
import assertionText from '../../helpers/assertionText';
import Addresses from '../../helpers/addresses';
import { isSiteGenesisBrand, siteGenesisBrands } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import cards from '../../helpers/cards';
import { brand, language, locale, sku, url } from 'cypress/support/e2e';
import cartPage from 'cypress/pom/cart.page';
import pdpPage from 'cypress/pom/pdp.page';
import homePage from 'cypress/pom/home.page';
import myaccountPage from 'cypress/pom/myaccount.page';
import loginPage from 'cypress/pom/login.page';
import shippingPage from 'cypress/pom/shipping.page';

describe('Order confirmation page for guest user', function () {

  beforeEach (function () {
    if (brand == 'boohoomena.com') {
      this.skip(); // BoohooMena brand doesn't support guest users, only registered ones
    }
  });

  it('Verify that guest user can place order with Visa card and that order confirmation page is displayed correctly', function () {
    Navigate.toBillingPage('GuestUser');
    if (!isSiteGenesisBrand) {
      billingPage.actions.selectDate('23', assertionText.DOBmonth[language], '2001');
    }
    billingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.guest);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderValueIsDisplayed();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[language]);
      }

      const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();

      orderConfirmationPage.assertions.assertThatPasswordFieldForGuestUserIsDisplayed();
      orderConfirmationPage.assertions.assertThatConfirmPasswordFieldForGuestUserIsDisplayed();
    });

    const paymentMethod: PaymentMethod = 'CreditCard_Visa';
    generateFrontendArtefact(brand, paymentMethod);
  }); 

  
});

describe('Order confirmation page for REGISTERED user', function () {

  it('AMEX CC - REGISTERED USER', function () {
    homePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      loginPage.actions.login(credentials.username, credentials.password);
      myaccountPage.assertions.assertNameGreetingMessage(credentials.name);

      cy.wait(3000); 
    });

    homePage.actions.findItemUsingSKU(sku);
    pdpPage.actions.selectFirstAvailableSize();
    pdpPage.click.addToCart();
    pdpPage.click.addToCart();


    // Add second sku
    // homePage.actions.findItemUsingSKU(sku2);
    // pdpPage.actions.selectFirstAvailableSize();
    // pdpPage.click.addToCart();
    if (!isSiteGenesisBrand) {
      pdpPage.click.miniCartViewCartBtn();
    }
    if (isSiteGenesisBrand) {
      cy.wait(3000);
      homePage.click.cartIcon();
      
    }

    // if (siteGenesisBrands) {
    //  cartPage.actions.editCartQuantitySiteGenesis('2');
    // } else {
    // cartPage.actions.editCartQuantity('2');
    // }
    // homePage.actions.findItemUsingSKU(sku2);
    // pdpPage.actions.selectFirstAvailableSize();
    //pdpPage.click.addToCart();

    // NG pop up
    if (brand == 'nastygal.com') {

       cy.intercept(/newsletter/i, []); // Stops nastygal newsletter popup
    }

    cartPage.click.proceedToCheckout();
    
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
      }
    } else {
      if (brand == 'boohoo.com') {
        shippingPage.click.addNewAddress();
      }
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      if (locale == 'US' || locale == 'AU') {
        shippingPage.actions.selectState(localeAddress.county);
      }  
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }

    shippingPage.click.proceedToBilling();
    cy.wait(10000);

    
    // REGISTERED USER //
    
    if (brand=='boohoo.com' && locale== 'US') {
      billingPage.actions.selectCreditCardUS(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    } else {
      billingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    } 
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.username);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderTotalIsVisible();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[language]);
      }

      const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
    });

    const paymentMethod: PaymentMethod = 'CreditCard_Amex';
    generateFrontendArtefact(brand, paymentMethod);
  });


  it('VISA CC - REGISTERED USER', function () {

    homePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      loginPage.actions.login(credentials.username, credentials.password);
      myaccountPage.assertions.assertNameGreetingMessage(credentials.name);

      cy.wait(3000); 
    });

    homePage.actions.findItemUsingSKU(sku);
    pdpPage.actions.selectFirstAvailableSize();
    pdpPage.click.addToCart();
    pdpPage.click.addToCart();


    // Add second sku
    // homePage.actions.findItemUsingSKU(sku2);
    // pdpPage.actions.selectFirstAvailableSize();
    // pdpPage.click.addToCart();
    if (!isSiteGenesisBrand) {
      pdpPage.click.miniCartViewCartBtn();
    }
    if (isSiteGenesisBrand) {
      cy.wait(3000);
      homePage.click.cartIcon();
      
    }

    // if (siteGenesisBrands) {
    //  cartPage.actions.editCartQuantitySiteGenesis('2');
    // } else {
    // cartPage.actions.editCartQuantity('2');
    // }
    // homePage.actions.findItemUsingSKU(sku2);
    // pdpPage.actions.selectFirstAvailableSize();
    //pdpPage.click.addToCart();

    // NG pop up
    if (brand == 'nastygal.com') {

       cy.intercept(/newsletter/i, []); // Stops nastygal newsletter popup
    }

    cartPage.click.proceedToCheckout();
    
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
      }
    } else {
      if (brand == 'boohoo.com') {
        shippingPage.click.addNewAddress();
      }
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      if (locale == 'US' || locale == 'AU') {
        shippingPage.actions.selectState(localeAddress.county);
      }  
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }

    shippingPage.click.proceedToBilling();
    cy.wait(10000);
    
    if (brand=='boohoo.com' && locale== 'US') {
      billingPage.actions.selectCreditCardUS(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    } else {
      billingPage.actions.selectCreditCard(cards.visa.cardNo, cards.visa.owner, cards.visa.date, cards.visa.code);
    } 
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.username);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderTotalIsVisible();
      if (isSiteGenesisBrand) {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethodSiteGenesis[language]);
      } else {
        orderConfirmationPage.assertions.assertPaymentMethod(assertionText.assertPaymentMethod[language]);
      }

      const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
    });

    const paymentMethod: PaymentMethod = 'CreditCard_Visa';
    generateFrontendArtefact(brand, paymentMethod);
  });

  //var i = 0;
  //for (i = 0; i < 20 ; i++) {    +i

  it('PAYPAL REGISTERED USER', function () {

    homePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {    
      loginPage.actions.login(credentials.username, credentials.password);
      myaccountPage.assertions.assertNameGreetingMessage(credentials.name);

      cy.wait(3000); 
    });

    homePage.actions.findItemUsingSKU(sku);
    pdpPage.actions.selectFirstAvailableSize();
    pdpPage.click.addToCart();
    pdpPage.click.addToCart();

    // Add second sku
    // homePage.actions.findItemUsingSKU(sku2);
    // pdpPage.actions.selectFirstAvailableSize();
    // pdpPage.click.addToCart();
    if (!isSiteGenesisBrand) {
      pdpPage.click.miniCartViewCartBtn();
    }
    if (isSiteGenesisBrand) {
      homePage.click.cartIcon();
    }

     //if (siteGenesisBrands) {
    //  cartPage.actions.editCartQuantitySiteGenesis('2');
    // } else {
     //cartPage.actions.editCartQuantityE2E();
     //}

    // NG pop up
    if (brand == 'nastygal.com') {

       cy.intercept(/newsletter/i, []); // Stops nastygal newsletter popup
    }

    cartPage.click.proceedToCheckout();
    
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
      }
    } else {
      if (brand == 'boohoo.com') {
        shippingPage.click.addNewAddress();
      }
      shippingPage.click.enterManuallyAddressDetails();
      shippingPage.actions.adressLine1(localeAddress.addressLine);
      shippingPage.actions.cityField(localeAddress.city);
      if (locale == 'US' || locale == 'AU') {
        shippingPage.actions.selectState(localeAddress.county);
      }  
      shippingPage.actions.postcodeField(localeAddress.postcode);
    }

    shippingPage.click.proceedToBilling();
    cy.wait(10000);

    billingPage.actions.selectPayPal();
    billingPage.assertions.assertOrderConfirmationPageIsDisplayed(); // Not working on Site Genesis

    billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      orderConfirmationPage.assertions.assertEmailIsDisplayed(credentials.username);
      orderConfirmationPage.assertions.assertOrderNumberIsDisplayed();
      orderConfirmationPage.assertions.assertOrderTotalIsVisible();

      const localeAddress = Addresses.getAddressByLocale(locale, 'primaryAddress');
      orderConfirmationPage.assertions.assertShippingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);
      orderConfirmationPage.assertions.assertShippingMethodIsDisplayed();
      orderConfirmationPage.assertions.assertBillingAddressDetails(localeAddress.firstName, localeAddress.lastName, localeAddress.addressLine);

    const paymentMethod: PaymentMethod = 'PayPal';
    generateFrontendArtefact(brand, paymentMethod);
  });

  });

  it('Verify that guest user can place order using Klarna', function () {
    if (locale === 'UK' || locale === 'IE' || locale === 'AU') {
      Navigate.toBillingPage('RegisteredUser');
      billingPage.actions.selectKlarna();
      billingPage.assertions.assertOrderConfirmationPageIsDisplayed();
    } else {
      this.skip();
    }

    const paymentMethod: PaymentMethod = 'Klarna';
    generateFrontendArtefact(brand, paymentMethod);
  });
  }
);

// Method for generating .json artefact on Order Confirmation page for testing Business Manager.
function generateFrontendArtefact (brand: GroupBrands, paymentMethod: PaymentMethod) {

  cy.url({timeout: 60000}).should('include', 'confirm');
  
  if (isSiteGenesisBrand) {
    cy.get('#main > div > div.order-confirmation-details > div > div.orderdetails-wrapper > div.orderdetails-column.order-information > div.orderdetails-content > div.orderdetails-header-number > span.value').invoke('text').then(text => text.trim()).as('orderNumber');
    cy.get('#main > div > div.order-confirmation-details > div > div.orderdetails-wrapper > div.orderdetails-column.order-payment-summary > div.orderdetails-content > div > div > table > tbody > tr.order-total > td.order-value').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
    cy.get('div.orderdetails-column.order-shipping-method.two-up > .orderdetails-content .value').invoke('text').then(text => text.trim()).as('deliveryMethod');
    cy.get('.sku > span:nth-child(2)').invoke('text').then(text => text.trim()).as('fullSku');
  } else {
    cy.get('[data-tau="order_number"], .orderdetails-header-number .value').invoke('text').then(text => text.trim()).as('orderNumber');
    cy.get('.m-total, .order-value').invoke('text').then(text => text.trim().substring(1)).as('orderValue');
    cy.get('.b-summary_shipping-name').invoke('text').then(text => text.trim()).as('deliveryMethod');
    cy.get('.b-minicart_product-inner').invoke('attr', 'data-tau-product-id').as('fullSku');
  }
  cy.get('.b-confirmation_header-email, div.confirmation-message > div > div.confirmation-message-info > span').invoke('text').then(text => text.trim().split('\n')[0]).as('orderEmail')
    .then(function () {

      const testArtefactObject: TestArtefact = {
        orderNumber: this.orderNumber,
        orderTotal: this.orderValue,
        orderEmail: this.orderEmail,
        paymentMethod: paymentMethod,
        groupBrand: brand,
        deliveryMethod: this.deliveryMethod,
        items: [{
          sku: this.fullSku,
          quantity: 1
        }],
        testScenario: 'CompleteOrder',
        locale: locale,
        url: url,
        timestamp: Date.now()
      };

      const folder = 'cypress/artefacts_frontend/orderCreation/';
      const brandName = brand.split('.')[0]; // Get first part of a brand: boohoo.com => boohoo
      cy.createArtefact(testArtefactObject, folder, brandName, paymentMethod.toLowerCase());
    });
}