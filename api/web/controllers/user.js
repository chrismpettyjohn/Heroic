import Helper from '@/helpers/user'
import Database from '@/sql/interactors/user'
export default class Controller {
  // Create user through registration
  static async create (request, reply) {
    try {
      // Add IP to User object
      request.body.user.ip = request.raw.clientIp
      // Check for data errors
      await Helper.check(request.body.user)
      // Check for duplicates
      await Helper.duplicates(request.body.user)
      // Database transaction
      await Database.create(request.body.user)
      // Return
      reply.code(200).send()
    } catch (e) {
      reply.code(400).send(e)
    }
  }

  // Find user by username or email
  static async read (request, reply) {
    try {
      let user = await Database.read(request.params.user, request.params.relations)
      reply.code(200).send(user)
    } catch (e) {
      reply.code(404).send()
    }
  }

  // Fetch online users
  static async online (request, reply) {
    try {
       let users = await Database.online()
       reply.code(200).send(users)
    } catch (e) {
      reply.code(400).send()
    }
  }
  
}
