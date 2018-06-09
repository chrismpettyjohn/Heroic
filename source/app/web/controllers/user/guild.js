import Database from '~/app/sql/interactors/user/guild'
export default class Guild {

  static async read(request, reply) {
    let guilds = await Database.read(request.params.id);
    reply.code(200).send(guilds)
  }

}
