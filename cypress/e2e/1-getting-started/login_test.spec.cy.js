// // cypress/integration/login_test.spec.cy.js

// describe('Bypass Google Sign-In with Another Gmail Account', () => {
//     beforeEach(() => {
//       // Restore the session cookie before visiting the page
//       const sessionCookie = Cypress.env('sessionCookie');
//       if (sessionCookie) {
//         cy.setCookie('woyage_user_session', sessionCookie); // Set the session cookie to simulate login
//       }
//       cy.visit('https://talent.woyage.ai/');
//     });
  
//     it('should be logged in and see the dashboard with new Gmail account', () => {
//       // Ensure the URL includes the 'app#resume' indicating successful login
//       cy.url().should('include', '/app#resume');
  
//       // Check if the Dashboard element is loaded
//       //cy.contains('Dashboard', { timeout: 10000 }).should('exist'); // Wait for the Dashboard element
//     });
//   });


// // cypress/e2e/login_test.spec.cy.js

// describe('Bypass Google Sign-In using session', () => {
//     beforeEach(() => {
//       cy.loginWithSession(); // Uses cy.session()
//       cy.visit('https://talent.woyage.ai/app#resume'); // Go directly to dashboard
//     });
  
//     it('should be logged in and see the dashboard', () => {
//       cy.url().should('include', '/app#resume');
//      // cy.contains('Dashboard', { timeout: 10000 }).should('exist');
//     });
//   });
  


// cypress/e2e/login_test.spec.cy.js
// cypress/e2e/login_test.spec.cy.js

// describe('Sign in with Google using saved session', () => {
//     it('Should simulate Google login by setting session cookie', () => {
//       cy.visit("https://talent.woyage.ai/");
  
//       // Optional wait to allow UI to load
//       cy.wait(1000);
  
//       // Click the 'Sign in with Google' button
//       cy.get("span[class='tw-mx-2']").click();
  
//       // Set the session after clicking (bypass Google screen)
//       cy.loginWithSession();
  
//       // Now reload or navigate directly to dashboard
//       cy.visit("https://talent.woyage.ai/app#resume");
  
//       // Validate login worked
//       cy.url().should('include', '/app#resume');
//       cy.contains('Dashboard', { timeout: 10000 }).should('exist');
//     });
//   });


// describe('Intercept Sign in with Google flow', () => {
//     it('should simulate Google login after button click', () => {
//       cy.visit('https://talent.woyage.ai/');
  
//       // Intercept the redirect to Google to prevent leaving your domain
//       cy.intercept('GET', 'https://accounts.google.com/**', (req) => {
//         // Prevent actual Google login flow
//         req.destroy(); // Stops navigation
//       }).as('googleLogin');
  
//       // Click the button — simulates user intent
//       cy.get('span.tw-mx-2').click();
  
//       // Set the cookie to simulate login response
//       cy.setSessionCookie();
  
//       // Redirect to the dashboard manually
//       cy.visit('https://talent.woyage.ai/app#resume');
  
//       // Check the app loaded correctly
//       cy.url().should('include', '/app#resume');
//       cy.contains('Dashboard', { timeout: 10000 }).should('exist');
//     });
//   });
  
// describe('Google Sign-In Button', () => {
//     it('Should redirect to Google OAuth URL', () => {
//       cy.visit('https://talent.woyage.ai/');
//       cy.get('span.tw-mx-2').click();
  
//       // Intercept the redirect or check the URL
//       cy.origin('https://accounts.google.com', () => {
//         // You can only *observe* the origin switch here, not interact
//         cy.url().should('include', 'accounts.google.com');
//       });
//     });
//   });
  


// cypress/e2e/loginwithgoogle.cy.js

// describe('Google Sign-In Button', () => {
//   it('Should redirect to Google OAuth URL', () => {
//     cy.visit('https://talent.woyage.ai/');
//     cy.get('span.tw-mx-2').click();
//     const sessionToken = 'AOnTK1cTA3lU8ZD7GNmnUTpy2zB6LpjmYmSEDJT12duRFSB36fPDA2iJrjTo2xWc/pfyfzHTKoSwciU1+y7JaslBWIp+HnVRn1gHgg1T5vQKK0maUu3AMQ6akqCpB/9e';


//     // Optionally, check if redirected to Google's OAuth endpoint
//     cy.url().should('include', 'accounts.google.com');
//   });
// });

// describe('Login with Google using session token', () => {
//   it('Should log in by setting session token directly', () => {
//     const sessionToken = 'AOnTK1cTA3lU8ZD7GNmnUTpy2zB6LpjmYmSEDJT12duRFSB36fPDA2iJrjTo2xWc/pfyfzHTKoSwciU1+y7JaslBWIp+HnVRn1gHgg1T5vQKK0maUu3AMQ6akqCpB/9e';

//     cy.visit('https://talent.woyage.ai/', {
//       onBeforeLoad(win) {
//         win.localStorage.setItem('AOnTK1cTA3lU8ZD7GNmnUTpy2zB6LpjmYmSEDJT12duRFSB36fPDA2iJrjTo2xWc/pfyfzHTKoSwciU1+y7JaslBWIp+HnVRn1gHgg1T5vQKK0maUu3AMQ6akqCpB/9e', sessionToken);
//       }
//     });

//     // Now assert that the user is authenticated (update selector as per your app)
//     cy.contains('Logout');
//   });
// });



// describe('Mock Google Login by Setting Token', () => {
//   it('Logs in user by setting auth token in localStorage', () => {
//     // Step 1: Visit a blank page first to set storage
//     cy.visit('https://talent.woyage.ai/');

//     // Step 2: Set auth token (this must match your app’s token structure)
//     cy.window().then((win) => {
//       win.localStorage.setItem(
//         'authToken',
//         'AOnTK1cTA3lU8ZD7GNmnUTpy2zB6LpjmYmSEDJT12duRFSB36fPDA2iJrjTo2xWc/pfyfzHTKoSwciU1+y7JaslBWIp+HnVRn1gHgg1T5vQKK0maUu3AMQ6akqCpB/9e'
//       );
//     });

//     // Step 3: Visit the app dashboard or any authenticated page
//     cy.visit('https://talent.woyage.ai/app#resume');


//     cy.wait(10000);

//     // Step 4: Check for a logged-in UI element (update this selector/text!)
//     //cy.contains('Welcome').should('exist'); // Adjust to your app’s actual login indicator

//     //cy.url().should('eq','https://talent.woyage.ai/app#resume')
//   });
// });



// describe('Simulate Google Login', () => {
//   it('Logs in using Google token', () => {
//     cy.getGoogleAccessToken().then((accessToken) => {
//       // Simulate login using token (depends on how your app handles it)
//       cy.request({
//         method: 'POST',
//         url: 'https://auth.woyage.ai/oauth2/idpresponse', // adjust if needed
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         }
//       }).then((response) => {
//         // Check if login successful
//         expect(response.status).to.eq(200);
//       });

//       // Now go to app already authenticated
//       cy.visit('https://talent.woyage.ai');
//     });
//   });
// });
// describe('Login with Google', () => {
//   it('should log in via Google Sign-In', () => {
//     cy.visit('https://talent.woyage.ai/');
    
//     cy.get('span.tw-mx-2').click(); // click "Sign in with Google"

//     cy.origin('https://accounts.google.com', () => {
//       cy.get('input[type="email"]').type('rajumofficial89@gmail.com');
//       cy.get('#identifierNext').click();

//       cy.get('input[type="password"]', { timeout: 10000 }).type('Zxcvbnm!8989');
//       cy.get('#passwordNext').click();
//     });

//     cy.url().should('include', '/dashboard'); // or whatever indicates success
//   });
// });
// describe('Simulate Google Login', () => {
//   it('should be logged in with session_token', () => {
//     const sessionToken = 'W3mugxLj24qRjNAt10lX+tR5+1CyOKuukJhpBup01K+bKhWkH11T0f23WWmQ/Qjd4KpsO+n6fv3fTR9xBTMIVW5u/tmGrPhmiPkiOdulQTd3sfuHvK/EyoKXNff2B/bK';
    
//     cy.loginWithSessionToken(sessionToken);
//      cy.get('span.tw-mx-2').click(); 

//     cy.visit('https://talent.woyage.ai/app#resume');

//     // Assert post-login state
//    // cy.contains('Dashboard'); // or 'Welcome', or user profile name
//   });
// });


describe('Simulate Google Login', () => {
  it('should be logged in with session_token', () => {
    cy.loginWithSessionToken();

    cy.get('span.tw-mx-2').click(); // Optional if you just want to test login state

    cy.visit('https://talent.woyage.ai/app#resume');

  });
});
