import { brand, language } from 'cypress/support/e2e';
import customerServicePage from '../../pom/customerService.page';
import assertionText from 'cypress/helpers/assertionText';

describe('Customer Service Page', function () {
    
  beforeEach(() => {
    customerServicePage.goto();
        
  });

  it('Verify that track my order button is present and functional', function () {
    if (brand != 'boohoo.com') {
      this.skip(); // Skipping other brands for now, these will be added in phase 2
    }
    customerServicePage.actions.checkTrackOrderButtonByText(assertionText.customerServicePageTrackOrderButton[language], 'trackform');
  });

  it('Verify that start a return button is present and functional', function () {
    if (brand != 'boohoo.com') {
      this.skip(); // Skipping other brands for now, these will be added in phase 2
    }
    customerServicePage.actions.checkReturnButtonByText(assertionText.customerServicePageReturnButton[language], 'returns');
  });

  it('Verify that start a chat will open', function () {
    if (brand != 'boohoo.com') {
      this.skip(); // Skipping other brands for now, these will be added in phase 2
    }
    customerServicePage.actions.checkVirtualAssistantButtonByText(assertionText.customerServicePageVirtualAssistantButton[language]);
  });

});