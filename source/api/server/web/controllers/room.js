import Database from '@/sql/interactors/room'
export default class Controller {
  // Fetch room
  static async read (request, reply) {
    try {
      let room = await Database.read(request.params.id, request.params.relations)
      reply.code(200).send(room)
    } catch (e) {
      reply.code(404).send()
    }
  }
}
