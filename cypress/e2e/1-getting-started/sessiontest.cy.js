describe('Session in cypress', function (){

    beforeEach(()=>{
        cy.visit('/');
        cy.get('#login2').click();
        cy.wait(3000)
        cy.get('#loginusername').type('CypressAutomation');
        cy.get('#loginpassword').type('123456',{log:false});
        cy.get('.btn-primary').contains('Log-in').click();
        
    });
    it('Test case 1', function () {

    });
    it('Test case 2', function (){

    })
});