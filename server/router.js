const express = require('express');
const router = express.Router();
const api = require('./api');
const API = new api;
router.get('/login', (req, res, next) => {
    API.login(req, res, next)
});
router.get('/getTableList', (req, res, next) => {
    API.getTableList(req, res, next)
});
module.exports = router