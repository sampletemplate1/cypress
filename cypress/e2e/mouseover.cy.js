describe('Handling Dynamic Dropdowns functionality', () => {
    it('Dynamic dropdowns', () => {
        cy.visit('https://www.yatra.com',{headers:{"Accept-Encoding":"gzip,deflate"}})
        //cy.get('.more-arr').trigger('mouseover')
        //cy.get('.moreOption').invoke('show')
        cy.get('#booking_engine_trains > :nth-child(2)').click({force:true})
    })
  })
  