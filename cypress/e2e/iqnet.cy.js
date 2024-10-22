describe('IQNET snapshots', () => {
  it('captures viewports', () => {
    cy.viewport('iphone-x')
    cy.visit('https://www.iqnet.co.jp')
    cy.setPageForScreenshots()
    cy.screenshot('iqnet-iphone-x')

    // Set screen to match Xvfb to prevent cutoff
    cy.viewport(1280, 720)
    cy.visit('https://www.iqnet.co.jp')
    cy.setPageForScreenshots()
    cy.screenshot('iqnet-Xvfb')

    cy.get('main > .Contact').screenshot('contact')
  })
})
