import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@stg.misspap.com/',
    sku: 'MPP01941-2',
    fullSku: 'MPP01941-173-16',
    brand: 'misspap.com',
    locale: 'UK',
    language: 'EN',
  },

  viewportHeight: 667,
  viewportWidth: 375,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,

  // Create Mochawesome report after 'cypress run' tests finish
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'config/misspap/results',
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    setupNodeEvents (on, config) {
      plugins(on);
    },
    excludeSpecPattern: [
      '**/backend*/**' // Skip backend tests
    ],
    experimentalSessionAndOrigin: true,
    numTestsKeptInMemory: 0
  },   
});
