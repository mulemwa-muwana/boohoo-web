import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.burton.co.uk/',
    sku: 'ABB15843',
    fullSku: 'ABB15843-105-56',
    brand: 'burton.co.uk',
    locale: 'UK',
    language: 'EN',
    giftCertificate: 'CWSVGCZOYHZSDMWL',
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,

  // Create Mochawesome report after 'cypress run' tests finish
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'config/burton/results',
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
    numTestsKeptInMemory: 0,
  },
});
