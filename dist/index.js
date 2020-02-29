"use strict";
/* eslint-disable */
// if you want to use nextRoutes
// const routes = require('~server/core/nextRoutes')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const apollo_1 = __importDefault(require("~server/core/apollo"));
require('dotenv').config();
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next_1.default({ dev });
const handle = nextApp.getRequestHandler();
// if you want to use nextRoutes
// const handle = routes.getRequestHandler(nextApp)
nextApp.prepare().then(() => {
    const server = express_1.default();
    // security
    server.use(helmet_1.default());
    // cookies
    server.use(cookie_parser_1.default());
    // Generate logs
    server.use(morgan_1.default(':method :url :status :res[content-length] - :response-time ms'));
    server.use(compression_1.default());
    // start apollo server
    apollo_1.default.applyMiddleware({ app: server });
    server.get('*', (req, res) => handle(req, res));
    // express().use(handler).listen(3000) //routes handle way
    server.listen(port, (err) => {
        if (err)
            throw err;
    });
});
