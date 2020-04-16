describe('Login form tests', () => {
  it('Focuses email input on load', () => {
    cy.visit('http://localhost:3000/login');
    cy.focused()
      .should('have.id', 'email');
  })
});
