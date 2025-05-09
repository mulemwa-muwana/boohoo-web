import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@dwstg.wallisfashion.com/ie',
    sku: '#BYY05628-3', // Needs hashtag for assertation on PDP
    fullSku: 'BYY05628-173-22',
    brand: 'wallis.co.uk',
    locale: 'IE',
    language: 'EN',
    giftCertificate: '',
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
    numTestsKeptInMemory: 0,
  },
});
