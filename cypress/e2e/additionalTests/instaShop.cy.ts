import HomePage from '../../pom/home.page';
import {  brand, locale } from 'cypress/support/e2e';
​
​
describe ('InstaShop Tests', ()=>{
      // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
  })
​
    it('Verify that Instashop is present on Homepage and opens instashop',function(){
        if (brand == 'boohooman.com' && locale == 'UK') {
          cy.wait(2000);
          HomePage.assertions.assertInstaShopPresent();
          HomePage.click.shopInstagramButton();
          cy.wait(2000);
          HomePage.assertions.assertInstaURL();
  
        } else {
            this.skip();
        }

    });
        it.only('Verify that hovering over product tile shopNow button appears that after being clikced opens quick view',function(){ 
            if (brand == 'boohooman.com' && locale == 'UK') {
                cy.wait(2000);
                HomePage.assertions.assertInstaShopPresent();
                HomePage.click.shopInstagramButton();
                cy.wait(2000);
                HomePage.assertions.assertInstaURL();
                HomePage.assertions.assertShopNowDisplayed();
                HomePage.click.shopNowButton();
            }

    })
})