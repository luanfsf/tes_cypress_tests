/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://univille.edu.br/access/Login.html#')
	cy.clearCookies()
	cy.clearLocalStorage()

  })
  
 
  it('Acessar na univille e tentar logar', () => {
    // https://on.cypress.io/type
	
    cy.get('#login').type('seu.nome');
    cy.get('#password').type('digite sua senha');
	cy.get('#userLogin').click({force:true});
	cy.wait(50000);
     cy.get('#userLogin').click('bottom');

  })


})
