import Controller from '../../controller/user/photos'
export default class Routes {

  constructor (http) {
    http.get('/api/photos', Controller.read)
    http.get('/api/photos/:id', Controller.read)
  }

}
