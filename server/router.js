const express = require('express');
const multiparty = require('multiparty');
const path = require('path')
const router = express.Router();
const multer = require('multer');
const fs =require('fs');
const upload =multer({dest: __dirname + '../upload'});
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
router.get('/getArticleTitle', (req, res, next) => {
    API.getArticleTitle(req, res, next)
});
router.post('/saveArticle', (req, res, next) => {
    API.saveArticle(req, res, next)
});
router.get('/getTagList', (req, res, next) => {
    API.getTagList(req, res, next)
});
router.get('/getArticleList', (req, res, next) => {
    API.getArticleList(req, res, next)
});
module.exports = router;