describe('Checkboxes functionality', () => {
    it('Checkboxes demo', () => {
        cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/inventory/items',{headers:{"Accept-Encoding":"gzip,deflate"}})
        cy.get('tbody tr:nth-child(1) td:nth-child(1) input:nth-child(1)').check()//to check only a specific one
        cy.get('[type="checkbox"]').check()//used to check all the checkboxes
    })
  })
  