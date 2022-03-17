/*eslint-disable */

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://crypto-exchange-stake.netlify.app/')
  })

  it('It will set the viewport size and dimension', () => {
    // Make sure page loads from server
    cy.get('.navbar-brand').should('be.visible')
    cy.viewport(320, 480)

    // the navbar should have collapse since our screen is smaller
    cy.get('.navbar-toggler').should('be.visible').click()
    cy.get('.navbar-nav').find('a').should('be.visible')

    // lets see what our app looks like on a super large screen
    cy.viewport(2999, 2999)

    // cy.viewport() accepts a set of preset sizes
    // to easily set the screen to a device's width and height

    cy.viewport('macbook-15')
    // Wait for page to load before checking
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('macbook-11')
    cy.wait(200)
    cy.viewport('ipad-2')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6')
    cy.wait(200)
    cy.viewport('iphone-5')
    cy.wait(200)
    cy.viewport('iphone-4')
    cy.wait(200)
    cy.viewport('iphone-3')
    cy.wait(200)

    // cy.viewport() accepts an orientation for all presets
    // the default orientation is 'portrait'
    cy.viewport('ipad-2', 'portrait')
    cy.wait(200)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(200)
  })
})
