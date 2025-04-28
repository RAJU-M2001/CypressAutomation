// // cypress/e2e/login_using_token.cy.js

// describe('Login using token', () => {
//     it('sets token manually and visits dashboard', () => {
//       const token = 'yMLTikBl/v1JzjAA1f1CPq8etxTDhkpSVNBmqus6VLwA7h+5IwRFyMqshhoVaMyfY6APfJrGKcvPcc+t+dWhwZ92k+a14TY35Jn+PNyTPxXSbZSz0rZMlzZGB5VVi8QT';
      
//       cy.visit('https://talent.woyage.ai/');
//       cy.window().then((window) => {
//         window.localStorage.setItem('yMLTikBl/v1JzjAA1f1CPq8etxTDhkpSVNBmqus6VLwA7h+5IwRFyMqshhoVaMyfY6APfJrGKcvPcc+t+dWhwZ92k+a14TY35Jn+PNyTPxXSbZSz0rZMlzZGB5VVi8QT', token); //change as auth token
//       });
//       cy.wait(1000);
//       cy.visit('https://talent.woyage.ai/app#resume');
      
//       //cy.contains('AI Powered Resume Builder'); // or any element that confirms login
//     });
//   });
  describe('Login using token', () => {
    it('sets token manually and visits dashboard', () => {
      const token = 'yMLTikBl/v1JzjAA1f1CPq8etxTDhkpSVNBmqus6VLwA7h+5IwRFyMqshhoVaMyfY6APfJrGKcvPcc+t+dWhwZ92k+a14TY35Jn+PNyTPxXSbZSz0rZMlzZGB5VVi8QT'; // Replace with your actual token
      
      cy.loginWithToken(token);
      cy.visit('https://talent.woyage.ai/app#resume');  // Visit the resume builder page
  
      cy.contains('AI Powered Resume Builder'); // Or any other text that confirms login
    });
  });