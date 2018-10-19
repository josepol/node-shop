'use strict';
 
const winston = require('winston');
const createError = require('http-errors');

const userRouting = require('../services/user/user.routing');
const authRouting = require('../services/auth/auth.routing');
const bugRouting = require('../services/bug/bug.routing');
 
const routingConfig = (app) => {
  registerAPIEndpoints(app);
  /*registerNotFoundHandler(app);
  registerErrorHandler(app);*/
};

const registerAPIEndpoints = (app) => {
  app.use('/users', userRouting);
  app.use('/auth', authRouting);
  app.use('/bug', bugRouting);
}
 
const registerNotFoundHandler = (app) => app.use((req, res, next) => next(createError(404, 'CUSTOM NOT FOUND')));
const registerErrorHandler = (app) => app.use((error, req, res, next) => res.status(error.status || 500).send({error}));

module.exports = routingConfig;