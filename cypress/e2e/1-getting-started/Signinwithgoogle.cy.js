describe('Test the Sign in with google fuction',()=>{
    it('It should sign in with the clicked button',()=>{
        cy.visit('https://talent.woyage.ai/');
        cy.wait(1000);
        cy.get("span[class='tw-mx-2']").click({force:true});
    })
})