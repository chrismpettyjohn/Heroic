import Database from '@/sql/interactors/permission'
export default class Controller {
  // Auth: Create new permission group
  static async authCreate (request, reply) {
    try {
      let permission = await Database.create(request.body.permission)
      reply.code(200).send(permission.id)
    } catch (e) {
      reply.code(500).send(e)
    }
  }

  // Fetch permission
  static async read (request, reply) {
    try {
      let permission = await Database.read(request.params.id, request.params.relations)
      reply.code(200).send(permission)
    } catch (e) {
      reply.code(404).send()
    }
  }

  // Auth: Update permission group
  static async authUpdate (request, reply) {
    try {
      await Database.update(request.body.permission)
      reply.code(200).send()
    } catch (e) {
      reply.code(500).send(e)
    }
  }

  // Auth: Delete permission group
  static async authDelete (request, reply) {
    try {
      await Database.delete(request.body.permission)
      reply.code(200).send()
    } catch (e) {
      reply.code(500).send(e)
    }
  }
}
