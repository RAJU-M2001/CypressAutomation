describe('Talent App Tests', () => {

    // Use session to login once and reuse across tests
    beforeEach(() => {
      cy.session('loginSession', () => {
        cy.login(); // Calls the login command we defined
      });
      // You must visit a page after restoring session
      cy.visit('https://stage.woyage.ai/app#interview', {
        auth: {
          username: 'betatest',
          password: 'woyagetest'
        }
      });
    });
    // Handle known uncaught React errors
    Cypress.on('uncaught:exception', (err) => {
      if (err.message.includes('Minified React error #418')) {
        return false;
      }
    });
    it('Should visit the Resume page after login', () => {
      cy.url().should('include', '/app#interview');
    });
    it('Should navigate to the interview page via the FAQ icon', () => {
      cy.get(".faq-icon.icon").click({ force: true });
      cy.get(".interview-icon.icon").click({ force: true });
      cy.url().should('include', '/app#interview');
      cy.get(".faq-icon.icon").click({ force: true });
      cy.get(".interview-icon.icon").click({ force: true });
    });
    it('test2',()=>{
        cy.visit('https://stage.woyage.ai/app#interview');
        cy.wait(1000);
        cy.get(".faq-icon.icon").click({ force: true });
    })
  });
  