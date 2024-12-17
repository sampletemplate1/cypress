describe('Registration functionality', () => {
    it('Register new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('Harshitha')
        cy.get("input[id='customer.lastName']").type('Akuthota')
        cy.get("input[id='customer.address.street']").type('collins')
        cy.get("input[id='customer.address.city']").type('Guntur')
        cy.get("input[id='customer.address.state']").type('AndhraPradesh')
        cy.get("input[id='customer.address.zipCode']").type('00000')
        cy.get("input[id='customer.phoneNumber").type('0000000000')
        cy.get("input[id='customer.ssn").type('111111111')
        cy.get("input[id='customer.username").type('Harsh')
        cy.get("input[id='customer.password").type('Hari1234')
        cy.get("#repeatedPassword").type('Hari1234')
        cy.get('[colspan="2"] > .button').click()
        cy.get("span[id='customer.username.errors']").should('have.text',"This username already exists.")
        cy.get("span[id='customer.username.errors']").contains("username already exists.")
    })
  })

  //to understand first assertion(assertion means to verify that the application works as expected)
  //we can do this using should and contains type of assertions