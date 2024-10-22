describe('Google', () => {
  it('passes', () => {
    cy.visit('https://google.com')
    cy.contains("I'm Feeling Lucky")
  })
})

describe('Amazon', () => {

  it('https://www.amazon.co.jp/にアクセス', () => {
    cy.visit('https://www.amazon.co.jp/')
    cy.contains('ログイン')
    cy.screenshot()
  })
})
