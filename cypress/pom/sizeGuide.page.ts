
import { brand } from 'cypress/support/e2e';
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';





const selectors: SelectorBrandMap = {
  'boohoo.com': {
    womanSizeCm: '.b-size_type-labels_wrapper > :nth-child(2)',
    womanSizeInches: '.b-size_type-labels_wrapper > :nth-child(1)',
    sizeChartTop: 'a[href="https://uk-dwstg.boohoo.com/size-guide/tops.html"]',
    topSize: '[data-inches="31"]',
    topSizeRegular: '[data-inches="31"]',
    topSizePlus: '[data-inches="41"]',
    countryRadioBtn: '[id="US/CA"]',
    womanSizeGuideTab: '.b-tab_list',
    womanSizeTable: '[data-widget="carousel"]'
    
  },
  'nastygal.com': {
    
  },
  'dorothyperkins.com': {
    
  },
  'burton.co.uk': {
    
  },
  'wallis.co.uk': {
    
  },
  'boohooman.com': {
    
  },
  'karenmillen.com': {
    
  },
  'coastfashion.com': {
    
  },
  'warehousefashion.com': {
    
  },
  'oasis-stores.com': {
    
  },
  'misspap.com': {
    
  },
  'boohoomena.com': {
    
  }
};
class SizeGuide implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {
    sizeCm () {
      const  womanSizeCm = selectors[brand]. womanSizeCm;
      cy.get( womanSizeCm).click({force: true});
    },
    sizeChartTop () {
      const  sizeChartTop = selectors[brand]. sizeChartTop;
      cy.get( sizeChartTop).click({force: true});
    },

  };

  actions = {

  };

  assertions = {
    assertInchesToCms(){
      const topSizeRegular = selectors[brand].topSizeRegular;
      const  womanSizeCm = selectors[brand]. womanSizeCm;

      cy.get(topSizeRegular).should('have.attr', 'data-inches', '31');
      cy.get(womanSizeCm).click({force: true})
      cy.get(topSizeRegular).should('have.text', '79')
      

    },
    assertWomanTopSizeChart () {
       
      const topSizeRegular = selectors[brand].topSizeRegular;
      const topSizePlus = selectors[brand].topSizePlus;

      cy.get('[for="REGULAR"]').click(),
      cy.get(topSizeRegular).should('have.attr', 'data-inches', '31');
      cy.get('[for="PLUS"]').click(),
      cy.get(topSizePlus).should('have.attr', 'data-inches', '41');
    },
    assertWomanTopSizeChartCountry () {
      const countryRadioBtn = selectors[brand].countryRadioBtn;

      cy.get(countryRadioBtn).click(),
      cy.get(countryRadioBtn).should('be.checked');

    },
    assertInchesToCmsInTop(){
      const womanSizeInches = selectors[brand].womanSizeInches;
      const  womanSizeCm = selectors[brand]. womanSizeCm;
      const  sizeChartTop = selectors[brand]. sizeChartTop;

      cy.get( sizeChartTop).click({force: true});
      cy.get( womanSizeInches).should('have.text', 'INCHES');
      cy.get(womanSizeCm).click({force: true})
      cy.get(womanSizeCm).should('have.text', 'CMS')
      

    },
    assertWomanSizeGuideTab () {
      const womanSizeGuideTab = selectors[brand].womanSizeGuideTab;
      const womanSizeTable = selectors[brand].womanSizeTable;
      
      cy.get(womanSizeGuideTab).invoke('text').then((text) => {
        const cleanedText = text.replace(/\t/g, '').replace(/\n/g, '');
        cy.wrap(cleanedText).should('include', 'ClothingTopsTrousersDressesLingerieFootwear');
      });
      cy.get(womanSizeTable).should('be.visible');
    },
  };
}

export default new SizeGuide();