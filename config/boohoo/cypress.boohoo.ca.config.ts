import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "i6d3n8",

  env: {
    url: "https://storefront:Oreo2022@cs-dwstg.boohoo.com/",
    sku: "#DZZ79497",
    brand: "boohoo.com",
    locale: "CA",
    language: "EN",
  },

  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
