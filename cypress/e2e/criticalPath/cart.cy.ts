import { isSiteGenesisBrand, siteGenesisBrands, isMobileDeviceUsed } from 'cypress/helpers/common';
import Navigate from 'cypress/helpers/navigate';
import CartPage from '../../pom/cart.page';
import CheckoutPage from '../../pom/checkoutLogin.page';
import HomePage from '../../pom/home.page';
import LoginPage from '../../pom/login.page';
import { brand, locale } from 'cypress/support/e2e';

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
    if (isSiteGenesisBrand) {
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
    if (locale == 'FR') {
      this.skip();
    }
    const internationalBrands: Array<GroupBrands> = ['boohoo.com', 'nastygal.com'];
    const internationalLocales: Array<Locale> = ['UK', 'FR', 'IE'];
    const internationalBrandsAndLocales: boolean = internationalBrands.includes(brand) && internationalLocales.includes(locale);

    const brandsUK: Array<GroupBrands> = ['dorothyperkins.com', 'burton.co.uk', 'wallis.co.uk', ...siteGenesisBrands];
    const brandsAndLocaleUK: boolean = brandsUK.includes(brand) && locale == 'UK';

    if (internationalBrandsAndLocales || brandsAndLocaleUK && brand != 'boohooman.com' && brand != 'coastfashion.com') {
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
    if (brand == 'boohoomena.com') {
      this.skip();
    } else {
      CartPage.assertions.assertPayPalCTAisVisible();
      CartPage.actions.openPayPalSandbox(); // 2 frames on SG
    }

  });
  it('Verify that Klarna CTA is displayed and functional', function () {
    const klarnaWithLocales: boolean = locale == 'UK' || locale == 'IE' || locale == 'AU' || locale == 'US';
    if (brand == 'boohooman.com' && locale == 'US') {
      this.skip();
    } else if (klarnaWithLocales) {
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
  it('Verify that user can add Thrift to the cart', function () {
    if (brand == 'karenmillen.com') {
      CartPage.assertions.assertThriftSectionIsVisible();
      CartPage.click.addThriftToCart();
      CartPage.assertions.assertThriftBagIsAddedToTheCart();
    }
  });

});

describe('Cart page for Registered user', function () {
  beforeEach(() => {

    HomePage.goto();
    cy.fixture('users').then((credentials: LoginCredentials) => {
      LoginPage.actions.login(credentials.username, credentials.password);
    });

    Navigate.toCartPage();
  });
  it('Verify that registered users are redirected to shipping page after clicking Checkout CTA', function () {
    if (['burton.co.uk', 'dorothyperkins.com', 'wallis.co.uk', 'nastygal.com', 'boohoo.com'].includes(brand) && !isMobileDeviceUsed) {
      cy.get('[class="b-button m-outline b-minicart-button"]').click({ force: true });
    }
    CartPage.click.proceedToCheckout();
    CheckoutPage.assertions.assertUserProceededToShippingPage();
  });
  it('Verify that user can add Thrift to the cart', function () {
    if (brand == 'karenmillen.com') {
      CartPage.assertions.assertThriftSectionIsVisible();
      CartPage.click.addThriftToCart();
      CartPage.assertions.assertThriftBagIsAddedToTheCart();
    }
  });
});