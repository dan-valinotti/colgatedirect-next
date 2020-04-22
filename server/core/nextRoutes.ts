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
  })
  .add({
    name: 'Login',
    pattern: '/login',
    page: 'login',
  })
  .add({
    name: 'Register',
    pattern: '/register',
    page: 'register',
  })
  .add({
    name: 'Cart',
    pattern: '/cart',
    page: 'cart',
  })
  .add({
    name: 'AuthLogin',
    pattern: '/auth/login'
  });
export default routes;
