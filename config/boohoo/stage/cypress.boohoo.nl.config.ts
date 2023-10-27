import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@nl-dwstg.boohoo.com/',
    sku: '#GZZ62778',
    fullSku: 'GZZ62778-105-16',
    brand: 'boohoo.com',
    locale: 'NL',
    language: 'NL',
    giftCertificate:'KKSOCAFQZKOIDOMV'
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
