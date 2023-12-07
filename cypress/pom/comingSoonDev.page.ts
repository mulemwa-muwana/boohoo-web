
import AbstractPage from './abstract/abstract.page';
import homePage from './home.page';
import { brand, locale, fullSku, language } from 'cypress/support/e2e';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    
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
    chooseClothing: '[href="https://dwdev.boohooman.com/mens"]',
    chooseTshirt: '#navigation > ul > li:nth-child(2) > div > div.nav-wrapper.nav-wrapper-slots > ul:nth-child(4) > li:nth-child(2) > a',
    notifyButton: '[id="add-to-cart"]',
    comingSoonEmail: '#coming-soon-email',
    availibility: '.availability-msg-title',
    productImageIsDisplayed: '.thumb-link img',
    quickView: 'a#quickviewbutton',
    comingSoonLabel: '[class="product-tile-coming-soon-badge js-product-tile-coming-soon-badge "]',
    productNumber: '[class="product-number"]',
    comingSoonLabelInPlp: '[class="product-tile-coming-soon-badge js-product-tile-coming-soon-badge "]'
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

class ComingSoonPage implements AbstractPage {
  goto (): void {
    homePage.goto();
  }

  click = {

    chooseClothingFromMegaMenu () {
      
      const chooseClothing = selectors[brand].chooseClothing;
      cy.get(chooseClothing).invoke('show').click({ force: true });
    },
    chooseShirtFromClothing () {
      
      const chooseTshirt = selectors[brand].chooseTshirt;
      cy.get(chooseTshirt).invoke('show').click({ force: true });
    },
    comingSoonPicture () {
      const productImageIsDisplayed = selectors[brand].productImageIsDisplayed;
      cy.get(productImageIsDisplayed).click({ force: true });

    },
    clickToQuickBtn () {
      const productHover = selectors[brand].productImageIsDisplayed;
      cy.get(productHover).eq(0).as('hoverOverProduct');
      const quickViewButton: any = selectors[brand].quickView;
      cy.wait(2000);
      
      cy.get('@hoverOverProduct').scrollIntoView().trigger('mouseover', { force: true }).then(() => {
        cy.get(quickViewButton).eq(0).invoke('css', 'display', 'inline').as('quickViewSiteGenesis');
        cy.get('@hoverOverProduct').click({ force: true });
          
      });
    },
  };

  actions = {
    
  };

  assertions = {
    
    assertNotOrderItem () {
      const notifyButton = selectors[brand].notifyButton;
      cy.get(notifyButton).should('be.disabled');

    },
    assertComingSoonEmail () {
      const comingSoonEmail = selectors[brand].comingSoonEmail;
      cy.get(comingSoonEmail).should('be.visible');

    },
    assertOutOfStock () {
      const availibility = selectors[brand].availibility ;
      cy.get(availibility ).should('have.text','\nThis item is coming soon\n');

    },
    assertComingSoonLabel () {
      const comingSoonLabel = selectors[brand].comingSoonLabel ;
      cy.get(comingSoonLabel ).should('contain','Coming Soon');

    },
    assertProduct () {
      const productNumber = selectors[brand].productNumber;
      cy.get(productNumber).should('be.visible');
    },
    assertComingSoonInPlp () {
      const comingSoonLabelInPlp = selectors[brand].comingSoonLabelInPlp;
      cy.get(comingSoonLabelInPlp).should('be.visible');
    }
    
  };

}

export default new ComingSoonPage();