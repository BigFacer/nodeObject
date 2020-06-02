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
router.get('/getArticlTitle', (req, res, next) => {
    API.getArticlTitle(req, res, next)
});
router.post('/saveArticle', (req, res, next) => {
    API.saveArticle(req, res, next)
});
router.post('/upload',(req, res) => {

    let form = new multiparty.Form();
    // res.setHeader('text/plain');
    let msg = {info:'',img:''};
    console.log(__dirname);
    form.uploadDir = __dirname+"/uploads";
    //设置单文件大小限制
    form.maxFilesSize =  1024 * 1024;
    //form.maxFields = 1000;  设置所以文件的大小总和
    form.parse(req, function(err, fields, files) {
        if(err){
            console.log(err);
            msg.info = '上传失败';
            res.send(msg);
            return ;
        }
        // console.log(req);
        msg.img=path.join(__dirname,'/uploads/'+files.file[0].originalFilename);
        console.log(msg.img);
        msg.info = '上传成功';
        msg.len = files.length;
        res.json({
            status:200,
            url: msg.img
        })
    });
});
module.exports = router;