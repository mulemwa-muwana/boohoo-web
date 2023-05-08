/* eslint-disable lines-around-comment */
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-iframe';

// This will stop any random exceptions that happen in the site, like api endpoints throwing server errors that don't matter to the user journey.
Cypress.on('uncaught:exception', () => {
  // Returning false here prevents Cypress from failing the test.
  return false;
});

// Set anything we need to before all tests
beforeEach(() => {
  // TODO: Remove when redirection from IE locales is fixed (Coast and KarenMillen)
  const variables = Cypress.env() as EnvironmentVariables;
  if (variables.locale == 'IE') {
   cy.setCookie('dw_locale', 'en_IE');
  } else if (variables.locale == 'UK') {
    cy.setCookie('dw_locale', 'en_GB');
  }
  cy.setCookie('OptanonAlertBoxClosed', '');
  cy.setCookie('dw_cookies_accepted', 'A');
  cy.setCookie('dw_is_new_consent', 'true');
});

// Here we're just hiding the XHR requests from the Cypress GUI.
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}