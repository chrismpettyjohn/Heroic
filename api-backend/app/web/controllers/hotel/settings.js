import Database from '~/app/sql/interactors/hotel/settings'
import Permission from '~/app/sql/interactors/user/permission'
export default class Settings {
  static async read (request, reply) {
    let settings = await Database.read()
    reply.code(200).send(settings)
  }
  static async update (request, reply) {
    // Check Privilege Level
    await Permission.hasLevel(7, request.user.rank)
    // Save
    await Database.update(request.body)
    // Return
    reply.code(200).send('Changes saved')
  }
}
