import { brand } from 'cypress/support/e2e';
import customerServicePage from '../../pom/customerService.page';

describe('Customer Service Page', function () {
    
  beforeEach(() => {
    customerServicePage.goto();
        
  });

  it('Verify that track my order button is present and functional', function () {
    if(brand != 'boohoo.com'){
      this.skip() //will be implemented in next PR
    }
    customerServicePage.assertions.assertTrackOrderButtonIsPresent();
    customerServicePage.assertions.assertTrackOrderButtonIsFunctional();
  });

  it('Verify that start a return button is present and functional', function () {
    if(brand != 'boohoo.com'){
      this.skip() //will be implemented in next PR
    }
    customerServicePage.assertions.assertStartReturnButtonIsPresent();
    customerServicePage.assertions.assertStartReturnButtonIsFunctional();
  });

  it('Verify that start a chat will open', function () {
    if(brand != 'boohoo.com'){
      this.skip() //will be implemented in next PR
    }
    customerServicePage.actions.openVirtualAssistant();
    customerServicePage.assertions.assertVirtualAssistantIsOpen();

  });

});