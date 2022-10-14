import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.nastygal.com/gb',
    sku: 'BGG07330-1',
    brand: 'nastygal.com',
    locale: 'UK',
    language: 'EN',
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents (on) {
      plugins(on);
    },

    numTestsKeptInMemory: 0
  },
});
