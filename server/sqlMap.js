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
    getArticleTitlSql(ParentID) {
        return 'SELECT * FROM `ARTICLE_LABEL_FIRST` WHERE ParentId = ' +'\''+ ParentID +'\''
    };
    // 根据ID 获取token时间
    getTokenDate(ParentID) {
        return 'SELECT TokenDate FROM USER_INFORMATION  WHERE PersonID = ' +'\''+ ParentID +'\''
    };
    saveArticle() {
        return 'INSERT INTO ARTICLE_CONTENT SET ?'
    }
    //查询文章
    getArticle(){
        return 'SELECT *  FROM ARTICLE_CONTENT WHERE SelectOne = \'1000\''
    }
}
module.exports = sqlMap;