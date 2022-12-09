/// <reference types="Cypress"/>

Cypress.Commands.add('homePage_search', (value)=>{

    cy.fixture('homePage.json').then((locators) =>{
        cy.get(locators.ProductType).select('Beverages').should('have.value', 1)
        cy.get(locators.ProductList).select('Chai').should('have.value', 1)
        cy.get(locators.SearchHomeButton).click()
    })
})