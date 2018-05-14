import Error from '../../../lib/error'
import Database from '../../../sql/interactors/user/users'
export default class Controller {
  
  static async create (request, reply) {
    try {
      const data = {
        username    : request.body.username,
        password    : request.body.password,
        mail        : request.body.email,
        ip_register : request.ip,
        ip_current  : request.ip
      }
      let user    = await Database.create(data)
      reply.code(200).send(user)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async read (request, reply) {
    try {
      let user = await Database.read(request.params.username ,'username')
      if (user) {
        reply.code(200).send(user)
      } else {
        reply.code(404).send('User not found')
      }
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async update (request, reply) {
    try {
      const data = {
        id     : request.raw.session.id,
        mail   : request.body.email
      }
      let user = await Database.update(data)
      reply.code(200).send('Your changes have been saved')
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async validate (request, reply) {

    switch (request.body.type) {
      case 'username':
      try {
        let check = await Database.validate(request.body.data, 'username', 'query')
        reply.code(200).send(check)
      }
      catch (error) {
        new Error(error, request, reply)
      }
      break;

      case 'email':
        try {
          let check = await Database.validate(request.body.data, 'email', 'query')
          reply.code(200).send(check)
        }
        catch (error) {
          new Error(error, request, reply)
        }
      break;

      case 'password':
        try {
          let check = await Database.validate(request.body.data, 'password')
          reply.code(200).send(check)
        }
        catch (error) {
          new Error(error, request, reply)
        }
      break;

      default:
        reply.code(500).send('That is not a valid data type')
    }

  }

  static async online (request, reply) {
    try {
      if (request.params.type == 'count') {
        let online = await Database.count('online', '1')
        reply.code(200).send(online)
      } else {
        let online = await Database.fetch('online', '1')
        reply.code(200).send(online)
      }
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

}
