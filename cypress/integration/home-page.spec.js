/*
* Home Page Test Suite
* */
describe('Home Page Test Suite', () => {
  const pages = [
    '/products/magik',
    '/products/teeth-whitening-led-device-kit',
    '/products/smart-electric-toothbrush',
    '/',
  ];

  beforeEach(() => {
    cy.visit('/');
  });

  it('Does each PageContentSection render properly?', () => {
    for (let i = 1; i <= 5; i++) {
      cy.get(`#home-content-${i}`)
        .should('be.visible');
    }
  });

  pages.map((handle, key) => {
    it(`Does the ${handle} section use the correct link?`, () => {
      cy.get(`#home-content-${key + 2}-cta`)
        .click();
      cy.url()
        .should('include', handle);
    })
  })
});
