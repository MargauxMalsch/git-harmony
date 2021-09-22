// margaux.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Test de Margaux', () => {
    it('Se connecter au site', () => {
        cy.visit('http://harmony.barbec.tk/')
    })
    it('Agrandir le texte', () => {
        cy.get('#team').click()
        cy.get('li').last().should('have.css', "font-size" , "2rem")
    })
    
})
