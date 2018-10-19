'use strict';
 
const winston = require('winston');
const nconf = require('nconf');
const path = require('path');

const config = () => {
  let configFilePath = path.join(__dirname, '../config.json');
 
  nconf.overrides({});
  nconf.env().argv();
  nconf.file(configFilePath);
 
  nconf.defaults({
    application: {
      port: 3900
    }
  });

  winston.info('app - nconf: log:', nconf.get('logging'));
  winston.info('app - nconf: config file path:', configFilePath);
  winston.info('app - nconf: config file application content:', nconf.get('application'));
};

module.exports = config;