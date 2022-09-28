import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwdev.oasisfashion.com/',
    sku: 'AAA67414-294',
    brand: 'oasis-stores.com',
    locale: 'UK',
    language: 'EN',
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents (on, config) {

      // Implement node event listeners here
    },
    numTestsKeptInMemory: 0
  },
});
