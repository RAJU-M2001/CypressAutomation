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


Cypress.Commands.add('login', () => {
  cy.viewport(1440,900);
    cy.visit('https://stage.woyage.ai/', {
    auth: {
        username: 'betatest',
        password: 'woyagetest'
      }
    });
    cy.get('#email').type('raju.muthukumar@woyage.ai');
    cy.wait(1000);
    cy.get('#password').type('Woyage!1');
    cy.wait(1000);
    cy.get("button[type='submit']").click({ force: true });

cy.url().should('eq','https://stage.woyage.ai/app#interview')

    //cy.url().should('include','/app#interview');
});


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




// Cypress.Commands.add('loginWithGoogle', () => {
//     // Visit the website
//     cy.visit('https://talent.woyage.ai/');
  
//     // Click on the 'Sign in with Google' button
//     cy.get('span.tw-mx-2').click(); // Clicking on the button
  
//     // Wait for the URL to include 'app#resume' (change if needed)
//     cy.url().should('include', 'app#resume'); // URL after successful login
    
//     // Simulate the successful login by setting the session cookie
//     cy.getCookie('woyage_user_session').then((cookie) => {
//       // Save the session cookie value for use in future tests
//       Cypress.env('sessionCookie', cookie.value);
//     });
//   });



///////////////////////////////////////////////////////////////////////////////////

// Cypress.Commands.add('loginWithSessionToken', (token) => {
//   cy.visit('https://talent.woyage.ai');


//   window.localStorage.setItem('W3mugxLj24qRjNAt10lX+tR5+1CyOKuukJhpBup01K+bKhWkH11T0f23WWmQ/Qjd4KpsO+n6fv3fTR9xBTMIVW5u/tmGrPhmiPkiOdulQTd3sfuHvK/EyoKXNff2B/bK', token); // Use the correct key name

//   //cy.url().should('eq','https://talent.woyage.ai/app#resume')
//   cy.reload(); // Refresh to load with auth
// });


// Cypress.Commands.add('loginWithSessionToken', () => {
//   const token = Cypress.env('session_token');

//   cy.visit('https://talent.woyage.ai');
//   window.localStorage.setItem('session_token', token);
//   cy.reload();
// });

