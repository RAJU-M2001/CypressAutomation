// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-xpath';
import 'cypress-mochawesome-reporter/register';
import "cypress-mailosaur";




// cypress/support/e2e.js
Cypress.on('uncaught:exception', (err, runnable) => {
    // ignore React minified errors (like #418)
    if (err.message.includes('Minified React error')) {
      return false;
    }
    // let other errors fail the test
});
  







