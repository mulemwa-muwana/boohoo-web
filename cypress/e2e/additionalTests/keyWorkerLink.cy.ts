import HomePage from '../../pom/home.page';
import { brand, locale, language } from 'cypress/support/e2e';
import GlobalFooter from '../../pom/globalfooter.page';
import assertionText from '../../helpers/assertionText';
import keyWorkerPage from 'cypress/pom/keyWorker.page';
import * as CommonActions from '../../helpers/common';

describe('KeyWorkerDiscount Tests', () => {

  // This will execute before every single test, we're just going to the baseURL.
  beforeEach(() => {
    HomePage.goto();
  });
  it('Verify that key worker link opens', function () {
    if (brand == 'boohooman.com' && locale == 'UK') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkKeyWorker[language]);
    }
    else {
      this.skip
    }
  })

  it('Verify that key worker link opens & user can start a subscription', function () {
    if (brand == 'boohooman.com' && locale == 'UK') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkKeyWorker[language]);
      keyWorkerPage.assertions.assertKeyWorkerFormIsPresent()
      cy.fixture('newuser').then((credentials) => {
        keyWorkerPage.actions.EnterData(credentials.firstname, credentials.lastname);
        keyWorkerPage.actions.EnterEmail(credentials.username);
        keyWorkerPage.actions.chooseDate('24', assertionText.DOBmonth[language], '2000');
        keyWorkerPage.click.signupButton();

      }
      )
    }
    else {
      this.skip
    }

  })

  it('Verify that key worker link opens & user can not Subscribe with empty data ', function () {
    if (brand == 'boohooman.com' && locale == 'UK') {
      GlobalFooter.actions.checkFooterLinkByText(assertionText.footerLinkKeyWorker[language]);
      cy.fixture('newuser').then((credentials) => {
        keyWorkerPage.actions.EnterData(credentials.firstname, credentials.lastname);
        keyWorkerPage.actions.chooseDate('19', assertionText.DOBmonth[language], '2000');
        keyWorkerPage.click.signupButton();
      }
      )
    }
    else {
      this.skip
    }

  })
});