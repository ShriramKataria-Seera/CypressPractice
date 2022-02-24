describe('Practice cypres commands' , () => {
    it('Fill the form', () =>
    {
        //Launch the application
        cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html')
        //Enter name
        cy.get('[name=namec]').type('Shriram Kataria')
        //Enter Street Addrress
        cy.get('[name=street]').type('Damascus Street')
        //Enter Zip code
        cy.get('[name=zipcode]').type('12345')
        //Select Country
        cy.get('select').select(1)
        //Enter email address
        cy.get('[name=email]').type('shriram.kataria@seera.sa')
        //Select Principle investigator radio box
        cy.get('[type=radio]').check('Yes', {force: true})
        //Select Research Application checkboxes
        cy.get('[type="checkbox"]').check(['Abstract', 'Narrative'], {force: true})
        cy.get('[type=submit]').click
    }
    )
})
