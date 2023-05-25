import AbstractPage from './abstract/abstract.page';

const selectors: SelectorBrandMap = {
  'boohoo.com': {
    contactUsLink: '.b-folder_nav_list-sublist > :nth-child(7) > .b-folder_nav_list-link',
  },
  'nastygal.com': {
    contactUsLink: '.b-folder_nav_list-sublist > :nth-child(9) > .b-folder_nav_list-link',   
  },
  'dorothyperkins.com': {
    contactUsLink: ':nth-child(7) > .b-folder_nav_list-link',
  },
  'burton.co.uk': {
    contactUsLink: ':nth-child(7) > .b-folder_nav_list-link',
  },
  'wallis.co.uk': {
    contactUsLink: ':nth-child(7) > .b-folder_nav_list-link',
  },
  'boohooman.com': {
    contactUsLink: '#cs-folder-contact',
     
  },
  'karenmillen.com': {
    contactUsLink: '#cs-folder-contact',
      
  },
  'coastfashion.com': {
    contactUsLink: '#cs-folder-contact',
     
  },
  'warehousefashion.com': {
    contactUsLink: '#cs-folder-contact',
      
  },
  'oasis-stores.com': {
    contactUsLink: '#cs-folder-contact',
     
  },
  'misspap.com': {
    contactUsLink: '#cs-folder-contact',
      
  },
  'boohoomena.com': {
    contactUsLink: '#cs-folder-contact',
      
  }
};
 
const variables = Cypress.env() as EnvironmentVariables;
class faqPage implements AbstractPage {
  goto () {
    throw new Error('No goto href for the global footer, try HomePage.goto()');
  }

  click = {
    contactUsLink () {
      const contactUsLink = selectors[variables.brand].contactUsLink;
      cy.get(contactUsLink).click({force:true});
    }
  };

  actions = { };
  assertions = {}; 
}

export default new faqPage();