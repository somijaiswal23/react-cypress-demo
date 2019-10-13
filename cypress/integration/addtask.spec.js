/// <refrence types="cypress" />

it('Should navigate to TODO app', () => {
    cy.visit('http://localhost:3000')
    cy.get('.form-control', {timeout: 10000}).type('Learn Cypress {enter}')
    cy.get(':nth-child(4) > .checkbox > label', {timeout: 12000}).should('have.text', ' Learn Cypress');
    cy.get(':nth-child(1) > .checkbox > label > input', {timeout: 18000}).click();
})