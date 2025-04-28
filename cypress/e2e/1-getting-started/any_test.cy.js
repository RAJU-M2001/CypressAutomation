// cypress/e2e/any_test.cy.js

describe('Token login test', () => {
    it('logs in using custom command', () => {
      const token = 'yMLTikBl/v1JzjAA1f1CPq8etxTDhkpSVNBmqus6VLwA7h+5IwRFyMqshhoVaMyfY6APfJrGKcvPcc+t+dWhwZ92k+a14TY35Jn+PNyTPxXSbZSz0rZMlzZGB5VVi8QT';
  
      cy.loginWithToken(token); // custom command
      cy.visit('https://talent.woyage.ai/');
    });
  });
  