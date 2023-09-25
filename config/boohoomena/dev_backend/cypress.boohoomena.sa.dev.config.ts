import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'eqvgg4',

  env: {
    url: 'https://storefront:Oreo2022@devmena.boohoo.com/en', 
    sku: 'AZZ19355-151',
    fullSku: 'AZZ19355-151-12',
    brand: 'boohoomena.com',
    locale: 'SA',
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
