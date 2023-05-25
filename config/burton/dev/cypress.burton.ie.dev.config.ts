import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
export default defineConfig({
  projectId: 'i6d3n8',
  env: {
    url: 'https://storefront:Oreo2022@dwdev.burton-menswear.com/ie',
    sku: 'ABB02908', // Needs hashtag for assertation on PDP
    fullSku: 'ABB02908-115-286',
    brand: 'burton.co.uk',
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
