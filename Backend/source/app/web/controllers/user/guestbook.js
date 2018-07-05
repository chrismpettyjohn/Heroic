import Database from '~/app/sql/interactors/user/guestbook'
export default class Guestbook {
  static async create (request, reply) {
    await Database.create({
      user_id: request.user.id,
      profile_id: request.body.profile_id,
      content: request.body.content
    })
    reply.code(200).send()
  }
}
