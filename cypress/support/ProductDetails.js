/// <reference types="Cypress"/>

Cypress.Commands.add('ProductDetailsValidations', (value)=>{

    cy.fixture('ProductDetails.json').then((locators)=>{
        cy.get(locators.QtyProduct).select(value)
        cy.get(locators.OrderButton).click().should('be.visible')
        //cy.get(locators.OrderButton).click()
    })

})