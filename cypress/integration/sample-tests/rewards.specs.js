Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('rewards tests', () => {
  
    it('Verify rewards page', () => {
      //Open rewards website  
      cy.visit('https://www.woolworthsrewards.com.au/')  

      //Verify All button exists on search page
      cy.get("div.cardBanner div.card-text").should('have.text', 'Welcome to Everyday Rewards')
    })
    
    
}) 