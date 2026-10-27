class LoginPage {
  visit() {
    cy.visit('/');
    return this;
  }

  get usernameInput() { return cy.get('[data-test="username"]'); }
  get passwordInput() { return cy.get('[data-test="password"]'); }
  get loginButton() { return cy.get('[data-test="login-button"]'); }
  get errorMessage() { return cy.get('[data-test="error"]'); }

  login(username, password) {
    if (username) this.usernameInput.type(username);
    if (password) this.passwordInput.type(password);
    this.loginButton.click();
  }
}

export default new LoginPage();