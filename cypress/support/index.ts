/* eslint-disable lines-around-comment */
// Import commands.js using ES2015 syntax:
import HomePage from '../pom/home.page';
import './commands';

// Preserve these cookies.
Cypress.Cookies.defaults({
  preserve: ['dw_cookies_accepted', 'dw_is_new_consent'],
});

// This will stop any random exceptions that happen in the site, like api endpoints throwing server errors that don't matter to the user journey.
Cypress.on('uncaught:exception', () => {
  // Returning false here prevents Cypress from failing the test.
  return false;
});

// Set anything we need to before all tests
beforeEach(() => {
  cy.viewport(1920, 1080);
});

before(() => {
  HomePage.goto({ applyCookies: true });
});

// Here we're just hiding the XHR requests from the Cypress GUI.
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}