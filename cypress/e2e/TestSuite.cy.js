/// <reference types="Cypress"/>

var user = '12345'
var pass = '12345'

//How to make a Stubs on load API calls (request, response)
/*describe('Intercepting API request', ()=>{
    it('Simulating an API Stubs response', ()=>{
        cy.intercept('Url', [
            {id: 1, name: 'Cat'},
            {id: 2, name: 'Dog'},
            {id: 3, name: 'Fish'}
        ])
    })
})*/

describe('Login on Pega Cloud', ()=>{
    before (()=>{
        //TodoCypress.Cookies.debug(true)
        cy.visit('/')
            .should('be.visible')
    })
    it('Login on PegaCloud', ()=>{
        cy.login_pega(user, pass)
    })
})

describe('HomePage validations and actions', ()=>{
  it('Validate the News Alert message', ()=>{
        cy.fixture('homePage.json').then((homePage)=>{
            cy.get(homePage.NewsAlert)
                .contains('All packages shipped via DHL on May 20, 2013 experienced delayed delivery dates of up to 24 hours.')
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
            cy.get(ProductDetails.ProductName)
                .contains('Guarana Fantastica')
                .should('have.value', 'Guarana Fantastica')
            cy.get(ProductDetails.ProductInfo)
                .contains("Price: $ 4.50")
                .should('have.text', 'Price: $ 4.50')
        })
        //cy.reload()
        cy.ProductDetailsValidations('10').should('have.value', '10')
        cy.fixture('ProductDetails.json').then((ProductDetails)=>{
            cy.get(ProductDetails.OrderButton).click()
        })
    })
})