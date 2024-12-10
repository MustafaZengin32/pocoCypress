describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://powercoders.org')
    cy.get('body').should('exist');
  })
})