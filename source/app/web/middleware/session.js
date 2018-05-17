import SessionService from '~/app/services/session'
export default class Session {

  static async handle(request, reply, next) {
    if (request.headers['x-access-token']) {
      request.session = SessionService.read(request.headers['x-access-token'])
      next()
    } else {
      next()
    }
  }

}
