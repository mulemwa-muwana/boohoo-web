import { brand, locale, language } from 'cypress/support/e2e';
import assertionText from '../../helpers/assertionText';
import keyWorkerPage from 'cypress/pom/keyWorker.page';
import navigate from 'cypress/helpers/navigate';

if (brand == 'boohooman.com' && locale == 'UK') {

  describe('KeyWorkerDiscount Tests', () => {

    // This will execute before every single test, we're just going to the baseURL.
    beforeEach(() => {
      navigate.keyWorkerPage();
    });
    it('Verify that key worker link opens', function () {

      keyWorkerPage.assertions.assertKeyWorkerFormIsPresent(assertionText.KeyWorkerForm[language])
    })

    it('Verify that key worker link opens & user can start a subscription', function () {
      keyWorkerPage.assertions.assertKeyWorkerFormIsPresent(assertionText.KeyWorkerForm[language]);
      cy.fixture('newuser').then((credentials) => {
        keyWorkerPage.actions.EnterData(credentials.firstname, credentials.lastname);
        keyWorkerPage.actions.EnterEmail(credentials.username);
        keyWorkerPage.actions.chooseDate('24', assertionText.DOBmonth[language], '2000');
        keyWorkerPage.click.signupButton();

      }
      )

    })

    it('Verify that key worker link opens & user can not Subscribe with empty data ', function () {
      cy.fixture('newuser').then((credentials) => {
        keyWorkerPage.actions.EnterData(credentials.firstname, credentials.lastname);
        keyWorkerPage.actions.chooseDate('19', assertionText.DOBmonth[language], '2000');
        keyWorkerPage.click.signupButton();
      }
      )

    })
  })
};