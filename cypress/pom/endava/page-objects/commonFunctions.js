
export function validateUrl(urlPart) {
    cy.url().should('include', urlPart)
}

export function validatePageTitle(title) {
    cy.title().should('include', title);
}

export function validatePageContent(element, text) {
    element.should('contain', text)
}

export function validateContentPresence(element) {
    element.should('be.visible')
}

