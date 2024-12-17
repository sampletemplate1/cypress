describe('Login functionality', () => {
    it('Login Registered new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > form > div:nth-child(2) > input').type("Harshi")
        cy.get('#loginPanel > form > div:nth-child(4) > input').type('Hari1234')
        cy.get('#loginPanel > form > div:nth-child(5) > input').click()
        //cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        cy.contains('21558').click()
        cy.get('#month').select(11)
        cy.get('#month').select('March')
    })
  })


  //to understand static dropdowns(static dropdowns mostly are using select html tag)
  //we have select method in cypress to do it