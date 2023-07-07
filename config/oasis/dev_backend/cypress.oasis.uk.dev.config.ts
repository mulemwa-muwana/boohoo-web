import { defineConfig } from 'cypress';
import plugins from 'cypress/plugins';

export default defineConfig({
  projectId: 'eqvgg4',

  env: {
    url: 'https://storefront:Oreo2022@dwdev.oasisfashion.com',
    sku: 'AAA07817-808-22',
    fullSku: 'AAA07817-808-22',
    brand: 'oasis-stores.com',
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
    numTestsKeptInMemory: 0,
  },
});
