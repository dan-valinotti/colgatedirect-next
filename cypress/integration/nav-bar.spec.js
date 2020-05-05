/**
 * Navigation Bar Tests
 */
describe('Navigation Bar Test Suite', () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    cy.visit('/login');
  });

  it('Does the component render properly?', () => {
    cy.get('#navigation-bar')
      .should('be.visible');
  });

  it('Does the logo link to the home page?', () => {
    cy.get('#nav-logo')
      .click();
    cy.url()
      .should('equal', `${Cypress.config('baseUrl')}/`);
  });
});
