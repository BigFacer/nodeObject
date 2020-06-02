import ajax from  './API'
export const getArticlTitle = params => ajax.httpTokenRequest({url: '/getArticlTitle', method: 'get'},params);
export const saveArticle = params => ajax.httpTokenRequest({url: '/saveArticle', method: 'get'},params);
export const upload = params => ajax.httpTokenRequest({url: '/upload', method: 'post'},params);