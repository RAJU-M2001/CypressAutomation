describe('Talent App Tests', () => {
    beforeEach(() => {
      cy.session('loginSession', () => {
        cy.login(); // Use the custom login command
      });
    });

    it('Should visit the Resume page after login', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Minified React error #418')) {
              console.log('Caught React Error #418:', err);
              return false; // Prevent the test from failing due to this error
            }
            return true; // Allow other errors to fail the test as usual
    });
})
    it('test',()=>{
        cy.visit('https://talent.woyage.ai/app#resume'); // Should already be logged in and directly visit the resume page
        cy.get(".faq-icon.icon").click({force:true});
        cy.wait(1000);
    })
    it('test3',()=>{
        cy.visit('https://talent.woyage.ai/app#faq')
        cy.get('.plans-icon.icon').click();
    })
    it('test4',()=>{
        cy.visit('https://talent.woyage.ai/app#plans')
        cy.get('.resume-icon.icon').click();
    })
    it.only('Test5',()=>{
        cy.visit('https://talent.woyage.ai/app#resume')
            cy.get('.faq-icon.icon').click();
    })
    it('test9',()=>{
        cy.visit('https://talent.woyage.ai/app#faq')
        cy.get('.plans-icon.icon').click();
        cy.get('.faq-icon.icon').click();
        cy.wait(1000);
        cy.get('.resume-icon.icon').click();
        cy.get('.faq-icon.icon').click();
    })

});
