import Token from '@/lib/jwt'
import Posts from '@/sql/models/post'
import Friends from '@/sql/models/friend'
import Interactor from '@/sql/interactors/user'
export default class Controller {
  static async read (request, reply) {
    try {
      let user = await Interactor.read(request.session.username)
      reply.code(201).send(user)
    } catch (e) {
      reply.code(400).send(e)
    }
  }
  static async create (request, reply) {
    try {
      // Try Login
      let user = await Interactor.login(request.body.username, request.body.password)
      // Sign Session
      user = Token.sign(user)
      // Return
      reply.code(201).send(user)
    } catch (e) {
      reply.code(400).send(e)
    }
  }

  static async client (request, reply) {
    try {
      let sso = await Interactor.client(request.session.id)
      reply.code(201).send(sso)
    } catch (e) {
      reply.code(400).send(e)
    }
  }

  static async timeline (request, reply) {
    try {
      let friends = []
      let results = await Friends.query().where('user_one_id', request.session.id)
      results.forEach(friend => {
        friends.push(friend.user_two_id)
      })
      let posts = await Posts.query().where('user_id', 'in', friends).eager(`[${request.params.relations}]`).orderBy('id', 'DESC').page(request.params.page, 10)
      console.log(posts)
      reply.code(200).send(posts)
    } catch (e) {
      reply.code(500).send(e)
    }
  }
}
