'use strict'

const express = require('express');
const winston = require('winston');

const AuthService = require('./auth.service');
const authMiddleware = require('../passport.middleware');

const router = express.Router();
const authService = new AuthService();

router.post('/login', authService.login);
router.post('/register', authService.register);
router.get('/refresh', authService.refresh);

router.get('/test', (req, res) => {
    winston.info('testing ok');
    res.send('testing ok')
})

module.exports = router;