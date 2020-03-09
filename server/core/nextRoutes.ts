/* eslint-disable */
const nextRoutes = require('next-routes');

const routes = nextRoutes()
  .add({
    name: 'HomePage',
    pattern: '/',
    page: 'index',
  })
  .add({
    name: 'ProductPage',
    pattern: '/products/:handle',
    page: 'product'
  });
export default routes;
