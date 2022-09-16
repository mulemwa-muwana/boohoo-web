describe('test', () => {
  it('user', () => {
    cy.createUser('boohoo.com').then((user: NewCustomerCredentials) => {
      cy.log(JSON.stringify(user, null, 4));
      cy.log(user.email);
      cy.log(user.password);
    });
  });
});