'use strict'

const winston = require('winston');
const moment = require('moment');

const BugDao = require('./bug.dao');

const bugService = function() {

    this.bugDao = new BugDao();

    this.listAll = (req, res, next) => {
        winston.info('Service :: users :: listAll');
        this.bugDao.listAll(req.user.id)
        /*.then(allUserBugs => {
            allUserBugs.forEach(element => {
                element.file = element.file ? Buffer.from(element.file).toString('base64') : ''
            });
            return allUserBugs;
        })*/
        .then(allUserBugs => res.send(allUserBugs))
        .catch(error => res.send(error));
    }
/*
    this.listOne = (req, res, next) => {
        winston.info('Service :: users :: listOne', req.params);
        const id = req.params.id;
        this.userDao.listOne(id).then(user => res.send(user))
        .catch(error => res.send(error));
    }*/

    this.create = (req, res, next) => {
        winston.info('Service :: bug :: create');
        const bug = {
            ...req.body,
            created_at: moment(new Date()),
            user_mongodb_id: req.user.id
        }
        delete bug.file;
        this.bugDao.create(bug).then((response) => res.send({status: true, id: response.id}))
        .catch(error => res.send({status: error}));
    }

    this.createFile = (req, res, next) => {
        winston.info('Service :: bug :: create');
        const bug = {
            // file: Buffer.from(req.file.buffer).toString('base64'),
            // file: new Blob([new Uint8Array(req.file.buffer)]),
            // file: Buffer.from(req.file.buffer),
            file: req.file.buffer,
            id: req.body.id
        }
        this.bugDao.createFile(bug).then((response) => res.send({status: response}))
        .catch(error => res.send({status: error}));
    }

    /*this.destroy = (req, res, next) => {
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
    }*/
}

module.exports = bugService;