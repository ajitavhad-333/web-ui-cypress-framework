// Logs in once and caches the session, so tests that start after login are fast.
Cypress.Commands.add('loginAs', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password, { log: false });
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });
});


// SauceDemo returns a 404 status for direct loads of inner pages, so don't fail on it.
Cypress.Commands.add('visitInventory', () => {
  cy.visit('/inventory.html', { failOnStatusCode: false });
});