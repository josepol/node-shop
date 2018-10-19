'use strict'

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const cors = require('cors');

const expressConfig = (app) => {
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(passport.initialize());
}

module.exports = expressConfig;