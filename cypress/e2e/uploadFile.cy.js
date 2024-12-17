describe('selectFile Method functionality', () => {
    it('selectFile method demo', () => {
        cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
        cy.get("button[class='btn file-upload upload-btn-sm'] input[type='file']").scrollIntoView().selectFile('C:\\bootstrap demo\\chart.png')
    })
})

//just a demo to show how to upload files using selectFile method