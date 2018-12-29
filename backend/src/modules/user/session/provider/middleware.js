import Router from '@/http/router'

class Middleware {

  static namespace = '@/modules/user/session/http/middleware'

  static async init () {

    Router.register('JWT_TOKEN', '@/modules/user/session/http/middleware/token')

    return Promise.resolve()
  }

}

export default Middleware