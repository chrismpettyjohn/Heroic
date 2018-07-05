import Database from '~/app/sql/interactors/user/camera'
export default class Camera {
  static async read (request, reply) {
    let pictures = await Database.read(request.params.id)
    reply.code(200).send(pictures)
  }
}
