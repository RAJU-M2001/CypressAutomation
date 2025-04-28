describe("Vist HRM site",()=>{
    it('Test the entire test case and make proper report',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ failOnStatusCode: false });
        cy.wait(2000);
        cy.get("input[placeholder='Username']").type('Admin',{force:true});
        cy.wait(1000);
        cy.get("input[placeholder='Password']").type('admin123',{force:true});
        cy.wait(1000);
        // cy.get("button[type='submit']").click({force:true});
        // cy.wait(2000);
        // cy.go('back');
        // cy.get("input[placeholder='Username']").type('Admin',{force:true});
        // cy.get("input[placeholder='Password']").type('admin124',{force:true});
        // cy.get("button[type='submit']").click({force:true});
        // cy.wait(2000);
    })
})