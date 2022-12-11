/// <reference types="Cypress"/>

var user = '12345'
var pass = '12345'

describe('Login on Pega Cloud', ()=>{
    before (()=>{
        Cypress.Cookies.debug(true)
        cy.visit('/')
    })
    it('Login on PegaCloud', ()=>{
        cy.login_pega(user, pass)
    })
})

describe('HomePage validations and actions', ()=>{
  it('Validate the News Alert message', ()=>{
        cy.fixture('homePage.json').then((homePage)=>{
            cy.get(homePage.NewsAlert).
                contains('All packages shipped via DHL on May 20, 2013 experienced delayed delivery dates of up to 24 hours.')
        })
    })
    it("Do a HomePage's product searching", ()=>{
        cy.reload()
        cy.homePage_search('1', '24')
    })  
})

describe('Product Details validations and actions', ()=>{
    it('Validate some product value', ()=>{
        cy.fixture('ProductDetails.json').then((ProductDetails)=>{
            cy.get(ProductDetails.ProductName).
                contains('Guarana Fantastica')
            cy.get(ProductDetails.ProductInfo).should('have.text', 'Price: $ 4.50')
        })
        //cy.reload()
        cy.ProductDetailsValidations('10')
    })
})