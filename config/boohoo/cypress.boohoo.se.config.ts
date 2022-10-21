import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@se-dwstg.boohoo.com/',
    sku: '#DZZ79497',
    brand: 'boohoo.com',
    locale: 'SE',
    language: 'SE',
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
