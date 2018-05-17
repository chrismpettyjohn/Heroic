import Database from '~/app/sql/interactors/cms-settings'
export default class Settings {

  static async read(request, reply) {
    let settings = await Database.read()
    reply.code(200).send(settings)
  }

  static async update(request, reply) {
    await Database.update(request.body.settings)
    reply.code(200)
  }
}
