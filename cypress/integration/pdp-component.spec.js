import products from '../../components/PDPComponent/customProductPages.json';

/*
* PDPComponent Test Suite
* */
describe('PDPComponent Test Suite', () => {
  // Get custom PDP products and add a non-custom product
  const productList = products;

  before(() => {
    cy.visit('/products/m1');
  });

  it('Does the component render properly?', () => {
    cy.get('#pdp-component')
      .should('be.visible');
  });

  it('Does the CustomPDPController component render when on a CustomPDP product?',() => {
    productList.products.forEach((product) => {
      cy.visit(`/products/${product}`);
      cy.get('#custom-pdp-component')
        .should('be.visible');
    });
  });

  it('Does the ProductDetail component render when NOT on a CustomPDP product?', () => {
    cy.visit('/products/smart-electric-toothbrush');
    cy.get('#custom-pdp-component')
      .should('not.be.visible');
    cy.get('#product-detail-component')
      .should('be.visible');
  });

  it('Does the "Back" button redirect to "/"?', () => {
    cy.get('#back-btn')
      .click();
    cy.url()
      .should('equal', Cypress.config().baseUrl + '/');
  });
});
