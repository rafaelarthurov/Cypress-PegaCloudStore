/// <reference types="Cypress"/>

describe('Login on Pega Cloud', ()=>{

    before (()=>{
        cy.visit('/')
    })

    it('Login on PegaCloud', ()=>{
        cy.login_pega('12345', '12345')
    })

    it('Validate the News Alert message', ()=>{
        cy.fixture('homePage.json').then((homePage)=>{
            cy.get(homePage.NewsAlert).
            contains('All packages shipped via DHL on May 20, 2013 experienced delayed delivery dates of up to 24 hours.')
        })
    })

    it('Do a searching products', ()=>{
        cy.homePage_search()
        //cy.get('h1').contains('Chai')
    })

})