export const SERVER = {
  url_get: 'http://localhost:8000',
  url_login: 'http://localhost:8000/login',
  urlAPI: 'http://localhost:8000/api'
};

export const ROUTESBACK = {
  Authentification: {
    getToken:'/authentication_token',
    registration:'/register',
    login: '/login'
  },
  Pages:{
    getAllPage: '/pages',
    getOnePage: '/pages/'
  },
  Users:{
    getOneUser: '/users/',
    postOneUser: '/register',
    updateUser: '/users/'
  },
  Messages: {
    postMessage: '/messages',
    getMessages:'/messages'
  }
};
