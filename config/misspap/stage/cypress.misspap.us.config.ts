import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
import { giftCertificate } from '../../../cypress/support/e2e';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@stg.misspap.com/us',
    sku: 'MPP00243-4',
    fullSku: 'MPP00243-399-16',
    brand: 'misspap.com',
    locale: 'US',
    language: 'EN',
    giftCertificate: 'RWHRHFYAZSRILYAR',
  },

  viewportHeight: 667,
  viewportWidth: 370,
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
    giftCertificate: 'JIPYLJDSIZVAGGFD'
  },

  e2e: {
    setupNodeEvents (on, config) {
      plugins(on);
    },
    excludeSpecPattern: [
      '**/backend*/**' // Skip backend tests
    ],
    numTestsKeptInMemory: 0
  },   
});
