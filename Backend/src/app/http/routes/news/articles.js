import Controller from '../../controller/news/articles'
export default class Routes {

  constructor (http) {
    http.post('/api/auth/mod/articles', Controller.create)
    http.get('/api/news/articles', Controller.read)
    http.get('/api/news/articles/:id', Controller.read)
    http.patch('/api/auth/mod/articles/:id', Controller.update)
    http.delete('/api/auth/mod/articles/:id', Controller.delete)
  }

}
