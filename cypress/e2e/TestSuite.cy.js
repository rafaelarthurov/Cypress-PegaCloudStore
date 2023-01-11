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

describe('Pega Cloud e2e test', () => {

    //###################################################
    // Login Page
    context('Login page on Training OpenSpan', () => {
        before(() => {
            cy.visit('/')
        })
        it('Validating CSS properties', () => {
            cy.fixture('login').then((login) => {
                //Logo size
                cy.get(login.PageLogo)
                    .should('have.css', 'width', '100px')
                    .and('have.css', 'height', '47px')
                //Header Background Color
                cy.get(login.LoginHeader)
                    .should('have.css', 'background-color', 'rgb(31, 37, 85)')
            })
        })
        it('Assert the state of the elements', () => {
            cy.fixture('login').then((login) => {
                //Login button disabled
                cy.get(login.SignInButton)
                    .should('be.disabled')
            })
        })
        it('Login on PegaCloud', () => {
            //Login CustomCommand
            cy.login_pega(user, pass)
        })
    })

    //###################################################
    //Home Page
    context('HomePage validations and actions', () => {
        it('Validate the News Alert message', () => {
            cy.fixture('homePage').then((homePage) => {
                //Validate the news alert content
                cy.get(homePage.NewsAlert)
                    .contains('All packages shipped via DHL on May 20, 2013 experienced delayed delivery dates of up to 24 hours.')
                cy.get(homePage.ProductType)
                    .should('have.length', 1)
                cy.get(homePage.ProductList)
                    .should('have.length', 1)
            })
        })
        it('Validate links code response', () => {
            //Validate response 200 for each main menu link
            cy.fixture('homePage').then((homePage) => {
                cy.get(homePage.MainMenu_Home)
                    .each(($el) => {
                        cy.request($el.prop('href'))
                            .its('status')
                            .should('eq', 200)
                    })
            })
        })
        it("Do a HomePage's product searching", () => {
            cy.reload()
            //Seach Product CustomCommand
            cy.homePage_search('1', '24')
        })
    })

    //###################################################
    //Product Page
    context('Product Details validations and actions', () => {
        it('Validate some product value', () => {
            cy.fixture('ProductDetails.json').then((ProductDetails) => {
                cy.get(ProductDetails.ProductName)
                    .first()
                    .contains('Guarana Fantastica')
                    .should('have.text', 'Guarana Fantastica')
                cy.get(ProductDetails.ProductInfo)
                    .contains("Price: $ 4.50")
                    .should('have.text', 'Price: $ 4.50')
            })
        })
    })
})