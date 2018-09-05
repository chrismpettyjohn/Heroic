import Database from '@/sql/interactors/post'
export default class Controller {
  static async create (request, reply) {
    try {
      let post = request.body.post
      post.user_id = request.session.id
      post = await Database.create(post)
      reply.code(203).send(post)
    } catch (e) {
      reply.code(500).send(e)
    }
  }
  static async read (request, reply) {
    try {
      let post = await Database.read(request.params.id, request.params.relations)
      reply.code(203).send(post)
    } catch (e) {
      reply.code(500).send(e)
    }
  }
  static async update (request, reply) {
    try {
      let post = request.body.post
      post.id = request.params.id
      if (post) {
        await Database.privileges(request.session.id, post.id)
        await Database.update(post)
        reply.code(203).send()
      } else {
        reply.code(403).send('No post content specified')
      }
    } catch (e) {
      reply.code(500).send(e)
    }
  }
  static async delete (request, reply) {
    try {
      if (request.params.id) {
        await Database.privileges(request.session.id, request.params.id)
        await Database.delete(request.params.id)
        reply.code(203).send()
      } else {
        reply.code(403).send('No post content specified')
      }
    } catch (e) {
      reply.code(500).send(e)
    }
  }
}
