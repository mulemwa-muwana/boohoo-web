import AbstractPage from './abstract/abstract.page';
import { brand, url, locale, language } from 'cypress/support/e2e';
import { isSiteGenesisBrand } from 'cypress/helpers/common';
import assertionText from 'cypress/helpers/assertionText';
import { isMobileDeviceUsed } from 'cypress/helpers/common';


const selectors: SelectorBrandMap = {
  'boohoo.com': {
    sizeGuideGender: 'div.l-static_page-guide_selectors > :nth-child(1) >.b-form_section-label',
    sizeGuideCategory:'div.l-static_page-guide_selectors > :nth-child(2) >.b-form_section-label',
    sizeGuideFit: 'div.l-static_page-guide_selectors > :nth-child(3) >.b-form_section-label',
    selectGender:'select#sizeGuideGender', 
    selectCategory: 'select#sizeGuideCategory',
    selectFit: 'select#sizeGuideFit', 
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

const variables = Cypress.env() as EnvironmentVariables;

class SizeGuide implements AbstractPage {

  goto () {

    cy.visit( variables.url + '/size-guide.html');
  }

  click = {
  };

  actions = {
    selectDropdown () {
      const selectGender = selectors[brand].selectGender;
      const selectCategory = selectors[brand].selectCategory;
      const selectFit = selectors[brand].selectFit;
      const woman = assertionText.Womens[language];
      const trousers = assertionText.trousers[language];
      const regular = assertionText.regular[language];
      
      if (!isSiteGenesisBrand) {
        if (isMobileDeviceUsed && brand == 'boohoo.com') {
          cy.get(selectGender).select(woman).should('have.value', 'woman');
          cy.get(selectCategory).select(trousers).should('have.value','trousers');
          cy.get(selectFit).select(regular).should('have.value','regular');
          
        } 
      
      } 
    }     

  };

  assertions = {
    assertSizeGuideGenderPresent() {
      const sizeGuideGender = selectors[brand].sizeGuideGender;
      cy.get(sizeGuideGender).should('be.visible');
    },
    assertSizeGuideCategoryPresent() {
      const sizeGuideCategory = selectors[brand].sizeGuideCategory;
      cy.get(sizeGuideCategory).should('be.visible');
    },

    assertSizeGuideFitPresent() {
      const sizeGuideFit = selectors[brand].sizeGuideFit;
      cy.get(sizeGuideFit).should('be.visible');
    },
    }
  };


export default new SizeGuide();