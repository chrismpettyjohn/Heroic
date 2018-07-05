import Validator from 'validatorjs'
import Database from '~/app/sql/interactors/user/user'
export default class Users {
  static async create (request, reply) {
    // Define
    let user = {}
    // Set
    user = {
      username: request.body.username,
      password: request.body.password,
      mail: request.body.mail,
      ip_current: request.raw.clientIp,
      ip_register: request.raw.clientIp,
      account_created: new Date() / 1e3 | 0

    }
    // Create
    await Database.create(user)
    // Return
    reply.code(200).send()
  }

  static async read (request, reply) {
    try {
      let users = await Database.read(request.params.username)
      reply.code(200).send(users)
    } catch (error) {
      reply.code(404).send()
    }
  }

  static async check (request, reply) {
    // Define
    let user = {}
    let validator = {}
    // Attempt
    try {
      if (request.params.type === 'username') {
        // Validate
        validator = new Validator({ username: request.params.user }, { username: 'required|min:1|max:10|alpha_num' })
        // Check
        if (validator.passes()) {
          user = await Database.check('username', request.params.user)
          reply.code(200).send(user)
        } else {
          reply.code(400).send('Failed validation')
        }
      } else if (request.params.type === 'mail') {
        // Validate
        validator = new Validator({ mail: request.params.user }, { mail: 'required|min:5|max:20|email' })
        // Check
        if (validator.passes()) {
          user = await Database.check('mail', request.params.user)
          reply.code(200).send(user)
        } else {
          reply.code(400).send('Failed validation')
        }
      } else {
        reply.code(400).send('Invalid paramaters')
      }
    } catch (error) {
      reply.code(400).send('That username or email is being used')
    }
  }
}
