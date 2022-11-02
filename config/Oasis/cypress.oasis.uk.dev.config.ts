import { defineConfig } from 'cypress';
import plugins from 'cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwdev.oasisfashion.com',
    sku: 'AAA73613-152',
    fullSKU: 'AAA73613-152-14',
    brand: 'oasis-stores.com',
    locale: 'UK',
    language: 'EN',
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,

  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents (on) {
      plugins(on);
    },

    numTestsKeptInMemory: 0
  },
});
