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
router.get('/getencryDate', (req, res, next) => {
    API.getencryDate(req, res, next)
});
router.get('/getArticlTitle', (req, res, next) => {
    API.getArticlTitle(req, res, next)
});
module.exports = router