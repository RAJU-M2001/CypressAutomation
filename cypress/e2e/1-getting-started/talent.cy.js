describe('Dashboard Tests', () => {

  beforeEach(() => {
    cy.login(); // triggers session cache
    cy.visit('https://talent.woyage.ai/app#resume'); // or wherever you want to land after login
  });

  it('should display the dashboard correctly', () => {
    cy.contains('AI Powered Resume Builder'); // or any element you expect after login
  });

});
