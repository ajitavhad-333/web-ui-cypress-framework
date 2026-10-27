import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

const BACKPACK = 'sauce-labs-backpack';

describe('Cart', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ standard }) => {
      cy.loginAs(standard.username, standard.password);
    });
    cy.visitInventory();
  });

  it('adds an item to the cart', () => {
    InventoryPage.addToCart(BACKPACK);
    InventoryPage.cartBadge.should('have.text', '1');
    InventoryPage.openCart();
    CartPage.title.should('have.text', 'Your Cart');
    CartPage.itemNames.should('contain', 'Sauce Labs Backpack');
  });

  it('removes an item from the cart', () => {
    InventoryPage.addToCart(BACKPACK);
    InventoryPage.openCart();
    CartPage.removeItem(BACKPACK);
    CartPage.items.should('not.exist');
  });

  it('adds multiple items', () => {
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.addToCart('sauce-labs-bike-light');
    InventoryPage.cartBadge.should('have.text', '2');
  });
});