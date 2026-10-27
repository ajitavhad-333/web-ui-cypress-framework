class CheckoutPage {
  get error() { return cy.get('[data-test="error"]'); }
  get completeHeader() { return cy.get('[data-test="complete-header"]'); }

  fillInfo(firstName, lastName, postalCode) {
    if (firstName) cy.get('[data-test="firstName"]').type(firstName);
    if (lastName) cy.get('[data-test="lastName"]').type(lastName);
    if (postalCode) cy.get('[data-test="postalCode"]').type(postalCode);
  }

  continue() {
    cy.get('[data-test="continue"]').click();
  }

  finish() {
    cy.get('[data-test="finish"]').click();
  }
}

export default new CheckoutPage();