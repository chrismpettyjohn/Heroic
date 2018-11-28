import Router from '@/http/router'

class Routing {

  static async init () {

    // Public
    await Router.group({ prefix: 'users', namespace: '@/modules/user/generic/http/controllers' }, router => {
      router.get('view/:id', 'Public@view')
      router.get('list/?id', 'Public@list')
    })

    /* TODO
    // Auth
    await Router.group({ prefix: 'users', namespace: '@/modules/user/generic/http', middleware: ['user_session'] }, {

    })

    // Admin
    await Router.group({ prefix: 'users', namespace: '@/modules/user/generic/http', middleware: ['user-session', 'admin-permission'] }, {

    })
    */

    return Promise.resolve()
  }

}

export default Routing