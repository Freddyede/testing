export const SERVER = {
  url_get: "http://localhost:8000",
  urlAPI:"http://localhost:8000/api"
};

export const ROUTESBACK = {
  Authentification: {
    getToken:"/authentication_token",
    login:"/login"
  },
  Users: {
    postOneUser:"/register"
  },
  Messages: {
    postMessage: '/messages',
    getMessages: '/messages',
  },
  Pages: {
    getOnePage:'/pages/',
    getAllPage: '/pages',
    findByTitre:'/searchByTitre'
  },
  Todos: {
    postTodos: '/todos',
    getTodos: '/getTodosByIdUsers',
    updateTodos:'/todos/',
    deleteTodos:'/todos/',
    getTask:'/todos/'
  },
  users: {
    getOneUser: '/users/'
  }
};
