const nextRoutes = require('next-routes');
const routes = nextRoutes().add({
  name: 'userRoute',
  pattern: '/user/:username',
  page: 'userPage',
}); 
export default routes;
