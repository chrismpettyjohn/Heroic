import Database from '@/sql/interactors/camera'
export default class Controller {
  // Fetch photo
  static async read (request, reply) {
    try {
      let camera = await Database.read(request.params.id, request.params.relations)
      reply.code(200).send(camera)
    } catch (e) {
      reply.code(404).send()
    }
  }
}
