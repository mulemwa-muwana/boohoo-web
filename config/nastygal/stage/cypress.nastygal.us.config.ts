import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',
  env: {
    url: 'https://storefront:Oreo2022@us1-dwstg.nastygal.com/',
    sku: '#BGG17089', // Needs hashtag for assertation on PDP
    fullSku: 'BGG17089-808-22', 
    brand: 'nastygal.com',
    locale: 'US',
    language: 'EN',
    giftCertificate: 'TAWPJRLTHARLALZC',
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
