import Database from '~/app/sql/interactors/user/guilds'
export default class Guilds {

  static async read(request, reply) {
    let guilds = await Database.read(request.params.id);
    reply.code(200).send(guilds)
  }

}
