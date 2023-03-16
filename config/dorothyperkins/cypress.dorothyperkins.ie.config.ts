import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.dorothyperkins.com/ie',
    sku: 'AQQ16660-3',
    fullSku: 'AQQ16660-132-913',
    brand: 'dorothyperkins.com',
    locale: 'IE',
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
    excludeSpecPattern: [
      '**/backend*/**' // Skip backend tests
    ],
    experimentalSessionAndOrigin: true,
    numTestsKeptInMemory: 0,
  },
});
