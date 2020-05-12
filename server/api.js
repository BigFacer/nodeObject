// 连接数据库，各种方法实现
const  mysql = require('mysql');
const dbconfig = require('./db');
const setMap = require('./sqlMap');
const jwt = require('./Jwt');
const moment = require('moment')
const poor = mysql.createPool(dbconfig.mysql);
let jwtToken = new jwt;
const Base64 = require('js-base64').Base64
let sql = new setMap;
class api {
    //封装连接池
    PoorConnection(params) {
        return new Promise( (resolve, reject) => {
            poor.getConnection( (err ,connection) => {
                if(err) {
                    reject(err)
                }else{
                    connection.query(params.sql, (err, result) => {
                        if(err) {
                            reject(err)
                        }else{
                            resolve(result)
                        }
                    })
                    connection.release() //释放
                }
            })
        })

    }
    // 登陆
    login(req, res, next) {
        let password = Base64.decode(req.query.PersonPassword)
       let sqlA = sql.loginSql(req.query.PersonName, password);
        let data = {sql: sqlA};
        this.PoorConnection(data).then( (result) => {
                let token = jwtToken.signToken(req.query);
                let successData = {}
                if(result.length > 0){
                    successData = {
                        isSuccess: true,
                        data: result
                    };
                    let date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
                    this.setTokenToSql(result[0].PersonID, token, date)
                }else{
                    successData = {
                        errorMessage: '请输入正确的账号密码',
                        isSuccess: false,
                    };
                }
                res.json(successData);
        },(err) => {
            let errorData = {
                errorMessage: '网络错误',
                isSuccess: false,
            };
            // console.log(err)
            res.json(errorData)
        })
    };
    //存取token
    setTokenToSql(ID, TOKEN, DATE) {
        let sqlB = sql.setToken(ID, TOKEN, DATE);
        console.log(sqlB);
        this.PoorConnection({
            sql :sqlB
        }).then( (result) => {
            console.log('存储成功',result)
        },(err) => {
            console.log('数据错误',err)
        })

    };
    // 获取token 时间 比较
    isExpire(data) {
         let sqlD = sql.getTokenDate(data.ID);
         this.PoorConnection({
             sql: sqlD
         }).then((result) => {
             console.log(result)
         },(err) => {
             console.log(err)
         })
    }
    //后台token 解码
    getTableList(req, res, next){
        let webToken = req.headers.authorization
        // console.log(typeof req.query.data)
        let PersonID = JSON.parse(req.query.data).PersonID
        this.isExpire({ID: PersonID})
        res.json('1111')
        // console.log(jwtToken.verifyToken(req.query.token))
    };
    getencryDate(req, res, next) {
        res.json('OurBlog')
    };
    // 获取标题
    getArticlTitle(req, res, next) {
        let ParentID = req.query.ParentID;
        ParentID = ParentID || 0;
        let Sql =  sql.getArticlTitlSql(ParentID);
       this.PoorConnection({
           sql: Sql
       }).then( (result) => {
           let successData = {
               isSuccess: true,
               data: result
           };
           res.json(successData)
       },(err) => {
           let errorData = {
               errorMessage: '网络错误',
               isSuccess: false,
           };
           res.json(errorData)
       })

    }
}
module.exports = api;
