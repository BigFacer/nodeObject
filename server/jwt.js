// 1. 登陆时，客户端发送用户名密码
// 2. 服务端验证用户名密码是否正确，校验通过就会生成一个有时效的token串，发送给客户端
// 3. 客户端储存token,一般都会存储在localStorage或者cookie里面
// 4. 客户端每次请求时都带有token，可以将其放在请求头里，每次请求都携带token
// 5. 服务端验证token，所有需要校验身份的接口都会被校验token，若token解析后的数据包含用户身份信息，则身份验证通过，返回数据
//
const jwt = require('jsonwebtoken');
let secret = 'OurBlog'; //
class Jwt {
    signToken(data) {
      let token = jwt.sign(data, 'OurBlog', {expiresIn:60*20} )// 授权时效20分钟})//此方法会生成一个token，第一个参数是数据，第二个参数是签名,第三个参数是token的过期时间可以不设置)
        return token
    }
    verifyToken(token) {
        let payload = jwt.verify(token, 'OurBlog')
        return payload
    }
}

module.exports = Jwt;