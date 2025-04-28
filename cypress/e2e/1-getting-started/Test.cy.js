describe("Launch the talent",()=>{
  it("Test the entire talent",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Ignore React error 418
    });
    cy.visit("https://talent.woyage.ai/", { timeout: 120000 });
  })
})