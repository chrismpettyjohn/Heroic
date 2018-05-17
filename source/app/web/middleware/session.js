import SessionService from '~/app/services/session'
export default class Session {

  static handle(request) {
    return new Promise(async (resolve, reject) => {
      if (request.headers['x-access-token']) {
        let session = await SessionService.read(request.headers['x-access-token'])
        request.session = session.session
        request.user = session.user
        console.log(`Middleware: ${request.session}`)
        resolve(request)
      } else {
        reject('Failed to authenticate user')
      }
    })
  }

}
