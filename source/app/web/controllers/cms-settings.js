import Permission from '~/app/sql/interactors/permission'
import Database from '~/app/sql/interactors/cms-settings'
export default class Settings {

  static async read(request, reply) {
    let settings = await Database.read();
    reply.code(200).send(settings)
  }

  static async update(request, reply) {
    await Database.hasLevel(7, request.user.rank);
    await Database.update(request.body);
    reply.code(200).send()
  }
}
