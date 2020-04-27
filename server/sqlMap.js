// let sqlMap = {
//     login: 'SELECT * FROM USER_INFORMATION WHERE PersonName = ?'
// }
class sqlMap {
    loginSql(name, password) {
        return  'SELECT * FROM USER_INFORMATION WHERE PersonName =' +'\''+ name+'\'' +'AND PersonPassword = '+ '\'' + password + '\''
    };
    setToken(ID, token, date) {
        return 'UPDATE USER_INFORMATION SET Token = ' +'\''+ token +'\''+ '\,'+'TokenDate = '+'\''+ date +'\''+'WHERE PersonID = '+ ID
    };
    // setToken(token) {
    //     return  ''
    // }
}
module.exports = sqlMap;