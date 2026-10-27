import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ standard }) => {
      cy.loginAs(standard.username, standard.password);
    });
    cy.visitInventory();
    InventoryPage.addToCart('sauce-labs-backpack');
    InventoryPage.openCart();
    CartPage.checkout();
  });

  it('completes an order', () => {
    CheckoutPage.fillInfo('Test', 'User', '12345');
    CheckoutPage.continue();
    cy.url().should('include', 'checkout-step-two');
    CheckoutPage.finish();
    CheckoutPage.completeHeader.should('contain', 'Thank you for your order');
  });

  it('requires a first name', () => {
    CheckoutPage.fillInfo('', 'User', '12345');
    CheckoutPage.continue();
    CheckoutPage.error.should('contain', 'First Name is required');
  });
});