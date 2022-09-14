import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwdev.dorothyperkins.com/eu',
    sku: '#AQQ42330-141',
    brand: 'dorothyperkins.com',
    locale: 'EU',
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
  },
  numTestsKeptInMemory: 0
});
