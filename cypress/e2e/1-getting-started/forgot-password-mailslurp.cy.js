// // cypress/e2e/forgot-password-mailslurp.cy.js

// describe('Forgot Password with MailSlurp (Fixed Inbox)', () => {
//     const inboxId = '29573bc5-862b-4a10-8403-be2b6c8491bd';
//     const emailAddress = '29573bc5-862b-4a10-8403-be2b6c8491bd@mailslurp.biz';
  
//     it('Receives verification code via email', () => {
//       // Step 1: Visit forgot password page
//       cy.visit('https://talent.woyage.ai/');
//       cy.wait(1000);
  
//       cy.get("p[class='tw-text-sm tw-text-gray-400 focus:tw-text-blue-500 hover:tw-text-blue-700 tw-font-semibold forgot-password tw-underline tw-cursor-pointer']")
//         .click({ force: true });
  
//       cy.get('#email').type(emailAddress);
//       cy.get("button[type='submit']").click({ force: true });
  
//       // Step 2: Wait and get email with code
//       cy.task('waitForLatestEmail', inboxId).then((email) => {
//         expect(email.subject).to.include('Verification Code');
  
//         const code = email.body.match(/\d{6}/)[0]; // Adjust regex if needed
//         cy.get('#code').type(code);
//         cy.wait(1000);
//         cy.get('#password').type('Asdfghjkl!1');
//         cy.wait(1000);
//         cy.get("button[type='submit']").click();
  
//         // Step 3: Assert success message
//         cy.contains('Password successfully updated');
//       });
//     });
//   });
  

// cypress/e2e/forgot-password-mailslurp.cy.js

describe('Forgot Password with MailSlurp', () => {
    it('Receives verification code via email', () => {
      cy.task('createInbox').then((inbox) => {
        const emailAddress = inbox.emailAddress;
        const inboxId = inbox.id;
  
        cy.visit('https://talent.woyage.ai/');
        cy.wait(1000);
  
        cy.get("p[class='tw-text-sm tw-text-gray-400 focus:tw-text-blue-500 hover:tw-text-blue-700 tw-font-semibold forgot-password tw-underline tw-cursor-pointer']")
          .click({ force: true });
  
        cy.get('#email').type(emailAddress);
        cy.get("button[type='submit']").click({ force: true });
  
        // ✅ Wait for email and log raw details
        cy.task('waitForLatestEmail', inboxId).then((email) => {
          cy.log('📧 Email Subject:', email.subject);
          cy.log('📨 Email Body:', email.body);
  
          console.log('✅ Raw Email Object:', email); // LOG to terminal
  
          // ✅ Extract 6-digit code
          const codeMatch = email.body.match(/\d{6}/);
          expect(codeMatch, 'Verification code found in email').to.not.be.null;
          const code = codeMatch[0];
          cy.log('✅ Verification Code:', code);
  
          cy.get('#code').type(code);
          cy.get('#password').type('Asdfghjkl!1');
          cy.get("button[type='submit']").click();
  
          cy.contains('Password successfully updated');
        });
      });
    });
  });
  