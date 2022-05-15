// Common actions.
/// <reference types="cypress" />

export function randomEmail (): string {
  const randomEmail = 'email<RANDOM>@boohoo.com'.replace('<RANDOM>', String(Date.now()));
  return randomEmail;
}

export function applyMarketingCookies (): void {
  cy.setCookie('dw_cookies_accepted', 'A');
  cy.setCookie('dw_is_new_consent', 'true');
}