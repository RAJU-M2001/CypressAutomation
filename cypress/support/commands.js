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

// Cypress.Commands.add('loginWithToken', (token) => {
//     cy.visit('https://talent.woyage.ai/');
//     cy.window().then((window) => {
//       window.localStorage.setItem('yMLTikBl/v1JzjAA1f1CPq8etxTDhkpSVNBmqus6VLwA7h+5IwRFyMqshhoVaMyfY6APfJrGKcvPcc+t+dWhwZ92k+a14TY35Jn+PNyTPxXSbZSz0rZMlzZGB5VVi8QT', token);
//     });
//   });
  

Cypress.Commands.add('loginWithToken', (token) => {
    cy.visit('https://talent.woyage.ai/');  // Initial visit to the homepage
    cy.window().then((window) => {
      window.localStorage.setItem('yMLTikBl/v1JzjAA1f1CPq8etxTDhkpSVNBmqus6VLwA7h+5IwRFyMqshhoVaMyfY6APfJrGKcvPcc+t+dWhwZ92k+a14TY35Jn+PNyTPxXSbZSz0rZMlzZGB5VVi8QT', token);  // Replace with a more appropriate key like 'auth_token'
    });
    cy.reload();  // Reload the page to apply the token
  });
  

  