// // describe('Testing with session', () => {

// //     beforeEach(() => {
// //         cy.session('loginSession', () => {
// //             const Email = "rajutamilarasan1@gmail.com";
// //             const Password = "Qwertyuiop!1";

// //             cy.visit('https://talent.woyage.ai/');
// //             cy.get("#email").type(Email);
// //             cy.get("#password").type(Password);
// //             cy.get("button[type='submit']").click();
            
// //             // After successful login, Cypress will automatically save cookies/session storage.
// //         });
// //     });

// //     it('Should bypass login and directly go to protected page', () => {
// //         cy.visit('https://talent.woyage.ai/app#resume'); // Protected URL
// //         cy.contains("AI Powered Resume Builder").should('be.visible'); // Example check
// //     });

// // });
// // cypress/e2e/login.cy.js (example)

// // describe('Login and save session', () => {
// //     it('logs in and saves the token', () => {

// //         const Email = "rajutamilarasan1@gmail.com";
// //             const Password = "Qwertyuiop!1";

// //             cy.visit('https://talent.woyage.ai/');
// //             cy.wait(1000);
// //             cy.get("#email").type(Email);
// //             cy.get("#password").type(Password);
// //             cy.get("button[type='submit']").click();
  
// //       // Wait for successful login
// //       cy.url().should('include', '/app#resume'); // ✅ Correct assertion
  
// //       // Save the token from localStorage
// //       cy.window().then((win) => {
// //         const token = win.localStorage.getItem('session_token'); // Adjust token key based on your app
// //         cy.writeFile('cypress/fixtures/session.json', { token }); // Save token
// //       });
// //     });
// //   });

// // describe('Manual Token Login', () => {
// //     it('logs in by setting token manually', () => {
// //       const token = 'sozm9NndejKfSZkP4R2Ahr5bxt33D8jPUJ0QBrsrqxz9W2GyRRDlDrAVj3pEsJCjeT48VnpsBDjJIIjPaJU1tW/06hb45qpgU6kPmcFwS7IetCqGW0rNOVU+tPqYP178'; // You can keep it in a fixture also
  
// //       cy.visit('https://talent.woyage.ai/', {
// //         onBeforeLoad(win) {
// //           win.localStorage.setItem('your_token_key', token);
// //         }
// //       });
  
// //       cy.visit('https://talent.woyage.ai/app#resume');
// //     });
// //   });

// // describe('Manual Token Login', () => {
// //     it('logs in by setting token manually and holds the resume page for testing', () => {
// //       const token = 'q6QfYa0xupIBrwR2Tk9rvJSWCqs/49aBoSFUP5e8MXRjEJPX08ddhqWOcD/4pda6RwNiBcy3bFLFWY4RI8EkYXePoNvAp3pT0itz2e3to8tRXHd3ThXQHeTyDS3F2LC1'; // Your token
      
// //       cy.visit('https://talent.woyage.ai/', {
// //         onBeforeLoad(win) {
// //           win.localStorage.setItem('q6QfYa0xupIBrwR2Tk9rvJSWCqs/49aBoSFUP5e8MXRjEJPX08ddhqWOcD/4pda6RwNiBcy3bFLFWY4RI8EkYXePoNvAp3pT0itz2e3to8tRXHd3ThXQHeTyDS3F2LC1', token);
// //         }
// //       });
  
// //       // Visit the resume page after setting the token
// //       cy.visit('https://talent.woyage.ai/app#resume');
      
// //       // Wait for a key element on the #resume page to load
// //       cy.get('.resume-page-loaded-element', { timeout: 10000 }).should('be.visible'); // Adjust with actual element on the resume page
  
// //       // Wait for a few seconds to simulate holding the page
// //       cy.wait(5000); // Holds the page for 5 seconds to allow testing functionality
      
// //       // Add further assertions here if you need to verify the functionality
// //     });
// //   });

// // describe('Manual Token Login', () => {
// //     it('logs in by setting token manually and holds the resume page for testing', () => {
// //       const token = 'q6QfYa0xupIBrwR2Tk9rvJSWCqs/49aBoSFUP5e8MXRjEJPX08ddhqWOcD/4pda6RwNiBcy3bFLFWY4RI8EkYXePoNvAp3pT0itz2e3to8tRXHd3ThXQHeTyDS3F2LC1'; // Your token 
  
// //       cy.visit('https://talent.woyage.ai/app#resume', {
// //         onBeforeLoad(win) {
// //           // Set your token correctly with the correct key!
// //           win.localStorage.setItem('woyage_user_session', token); 
// //           // Replace 'authToken' with your app's real token key name
// //         }
// //       });
  
// //       // Wait for a key element on the #resume page to load
// //       cy.get('.resume-page-loaded-element', { timeout: 10000 }).should('be.visible'); 
// //       // Replace '.resume-page-loaded-element' with an actual selector on the resume page
  
// //       // Hold for 5 seconds
// //       cy.wait(5000);
// //     });
// //   });
  
  
// // describe('Manual Token Login', () => {
// //     it('logs in by setting token manually and holds the resume page for testing', () => {
// //       const token = 'q6QfYa0xupIBrwR2Tk9rvJSWCqs/49aBoSFUP5e8MXRjEJPX08ddhqWOcD/4pda6RwNiBcy3bFLFWY4RI8EkYXePoNvAp3pT0itz2e3to8tRXHd3ThXQHeTyDS3F2LC1';
  
// //       // STEP 1: Open a blank page first
// //       cy.visit('about:blank');
  
// //       // STEP 2: Set the token
// //       cy.window().then((win) => {
// //         win.localStorage.setItem('woyage_user_session', token);
// //       });
  
// //       // STEP 3: Now visit the real page
// //       cy.visit('https://talent.woyage.ai/app#resume');
  
// //       // STEP 4: Confirm you're on resume page
// //       cy.get('your_selector_for_resume_page', { timeout: 20000 }).should('exist'); // Replace with real selector
// //     });
// //   });

// // describe('Manual Token Login', () => {
// //     it('logs in by setting token manually and holds the resume page for testing', () => {
// //       const token = 'q6QfYa0xupIBrwR2Tk9rvJSWCqs/49aBoSFUP5e8MXRjEJPX08ddhqWOcD/4pda6RwNiBcy3bFLFWY4RI8EkYXePoNvAp3pT0itz2e3to8tRXHd3ThXQHeTyDS3F2LC1';
  
// //       // STEP 1: Visit the login/home page with onBeforeLoad
// //       cy.visit('https://talent.woyage.ai/', {
// //         onBeforeLoad(win) {
// //           // STEP 2: Set token immediately
// //           win.localStorage.setItem('woyage_user_session', token);
// //         }
// //       });
  
// //       // STEP 3: After token set, navigate to /app#resume
// //       cy.visit('https://talent.woyage.ai/app#resume');
  
// //       // STEP 4: Confirm something loaded on Resume page
// //      // cy.get('AI Powered Resume Builder', { timeout: 20000 }).should('exist'); // Change selector as per actual page
// //     });
// //   });

// // describe('Manual Token Login', () => {
// //     it('logs in by setting token manually and stays on the resume page', () => {
// //       const token = 'q6QfYa0xupIBrwR2Tk9rvJSWCqs/49aBoSFUP5e8MXRjEJPX08ddhqWOcD/4pda6RwNiBcy3bFLFWY4RI8EkYXePoNvAp3pT0itz2e3to8tRXHd3ThXQHeTyDS3F2LC1';
  
// //       // STEP 1: First visit the base domain without loading anything
// //       cy.visit('https://talent.woyage.ai/', { failOnStatusCode: false });
  
// //       // STEP 2: Set the token into localStorage AFTER loading
// //       cy.window().then((win) => {
// //         win.localStorage.setItem('woyage_user_session', token);
// //       });
  
// //       // STEP 3: Now reload the page to simulate "token already present"
// //       cy.reload();
  
// //       // STEP 4: Now visit the Resume page
// //       cy.visit('https://talent.woyage.ai/app#resume');
  
// //       // STEP 5: Assert Resume page loaded
// //      // cy.contains('AI Powered Resume Builder', { timeout: 20000 }).should('be.visible');
// //     });
// //   });
  
// // describe('Manual Token Login using Custom Command', () => {
// //   it('logs in and stays on Resume page', () => {

// //       const token = 'q6QfYa0xupIBrwR2Tk9rvJSWCqs/49aBoSFUP5e8MXRjEJPX08ddhqWOcD/4pda6RwNiBcy3bFLFWY4RI8EkYXePoNvAp3pT0itz2e3to8tRXHd3ThXQHeTyDS3F2LC1';
  
// //       // Visit the page
// //       cy.visit('https://talent.woyage.ai/', { failOnStatusCode: false, pageLoadTimeout: 0 });


// //       cy.intercept('GET', 'https://ekr.zdassets.com/compose/*', {
// //         statusCode: 200,
// //         body: { success: true }, // Mocked successful response
// //       }).as('mockedRequest');

// //       cy.intercept('POST', 'https://woyage.zendesk.com/*', { statusCode: 200 }).as('zendeskRequest');
// //       cy.intercept('POST', 'https://www.google-analytics.com/*', { statusCode: 200 }).as('googleAnalyticsRequest');

// //       // Set the token in localStorage or sessionStorage
// //       cy.window().then((win) => {
// //           win.localStorage.setItem('auth_token', token);  // or win.sessionStorage.setItem('auth_token', token);
// //       });

// //       // Visit the Resume page directly after setting the token
// //       cy.visit('https://talent.woyage.ai/app#resume', { failOnStatusCode: false });
// // cy.get('.interview-icon.icon', { timeout: 10000 }) // wait up to 10 seconds
// //   .should('be.visible') // make sure it’s visible
// //   .click({ force: true });

// //   });
// // });

// describe('Manual Token Login using Custom Command', () => {
//   it('logs in and stays on Resume page', () => {

//       const token = 'q6QfYa0xupIBrwR2Tk9rvJSWCqs/49aBoSFUP5e8MXRjEJPX08ddhqWOcD/4pda6RwNiBcy3bFLFWY4RI8EkYXePoNvAp3pT0itz2e3to8tRXHd3ThXQHeTyDS3F2LC1';
  
//       // Intercept Zendesk to block it fully
//       cy.intercept('GET', 'https://ekr.zdassets.com/compose/*', {
//         forceNetworkError: true
//       }).as('blockedZendesk');

//       cy.wait('@mockedRequest');


//       cy.intercept('POST', 'https://woyage.zendesk.com/*', { statusCode: 200 }).as('zendeskPost');
//       cy.intercept('POST', 'https://www.google-analytics.com/*', { statusCode: 200 }).as('googleAnalytics');

//       cy.visit('https://talent.woyage.ai/', { failOnStatusCode: false, pageLoadTimeout: 0 });

//       cy.loginWithToken(token);

//       cy.visit('https://talent.woyage.ai/app#resume', { failOnStatusCode: false });

//       cy.get('.interview-icon.icon', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//   });
// });
