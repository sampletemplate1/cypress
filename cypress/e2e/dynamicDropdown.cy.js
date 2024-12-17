describe('Handling Dynamic Dropdowns functionality', () => {
    it('Dynamic dropdowns', () => {
        cy.visit('https://www.yatra.com/',{headers:{"Accept-Encoding":"gzip,deflate"}})
        cy.get('#BE_flight_origin_city').click().clear().type("New",{delay:200})
        cy.get('.viewport span:last-child').each(($el,index,$list)=>{
            cy.log($el.text())
            if($el.text()==='JFK'){
                cy.wrap($el).click()
            }
        })
        //cy.get('#BE_flight_arrival_city').click().clear().type("Kol",{delay:200})
    })
  })
  //to understand dynamic dropdown we have used another website like yatra
  //here we have also added headers to website link because this is real website and is a production website
  //for this type of website we have to use headers
  //we also used clear method and delay to delay the letters for milliseconds
  //finally we used each function which iterates to every dom element
  //we also used log function to log all the text
