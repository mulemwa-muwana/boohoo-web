import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.warehousefashion.com',
    sku: 'BWW03501-2',
    fullSKU: 'BWW03501-105-14',
    brand: 'warehousefashion.com',
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

