const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www-dev-xqjzn6pw0q.deel.training/',
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000,
    requestTimeout: 20000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
    waitForAnimations: true,

    experimentalSessionAndOrigin: false,
    slowTestThreshold: 24000,
    setupNodeEvents(on, config) {

    },
  },
});
