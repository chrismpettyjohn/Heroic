import Database from '~/app/sql/interactors/user/permission'
export default class Permission {
  static async read (request, reply) {
    let ranks = await Database.read(request.params.id)
    reply.code(200).send(ranks)
  }

  static async readByType (request, reply) {
    let ranks = await Database.readByType(request.params.type)
    reply.code(200).send(ranks)
  }

  static async findCommand (request, reply) {
    let commands = await Database.findCommand(request.params.command)
    reply.code(200).send(commands)
  }
}
