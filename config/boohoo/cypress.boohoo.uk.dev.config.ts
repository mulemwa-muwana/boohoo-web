import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@uk-dwdev.boohoo.com',
    sku: 'DZZ95577',
    fullSKU: 'DZZ95577-104-14',
    brand: 'boohoo.com',
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

    numTestsKeptInMemory: 0
  },

});

