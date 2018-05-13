import Error from '../../../lib/error'
import Database from '../../../sql/interactors/hangouts/posts'
export default class Controller {

  static async read (request, reply) {
    try {
      if (request.params.id) {
        let post = await Database.read(request.params.id)
        reply.code(200).send(post)
      } else {
        let posts = await Database.read()
        reply.code(200).send(posts)
      }
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }
}
