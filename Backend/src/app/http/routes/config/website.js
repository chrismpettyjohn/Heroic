import Controller from '../../controller/config/website'
export default class Routes {

  constructor(http) {
    http.patch('/api/auth/admin/config/website', Controller.update)
    http.get('/api/config/website', Controller.read)
    http.get('/api/config/heroic', Controller.heroic)
  }

}