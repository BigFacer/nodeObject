import ajax from  './API'
export const getArticlTitle = params => ajax.httpTokenRequest({url: '/getArticlTitle', method: 'get'},params);