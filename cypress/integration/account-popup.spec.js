/*
* AccountPopup Test Suite
* */
describe('AccountPopup component tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.account-btn')
      .as('iconButton')
      .click();
  });

  it('Does component render properly?', () => {
    cy.get('#popup-content')
      .should('be.visible');
  });

  it('Does popup content window open onClick?', () => {
    cy.get('#popup-content')
      .should('be.visible');
  });

  it('Does popup window show "Log in" button when user is NOT logged in?', () => {
    cy.get('#login-btn')
      .should('be.visible');
  });

  it('Does "Log in" button redirect to /login onClick?', () => {
    cy.get('#login-btn')
      .click();
    cy.url()
      .should('contain', '/login');
  });

  it('Does popup window show account info when user is logged in?', () => {
    cy.get('#login-btn')
      .click();
    cy.get('#email').type('dan33east@gmail.com');
    cy.get('#password').type('testing123');
    cy.get('#form-submit').click();
    cy.url()
      .should('include', '/');
    cy.get('#loading-dialog')
      .should('not.be.visible', { timeout: 5000 });
    cy.scrollTo(0,0)  // NavBar hidden because view scrolls down, scroll to top
    cy.get('.account-btn')
      .click() ;
    cy.get('#account-name')
      .should('contain', 'Dan Valinotti');
    cy.get('#account-email')
      .should('contain', 'dan33east@gmail.com');
  });
});
