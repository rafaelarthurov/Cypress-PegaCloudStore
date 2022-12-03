
Cypress.Commands.add('login_pega', (mail, password)=>{

    cy.fixture('login.json').then((login) =>{
        cy.get(login.UserField).type(mail)
        cy.get(login.PassField).type(password)
        cy.get(login.SignInButton).click()
    })
})