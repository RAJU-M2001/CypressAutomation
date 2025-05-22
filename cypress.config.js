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


// const { defineConfig } = require('cypress');
// require('dotenv').config(); // If using .env file

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     reportFilename: 'mochawesome',
//     overwrite: false,
//     html: false,
//     json: true,
//     saveJson: true
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//       on('task', {
//         async createInbox() {
//           return await mailslurp.createInbox();
//         },
//         async waitForLatestEmail(inboxId) {
//           return await mailslurp.waitForLatestEmail(inboxId, 30000);
//         }
//       });
//       return config;
//     },
//     testIsolation: false,
//   },
// });

// const { defineConfig } = require('cypress');
// require('dotenv').config(); // Load environment variables

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     reportDir: 'cypress/reports',
//     reportFilename: 'mochawesome',
//     overwrite: false,
//     html: false,
//     json: true,
//     saveJson: true
//   },
//   e2e: {
//     setupNodeEvents(on, config) {
//      // require('cypress-mochawesome-reporter/plugin')(on);
//      on('before:browser:launch', (browser = {}, launchOptions) => {
//   if (browser.name === 'chrome') {
//     launchOptions.args.push(
//       '--use-fake-ui-for-media-stream',                         // auto-allow permissions
//       '--use-fake-device-for-media-stream',                     // simulate device
//       '--use-file-for-fake-video-capture=cypress/fixtures/sample-video.y4m', // mock webcam
//       '--use-file-for-fake-audio-capture=cypress/fixtures/sample-audio.wav'  // mock mic
//     );
//   }
//   return launchOptions;
// });
//       on('task', {
//         async createInbox() {
//           return await mailslurp.createInbox();
//         },
//         async waitForLatestEmail(inboxId) {
//           return await mailslurp.waitForLatestEmail(inboxId, 30000);
//         }
//       });

//       return config;
//     },
//     testIsolation: false,
//   },
// });


const cypress = require("cypress");
const { defineConfig } = require("cypress");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://stage.woyage.ai/',
    setupNodeEvents(on, config) {
     on('before:browser:launch', (browser = {}, launchOptions) => {
  if (browser.name === 'chrome') {
    launchOptions.args.push(
      '--use-fake-ui-for-media-stream',                         // auto-allow permissions
      '--use-fake-device-for-media-stream',                     // simulate device
      `--use-file-for-fake-video-capture=${path.resolve('cypress\fixtures\sample-audio.y4m')}`,
      `--use-file-for-fake-audio-capture=${path.resolve('cypress\fixtures\sample-video.wav')}`

    );
  }
  return launchOptions;
});
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir :'cypress/reports/json',
      overwrite : false,
      html : false,
      json : true,
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: false,
  }
});