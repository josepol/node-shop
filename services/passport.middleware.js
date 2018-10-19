'use strict'

const passport = require('passport');

const authMiddleware = () => passport.authenticate('bearer', { session: false });

module.exports = authMiddleware;