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

describe('Pega Cloud e2e test', () =>{

    //###################################################
    context('Login on Pega Cloud', ()=>{
        before (()=>{
            cy.visit('/')
        })
        it('Validating CSS properties', ()=>{
            cy.fixture('login.json').then((login)=>{
                cy.get(login.PageLogo)
                    .should('have.css', 'width', '100px')
                    .and('have.css', 'height', '47px')
                cy.get(login.LoginHeader)
                    .should('have.css', 'background-color', 'rgb(31, 37, 85)')
            })                
        })
        it('Assert the state of the elements', ()=>{
            cy.fixture('login.json').then((login)=>{
                cy.get(login.SignInButton)
                    .should('be.disabled')
            })
        })
        it('Login on PegaCloud', ()=>{
            cy.login_pega(user, pass)
        })
    })

    //###################################################
    context('HomePage validations and actions', ()=>{
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

    //###################################################

    context('Product Details validations and actions', ()=>{
        it('Validate some product value', ()=>{
            cy.fixture('ProductDetails.json').then((ProductDetails)=>{
                cy.get(ProductDetails.ProductName)
                    .first()
                    .contains('Guarana Fantastica')
                    .should('have.text', 'Guarana Fantastica')
                cy.get(ProductDetails.ProductInfo)
                    .contains("Price: $ 4.50")
                    .should('have.text', 'Price: $ 4.50')
            })
            //cy.reload()
            //cy.ProductDetailsValidations('10').should('have.value', '10')
            
            /*cy.fixture('ProductDetails.json').then((ProductDetails)=>{
                cy.get(ProductDetails.OrderButton).click()
            })*/
        })
    })  

})