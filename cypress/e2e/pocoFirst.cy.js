describe('first test', () => {
  it('passes', () => {
    cy.visit('https://powercoders.org')
    cy.get('body').should('exist');
  })
})