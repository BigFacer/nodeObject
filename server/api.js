// 连接数据库，各种方法实现
const  mysql = require('mysql');
const dbconfig = require('./db');
const setMap = require('./sqlMap');
const jwt = require('./Jwt')
let connection = mysql.createConnection(dbconfig.mysql);
let jwtToken = new jwt;
let sql = new setMap;
module.exports = {
    login(req, res, next) {
       sqlA = sql.loginSql(req.query.PersonName, req.query.PersonPassword);
       connection.query(sqlA, (err, result) => {
           if(err){
               let errorData = {
                   errorMessage: '网络错误',
                   isSuccess: false,
               };
               res.json(errorData)
           }else{
               if(result.length <= 0){
                   let errorData = {
                       errorMessage: '用户名或密码错误',
                       isSuccess: false,
                   };
                   res.json(errorData)
               }else {
                   result[0].token = jwtToken.signToken(req.query)
                   let successData = {
                       isSuccess: true,
                       data: result
                   };
                   res.json(successData);
               }
           }
       })
    },
    // setToken (ID, Token,res) {
    //     sqlB = sql.setToken(ID, Token);
    //     connection.query(sqlB, (err, result) =>{
    //         if(err) {
    //             res.json(('token存储失败'+ err))
    //         }else {
    //             res.json(result)
    //         }
    //     })
    // },
    getTableList(req, res, next){
        res.json('1111')
        console.log(jwtToken.verifyToken(req.query.token))
    }
}
