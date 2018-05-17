import SessionService from '~/app/services/session'
export default class Session {

  static handle(request, reply) {
    return new Promise(async (resolve, reject) => {
      if (request.headers['x-access-token']) {
        request.session = await SessionService.read(request.headers['x-access-token'])
        resolve(request)
      } else {
        reject('Failed to authenticate user')
      }
    })
  }

}
