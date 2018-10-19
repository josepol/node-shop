'use strict'

const winston = require('winston');
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');
const moment = require('moment');

const AuthDao = require('../services/auth/auth.dao');
const UserModel = require('../services/auth/auth.model');

const authDao = new AuthDao();

const passportConfig = () => {

    passport.use(new BearerStrategy((token, done) => {
        const payload = jwt.decode(token, 'SECRET_KEY');

        if (payload.exp <= moment().unix()) {
            res.status(401).send({ message: "Token expired" });
        }
        UserModel.findOne({ username: payload.id }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false);
            winston.info(user);
            console.log(user)
            return done(null, user, { scope: 'all' });
        });
        /*const user = authDao.login();
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }*/
    }));
}

module.exports = passportConfig;