describe('Google', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.contains("I'm Feeling Lucky")
  })
})
