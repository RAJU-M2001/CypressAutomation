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
        cy.get(".myresume-icon.icon").click({force:true});
        cy.wait(1000);
        cy.get(".resume-icon.icon").click({fore:true});
        cy.wait(1000);
        cy.get(".create-resume-btn.tw-bg-white.tw-text-blue.tw-font-semibold.tw-text-base.tw-max-w-md.tw-h-60.tw-flex.tw-flex-col.tw-items-center.tw-justify-center.tw-cursor-pointer.tw-mx-auto").click({force:true})
        cy.get(".resume-icon.icon").click({fore:true});
    

    });
    it('Test2',()=>{
        cy.get('input#uploadFile1').attachFile('M RAJU.pdf', { force: true }); 
    })
});
