import { defineConfig } from 'cypress';
import plugins from '../../cypress/plugins';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@uk-dwdev.boohoo.com',
    sku: '#DZZ01081',
    fullSKU: 'DZZ01081-105-16',
    brand: 'boohoo.com',
    locale: 'UK',
    language: 'EN'
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,
  
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents (on) {
      plugins(on),

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push("excludeSwitches: [enable-automation]");
          launchOptions.args.push("excludeSwitches: [enable-logging]");
        }
      return launchOptions
    })
    },

    numTestsKeptInMemory: 0
  },

});

