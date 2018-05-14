import Controller from '../../controller/hangouts/posts'
export default class Routes {

  constructor (http) {
    http.get('/api/hangouts/posts', Controller.read)
    http.get('/api/hangouts/posts/:id', Controller.read)
  }

}
