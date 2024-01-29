import HomePage from 'cypress/pom/home.page';
import PdpPage from 'cypress/pom/pdp.page';
import { sku, brand, locale } from 'cypress/support/e2e';

describe('Product Details Page tests', function () {

  beforeEach (()=>{   
    HomePage.goto();
    HomePage.actions.findItemUsingSKU(sku);
  });  

  it('Verify that Size guide link opens tab with according to category size chart', function () {
    if ((brand == 'boohoo.com' || brand == 'nastygal.com' || brand == 'karenmillen.com') && locale == 'UK') {
      cy.wait(2000);
      PdpPage.click.sizeGuidePdp();
      cy.wait(2000);
      PdpPage.assertions.assertSizeGuidePdpIsDisplayed();
    } else {
      this.skip();
    }
  });

  it('Verify that in size guide tab user can switch from INCHES to CMS or from CMS to INCHES', function () {
    if ((brand == 'boohoo.com' || brand == 'karenmillen.com') && locale == 'UK') {
      PdpPage.click.sizeGuidePdp();
      PdpPage.click.sizeGuidePdpCms();
      PdpPage.assertions.assertSizeGuidePdpCms();
    } else if (brand == 'nastygal.com') {
      PdpPage.click.sizeGuidePdp();
      PdpPage.click.sizeGuidePdpInches();
      PdpPage.assertions.assertSizeGuidePdpInches();
    } else {
      this.skip();
    }
  });

  it('Verify that in size guide tab user can switch locales', function () {
    if (brand == 'boohoo.com' && locale == 'UK') {
      PdpPage.click.sizeGuidePdp();
      PdpPage.assertions.assertUsCaLocaleSelected();
      PdpPage.assertions.assertausNzLocaleSelected();
      PdpPage.assertions.assertDeLocaleSelected();
      PdpPage.assertions.assertItLocaleSelected();
      PdpPage.assertions.assertFrLocaleSelected();
    } else {
      this.skip();
    }
  });

  it('Verify that in size guide tab user can open how to mesure accordian', function () {
    if (brand == 'boohoo.com' && locale == 'UK') {
      PdpPage.click.sizeGuidePdp();
      PdpPage.click.howToMeasurePdp();
      cy.wait(2000);
      PdpPage.assertions.assertHowToMeasurePdpDisplayed();
    } else {
      this.skip();
    }
  });

  it('Verify that in size guide tab, user can switch from clothes to lingerie, shoes or jeans', function () {
    if ((brand == 'nastygal.com' || brand == 'karenmillen.com') && locale == 'UK') {
      PdpPage.click.sizeGuidePdp();
      PdpPage.click.sizeGuideShoeOrOther();
      PdpPage.assertions.assertShoeOrOtherSelected();
    } else {
      this.skip();
    }
  });

});
