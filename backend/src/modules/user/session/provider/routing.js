import Router from '@/http/router'

class Routing {

  static prefix = 'users/session'
  static namespace = '@/modules/user/session/http/controllers'

  static async init () {

    await Router.group({ prefix: Routing.prefix, namespace: Routing.namespace }, router => {
      router.post('create', 'Auth@create')
    })

    await Router.group({ prefix: Routing.prefix, namespace: Routing.namespace, middleware: ['JWT_TOKEN'] }, router => {
      router.get('view', 'Auth@fetch')
    })

    return Promise.resolve()
  }

}

export default Routing