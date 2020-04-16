// let sqlMap = {
//     login: 'SELECT * FROM USER_INFORMATION WHERE PersonName = ?'
// }
class sqlMap {
    login(name, value) {
        return  'SELECT * FROM USER_INFORMATION WHERE '+ name + '=' +'\''+ value+'\''
    }
}
module.exports = sqlMap;