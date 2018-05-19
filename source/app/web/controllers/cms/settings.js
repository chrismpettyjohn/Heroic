import Permission from '~/app/sql/interactors/user/permission'
import Database from '~/app/sql/interactors/cms/settings'
export default class Settings {

  static async read(request, reply) {
    let settings = await Database.read()
    reply.code(200).send(settings)
  }

  static async update(request, reply) {
    // Check Privilege Level
    await Permission.hasLevel(7, request.user.rank)
    // Update Settings
    await Database.update(request.body)
    // Return
    reply.code(200).send()
  }

}
