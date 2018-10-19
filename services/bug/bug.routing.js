const express = require('express');
const winston = require('winston');
const passport = require('passport');
const multer  = require('multer')
// const upload = multer({ dest: '/Users/josepolsastre/Documents/uploads/' })

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const BugService = require('./bug.service');
const authMiddleware = require('../passport.middleware');

const router = express.Router();
const bugService = new BugService();

router.get('/listAll', authMiddleware(), bugService.listAll);
/*router.get('/listOne/:id', authMiddleware(), bugService.listOne);*/
router.post('/create', authMiddleware(), bugService.create);
router.post('/create-file', [authMiddleware(), upload.single('file')], bugService.createFile);
/*router.get('/destroy/:id', authMiddleware(), bugService.destroy);
router.post('/update/:id', authMiddleware(), bugService.update);
router.post('/transaction/:id1/:id2', authMiddleware(), bugService.update);*/

module.exports = router;