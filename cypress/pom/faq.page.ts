import AbstractPage from './abstract/abstract.page';
import { brand } from 'cypress/support/e2e';
import { isMobileDeviceUsed } from 'cypress/helpers/common';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    contactUsLink: '.b-folder_nav_list-sublist > :nth-child(7) > .b-folder_nav_list-link',
    contactUsLinkMobile: '.m-contact-us.m-hide-md_up.b-folder_nav_list-link',
    sizeGuide: "[data-panel-name='cs-size-guide']",
  },
  'nastygal.com': {
    contactUsLink: '.b-folder_nav_list-sublist > :nth-child(9) > .b-folder_nav_list-link',
    contactUsLinkMobile: '.m-contact-us.m-hide-md_up.b-folder_nav_list-link'   
  },
  'dorothyperkins.com': {
    contactUsLink: ':nth-child(7) > .b-folder_nav_list-link',
    contactUsLinkMobile: '.b-folder_nav_list-link.m-contact-us'
  },
  'burton.co.uk': {
    contactUsLink: ':nth-child(7) > .b-folder_nav_list-link',
    contactUsLinkMobile: '.b-folder_nav_list-link.m-contact-us'
  },
  'wallis.co.uk': {
    contactUsLink: ':nth-child(7) > .b-folder_nav_list-link',
    contactUsLinkMobile: '.b-folder_nav_list-link.m-contact-us'
  },
  'boohooman.com': {
    contactUsLink: '#cs-folder-contact',
    contactUsLinkMobile: '#ui-id-16'
     
  },
  'karenmillen.com': {
    contactUsLink: '#cs-folder-contact',
    contactUsLinkMobile: '#ui-id-16'
      
  },
  'coastfashion.com': {
    contactUsLink: '#cs-folder-contact',
    contactUsLinkMobile: '#ui-id-16'
     
  },
  'warehousefashion.com': {
    contactUsLink: '#cs-folder-contact',
    contactUsLinkMobile: '#ui-id-16'
      
  },
  'oasis-stores.com': {
    contactUsLink: '#cs-folder-contact',
    contactUsLinkMobile: '#ui-id-16'
     
  },
  'misspap.com': {
    contactUsLink: '#cs-folder-contact',
    contactUsLinkMobile: '#ui-id-16'
      
  },
  'boohoomena.com': {
    contactUsLink: '#cs-folder-contact',
    contactUsLinkMobile: '#ui-id-16'
      
  }
};
class faqPage implements AbstractPage {
  goto () {
    throw new Error('No goto href for the global footer, try HomePage.goto()');
  }

  click = {
    contactUsLink () {
      const contactUsLink = selectors[brand].contactUsLink;
      const contactUsLinkMobile = selectors[brand].contactUsLinkMobile;
      if (isMobileDeviceUsed) {
        cy.get(contactUsLinkMobile).click({force: true}); 
      } else {
        cy.get(contactUsLink).click({force:true});
      }
    },

    sizeGuide () {
      const sizeGuide = selectors[brand].sizeGuide;
      cy.get(sizeGuide).click({ force: true });

    }
  };

  actions = { };
  assertions = {}; 
}

export default new faqPage();