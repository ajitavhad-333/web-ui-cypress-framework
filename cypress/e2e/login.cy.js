import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('logs in with a valid user', () => {
    cy.fixture('users').then(({ standard }) => {
      LoginPage.login(standard.username, standard.password);
    });
    cy.url().should('include', '/inventory.html');
    InventoryPage.title.should('have.text', 'Products');
  });

  const invalidCases = [
    { name: 'locked-out user', username: 'locked_out_user', password: 'secret_sauce', error: 'locked out' },
    { name: 'wrong password', username: 'standard_user', password: 'wrong_password', error: 'do not match' },
    { name: 'empty username', username: '', password: 'secret_sauce', error: 'Username is required' },
    { name: 'empty password', username: 'standard_user', password: '', error: 'Password is required' },
  ];

  invalidCases.forEach(({ name, username, password, error }) => {
    it(`shows an error for ${name}`, () => {
      LoginPage.login(username, password);
      LoginPage.errorMessage.should('be.visible').and('contain', error);
    });
  });
});