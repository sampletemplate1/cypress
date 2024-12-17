describe('radio button  functionality',()=>{
    it('radio button demo',()=>{
        cy.visit('https://theautomationzone.blogspot.com/2020/07/xpath-practice.html')
        cy.xpath('//p[@name="name1"]').click()
        cy.xpath('//input[@id="full_name"]').type('Harshitha')
        cy.get('#id1')
        cy.get('#gender-1').check()//radio button
        cy.get('#course').select(2)//check box
    })
})