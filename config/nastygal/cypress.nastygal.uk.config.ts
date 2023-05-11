import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@us1-dwstg.nastygal.com/gb',
    sku: '#AGG78323-3', // Needs hashtag for assertation on PDP
    fullSku: 'AGG78323-158-16',
    brand: 'nastygal.com',
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
    reportDir: 'config/nastygal/results',
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    setupNodeEvents (on) {
      plugins(on);
    },
    excludeSpecPattern: [
      '**/backend*/**' // Skip backend tests
    ],
    experimentalSessionAndOrigin: true,
    numTestsKeptInMemory: 0,
  },
});
