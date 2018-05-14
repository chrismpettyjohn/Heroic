import Controller from '../../controller/news/categories'
export default class Routes {

  constructor (http) {
    http.post('/api/auth/mod/categories', Controller.create)
    http.get('/api/news/categories', Controller.read)
    http.get('/api/news/categories/:id', Controller.read)
    http.patch('/api/auth/mod/categories/:id', Controller.update)
    http.delete('/api/auth/mod/categories/:id', Controller.delete)
  }

}
