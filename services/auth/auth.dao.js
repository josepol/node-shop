'use strict'

const winston = require('winston');
const UserModel = require('./auth.model');

const authDao = function() {

    this.login = username => {
        return new Promise((resolve, reject) => {
            UserModel.findOne(username, (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    }

    this.register = user => {
        const userModel = new UserModel(user);
        return new Promise((resolve, reject) => {
            userModel.save((error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    }

    this.refresh = id => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ username: id }, (error, response) => {
                if (!response || error) {
                    reject(error);
                }
                resolve(response);
            });
        });
    }

}

module.exports = authDao;