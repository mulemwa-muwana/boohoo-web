import assertionText from 'cypress/helpers/assertionText';
import { language } from 'cypress/support/e2e';
import customerServicePage from '../../pom/customerService.page';

describe('Customer Service Page', function () {
    
  beforeEach(() => {
    customerServicePage.goto();
        
  });

  it('Verify that track my order button is present and functional', function () {
    customerServicePage.assertions.assertTrackOrderButtonIsPresent();
    customerServicePage.assertions.assertTrackOrderButtonIsFunctional();
  });

  it('Verify that start a return button is present and functional', function () {
    customerServicePage.assertions.assertStartReturnButtonIsPresent();
    customerServicePage.assertions.assertStartReturnButtonIsFunctional();
  });

  it.only('Verify that start a chat will open', function () {
    customerServicePage.actions.openVirtualAssistant(assertionText.customerServicePageVirtualAssistantButton[language]);
    //customerServicePage.assertions.assertVirtualAssistantIsOpen();

  });

});