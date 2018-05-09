import Controller from '../../controller/user/rooms'
export default class Routes {

  constructor (http) {
    http.get('/api/rooms', Controller.read)
    http.get('/api/rooms/:id', Controller.read)
  }

}
