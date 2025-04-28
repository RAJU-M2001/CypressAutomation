describe('Testing the it function', () => {
    
    it('Login Test', () => {
        // const Email = "rajutamilarasan1@gmail.com"
        // const Password = "Qwertyuiop!1"

      cy.visit("https://talent.woyage.ai/")
        cy.wait(1000);
        cy.get("#email").type("rajutamilarasan1@gmail.com")
        cy.get("#password").type("Zxcvbnm!1")
        cy.get("button[type='submit']").click() // <--- click added
   
       
       // cy.contains("AI Powered Resume Builder").should('be.visible'); // verifies text is there
    })
})
