import Router from '@/http/router'

class Routing {

  static prefix = 'users'
  static namespace = '@/modules/user/generic/http/controllers'

  static async init () {

    // Public
    await Router.group({ prefix: Routing.prefix, namespace: Routing.namespace }, router => {
      router.post('create', 'Public@create')
      router.get('view/:username', 'Public@view')
      router.get('list/?page', 'Public@list')
    })

    return Promise.resolve()
  }

}

export default Routing