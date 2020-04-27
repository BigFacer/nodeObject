// 连接数据库，各种方法实现
const  mysql = require('mysql');
const dbconfig = require('./db');
const setMap = require('./sqlMap');
const jwt = require('./Jwt');
const moment = require('moment')
const poor = mysql.createPool(dbconfig.mysql);
let jwtToken = new jwt;
let sql = new setMap;
class api {
    // 登陆
    login(req, res, next) {
       let sqlA = sql.loginSql(req.query.PersonName, req.query.PersonPassword);
        poor.getConnection( (err, connection) => {
            if(err) {
                let errorData = {
                    errorMessage: '网络错误',
                    isSuccess: false,
                };
                res.json(errorData)
            }else {
                connection.query(sqlA, (err, result) => {
                    if(err) {
                        let errorData = {
                            errorMessage: '网络错误',
                            isSuccess: false,
                        };
                        res.json(errorData)
                    }else {
                          result[0].token = jwtToken.signToken(req.query);
                        let successData = {
                            isSuccess: true,
                            data: result
                        };
                        // console.log(result[0].token)
                        let date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                        this.setTokenToSql(result[0].PersonID, result[0].token, date)
                        res.json(successData);

                    }
                });
                //释放
                connection.release()
            }
        });
    };
    //存取token
    setTokenToSql(ID, TOKEN, DATE) {
        let sqlB = sql.setToken(ID, TOKEN, DATE);
        console.log(sqlB)
        poor.getConnection((err, connection) => {
            if(err) {
                console.log('数据错误',err)
            }else {
             connection.query(sqlB, (err, result) => {
                 if(err) {
                     console.log('数据错误',err)
                 }else {
                     console.log('存储成功',result)
                 }
             })
            }
        })

    };
    getTableList(req, res, next){
        res.json('1111')
        console.log(jwtToken.verifyToken(req.query.token))
    }
}
module.exports = api
