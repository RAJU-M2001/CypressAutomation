// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-mailosaur'




// cypress/support/commands.js

// cypress/support/commands.js

// describe('Login using Session Token dynamically', () => {

//     beforeEach(() => {
//       cy.request({
//         method: 'POST',
//         url: 'https://talent.woyage.ai/', 
//         body: {
//           email: 'rajutamilarasan1@gmail.com',
//           password: 'Zxcvbnm!1'
//         }
//       }).then((response) => {
//         const token = response.body.token;
//         window.localStorage.setItem('authToken', token);
//       });
//     });
  
//     it('should see resume page', () => {
//       cy.visit('https://talent.woyage.ai/app#resume');
//       cy.contains('Resume').should('be.visible');
//     });
  
//   });
// cypress/support/commands.js


  
Cypress.Commands.add('login', () => {
    cy.visit('https://talent.woyage.ai/'); // <-- Change this URL to your login page
  
    cy.get('#email').type('rajutamilarasan1@gmail.com');
    cy.get('#password').type('Zxcvbnm!1');
    cy.get("button[type='submit']").click();
  
   
    // Optionally, assert the correct URL after login
    cy.url().should('eq', 'https://talent.woyage.ai/app#resume');
  });
  
  
  
  
  



  