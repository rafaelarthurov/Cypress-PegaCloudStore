/// <reference types="Cypress"/>

Cypress.Commands.add('homePage_search', (value, value1)=>{

    cy.fixture('homePage.json').then((locators) =>{
        cy.get(locators.ProductType).select(value)
        cy.get(locators.ProductList).select(value1)
        cy.contains('View Details').click()
    })
})