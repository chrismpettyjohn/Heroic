import Log from '@/app/lib/log'
import Database from '@/app/sql/interactors/user'
export default class Controller {
  // Create user (register)
  static async reate (request, reply) {

  }

  // Fetch user (profile/:username)
  static async read (request, reply) {
    const id = request.params.username
    if (id !== null) {
      try {
        let user = await Database.read(id)
        reply.code(200).send(user)
      } catch (e) {
        if (e === 'MISSING') {
          reply.code(404).send(`The user with the name of ${id} could not be found`)
        } else {
          Log.push('user-controller', `read(${id})`, e)
          reply.code(400).send('An error occured - Please check your logs.')
        }
      }
    } else {
      reply.code(400).send('User paramater (id) is required')
    }
  }

  // Update account (settings)
  static async update (request, reply) {

  }

  // Delete account (settings-delete)
  static async delete (request, reply) {

  }
}
