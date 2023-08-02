import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
import { giftCertificate } from '../../../cypress/support/e2e';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.warehousefashion.com',
    sku: 'BWW02147-3',
    fullSku: 'BWW02147-105-20',
    brand: 'warehousefashion.com',
    locale: 'UK',
    language: 'EN',
    giftCertificate: 'CMMGKPWWLWWCSFZW'
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
    reportDir: 'config/warehouse/results',
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

