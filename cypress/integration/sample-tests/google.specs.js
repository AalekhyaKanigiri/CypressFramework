describe('google tests', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com.au/')
    })
  
    it('search for cypress in google search and verify search results page', () => {
       //Enter Cypress in google search and click enter 
      cy.get('input.gLFyf.gsfi').type('cypress{enter}')

      //Verify All button exists on search page
      cy.get('div[aria-current="page"]').should('have.text', 'All')
    })
    
    
}) 