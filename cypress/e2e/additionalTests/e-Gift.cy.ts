import { brand, language, locale } from 'cypress/support/e2e';
import HomePage from '../../pom/home.page';
import GlobalFooter from '../../pom/globalfooter.page';
import assertionText from 'cypress/helpers/assertionText';


describe('Gift Cards Tests', () => {  
   
  
  beforeEach(() => {     
    HomePage.goto();
  });
  it('Verify that Gift Cards is present on Homepage and opens gift cards', function () {
    if ((brand == 'boohoo.com' && (locale == 'UK')) || (brand == 'nastygal.com' && (locale == 'UK' || locale == 'US'))||(brand == 'boohooman.com' && (locale == 'UK'))) {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGiftCard[language]);
      HomePage.assertions.assertGiftCardPageIsDisplayed();
    } else if (brand == 'nastygal.com') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkGiftVoucher[language]);
    } else {
      this.skip();
    }
  });
  it('Verify that The user can select a card, fill in the required fields and the card will be added to the cart', function () {
    if ((brand == 'boohooman.com' && locale == 'UK')) {
      cy.wait(2000);
      cy.visit('https://www.boohoomangiftcards.com/gb/en-gb/home/egift')
    }else if (brand == 'boohoo.com'&& locale == 'UK') {
        cy.visit('https://www.boohoogiftcards.com/gb/en-gb/home/egift')
      }
      cy.wait(2000);
      HomePage.click.acceptBtn();
      cy.wait(2000);
      HomePage.click.selectBtn();
      cy.fixture('users').then((credentials: LoginCredentials) => {    
        HomePage.actions.fillGiftCardForm(credentials.username);   
      });
       HomePage.assertions.assertGiftCardIsAdded();
       HomePage.click.removeGiftCard();
       HomePage.assertions.assertGiftCardIsRemoved();
    
    })
       
  });

