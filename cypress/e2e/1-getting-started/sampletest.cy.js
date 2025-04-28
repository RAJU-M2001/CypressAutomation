describe('My Sample Test', () => {
    it('Visits the example page', () => {
      cy.visit('https://example.cypress.io');
      cy.contains('Kitchen Sink');
    });
  });
  