import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.dorothyperkins.com/eu',
    sku: '#AQQ42330-141',
    brand: 'dorothyperkins.com',
    locale: 'EU',
    language: 'EN',
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents (on, config) {
      plugins(on);
    },
    experimentalSessionAndOrigin: true,
    numTestsKeptInMemory: 0,
  },
});
