
describe('Just Login on Pega Cloud', ()=>{

    before (()=>{
        cy.visit('https://training.openspan.com/login')
    })

    it('Login on PegaCloud', ()=>{
        
        cy.login_pega('admin', 'admin')
        
        /*
        cy.get('#user_name').type('admin')
        cy.get('#user_pass').type('admin')
        cy.get('#login_button').click()
        */
        
        /*cy.get('#alert_box').contains('News Alert:')
        cy.get('#alert_box').should('contain', 'All packages shipped via DHL on May 20, 2013 experienced delayed delivery dates of up to 24 hours.')
        */
    })

})