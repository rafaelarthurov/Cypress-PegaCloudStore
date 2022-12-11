/// <reference types="Cypress"/>

Cypress.Commands.add('login_pega', (mail, password)=>{

    cy.fixture('login.json').then((locators) =>{
        cy.get(locators.UserField).type(mail)
        cy.get(locators.PassField).type(password)
        cy.get(locators.SignInButton).click()
    })
})