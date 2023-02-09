import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'eqvgg4',

  env: {
    url: 'https://storefront:Oreo2022@dwdev.boohooman.com/', 
    sku: 'MZZ61184',
    fullSKU: 'MZZ61184-131-30',
    brand: 'boohooman.com',
    locale: 'UK',
    language: 'EN',
  },

  viewportHeight: 1920,
  viewportWidth: 1080,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents (on) {
      plugins(on);
    },
    experimentalSessionAndOrigin: true,
    numTestsKeptInMemory: 0,
  },
});
