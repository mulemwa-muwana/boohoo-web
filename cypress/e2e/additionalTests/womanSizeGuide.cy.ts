
import HomePage from '../../pom/home.page';
import GlobalFooter from '../../pom/globalfooter.page';
import SizeGuide from 'cypress/pom/sizeGuide.page';
import assertionText from '../../helpers/assertionText';
import { sku, brand, language, locale } from 'cypress/support/e2e';

describe('Woman size guide', function () {
  beforeEach(() => {
    HomePage.goto();

  });

  it('Verify that Woman size guide link opens Size guide page with tabs clothing, tops, trousers, dresses, lingerie and footwear, and size table',function () {
    
    if (brand == 'boohoo.com' && locale == 'UK') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.womanSizeGuideText[language]);
      SizeGuide.assertions.assertWomanSizeGuideTab();
    } else {
      this.skip();
    }
  }),
  it('Verify that user can switch from INCHES to CMS and data will change',function () {
    
    if (brand == 'boohoo.com' && locale == 'UK') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.womanSizeGuideText[language]);
      cy.wait(2000);
      SizeGuide.click.sizeChartTop();
      SizeGuide.assertions.assertInchesToCms();
      
    } else {
      this.skip();
    }
  }), 
  it('Verify that in TOPS tab user can switch size types: REGULAR, TALL, PETITE, PLUS, MATERNITY',function () {
    
    if (brand == 'boohoo.com' && locale == 'UK') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.womanSizeGuideText[language]);
      SizeGuide.click.sizeChartTop();
      SizeGuide.assertions.assertWomanTopSizeChart();
    
    } else {
      this.skip();
    }

  }),

  it('Verify that in TOPS tab user can switch locales: UK, US/CA, AUS/NZ, DE, IT, FR',function () {
    
    if (brand == 'boohoo.com' && locale == 'UK') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.womanSizeGuideText[language]);
      SizeGuide.click.sizeChartTop();
      cy.wait(2000);
      SizeGuide.assertions.assertWomanTopSizeChartCountry();
    
    } else {
      this.skip();
    }
  }),
  it('Verify that in TOPS tab user can switch from inches to cms',function () {
    
    if (brand == 'boohoo.com' && locale == 'UK') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.womanSizeGuideText[language]);
      cy.wait(2000);
      SizeGuide.click.sizeChartTop();
      SizeGuide.assertions.assertInchesToCmsInTop();
      
    } else {
      this.skip();
    }

  });
});
