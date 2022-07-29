import { TestCustomer } from '../../plugins/TestDataManager';

describe('here\'s an example of using the task', () => {
  it('usage below', () => {
    cy.visit('/login');

    // Create a new user using the task method
    // You need the argument to be a part of the GroupBrands enum.
    // You WILL need to have a file called .env which contains all the API keys, contact Miona or Jordan for this.
    cy.createUser('boohoo.com').then((customer: TestCustomer) => {
      cy.log(customer.email);
      cy.log(customer.password);

      // Do your stuff here, you can get the newly created username and password from the parameter.
      cy.get('input[id*="login_email"]').type(customer.email);
      cy.get('input[id*="login_password"]').type(customer.password);
      cy.get('button[data-id="submitButton"]:not([class*="newsletters"])').click();
      cy.get('[data-tau="navigation_accountOverview"]').should('be.visible');
    });

  });
});