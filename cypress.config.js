const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bmtq44',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
