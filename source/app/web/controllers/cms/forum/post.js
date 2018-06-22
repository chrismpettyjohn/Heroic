import Interactor from '~/app/sql/interactors/cms/forum/post'
export default class Post {
  static async create (request, reply) {
    // Define
    let post = {}
    // Handle
    if (request.body.section_id) {
      // Topic
      post = {
        section_id: request.body.section_id,
        user_id: request.user.id,
        title: request.body.title,
        content: request.body.content
      }
      console.log('Topic')
    } else {
      // Reply
      console.log('Reply')
      post = {
        user_id: request.user.id,
        topic_id: request.body.topic_id,
        content: request.body.content
      }
    }
    console.log(post)
    // Create
    post = await Interactor.create(post)
    // Return
    reply.code(200).send()
  }

  static async read (request, reply) {
    let post = await Interactor.read(request.params.id)
    reply.code(200).send(post)
  }

  static async update (request, reply) {}

  static async delete (request, reply) {}
}
