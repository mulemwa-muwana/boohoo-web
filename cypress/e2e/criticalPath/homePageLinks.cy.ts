import { brand } from 'cypress/support/e2e';
import HomePage from '../../pom/home.page';

describe('Home Page', function () {

  beforeEach(() => {
    HomePage.goto();
  });

  // Iterate the Links
  if (brand == 'boohooman.com') {
    describe('Strategic Homepage Links Tests', () => {
      it('Iterate thorugh sifu-header meganav links on homepage and validate Page status is OK', () => {
        HomePage.assertions.assertAllHeaderMegaNavLinksStatus();
      });

      it('Iterate thorugh sifu-footer links on homepage and validate Page status is OK', () => {
        HomePage.assertions.assertAllFooterLinksStatus();
      });

    });
  }

});
