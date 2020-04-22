/* eslint-disable */
// if you want to use nextRoutes
// const routes = require('~server/core/nextRoutes')

const express = require('express');
import next from 'next';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

require('dotenv').config();

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
// if you want to use nextRoutes
// const handle = routes.getRequestHandler(nextApp);

nextApp.prepare().then(() => {
  // Init server instance
  const server = express();

  // Security middleware - Helmet
  server.use(helmet());

  // Cookie middleware - cookieParser
  server.use(cookieParser());

  // BodyParser
  server.use(bodyParser.json());

  // Logging middleware - morgan
  server.use(
    morgan(':method :url :status :res[content-length] - :response-time ms'),
  );
  server.use(compression());

  // Fallback handler
  server.get('*', (req, res) => handle(req, res));

  // Start custom server
  express().use(handle).listen(3000);
});
