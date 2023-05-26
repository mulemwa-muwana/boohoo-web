import AbstractPage from './abstract/abstract.page';
import { sku, brand, language, locale } from 'cypress/support/e2e';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    contactUsLink: '.b-folder_nav_list-sublist > :nth-child(7) > .b-folder_nav_list-link',
    contactUsLinkMobile: '.m-contact-us.m-hide-md_up.b-folder_nav_list-link'
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
 
const variables = Cypress.env() as EnvironmentVariables;
class faqPage implements AbstractPage {
  goto () {
    throw new Error('No goto href for the global footer, try HomePage.goto()');
  }

  click = {
    contactUsLink () {
      const contactUsLink = selectors[brand].contactUsLink;
      const contactUsLinkMobile = selectors[brand].contactUsLinkMobile;
      const viewportWidth = Cypress.config('viewportWidth');
      if (viewportWidth < 1100) {
        cy.get(contactUsLinkMobile).click({force: true}); 
      } else {
        cy.get(contactUsLink).click();
      }
      
    }
  };

  actions = { };
  assertions = {}; 
}

export default new faqPage();