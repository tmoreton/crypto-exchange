/*eslint-disable */

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('https://crypto-exchange-stake.netlify.app/')
    // Make sure page loads from server
    cy.get('.navbar-brand').should('be.visible')
  })

  it('It will go back or forward in the browser\'s history', () => {
    cy.contains('View More').click()
    // Any view more click should contain the path of exchanges
    cy.location('pathname').should('include', 'exchanges')

    cy.go('back')
    cy.location('pathname').should('not.include', 'exchanges')

    cy.go('forward')
    cy.location('pathname').should('include', 'exchanges')

    // clicking back
    cy.go(-1)
    cy.location('pathname').should('not.include', 'exchanges')

    // clicking forward
    cy.go(1)
    cy.location('pathname').should('include', 'exchanges')
  })

  it('It will reload the page', () => {
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })
})
