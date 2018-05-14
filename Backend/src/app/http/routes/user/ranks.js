import Controller from '../../controller/user/ranks'
export default class Routes {

  constructor(http) {
    http.get('/api/ranks', Controller.read)
    http.get('/api/ranks/:id', Controller.read)
  }

}