import Database from '~/app/sql/interactors/user/room'
export default class Room {

  static async read(request, reply) {
    let rooms = await Database.read(request.params.id);
    reply.code(200).send(rooms)
  }

}
