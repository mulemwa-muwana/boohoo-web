
import comingSoonDevPage from 'cypress/pom/comingSoonDev.page';
import HomePage from '../../pom/home.page';

describe('Coming Soon Tests in PLP', () => {  
  
  beforeEach(() => {     
    HomePage.goto();
    comingSoonDevPage.click.chooseClothingFromMegaMenu();
    comingSoonDevPage.click.chooseShirtFromClothing();  
  });
  
  it('Verify that it has a label coming soon on PLP', function () {
    comingSoonDevPage.assertions.assertComingSoonInPlp();

  });

});
describe('Coming Soon Tests in PDP', function () {

  beforeEach(() => {
    HomePage.goto();
    comingSoonDevPage.click.chooseClothingFromMegaMenu();
    comingSoonDevPage.click.chooseShirtFromClothing();
    comingSoonDevPage.click.clickToQuickBtn(); 
         
  });

  it('Verify that in PDP you can not order an item', function () {
    comingSoonDevPage.assertions.assertNotOrderItem();
    
  });
  it('Verify that you can subscribe to receive notification when back in stock', function () {
    comingSoonDevPage.assertions.assertComingSoonEmail();
        
  });
  it('Verify that The "Out of Stock" CTA is disabled on OOS Products without any available variation', function () {
    comingSoonDevPage.assertions.assertOutOfStock();
    
  });

});
  
