describe('Clear method functionality', () => {
    it('Clear method demo', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > form > div:nth-child(2) > input').type("Harshi")
        cy.get('#loginPanel > form > div:nth-child(2) > input').clear()
    })
})

//just a demo to show how to use clear method