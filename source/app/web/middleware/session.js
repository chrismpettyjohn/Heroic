import SessionService from '~/app/services/session'
export default class Session {

  static async handle(request, reply, done) {
    if (request.headers['x-access-token']) {
      try {
        let session = await SessionService.read(request.headers['x-access-token']);
        request.session = session.session;
        request.user = session.user;
        done()
      } catch (error) {
        done('Failed to authenticate user')
      }
    } else {
      done('Failed to authenticate user')
    }
  }

}
