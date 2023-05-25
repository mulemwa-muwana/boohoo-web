import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'eqvgg4',

  env: {
    url: 'https://storefront:Oreo2022@us1-dev.nastygal.com/gb',
    sku: 'AGG83443-103-30',
    fullSku: 'AGG83443-103-30',
    brand: 'nastygal.com',
    locale: 'UK',
    language: 'EN',
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
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
