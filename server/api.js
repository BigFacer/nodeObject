// 连接数据库，各种方法实现
const  mysql = require('mysql');
const dbconfig = require('./db');
const setMap = require('./sqlMap');
const jwt = require('./Jwt')
let connection = mysql.createConnection(dbconfig.mysql);
let jwtToken = new jwt;
module.exports = {
    login(req, res, next) {
       let sql = new setMap;
       sqlA = sql.login('PersonName', req.query.PersonName);
       connection.query(sqlA, (err, result) => {
           if(err){
               res.json(('数据库连接失败'+ err))
           }else{
               if(result.length <= 0){
                   // res.send('用户名或密码错误')
                   let errorData = {
                       errorMessage: '用户名或密码错误',
                       isSuccess: false,
                   }
                   res.json(errorData)
               }else {
                   result[0].token = jwtToken.signToken(req.query)
                   let successData = {
                       isSuccess: true,
                       data: result
                   }
                   res.json(successData);
               }
           }
       })
       // connection.end();
    },
    getTableList(req, res, next){
        res.json('1111')
        console.log(jwtToken.verifyToken(req.query.token))
    }
}
