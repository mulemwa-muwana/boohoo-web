import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
import { giftCertificate } from '../../../cypress/support/e2e';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@stg.karenmillen.com', 
    sku: 'BKK09726-1',
    fullSku: 'BKK09726-105-18',
    brand: 'karenmillen.com',
    locale: 'UK',
    language: 'EN',
    giftCertificate: 'AOFZAOMQQKIZJIKM'
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
    reportDir: 'config/karenmillen/results',
    overwrite: false,
    html: false,
    json: true,
  },
  
  e2e: {
    setupNodeEvents (on) {
      plugins(on);
    },
    excludeSpecPattern: [
      '**/backend*/**', // Skip backend tests
      '**/additionalTests*/**' // Skip additional tests
    ],
    numTestsKeptInMemory: 0,
    retries: 
    { 
      runMode: 2, 
      openMode: 1
    } ,
  },

});

