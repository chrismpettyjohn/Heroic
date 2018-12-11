import Database from '@/modules/user/generic/models/user'

import JWT from '@/lib/jwt'

class Token {

  static async validate (request, response, next) {

    const token = await JWT.read(request.headers.authentication)

    if (token) {
      request.user = await Database.query().findById(token)
      next()
    } else {
      response.status(401)
    }

  }

}

export default Token