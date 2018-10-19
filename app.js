'use strict';
 
const winston = require('winston');
const nconf = require('nconf');
const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const Sequelize = require('sequelize');

const nconfConfig = require('./config/nconf.config');
const routingConfig = require('./config/routing.config');
const expressConfig = require('./config/express.config');
const passportConfig = require('./config/passport.config');

mongoose.connect('mongodb://localhost/shop');

const app = express();

nconfConfig();
expressConfig(app);
routingConfig(app);
passportConfig();

module.exports = app;
