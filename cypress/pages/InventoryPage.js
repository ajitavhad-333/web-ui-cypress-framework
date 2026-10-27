class InventoryPage {
  get title() { return cy.get('[data-test="title"]'); }
  get items() { return cy.get('[data-test="inventory-item"]'); }
  get cartBadge() { return cy.get('[data-test="shopping-cart-badge"]'); }

  // slug example: 'sauce-labs-backpack'
  addToCart(slug) {
    cy.get(`[data-test="add-to-cart-${slug}"]`).click();
  }

  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click();
  }
}

export default new InventoryPage();