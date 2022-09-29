/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Any methods created need to be added to the Cypress namespace, this is typescript feature.

// Login and preserve tokens. (EXPERIMENTAL, NOT CURRENTLY IN USE).
Cypress.Commands.add('goOffline', () => {
  return cy.log('Disabling internet connectivity').then(() => {
    Cypress.automation('remote:debugger:protocol', {
      command: 'Network.enable'
    });
    Cypress.automation('remote:debugger:protocol', {
      command: 'Network.emulateNetworkConditions',
      params: {
        offline: true,
        latency: -1,
        downloadThroughput: -1,
        uploadThroughput: -1,
      }
    });
  });
});

/**
 * Command that takes in a brand as a brand url, this will be a host url like boohoo.com, this will create an account for that url
 * and return you an object with
 */
Cypress.Commands.add('createUser', (brand: GroupBrands) => {
  const timestamp = Date.now();
  cy.task('createUser', brand).then((result: NewCustomerCredentials) => {
    cy.wrap(result).as(`UserCreatedAt${timestamp}`);
  });
  return cy.get(`@UserCreatedAt${timestamp}`);
});

/**
 * Command that takes in a user credentials, a brand, and a sku, and will set that product in the basket so you can navigate straight to the checkout.
 */
Cypress.Commands.add('prepareUser', (credentials: NewCustomerCredentials, brand: GroupBrands, sku: string) => {
  cy.task('prepareUser', { credentials, brand, sku });
});

/**
 * Create an artefact file in Cypress, this file is used to fuel back end tests.
 * We need to store the test type so the test frameknown knows how to process it, it needs a folder name which will be the brand and it'll need a name.
 */
Cypress.Commands.add('createArtefact', (testArtefact: TestArtefact, brand: string, paymentMethod: string) => {
  // Example: cypress/artefacts/orderCreation/boohoo/adyen.json
  cy.log(`Writing artefact file. Brand: '${brand}'. Payment method: '${paymentMethod}'. Order number: '${testArtefact.orderNumber}'`)
  cy.writeFile(`cypress/artefacts/orderCreation/${brand}/${paymentMethod}.json`, JSON.stringify(testArtefact, null, 4));
});

/**
 * Outputs everything from cy.log() out to the console terminal
 */
Cypress.Commands.overwrite('log', (subject, message, ...args) => cy.task('log', message));