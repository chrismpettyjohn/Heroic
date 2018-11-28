import { Model } from 'objection'
import Heroic from '@/heroic'
import Knex from 'knex'

class Server {

  static async init () {

    const knex = Knex({
      client: 'mysql2',
      connection: {
        host: Heroic.config.DB_HOST,
        user: Heroic.config.DB_USER,
        password: Heroic.config.DB_PASS,
        database: Heroic.config.DB_NAME
      }
    })

    Model.knex(knex)

    try {
      await Server.test()
      return Promise.resolve('Database connection was successful')
    } catch (e) {
      return Promise.reject(e)
    }

  }

  static async test () {
    const Database = Model.knex()
    try {
      let result = await Database.select('id').from('heroic_settings')
      if (result) {
        return Promise.resolve()
      } else {
        return Promise.reject('heroic_settings is empty')
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }

}

export default Server