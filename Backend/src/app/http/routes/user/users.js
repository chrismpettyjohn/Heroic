import Controller from '../../controller/user/users'
export default class Routes {
  constructor(http) {
    // General Access
    http.get('/api/users/user/:username', Controller.read)
    http.get('/api/users/online/:type', Controller.online)
    // Validate Data
    http.post('/api/users/validate', Controller.validate)
    // Authenticated
    http.put('/api/users/user/:username', Controller.create)
    http.patch('/api/auth/users/user/:username', Controller.update)
  }

}