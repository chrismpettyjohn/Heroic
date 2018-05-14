import Error from '../../../lib/error'
import Database from '../../../sql/interactors/news/categories'
export default class Controller {


  static async create (request, reply) {
    try {
      const data = {
        title         : request.body.title,
      }
      let category = await Database.create(data)
      reply.code(200).send(category)
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async read (request, reply) {
    try {
      if (request.params.id) {
        let category = await Database.read(request.params.id)
        reply.code(200).send(category)
      } else {
        let categories = await Database.read()
        reply.code(200).send(categories)
      }
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async update (request, reply) {
    try {
      const data = {
        id          : request.params.id,
        title       : request.body.title,
      }
      let step = await Database.read(data.id)
      step     = await Database.update(data)
      reply.code(200).send('Category has been updated')
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

  static async delete (request, reply) {
    try {
      let step = await Database.delete(request.params.id)
      reply.code(200).send('Category has been deleted')
    }
    catch (error) {
      new Error(error, request, reply)
    }
  }

}
