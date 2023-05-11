import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';
export default defineConfig({
  projectId: 'i6d3n8',
  env: {
    url: 'https://storefront:Oreo2022@uk-dwstg.boohoo.com/',
    sku: '#FZZ80440',
    fullSku: 'FZZ80440-106-18',
    brand: 'boohoo.com',
    locale: 'UK',
    language: 'EN',
  },
  viewportHeight: 667,
  viewportWidth: 375,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  
  blockHosts: [
    'boohoo-engb.qa.verbolia.com' // Stops verbolia sign-in popup
  ],

  // Create Mochawesome report after 'cypress run' tests finish
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'config/boohoo/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    excludeSpecPattern: [
      '**/backend*/**' // Skip backend tests
    ],
    setupNodeEvents (on) {
      plugins(on);
    },
    experimentalSessionAndOrigin: true,
    numTestsKeptInMemory: 0,
  },
});
