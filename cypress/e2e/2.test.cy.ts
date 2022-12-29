describe('describe 1', function () {
  it('test 1', () => {
    cy.log('pass')
  });

  it('test 2', () => {
    cy.log('pass')
  });

  it('test 3', () => {
    cy.log('fail')
    throw new Error('error');
  });

  it('test 4', () => {
    cy.log('test')
  });
});
