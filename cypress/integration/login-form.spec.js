/*
* LoginForm Test Suite
* */
describe('Login form tests', () => {
  // Load page before each test
  beforeEach(() => {
    cy.visit('/login');
  });

  // Test: Is the "email" field focused on load?
  it.skip('Focuses email input on load', () => {
    cy.visit('/');
    cy.get('#account-btn').click({ force: true });
    cy.get('#login-btn').click({ force: true });
    cy.focused()
      .should('have.id', 'email');
  });

  // Test: Is email input value valid?
  it('Test email validation', () => {
    // Valid email input
    cy.get('#email').type('test@test.com',{ force: true });
    cy.get('#email-label')
      .should('not.have.class', 'Mui-error');

    // Invalid email input
    cy.get('#email').clear({ force: true }).type('fake.email',{ force: true });
    cy.get('#email-label')
      .should('have.class', 'Mui-error');
  });

  // Test: Is input correctly validated when submitting a login request?
  it('Test form validation', () => {
    // Invalid form content
    cy.get('#email').type('test@test',{ force: true });
    cy.get('#password').type('password',{ force: true });
    cy.get('#form-submit').click({ force: true });
    cy.get('[class*="MuiAlert-message"]')
      .should('contain', 'Please enter a valid email and password.');
  });

  // Test: Does login form successfully submit, both correct and incorrect login?
  it('Test login form submission (correct)', () => {
    cy.get('#email').type('dan33east@gmail.com',{ force: true });
    cy.get('#password').type('testing123',{ force: true });
    cy.get('#form-submit').click({ force: true });
    cy.url()
      .should('include', '/')
  });
  it('Test login form submission (incorrect)', () => {
    cy.get('#email').type('dan33east@gmail.com',{ force: true });
    cy.get('#password').type('wrongPassword',{ force: true });
    cy.get('#form-submit').click({ force: true });
    cy.get('[class*="MuiAlert-message"]')
      .should('contain', 'Incorrect email / password.');
  });

  // Test: Does 'register' link correctly lead to Register page?
  it('Test user registration link', () => {
    cy.get('a[href="/register"]').click({ force: true });
    cy.url()
      .should('include', '/register');
  });
});
