export default {
  'register': {
    url: '/admin/register',
    method: 'post',
    rsaKey: 'password',
    setToken: true
  },
  'login': {
    url: '/admin/login',
    method: 'post',
    rsaKey: 'password',
    setToken: true
  },
  'index': {
    url: '/index',
    method: 'get',
    noMessage: true
  },
  'pubKey': {
    url: '/keys',
    method: 'get',
  },
  'articles': {
    url: '/api/rest/articles',
    method: 'get',
  },
  'getArticleById': {
    url: '/api/rest/articles/:id',
    method: 'get',
    rest: true
  },
  'postArticle': {
    url: '/api/rest/articles',
    method: 'post',
  },
  'postColumn': {
    url: '/api/rest/columns',
    method: 'post',
  },
  'postComment': {
    url: '/api/rest/comments',
    method: 'post',
  },
  'columns': {
    url: '/api/rest/columns',
    method: 'get',
  },
  'getUserInfo': {
    url: '/user',
    method: 'get'
  },
  'putUserInfo': {
    url: '/user',
    method: 'put'
  },
  'delete': {
    url: '/api/rest/articles/:id',
    method:'delete'
  }
}