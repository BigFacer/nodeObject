// let sqlMap = {
//     login: 'SELECT * FROM USER_INFORMATION WHERE PersonName = ?'
// }
class sqlMap {
    loginSql(name, password) {
        return  'SELECT * FROM USER_INFORMATION WHERE PersonName =' +'\''+ name+'\'' +'AND PersonPassword = '+ '\'' + password + '\''
    };
    setToken(ID, token) {
        return 'UPDATE USER_INFORMATION SET Token = ' + token + 'WHERE PersonID = '+ ID
    }
}
module.exports = sqlMap;