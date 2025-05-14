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
//import 'cypress-mailosaur'
//import { CheckEmailBodyFeatureSupportResultsToJSON } from 'mailslurp-client';


//Talent command.js

// Cypress.Commands.add('login',()=>{
//     cy.visit('https://talent.woyage.ai/')

//     cy.get('#email').type('offshoreqa@woyage.ai');
//     cy.get('#password').type('Woyage!2');
//     cy.get("button[type='submit']").click({force:true});

//     cy.url().should('include', 'app#resume');
// });


// Cypress.Commands.add('login', () => {
//     cy.visit('https://stage.woyage.ai/', {
//       auth: {
//         username: 'betatest',
//         password: 'woyagetest'
//       }
//     });
//     cy.get('#email').type('raju.muthukumar@woyage.ai');
//     cy.wait(1000);
//     cy.get('#password').type('Woyage!1');
//     cy.wait(1000);
//     cy.get("button[type='submit']").click({ force: true });

//     cy.url().should('include', '/app#interview');
// });


// Cypress.Commands.add('login', () => {
//     cy.visit('https://stage.woyage.ai/', {
//       auth: {
//         username: 'betatest',
//         password: 'woyagetest'
//       }
//     });

//     cy.get('#email').should('be.visible').type('raju.muthukumar@woyage.ai');
//     cy.wait(1000);
//     cy.get('#password').should('be.visible').type('Woyage!1');
//     cy.wait(1000);
//     cy.get("button[type='submit']").click({ force: true });

//     // Confirm successful login
//     //cy.url().should('include', '/app#interview');
//     cy.url().should('eq','https://stage.woyage.ai/app#interview')
//   });




  