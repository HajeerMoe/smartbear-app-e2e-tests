const { defineConfig } = require("cypress");
require('dotenv').config() 

const mochawesome = require('cypress-mochawesome-reporter/plugin')
module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  downloadsFolder: 'assets/downloads',
  screenshotsFolder: 'assets/screenshots',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'SmartBear App Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
  },
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      mochawesome(on);
      require('@cypress/grep/src/plugin')(config);
      return config
    },
  },
});
