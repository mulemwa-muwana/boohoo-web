/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Any methods created need to be added to the Cypress namespace, this is typescript feature.

declare namespace Cypress {
  interface Chainable<Subject> {
    goOffline(): Chainable<null>;
  }
}

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
