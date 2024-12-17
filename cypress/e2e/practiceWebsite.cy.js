describe('Launch Application', () => {
    it('Launch the test application', () => {
        cy.visit('https://naveenautomationlabs.com/opencart/')
        cy.get("img[title='naveenopencart']")
        cy.get("a[title='My Account']").click()
        cy.contains('Login').click()
        cy.get('#input-email').type('harshi135@gmail.com')
        cy.get('#input-password').type('Hari123')
        cy.get("input[type='submit']").click()
        cy.contains('Laptops & Notebooks').click()
        cy.contains('Show All Laptops & Notebooks').click()
        //cy.get("div[class='button-group']+button[type='button']").click()
        //cy.get("button[onclick="cart.add('47', '1');"]").click()
        cy.get("div[class='col-sm-9'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(2) button:nth-child(1)").click()
        cy.get('#button-cart').click()
        cy.get("div[id='cart']>button").click()
        cy.get("p[class='text-right']>:nth-child(2)").click()
        //cy.get("input[value='guest']").check()
        //cy.get("input[id='button-account']").click()
        cy.get('#button-payment-address').click()
        cy.get('#button-shipping-address').click({force:true})
        //cy.get("input[name='firstname']").type('clary')
        //cy.get("input[name='lastname']").type('Marie')
        //cy.get("input[id='input-payment-email']").type('clary.Marie@gmail.com')
        //cy.get("input[id='input-payment-telephone']").type('000000000')
        //cy.get("input[id='input-payment-address-1']").type('st.marys street, New York')
        //cy.get("input[id='input-payment-city']").type('NewYork')
        //cy.get("input[id='input-payment-postcode']").type('000000')
        //cy.get("input[id='input-payment-country']").select(20)
        //cy.get('#input-payment-country')
        //cy.get('#input-payment-zone').select(3)
        //cy.get('#input-payment-country').click()
        //cy.get('#button-guest-shipping').click()
        cy.get('#button-shipping-method').click()
        cy.get("input[name='agree']").check()
        cy.get("input[id='button-payment-method']").click()
        cy.get("input[id='button-confirm']").click()
        //cy.get("a[class='btn btn-primary']").click()

    })
  })