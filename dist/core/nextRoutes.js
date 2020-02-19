"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextRoutes = require('next-routes');
const routes = nextRoutes().add({
    name: 'userRoute',
    pattern: '/user/:username',
    page: 'userPage',
});
exports.default = routes;
