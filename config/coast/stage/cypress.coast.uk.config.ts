import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
import { giftCertificate } from '../../../cypress/support/e2e';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@stg.coastfashion.com/',
    sku: 'ACC00195-3',
    fullSku: 'ACC00195-148-51',
    brand: 'coastfashion.com',
    locale: 'UK',
    language: 'EN',
    giftCertificate: 'ZTCZDSQIPIRCQDFS'
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
    reportDir: 'config/coast/results',
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
    numTestsKeptInMemory: 0,
  },   
});
