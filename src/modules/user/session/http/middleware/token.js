import Session from '@/modules/user/session/models/session'
import User from '@/modules/user/generic/models/user'

import JWT from '@/lib/jwt'

class Token {

  static async validate (request, response, next) {

    const token = await JWT.read(request.headers.authentication)
    const session = await Session.query().findOne({ jwt_token: request.headers.authentication })

    if (token && session) {

      if (session.status === 'active') {
        request.user = await User.query().findById(token)
        next()
      } else {
        response.status(401).send({ status: session.status })
      }

    } else {
      response.status(401).send({ error: 'No session found' })
    }

  }

}

export default Token