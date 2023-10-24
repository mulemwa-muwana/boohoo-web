import { defineConfig } from 'cypress';
import plugins from '../../../cypress/plugins';
import { addXrayResultUpload, configureXrayPlugin, syncFeatureFile } from "cypress-xray-plugin";
require('dotenv').config()


export default defineConfig({
  projectId: 'i6d3n8',
  env: {
    url: 'https://storefront:Oreo2022@uk-dwstg.boohoo.com/',
    sku: 'TZZ97642',
    fullSku: 'TZZ97642-105-16',
    brand: 'boohoo.com',
    locale: 'UK',
    language: 'EN',
    giftCertificate: 'LMIFVGAICHZMZMSS',
    // JIRA_USERNAME: process.env.CYPRESS_JIRA_USERNAME,
    // JIRA_API_TOKEN: process.env.CYPRESS_JIRA_API_TOKEN,
    // XRAY_CLIENT_ID: process.env.CYPRESS_XRAY_CLIENT_ID,
    // XRAY_CLIENT_SECRET: process.env.CYPRESS_XRAY_CLIENT_SECRET,
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
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
      '**/backend*/**', // Skip backend tests
      '**/additionalTests*/**' // Skip additional tests
    ],
    
    async setupNodeEvents (on, config) {
      plugins(on);
      
      config.env.JIRA_USERNAME= process.env.CYPRESS_JIRA_USERNAME,
      config.env.JIRA_API_TOKEN= process.env.CYPRESS_JIRA_API_TOKEN,
      config.env.XRAY_CLIENT_ID= process.env.CYPRESS_XRAY_CLIENT_ID,
      config.env.XRAY_CLIENT_SECRET= process.env.CYPRESS_XRAY_CLIENT_SECRET;
      // config.env.JIRA_USERNAME = "burak.tuna@boohoo.com"
      // config.env.JIRA_API_TOKEN = "ATATT3xFfGF0HDc-OFuD0-NGSIid0Kri1pXgsnqTtSsZ4-pGR5LaKYrsyoGAfqeBqZY95u3cbgXPCz-zH-HJJSGgrMfvfvETdQaqWiPQeF30cI-ZpQOIhIspFvHMRTRV1jHjBzTZznpsirAAdNqrA-xbocwqsRuatagoMxRS7BgVk-O_fqmVg8U=7BF0D641"
      // config.env.XRAY_CLIENT_ID = "7BE9EE7960014A698F4C9505D5B5506C"
      // config.env.XRAY_CLIENT_SECRET = "947c1ca6990063d368de149933af2d6af999b3a418c8531e6ff061aff705b6b3"

      // config.env.JIRA_USERNAME = config.env.jiraUserName
      // config.env.JIRA_API_TOKEN = config.env.jiraAPIToken
      // config.env.XRAY_CLIENT_ID = config.env.xrayClientId
      // // config.env.XRAY_CLIENT_SECRET = config.env.xrayClientSecret

      // co
      // config.env.XRAY_CLIENT_SECRET = Cypress.env('XRAY_CLIENT_SECRET');nfig.env.JIRA_USERNAME = process.env.CYPRESS_JIRA_USERNAME,
      // config.env.JIRA_API_TOKEN = process.env.CYPRESS_JIRA_API_TOKEN,
      // config.env.XRAY_CLIENT_ID = process.env.CYPRESS_XRAY_CLIENT_ID,
      //  config.env.XRAY_CLIENT_SECRET = process.env.CYPRESS_XRAY_CLIENT_SECRET,
    
      // config.env.JIRA_USERNAME = process.env.CYPRESS_JIRA_USERNAME,
      // config.env.JIRA_USERNAME = Cypress.env('JIRA_USERNAME');
      // config.env.JIRA_API_TOKEN = Cypress.env('JIRA_API_TOKEN');
      // config.env.XRAY_CLIENT_ID = Cypress.env('XRAY_CLIENT_ID');


      // config.env.JIRA_USERNAME = Cypress.env("JIRA_USERNAME");
      // config.env.JIRA_API_TOKEN = Cypress.env("JIRA_API_TOKEN");
      // config.env.XRAY_CLIENT_ID = Cypress.env("XRAY_CLIENT_ID");
      // config.env.XRAY_CLIENT_SECRET = Cypress.env("XRAY_CLIENT_SECRET");

      // config.env.JIRA_USERNAME = CYPRESS_JIRA_USERNAME;
      // config.env.JIRA_API_TOKEN = CYPRESS_JIRA_API_TOKEN;
      // config.env.XRAY_CLIENT_ID = CYPRESS_XRAY_CLIENT_ID;
      // config.env.XRAY_CLIENT_SECRET = CYPRESS_XRAY_CLIENT_SECRET;

      // config.env.JIRA_USERNAME = '';
      // config.env.JIRA_API_TOKEN = '';
      // config.env.XRAY_CLIENT_ID = '';
      // config.env.XRAY_CLIENT_SECRET = '';

      const currentDateTime: Date = new Date();
      const brand: string = config.env.brand.split('.')[0];
      const locale = config.env.locale;
      const executionName = brand + '/' + locale + ' ' + currentDateTime;
      await configureXrayPlugin (config, {
        jira: {
          projectKey: "AWT",
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
        openSSL: {

        }
      });
      await addXrayResultUpload(on);
    },
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    experimentalOriginDependencies: true,
    experimentalWebKitSupport: true,
  },
});
