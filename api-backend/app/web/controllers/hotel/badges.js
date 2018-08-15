import Database from '~/app/sql/interactors/hotel/badges'
export default class Settings {
  static async read (request, reply) {
    let badge = await Database.read(request.params.code)
    reply.code(200).send(badge)
  }
}
