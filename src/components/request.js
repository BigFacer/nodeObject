import ajax from  './API'
//获取文章title
export const getArticleTitle = params => ajax.httpTokenRequest({url: '/getArticleTitle', method: 'get'},params);
//写文章存数据
export const saveArticle = params => ajax.httpTokenRequest({url: '/saveArticle', method: 'get'},params);
//获取标签
export const getTagList = params => ajax.httpTokenRequest({url: '/getTagList', method: 'get'},params);
export const getClassTagList = params => ajax.httpTokenRequest({url: '/getClassTagList', method: 'get', params})

//获取文章list
export const getArticleList = params => ajax.httpTokenRequest({url: '/getArticleList', method: 'get'},params);