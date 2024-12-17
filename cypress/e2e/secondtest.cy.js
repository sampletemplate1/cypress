describe('Launch Application', () => {
    it('Launch the test application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type('test')
        cy.get("input[name='password']").type('test')
    })
  })
  //to understand the how to identify web elements in cypress(using css selectors)