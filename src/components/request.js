import ajax from  './API'
export const getArticleTitle = params => ajax.httpTokenRequest({url: '/getArticleTitle', method: 'get'},params);
export const saveArticle = params => ajax.httpTokenRequest({url: '/saveArticle', method: 'get'},params);
export const getTagList = params => ajax.httpTokenRequest({url: '/getTagList', method: 'get'},params);
export const getArticleList = params => ajax.httpTokenRequest({url: '/getArticleList', method: 'get'},params);