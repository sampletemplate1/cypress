describe('Handling Dynamic Dropdowns functionality', () => {
    it('Dynamic dropdowns', () => {
        cy.visit('https://www.yatra.com',{headers:{"Accept-Encoding":"gzip,deflate"}})
        cy.get('.more-arr').realHover()
        //cy.get('.moreOption').invoke('show')
        //cy.get('#booking_engine_trains > :nth-child(2)').click({force:true})
    })
  })

  //in this us downloaded a plugin called cypress real events
  //using that we used realhover
  