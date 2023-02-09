import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.boohooman.com/',
    sku: 'BMM28486',
    brand: 'boohooman.com',
    locale: 'UK',
    language: 'EN',
  },

  viewportHeight: 1920,
  viewportWidth: 1080,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'config/boohooman/results',
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
