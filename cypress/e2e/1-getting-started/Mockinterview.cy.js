// describe('Test the mock interview',()=>{
//     beforeEach(() => {
//       cy.session('loginSession', () => {
//         cy.login(); // Calls the login command we defined
//       });
//       // You must visit a page after restoring session
//       cy.visit('https://stage.woyage.ai/app#interview', {
//         auth: {
//           username: 'betatest',
//           password: 'woyagetest'
//         }
//       });
//     });
//     // Handle known uncaught React errors
//     Cypress.on('uncaught:exception', (err) => {
//       if (err.message.includes('Minified React error #418')) {
//         return false;
//       }
//     });
//     it('Should visit the Resume page after login', () => {
//       cy.url().should('include', '/app#interview');
//     });
//     it('Test the mock interview feature',()=>{
//     cy.wait(1000);
//     cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-single css-1m5113o e1gn6jc30'])[1]").click({force:true})
//     cy.xpath("//span[@aria-label='Meta']").click({force:true}) //Company Name
//     cy.wait(1000);

//     cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-single css-1m5113o e1gn6jc30'])[2]").click({force:true})
//     cy.xpath("//span[@aria-label='Technical Program Manager']").click({force:true}); //Job Title
//     cy.wait(1000);

//     cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-single css-1m5113o e1gn6jc30'])[3]").click({force:true})
//     cy.xpath("//span[@aria-label='Technical']").click({force:true}) //Interview type
//     cy.wait(1000);

//     cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-multi css-1m5113o e1gn6jc30'])[1]").click({force:true})
//     cy.xpath("//span[@aria-label='Product']").click({force:true}); //Specialization
//     cy.wait(1000);

//    // cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-multi css-1m5113o e1gn6jc30'])[2]").click({force:true})

//     //cy.xpath("//div[@class='tw-w-full tw-relative tw-mt-14 tw-justify-start tw-flex start-btn-wrapper']").click({force:true});

//     cy.xpath("//p[contains(@class,'text tw-p-0 tw-m-0 tw-flex tw-items-center tw-justify-center tw-px-2 tw-h-full tw-float-left tw-cursor-pointer')]").click({force:true}) //start interview 

//     cy.get('video')
//       .should('exist')
//       .and(($video) => {
//         expect($video[0].readyState).to.be.greaterThan(2);
//         expect($video[0].paused).to.be.false;
//       });

//     cy.get('audio').then(($audio) => {
//       if ($audio.length > 0) {
//         expect($audio[0].readyState).to.be.greaterThan(2);
//         expect($audio[0].paused).to.be.false;
//       }
//       });
//     });
// });


describe('Test the mock interview', () => {
  beforeEach(() => {
    cy.session('loginSession', () => {
      cy.login();
    });

    cy.visit('/app#interview', {
      auth: {
        username: 'betatest',
        password: 'woyagetest',
      },
      onBeforeLoad(win) {
        cy.stub(win.navigator.mediaDevices, 'getUserMedia').callsFake(() =>
        Promise.resolve(new MediaStream())
      );
      if(win.navigator.permissions){
        cy.stub(win.navigator.permissions, 'query').callsFake(()=>
          Promise.resolve({ state: 'granted'})
        );
      }
    }
    });
  });

  Cypress.on('uncaught:exception', (err) => {
    console.error('Uncaught exception:',err.message);
      return false;
  });

  it('Should visit the Resume page after login', () => {
    cy.url().should('include', '/app#interview');
  });

  it('Test the mock interview feature', () => {
    cy.viewport(1440,900);
    cy.log('Selecting company, job role, interview type and specialization');
    cy.wait(1000);
    cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-single css-1m5113o e1gn6jc30'])[1]").click({force:true})
    cy.xpath("//span[@aria-label='Meta']").click({force:true}) //Company Name
    cy.wait(1000);

    cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-single css-1m5113o e1gn6jc30'])[2]").click({force:true})
    cy.xpath("//span[@aria-label='Technical Program Manager']").click({force:true}); //Job Title
    cy.wait(1000);

    cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-single css-1m5113o e1gn6jc30'])[3]").click({force:true})
    cy.xpath("//span[@aria-label='Technical']").click({force:true}) //Interview type
    cy.wait(1000);

    cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-multi css-1m5113o e1gn6jc30'])[1]").click({force:true})
    cy.xpath("//span[@aria-label='Product']").click({force:true}); //Specialization
    cy.wait(1000);

   // cy.xpath("(//div[@class='react-dropdown-select-content react-dropdown-select-type-multi css-1m5113o e1gn6jc30'])[2]").click({force:true})

    //cy.xpath("//div[@class='tw-w-full tw-relative tw-mt-14 tw-justify-start tw-flex start-btn-wrapper']").click({force:true});

    cy.xpath("//p[contains(@class,'text tw-p-0 tw-m-0 tw-flex tw-items-center tw-justify-center tw-px-2 tw-h-full tw-float-left tw-cursor-pointer')]").click({force:true}) //start interview 
  });
});
