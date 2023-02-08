import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'eqvgg4',

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
  video: true,
  screenshotOnRunFailure: true,
  
  e2e: {
    setupNodeEvents (on) {
      plugins(on);
    },
    experimentalSessionAndOrigin: true,
    numTestsKeptInMemory: 0,
  },

});

