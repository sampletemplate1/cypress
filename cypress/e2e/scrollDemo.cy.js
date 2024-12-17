describe('Clear method functionality', () => {
    it('Clear method demo', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.scrollTo('bottom')
        cy.scrollTo('top')
        cy.scrollTo(0,100)
        cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').scrollIntoView()
    })
})

//just a demo to show how to use scrollIntoView and scrollto methods to scroll in cypress