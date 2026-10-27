class CartPage {
  get title() { return cy.get('[data-test="title"]'); }
  get items() { return cy.get('[data-test="inventory-item"]'); }
  get itemNames() { return cy.get('[data-test="inventory-item-name"]'); }

  removeItem(slug) {
    cy.get(`[data-test="remove-${slug}"]`).click();
  }

  checkout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default new CartPage();