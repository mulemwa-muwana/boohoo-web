import { isSiteGenesisBrand, siteGenesisBrands } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';

const variables = Cypress.env() as EnvironmentVariables;

describe('Cart basic functionality for guest user', function () {
  
  beforeEach(() => {
    Navigate.toCartPageUsingSession();
  });

  it('Verify the presence of table with all products added to cart and that product name, image color/size/qty and price are visible', function () {
    CartPage.assertions.assertTableWithProductIsVisible();
    CartPage.assertions.assertProductImageIsDisplayed();
    CartPage.assertions.assertProductTitleIsVisible();
    CartPage.assertions.assertProductDetailsAreVisible();
    CartPage.assertions.assertPriceAndSubtotalAreVisible();

  });
  it('Verify that user can update quantity of products', function () {
    if (isSiteGenesisBrand ) {
      CartPage.actions.editCartQuantitySiteGenesis('3');
      CartPage.assertions.assertQuantityIsDisplayed('3');
      CartPage.actions.editCartQuantitySiteGenesis('1');
    } else {
      CartPage.actions.editCartQuantity('3');
      CartPage.assertions.assertQuantityIsDisplayed('3');
      CartPage.actions.editCartQuantity('1');
    }
  });

  it('Verify that Get Premier slots are visible if Premier is not in the bag', function () {
    const internationalBrands: Array<GroupBrands> = ['boohoo.com', 'nastygal.com'];
    const internationalLocales: Array<Locale> = ['UK', 'FR', 'IE'];
    const internationalBrandsAndLocales: boolean = internationalBrands.includes(variables.brand) && internationalLocales.includes(variables.locale);

    const brandsUK: Array<GroupBrands> = ['dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk', ...siteGenesisBrands];
    const brandsAndLocaleUK: boolean = brandsUK.includes(variables.brand) && variables.locale == 'UK';

    if (internationalBrandsAndLocales || brandsAndLocaleUK && variables.brand != 'boohooman.com'&& variables.brand != 'coastfashion.com') {
      CartPage.assertions.assertPremierSlotsAreVisible();
    } else {
      this.skip();
    }
  });
  
  it('Verify that guest users are redirected to login page after clicking Checkout CTA', function () {
    cy.wait(5000);
    CartPage.click.proceedToCheckout();
    CheckoutPage.assertions.assertGuestCheckoutEmail();
  });
  it('Verify that PayPal CTA is displayed and functional', function () {
    if (variables.brand == 'boohoomena.com') {
      this.skip();
    } else {
      CartPage.assertions.assertPayPalCTAisVisible();
      CartPage.actions.openPayPalSandbox(); // 2 frames on SG
    }
 
  });
  it('Verify that Klarna CTA is displayed and functional', function () {
    const brandsUK: Array<GroupBrands> = ['wallis.co.uk', 'dorothyperkins.com', 'burton.co.uk'];
    const brandsAndLocaleUK: boolean = brandsUK.includes(variables.brand) && variables.locale == 'UK';
    if (['boohoo.com', 'burton.co.uk', 'nastygal.com', ...siteGenesisBrands].includes(variables.brand) && ['UK', 'IE', 'AU'].includes(variables.locale) && variables.brand != 'misspap.com' || brandsAndLocaleUK ) {
      CartPage.assertions.assertKlarnaCTAisVisible();
      CartPage.actions.openKlarnaSandbox(); 
    } else {
      this.skip();
    }
  });
  it('Verify that user can remove product from cart', function () {
    CartPage.click.clearCart();
    CartPage.assertions.assertCartIsEmpty();
  });

});

describe('Cart page for Registered user', function () {
  beforeEach(() => {

    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login(credentials.username, credentials.password);
      cy.wait(5000);
    });

    Navigate.toCartPage();
  });
  it('Verify that registered users are redirected to shipping page after clicking Checkout CTA', function () {
    if (['burton.co.uk', 'dorothyperkins.com', 'wallis.co.uk'].includes(variables.brand) ) {
      cy.get('[class="b-button m-outline b-minicart-button"]').click({force: true});
    }
    CartPage.click.proceedToCheckout();
    CheckoutPage.assertions.assertUserProceededToShippingPage(); 
  });
});