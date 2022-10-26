import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@us1-dwstg.nastygal.com/fr/',
    sku: '#BGG07330-1',
    brand: 'nastygal.com',
    locale: 'FR',
    language: 'FR',
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
});
