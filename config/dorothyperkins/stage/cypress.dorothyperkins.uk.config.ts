import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
import { giftCertificate } from '../../../cypress/support/e2e';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.dorothyperkins.com/',
    sku: '#AQQ16492-3',
    fullSku: 'AQQ16492-132-910',
    brand: 'dorothyperkins.com',
    locale: 'UK',
    language: 'EN',
    giftCertificate: 'QCJVQMKIMVTVRIRP'
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
    reportDir: 'config/dorothyperkins/results',
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
