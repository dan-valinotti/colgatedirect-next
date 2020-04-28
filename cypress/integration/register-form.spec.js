/*
* RegisterForm Test Suite
* */
describe('Register form tests', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  // Test: Does page load and component renders?
  it('Page load & component render', () => {
    cy.get('#register-form > div > h4')
      .contains('Register');
  });

  // Test: Is email input validation working?
  it('Email validation tests', () => {
    // Correct email input
    cy.get('#email').type('test@test.com');
    cy.get('#email-label')
      .should('not.have.class', 'Mui-error');

    // Incorrect email input
    cy.get('#email').clear().type('test@test');
    cy.get('#email-label')
      .should('have.class', 'Mui-error');
  });

  // Test: Is form validated correctly before submission?
  it('Test full form validation', () => {
    // Fields missing values
    cy.get('#lastname').type('TestLast');
    cy.get('#email').type('test@test.com');
    cy.get('#email').type('Testing123');
    cy.get('#form-submit').click();
    cy.get('[class*="MuiAlert-message"]')
      .should('contain','Please correctly fill out all fields.');

    // Invalid email input
    cy.get('#firstname').type('TestFirst');
    cy.get('#email').clear().type('test@test');
    cy.get('#form-submit').click();
    cy.get('[class*="MuiAlert-message"]')
      .should('contain', 'Please correctly fill out all fields.');
  });
});

// Field focus is separate because fields are not automatically focused
// on single-page load, needs to have page rendered first
describe('Register form test (field focused)', () => {
  // Test: Is "First Name" field focused on load?
  it('Focused first name field on load', () => {
    cy.visit('/');
    cy.scrollTo(0,0); // NavBar hidden because view scrolls down, scroll to top
    cy.get('.account-btn').click();
    cy.get('#login-btn').click();
    cy.get('a[href="/register"]').click();
    cy.focused()
      .should('have.id', 'firstname');
  });
});
