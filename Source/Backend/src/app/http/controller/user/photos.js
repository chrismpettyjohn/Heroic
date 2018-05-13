import Error from '../../../lib/error'
import Database from '../../../sql/interactors/user/photos'
export default class Controller {

  static async read (request, reply) {
    try {
      if (request.params.id) {
        let photo = await Database.read(request.params.id)
        reply.code(200).send(photo)
      } else {
        let photos = await Database.read()
        reply.code(200).send(photos)
      }
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }
}
