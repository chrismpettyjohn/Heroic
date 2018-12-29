import Service from '@/modules/user/session/service/session'

class Auth {

  static async create (request, response) {
    const user = request.body.user
    return Service.create(user.username, user.password)
  }

  static async fetch (request, response) {
    return request.user
  }

}

export default Auth