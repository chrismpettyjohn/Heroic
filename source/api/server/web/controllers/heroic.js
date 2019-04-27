import Database from '@/sql/interactors/heroic'
export default class Controller {
  // Fetch heroic settings
  static async read (request, reply) {
    try {
      let settings = await Database.read()
      reply.code(200).send(settings)
    } catch (e) {
      reply.code(400).send()
    }
  }
}
