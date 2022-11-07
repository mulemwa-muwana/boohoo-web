import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dev.misspap.com',
    sku: 'MPP03347-186',
    fullSKU: 'MPP03347-186-14',
    brand: 'misspap.com',
    locale: 'UK',
    language: 'EN'
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents (on) {
      plugins(on);
    },

    numTestsKeptInMemory: 0,
    watchForFileChanges: false
  },

});

