import Database from '~/app/sql/interactors/user/permission'
export default class Permission {

  static async read(request, reply) {
    let ranks = await Database.read();
    reply.code(200).send(ranks)
  }

  static async readByType(request, reply) {
    let ranks = await Database.readByType(request.params.type);
    reply.code(200).send(ranks)
  }

}
