import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
import { configureXrayPlugin, addXrayResultUpload } from 'cypress-xray-plugin';

export default defineConfig({
  projectId: 'i6d3n8',

  env: {
    url: 'https://storefront:Oreo2022@stgmena.boohoo.com/jo/en',
    sku: 'GZZ42719',
    fullSku: 'GZZ42719-135-18',
    brand: 'boohoomena.com',
    locale: 'JO',
    language: 'EN', 
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  video: false,
  screenshotOnRunFailure: true,

  // Create Mochawesome report after 'cypress run' tests finish
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'config/boohoomena/results',
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    async setupNodeEvents (on, config) {
      plugins(on);
      (await import('dotenv')).config({ path: '../../../.env' });

      config.env.JIRA_USERNAME = process.env.CYPRESS_JIRA_USERNAME,
      config.env.JIRA_API_TOKEN = process.env.CYPRESS_JIRA_API_TOKEN,
      config.env.XRAY_CLIENT_ID = process.env.CYPRESS_XRAY_CLIENT_ID,
      config.env.XRAY_CLIENT_SECRET = process.env.CYPRESS_XRAY_CLIENT_SECRET;

      const device = 'Desktop';
      const currentDateTime: Date = new Date();
      const brand: string = config.env.brand.split('.')[0];
      const locale = config.env.locale;
      const executionName = brand.toUpperCase() + ' / ' + locale + ' / ' + device + ' ' + currentDateTime;
      await configureXrayPlugin(config, {
        jira: {
          projectKey: 'CYP',
          url: 'https://boohoo.atlassian.net',
          testExecutionIssueSummary: executionName,
        },
        plugin: {
          debug: true,
          enabled: true,
        },
        xray: {
          uploadResults: true,
        },
      });
      await addXrayResultUpload(on);
    },   
    excludeSpecPattern: [
      '**/backend*/**', // Skip backend tests
      '**/additionalTests*/**'
    ],
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    experimentalOriginDependencies: true,
    experimentalWebKitSupport: true,
    retries:
    {
      runMode: 2,
      openMode: 1
    },
  },
});
