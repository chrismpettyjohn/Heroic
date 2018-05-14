import Error from '../../../lib/error'
import Database from '../../../sql/interactors/user/rooms'
export default class Controller {

  static async read (request, reply) {
    try {
      let rooms = await Database.read(request.params.id)
      reply.code(200).send(rooms)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

}
