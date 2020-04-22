"use strict";
/* eslint-disable */
// if you want to use nextRoutes
// const routes = require('~server/core/nextRoutes')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const next_1 = __importDefault(require("next"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const nextRoutes_1 = __importDefault(require("./core/nextRoutes"));
require('dotenv').config();
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next_1.default({ dev });
// const handle = nextApp.getRequestHandler();
// if you want to use nextRoutes
const handle = nextRoutes_1.default.getRequestHandler(nextApp);
nextApp.prepare().then(() => {
    // Init server instance
    const server = express();
    // Security middleware - Helmet
    server.use(helmet_1.default());
    // Cookie middleware - cookieParser
    server.use(cookie_parser_1.default());
    // BodyParser
    server.use(body_parser_1.default.json());
    // Logging middleware - morgan
    server.use(morgan_1.default(':method :url :status :res[content-length] - :response-time ms'));
    server.use(compression_1.default());
    // Fallback handler
    server.get('*', (req, res) => handle(req, res));
    // nextRoutes handling
    server.use(handle);
    // Start custom server
    server.listen(port);
});
