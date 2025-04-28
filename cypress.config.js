const { defineConfig } = require('cypress');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //  MUST be this
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'mochawesome',
    overwrite: false,
    html: false,
    json: true,
    saveJson: true //  Force save to reportDir instead of hidden folder
  },
  e2e: {
    //baseUrl: 'http://localhost:3000', // or your deployed URL
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
      
    },
  },
  
});
