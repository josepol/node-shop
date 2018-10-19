const express = require('express');
const winston = require('winston');
const passport = require('passport');

const UserService = require('./user.service');
const authMiddleware = require('../passport.middleware');

const router = express.Router();
const userService = new UserService();

router.get('/listAll', authMiddleware(), userService.listAll);
router.get('/listOne/:id', authMiddleware(), userService.listOne);
router.post('/create', authMiddleware(), userService.create);
router.get('/destroy/:id', authMiddleware(), userService.destroy);
router.post('/update/:id', authMiddleware(), userService.update);
router.post('/transaction/:id1/:id2', authMiddleware(), userService.update);

router.get('/', (req, res, next) => {
    return {
        testing: true
    }
});

module.exports = router;