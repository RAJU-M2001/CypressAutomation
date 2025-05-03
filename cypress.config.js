// const { defineConfig } = require('cypress');


// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter', //  MUST be this
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     reportFilename: 'mochawesome',
//     overwrite: false,
//     html: false,
//     json: true,
//     saveJson: true //  Force save to reportDir instead of hidden folder
//   },
//   e2e: {
//     //baseUrl: 'http://localhost:3000', // or your deployed URL
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//       return config;
      
      
//     },
//     testIsolation: false,  // <- if you want to share states across tests
//   },
  
// });


const { defineConfig } = require('cypress');
const { MailSlurp } = require('mailslurp-client');

const mailslurp = new MailSlurp({ apiKey: '202c75b642808fb0012610a73f0634a8b6360a348fabb01ffa58032c2f1ee01c' }); // ← paste your real API key here or load from env

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'mochawesome',
    overwrite: false,
    html: false,
    json: true,
    saveJson: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // ✅ Register MailSlurp tasks
      on('task', {
        async createInbox() {
          return await mailslurp.createInbox();
        },
        async waitForLatestEmail(inboxId) {
          return await mailslurp.waitForLatestEmail(inboxId, 30000);
        }
      });

      return config;
    },
    testIsolation: false,
  },
});
