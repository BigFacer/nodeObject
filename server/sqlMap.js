// let sqlMap = {
//     login: 'SELECT * FROM USER_INFORMATION WHERE PersonName = ?'
// }
class sqlMap {
    // 登陆用户
    loginSql(name, password) {
        return  'SELECT * FROM USER_INFORMATION WHERE PersonName =' +'\''+ name+'\'' +'AND PersonPassword = '+ '\'' + password + '\''
    };
    // 存储token
    setToken(ID, token, date) {
        return 'UPDATE USER_INFORMATION SET Token = ' +'\''+ token +'\''+ '\,'+'TokenDate = '+'\''+ date +'\''+'WHERE PersonID = '+ ID
    };
    // 获取文章标题
    getArticlTitlSql(ParentID) {
        return 'SELECT * FROM `ARTICL_LABEL_FIRST` WHERE ParentId = ' +'\''+ ParentID +'\''
    };
    // 根据ID 获取token时间
    getTokenDate(ParentID) {
        return 'SELECT TokenDate FROM USER_INFORMATION  WHERE PersonID = ' +'\''+ ParentID +'\''
    }
}
module.exports = sqlMap;