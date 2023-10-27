import PdpPage from '../../pom/pdp.page';
import HomePage from '../../pom/home.page';
import assertionText from '../../helpers/assertionText';
import pdpPage from '../../pom/pdp.page';
import LoginPage from 'cypress/pom/login.page';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import { sku, brand, language, locale } from 'cypress/support/e2e';
import cartPage from 'cypress/pom/cart.page';
import homePage from '../../pom/home.page';

describe('Product Details Page tests', function () {

  beforeEach (()=>{
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(sku);
  });

  it('TC01 Verify that Product name, price and code is showing',function () {
    const SKU = sku.replace(/^#/g, '');
    PdpPage.assertions.assertProductNameIsDisplayed();
    PdpPage.assertions.assertProductPriceIsDisplayed();
    PdpPage.assertions.assertProductCodeIsDisplayed(SKU);
    // We need to instal plugin for continuing after failed assertation just in case
    if (isSiteGenesisBrand) {
      PdpPage.assertions.assertImageIsDisplayed('.thumb-image');
    } else {
      PdpPage.assertions.assertImageIsDisplayed('#product-image-0');
      PdpPage.assertions.assertImageIsDisplayed('#product-image-1');
      PdpPage.assertions.assertImageIsDisplayed('#product-image-2');
    }
    // PdpPage.assertions.assertImageIsDisplayed('#product-image-3');  some products have only 3 images
  });

  it('TC02 Verify that colour swatches are displayed',function () {
    PdpPage.assertions.assertColorSwatchesAreVisible();
  });
  it('TC03 Verify that it is possible to select a size when available', function () {
    PdpPage.actions.selectFirstAvailableSize();
    PdpPage.click.addToCart();
  });
  it('TC04 Verify if size is not selected user cannot add product to a bag', function () {
    if (brand == 'boohoo.com') {
      PdpPage.assertions.assertAddToCartBtnIsNotAvailable(assertionText.selectSize[language]);
    } else {
      PdpPage.assertions.assertAddToCartBtnDisabled();
    }
  });
  it('TC05 Verify when selecting product and click on CTA "Add to cart" the mini cart is displayed', function () {
    PdpPage.actions.selectColorByIndex(0);
    PdpPage.actions.selectFirstAvailableSize();
    PdpPage.click.addToCart();
    PdpPage.assertions.assertMiniCartIsDisplayed();
  });
  it('TC06 Verify that save for later (heart icon) is functional when selected', function () {
    PdpPage.actions.selectFirstAvailableSize();
    PdpPage.click.addToWishList();

    if (brand == 'boohoo.com') {
      PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAdded[language]);
    } else if (brand == 'coastfashion.com' || brand == 'oasis-stores.com' || brand == 'warehousefashion.com' || brand == 'karenmillen.com' || brand == 'boohooman.com' || brand == 'boohoomena.com') {
      LoginPage.assertions.assertWishlistLoginTitleIsPresent(assertionText.WishlistLoginTitle[language]);
    } else if (brand == 'misspap.com') {
      LoginPage.assertions.assertWishlistLoginTitleIsPresent(assertionText.WishlistLoginTitleMisspap[language]);
    } else {
      PdpPage.assertions.assertProductIsAddedToWishlist(assertionText.WishlistItemsAddedArkadia[language]);
    }
  });
  it('TC07 Verify that Style Notes, Shipping & Return Info are displayed when configured', function () {
    PdpPage.assertions.assertProductDescriptionIsPresent();
    if (brand == 'boohoo.com' || brand == 'coastfashion.com' || brand == 'warehousefashion.com') {
      PdpPage.click.shippingInfoButton();
      PdpPage.assertions.assertDeliveryInfoIsDisplayed();
    }
    if (brand == 'dorothyperkins.com' || brand == 'burton.co.uk' || brand == 'wallis.co.uk'||brand == 'oasis-stores.com') {
      pdpPage.assertions.assertDeliveryOptionsAreDisplayed();
    } else {
      PdpPage.assertions.assertReturnInfoIsDisplayed();
    }
    // We need to instal plugin for continuing after failed assertation just in case
  });
  it('TC08 Verify that recomendation are displayed in COMPLETE THE LOOK category', function () {
    if (brand == 'boohoo.com') {
      PdpPage.assertions.assertCompleteLookDisplayed(assertionText.completeTheLook[language]);
    } else {
      this.skip();
    }
  });

  it('Verify that PREMIER banner is visible and can be added to the basket', function () {
    if ((brand == 'karenmillen.com'&& (locale == 'US' || locale == 'IE' || locale == 'EU')) || (brand == 'boohooman.com') && locale == 'UK') {
      if (brand == 'karenmillen.com') {
        PdpPage.click.deliveryInfo();
        PdpPage.click.premierLink(assertionText.Premier[language]);
      }
      PdpPage.assertions.assertPremierBannerIsVisible();
      PdpPage.click.addToCartPremier();
      homePage.click.cartIcon();
      cartPage.assertions.assertSelectedProductIsAddedToTheCart(assertionText.Premier[language]);
    } else {
      this.skip();
    }
  });
  it('Verify that PREMIER link is visible and can be opened from Delivery info accordian', function () {
    if (brand == 'karenmillen.com' && (locale == 'US' || locale == 'IE' || locale == 'EU')) {
      PdpPage.click.deliveryInfo();
      PdpPage.click.premierLink(assertionText.Premier[language]);
      PdpPage.assertions.assertLinkPremierIsLinked(assertionText.Premier[language]);
    } else {
      this.skip();
    }
  });
  it('Verify that "Here" link below shipping table is visible and can be opened from Delivery info accordia', function () {
    const BMANhereLinkFromDelivery: boolean = brand == 'boohooman.com' && (locale == 'UK' || locale == 'DE' || locale == 'EU' || locale == 'FR' || locale == 'IE' || locale == 'NL' || locale == 'US');
    const MPhereLinkFromDelivery: boolean = brand == 'misspap.com' && (locale == 'UK' || locale == 'AU' || locale == 'IE');
    if (brand == 'karenmillen.com' || BMANhereLinkFromDelivery || MPhereLinkFromDelivery) {
      PdpPage.click.deliveryInfo();
      PdpPage.assertions.assertDeliveryHereLinkIsDisplayedAndLinked(assertionText.clickHereLink[language]);
    } else {
      this.skip();
    }
  });
  it('Verify that "Here" link below returns details is visible and can be opened from Returns info accordian', function () {
    const BMANhereLinkFromReturns: boolean = brand == 'boohooman.com' && (locale == 'UK' || locale == 'EU' || locale == 'IE' || locale == 'US');
    const MPhereLinkFromReturns: boolean = brand == 'misspap.com' && (locale == 'UK' || locale == 'AU' || locale == 'IE');
    if (brand == 'karenmillen.com' || BMANhereLinkFromReturns || MPhereLinkFromReturns) {
      PdpPage.click.returnsInfo();
      PdpPage.assertions.assertReturnsHereLinkIsDisplayedAndLinked(assertionText.clickHereLink[language]);
    } else {
      this.skip();
    }
  });
  it('Verify that link "More info" for PayPal below Add to Cart section opens corresponsing page', function () {
    const includedBoohooWithLocales: boolean = brand == 'boohoo.com' && (locale == 'UK' || locale == 'DE' || locale == 'US' || locale == 'FR' || locale == 'AU' || locale == 'CA' || locale == 'IT' || locale == 'ES');
    const includedNastyGalWithLocales: boolean = brand == 'nastygal.com' && (locale == 'US' || locale == 'UK' || locale == 'AU' || locale == 'FR');
    const includedKarenMillenWithLocales: boolean = brand == 'karenmillen.com' && (locale == 'UK' || locale == 'US' || locale == 'AU');
    const includedMisspapWithLocales: boolean = brand == 'misspap.com' && (locale == 'UK' || locale == 'US' || locale == 'AU');
    if (includedBoohooWithLocales || includedNastyGalWithLocales || includedKarenMillenWithLocales || includedMisspapWithLocales) {
      pdpPage.click.paypalMoreInfo();
      pdpPage.assertions.assertPaypalRelatedPageIsDisplayed();
    } else {
      this.skip();
    }
  });

  it('Verify that link "More info" for Clearpay or Afterpay below Add to Cart section opens corresponsing page', function () {
    const includedBoohooWithLocales: boolean = brand == 'boohoo.com' && (locale == 'UK' || locale == 'US' || locale == 'AU' || locale == 'NZ' || locale == 'CA');
    const includedNastyGalWithLocales: boolean = brand == 'nastygal.com' && (locale == 'US' || locale == 'UK' || locale == 'AU' || locale == 'CA');
    const includedKarenMillenWithLocales: boolean = brand == 'karenmillen.com' && (locale == 'UK' || locale == 'US' || locale == 'AU');
    const includedMisspapWithLocales: boolean = brand == 'misspap.com' && (locale == 'UK' || locale == 'US' || locale == 'AU');
    const afterPayWithLocales: boolean = locale == 'US' || locale == 'AU' || locale == 'NZ' || locale == 'CA';
    if (includedBoohooWithLocales || includedNastyGalWithLocales || includedKarenMillenWithLocales || includedMisspapWithLocales) {
      if (afterPayWithLocales) {
        pdpPage.click.afterPayMoreInfo();
        pdpPage.assertions.assertAfterPayRelatedPageIsDisplayed();
      } else {
        pdpPage.click.clearPayMoreInfo();
        pdpPage.assertions.assertClearPayRelatedPageIsDisplayed();
      }
    } else {
      this.skip();
    }
  });

  it('Verify that link "More info" for Klarna below Add to Cart section opens corresponsing page', function () {
    const includedBoohooWithLocales: boolean = brand == 'boohoo.com' && (locale == 'UK' || locale == 'DE' || locale == 'US' || locale == 'FR' || locale == 'AU' || locale == 'CA' || locale == 'IT' || locale == 'ES');
    const includedNastyGalWithLocales: boolean = brand == 'nastygal.com' && (locale == 'US' || locale == 'IE' || locale == 'UK' || locale == 'AU' || locale == 'FR');
    const includedKarenMillenWithLocales: boolean = brand == 'karenmillen.com' && (locale == 'UK' || locale == 'US' || locale == 'EU' || locale == 'IE' || locale == 'AU');
    const includedMisspapWithLocales: boolean = brand == 'misspap.com' && (locale == 'UK' || locale == 'IE' || locale == 'US' || locale == 'AU');
    if (includedBoohooWithLocales || includedNastyGalWithLocales || includedKarenMillenWithLocales || includedMisspapWithLocales) {
      pdpPage.click.klarnaMoreInfo();
      pdpPage.assertions.assertKlarnaRelatedPageIsDisplayed();
    } else {
      this.skip();
    }
  });
});