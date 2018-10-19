'use strict'

const winston = require('winston');
const moment = require('moment');

const UserDao = require('./user.dao');

const userService = function() {

    this.userDao = new UserDao();

    this.listAll = (req, res, next) => {
        winston.info('Service :: users :: listAll');
        this.userDao.listAll().then(allUsers => res.send(allUsers))
        .catch(error => res.send(error));
    }

    this.listOne = (req, res, next) => {
        winston.info('Service :: users :: listOne', req.params);
        const id = req.params.id;
        this.userDao.listOne(id).then(user => res.send(user))
        .catch(error => res.send(error));
    }

    this.create = (req, res, next) => {
        winston.info('Service :: users :: create');
        const user = {
            ...req.body,
            created_at: moment(new Date(req.body.created_at))
        }
        this.userDao.create(user).then(() => res.send('OKK'))
        .catch(error => res.send(error));
    }

    this.destroy = (req, res, next) => {
        winston.info('Service :: users :: destroy', req.params);
        const id = req.params.id;
        this.userDao.destroy(id).then(() => res.send('OKK'))
        .catch(error => res.send(error));
    }

    this.update = (req, res, next) => {
        winston.info('Service :: users :: update', req.params);
        const id = req.params.id;
        const user = {
            ...req.body,
            created_at: moment(new Date(req.body.created_at))
        }
        this.userDao.update(id, user).then(() => res.send('OKK'))
        .catch(error => res.send(error));
    }

    this.transaction = (req, res, next) => {
        winston.info('Service :: users :: transaction');
        const id1 = req.params.id1;
        const id2 = req.params.id2;
        const user = {
            ...req.body,
            created_at: moment(new Date(req.body.created_at))
        }
        this.userDao.transaction(id1, id2, user).then(() => res.send('OKK'))
        .catch(error => res.send(error));
    }
}

module.exports = userService;